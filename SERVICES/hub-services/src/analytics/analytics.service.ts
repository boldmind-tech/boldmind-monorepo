// SERVICES/hub-service/src/analytics/analytics.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BOLDMIND_PRODUCTS } from '@boldmind/utils';

@Injectable()
export class AnalyticsService {
    constructor(private prisma: PrismaService) { }

    async getEcosystemAnalytics() {
        const [
            totalProducts,
            totalRevenue,
            totalUsers,
            liveProducts,
            buildingProducts,
            revenueData,
            userGrowthData,
        ] = await Promise.all([
            this.prisma.product.count(),
            this.prisma.revenueTracking.aggregate({
                _sum: { revenue: true },
            }),
            this.prisma.userGrowth.aggregate({
                _sum: { totalUsers: true },
            }),
            this.prisma.product.count({ where: { status: 'LIVE' } }),
            this.prisma.product.count({ where: { status: 'BUILDING' } }),
            this.prisma.revenueTracking.findMany({
                orderBy: { date: 'desc' },
                take: 30,
                include: { product: true },
            }),
            this.prisma.userGrowth.findMany({
                orderBy: { date: 'desc' },
                take: 30,
                include: { product: true },
            }),
        ]);

        // Calculate trends
        const revenueTrend = await this.calculateRevenueTrend();
        const userTrend = await this.calculateUserTrend();

        return {
            summary: {
                totalProducts,
                totalRevenue: Number(totalRevenue._sum.revenue || 0),
                totalUsers: totalUsers._sum.totalUsers || 0,
                liveProducts,
                buildingProducts,
                plannedProducts: BOLDMIND_PRODUCTS.filter(p => p.status === 'PLANNED').length,
                conceptProducts: BOLDMIND_PRODUCTS.filter(p => p.status === 'CONCEPT').length,
            },
            trends: {
                revenue: revenueTrend,
                users: userTrend,
            },
            recentRevenue: revenueData,
            recentUserGrowth: userGrowthData,
            topPerformingProducts: await this.getTopPerformingProducts(),
            categoryBreakdown: await this.getCategoryBreakdown(),
        };
    }

    async trackAnalyticsEvent(eventData: any) {
        return this.prisma.analyticsEvent.create({
            data: {
                ...eventData,
                createdAt: new Date(),
            },
        });
    }

    async getProductAnalytics(productId: string, timeframe: string = '30d') {
        const product = await this.prisma.product.findUnique({ where: { id: productId } });
        if (!product) {
            return {
                revenue: [],
                users: [],
                metrics: [],
                events: [],
                insights: [],
            };
        }

        const [revenue, users, metrics, events] = await Promise.all([
            this.prisma.revenueTracking.findMany({
                where: { productId },
                orderBy: { date: 'desc' },
                take: timeframe === '30d' ? 30 : timeframe === '7d' ? 7 : 90,
            }),
            this.prisma.userGrowth.findMany({
                where: { productId },
                orderBy: { date: 'desc' },
                take: timeframe === '30d' ? 30 : timeframe === '7d' ? 7 : 90,
            }),
            this.prisma.productMetric.findMany({
                where: { productId },
                orderBy: { date: 'desc' },
                take: 50,
            }),
            this.prisma.analyticsEvent.findMany({
                where: { productSlug: product.slug },
                orderBy: { createdAt: 'desc' },
                take: 100,
            }),
        ]);

        return {
            revenue,
            users,
            metrics,
            events,
            insights: await this.generateProductInsights(productId, revenue, users),
        };
    }

