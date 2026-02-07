
import APIClient from '../client';

export class SocialFactoryEndpoints {
    constructor(private client: APIClient) { }

    async getCampaigns() {
        return this.client.get(`/social-factory/campaigns`);
    }

    async createCampaign(data: any) {
        return this.client.post(`/social-factory/campaigns`, data);
    }

    async getCampaignById(id: string) {
        return this.client.get(`/social-factory/campaigns/${id}`);
    }

    async generateContent(campaignId: string, prompt: string) {
        return this.client.post(`/social-factory/campaigns/${campaignId}/generate`, { prompt });
    }

    async schedulePost(data: any) {
        return this.client.post(`/social-factory/posts/schedule`, data);
    }

    async getScheduledPosts() {
        return this.client.get(`/social-factory/posts/scheduled`);
    }

    async getAnalytics(period?: string) {
        return this.client.get(`/social-factory/analytics`, { params: { period } });
    }
}
