"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatorStats = exports.CreatorStatsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CreatorStatsSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, unique: true, index: true },
    displayName: { type: String, required: true },
    avatarUrl: String,
    bio: { type: String, maxlength: 500 },
    totalArticles: { type: Number, default: 0 },
    totalViews: { type: Number, default: 0, index: true },
    totalLikes: { type: Number, default: 0 },
    totalShares: { type: Number, default: 0 },
    totalComments: { type: Number, default: 0 },
    totalEarningsKobo: { type: Number, default: 0 },
    monthlyEarningsKobo: { type: Number, default: 0 },
    currentMonthViews: { type: Number, default: 0 },
    adsenseEnabled: { type: Boolean, default: false },
    paystackSubAccountCode: String,
    revenueSharePercent: { type: Number, default: 70 },
    isVerified: { type: Boolean, default: false, index: true },
    verifiedAt: Date,
    topCategories: [{ type: String }],
    followerCount: { type: Number, default: 0 },
    subscriberCount: { type: Number, default: 0 },
    badges: [
        {
            name: { type: String, required: true },
            awardedAt: { type: Date, default: Date.now },
        },
    ],
    lastPublishedAt: Date,
}, {
    timestamps: true,
    collection: 'creator_stats',
});
exports.CreatorStatsSchema.index({ totalViews: -1 });
exports.CreatorStatsSchema.index({ isVerified: 1, totalArticles: -1 });
exports.CreatorStats = mongoose_1.default.model('CreatorStats', exports.CreatorStatsSchema);
//# sourceMappingURL=creator-stats.schema.js.map