
import APIClient from '../client';

export class PlanaiSuiteEndpoints {
    constructor(private client: APIClient) { }

    async createPortfolio(data: any) {
        return this.client.post(`/planai-suite/portfolio`, data);
    }

    async getPortfolio() {
        return this.client.get(`/planai-suite/portfolio`);
    }

    async optimizeLinkedIn(profileData: any) {
        return this.client.post(`/planai-suite/portfolio/linkedin-optimize`, profileData);
    }

    async generateBusinessPlan(data: any) {
        return this.client.post(`/planai-suite/business-plan`, data);
    }

    async getBusinessPlan(planId: string) {
        return this.client.get(`/planai-suite/business-plan/${planId}`);
    }

    async createFinancialModel(data: any) {
        return this.client.post(`/planai-suite/financial-model`, data);
    }

    async getCashflowProjection(modelId: string, months?: number) {
        return this.client.get(`/planai-suite/financial-model/${modelId}/cashflow`, { params: { months } });
    }

    async generatePitchDeck(businessPlanId: string) {
        return this.client.post(`/planai-suite/pitch-deck`, { businessPlanId });
    }

    async getInvestorDocuments() {
        return this.client.get(`/planai-suite/investor-documents`);
    }

    async generateLogo(data: any) {
        return this.client.post(`/planai-suite/branding/logo`, data);
    }

    async generateBrandKit(logoId: string) {
        return this.client.post(`/planai-suite/branding/kit`, { logoId });
    }

    async createStore(data: any) {
        return this.client.post(`/planai-suite/store`, data);
    }

    async getStore(storeId: string) {
        return this.client.get(`/planai-suite/store/${storeId}`);
    }

    async addProduct(storeId: string, productData: any) {
        return this.client.post(`/planai-suite/store/${storeId}/products`, productData);
    }

    async createCampaign(data: any) {
        return this.client.post(`/planai-suite/campaigns`, data);
    }

    async getCampaigns(status?: string) {
        return this.client.get(`/planai-suite/campaigns`, { params: { status } });
    }

    async getBusinessAnalytics(period?: string) {
        return this.client.get(`/planai-suite/analytics`, { params: { period } });
    }

    async getCrossPlatformMetrics() {
        return this.client.get(`/planai-suite/analytics/cross-platform`);
    }
}