    private async calculateRevenueTrend() {
        const now = new Date();
        const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));
        const sixtyDaysAgo = new Date(now.setDate(now.getDate() - 60));

        const [currentRevenue, previousRevenue] = await Promise.all([
            this.prisma.revenueTracking.aggregate({
                where: { date: { gte: thirtyDaysAgo } },
                _sum: { revenue: true },
            }),
            this.prisma.revenueTracking.aggregate({
                where: { date: { gte: sixtyDaysAgo, lt: thirtyDaysAgo } },
                _sum: { revenue: true },
            }),
        ]);

        const current = Number(currentRevenue._sum.revenue || 0);
        const previous = Number(previousRevenue._sum.revenue || 0);
        const change = previous > 0 ? ((current - previous) / previous) * 100 : 0;

        return {
            current,
            previous,
            change,
            direction: change >= 0 ? 'up' : 'down',
        };
    }

    private async calculateUserTrend() {
        const now = new Date();
        const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));
        const sixtyDaysAgo = new Date(now.setDate(now.getDate() - 60));

        const [currentUsers, previousUsers] = await Promise.all([
            this.prisma.userGrowth.aggregate({
                where: { date: { gte: thirtyDaysAgo } },
                _sum: { newUsers: true },
            }),
            this.prisma.userGrowth.aggregate({
                where: { date: { gte: sixtyDaysAgo, lt: thirtyDaysAgo } },
                _sum: { newUsers: true },
            }),
        ]);

        const current = Number(currentUsers._sum.newUsers || 0);
        const previous = Number(previousUsers._sum.newUsers || 0);
        const change = previous > 0 ? ((current - previous) / previous) * 100 : 0;

        return {
            current,
            previous,
            change,
            direction: change >= 0 ? 'up' : 'down',
        };
    }

    private async getTopPerformingProducts(limit: number = 5) {
        const products = await this.prisma.product.findMany({
            where: { status: 'LIVE' },
            include: {
                revenueTracking: {
                    orderBy: { date: 'desc' },
                    take: 1,
                },
                userGrowth: {
                    orderBy: { date: 'desc' },
                    take: 1,
                },
            },
            orderBy: { monthlyRevenue: 'desc' },
            take: limit,
        });

        return products.map(p => ({
            id: p.id,
            name: p.name,
            slug: p.slug,
            monthlyRevenue: p.monthlyRevenue,
            totalUsers: p.totalUsers,
            activeUsers: p.activeUsers,
            latestRevenue: p.revenueTracking[0]?.revenue || 0,
            latestUsers: p.userGrowth[0]?.totalUsers || 0,
        }));
    }

    private async getCategoryBreakdown() {
        const categories = await this.prisma.product.groupBy({
            by: ['category'],
            _count: { id: true },
            _sum: { monthlyRevenue: true },
        });

        return categories.map(cat => ({
            category: cat.category,
            count: cat._count.id,
            totalRevenue: Number(cat._sum.monthlyRevenue || 0),
            percentage: 0, // Will be calculated
        }));
    }

    private async generateProductInsights(_productId: string, revenue: any[], users: any[]) {
        if (revenue.length === 0 || users.length === 0) return [];

        const insights = [];

        // Revenue trend insight
        if (revenue.length >= 2) {
            const latestRevenue = Number(revenue[0].revenue);
            const previousRevenue = Number(revenue[1].revenue);
            const revenueGrowth = ((latestRevenue - previousRevenue) / previousRevenue) * 100;

            if (revenueGrowth > 20) {
                insights.push({
                    type: 'POSITIVE',
                    title: 'Strong Revenue Growth',
                    description: `Revenue increased by ${revenueGrowth.toFixed(1)}% compared to previous period`,
                    priority: 'HIGH',
                });
            } else if (revenueGrowth < -10) {
                insights.push({
                    type: 'WARNING',
                    title: 'Revenue Decline Detected',
                    description: `Revenue decreased by ${Math.abs(revenueGrowth).toFixed(1)}%`,
                    priority: 'HIGH',
                });
            }
        }

        // User growth insight
        if (users.length >= 2) {
            const latestUsers = users[0].newUsers;
            const previousUsers = users[1].newUsers;
            const userGrowth = ((latestUsers - previousUsers) / previousUsers) * 100;

            if (userGrowth > 30) {
                insights.push({
                    type: 'POSITIVE',
                    title: 'High User Growth',
                    description: `New users increased by ${userGrowth.toFixed(1)}%`,
                    priority: 'MEDIUM',
                });
            }
        }

        return insights;
    }
}