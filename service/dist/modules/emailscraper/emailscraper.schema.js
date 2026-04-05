"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadListSchema = exports.ScrapeJobSchema = exports.EmailLeadSchema = void 0;
const mongoose_1 = require("mongoose");
exports.EmailLeadSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, index: true },
    listId: { type: String, index: true },
    email: { type: String, required: true, index: true },
    firstName: String,
    lastName: String,
    fullName: String,
    title: String,
    company: { type: String, index: true },
    industry: String,
    website: String,
    location: String,
    linkedinUrl: String,
    phone: String,
    source: { type: String, enum: ['website', 'directory'], default: 'website' },
    confidence: Number,
    verificationStatus: {
        type: String,
        enum: ['valid', 'invalid', 'catch_all', 'webmail', 'disposable', 'unknown'],
        default: 'unknown'
    },
    verifiedAt: Date,
    tags: [String],
}, { timestamps: true });
exports.EmailLeadSchema.index({ userId: 1, email: 1 }, { unique: true });
exports.ScrapeJobSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, index: true },
    jobType: { type: String, enum: ['website', 'directory'], required: true },
    status: {
        type: String,
        enum: ['queued', 'running', 'completed', 'failed'],
        default: 'queued'
    },
    inputData: mongoose_1.Schema.Types.Mixed,
    totalFound: { type: Number, default: 0 },
    totalValid: { type: Number, default: 0 },
    totalSaved: { type: Number, default: 0 },
    error: String,
    completedAt: Date,
}, { timestamps: true });
exports.LeadListSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, index: true },
    name: { type: String, required: true },
    description: String,
}, { timestamps: true });
//# sourceMappingURL=emailscraper.schema.js.map