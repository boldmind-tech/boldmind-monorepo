// SERVICES/api-gateway/src/clients/social-factory-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface CreateContentDto {
    title: string;
    contentType: 'video' | 'image' | 'carousel';
    platform: string[];
    scheduleAt?: string;
}

interface GenerateVideoDto {
    topic: string;
    script?: string;
    style?: string;
    duration?: number;
}

@Injectable()
export class SocialFactoryServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['SOCIAL_FACTORY_SERVICE_URL'] || 'http://localhost:4022',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 60000, // Longer timeout for AI generation
        });
    }

    // Content Generation
    async generateVideo(data: GenerateVideoDto) {
        try {
            const response = await this.client.post('/content/generate/video', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to generate video',
                error.response?.status || 500,
            );
        }
    }

    async generateCaption(topic: string, platform: string, tone?: string) {
        try {
            const response = await this.client.post('/content/generate/caption', {
                topic,
                platform,
                tone,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to generate caption',
                error.response?.status || 500,
            );
        }
    }

    // Content Management
    async createContent(userId: string, data: CreateContentDto) {
        try {
            const response = await this.client.post('/content', {
                ...data,
                userId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create content',
                error.response?.status || 500,
            );
        }
    }

    async getUserContent(userId: string, status?: string) {
        try {
            const response = await this.client.get(`/users/${userId}/content`, {
                params: { status },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch content',
                error.response?.status || 500,
            );
        }
    }

    // Publishing
    async publishContent(contentId: string) {
        try {
            const response = await this.client.post(`/content/${contentId}/publish`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to publish content',
                error.response?.status || 500,
            );
        }
    }

    async scheduleContent(contentId: string, scheduleAt: string) {
        try {
            const response = await this.client.post(`/content/${contentId}/schedule`, {
                scheduleAt,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to schedule content',
                error.response?.status || 500,
            );
        }
    }

    // Analytics
    async getContentAnalytics(contentId: string) {
        try {
            const response = await this.client.get(`/content/${contentId}/analytics`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch analytics',
                error.response?.status || 500,
            );
        }
    }

    async getAccountAnalytics(userId: string, platform?: string) {
        try {
            const response = await this.client.get(`/users/${userId}/analytics`, {
                params: { platform },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch account analytics',
                error.response?.status || 500,
            );
        }
    }

    // Connected Accounts
    async connectPlatform(userId: string, platform: string, accessToken: string) {
        try {
            const response = await this.client.post(`/users/${userId}/connections`, {
                platform,
                accessToken,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to connect platform',
                error.response?.status || 500,
            );
        }
    }

    async getConnectedPlatforms(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/connections`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch connections',
                error.response?.status || 500,
            );
        }
    }
}