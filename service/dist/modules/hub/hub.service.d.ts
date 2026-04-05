import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
export declare class HubService {
    private readonly prisma;
    private readonly redis;
    constructor(prisma: PrismaService, redis: RedisService);
    getDashboardStats(): Promise<{
        userStats: {
            totals: {
                users: number;
                activeProducts: number;
                admins: number;
            };
            growth: {
                trend: string;
                percentage: number;
                currentMonth: number;
            };
            topProducts: {
                productSlug: string;
                productName: string;
                userCount: number;
            }[];
        };
        ecosystemOverview: {
            totalMonthlyRevenue: number;
            totalTeamSize: number;
        };
        recentActivity: {
            id: string;
            action: string;
            entityType: string;
            createdAt: string;
            user: {
                fullName: string;
                email: string;
            };
        }[];
        systemHealth: {
            name: string;
            status: string;
            responseTime: number;
        }[];
    }>;
    getProducts(): {
        id: string;
        name: string;
        slug: string;
        icon: string;
        description: string;
        category: import("@boldmind/utils").ProductCategory;
        status: import("@boldmind/utils").ProductStatus;
        domain: string;
        monthlyRevenue: number;
        priority: number;
        tags: string[];
    }[];
    getPricing(): {
        id: string;
        name: string;
        tier: string;
        priceNGN: number;
        interval: string;
        description: string;
        features: string[];
        cta: string;
        isPopular: boolean;
    }[];
    getTeam(): Promise<{
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.UserRole;
        id: string;
        isActive: boolean;
        lastLoginAt: Date;
        avatar: string;
        createdAt: Date;
    }[]>;
    inviteTeamMember(email: string, role: string, _invitedBy: string): Promise<{
        message: string;
        userId: string;
        pending?: undefined;
    } | {
        message: string;
        pending: boolean;
        userId?: undefined;
    }>;
    removeTeamMember(targetUserId: string, actorId: string): Promise<{
        message: string;
    }>;
}
