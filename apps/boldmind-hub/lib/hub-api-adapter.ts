import { boldMindAPI } from '@boldmind/api-client';

/**
 * Hub API Adapter
 * Wraps the HubEndpoints from @boldmind/api-client for use in boldmind-hub app
 */
export const hubAPIAdapter = {
    // Dashboard & Analytics
    getDashboardStats: async () => {
        return boldMindAPI.hub.getDashboardStats();
    },

    getRevenueAnalytics: async (params?: { startDate?: string; endDate?: string; product?: string }) => {
        return boldMindAPI.hub.getRevenueAnalytics(params);
    },

    // Products
    getProducts: async (params?: { status?: string; category?: string }) => {
        return boldMindAPI.hub.getProducts(params);
    },

    getProduct: async (id: string) => {
        return boldMindAPI.hub.getProduct(id);
    },

    createProduct: async (data: any) => {
        return boldMindAPI.hub.createProduct(data);
    },

    updateProduct: async (id: string, data: any) => {
        return boldMindAPI.hub.updateProduct(id, data);
    },

    deleteProduct: async (id: string) => {
        return boldMindAPI.hub.deleteProduct(id);
    },

    // Team
    getTeamMembers: async () => {
        return boldMindAPI.hub.getTeamMembers();
    },

    inviteTeamMember: async (data: { email: string; role: string }) => {
        return boldMindAPI.hub.inviteTeamMember(data);
    },

    removeTeamMember: async (id: string) => {
        return boldMindAPI.hub.removeTeamMember(id);
    },

    // Announcements
    getAnnouncements: async () => {
        return boldMindAPI.hub.getAnnouncements();
    },

    createAnnouncement: async (data: { title: string; content: string; priority?: string }) => {
        return boldMindAPI.hub.createAnnouncement(data);
    },
};
