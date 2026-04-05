import mongoose, { Document, Types } from 'mongoose';
export type SocialPlatform = 'instagram' | 'facebook' | 'twitter_x' | 'tiktok' | 'linkedin' | 'youtube';
export interface ISocialPost extends Document {
    userId: string;
    accountConnectionId?: Types.ObjectId;
    calendarId?: Types.ObjectId;
    platform: SocialPlatform;
    caption: string;
    hashtags: string[];
    mediaUrls: string[];
    mediaType: 'image' | 'video' | 'carousel' | 'reel' | 'story' | 'text';
    status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed' | 'cancelled';
    scheduledFor?: Date;
    publishedAt?: Date;
    platformPostId?: string;
    platformUrl?: string;
    n8nWorkflowId?: string;
    isAIGenerated: boolean;
    generationPrompt?: string;
    brandVoice?: string;
    engagementStats?: {
        likes: number;
        comments: number;
        shares: number;
        reach: number;
        impressions: number;
        savedCount: number;
        fetchedAt: Date;
    };
    errorMessage?: string;
    retryCount: number;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const SocialPost: mongoose.Model<ISocialPost, {}, {}, {}, mongoose.Document<unknown, {}, ISocialPost, {}, {}> & ISocialPost & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
export interface IContentCalendar extends Document {
    userId: string;
    name: string;
    description?: string;
    platforms: SocialPlatform[];
    brandVoice?: string;
    contentPillars: string[];
    postingFrequency: Record<SocialPlatform, number>;
    colorCode: string;
    isActive: boolean;
    totalPosts: number;
    publishedPosts: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const ContentCalendar: mongoose.Model<IContentCalendar, {}, {}, {}, mongoose.Document<unknown, {}, IContentCalendar, {}, {}> & IContentCalendar & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
export interface IAccountConnection extends Document {
    userId: string;
    platform: SocialPlatform;
    accountId: string;
    accountName: string;
    accountAvatar?: string;
    accessToken: string;
    refreshToken?: string;
    tokenExpiresAt?: Date;
    scope: string[];
    isActive: boolean;
    lastSyncAt?: Date;
    followerCount?: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const AccountConnection: mongoose.Model<IAccountConnection, {}, {}, {}, mongoose.Document<unknown, {}, IAccountConnection, {}, {}> & IAccountConnection & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
