
import APIClient from '../client';

export class AiEndpoints {
    constructor(private client: APIClient) { }

    async chat(message: string, context?: any) {
        return this.client.post(`/ai/chat`, { message, context });
    }

    async generateText(prompt: string) {
        return this.client.post(`/ai/generate/text`, { prompt });
    }

    async generateImage(prompt: string) {
        return this.client.post(`/ai/generate/image`, { prompt });
    }

    async getModels() {
        return this.client.get(`/ai/models`);
    }
}
