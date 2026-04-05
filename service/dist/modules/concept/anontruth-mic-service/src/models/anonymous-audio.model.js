"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnonymousAudio = void 0;
const mongoose_1 = require("mongoose");
const AnonymousAudioSchema = new mongoose_1.Schema({
    anonymousId: { type: String, required: true, index: true },
    location: {
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], required: true },
        accuracy: Number
    },
    audio: {
        url: { type: String, required: true },
        duration: Number,
        format: String,
        size: Number,
        transcription: String,
        voiceDistorted: { type: Boolean, default: true }
    },
    metadata: {
        category: String,
        tags: [String],
        urgency: {
            type: String,
            enum: ['low', 'medium', 'high', 'critical'],
            default: 'medium'
        },
        language: String,
        timestamp: { type: Date, default: Date.now }
    },
    moderation: {
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected', 'flagged'],
            default: 'pending',
            index: true
        },
        reviewedBy: String,
        reviewedAt: Date,
        flags: [{
                type: String,
                reason: String,
                severity: String
            }],
        score: { type: Number, default: 50 }
    },
    visibility: {
        isPublic: { type: Boolean, default: true },
        targetAreas: [String],
        expiryAt: { type: Date, required: true },
        boostExpiry: Date
    },
    engagement: {
        listens: { type: Number, default: 0 },
        shares: { type: Number, default: 0 },
        reports: { type: Number, default: 0 },
        boosts: [{
                amount: Number,
                boostedAt: Date,
                expiresAt: Date
            }],
        comments: [{
                anonymousId: String,
                text: String,
                timestamp: { type: Date, default: Date.now }
            }]
    },
    safety: {
        encryptionKey: { type: String, required: true },
        ipAddress: String,
        deviceFingerprint: String,
        deleted: { type: Boolean, default: false },
        deletionReason: String,
        deletedAt: Date
    }
}, {
    timestamps: { createdAt: true, updatedAt: false },
    collection: 'anonymous_audios'
});
AnonymousAudioSchema.index({ createdAt: 1 }, { expireAfterSeconds: 604800 });
AnonymousAudioSchema.index({ location: '2dsphere' });
AnonymousAudioSchema.index({ 'moderation.status': 1 });
AnonymousAudioSchema.index({ 'visibility.expiryAt': 1 });
exports.AnonymousAudio = mongoose_1.default.model('AnonymousAudio', AnonymousAudioSchema);
//# sourceMappingURL=anonymous-audio.model.js.map