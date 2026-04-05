import mongoose, { Document } from 'mongoose';
interface IAuthor {
    id: string;
    name: string;
    avatar?: string;
    isVerified: boolean;
}
interface IMedia {
    featuredImage?: string;
    gallery: string[];
    videoUrl?: string;
}
interface IEngagement {
    views: number;
    likes: number;
    shares: number;
    commentsCount: number;
    readingTime: number;
}
interface ISEO {
    metaTitle?: string;
    metaDescription?: string;
    keywords: string[];
    ogImage?: string;
}
interface IAffiliateLink {
    text: string;
    url: string;
    clicks: number;
}
interface IMonetization {
    hasAds: boolean;
    affiliateLinks: IAffiliateLink[];
    sponsored: boolean;
}
export interface IPost extends Document {
    slug: string;
    title: string;
    content: {
        pidgin: string;
        english?: string;
        yoruba?: string;
        igbo?: string;
        hausa?: string;
    };
    excerpt: string;
    category: string;
    subcategory?: string;
    tags: string[];
    author: IAuthor;
    media: IMedia;
    engagement: IEngagement;
    seo: ISEO;
    monetization: IMonetization;
    aiMetadata?: {
        sourceTrend?: string;
        sourcePlatform?: string;
        promptUsed?: string;
    };
    distributionStatus?: {
        socialShared: boolean;
        videoConverted: boolean;
        factoryJobId?: string;
    };
    status: 'draft' | 'published' | 'archived';
    isFeatured: boolean;
    source: 'manual' | 'ai' | 'imported';
    editorialNote?: string;
    publishedAt?: Date;
    scheduledFor?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const PostSchema: mongoose.Schema<IPost, mongoose.Model<IPost, any, any, any, mongoose.Document<unknown, any, IPost, any, {}> & IPost & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IPost, mongoose.Document<unknown, {}, mongoose.FlatRecord<IPost>, {}, mongoose.DefaultSchemaOptions> & mongoose.FlatRecord<IPost> & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const Post: mongoose.Model<IPost, {}, {}, {}, mongoose.Document<unknown, {}, IPost, {}, {}> & IPost & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export {};
