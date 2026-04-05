import { AnalyticsReportService } from './analytics.service';
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsReportService);
    getOverview(user: {
        id: string;
    }): Promise<{
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
    generateReport(dto: {
        productSlugs: string[];
        period: '7d' | '30d' | '90d';
    }, user: {
        id: string;
    }): Promise<{
        jobId: string;
        stats: {
            productSlug: string;
            revenueNGN: number;
            transactions: number;
        }[];
        insights: string;
        provider: string;
    }>;
    getRevenueStats(user: {
        id: string;
    }, period?: '7d' | '30d' | '90d'): Promise<{
        productSlug: string;
        revenueNGN: number;
        transactions: number;
    }[]>;
    getGrowthInsights(user: {
        id: string;
    }): Promise<{
        insights: string;
        provider: string;
    }>;
}
