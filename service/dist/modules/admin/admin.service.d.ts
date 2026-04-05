import { Model } from 'mongoose';
import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
export interface DashboardStats {
    users: {
        total: number;
        active: number;
        newThisMonth: number;
        newThisWeek: number;
        byRole: Record<string, number>;
    };
    revenue: {
        totalMRR: number;
        totalAllTime: number;
        thisMonth: number;
        lastMonth: number;
        growth: number;
        byProduct: {
            productSlug: string;
            revenue: number;
        }[];
    };
    subscriptions: {
        total: number;
        active: number;
        trial: number;
        cancelled: number;
        byProduct: {
            productSlug: string;
            count: number;
        }[];
    };
    content: {
        totalArticles: number;
        publishedArticles: number;
        totalViews: number;
    };
    products: {
        totalTransactions: number;
        waitlistEntries: number;
    };
    system: {
        uptime: number;
        memoryUsage: NodeJS.MemoryUsage;
        nodeVersion: string;
        timestamp: string;
    };
}
export declare class AdminService {
    private readonly prisma;
    private readonly redis;
    private readonly postModel;
    private readonly logger;
    constructor(prisma: PrismaService, redis: RedisService, postModel: Model<any>);
    getDashboardStats(): Promise<DashboardStats>;
    private buildDashboardStats;
    getFullUserList(query: {
        page?: number;
        limit?: number;
        search?: string;
        role?: string;
        isActive?: boolean;
        isBanned?: boolean;
        productSlug?: string;
    }): Promise<{
        data: {
            createdAt: Date;
            id: string;
            name: string;
            email: string;
            phone: string;
            role: import("@prisma/client").$Enums.UserRole;
            isActive: boolean;
            isBanned: boolean;
            banReason: string;
            emailVerifiedAt: Date;
            lastLoginAt: Date;
            profile: {
                displayName: string;
                state: string;
            };
            _count: {
                subscriptions: number;
                payments: number;
            };
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    updateUserRole(targetId: string, newRole: string, actorId: string): Promise<{
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.UserRole;
    }>;
    getRevenueReport(period: 'week' | 'month' | 'quarter' | 'year'): Promise<{
        period: "week" | "month" | "quarter" | "year";
        from: string;
        to: string;
        totalRevenue: number;
        totalTransactions: number;
        avgTransactionValue: number;
        dailyBreakdown: {
            revenue: number;
            transactions: number;
            date: string;
        }[];
    }>;
    getWaitlistStats(): Promise<(import("@prisma/client").Prisma.PickEnumerable<import("@prisma/client").Prisma.WaitlistEntryGroupByOutputType, "productSlug"[]> & {
        _count: {
            id: number;
        };
    })[]>;
    inviteFromWaitlist(productSlug: string, count?: number): Promise<{
        invited: number;
        emails: string[];
    }>;
    getAdminLogs(page?: number, limit?: number): Promise<{
        data: {
            actor: {
                name: string;
                email: string;
            };
            target: any;
            createdAt: Date;
            id: string;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            adminId: string;
            action: string;
            targetType: string | null;
            targetId: string | null;
            reason: string | null;
            ipAddress: string | null;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
        };
    }>;
    refreshDashboardCache(): Promise<void>;
}
