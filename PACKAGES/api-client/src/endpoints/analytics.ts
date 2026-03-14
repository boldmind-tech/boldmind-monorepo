import { AnalyticsPeriod, AnalyticsData, UserGrowthData, RevenueData } from '../types/api';
import APIClient from '../client';

export class AnalyticsEndpoints {
    constructor(private client: APIClient) { }

    async getDashboardStats(period?: AnalyticsPeriod) {
        return this.client.get<AnalyticsData>('/analytics/dashboard', period ? { params: period } : {});
    }

    async getUserGrowth(period: AnalyticsPeriod) {
        return this.client.get<UserGrowthData[]>('/analytics/user-growth', { params: period });
    }

    async getRevenue(period: AnalyticsPeriod) {
        return this.client.get<RevenueData[]>('/analytics/revenue', { params: period });
    }

    async getProductAnalytics(productId: string, period?: AnalyticsPeriod) {
        return this.client.get<any>(`/analytics/products/${productId}`, period ? { params: period } : {});
    }

    async getActiveUsers(period: AnalyticsPeriod) {
        return this.client.get<{ date: string; count: number }[]>('/analytics/active-users', { params: period });
    }

    async getConversionRates(period: AnalyticsPeriod) {
        return this.client.get<any>('/analytics/conversion-rates', { params: period });
    }

    async getTopReferrers(period: AnalyticsPeriod) {
        return this.client.get<Array<{ referrer: string; count: number; percentage: number }>>(
            '/analytics/top-referrers',
            { params: period }
        );
    }

    async trackEvent(event: string, data?: any) {
        return this.client.post('/analytics/events', { event, data });
    }
}