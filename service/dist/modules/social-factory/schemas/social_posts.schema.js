"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountConnection = exports.ContentCalendar = exports.SocialPost = void 0;
const mongoose_1 = require("mongoose");
const SocialPostSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, index: true },
    accountConnectionId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'AccountConnection' },
    calendarId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'ContentCalendar' },
    platform: {
        type: String,
        enum: ['instagram', 'facebook', 'twitter_x', 'tiktok', 'linkedin', 'youtube'],
        required: true,
        index: true,
    },
    caption: { type: String, required: true },
    hashtags: [{ type: String, lowercase: true }],
    mediaUrls: [String],
    mediaType: {
        type: String,
        enum: ['image', 'video', 'carousel', 'reel', 'story', 'text'],
        required: true,
    },
    status: {
        type: String,
        enum: ['draft', 'scheduled', 'publishing', 'published', 'failed', 'cancelled'],
        default: 'draft',
        index: true,
    },
    scheduledFor: { type: Date, index: true },
    publishedAt: Date,
    platformPostId: String,
    platformUrl: String,
    n8nWorkflowId: String,
    isAIGenerated: { type: Boolean, default: false },
    generationPrompt: String,
    brandVoice: String,
    engagementStats: {
        likes: { type: Number, default: 0 },
        comments: { type: Number, default: 0 },
        shares: { type: Number, default: 0 },
        reach: { type: Number, default: 0 },
        impressions: { type: Number, default: 0 },
        savedCount: { type: Number, default: 0 },
        fetchedAt: Date,
    },
    errorMessage: String,
    retryCount: { type: Number, default: 0 },
    tags: [String],
}, {
    timestamps: true,
    collection: 'social_posts',
});
SocialPostSchema.index({ userId: 1, status: 1, scheduledFor: 1 });
SocialPostSchema.index({ userId: 1, platform: 1, publishedAt: -1 });
exports.SocialPost = mongoose_1.default.model('SocialPost', SocialPostSchema);
const ContentCalendarSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, index: true },
    name: { type: String, required: true },
    description: String,
    platforms: [
        {
            type: String,
            enum: ['instagram', 'facebook', 'twitter_x', 'tiktok', 'linkedin', 'youtube'],
        },
    ],
    brandVoice: String,
    contentPillars: [String],
    postingFrequency: { type: mongoose_1.Schema.Types.Mixed, default: {} },
    colorCode: { type: String, default: '#3B82F6' },
    isActive: { type: Boolean, default: true },
    totalPosts: { type: Number, default: 0 },
    publishedPosts: { type: Number, default: 0 },
}, { timestamps: true, collection: 'content_calendars' });
exports.ContentCalendar = mongoose_1.default.model('ContentCalendar', ContentCalendarSchema);
const AccountConnectionSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, index: true },
    platform: {
        type: String,
        enum: ['instagram', 'facebook', 'twitter_x', 'tiktok', 'linkedin', 'youtube'],
        required: true,
    },
    accountId: { type: String, required: true },
    accountName: { type: String, required: true },
    accountAvatar: String,
    accessToken: { type: String, required: true, select: false },
    refreshToken: { type: String, select: false },
    tokenExpiresAt: Date,
    scope: [String],
    isActive: { type: Boolean, default: true, index: true },
    lastSyncAt: Date,
    followerCount: Number,
}, { timestamps: true, collection: 'account_connections' });
AccountConnectionSchema.index({ userId: 1, platform: 1 }, { unique: true });
exports.AccountConnection = mongoose_1.default.model('AccountConnection', AccountConnectionSchema);
//# sourceMappingURL=social_posts.schema.js.map