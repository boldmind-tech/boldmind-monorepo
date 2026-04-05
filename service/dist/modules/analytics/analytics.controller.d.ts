import { Request } from 'express';
import { AnalyticsService } from './analytics.service';
export declare class AnalyticsController {
    private readonly analytics;
    constructor(analytics: AnalyticsService);
    trackEvent(data: {
        event: string;
        properties?: Record<string, any>;
        source?: string;
        page?: string;
        sessionId?: string;
    }, req: Request): Promise<{
        tracked: boolean;
    }>;
    trackPageView(data: {
        page: string;
        referrer?: string;
        sessionId?: string;
    }, req: Request): Promise<{
        tracked: boolean;
    }>;
    getDashboard(period?: 'day' | 'week' | 'month'): Promise<any>;
    getMyAnalytics(userId: string, period?: 'day' | 'week' | 'month'): Promise<{
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
}
