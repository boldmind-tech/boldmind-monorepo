
import APIClient from '../client';

export class Skill2cashEndpoints {
    constructor(private client: APIClient) { }

    async createSkillProfile(data: any) {
        return this.client.post(`/skill2cash/profiles`, data);
    }

    async getMySkillProfile() {
        return this.client.get(`/skill2cash/profiles/me`);
    }

    async getSkillProfile(userId: string) {
        return this.client.get(`/skill2cash/profiles/${userId}`);
    }

    async updateSkillProfile(data: any) {
        return this.client.patch(`/skill2cash/profiles/me`, data);
    }

    async uploadPortfolioVideo(videoData: string, description?: string) {
        return this.client.post(`/skill2cash/profiles/me/videos`, { videoData, description });
    }

    async findSkills(query?: any) {
        return this.client.get(`/skill2cash/skills`, { params: query });
    }

    async getSkillCategories() {
        return this.client.get(`/skill2cash/categories`);
    }

    async createBooking(data: any) {
        return this.client.post(`/skill2cash/bookings`, data);
    }

    async getBookings(role: 'provider' | 'client', status?: string) {
        return this.client.get(`/skill2cash/bookings`, { params: { role, status } });
    }

    async getBookingById(id: string) {
        return this.client.get(`/skill2cash/bookings/${id}`);
    }

    async confirmBooking(id: string) {
        return this.client.post(`/skill2cash/bookings/${id}/confirm`);
    }

    async completeBooking(id: string, completionData: any) {
        return this.client.post(`/skill2cash/bookings/${id}/complete`, completionData);
    }

    async cancelBooking(id: string, reason?: string) {
        return this.client.post(`/skill2cash/bookings/${id}/cancel`, { reason });
    }

    async releasePayment(id: string, amount?: number) {
        return this.client.post(`/skill2cash/bookings/${id}/release-payment`, { amount });
    }

    async disputeBooking(id: string, reason: string, evidence?: string[]) {
        return this.client.post(`/skill2cash/bookings/${id}/dispute`, { reason, evidence });
    }

    async submitReview(id: string, rating: number, comment?: string, isAnonymous?: boolean) {
        return this.client.post(`/skill2cash/bookings/${id}/reviews`, { rating, comment, isAnonymous });
    }

    async getProviderReviews(providerId: string) {
        return this.client.get(`/skill2cash/profiles/${providerId}/reviews`);
    }

    async setAvailability(schedule: any[]) {
        return this.client.post(`/skill2cash/profiles/me/availability`, { schedule });
    }

    async getAvailability(userId: string, date?: string) {
        return this.client.get(`/skill2cash/profiles/${userId}/availability`, { params: { date } });
    }

    async getEarnings(period?: string) {
        return this.client.get(`/skill2cash/earnings`, { params: { period } });
    }

    async withdrawEarnings(amount: number, accountDetails: any) {
        return this.client.post(`/skill2cash/withdraw`, { amount, accountDetails });
    }
}
