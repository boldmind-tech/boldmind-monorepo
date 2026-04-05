"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ContentService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const bullmq_1 = require("@nestjs/bullmq");
const mongoose_2 = require("mongoose");
const bullmq_2 = require("bullmq");
const slug_util_1 = require("../../common/utils/slug.util");
const redis_service_1 = require("../../database/redis.service");
const CACHE_TTL = 300;
const TRENDING_CACHE_TTL = 600;
let ContentService = ContentService_1 = class ContentService {
    constructor(postModel, commentModel, creatorStatsModel, reactionModel, contentQueue, redis) {
        this.postModel = postModel;
        this.commentModel = commentModel;
        this.creatorStatsModel = creatorStatsModel;
        this.reactionModel = reactionModel;
        this.contentQueue = contentQueue;
        this.redis = redis;
        this.logger = new common_1.Logger(ContentService_1.name);
    }
    async listArticles(params) {
        const cacheKey = `articles:list:${JSON.stringify(params)}`;
        const cached = await this.redis.get(cacheKey);
        if (cached)
            return JSON.parse(cached);
        const filter = { status: 'published' };
        if (params.category)
            filter['category'] = params.category;
        if (params.tag)
            filter['tags'] = params.tag.toLowerCase();
        if (params.search)
            filter['$text'] = { $search: params.search };
        let sortQuery = { publishedAt: -1 };
        if (params.sort === 'trending')
            sortQuery = { 'engagement.views': -1, publishedAt: -1 };
        if (params.sort === 'featured') {
            filter['isFeatured'] = true;
            sortQuery = { publishedAt: -1 };
        }
        const skip = (params.page - 1) * params.limit;
        const [articles, total] = await Promise.all([
            this.postModel
                .find(filter)
                .select('slug title excerpt category tags author.name author.avatar author.isVerified ' +
                'media.featuredImage engagement.views engagement.likes engagement.readingTime ' +
                'isFeatured publishedAt')
                .sort(sortQuery)
                .skip(skip)
                .limit(params.limit)
                .lean(),
            this.postModel.countDocuments(filter),
        ]);
        const result = {
            data: articles,
            meta: {
                total,
                page: params.page,
                limit: params.limit,
                totalPages: Math.ceil(total / params.limit),
                hasNextPage: skip + articles.length < total,
            },
        };
        await this.redis.setex(cacheKey, CACHE_TTL, JSON.stringify(result));
        return result;
    }
    async getArticleBySlug(slug) {
        const cacheKey = `article:slug:${slug}`;
        const cached = await this.redis.get(cacheKey);
        if (cached)
            return JSON.parse(cached);
        const article = await this.postModel
            .findOne({ slug, status: 'published' })
            .lean();
        if (!article)
            throw new common_1.NotFoundException(`Article "${slug}" not found`);
        await this.redis.setex(cacheKey, CACHE_TTL, JSON.stringify(article));
        return article;
    }
    async getArticleById(id) {
        const article = await this.postModel.findById(id).lean();
        if (!article)
            throw new common_1.NotFoundException('Article not found');
        return article;
    }
    async getTrending(limit, category) {
        const cacheKey = `articles:trending:${limit}:${category ?? 'all'}`;
        const cached = await this.redis.get(cacheKey);
        if (cached)
            return JSON.parse(cached);
        const filter = {
            status: 'published',
            publishedAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
        };
        if (category)
            filter['category'] = category;
        const articles = await this.postModel
            .find(filter)
            .select('slug title excerpt category media.featuredImage engagement author.name publishedAt')
            .sort({ 'engagement.views': -1, 'engagement.likes': -1 })
            .limit(limit)
            .lean();
        await this.redis.setex(cacheKey, TRENDING_CACHE_TTL, JSON.stringify(articles));
        return articles;
    }
    async getFeatured() {
        const cacheKey = 'articles:featured';
        const cached = await this.redis.get(cacheKey);
        if (cached)
            return JSON.parse(cached);
        const articles = await this.postModel
            .find({ status: 'published', isFeatured: true })
            .select('slug title excerpt category media.featuredImage engagement author publishedAt')
            .sort({ publishedAt: -1 })
            .limit(6)
            .lean();
        await this.redis.setex(cacheKey, CACHE_TTL, JSON.stringify(articles));
        return articles;
    }
    async getCategories() {
        const cacheKey = 'articles:categories';
        const cached = await this.redis.get(cacheKey);
        if (cached)
            return JSON.parse(cached);
        const categories = await this.postModel.aggregate([
            { $match: { status: 'published' } },
            { $group: { _id: '$category', count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $project: { _id: 0, category: '$_id', count: 1 } },
        ]);
        await this.redis.setex(cacheKey, 3600, JSON.stringify(categories));
        return categories;
    }
    async createArticle(dto, userId) {
        const slug = await this.generateUniqueSlug(dto.title);
        const readingTime = this.calculateReadingTime(dto.content.pidgin);
        const article = await this.postModel.create({
            ...dto,
            slug,
            author: { id: userId, name: dto.authorName ?? 'BoldMind Team', isVerified: false },
            engagement: { views: 0, likes: 0, shares: 0, commentsCount: 0, readingTime },
            status: 'draft',
        });
        await this.contentQueue.add('generate-seo', { articleId: article._id.toString(), title: dto.title, excerpt: dto.excerpt }, { delay: 2000, attempts: 3 });
        return article;
    }
    async updateArticle(id, dto, userId, userRole) {
        const article = await this.getArticleById(id);
        this.assertOwnerOrAdmin(article.author.id, userId, userRole);
        const updated = await this.postModel
            .findByIdAndUpdate(id, { $set: dto }, { new: true })
            .lean();
        if (!updated)
            throw new common_1.NotFoundException('Article not found after update');
        await this.bustArticleCache(article.slug);
        return updated;
    }
    async publishArticle(id, userId, userRole) {
        const article = await this.getArticleById(id);
        this.assertOwnerOrAdmin(article.author.id, userId, userRole);
        if (article.status === 'published')
            throw new common_1.BadRequestException('Already published');
        const updated = await this.postModel.findByIdAndUpdate(id, { $set: { status: 'published', publishedAt: new Date() } }, { new: true });
        await Promise.all([
            this.contentQueue.add('distribute-social', { articleId: id, slug: article.slug }, { attempts: 3, backoff: { type: 'exponential', delay: 5000 } }),
            this.updateCreatorStats(article.author.id, 'publish'),
            this.bustArticleCache(article.slug),
        ]);
        return updated;
    }
    async archiveArticle(id, userId, userRole) {
        const article = await this.getArticleById(id);
        this.assertOwnerOrAdmin(article.author.id, userId, userRole);
        await this.postModel.findByIdAndUpdate(id, { $set: { status: 'archived' } });
        await this.bustArticleCache(article.slug);
    }
    async deleteArticle(id, userId, userRole) {
        const article = await this.getArticleById(id);
        this.assertOwnerOrAdmin(article.author.id, userId, userRole);
        await Promise.all([
            this.postModel.findByIdAndDelete(id),
            this.commentModel.deleteMany({ postId: new mongoose_2.Types.ObjectId(id) }),
            this.reactionModel.deleteMany({ postId: new mongoose_2.Types.ObjectId(id) }),
        ]);
        await this.bustArticleCache(article.slug);
    }
    async toggleReaction(postId, userId, type) {
        const postObjectId = new mongoose_2.Types.ObjectId(postId);
        const existing = await this.reactionModel.findOne({ postId: postObjectId, userId });
        if (existing) {
            if (existing.type === type) {
                await existing.deleteOne();
                await this.postModel.findByIdAndUpdate(postId, { $inc: { 'engagement.likes': -1 } });
                return { reacted: false };
            }
            existing.type = type;
            await existing.save();
            return { reacted: true, type };
        }
        await this.reactionModel.create({ postId: postObjectId, userId, type });
        await this.postModel.findByIdAndUpdate(postId, { $inc: { 'engagement.likes': 1 } });
        return { reacted: true, type };
    }
    async incrementView(slug) {
        await this.postModel.updateOne({ slug, status: 'published' }, { $inc: { 'engagement.views': 1 } });
    }
    async getComments(postId, page, limit) {
        const postObjectId = new mongoose_2.Types.ObjectId(postId);
        const skip = (page - 1) * limit;
        const [rawComments, total] = await Promise.all([
            this.commentModel
                .find({ postId: postObjectId, parentId: null, isFlagged: false })
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .lean(),
            this.commentModel.countDocuments({ postId: postObjectId, parentId: null }),
        ]);
        const commentIds = rawComments.map((c) => c._id);
        const rawReplies = await this.commentModel
            .find({ parentId: { $in: commentIds }, isFlagged: false })
            .sort({ createdAt: 1 })
            .lean();
        const replyMap = new Map();
        for (const r of rawReplies) {
            const raw = r;
            const key = raw.parentId.toString();
            if (!replyMap.has(key))
                replyMap.set(key, []);
            replyMap.get(key).push(this.toCommentDto(r, []));
        }
        const data = rawComments.map((c) => {
            const raw = c;
            return this.toCommentDto(c, replyMap.get(raw._id.toString()) ?? []);
        });
        return { data, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
    }
    async addComment(postId, dto, user) {
        const article = await this.postModel.findById(postId).select('_id author.id').lean();
        if (!article)
            throw new common_1.NotFoundException('Article not found');
        const comment = await this.commentModel.create({
            postId: new mongoose_2.Types.ObjectId(postId),
            parentId: dto.parentId ? new mongoose_2.Types.ObjectId(dto.parentId) : undefined,
            user: {
                id: user.id,
                name: user.profile.displayName,
                avatar: user.profile.avatarUrl,
                isAuthor: article.author.id === user.id,
            },
            content: dto.content,
            language: dto.language ?? 'pidgin',
        });
        await this.postModel.findByIdAndUpdate(postId, { $inc: { 'engagement.commentsCount': 1 } });
        return comment;
    }
    async deleteComment(commentId, userId, userRole) {
        const comment = await this.commentModel.findById(commentId);
        if (!comment)
            throw new common_1.NotFoundException('Comment not found');
        this.assertOwnerOrAdmin(comment.user.id, userId, userRole);
        await comment.deleteOne();
        await this.postModel.findByIdAndUpdate(comment.postId, {
            $inc: { 'engagement.commentsCount': -1 },
        });
    }
    async reactToComment(commentId, userId, reaction) {
        const field = (reaction === 'dislike' ? 'angry' : reaction);
        const comment = await this.commentModel.findById(commentId);
        if (!comment)
            throw new common_1.NotFoundException('Comment not found');
        const prevField = comment.userReactions?.get(userId);
        let incUpdate;
        let trackingUpdate;
        if (prevField === field) {
            incUpdate = { [`reactions.${field}`]: -1 };
            trackingUpdate = { $unset: { [`userReactions.${userId}`]: '' } };
        }
        else {
            if (prevField) {
                incUpdate = { [`reactions.${field}`]: 1, [`reactions.${prevField}`]: -1 };
            }
            else {
                incUpdate = { [`reactions.${field}`]: 1 };
            }
            trackingUpdate = { $set: { [`userReactions.${userId}`]: field } };
        }
        const updated = await this.commentModel
            .findByIdAndUpdate(commentId, { $inc: incUpdate, ...trackingUpdate }, { new: true })
            .lean();
        if (!updated)
            throw new common_1.NotFoundException('Comment not found after update');
        const raw = updated;
        return { _id: raw._id.toString(), reactions: raw.reactions };
    }
    async flagComment(commentId) {
        return this.commentModel.findByIdAndUpdate(commentId, { $set: { isFlagged: true } }, { new: true });
    }
    async getCreatorArticles(userId, page, status) {
        const filter = { 'author.id': userId };
        if (status)
            filter['status'] = status;
        const limit = 20;
        const skip = (page - 1) * limit;
        const [articles, total] = await Promise.all([
            this.postModel
                .find(filter)
                .select('slug title status category engagement publishedAt createdAt')
                .sort({ updatedAt: -1 })
                .skip(skip)
                .limit(limit)
                .lean(),
            this.postModel.countDocuments(filter),
        ]);
        return { data: articles, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
    }
    async getCreatorStats(userId) {
        const [stats, recentArticles] = await Promise.all([
            this.creatorStatsModel.findOne({ userId }).lean(),
            this.postModel
                .find({ 'author.id': userId, status: 'published' })
                .select('title engagement.views engagement.likes publishedAt')
                .sort({ publishedAt: -1 })
                .limit(5)
                .lean(),
        ]);
        return { stats, recentArticles };
    }
    async toggleFeatured(id) {
        const article = await this.postModel.findById(id);
        if (!article)
            throw new common_1.NotFoundException('Article not found');
        article.isFeatured = !article.isFeatured;
        await article.save();
        await this.bustArticleCache(article.slug);
        return { featured: article.isFeatured };
    }
    toCommentDto(raw, replies) {
        const r = raw;
        return {
            _id: r._id.toString(),
            postId: r.postId.toString(),
            parentId: r.parentId?.toString(),
            user: r.user,
            content: r.content,
            language: r.language,
            reactions: r.reactions ?? { like: 0, love: 0, laugh: 0, angry: 0 },
            isEdited: r.isEdited ?? false,
            editedAt: r.editedAt,
            isFlagged: r.isFlagged ?? false,
            createdAt: r.createdAt,
            updatedAt: r.updatedAt,
            replies,
        };
    }
    assertOwnerOrAdmin(ownerId, requesterId, role) {
        if (ownerId !== requesterId && !['admin', 'super_admin'].includes(role)) {
            throw new common_1.ForbiddenException('You do not have permission to modify this resource');
        }
    }
    async generateUniqueSlug(title) {
        let slug = (0, slug_util_1.generateSlug)(title);
        let suffix = 0;
        while (await this.postModel.exists({ slug })) {
            slug = `${(0, slug_util_1.generateSlug)(title)}-${++suffix}`;
        }
        return slug;
    }
    calculateReadingTime(text) {
        return Math.max(1, Math.ceil(text.trim().split(/\s+/).length / 200));
    }
    async bustArticleCache(slug) {
        const ops = [
            this.redis.del(`article:slug:${slug}`),
            this.redis.del('articles:featured'),
            this.redis.del('articles:categories'),
        ];
        if (typeof this.redis.delPattern === 'function') {
            ops.push(this.redis.delPattern('articles:trending:*'), this.redis.delPattern('articles:list:*'));
        }
        await Promise.all(ops);
    }
    async updateCreatorStats(userId, event) {
        if (event === 'publish') {
            await this.creatorStatsModel.findOneAndUpdate({ userId }, { $inc: { totalArticles: 1 }, $set: { lastPublishedAt: new Date() } }, { upsert: true });
        }
    }
};
exports.ContentService = ContentService;
exports.ContentService = ContentService = ContentService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Post')),
    __param(1, (0, mongoose_1.InjectModel)('Comment')),
    __param(2, (0, mongoose_1.InjectModel)('CreatorStats')),
    __param(3, (0, mongoose_1.InjectModel)('Reaction')),
    __param(4, (0, bullmq_1.InjectQueue)('content')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        bullmq_2.Queue,
        redis_service_1.RedisService])
], ContentService);
//# sourceMappingURL=content.service.js.map