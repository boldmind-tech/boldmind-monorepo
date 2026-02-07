// SERVICES/api-gateway/src/clients/anontruth-mic-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface CreateDropDto {
    audioData: string;
    title?: string;
    category: string;
    location?: {
        lat: number;
        lng: number;
        radius?: number;
    };
    tags?: string[];
    voiceDistortion?: boolean;
    autoDeleteAfter?: number; // hours
}

interface BoostDropDto {
    amount: number;
    duration: number;
    targetArea?: {
        lat: number;
        lng: number;
        radius: number;
    };
}

@Injectable()
export class AnontruthMicServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['ANONTRUTH_MIC_SERVICE_URL'] || 'http://localhost:4033',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Audio Drops
    async createDrop(userId: string, data: CreateDropDto) {
        try {
            const response = await this.client.post('/drops', {
                ...data,
                userId, // stored hashed/anonymized
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create drop',
                error.response?.status || 500,
            );
        }
    }

    async getDrops(query?: {
        category?: string;
        location?: string;
        radius?: number;
        tags?: string[];
        boosted?: boolean;
    }) {
        try {
            const response = await this.client.get('/drops', { params: query });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch drops',
                error.response?.status || 500,
            );
        }
    }

    async getDropById(dropId: string) {
        try {
            const response = await this.client.get(`/drops/${dropId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Drop not found or expired',
                error.response?.status || 404,
            );
        }
    }

    async listenToDrop(dropId: string, listenerId: string) {
        try {
            const response = await this.client.post(`/drops/${dropId}/listen`, {
                listenerId, // anonymized
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to access drop',
                error.response?.status || 500,
            );
        }
    }

    // Boosting
    async boostDrop(dropId: string, data: BoostDropDto) {
        try {
            const response = await this.client.post(`/drops/${dropId}/boost`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to boost drop',
                error.response?.status || 500,
            );
        }
    }

    // Reactions (anonymous)
    async addReaction(dropId: string, reaction: 'support' | 'important' | 'investigate') {
        try {
            const response = await this.client.post(`/drops/${dropId}/reactions`, {
                reaction,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to add reaction',
                error.response?.status || 500,
            );
        }
    }

    // Categories
    async getCategories() {
        try {
            const response = await this.client.get('/categories');
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch categories',
                error.response?.status || 500,
            );
        }
    }

    // Moderation
    async reportDrop(dropId: string, reason: string, reporterId?: string) {
        try {
            const response = await this.client.post(`/drops/${dropId}/report`, {
                reason,
                reporterId, // optional, anonymized
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to report drop',
                error.response?.status || 500,
            );
        }
    }

    // Trending
    async getTrendingDrops(location?: string, timeframe?: string) {
        try {
            const response = await this.client.get('/drops/trending', {
                params: { location, timeframe },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch trending drops',
                error.response?.status || 500,
            );
        }
    }

    // User's own drops (hashed ID only)
    async getMyDrops(hashedUserId: string) {
        try {
            const response = await this.client.get(`/users/${hashedUserId}/drops`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch your drops',
                error.response?.status || 500,
            );
        }
    }

    // Verification (for journalists/partners)
    async requestVerification(dropId: string, journalistId: string, credentials: any) {
        try {
            const response = await this.client.post(`/drops/${dropId}/verify`, {
                journalistId,
                credentials,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Verification request failed',
                error.response?.status || 500,
            );
        }
    }

    // Stats
    async getPlatformStats() {
        try {
            const response = await this.client.get('/stats');
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch platform stats',
                error.response?.status || 500,
            );
        }
    }
}