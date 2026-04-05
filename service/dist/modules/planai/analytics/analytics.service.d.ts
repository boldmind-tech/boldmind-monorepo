import { PrismaService } from '../../../database/prisma.service';
import { AiService } from '../../ai/ai.service';
export declare class AnalyticsReportService {
    private readonly prisma;
    private readonly ai;
    constructor(prisma: PrismaService, ai: AiService);
    getUserOverview(userId: string): Promise<{
        last30Days: {
            paymentsNGN: number;
            paymentCount: number;
            aiJobsRun: number;
        };
        activeSubscriptions: {
            productSlug: string;
            tier: import("@prisma/client").$Enums.SubscriptionTier;
            currentPeriodEnd: Date;
        }[];
        stores: {
            name: string;
            totalRevenue: number;
            totalOrders: number;
        }[];
    }>;
    getRevenueStats(userId: string, period: '7d' | '30d' | '90d'): Promise<{
        productSlug: string;
        revenueNGN: number;
        transactions: number;
    }[]>;
    generateAnalyticsReport(dto: {
        productSlugs: string[];
        period: string;
    }, userId: string): Promise<{
        jobId: string;
        stats: {
            productSlug: string;
            revenueNGN: number;
            transactions: number;
        }[];
        insights: string;
        provider: string;
    }>;
    generateGrowthInsights(userId: string): Promise<{
        insights: string;
        provider: string;
    }>;
}
