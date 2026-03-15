
import APIClient from '../client';

export class SafeaiEndpoints {
    constructor(private client: APIClient) { }

    async detectContent(text: string) {
        return this.client.post(`/safeai/detect`, { text });
    }

    async moderateContent(content: any) {
        return this.client.post(`/safeai/moderate`, content);
    }

    async getImageSafety(imageUrl: string) {
        return this.client.post(`/safeai/image/check`, { imageUrl });
    }

    async getSafetyScore(contentId: string) {
        return this.client.get(`/safeai/score/${contentId}`);
    }
}
