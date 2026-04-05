import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
export declare class AnalyticsService {
    private readonly prisma;
    private readonly redis;
    private readonly logger;
    constructor(prisma: PrismaService, redis: RedisService);
    trackEvent(data: {
        userId?: string;
        event: string;
        properties?: Record<string, any>;
        source?: string;
        sessionId?: string;
        page?: string;
        referrer?: string;
        userAgent?: string;
        ip?: string;
    }): Promise<{
        tracked: boolean;
    }>;
    trackPageView(data: {
        userId?: string;
        page: string;
        referrer?: string;
        sessionId?: string;
        userAgent?: string;
        ip?: string;
    }): Promise<{
        tracked: boolean;
    }>;
    getDashboard(period?: 'day' | 'week' | 'month'): Promise<any>;
    getUserAnalytics(userId: string, period?: 'day' | 'week' | 'month'): Promise<{
        totalEvents: number;
        events: {
            id: string;
            createdAt: Date;
            userId: string | null;
            userAgent: string | null;
            page: string | null;
            properties: import("@prisma/client/runtime/client").JsonValue | null;
            event: string;
            source: string | null;
            sessionId: string | null;
            ip: string | null;
            referrer: string | null;
        }[];
        period: "week" | "month" | "day";
    }>;
    getProductUsage(period?: 'day' | 'week' | 'month'): Promise<(import("@prisma/client").Prisma.PickEnumerable<import("@prisma/client").Prisma.AnalyticsEventGroupByOutputType, "source"[]> & {
        _count: number;
    })[]>;
    private getSinceDate;
}
