// SERVICES/api-gateway/src/clients/hub-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface CreateProductListingDto {
    name: string;
    description: string;
    category: string;
    tags?: string[];
}

interface UpdateProductDto {
    name?: string;
    description?: string;
    status?: 'active' | 'inactive' | 'archived';
}

@Injectable()
export class HubServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['HUB_SERVICE_URL'] || 'http://localhost:4005',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Dashboard & Analytics
    async getDashboardStats() {
        try {
            const response = await this.client.get('/dashboard/stats');
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch dashboard stats',
                error.response?.status || 500,
            );
        }
    }

    async getRevenueAnalytics(query?: { startDate?: string; endDate?: string; product?: string }) {
        try {
            const response = await this.client.get('/analytics/revenue', { params: query });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch revenue analytics',
                error.response?.status || 500,
            );
        }
    }

    // Products Catalog
    async getAllProducts(query?: { status?: string; category?: string }) {
        try {
            const response = await this.client.get('/products', { params: query });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch products',
                error.response?.status || 500,
            );
        }
    }

    async getProductById(productId: string) {
        try {
            const response = await this.client.get(`/products/${productId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Product not found',
                error.response?.status || 404,
            );
        }
    }

    async createProductListing(data: CreateProductListingDto) {
        try {
            const response = await this.client.post('/products', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create product',
                error.response?.status || 500,
            );
        }
    }

    async updateProduct(productId: string, data: UpdateProductDto) {
        try {
            const response = await this.client.patch(`/products/${productId}`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to update product',
                error.response?.status || 500,
            );
        }
    }

    async deleteProduct(productId: string) {
        try {
            const response = await this.client.delete(`/products/${productId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to delete product',
                error.response?.status || 500,
            );
        }
    }

    // Team Management
    async getTeamMembers() {
        try {
            const response = await this.client.get('/team');
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch team members',
                error.response?.status || 500,
            );
        }
    }

    async inviteTeamMember(email: string, role: string) {
        try {
            const response = await this.client.post('/team/invite', { email, role });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to invite team member',
                error.response?.status || 500,
            );
        }
    }

    async removeTeamMember(memberId: string) {
        try {
            const response = await this.client.delete(`/team/${memberId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to remove team member',
                error.response?.status || 500,
            );
        }
    }

    // Notifications & Announcements
    async getAnnouncements() {
        try {
            const response = await this.client.get('/announcements');
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch announcements',
                error.response?.status || 500,
            );
        }
    }

    async createAnnouncement(data: { title: string; content: string; priority?: string }) {
        try {
            const response = await this.client.post('/announcements', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create announcement',
                error.response?.status || 500,
            );
        }
    }
}