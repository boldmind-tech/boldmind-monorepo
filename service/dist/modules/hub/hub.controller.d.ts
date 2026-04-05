import { HubService } from './hub.service';
import { JwtPayload } from '../auth/auth.service';
export declare class HubController {
    private readonly hubService;
    constructor(hubService: HubService);
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
    inviteTeamMember(body: {
        email: string;
        role: string;
    }, user: JwtPayload): Promise<{
        message: string;
        userId: string;
        pending?: undefined;
    } | {
        message: string;
        pending: boolean;
        userId?: undefined;
    }>;
    removeTeamMember(userId: string, actor: JwtPayload): Promise<{
        message: string;
    }>;
}
