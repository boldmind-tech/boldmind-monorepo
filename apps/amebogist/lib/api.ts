// APPS/WEB_APPS/amebogist/lib/api.ts
import { boldMindAPI } from '@boldmind/api-client';

/**
 * Amebogist API Client
 * Centralizes API calls using the central @boldmind/api-client hub
 */
export const amebogistAPI = {
    /**
     * Articles management
     */
    articles: {
        list: (query?: any) => boldMindAPI.amebogist.getArticles(query),
        get: (slug: string) => boldMindAPI.amebogist.getArticle(slug),
        create: (data: any) => boldMindAPI.amebogist.createArticle(data),
        update: (id: string, data: any) => boldMindAPI.amebogist.updateArticle(id, data),
        delete: (id: string) => boldMindAPI.amebogist.deleteArticle(id),
        getTrending: (limit?: number) => boldMindAPI.amebogist.getTrending(limit),
        search: (q: string) => boldMindAPI.amebogist.searchArticles(q),
        getComments: (id: string) => boldMindAPI.amebogist.getComments(id),
        createComment: (id: string, data: any) => boldMindAPI.amebogist.createComment(id, data),
        reactToComment: (id: string, reaction: any) => boldMindAPI.amebogist.reactToComment(id, reaction),
        generateAI: (data: any) => boldMindAPI.amebogist.generateAIPost(data),
        getTrends: () => boldMindAPI.amebogist.getTrends(),
        triggerVideoFactory: (id: string) => boldMindAPI.amebogist.triggerVideoFactory(id),
    },

    /**
     * Categories
     */
    getCategories: () => boldMindAPI.amebogist.getCategories(),

    /**
     * Author Profile
     */
    getMyStats: () => boldMindAPI.amebogist.getMyStats(),

    /**
     * Hub & Core modules access
     */
    hub: boldMindAPI.hub,
    users: boldMindAPI.users,
    auth: boldMindAPI.auth,
};

export default amebogistAPI;
