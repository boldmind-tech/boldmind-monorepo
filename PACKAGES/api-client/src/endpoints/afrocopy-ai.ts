
import APIClient from '../client';

export class AfrocopyAiEndpoints {
    constructor(private client: APIClient) { }

    async generateCopy(data: any) {
        return this.client.post(`/afrocopy-ai/generate`, data);
    }

    async generateSocialCaption(data: any) {
        return this.client.post(`/afrocopy-ai/generate/social`, data);
    }

    async generateAdCopy(data: any) {
        return this.client.post(`/afrocopy-ai/generate/ad`, data);
    }

    async generateEmailTemplate(data: any) {
        return this.client.post(`/afrocopy-ai/generate/email`, data);
    }

    async generateBlogPost(data: any) {
        return this.client.post(`/afrocopy-ai/generate/blog`, data);
    }

    async translateToLocalLanguage(text: string, targetLanguage: 'pidgin' | 'yoruba' | 'igbo' | 'hausa') {
        return this.client.post(`/afrocopy-ai/translate`, { text, targetLanguage });
    }

    async localizeContent(content: string, region: 'nigeria' | 'ghana' | 'kenya' | 'south-africa') {
        return this.client.post(`/afrocopy-ai/localize`, { content, region });
    }

    async getTemplates(category?: string, language?: string) {
        return this.client.get(`/afrocopy-ai/templates`, { params: { category, language } });
    }

    async saveTemplate(data: any) {
        return this.client.post(`/afrocopy-ai/templates`, data);
    }

    async getGenerationHistory(type?: string) {
        return this.client.get(`/afrocopy-ai/history`, { params: { type } });
    }

    async getUsageStats() {
        return this.client.get(`/afrocopy-ai/usage`);
    }

    async improveCopy(originalText: string, suggestions?: string[]) {
        return this.client.post(`/afrocopy-ai/improve`, { originalText, suggestions });
    }

    async checkGrammar(text: string, language?: string) {
        return this.client.post(`/afrocopy-ai/check/grammar`, { text, language });
    }

    async createBrandVoice(data: any) {
        return this.client.post(`/afrocopy-ai/brand-voice`, data);
    }

    async generateWithBrandVoice(brandVoiceId: string, prompt: string) {
        return this.client.post(`/afrocopy-ai/brand-voice/${brandVoiceId}/generate`, { prompt });
    }
}
