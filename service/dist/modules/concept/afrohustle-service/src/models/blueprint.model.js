"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blueprint = void 0;
const mongoose_1 = require("mongoose");
const BlueprintSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    category: {
        type: String,
        required: true,
        enum: ['digital', 'service', 'product', 'agriculture', 'ecommerce', 'content'],
        index: true
    },
    difficulty: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        default: 'beginner'
    },
    startupCost: {
        min: { type: Number, required: true },
        max: { type: Number, required: true },
        currency: { type: String, default: 'NGN' }
    },
    timeToProfit: { type: String, required: true },
    skillsRequired: [String],
    marketSize: String,
    competitionLevel: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    content: {
        overview: { type: String, required: true },
        stepByStep: [{
                title: String,
                description: String,
                estimatedTime: String,
                resources: [{
                        name: String,
                        url: String,
                        type: String
                    }],
                checklist: [String]
            }],
        tools: [{
                name: String,
                purpose: String,
                cost: String,
                alternatives: [String]
            }],
        caseStudies: [{
                name: String,
                story: String,
                revenue: String,
                lessons: [String]
            }],
        faqs: [{
                question: String,
                answer: String
            }]
    },
    nigerianContext: {
        regulations: String,
        locationAdvantages: [String],
        challenges: [String],
        successStories: [String]
    },
    stats: {
        views: { type: Number, default: 0 },
        saves: { type: Number, default: 0 },
        completions: { type: Number, default: 0 },
        successRate: Number
    },
    isVerified: { type: Boolean, default: false },
    verifiedBy: String
}, { timestamps: true, collection: 'blueprints' });
BlueprintSchema.index({ category: 1, difficulty: 1 });
BlueprintSchema.index({ 'stats.views': -1 });
exports.Blueprint = mongoose_1.default.model('Blueprint', BlueprintSchema);
//# sourceMappingURL=blueprint.model.js.map