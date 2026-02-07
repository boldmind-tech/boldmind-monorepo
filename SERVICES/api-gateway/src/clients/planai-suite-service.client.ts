// SERVICES/api-gateway/src/clients/planai-suite-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class PlanaiSuiteServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['PLANAI_SUITE_SERVICE_URL'] || 'http://localhost:4014',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Credibility Hubs
    async createPortfolio(userId: string, data: any) {
        try {
            const response = await this.client.post(`/users/${userId}/portfolio`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create portfolio',
                error.response?.status || 500,
            );
        }
    }

    async getPortfolio(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/portfolio`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch portfolio',
                error.response?.status || 500,
            );
        }
    }

    async optimizeLinkedIn(userId: string, profileData: any) {
        try {
            const response = await this.client.post(`/users/${userId}/linkedin-optimize`, profileData);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'LinkedIn optimization failed',
                error.response?.status || 500,
            );
        }
    }

    // Business Planning
    async generateBusinessPlan(userId: string, data: {
        businessName: string;
        industry: string;
        stage: string;
        budget?: number;
    }) {
        try {
            const response = await this.client.post(`/users/${userId}/business-plan`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to generate business plan',
                error.response?.status || 500,
            );
        }
    }

    async getBusinessPlan(userId: string, planId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/business-plan/${planId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Business plan not found',
                error.response?.status || 404,
            );
        }
    }

    // Financial Forecasting
    async createFinancialModel(userId: string, data: any) {
        try {
            const response = await this.client.post(`/users/${userId}/financial-model`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create financial model',
                error.response?.status || 500,
            );
        }
    }

    async getCashflowProjection(userId: string, modelId: string, months?: number) {
        try {
            const response = await this.client.get(`/users/${userId}/financial-model/${modelId}/cashflow`, {
                params: { months },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch cashflow projection',
                error.response?.status || 500,
            );
        }
    }

    // Investor Readiness
    async generatePitchDeck(userId: string, businessPlanId: string) {
        try {
            const response = await this.client.post(`/users/${userId}/pitch-deck`, {
                businessPlanId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to generate pitch deck',
                error.response?.status || 500,
            );
        }
    }

    async getInvestorDocuments(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/investor-documents`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch investor documents',
                error.response?.status || 500,
            );
        }
    }

    // Branding & Design
    async generateLogo(userId: string, data: {
        businessName: string;
        industry: string;
        stylePreferences?: string[];
    }) {
        try {
            const response = await this.client.post(`/users/${userId}/branding/logo`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Logo generation failed',
                error.response?.status || 500,
            );
        }
    }

    async generateBrandKit(userId: string, logoId: string) {
        try {
            const response = await this.client.post(`/users/${userId}/branding/kit`, {
                logoId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Brand kit generation failed',
                error.response?.status || 500,
            );
        }
    }

    // Digital Storefronts
    async createStore(userId: string, data: {
        storeName: string;
        category: string;
        description?: string;
    }) {
        try {
            const response = await this.client.post(`/users/${userId}/store`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create store',
                error.response?.status || 500,
            );
        }
    }

    async getStore(userId: string, storeId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/store/${storeId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Store not found',
                error.response?.status || 404,
            );
        }
    }

    async addProduct(userId: string, storeId: string, productData: any) {
        try {
            const response = await this.client.post(`/users/${userId}/store/${storeId}/products`, productData);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to add product',
                error.response?.status || 500,
            );
        }
    }

    // Marketing Automation
    async createCampaign(userId: string, data: any) {
        try {
            const response = await this.client.post(`/users/${userId}/campaigns`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create campaign',
                error.response?.status || 500,
            );
        }
    }

    async getCampaigns(userId: string, status?: string) {
        try {
            const response = await this.client.get(`/users/${userId}/campaigns`, {
                params: { status },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch campaigns',
                error.response?.status || 500,
            );
        }
    }

    // Analytics Dashboard
    async getBusinessAnalytics(userId: string, period?: string) {
        try {
            const response = await this.client.get(`/users/${userId}/analytics`, {
                params: { period },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch analytics',
                error.response?.status || 500,
            );
        }
    }

    async getCrossPlatformMetrics(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/cross-platform-metrics`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch cross-platform metrics',
                error.response?.status || 500,
            );
        }
    }
}