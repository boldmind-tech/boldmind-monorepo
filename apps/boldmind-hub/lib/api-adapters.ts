// APPS/WEB_APPS/boldmind-hub/lib/api-adapters.ts
import { boldMindAPI } from '@boldmind/api-client';

/**
 * Hub API Adapter
 * Centralizes API calls for BoldMind Hub dashboard and admin features
 */
export const hubAPI = {
    /**
     * Dashboard & Analytics
     */
    getDashboardStats: () => boldMindAPI.hub.getDashboardStats(),
    getRevenueAnalytics: (params?: any) => boldMindAPI.hub.getRevenueAnalytics(params),

    /**
     * Products Catalog
     */
    products: {
        list: (params?: any) => boldMindAPI.hub.getProducts(params),
        get: (id: string) => boldMindAPI.hub.getProduct(id),
        create: (data: any) => boldMindAPI.hub.createProduct(data),
        update: (id: string, data: any) => boldMindAPI.hub.updateProduct(id, data),
        delete: (id: string) => boldMindAPI.hub.deleteProduct(id),
    },

    /**
     * Team Management
     */
    team: {
        list: () => boldMindAPI.hub.getTeamMembers(),
        invite: (data: { email: string; role: string }) => boldMindAPI.hub.inviteTeamMember(data),
        remove: (id: string) => boldMindAPI.hub.removeTeamMember(id),
    },

    /**
     * Announcements
     */
    announcements: {
        list: () => boldMindAPI.hub.getAnnouncements(),
        create: (data: { title: string; content: string; priority?: string }) => boldMindAPI.hub.createAnnouncement(data),
    },

    /**
     * Legacy / Deprecated - Mapping to new endpoints where possible
     */
    getFeed: () => boldMindAPI.hub.getDashboardStats(), // Map to dashboard for now
    events: {
        list: () => boldMindAPI.hub.getAnnouncements(), // Map to announcements
        get: (id: string) => boldMindAPI.hub.getProduct(id), // Not a direct map
        create: (data: any) => boldMindAPI.hub.createAnnouncement(data),
        register: () => Promise.resolve({ success: true }),
    },
    getWorkspaces: () => boldMindAPI.hub.getDashboardStats(),
};

export default hubAPI;