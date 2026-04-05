import { ContentService } from './content.service';
import { RssService } from './rss.service';
import { TrendService } from './src/services/trend.service';
import { ContentAiService, GenerateArticleOptions } from './src/services/ai.service';
import { CreatePostDto, UpdatePostDto, CreateCommentDto, ReactToPostDto } from './dto';
export declare class ContentController {
    private readonly contentService;
    private readonly rssService;
    private readonly trendService;
    private readonly contentAiService;
    constructor(contentService: ContentService, rssService: RssService, trendService: TrendService, contentAiService: ContentAiService);
    listArticles(page: number, limit: number, category?: string, tag?: string, search?: string, q?: string, sort?: 'latest' | 'trending' | 'featured'): Promise<any>;
    searchArticles(page: number, limit: number, q?: string, search?: string, category?: string): Promise<any>;
    getTrendingArticles(limit: number, category?: string): Promise<any>;
    getTrendingFlat(limit: number, category?: string): Promise<any>;
    getFeatured(): Promise<any>;
    getCategories(): Promise<{
        category: string;
        count: number;
    }[]>;
    getArticlesCategories(): Promise<{
        category: string;
        count: number;
    }[]>;
    generateAIPost(dto: GenerateArticleOptions, user: {
        id: string;
    }): Promise<{
        data: import("./src/services/ai.service").GeneratedArticle;
    }>;
    getTrends(): Promise<{
        data: import("./src/services/trend.service").TrendAlert[];
    }>;
    getArticle(slug: string): Promise<import("./schemas/post.schema").IPost>;
    createArticle(dto: CreatePostDto, user: {
        id: string;
        role: string;
    }): Promise<import("./schemas/post.schema").IPost>;
    updateArticle(id: string, dto: UpdatePostDto, user: {
        id: string;
        role: string;
    }): Promise<import("./schemas/post.schema").IPost>;
    deleteArticle(id: string, user: {
        id: string;
        role: string;
    }): Promise<void>;
    publishArticle(id: string, user: {
        id: string;
        role: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("./schemas/post.schema").IPost, {}, {}> & import("./schemas/post.schema").IPost & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    archiveArticle(id: string, user: {
        id: string;
        role: string;
    }): Promise<void>;
    triggerVideoFactory(id: string, _user: {
        id: string;
    }): Promise<{
        data: {
            queued: boolean;
            articleId: string;
            slug: string;
            message: string;
        };
    }>;
    react(postId: string, dto: ReactToPostDto, user: {
        id: string;
    }): Promise<{
        reacted: boolean;
        type?: undefined;
    } | {
        reacted: boolean;
        type: "like" | "love" | "laugh" | "fire" | "sad" | "angry";
    }>;
    trackView(slug: string): Promise<void>;
    getComments(postId: string, page: number, limit: number): Promise<import("./content.service").PaginatedComments>;
    addComment(postId: string, dto: CreateCommentDto, user: {
        id: string;
        profile: {
            displayName: string;
            avatarUrl?: string;
        };
    }): Promise<import("mongoose").Document<unknown, {}, import("./schemas/comment.schema").IComment, {}, {}> & import("./schemas/comment.schema").IComment & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    deleteComment(commentId: string, user: {
        id: string;
        role: string;
    }): Promise<void>;
    reactToComment(commentId: string, reaction: 'like' | 'dislike' | 'love', user: {
        id: string;
    }): Promise<import("./content.service").ReactToCommentResult>;
    myArticles(user: {
        id: string;
    }, page: number, status?: 'draft' | 'published' | 'archived'): Promise<{
        data: import("./schemas/post.schema").IPost[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    creatorStats(user: {
        id: string;
    }): Promise<{
        stats: import("mongoose").FlattenMaps<import("./schemas/creator-stats.schema").ICreatorStats> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
        recentArticles: import("./schemas/post.schema").IPost[];
    }>;
    meStats(user: {
        id: string;
    }): Promise<{
        stats: import("mongoose").FlattenMaps<import("./schemas/creator-stats.schema").ICreatorStats> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        };
        recentArticles: import("./schemas/post.schema").IPost[];
    }>;
    featureArticle(id: string): Promise<{
        featured: boolean;
    }>;
    flagComment(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/comment.schema").IComment, {}, {}> & import("./schemas/comment.schema").IComment & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    getRssFeed(): Promise<string>;
    getCategoryFeed(category: string): Promise<string>;
}
