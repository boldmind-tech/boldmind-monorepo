
import APIClient from '../client';

export class HubEndpoints {
    constructor(private client: APIClient) { }

    // Dashboard & Analytics
    async getDashboardStats() {
        return this.client.get<any>('/hub/dashboard/stats');
    }

    async getRevenueAnalytics(params?: { startDate?: string; endDate?: string; product?: string }) {
        return this.client.get<any>('/hub/analytics/revenue', { params });
    }

    // Products
    async getProducts(params?: { status?: string; category?: string }) {
        return this.client.get<any>('/hub/products', { params });
    }

    async getProduct(id: string) {
        return this.client.get<any>(`/hub/products/${id}`);
    }

    async createProduct(data: any) {
        return this.client.post<any>('/hub/products', data);
    }

    async updateProduct(id: string, data: any) {
        return this.client.patch<any>(`/hub/products/${id}`, data);
    }

    async deleteProduct(id: string) {
        return this.client.delete<any>(`/hub/products/${id}`);
    }

    // Team
    async getTeamMembers() {
        return this.client.get<any>('/hub/team');
    }

    async inviteTeamMember(data: { email: string; role: string }) {
        return this.client.post<any>('/hub/team/invite', data);
    }

    async removeTeamMember(id: string) {
        return this.client.delete<any>(`/hub/team/${id}`);
    }

    // Announcements
    async getAnnouncements() {
        return this.client.get<any>('/hub/announcements');
    }

    async createAnnouncement(data: { title: string; content: string; priority?: string }) {
        return this.client.post<any>('/hub/announcements', data);
    }

    // Legacy / To be deprecated if not in Gateway
    async getFeed() {
        return this.client.get(`/hub/feed`);
    }

    async getEvents() {
        return this.client.get(`/hub/events`);
    }

    async getWorkspaces() {
        return this.client.get(`/hub/workspaces`);
    }
}
