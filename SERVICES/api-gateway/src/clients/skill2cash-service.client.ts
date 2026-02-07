// SERVICES/api-gateway/src/clients/skill2cash-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface CreateSkillProfileDto {
    skills: string[];
    experienceLevel: 'beginner' | 'intermediate' | 'expert';
    hourlyRate?: number;
    portfolioVideos?: string[];
    bio: string;
    availability: string;
    location: {
        city: string;
        state: string;
    };
}

interface CreateBookingDto {
    skillProfileId: string;
    serviceDate: string;
    duration: number;
    location: string;
    requirements?: string;
    budget: number;
}

@Injectable()
export class Skill2cashServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['SKILL2CASH_SERVICE_URL'] || 'http://localhost:4032',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Skill Profiles
    async createSkillProfile(userId: string, data: CreateSkillProfileDto) {
        try {
            const response = await this.client.post('/profiles', {
                ...data,
                userId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create skill profile',
                error.response?.status || 500,
            );
        }
    }

    async getSkillProfile(userId: string) {
        try {
            const response = await this.client.get(`/profiles/${userId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Skill profile not found',
                error.response?.status || 404,
            );
        }
    }

    async updateSkillProfile(userId: string, data: Partial<CreateSkillProfileDto>) {
        try {
            const response = await this.client.patch(`/profiles/${userId}`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to update skill profile',
                error.response?.status || 500,
            );
        }
    }

    async uploadPortfolioVideo(userId: string, videoData: string, description?: string) {
        try {
            const response = await this.client.post(`/profiles/${userId}/videos`, {
                videoData,
                description,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to upload video',
                error.response?.status || 500,
            );
        }
    }

    // Discovery
    async findSkills(query?: {
        skill?: string;
        location?: string;
        minRate?: number;
        maxRate?: number;
        availability?: string;
    }) {
        try {
            const response = await this.client.get('/skills', { params: query });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to find skills',
                error.response?.status || 500,
            );
        }
    }

    async getSkillCategories() {
        try {
            const response = await this.client.get('/categories');
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch categories',
                error.response?.status || 500,
            );
        }
    }

    // Bookings
    async createBooking(clientId: string, data: CreateBookingDto) {
        try {
            const response = await this.client.post('/bookings', {
                ...data,
                clientId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create booking',
                error.response?.status || 500,
            );
        }
    }

    async getBookings(userId: string, role: 'provider' | 'client', status?: string) {
        try {
            const response = await this.client.get(`/users/${userId}/bookings`, {
                params: { role, status },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch bookings',
                error.response?.status || 500,
            );
        }
    }

    async getBookingById(bookingId: string) {
        try {
            const response = await this.client.get(`/bookings/${bookingId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Booking not found',
                error.response?.status || 404,
            );
        }
    }

    async confirmBooking(bookingId: string, providerId: string) {
        try {
            const response = await this.client.post(`/bookings/${bookingId}/confirm`, {
                providerId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to confirm booking',
                error.response?.status || 500,
            );
        }
    }

    async completeBooking(bookingId: string, completionData?: any) {
        try {
            const response = await this.client.post(`/bookings/${bookingId}/complete`, completionData);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to complete booking',
                error.response?.status || 500,
            );
        }
    }

    async cancelBooking(bookingId: string, reason?: string) {
        try {
            const response = await this.client.post(`/bookings/${bookingId}/cancel`, {
                reason,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to cancel booking',
                error.response?.status || 500,
            );
        }
    }

    // Escrow & Payments
    async releasePayment(bookingId: string, releaseAmount?: number) {
        try {
            const response = await this.client.post(`/bookings/${bookingId}/release-payment`, {
                amount: releaseAmount,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to release payment',
                error.response?.status || 500,
            );
        }
    }

    async disputeBooking(bookingId: string, reason: string, evidence?: string[]) {
        try {
            const response = await this.client.post(`/bookings/${bookingId}/dispute`, {
                reason,
                evidence,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to submit dispute',
                error.response?.status || 500,
            );
        }
    }

    // Reviews
    async submitReview(
        bookingId: string,
        reviewerId: string,
        rating: number,
        comment?: string,
        isAnonymous?: boolean,
    ) {
        try {
            const response = await this.client.post(`/bookings/${bookingId}/reviews`, {
                reviewerId,
                rating,
                comment,
                isAnonymous,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to submit review',
                error.response?.status || 500,
            );
        }
    }

    async getProviderReviews(providerId: string) {
        try {
            const response = await this.client.get(`/profiles/${providerId}/reviews`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch reviews',
                error.response?.status || 500,
            );
        }
    }

    // Availability
    async setAvailability(userId: string, schedule: any[]) {
        try {
            const response = await this.client.post(`/profiles/${userId}/availability`, {
                schedule,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to set availability',
                error.response?.status || 500,
            );
        }
    }

    async getAvailability(userId: string, date?: string) {
        try {
            const response = await this.client.get(`/profiles/${userId}/availability`, {
                params: date ? { date } : undefined,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch availability',
                error.response?.status || 500,
            );
        }
    }

    // Earnings
    async getEarnings(userId: string, period?: string) {
        try {
            const response = await this.client.get(`/profiles/${userId}/earnings`, {
                params: { period },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch earnings',
                error.response?.status || 500,
            );
        }
    }

    async withdrawEarnings(userId: string, amount: number, accountDetails: any) {
        try {
            const response = await this.client.post(`/profiles/${userId}/withdraw`, {
                amount,
                accountDetails,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Withdrawal failed',
                error.response?.status || 500,
            );
        }
    }
}