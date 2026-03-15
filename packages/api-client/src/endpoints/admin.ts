// packages/api-client/src/endpoints/admin.ts
import APIClient from '../client';

export interface UserFilters {
    page?: number;
    limit?: number;
    role?: string;
    isAdmin?: boolean;
    search?: string;
}

export interface AuditLog {
    id: string;
    userId: string;
    adminUserId?: string;
    action: string;
    entityType: string;
    entityId?: string;
    oldData?: any;
    newData?: any;
    changes?: any;
    ipAddress?: string;
    userAgent?: string;
    productSlug?: string;
    createdAt: string;
    user?: {
        id: string;
        email: string;
        fullName?: string;
    };
    adminUser?: {
        id: string;
        email: string;
        fullName?: string;
    };
}

export interface AdminUser {
    id: string;
    email: string;
    fullName?: string;
    phone?: string;
    avatarUrl?: string;
    role: string;
    isAdmin: boolean;
    isSuperAdmin: boolean;
    isVerified: boolean;
    lastLoginAt?: string;
    loginCount: number;
    createdAt: string;
    updatedAt: string;
    _count: {
        profiles: number;
        organizations: number;
        userProducts: number;
    };
}

export interface UserProduct {
    id: string;
    productSlug: string;
    productName: string;
    tier: string;
    isActive: boolean;
    subscribedAt: string;
    expiresAt?: string;
    usageCount: number;
    lastUsedAt?: string;
    planId?: string;
    priceMonthly?: number;
    currency?: string;
    createdAt: string;
    updatedAt: string;
    productInfo?: {
        name: string;
        category: string;
        status: string;
        icon: string;
    };
}

export interface AdminStats {
    totals: {
        users: number;
        admins: number;
        activeProducts: number;
    };
    growth: {
        currentMonth: number;
        previousMonth: number;
        percentage: number;
        trend: 'up' | 'down' | 'stable';
    };
    recentUsers: Array<{
        id: string;
        email: string;
        fullName?: string;
        role: string;
        createdAt: string;
    }>;
    userGrowth: Array<{
        date: string;
        count: number;
    }>;
    topProducts: Array<{
        productSlug: string;
        userCount: number;
        productName: string;
    }>;
}

export interface ProductStats {
    total: number;
    byStatus: Record<string, number>;
    byCategory: Record<string, number>;
    projectedRevenue: number;
    upcomingReleases: number;
}

export interface SystemHealth {
    name: string;
    status: 'healthy' | 'unhealthy' | 'unknown';
    responseTime?: number;
    error?: string;
    lastChecked: string;
}

export class AdminEndpoints {
    constructor(private client: APIClient) { }

    // User Management
    async getUsers(filters?: UserFilters): Promise<{
        users: AdminUser[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }> {
        return this.client.get('/admin/users', { params: filters });
    }

    async updateUser(userId: string, data: {
        role?: string;
        isAdmin?: boolean;
        permissions?: string[];
        adminNotes?: string;
    }) {
        return this.client.patch(`/admin/users/${userId}`, data);
    }

    async createUser(data: any) {
        return this.client.post('/admin/users', data);
    }

    async deleteUser(userId: string) {
        return this.client.delete(`/admin/users/${userId}`);
    }

    async inviteAdmin(data: {
        email: string;
        role: string;
        productScope?: string[];
    }) {
        return this.client.post('/admin/users/invite', data);
    }

    async getUserProducts(userId: string): Promise<{
        user: {
            id: string;
            email: string;
            fullName?: string;
        };
        products: UserProduct[];
        summary: {
            totalProducts: number;
            activeProducts: number;
            freeProducts: number;
            paidProducts: number;
        };
    }> {
        return this.client.get(`/admin/users/${userId}/products`);
    }

    async assignProductToUser(
        userId: string,
        data: {
            productSlug: string;
            tier?: string;
            expiresAt?: string;
            planId?: string;
            priceMonthly?: number;
        }
    ) {
        return this.client.post(`/admin/users/${userId}/products`, data);
    }

    // Audit Logs
    async getAuditLogs(filters?: {
        page?: number;
        limit?: number;
        userId?: string;
        action?: string;
        entityType?: string;
    }): Promise<{
        logs: AuditLog[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }> {
        return this.client.get('/admin/users/audit-logs', { params: filters });
    }

    async getAdminStats(): Promise<AdminStats> {
        return this.client.get('/admin/users/stats');
    }

    async initSuperAdmin() {
        return this.client.post('/admin/users/init-super-admin');
    }
}

// Dashboard endpoints (hub service)
export class DashboardEndpoints {
    constructor(private client: APIClient) { }

    async getDashboard(): Promise<{
        userStats: AdminStats;
        productStats: ProductStats;
        systemHealth: SystemHealth[];
        recentActivity: AuditLog[];
        ecosystemOverview: {
            totalTeamSize: number;
            totalDevelopmentCost: number;
            totalMonthlyRevenue: number;
            avgProductPriority: number;
            topPriorityProducts: Array<{
                name: string;
                priority: number;
                status: string;
                monthlyRevenue: number;
            }>;
        };
    }> {
        return this.client.get('/admin/dashboard');
    }

    async getProductStats(): Promise<ProductStats> {
        return this.client.get('/admin/dashboard/products');
    }

    async getProductAnalytics(productSlug: string): Promise<any> {
        return this.client.get(`/admin/dashboard/products/${productSlug}`);
    }

    async getSystemHealth(): Promise<SystemHealth[]> {
        return this.client.get('/admin/dashboard/system/health');
    }

    async getRevenueAnalytics(period: string = '30d'): Promise<any> {
        return this.client.get('/admin/dashboard/revenue', {
            params: { period },
        });
    }

    async getUserGrowthAnalytics(period: string = '30d'): Promise<any> {
        return this.client.get('/admin/dashboard/users/growth', {
            params: { period },
        });
    }
}