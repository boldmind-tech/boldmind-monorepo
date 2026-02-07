// SERVICES/api-gateway/src/clients/analytics-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface TrackEventDto {
    userId?: string;
    event: string;
    properties?: Record<string, any>;
    timestamp?: string;
}

interface CreateReportDto {
    name: string;
    type: string;
    filters?: Record<string, any>;
    schedule?: string;
}

@Injectable()
export class AnalyticsServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['ANALYTICS_SERVICE_URL'] || 'http://localhost:4004',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Event Tracking
    async trackEvent(data: TrackEventDto) {
        try {
            const response = await this.client.post('/events', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to track event',
                error.response?.status || 500,
            );
        }
    }

    async trackBatchEvents(events: TrackEventDto[]) {
        try {
            const response = await this.client.post('/events/batch', { events });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to track batch events',
                error.response?.status || 500,
            );
        }
    }

    // User Analytics
    async getUserActivity(userId: string, period?: string) {
        try {
            const response = await this.client.get(`/users/${userId}/activity`, {
                params: { period },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch user activity',
                error.response?.status || 500,
            );
        }
    }

    async getUserJourney(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/journey`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch user journey',
                error.response?.status || 500,
            );
        }
    }

    // Product Analytics
    async getProductMetrics(productSlug: string, period?: string) {
        try {
            const response = await this.client.get(`/products/${productSlug}/metrics`, {
                params: { period },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch product metrics',
                error.response?.status || 500,
            );
        }
    }

    async getProductUsage(productSlug: string) {
        try {
            const response = await this.client.get(`/products/${productSlug}/usage`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch product usage',
                error.response?.status || 500,
            );
        }
    }

    // Dashboard Data
    async getDashboardOverview() {
        try {
            const response = await this.client.get('/dashboard/overview');
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch dashboard overview',
                error.response?.status || 500,
            );
        }
    }

    async getRealtimeMetrics() {
        try {
            const response = await this.client.get('/metrics/realtime');
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch realtime metrics',
                error.response?.status || 500,
            );
        }
    }

    // Reports
    async createReport(data: CreateReportDto) {
        try {
            const response = await this.client.post('/reports', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create report',
                error.response?.status || 500,
            );
        }
    }

    async getReports() {
        try {
            const response = await this.client.get('/reports');
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch reports',
                error.response?.status || 500,
            );
        }
    }

    async generateReport(reportId: string) {
        try {
            const response = await this.client.post(`/reports/${reportId}/generate`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to generate report',
                error.response?.status || 500,
            );
        }
    }

    // Funnel Analysis
    async getFunnelAnalysis(funnelId: string) {
        try {
            const response = await this.client.get(`/funnels/${funnelId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch funnel analysis',
                error.response?.status || 500,
            );
        }
    }

    async createFunnel(data: { name: string; steps: string[] }) {
        try {
            const response = await this.client.post('/funnels', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create funnel',
                error.response?.status || 500,
            );
        }
    }

    // Retention Analysis
    async getRetentionCohort(period?: string) {
        try {
            const response = await this.client.get('/retention/cohort', {
                params: { period },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch retention data',
                error.response?.status || 500,
            );
        }
    }

    // Revenue Analytics
    async getRevenueBreakdown(period?: string) {
        try {
            const response = await this.client.get('/revenue/breakdown', {
                params: { period },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch revenue breakdown',
                error.response?.status || 500,
            );
        }
    }

    async getMrrChurn() {
        try {
            const response = await this.client.get('/revenue/mrr-churn');
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch MRR/Churn',
                error.response?.status || 500,
            );
        }
    }
}