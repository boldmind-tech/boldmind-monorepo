"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoProfile = void 0;
const mongoose_1 = require("mongoose");
const VideoProfileSchema = new mongoose_1.Schema({
    userId: { type: String, index: true },
    isAnonymous: { type: Boolean, default: true },
    anonymousId: { type: String, unique: true, sparse: true },
    skills: [{
            name: { type: String, required: true },
            category: String,
            experience: String,
            portfolioItems: [String]
        }],
    video: {
        url: { type: String, required: true },
        duration: Number,
        thumbnail: String,
        transcript: String,
        language: String
    },
    availability: {
        status: {
            type: String,
            enum: ['available', 'busy', 'unavailable'],
            default: 'available'
        },
        schedule: { type: Map, of: mongoose_1.Schema.Types.Mixed },
        responseTime: String
    },
    pricing: {
        hourlyRate: Number,
        minBooking: Number,
        packageRates: { type: Map, of: Number }
    },
    stats: {
        completedGigs: { type: Number, default: 0 },
        totalEarnings: { type: Number, default: 0 },
        avgRating: { type: Number, default: 0 },
        responseRate: { type: Number, default: 0 }
    },
    verification: {
        phoneVerified: { type: Boolean, default: false },
        skillsVerified: { type: Boolean, default: false },
        identityVerified: { type: Boolean, default: false },
        trustScore: { type: Number, default: 0 }
    },
    preferences: {
        workTypes: [String],
        locations: [String],
        clientTypes: [String]
    },
    isActive: { type: Boolean, default: true },
    lastActive: { type: Date, default: Date.now }
}, { timestamps: true, collection: 'video_profiles' });
VideoProfileSchema.index({ 'skills.category': 1 });
VideoProfileSchema.index({ 'availability.status': 1 });
VideoProfileSchema.index({ isActive: 1 });
exports.VideoProfile = mongoose_1.default.model('VideoProfile', VideoProfileSchema);
//# sourceMappingURL=video-profile.model.js.map