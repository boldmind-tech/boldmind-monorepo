import { boldMindAPI } from '@boldmind/api-client';

/**
 * Hub API Adapter
 * Wraps the HubEndpoints from @boldmind/api-client for use in boldmind-hub app
 */
export const hubAPIAdapter = {
    // Dashboard & Analytics
    getDashboardStats: async () => {
        const response = await boldMindAPI.hub.getDashboardStats();
        return response.data;
    },

    getRevenueAnalytics: async (params?: { startDate?: string; endDate?: string; product?: string }) => {
        const response = await boldMindAPI.hub.getRevenueAnalytics(params);
        return response.data;
    },

    // Products
    getProducts: async (params?: { status?: string; category?: string }) => {
        const response = await boldMindAPI.hub.getProducts(params);
        return response.data;
    },

    getProduct: async (id: string) => {
        const response = await boldMindAPI.hub.getProduct(id);
        return response.data;
    },

    createProduct: async (data: any) => {
        const response = await boldMindAPI.hub.createProduct(data);
        return response.data;
    },

    updateProduct: async (id: string, data: any) => {
        const response = await boldMindAPI.hub.updateProduct(id, data);
        return response.data;
    },

    deleteProduct: async (id: string) => {
        const response = await boldMindAPI.hub.deleteProduct(id);
        return response.data;
    },

    // Team
    getTeamMembers: async () => {
        const response = await boldMindAPI.hub.getTeamMembers();
        return response.data;
    },

    inviteTeamMember: async (data: { email: string; role: string }) => {
        const response = await boldMindAPI.hub.inviteTeamMember(data);
        return response.data;
    },

    removeTeamMember: async (id: string) => {
        const response = await boldMindAPI.hub.removeTeamMember(id);
        return response.data;
    },

    // Announcements
    getAnnouncements: async () => {
        const response = await boldMindAPI.hub.getAnnouncements();
        return response.data;
    },

    createAnnouncement: async (data: { title: string; content: string; priority?: string }) => {
        const response = await boldMindAPI.hub.createAnnouncement(data);
        return response.data;
    },
};
