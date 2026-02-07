// SERVICES/hub-service/src/admin/admin.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { BOLDMIND_PRODUCTS, Product } from '@boldmind/utils';

@Injectable()
export class AdminService {
    constructor(private httpService: HttpService) { }

    async getEcosystemDashboard() {
        try {
            // Fetch data from user service
            const [userStats, recentActivity] = await Promise.all([
                this.fetchUserStats(),
                this.fetchRecentActivity(),
            ]);

            // Calculate product stats
            const productStats = this.calculateProductStats();

            // System health check
            const systemHealth = await this.checkSystemHealth();

            return {
                userStats,
                productStats,
                systemHealth,
                recentActivity,
                ecosystemOverview: this.getEcosystemOverview(),
            };
        } catch (error) {
            console.error('Failed to fetch admin dashboard data:', error);
            throw error;
        }
    }

    private async fetchUserStats() {
        try {
            const response = await firstValueFrom(
                this.httpService.get(`${process.env.USER_SERVICE_URL}/api/users/admin/stats`)
            );
            return response.data;
        } catch (error) {
            console.error('Failed to fetch user stats:', error);
            return {
                totals: { users: 0, admins: 0, activeProducts: 0 },
                growth: { currentMonth: 0, previousMonth: 0, percentage: 0, trend: 'stable' },
                recentUsers: [],
                userGrowth: [],
                topProducts: [],
            };
        }
    }

    private async fetchRecentActivity() {
        try {
            const response = await firstValueFrom(
                this.httpService.get(`${process.env.USER_SERVICE_URL}/api/users/admin/audit-logs?limit=10`)
            );
            return response.data.logs || [];
        } catch (error) {
            console.error('Failed to fetch recent activity:', error);
            return [];
        }
    }

    private calculateProductStats() {
        const products = BOLDMIND_PRODUCTS;

        const byStatus = products.reduce((acc: Record<string, number>, product: Product) => {
            acc[product.status] = (acc[product.status] || 0) + 1;
            return acc;
        }, {});

        const byCategory = products.reduce((acc: Record<string, number>, product: Product) => {
            acc[product.category] = (acc[product.category] || 0) + 1;
            return acc;
        }, {});

        const projectedRevenue = products.reduce((total: number, product: Product) => {
            const baseRevenue = product.monthlyRevenue || 0;

            // Add projected growth based on status
            let multiplier = 1;
            switch (product.status) {
                case 'LIVE': multiplier = 1.5; break;
                case 'BUILDING': multiplier = 0.5; break;
                case 'PLANNED': multiplier = 0.1; break;
                case 'CONCEPT': multiplier = 0; break;
            }

            return total + (baseRevenue * multiplier);
        }, 0);

        return {
            total: products.length,
            byStatus,
            byCategory,
            projectedRevenue,
            upcomingReleases: products.filter((p: Product) =>
                p.status === 'BUILDING' || p.status === 'PLANNED'
            ).length,
        };
    }

    async checkSystemHealth() {
        const services = [
            { name: 'User Service', url: process.env.USER_SERVICE_URL },
            { name: 'Hub Service', url: process.env.HUB_SERVICE_URL },
            { name: 'API Gateway', url: process.env.API_GATEWAY_URL },
            { name: 'Educenter Service', url: process.env.EDUCENTER_SERVICE_URL },
            { name: 'Payment Service', url: process.env.PAYMENT_SERVICE_URL },
            { name: 'Notification Service', url: process.env.NOTIFICATION_SERVICE_URL },
            { name: 'Amebogist Service', url: process.env.AMEBOGIST_SERVICE_URL },
            { name: 'Boldmind os Service', url: process.env.OS_SERVICE_URL },
            { name: 'Planai Service', url: process.env.PLANAI_SERVICE_URL },
            { name: 'Receptionist Service', url: process.env.RECEPTIONIST_SERVICE_URL },
            { name: 'Boldmind AI Service', url: process.env.AI_SERVICE_URL },
            { name: 'Emailscraper Service', url: process.env.EMAILSCRAPER_SERVICE_URL },
            // Add other services as needed
        ];

        const healthChecks = await Promise.allSettled(
            services.map(async (service) => {
                const startTime = Date.now();
                try {
                    await firstValueFrom(
                        this.httpService.get(`${service.url}/health`, { timeout: 5000 })
                    );
                    const responseTime = Date.now() - startTime;
                    return {
                        name: service.name,
                        status: 'healthy',
                        responseTime,
                        lastChecked: new Date(),
                    };
                } catch (error: any) {
                    return {
                        name: service.name,
                        status: 'unhealthy',
                        error: error.message,
                        lastChecked: new Date(),
                    };
                }
            })
        );

        return healthChecks.map(check =>
            check.status === 'fulfilled' ? check.value : check.reason
        );
    }

