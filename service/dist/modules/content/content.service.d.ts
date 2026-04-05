import { Model, Types } from 'mongoose';
import { Queue } from 'bullmq';
import { IPost } from './schemas/post.schema';
import { IComment } from './schemas/comment.schema';
import { ICreatorStats } from './schemas/creator-stats.schema';
import { IReaction } from './schemas/reaction.schema';
import { CreatePostDto, UpdatePostDto, CreateCommentDto } from './dto/index';
import { RedisService } from '../../database/redis.service';
export interface CommentAuthor {
    id: string;
    name: string;
    avatar?: string;
    isAuthor: boolean;
}
export interface CommentReactions {
    like: number;
    love: number;
    laugh: number;
    angry: number;
}
export interface CommentDto {
    _id: string;
    postId: string;
    parentId?: string;
    user: CommentAuthor;
    content: string;
    language: 'pidgin' | 'english' | 'yoruba';
    reactions: CommentReactions;
    isEdited: boolean;
    editedAt?: Date;
    isFlagged: boolean;
    createdAt: Date;
    updatedAt: Date;
    replies: CommentDto[];
}
export interface PaginatedComments {
    data: CommentDto[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}
export interface ReactToCommentResult {
    _id: string;
    reactions: CommentReactions;
}
export declare class ContentService {
    private readonly postModel;
    private readonly commentModel;
    private readonly creatorStatsModel;
    private readonly reactionModel;
    private readonly contentQueue;
    private readonly redis;
    private readonly logger;
    constructor(postModel: Model<IPost>, commentModel: Model<IComment>, creatorStatsModel: Model<ICreatorStats>, reactionModel: Model<IReaction>, contentQueue: Queue, redis: RedisService);
    listArticles(params: {
        page: number;
        limit: number;
        category?: string;
        tag?: string;
        search?: string;
        sort: 'latest' | 'trending' | 'featured';
    }): Promise<any>;
    getArticleBySlug(slug: string): Promise<IPost>;
    getArticleById(id: string): Promise<IPost>;
    getTrending(limit: number, category?: string): Promise<any>;
    getFeatured(): Promise<any>;
    getCategories(): Promise<Array<{
        category: string;
        count: number;
    }>>;
    createArticle(dto: CreatePostDto, userId: string): Promise<IPost>;
    updateArticle(id: string, dto: UpdatePostDto, userId: string, userRole: string): Promise<IPost>;
    publishArticle(id: string, userId: string, userRole: string): Promise<import("mongoose").Document<unknown, {}, IPost, {}, {}> & IPost & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }>;
    archiveArticle(id: string, userId: string, userRole: string): Promise<void>;
    deleteArticle(id: string, userId: string, userRole: string): Promise<void>;
    toggleReaction(postId: string, userId: string, type: 'like' | 'love' | 'laugh' | 'fire' | 'sad' | 'angry'): Promise<{
        reacted: boolean;
        type?: undefined;
    } | {
        reacted: boolean;
        type: "like" | "love" | "laugh" | "fire" | "sad" | "angry";
    }>;
    incrementView(slug: string): Promise<void>;
    getComments(postId: string, page: number, limit: number): Promise<PaginatedComments>;
    addComment(postId: string, dto: CreateCommentDto, user: {
        id: string;
        profile: {
            displayName: string;
            avatarUrl?: string;
        };
    }): Promise<import("mongoose").Document<unknown, {}, IComment, {}, {}> & IComment & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }>;
    deleteComment(commentId: string, userId: string, userRole: string): Promise<void>;
    reactToComment(commentId: string, userId: string, reaction: 'like' | 'dislike' | 'love'): Promise<ReactToCommentResult>;
    flagComment(commentId: string): Promise<import("mongoose").Document<unknown, {}, IComment, {}, {}> & IComment & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }>;
    getCreatorArticles(userId: string, page: number, status?: string): Promise<{
        data: IPost[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    getCreatorStats(userId: string): Promise<{
        stats: import("mongoose").FlattenMaps<ICreatorStats> & Required<{
            _id: Types.ObjectId;
        }> & {
            __v: number;
        };
        recentArticles: IPost[];
    }>;
    toggleFeatured(id: string): Promise<{
        featured: boolean;
    }>;
    private toCommentDto;
    private assertOwnerOrAdmin;
    private generateUniqueSlug;
    private calculateReadingTime;
    private bustArticleCache;
    private updateCreatorStats;
}
