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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const content_service_1 = require("./content.service");
const rss_service_1 = require("./rss.service");
const trend_service_1 = require("./src/services/trend.service");
const ai_service_1 = require("./src/services/ai.service");
const dto_1 = require("./dto");
let ContentController = class ContentController {
    constructor(contentService, rssService, trendService, contentAiService) {
        this.contentService = contentService;
        this.rssService = rssService;
        this.trendService = trendService;
        this.contentAiService = contentAiService;
    }
    listArticles(page, limit, category, tag, search, q, sort) {
        return this.contentService.listArticles({
            page,
            limit: Math.min(limit, 50),
            category,
            tag,
            search: search ?? q,
            sort: sort ?? 'latest',
        });
    }
    searchArticles(page, limit, q, search, category) {
        return this.contentService.listArticles({
            page,
            limit: Math.min(limit, 50),
            search: q ?? search,
            category,
            sort: 'latest',
        });
    }
    getTrendingArticles(limit, category) {
        return this.contentService.getTrending(Math.min(limit, 20), category);
    }
    getTrendingFlat(limit, category) {
        return this.contentService.getTrending(Math.min(limit, 20), category);
    }
    getFeatured() {
        return this.contentService.getFeatured();
    }
    getCategories() {
        return this.contentService.getCategories();
    }
    getArticlesCategories() {
        return this.contentService.getCategories();
    }
    async generateAIPost(dto, user) {
        const generated = await this.contentAiService.generateArticle({
            ...dto,
            userId: user.id,
        });
        return { data: generated };
    }
    async getTrends() {
        const trends = await this.trendService.getTrendingTechUpdates();
        return { data: trends };
    }
    getArticle(slug) {
        return this.contentService.getArticleBySlug(slug);
    }
    createArticle(dto, user) {
        return this.contentService.createArticle(dto, user.id);
    }
    updateArticle(id, dto, user) {
        return this.contentService.updateArticle(id, dto, user.id, user.role);
    }
    deleteArticle(id, user) {
        return this.contentService.deleteArticle(id, user.id, user.role);
    }
    publishArticle(id, user) {
        return this.contentService.publishArticle(id, user.id, user.role);
    }
    archiveArticle(id, user) {
        return this.contentService.archiveArticle(id, user.id, user.role);
    }
    async triggerVideoFactory(id, _user) {
        const article = await this.contentService.getArticleById(id);
        return {
            data: {
                queued: true,
                articleId: id,
                slug: article.slug,
                message: 'Video generation queued — coming soon',
            },
        };
    }
    react(postId, dto, user) {
        return this.contentService.toggleReaction(postId, user.id, dto.type);
    }
    trackView(slug) {
        return this.contentService.incrementView(slug);
    }
    getComments(postId, page, limit) {
        return this.contentService.getComments(postId, page, limit);
    }
    addComment(postId, dto, user) {
        return this.contentService.addComment(postId, dto, user);
    }
    deleteComment(commentId, user) {
        return this.contentService.deleteComment(commentId, user.id, user.role);
    }
    reactToComment(commentId, reaction, user) {
        return this.contentService.reactToComment(commentId, user.id, reaction);
    }
    myArticles(user, page, status) {
        return this.contentService.getCreatorArticles(user.id, page, status);
    }
    creatorStats(user) {
        return this.contentService.getCreatorStats(user.id);
    }
    meStats(user) {
        return this.contentService.getCreatorStats(user.id);
    }
    featureArticle(id) {
        return this.contentService.toggleFeatured(id);
    }
    flagComment(id) {
        return this.contentService.flagComment(id);
    }
    getRssFeed() {
        return this.rssService.generateMainFeed();
    }
    getCategoryFeed(category) {
        return this.rssService.generateCategoryFeed(category);
    }
};
exports.ContentController = ContentController;
__decorate([
    (0, common_1.Get)('articles'),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(12), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('category')),
    __param(3, (0, common_1.Query)('tag')),
    __param(4, (0, common_1.Query)('search')),
    __param(5, (0, common_1.Query)('q')),
    __param(6, (0, common_1.Query)('sort')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "listArticles", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(12), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('q')),
    __param(3, (0, common_1.Query)('search')),
    __param(4, (0, common_1.Query)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, String]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "searchArticles", null);
__decorate([
    (0, common_1.Get)('articles/trending'),
    __param(0, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "getTrendingArticles", null);
__decorate([
    (0, common_1.Get)('trending'),
    __param(0, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "getTrendingFlat", null);
__decorate([
    (0, common_1.Get)('articles/featured'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "getFeatured", null);
__decorate([
    (0, common_1.Get)('categories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "getCategories", null);
__decorate([
    (0, common_1.Get)('articles/categories'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "getArticlesCategories", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('articles/generate-ai'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ContentController.prototype, "generateAIPost", null);
__decorate([
    (0, common_1.Get)('articles/trends'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContentController.prototype, "getTrends", null);
__decorate([
    (0, common_1.Get)('articles/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "getArticle", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('articles'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreatePostDto, Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "createArticle", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('articles/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdatePostDto, Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "updateArticle", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('articles/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "deleteArticle", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('articles/:id/publish'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "publishArticle", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('articles/:id/archive'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "archiveArticle", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('articles/:id/video-factory'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ContentController.prototype, "triggerVideoFactory", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('articles/:id/react'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.ReactToPostDto, Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "react", null);
__decorate([
    (0, common_1.Post)('articles/:slug/view'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "trackView", null);
__decorate([
    (0, common_1.Get)('articles/:id/comments'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(20), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "getComments", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('articles/:id/comments'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.CreateCommentDto, Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "addComment", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('comments/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "deleteComment", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('comments/:id/react'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('reaction')),
    __param(2, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "reactToComment", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('creator/my-articles'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, String]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "myArticles", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('creator/stats'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "creatorStats", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('me/stats'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "meStats", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'super_admin'),
    (0, common_1.Patch)('articles/:id/feature'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "featureArticle", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'super_admin'),
    (0, common_1.Patch)('comments/:id/flag'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "flagComment", null);
__decorate([
    (0, common_1.Get)('rss'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "getRssFeed", null);
__decorate([
    (0, common_1.Get)('rss/:category'),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "getCategoryFeed", null);
exports.ContentController = ContentController = __decorate([
    (0, common_1.Controller)('amebogist'),
    __metadata("design:paramtypes", [content_service_1.ContentService,
        rss_service_1.RssService,
        trend_service_1.TrendService,
        ai_service_1.ContentAiService])
], ContentController);
//# sourceMappingURL=content.controller.js.map