// APPS/WEB_APPS/amebogist/lib/api.ts
import { createCurrentProductAPI, AmebogistEndpoints } from '@boldmind/api-client';

/**
 * Amebogist API Client
 * Centralizes API calls using the central @boldmind/api-client
 */
const api = createCurrentProductAPI();
const amebogistEndpoints = new AmebogistEndpoints(api.gateway);

export const amebogistAPI = {
    /**
     * Articles management
     */
    articles: {
        list: (query?: any) => amebogistEndpoints.getArticles(query),
        get: (slug: string) => amebogistEndpoints.getArticle(slug),
        create: (data: any) => amebogistEndpoints.createArticle(data),
        update: (id: string, data: any) => amebogistEndpoints.updateArticle(id, data),
        delete: (id: string) => amebogistEndpoints.deleteArticle(id),
        getTrending: (limit?: number) => amebogistEndpoints.getTrending(limit),
        search: (q: string) => amebogistEndpoints.searchArticles(q),
        getComments: (id: string) => amebogistEndpoints.getComments(id),
        createComment: (id: string, data: any) => amebogistEndpoints.createComment(id, data),
        reactToComment: (id: string, reaction: any) => amebogistEndpoints.reactToComment(id, reaction),
        generateAI: (data: any) => amebogistEndpoints.generateAIPost(data),
        getTrends: () => amebogistEndpoints.getTrends(),
        triggerVideoFactory: (id: string) => amebogistEndpoints.triggerVideoFactory(id),
    },


    /**
     * Categories
     */
    getCategories: () => amebogistEndpoints.getCategories(),

    /**
     * Author Profile
     */
    getMyStats: () => amebogistEndpoints.getMyStats(),

    /**
     * Generic Gateway calls (for users, etc.)
     */
    gateway: api.gateway,
};

export default amebogistAPI;
