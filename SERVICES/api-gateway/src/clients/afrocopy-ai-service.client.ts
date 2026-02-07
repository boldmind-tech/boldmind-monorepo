// SERVICES/api-gateway/src/clients/afrocopy-ai-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface GenerateCopyDto {
    prompt: string;
    type: 'social' | 'ad' | 'email' | 'blog' | 'product';
    platform?: string;
    tone?: 'professional' | 'casual' | 'humorous' | 'persuasive';
    language?: 'english' | 'pidgin' | 'yoruba' | 'igbo' | 'hausa';
    maxLength?: number;
}

interface GenerateEmailDto {
    purpose: 'welcome' | 'promotional' | 'follow-up' | 'abandoned-cart';
    productName?: string;
    targetAudience?: string;
    callToAction?: string;
    language?: string;
}

@Injectable()
export class AfrocopyAiServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['AFROCOPY_AI_SERVICE_URL'] || 'http://localhost:4031',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 30000,
        });
    }

    // Copy Generation
    async generateCopy(userId: string, data: GenerateCopyDto) {
        try {
            const response = await this.client.post('/generate', {
                ...data,
                userId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Copy generation failed',
                error.response?.status || 500,
            );
        }
    }

    async generateSocialCaption(data: {
        topic: string;
        platform: 'instagram' | 'facebook' | 'twitter' | 'linkedin' | 'tiktok';
        tone?: string;
        includeHashtags?: boolean;
        language?: string;
    }) {
        try {
            const response = await this.client.post('/generate/social', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Caption generation failed',
                error.response?.status || 500,
            );
        }
    }

    async generateAdCopy(data: {
        productName: string;
        productDescription: string;
        targetAudience: string;
        platform: string;
        objective?: string;
        language?: string;
    }) {
        try {
            const response = await this.client.post('/generate/ad', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Ad copy generation failed',
                error.response?.status || 500,
            );
        }
    }

    async generateEmailTemplate(data: GenerateEmailDto) {
        try {
            const response = await this.client.post('/generate/email', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Email template generation failed',
                error.response?.status || 500,
            );
        }
    }

    async generateBlogPost(data: {
        topic: string;
        keywords?: string[];
        tone?: string;
        wordCount?: number;
        language?: string;
    }) {
        try {
            const response = await this.client.post('/generate/blog', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Blog post generation failed',
                error.response?.status || 500,
            );
        }
    }

    // Language-specific
    async translateToLocalLanguage(text: string, targetLanguage: 'pidgin' | 'yoruba' | 'igbo' | 'hausa') {
        try {
            const response = await this.client.post('/translate', {
                text,
                targetLanguage,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Translation failed',
                error.response?.status || 500,
            );
        }
    }

    async localizeContent(content: string, region: 'nigeria' | 'ghana' | 'kenya' | 'south-africa') {
        try {
            const response = await this.client.post('/localize', {
                content,
                region,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Localization failed',
                error.response?.status || 500,
            );
        }
    }

    // Templates
    async getTemplates(category?: string, language?: string) {
        try {
            const response = await this.client.get('/templates', {
                params: { category, language },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch templates',
                error.response?.status || 500,
            );
        }
    }

    async saveTemplate(userId: string, data: {
        name: string;
        content: string;
        category: string;
        tags?: string[];
    }) {
        try {
            const response = await this.client.post(`/users/${userId}/templates`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to save template',
                error.response?.status || 500,
            );
        }
    }

    // History & Analytics
    async getGenerationHistory(userId: string, type?: string) {
        try {
            const response = await this.client.get(`/users/${userId}/history`, {
                params: type ? { type } : undefined,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch generation history',
                error.response?.status || 500,
            );
        }
    }

    async getUsageStats(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/usage`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch usage stats',
                error.response?.status || 500,
            );
        }
    }

    // Content Improvement
    async improveCopy(originalText: string, suggestions?: string[]) {
        try {
            const response = await this.client.post('/improve', {
                originalText,
                suggestions,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Copy improvement failed',
                error.response?.status || 500,
            );
        }
    }

    async checkGrammar(text: string, language?: string) {
        try {
            const response = await this.client.post('/check/grammar', {
                text,
                language,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Grammar check failed',
                error.response?.status || 500,
            );
        }
    }

    // Brand Voice
    async createBrandVoice(userId: string, data: {
        brandName: string;
        personality: string[];
        sampleContent?: string[];
        targetAudience: string;
    }) {
        try {
            const response = await this.client.post(`/users/${userId}/brand-voice`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create brand voice',
                error.response?.status || 500,
            );
        }
    }

    async generateWithBrandVoice(userId: string, brandVoiceId: string, prompt: string) {
        try {
            const response = await this.client.post(`/users/${userId}/brand-voice/${brandVoiceId}/generate`, {
                prompt,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Generation with brand voice failed',
                error.response?.status || 500,
            );
        }
    }
}