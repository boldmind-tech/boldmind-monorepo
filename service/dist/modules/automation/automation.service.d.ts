import { Queue } from 'bull';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../database/prisma.service';
import { AiService } from '../ai/ai.service';
export declare class AutomationService {
    private readonly prisma;
    private readonly config;
    private readonly ai;
    private readonly socialQueue;
    private readonly emailQueue;
    private readonly aiQueue;
    private readonly logger;
    private readonly N8N_BASE;
    private readonly N8N_TOKEN;
    constructor(prisma: PrismaService, config: ConfigService, ai: AiService, socialQueue: Queue, emailQueue: Queue, aiQueue: Queue);
    triggerN8NWorkflow(webhookPath: string, payload: any): Promise<any>;
    scheduleSocialPost(userId: string, dto: {
        platforms: string[];
        content: string;
        mediaUrls?: string[];
        scheduledAt: Date;
        caption?: string;
        hashtags?: string[];
    }): Promise<{
        jobId: import("bull").JobId;
        scheduledAt: Date;
    }>;
    generateContentCalendar(userId: string, input: {
        businessName: string;
        industry: string;
        platforms: string[];
        weeks: number;
        themes?: string[];
    }): Promise<any>;
    bulkGenerateCaptions(userId: string, input: {
        businessName: string;
        products: string[];
        platform: string;
        tone: string;
        count: number;
    }): Promise<any>;
    scheduleEmailCampaign(userId: string, dto: {
        subject: string;
        htmlBody: string;
        recipientEmails: string[];
        scheduledAt?: Date;
        batchSize?: number;
    }): Promise<{
        batches: number;
        jobs: import("bull").JobId[];
        totalRecipients: number;
    }>;
    scrapeEmails(userId: string, dto: {
        targetUrl?: string;
        linkedinSearchQuery?: string;
        naijaDirectory?: string;
        limit?: number;
    }): Promise<{
        jobId: import("bull").JobId;
        status: string;
        message: string;
    }>;
    verifyEmail(email: string): Promise<{
        valid: boolean;
        reason?: string;
    }>;
    dailySubscriptionCheck(): Promise<void>;
    cleanExpiredTokens(): Promise<void>;
    weeklyAnalyticsDigest(): Promise<void>;
    getQueueStats(): Promise<{
        social: {
            name: string;
            waiting: number;
            active: number;
            completed: number;
            failed: number;
        };
        email: {
            name: string;
            waiting: number;
            active: number;
            completed: number;
            failed: number;
        };
        ai: {
            name: string;
            waiting: number;
            active: number;
            completed: number;
            failed: number;
        };
    }>;
    private getQueueInfo;
}
