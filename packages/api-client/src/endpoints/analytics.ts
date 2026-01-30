import { AnalyticsPeriod, AnalyticsData, UserGrowthData, RevenueData } from '../types/api';
import APIClient from '../client';

// Create a default instance for analytics
const defaultClient = new APIClient(process.env['NEXT_PUBLIC_API_URL'] || 'http://localhost:4000/api');

export const analyticsApi = {
  getDashboardStats: (period?: AnalyticsPeriod) =>
    defaultClient.get<AnalyticsData>('/analytics/dashboard', period ? { params: period } : {}),

  getUserGrowth: (period: AnalyticsPeriod) =>
    defaultClient.get<UserGrowthData[]>('/analytics/user-growth', { params: period }),

  getRevenue: (period: AnalyticsPeriod) =>
    defaultClient.get<RevenueData[]>('/analytics/revenue', { params: period }),

  getProductAnalytics: (productId: string, period?: AnalyticsPeriod) =>
    defaultClient.get<any>(`/analytics/products/${productId}`, period ? { params: period } : {}),

  getActiveUsers: (period: AnalyticsPeriod) =>
    defaultClient.get<{ date: string; count: number }[]>('/analytics/active-users', { params: period }),

  getConversionRates: (period: AnalyticsPeriod) =>
    defaultClient.get<any>('/analytics/conversion-rates', { params: period }),

  getTopReferrers: (period: AnalyticsPeriod) =>
    defaultClient.get<Array<{ referrer: string; count: number; percentage: number }>>(
      '/analytics/top-referrers',
      { params: period }
    ),

  trackEvent: (event: string, data?: any) =>
    defaultClient.post('/analytics/events', { event, data })
};