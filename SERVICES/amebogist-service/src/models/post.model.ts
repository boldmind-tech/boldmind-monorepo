import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
    slug: string;
    title: string;
    content: {
        pidgin: string;
        english?: string;
        yoruba?: string;
    };
    excerpt: string;
    category: string;
    subcategory?: string;
    tags: string[];
    author: {
        id: string;
        name: string;
        avatar: string;
        isVerified: boolean;
    };
    media: {
        featuredImage?: string;
        gallery: string[];
        videoUrl?: string;
    };
    engagement: {
        views: number;
        likes: number;
        shares: number;
        commentsCount: number;
        readingTime: number;
    };
    seo: {
        metaTitle: string;
        metaDescription: string;
        keywords: string[];
        ogImage?: string;
    };
    monetization: {
        hasAds: boolean;
        affiliateLinks: Array<{
            text: string;
            url: string;
            clicks: number;
        }>;
        sponsored: boolean;
    };
    status: 'draft' | 'published' | 'archived';
    publishedAt?: Date;
    scheduledFor?: Date;
    createdAt: Date;
    updatedAt: Date;
}

const PostSchema = new Schema<IPost>(
    {
        slug: { type: String, required: true, unique: true, index: true },
        title: { type: String, required: true },
        content: {
            pidgin: { type: String, required: true },
            english: String,
            yoruba: String,
        },
        excerpt: { type: String, required: true },
        category: {
            type: String,
            required: true,
            enum: ['ai-tech', 'creator', 'sports', 'politics', 'entertainment', 'trending'],
            index: true
        },
        subcategory: String,
        tags: [{ type: String, index: true }],
        author: {
            id: { type: String, required: true },
            name: { type: String, required: true },
            avatar: String,
            isVerified: { type: Boolean, default: false }
        },
        media: {
            featuredImage: String,
            gallery: [String],
            videoUrl: String
        },
        engagement: {
            views: { type: Number, default: 0, index: true },
            likes: { type: Number, default: 0 },
            shares: { type: Number, default: 0 },
            commentsCount: { type: Number, default: 0 },
            readingTime: Number
        },
        seo: {
            metaTitle: String,
            metaDescription: String,
            keywords: [String],
            ogImage: String
        },
        monetization: {
            hasAds: { type: Boolean, default: true },
            affiliateLinks: [{
                text: String,
                url: String,
                clicks: { type: Number, default: 0 }
            }],
            sponsored: { type: Boolean, default: false }
        },
        status: {
            type: String,
            enum: ['draft', 'published', 'archived'],
            default: 'draft',
            index: true
        },
        publishedAt: Date,
        scheduledFor: Date
    },
    {
        timestamps: true,
        collection: 'posts'
    }
);

// Indexes for performance
PostSchema.index({ status: 1, publishedAt: -1 });
PostSchema.index({ category: 1, publishedAt: -1 });
PostSchema.index({ 'author.id': 1 });
PostSchema.index({ tags: 1 });

export const Post = mongoose.model<IPost>('Post', PostSchema);