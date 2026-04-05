import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../../database/prisma.service';
import { AiService } from '../../ai/ai.service';
import { CreateEmailCampaignDto } from './dto/create-email-campaign.dto';
import { CreateBroadcastDto } from './dto/create-broadcast.dto';
export declare class MarketingService {
    private readonly prisma;
    private readonly aiService;
    private readonly config;
    private readonly resend;
    constructor(prisma: PrismaService, aiService: AiService, config: ConfigService);
    createEmailCampaign(dto: CreateEmailCampaignDto, userId: string): Promise<{
        type: import("@prisma/client").$Enums.PlanAIJobType;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        productSlug: string | null;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        status: import("@prisma/client").$Enums.PlanAIJobStatus;
        tool: string | null;
        promptTokens: number | null;
        completionTokens: number | null;
        input: import("@prisma/client/runtime/client").JsonValue;
        output: import("@prisma/client/runtime/client").JsonValue | null;
        outputFileUrl: string | null;
        modelUsed: string | null;
        bullJobId: string | null;
        processingMs: number | null;
        errorMessage: string | null;
        retryCount: number;
        startedAt: Date | null;
        completedAt: Date | null;
        parentJobId: string | null;
    }>;
    sendCampaign(jobId: string, userId: string): Promise<{
        sent: number;
        total: number;
    }>;
    generateSubjectLines(dto: {
        topic: string;
        brand: string;
        tone?: string;
    }): Promise<{
        subjectLines: Array<{
            line: string;
            type: string;
            predictedOpenRate: string;
        }>;
    }>;
    generateEmailCopy(dto: {
        topic: string;
        cta: string;
        audience: string;
        tone?: string;
    }): Promise<{
        subject: string;
        preheader: string;
        bodyHtml: string;
        bodyText: string;
    }>;
    createWhatsappBroadcast(dto: CreateBroadcastDto, userId: string): Promise<{
        jobId: string;
        scheduledCount: number;
    }>;
    getCampaignAnalytics(jobId: string, userId: string): Promise<{
        campaign: {
            type: import("@prisma/client").$Enums.PlanAIJobType;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            productSlug: string | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            status: import("@prisma/client").$Enums.PlanAIJobStatus;
            tool: string | null;
            promptTokens: number | null;
            completionTokens: number | null;
            input: import("@prisma/client/runtime/client").JsonValue;
            output: import("@prisma/client/runtime/client").JsonValue | null;
            outputFileUrl: string | null;
            modelUsed: string | null;
            bullJobId: string | null;
            processingMs: number | null;
            errorMessage: string | null;
            retryCount: number;
            startedAt: Date | null;
            completedAt: Date | null;
            parentJobId: string | null;
        };
        analytics: import("@prisma/client/runtime/client").JsonValue;
    }>;
    private chunk;
}
