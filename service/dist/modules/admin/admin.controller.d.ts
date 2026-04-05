import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getStats(): Promise<import("./admin.service").DashboardStats>;
    users(query: any): Promise<{
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
    updateRole(id: string, actorId: string, role: string): Promise<{
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.UserRole;
    }>;
    revenue(period?: 'week' | 'month' | 'quarter' | 'year'): Promise<{
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
    waitlist(): Promise<(import("@prisma/client").Prisma.PickEnumerable<import("@prisma/client").Prisma.WaitlistEntryGroupByOutputType, "productSlug"[]> & {
        _count: {
            id: number;
        };
    })[]>;
    invite(slug: string, count?: number): Promise<{
        invited: number;
        emails: string[];
    }>;
    logs(page?: number, limit?: number): Promise<{
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
}
