import { PrismaService } from '../../../database/prisma.service';
import { AiService } from '../../ai/ai.service';
import { RedisService } from '../../../database/redis.service';
import { GenerateForecastDto, GenerateScenarioDto, CalculateBreakEvenDto } from './dto/financial.dto';
export declare class FinancialService {
    private readonly prisma;
    private readonly aiService;
    private readonly redis;
    private readonly logger;
    constructor(prisma: PrismaService, aiService: AiService, redis: RedisService);
    generateForecast(dto: GenerateForecastDto, userId: string): Promise<{
        jobId: string;
        output: object;
    }>;
    runScenarioAnalysis(dto: GenerateScenarioDto, userId: string): Promise<{
        scenarios: object;
    }>;
    calculateBreakEven(dto: CalculateBreakEvenDto): {
        error: string;
        breakEvenUnits?: undefined;
        breakEvenRevenueNGN?: undefined;
        contributionMarginNGN?: undefined;
        contributionMarginPercent?: undefined;
        currentRevenueNGN?: undefined;
        marginOfSafetyPercent?: undefined;
        monthsToBreakEven?: undefined;
    } | {
        breakEvenUnits: number;
        breakEvenRevenueNGN: number;
        contributionMarginNGN: number;
        contributionMarginPercent: number;
        currentRevenueNGN: number;
        marginOfSafetyPercent: number;
        monthsToBreakEven: number;
        error?: undefined;
    };
    listUserForecasts(userId: string, page: number): Promise<{
        data: {
            id: string;
            createdAt: Date;
            status: import("@prisma/client").$Enums.PlanAIJobStatus;
            input: import("@prisma/client/runtime/client").JsonValue;
            completedAt: Date;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
        };
    }>;
    getForecast(jobId: string, userId: string): Promise<{
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
    getCurrentExchangeRate(): Promise<any>;
}
