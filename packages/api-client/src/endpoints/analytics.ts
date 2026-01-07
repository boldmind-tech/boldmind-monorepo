import { api } from '../client';
import { AnalyticsPeriod, AnalyticsData, UserGrowthData, RevenueData } from '../types/api';

export const analyticsApi = {
  getDashboardStats: (period?: AnalyticsPeriod) => 
    api.get<AnalyticsData>('/analytics/dashboard', period ? { params: period } : {}),
  
  getUserGrowth: (period: AnalyticsPeriod) => 
    api.get<UserGrowthData[]>('/analytics/user-growth', { params: period }),
  
  getRevenue: (period: AnalyticsPeriod) => 
    api.get<RevenueData[]>('/analytics/revenue', { params: period }),
  
  getProductAnalytics: (productId: string, period?: AnalyticsPeriod) => 
    api.get<any>(`/analytics/products/${productId}`, period ? { params: period } : {}),
  
  getActiveUsers: (period: AnalyticsPeriod) => 
    api.get<{ date: string; count: number }[]>('/analytics/active-users', { params: period }),
  
  getConversionRates: (period: AnalyticsPeriod) => 
    api.get<any>('/analytics/conversion-rates', { params: period }),
  
  getTopReferrers: (period: AnalyticsPeriod) => 
    api.get<Array<{ referrer: string; count: number; percentage: number }>>(
      '/analytics/top-referrers',
      { params: period }
    ),
  
  trackEvent: (event: string, data?: any) => 
    api.post('/analytics/events', { event, data })
};