    private getEcosystemOverview() {
        const products = BOLDMIND_PRODUCTS;

        const totalTeamSize = products.reduce((total: number, product: Product) =>
            total + (product.teamSize || 1), 0
        );

        const totalDevelopmentCost = products.reduce((total: number, product: Product) => {
            // Rough estimation
            const months = product.timeline?.includes('week') ? 1 : 3;
            const teamSize = product.teamSize || 1;
            return total + (months * teamSize * 500000); // ₦500k per dev per month
        }, 0);

        const totalMonthlyRevenue = products.reduce((total: number, product: Product) =>
            total + (product.monthlyRevenue || 0), 0
        );

        return {
            totalTeamSize,
            totalDevelopmentCost,
            totalMonthlyRevenue,
            avgProductPriority: products.reduce((sum: number, p: Product) => sum + p.priority, 0) / products.length,
            topPriorityProducts: products
                .filter((p: Product) => p.priority <= 10)
                .sort((a: Product, b: Product) => a.priority - b.priority)
                .slice(0, 5)
                .map((p: Product) => ({
                    name: p.name,
                    priority: p.priority,
                    status: p.status,
                    monthlyRevenue: p.monthlyRevenue,
                })),
        };
    }

    async getProductAnalytics(productSlug: string): Promise<{
        product: Product;
        userStats: {

            totalUsers: number;
            activeUsers: number;
            byTier: Record<string, number>;
            recentUsers: any[];
        };
        financials: {
            monthlyRevenue: number;
            projectedAnnual: number;
            payingUsers: number;
            conversionRate: number;
        };
    }> {
        const product = BOLDMIND_PRODUCTS.find((p: Product) => p.slug === productSlug);

        if (!product) {
            throw new Error(`Product ${productSlug} not found`);
        }

        try {
            // Fetch user data for this product
            const userProducts = await this.fetchProductUsers(productSlug);

            return {
                product,
                userStats: {
                    totalUsers: userProducts.length,
                    activeUsers: userProducts.filter((up: any) => up.isActive).length,
                    byTier: userProducts.reduce((acc: Record<string, number>, up: any) => {
                        acc[up.tier] = (acc[up.tier] || 0) + 1;
                        return acc;
                    }, {}),
                    recentUsers: userProducts
                        .sort((a: any, b: any) => new Date(b.subscribedAt).getTime() - new Date(a.subscribedAt).getTime())
                        .slice(0, 10),
                },
                financials: {
                    monthlyRevenue: product.monthlyRevenue || 0,
                    projectedAnnual: (product.monthlyRevenue || 0) * 12,
                    payingUsers: userProducts.filter((up: any) => up.tier !== 'free').length,
                    conversionRate: userProducts.length > 0
                        ? (userProducts.filter((up: any) => up.tier !== 'free').length / userProducts.length) * 100
                        : 0,
                },
            };
        } catch (error) {
            console.error(`Failed to fetch analytics for ${productSlug}:`, error);
            throw error;
        }
    }

    async getProductStats() {
        return this.calculateProductStats();
    }

    async getRevenueAnalytics(period: string = '30d') {
        try {
            const products = BOLDMIND_PRODUCTS;

            const totalRevenue = products.reduce((total: number, product: Product) =>
                total + (product.monthlyRevenue || 0), 0
            );

            const projectedAnnual = totalRevenue * 12;

            // Get user stats from user service for conversion data
            const userStats = await this.fetchUserStats();

            return {
                period,
                currentRevenue: totalRevenue,
                projectedAnnual,
                revenueByProduct: products
                    .filter((p: Product) => p.monthlyRevenue && p.monthlyRevenue > 0)
                    .map((p: Product) => ({
                        name: p.name,
                        slug: p.slug,
                        monthlyRevenue: p.monthlyRevenue,
                        annualProjection: (p.monthlyRevenue || 0) * 12,
                        status: p.status,
                    }))
                    .sort((a: any, b: any) => (b.monthlyRevenue || 0) - (a.monthlyRevenue || 0)),
                topProducts: userStats.topProducts || [],
                metrics: {
                    totalProducts: products.length,
                    liveProducts: products.filter((p: Product) => p.status === 'LIVE').length,
                    avgRevenuePerProduct: products.length > 0 ? totalRevenue / products.length : 0,
                },
            };
        } catch (error) {
            console.error('Failed to fetch revenue analytics:', error);
            throw error;
        }
    }

    async getUserGrowthAnalytics(period: string = '30d') {
        try {
            // Fetch user growth data from user service
            const response = await firstValueFrom(
                this.httpService.get(`${process.env.USER_SERVICE_URL}/api/users/admin/stats`)
            );

            return {
                period,
                growth: response.data.growth,
                userGrowth: response.data.userGrowth,
                totals: response.data.totals,
                recentUsers: response.data.recentUsers,
            };
        } catch (error) {
            console.error('Failed to fetch user growth analytics:', error);
            return {
                period,
                growth: { currentMonth: 0, previousMonth: 0, percentage: 0, trend: 'stable' },
                userGrowth: [],
                totals: { users: 0, admins: 0, activeProducts: 0 },
                recentUsers: [],
            };
        }
    }

    private async fetchProductUsers(productSlug: string) {
        try {
            const response = await firstValueFrom(
                this.httpService.get(
                    `${process.env.USER_SERVICE_URL}/api/users/admin/products/${productSlug}/users`
                )
            );
            return response.data || [];
        } catch (error) {
            console.error('Failed to fetch product users:', error);
            return [];
        }
    }
}