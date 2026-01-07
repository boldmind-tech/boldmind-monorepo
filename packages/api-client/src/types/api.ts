import { AxiosRequestConfig } from 'axios';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    pages?: number;
  };
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
  errors?: Record<string, string[]>;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface QueryParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
  search?: string;
  [key: string]: any;
}

export interface ApiConfig extends AxiosRequestConfig {
  retry?: boolean;
  retryCount?: number;
  cache?: boolean;
  cacheKey?: string;
}

export interface AuthTokens {
  access_token: string;
  refresh_token: string;
  expires_in?: number;
  token_type?: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: string;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductSummary {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  status: string;
  users?: number;
  revenue?: number;
}

export interface PaymentTransaction {
  id: string;
  amount: number;
  currency: string;
  status: string;
  reference: string;
  provider: string;
  createdAt: string;
  description?: string;
}

export interface AnalyticsMetric {
  date: string;
  value: number;
  label?: string;
}

export interface AnalyticsPeriod {
  startDate: string;
  endDate: string;
}

export interface AnalyticsData {
  totalUsers: number;
  activeUsers: number;
  newUsers: number;
  totalRevenue: number;
  revenueGrowth: number;
  conversionRate: number;
  popularProducts: Array<{
    name: string;
    users: number;
    revenue: number;
  }>;
  trafficSources: Array<{
    source: string;
    users: number;
    percentage: number;
  }>;
}

export interface UserGrowthData {
  date: string;
  count: number;
}

export interface RevenueData {
  date: string;
  revenue: number;
}