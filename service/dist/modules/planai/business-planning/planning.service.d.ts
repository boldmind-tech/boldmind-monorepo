import { PrismaService } from '../../../database/prisma.service';
import { AiService } from '../../ai/ai.service';
import { RedisService } from '../../../database/redis.service';
import { GenerateBusinessPlanDto, GeneratePitchDeckDto } from '../dto/all-planai.dto';
export declare class PlanningService {
    private readonly prisma;
    private readonly aiService;
    private readonly redis;
    private readonly logger;
    constructor(prisma: PrismaService, aiService: AiService, redis: RedisService);
    generateBusinessPlan(dto: GenerateBusinessPlanDto, userId: string): Promise<{
        jobId: string;
        status: string;
        output: object;
    }>;
    generatePitchDeck(dto: GeneratePitchDeckDto, userId: string): Promise<{
        jobId: string;
        status: string;
        output: object;
    }>;
    listUserJobs(userId: string, page: number): Promise<{
        data: {
            type: import("@prisma/client").$Enums.PlanAIJobType;
            id: string;
            createdAt: Date;
            productSlug: string;
            status: import("@prisma/client").$Enums.PlanAIJobStatus;
            outputFileUrl: string;
            completedAt: Date;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    getJob(jobId: string, userId: string): Promise<{
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
    getJobDownloadUrl(jobId: string, userId: string): Promise<{
        url: string;
    }>;
    getTemplates(industry?: string): Promise<{
        name: string;
        id: string;
        tags: string[];
        description: string;
        useCount: number;
    }[]>;
    private assertCanGenerate;
}
