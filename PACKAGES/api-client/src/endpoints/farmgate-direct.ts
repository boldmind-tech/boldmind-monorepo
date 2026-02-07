
import APIClient from '../client';

export class FarmgateDirectEndpoints {
    constructor(private client: APIClient) { }

    async createListing(data: any) {
        return this.client.post(`/farmgate-direct/listings`, data);
    }

    async getListings(query?: any) {
        return this.client.get(`/farmgate-direct/listings`, { params: query });
    }

    async getListingById(id: string) {
        return this.client.get(`/farmgate-direct/listings/${id}`);
    }

    async updateListing(id: string, data: any) {
        return this.client.patch(`/farmgate-direct/listings/${id}`, data);
    }

    async deleteListing(id: string) {
        return this.client.delete(`/farmgate-direct/listings/${id}`);
    }

    async createFarmerProfile(data: any) {
        return this.client.post(`/farmgate-direct/farmers`, data);
    }

    async getFarmerProfile(id: string) {
        return this.client.get(`/farmgate-direct/farmers/${id}`);
    }

    async getFarmerListings(id: string) {
        return this.client.get(`/farmgate-direct/farmers/${id}/listings`);
    }

    async createOrder(data: any) {
        return this.client.post(`/farmgate-direct/orders`, data);
    }

    async getOrders(role: 'buyer' | 'farmer', status?: string) {
        return this.client.get(`/farmgate-direct/orders`, { params: { role, status } });
    }

    async getOrderById(id: string) {
        return this.client.get(`/farmgate-direct/orders/${id}`);
    }

    async updateOrderStatus(id: string, status: string, notes?: string) {
        return this.client.patch(`/farmgate-direct/orders/${id}/status`, { status, notes });
    }

    async requestQualityCheck(id: string) {
        return this.client.post(`/farmgate-direct/listings/${id}/quality-check`);
    }

    async getQualityReport(id: string) {
        return this.client.get(`/farmgate-direct/listings/${id}/quality-report`);
    }

    async getDeliveryOptions(id: string, destination: string) {
        return this.client.get(`/farmgate-direct/listings/${id}/delivery-options`, { params: { destination } });
    }

    async trackDelivery(id: string) {
        return this.client.get(`/farmgate-direct/orders/${id}/tracking`);
    }

    async getMarketPrices(product?: string, location?: string) {
        return this.client.get(`/farmgate-direct/market/prices`, { params: { product, location } });
    }

    async getPriceTrends(product: string) {
        return this.client.get(`/farmgate-direct/market/trends`, { params: { product } });
    }

    async submitReview(id: string, rating: number, comment?: string) {
        return this.client.post(`/farmgate-direct/orders/${id}/reviews`, { rating, comment });
    }

    async getFarmerReviews(id: string) {
        return this.client.get(`/farmgate-direct/farmers/${id}/reviews`);
    }
}
