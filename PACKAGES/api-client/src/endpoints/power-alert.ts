
import APIClient from '../client';

export class PowerAlertEndpoints {
    constructor(private client: APIClient) { }

    async getCurrentStatus(lat: number, lng: number) {
        return this.client.get(`/power-alert/status/current`, { params: { lat, lng } });
    }

    async getAreaStatus(areaName: string) {
        return this.client.get(`/power-alert/areas/${areaName}/status`);
    }

    async getAllAreasStatus() {
        return this.client.get(`/power-alert/areas/status`);
    }

    async reportOutage(data: any) {
        return this.client.post(`/power-alert/outages`, data);
    }

    async getOutages(area?: string, status?: string) {
        return this.client.get(`/power-alert/outages`, { params: { area, status } });
    }

    async calculateSolarSavings(data: any) {
        return this.client.post(`/power-alert/solar/calculate`, data);
    }

    async getSolarRecommendations(location: string) {
        return this.client.get(`/power-alert/solar/recommendations`, { params: { location } });
    }

    async getSolarInstallers(location?: string) {
        return this.client.get(`/power-alert/installers`, { params: { location } });
    }

    async getInstallerById(installerId: string) {
        return this.client.get(`/power-alert/installers/${installerId}`);
    }

    async requestQuote(installerId: string, requirements: any) {
        return this.client.post(`/power-alert/installers/${installerId}/quote`, requirements);
    }

    async logEnergyUsage(data: any) {
        return this.client.post(`/power-alert/energy-usage`, data);
    }

    async getEnergyHistory(period?: string) {
        return this.client.get(`/power-alert/energy-history`, { params: { period } });
    }

    async getEnergyCostAnalysis() {
        return this.client.get(`/power-alert/cost-analysis`);
    }

    async subscribeToArea(areaName: string) {
        return this.client.post(`/power-alert/subscriptions`, { areaName });
    }

    async getUserSubscriptions() {
        return this.client.get(`/power-alert/subscriptions`);
    }

    async getCommunityStats(area?: string) {
        return this.client.get(`/power-alert/community/stats`, { params: { area } });
    }
}
