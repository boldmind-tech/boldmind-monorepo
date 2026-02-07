// APPS/WEB_APPS/boldmind-hub/lib/api-adapters.ts
import { createCurrentProductAPI, HubEndpoints } from '@boldmind/api-client';

/**
 * Hub API Adapter
 * Centralizes API calls for BoldMind Hub dashboard and admin features
 */
const api = createCurrentProductAPI();
const hubEndpoints = new HubEndpoints(api.gateway);

export const hubAPI = {
    /**
     * Dashboard & Analytics
     */
    getDashboardStats: () => hubEndpoints.getDashboardStats(),
    getRevenueAnalytics: (params?: any) => hubEndpoints.getRevenueAnalytics(params),

    /**
     * Products Catalog
     */
    products: {
        list: (params?: any) => hubEndpoints.getProducts(params),
        get: (id: string) => hubEndpoints.getProduct(id),
        create: (data: any) => hubEndpoints.createProduct(data),
        update: (id: string, data: any) => hubEndpoints.updateProduct(id, data),
        delete: (id: string) => hubEndpoints.deleteProduct(id),
    },

    /**
     * Team Management
     */
    team: {
        list: () => hubEndpoints.getTeamMembers(),
        invite: (data: { email: string; role: string }) => hubEndpoints.inviteTeamMember(data),
        remove: (id: string) => hubEndpoints.removeTeamMember(id),
    },

    /**
     * Announcements
     */
    announcements: {
        list: () => hubEndpoints.getAnnouncements(),
        create: (data: { title: string; content: string; priority?: string }) => hubEndpoints.createAnnouncement(data),
    },

    /**
     * Legacy / Deprecated - Mapping to new endpoints where possible
     */
    getFeed: () => hubEndpoints.getDashboardStats(), // Map to dashboard for now
    events: {
        list: () => hubEndpoints.getAnnouncements(), // Map to announcements
        get: (id: string) => hubEndpoints.getProduct(id), // Not a direct map
        create: (data: any) => hubEndpoints.createAnnouncement(data),
        register: () => Promise.resolve({ success: true }),
    },
    getWorkspaces: () => hubEndpoints.getDashboardStats(),
};

export default hubAPI;