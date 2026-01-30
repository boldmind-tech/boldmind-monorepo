// SERVICES/emailscraper-pro-service/src/models/scrape-job.model.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IScrapeJob extends Document {
    userId: string;
    name: string;
    query: {
        keywords: string[];
        location?: string;
        industry?: string;
        companySize?: string;
        filters: Map<string, any>;
    };
    sources: Array<{
        type: 'linkedin' | 'google' | 'website' | 'directory';
        url: string;
        credentials?: Map<string, string>;
    }>;
    results: Array<{
        companyName: string;
        website?: string;
        industry?: string;
        size?: string;
        location?: string;
        emails: Array<{
            address: string;
            type: 'general' | 'personal' | 'support' | 'sales';
            confidence: number;
            verification: {
                status: 'valid' | 'invalid' | 'unknown';
                verifiedAt?: Date;
                source?: string;
            };
        }>;
        socialProfiles: Map<string, string>;
        phoneNumbers: string[];
        scrapedAt: Date;
    }>;
    status: 'queued' | 'running' | 'completed' | 'failed' | 'paused';
    progress: {
        totalFound: number;
        processed: number;
        validEmails: number;
        percentage: number;
    };
    settings: {
        rateLimit: number;
        maxResults: number;
        verifyEmails: boolean;
        deduplicate: boolean;
    };
    error?: {
        message: string;
        stackTrace?: string;
        occurredAt: Date;
    };
    createdAt: Date;
    updatedAt: Date;
    completedAt?: Date;
}

const ScrapeJobSchema = new Schema<IScrapeJob>(
    {
        userId: { type: String, required: true, index: true },
        name: { type: String, required: true },
        query: {
            keywords: [{ type: String, required: true }],
            location: String,
            industry: String,
            companySize: String,
            filters: { type: Map, of: Schema.Types.Mixed }
        },
        sources: [{
            type: {
                type: String,
                enum: ['linkedin', 'google', 'website', 'directory'],
                required: true
            },
            url: { type: String, required: true },
            credentials: { type: Map, of: String }
        }],
        results: [{
            companyName: { type: String, required: true },
            website: String,
            industry: String,
            size: String,
            location: String,
            emails: [{
                address: { type: String, required: true },
                type: {
                    type: String,
                    enum: ['general', 'personal', 'support', 'sales'],
                    default: 'general'
                },
                confidence: { type: Number, min: 0, max: 100, required: true },
                verification: {
                    status: {
                        type: String,
                        enum: ['valid', 'invalid', 'unknown'],
                        default: 'unknown'
                    },
                    verifiedAt: Date,
                    source: String
                }
            }],
            socialProfiles: { type: Map, of: String },
            phoneNumbers: [String],
            scrapedAt: { type: Date, default: Date.now }
        }],
        status: {
            type: String,
            enum: ['queued', 'running', 'completed', 'failed', 'paused'],
            default: 'queued',
            index: true
        },
        progress: {
            totalFound: { type: Number, default: 0 },
            processed: { type: Number, default: 0 },
            validEmails: { type: Number, default: 0 },
            percentage: { type: Number, default: 0 }
        },
        settings: {
            rateLimit: { type: Number, default: 10 },
            maxResults: { type: Number, default: 100 },
            verifyEmails: { type: Boolean, default: true },
            deduplicate: { type: Boolean, default: true }
        },
        error: {
            message: String,
            stackTrace: String,
            occurredAt: Date
        },
        completedAt: Date
    },
    {
        timestamps: true,
        collection: 'scrape_jobs'
    }
);

// Indexes
ScrapeJobSchema.index({ userId: 1, status: 1 });
ScrapeJobSchema.index({ createdAt: -1 });
ScrapeJobSchema.index({ completedAt: -1 });

export const ScrapeJob = mongoose.model<IScrapeJob>('ScrapeJob', ScrapeJobSchema);