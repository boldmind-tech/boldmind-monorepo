
import APIClient from '../client';

export class AnontruthMicEndpoints {
    constructor(private client: APIClient) { }

    async createDrop(data: any) {
        return this.client.post(`/anontruth-mic/drops`, data);
    }

    async getDrops(query?: any) {
        return this.client.get(`/anontruth-mic/drops`, { params: query });
    }

    async getTrendingDrops(location?: string, timeframe?: string) {
        return this.client.get(`/anontruth-mic/drops/trending`, { params: { location, timeframe } });
    }

    async getMyDrops() {
        return this.client.get(`/anontruth-mic/drops/me`);
    }

    async getDropById(id: string) {
        return this.client.get(`/anontruth-mic/drops/${id}`);
    }

    async listenToDrop(id: string) {
        return this.client.post(`/anontruth-mic/drops/${id}/listen`);
    }

    async boostDrop(id: string, data: any) {
        return this.client.post(`/anontruth-mic/drops/${id}/boost`, data);
    }

    async addReaction(id: string, reaction: 'support' | 'important' | 'investigate') {
        return this.client.post(`/anontruth-mic/drops/${id}/reactions`, { reaction });
    }

    async getCategories() {
        return this.client.get(`/anontruth-mic/categories`);
    }

    async reportDrop(id: string, reason: string) {
        return this.client.post(`/anontruth-mic/drops/${id}/report`, { reason });
    }

    async requestVerification(id: string, credentials: any) {
        return this.client.post(`/anontruth-mic/drops/${id}/verify`, { credentials });
    }

    async getPlatformStats() {
        return this.client.get(`/anontruth-mic/stats`);
    }
}
