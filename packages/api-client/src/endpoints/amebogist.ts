import APIClient from '../client';
import { AmebogistArticle, AmebogistCategory, AmebogistComment, AmebogistResponse } from '../types/amebogist';

export class AmebogistEndpoints {
    constructor(private client: APIClient) { }

    // Articles
    async getArticles(params?: {
        category?: string;
        tag?: string;
        page?: number;
        limit?: number;
        status?: string;
    }): Promise<AmebogistResponse<AmebogistArticle[]>> {
        return this.client.get<AmebogistResponse<AmebogistArticle[]>>('/amebogist/articles', { params });
    }

    async getArticle(slug: string): Promise<AmebogistResponse<AmebogistArticle>> {
        return this.client.get<AmebogistResponse<AmebogistArticle>>(`/amebogist/articles/${slug}`);
    }

    async createArticle(data: any): Promise<AmebogistResponse<AmebogistArticle>> {
        return this.client.post<AmebogistResponse<AmebogistArticle>>('/amebogist/articles', data);
    }

    async updateArticle(id: string, data: any): Promise<AmebogistResponse<AmebogistArticle>> {
        return this.client.patch<AmebogistResponse<AmebogistArticle>>(`/amebogist/articles/${id}`, data);
    }

    async deleteArticle(id: string): Promise<void> {
        return this.client.delete<void>(`/amebogist/articles/${id}`);
    }

    // Comments - UPDATED with proper return types
    async getComments(articleId: string): Promise<AmebogistResponse<AmebogistComment[]>> {
        return this.client.get<AmebogistResponse<AmebogistComment[]>>(`/amebogist/articles/${articleId}/comments`);
    }

    async createComment(
        articleId: string,
        data: { content: string; parentId?: string }
    ): Promise<AmebogistComment> {
        return this.client.post<AmebogistComment>(`/amebogist/articles/${articleId}/comments`, data);
    }

    async reactToComment(
        commentId: string,
        reaction: 'like' | 'dislike' | 'love'
    ): Promise<AmebogistComment> {
        return this.client.patch<AmebogistComment>(`/amebogist/comments/${commentId}/react`, { reaction });
    }

    // Categories
    async getCategories(): Promise<AmebogistResponse<AmebogistCategory[]>> {
        return this.client.get<AmebogistResponse<AmebogistCategory[]>>('/amebogist/categories');
    }

    // Trending
    async getTrending(limit?: number): Promise<AmebogistResponse<AmebogistArticle[]>> {
        return this.client.get<AmebogistResponse<AmebogistArticle[]>>('/amebogist/trending', { params: { limit } });
    }

    // Search
    async searchArticles(q: string): Promise<AmebogistResponse<AmebogistArticle[]>> {
        return this.client.get<AmebogistResponse<AmebogistArticle[]>>('/amebogist/search', { params: { q } });
    }

    async generateAIPost(data: { topic: string; style?: string; language?: string; model?: string }): Promise<AmebogistResponse<any>> {
        return this.client.post<AmebogistResponse<any>>('/amebogist/articles/generate-ai', data);
    }

    async getTrends(): Promise<AmebogistResponse<any[]>> {
        return this.client.get<AmebogistResponse<any[]>>('/amebogist/articles/trends');
    }

    async triggerVideoFactory(id: string): Promise<AmebogistResponse<any>> {
        return this.client.post<AmebogistResponse<any>>(`/amebogist/articles/${id}/video-factory`);
    }

    // Author Stats
    async getMyStats(): Promise<AmebogistResponse<any>> {
        return this.client.get<AmebogistResponse<any>>('/amebogist/me/stats');
    }

    async getCreatorArticles(params?: { 
        page?: number; 
        status?: 'draft' | 'published' | 'archived' 
    }): Promise<AmebogistResponse<AmebogistArticle[]>> {
        return this.client.get<AmebogistResponse<AmebogistArticle[]>>('/amebogist/creator/my-articles', { params });
    }

    async getCreatorStats(): Promise<AmebogistResponse<any>> {
        return this.client.get<AmebogistResponse<any>>('/amebogist/creator/stats');
    }
}