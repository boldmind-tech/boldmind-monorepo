"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopywritingProject = void 0;
const mongoose_1 = require("mongoose");
const CopywritingProjectSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, index: true },
    projectName: { type: String, required: true },
    language: {
        type: String,
        enum: ['pidgin', 'english', 'yoruba', 'igbo', 'hausa'],
        default: 'pidgin'
    },
    tone: {
        type: String,
        enum: ['formal', 'casual', 'persuasive', 'funny', 'professional', 'friendly'],
        default: 'casual'
    },
    purpose: {
        type: String,
        enum: ['social_media', 'ad_copy', 'email', 'blog_post', 'product_description', 'video_script'],
        required: true
    },
    input: {
        productDetails: { type: String, required: true },
        targetAudience: String,
        keyBenefits: [String],
        callToAction: String,
        keywords: [String],
        examples: [String]
    },
    generatedContent: [{
            version: Number,
            content: String,
            wordCount: Number,
            readabilityScore: Number,
            engagementScore: Number,
            selected: { type: Boolean, default: false }
        }],
    variations: [{
            tone: String,
            length: String,
            focus: String,
            content: String
        }],
    optimization: {
        seoScore: Number,
        sentiment: String,
        predictedEngagement: Number
    },
    performance: {
        actualEngagement: Number,
        conversionRate: Number,
        feedback: String
    },
    status: {
        type: String,
        enum: ['generating', 'reviewing', 'optimizing', 'completed'],
        default: 'generating'
    }
}, { timestamps: true, collection: 'copywriting_projects' });
CopywritingProjectSchema.index({ userId: 1, status: 1 });
CopywritingProjectSchema.index({ createdAt: -1 });
exports.CopywritingProject = mongoose_1.default.model('CopywritingProject', CopywritingProjectSchema);
//# sourceMappingURL=copywriting-project.model.js.map