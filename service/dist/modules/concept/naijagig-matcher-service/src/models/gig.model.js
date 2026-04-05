"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gig = void 0;
const mongoose_1 = require("mongoose");
const GigSchema = new mongoose_1.Schema({
    clientId: { type: String, required: true, index: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: {
        type: String,
        required: true,
        enum: ['plumbing', 'electrical', 'carpentry', 'tailoring', 'makeup', 'catering', 'cleaning', 'repairs'],
        index: true
    },
    location: {
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], required: true },
        address: String,
        city: { type: String, index: true },
        state: { type: String, index: true }
    },
    budget: {
        min: Number,
        max: Number,
        currency: { type: String, default: 'NGN' },
        type: { type: String, enum: ['fixed', 'hourly', 'negotiable'], default: 'negotiable' }
    },
    urgency: {
        type: String,
        enum: ['normal', 'urgent', 'asap'],
        default: 'normal'
    },
    timeline: {
        start: Date,
        duration: String,
        flexible: { type: Boolean, default: true }
    },
    requirements: {
        experience: String,
        toolsRequired: [String],
        materialsProvided: { type: Boolean, default: false },
        licenses: [String]
    },
    applications: [{
            artisanId: { type: String, required: true },
            message: String,
            bidAmount: Number,
            estimatedTime: String,
            portfolioItems: [String],
            status: {
                type: String,
                enum: ['pending', 'shortlisted', 'rejected', 'hired'],
                default: 'pending'
            },
            appliedAt: { type: Date, default: Date.now }
        }],
    status: {
        type: String,
        enum: ['open', 'in_progress', 'completed', 'cancelled'],
        default: 'open',
        index: true
    },
    hiredArtisan: {
        id: String,
        hiredAt: Date,
        completedAt: Date,
        rating: Number,
        review: String
    },
    visibility: {
        isPublic: { type: Boolean, default: true },
        expiresAt: Date
    }
}, { timestamps: true, collection: 'gigs' });
GigSchema.index({ location: '2dsphere' });
GigSchema.index({ category: 1, status: 1 });
GigSchema.index({ createdAt: -1 });
exports.Gig = mongoose_1.default.model('Gig', GigSchema);
//# sourceMappingURL=gig.model.js.map