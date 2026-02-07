
import APIClient from '../client';

export class AfrohustleOsEndpoints {
    constructor(private client: APIClient) { }

    async getBlueprints(query?: any) {
        return this.client.get(`/afrohustle-os/blueprints`, { params: query });
    }

    async getBlueprintById(id: string) {
        return this.client.get(`/afrohustle-os/blueprints/${id}`);
    }

    async saveBlueprint(blueprintId: string) {
        return this.client.post(`/afrohustle-os/saved-blueprints`, { blueprintId });
    }

    async trackIncome(data: any) {
        return this.client.post(`/afrohustle-os/income`, data);
    }

    async getIncomeHistory(period?: string) {
        return this.client.get(`/afrohustle-os/income`, { params: { period } });
    }

    async getIncomeAnalytics() {
        return this.client.get(`/afrohustle-os/income/analytics`);
    }

    async startHustle(blueprintId: string, startDate?: string) {
        return this.client.post(`/afrohustle-os/hustles`, { blueprintId, startDate });
    }

    async getActiveHustles() {
        return this.client.get(`/afrohustle-os/hustles`);
    }

    async updateHustleProgress(id: string, progress: number, notes?: string) {
        return this.client.patch(`/afrohustle-os/hustles/${id}`, { progress, notes });
    }

    async getCircles(category?: string) {
        return this.client.get(`/afrohustle-os/circles`, { params: { category } });
    }

    async joinCircle(id: string) {
        return this.client.post(`/afrohustle-os/circles/${id}/join`);
    }

    async getCircleMessages(id: string, page?: number) {
        return this.client.get(`/afrohustle-os/circles/${id}/messages`, { params: { page } });
    }

    async postToCircle(id: string, content: string) {
        return this.client.post(`/afrohustle-os/circles/${id}/messages`, { content });
    }

    async getResources(category?: string, type?: string) {
        return this.client.get(`/afrohustle-os/resources`, { params: { category, type } });
    }

    async getResourceById(id: string) {
        return this.client.get(`/afrohustle-os/resources/${id}`);
    }

    async setGoal(data: any) {
        return this.client.post(`/afrohustle-os/goals`, data);
    }

    async getGoals(status?: 'active' | 'completed' | 'all') {
        return this.client.get(`/afrohustle-os/goals`, { params: { status } });
    }

    async updateGoalProgress(id: string, currentAmount: number) {
        return this.client.patch(`/afrohustle-os/goals/${id}`, { currentAmount });
    }
}
