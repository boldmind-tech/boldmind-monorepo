"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = exports.PostSchema = void 0;
const mongoose_1 = require("mongoose");
exports.PostSchema = new mongoose_1.Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
        index: true,
        match: /^[a-z0-9]+(?:-[a-z0-9]+)*$/
    },
    title: { type: String, required: true, trim: true },
    content: {
        pidgin: { type: String, required: true },
        english: String,
        yoruba: String,
        igbo: String,
        hausa: String,
    },
    excerpt: { type: String, required: true, maxlength: 300 },
    category: {
        type: String,
        required: true,
        enum: ['ai-tech', 'creator', 'sports', 'politics', 'entertainment', 'trending', 'general'],
        index: true
    },
    subcategory: String,
    tags: [{ type: String, index: true, lowercase: true }],
    author: {
        id: { type: String, required: true, index: true },
        name: { type: String, required: true },
        avatar: String,
        isVerified: { type: Boolean, default: false }
    },
    media: {
        featuredImage: String,
        gallery: [{ type: String }],
        videoUrl: String
    },
    engagement: {
        views: { type: Number, default: 0, index: true },
        likes: { type: Number, default: 0 },
        shares: { type: Number, default: 0 },
        commentsCount: { type: Number, default: 0 },
        readingTime: { type: Number, default: 0 }
    },
    seo: {
        metaTitle: String,
        metaDescription: String,
        keywords: [{ type: String, lowercase: true }],
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
    aiMetadata: {
        sourceTrend: String,
        sourcePlatform: String,
        promptUsed: String
    },
    distributionStatus: {
        socialShared: { type: Boolean, default: false },
        videoConverted: { type: Boolean, default: false },
        factoryJobId: String
    },
    status: {
        type: String,
        enum: ['draft', 'published', 'archived'],
        default: 'draft',
        index: true
    },
    isFeatured: { type: Boolean, default: false, index: true },
    source: {
        type: String,
        enum: ['manual', 'ai', 'imported'],
        default: 'manual',
        index: true
    },
    editorialNote: String,
    publishedAt: Date,
    scheduledFor: Date
}, {
    timestamps: true,
    collection: 'posts',
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
exports.PostSchema.index({ status: 1, publishedAt: -1 });
exports.PostSchema.index({ category: 1, status: 1, publishedAt: -1 });
exports.PostSchema.index({ isFeatured: 1, status: 1 });
exports.PostSchema.index({ 'engagement.views': -1, status: 1 });
exports.PostSchema.index({ tags: 1, status: 1 });
exports.PostSchema.index({ title: 'text', excerpt: 'text', 'content.pidgin': 'text', 'content.english': 'text', tags: 'text' }, { weights: { title: 10, tags: 5, excerpt: 3, 'content.pidgin': 1, 'content.english': 1 }, name: 'posts_text_search' });
exports.Post = mongoose_1.default.model('Post', exports.PostSchema);
//# sourceMappingURL=post.schema.js.map