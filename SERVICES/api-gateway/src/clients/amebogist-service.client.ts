// SERVICES/api-gateway/src/clients/amebogist-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface CreateArticleDto {
    title: string;
    content: string;
    category: string;
    tags?: string[];
    featuredImage?: string;
    language?: 'english' | 'pidgin';
}

interface UpdateArticleDto {
    title?: string;
    content?: string;
    status?: 'draft' | 'published' | 'archived';
}

interface CreateCommentDto {
    content: string;
    parentId?: string;
}

@Injectable()
export class AmebogistServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['AMEBOGIST_SERVICE_URL'] || 'http://localhost:4021',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Articles
    async getAllArticles(query?: {
        category?: string;
        tag?: string;
        page?: number;
        limit?: number;
        status?: string;
    }) {
        try {
            const response = await this.client.get('/articles', { params: query });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch articles',
                error.response?.status || 500,
            );
        }
    }

    async getArticleBySlug(slug: string) {
        try {
            const response = await this.client.get(`/articles/${slug}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Article not found',
                error.response?.status || 404,
            );
        }
    }

    async createArticle(authorId: string, data: CreateArticleDto) {
        try {
            const response = await this.client.post('/articles', {
                ...data,
                authorId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create article',
                error.response?.status || 500,
            );
        }
    }

    async updateArticle(articleId: string, data: UpdateArticleDto) {
        try {
            const response = await this.client.patch(`/articles/${articleId}`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to update article',
                error.response?.status || 500,
            );
        }
    }

    async deleteArticle(articleId: string) {
        try {
            const response = await this.client.delete(`/articles/${articleId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to delete article',
                error.response?.status || 500,
            );
        }
    }

    // Comments
    async getArticleComments(articleId: string) {
        try {
            const response = await this.client.get(`/articles/${articleId}/comments`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch comments',
                error.response?.status || 500,
            );
        }
    }

    async createComment(articleId: string, userId: string, data: CreateCommentDto) {
        try {
            const response = await this.client.post(`/articles/${articleId}/comments`, {
                ...data,
                userId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create comment',
                error.response?.status || 500,
            );
        }
    }

    async reactToComment(commentId: string, reaction: string) {
        try {
            const response = await this.client.patch(`/comments/${commentId}/react`, { reaction });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to react to comment',
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

    // Trending
    async getTrendingArticles(limit?: number) {
        try {
            const response = await this.client.get('/articles/trending', {
                params: { limit },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch trending articles',
                error.response?.status || 500,
            );
        }
    }

    // Search
    async searchArticles(query: string) {
        try {
            const response = await this.client.get('/articles/search', {
                params: { q: query },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Search failed',
                error.response?.status || 500,
            );
        }
    }

    async generateAIPost(data: { topic: string; style?: string; language?: string; model?: string }) {
        try {
            const response = await this.client.post('/articles/generate-ai', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'AI generation failed',
                error.response?.status || 500,
            );
        }
    }

    async getTrends() {
        try {
            const response = await this.client.get('/articles/trends');
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch trends',
                error.response?.status || 500,
            );
        }
    }

    async triggerVideoFactory(id: string) {
        try {
            const response = await this.client.post(`/articles/${id}/video-factory`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to trigger video factory',
                error.response?.status || 500,
            );
        }
    }

    // Analytics (for authors)
    async getAuthorStats(authorId: string) {
        try {
            const response = await this.client.get(`/authors/${authorId}/stats`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch author stats',
                error.response?.status || 500,
            );
        }
    }
}