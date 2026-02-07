// SERVICES/api-gateway/src/clients/naijagig-matcher-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface CreateGigDto {
    title: string;
    description: string;
    category: string;
    budget: number;
    location: {
        lat: number;
        lng: number;
        address: string;
    };
    skillsRequired?: string[];
    deadline?: string;
}

interface CreateWorkerProfileDto {
    skills: string[];
    experience: string;
    hourlyRate?: number;
    portfolio?: string[];
    location: {
        lat: number;
        lng: number;
    };
    availability: string;
}

@Injectable()
export class NaijagigMatcherServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['NAIJAGIG_MATCHER_SERVICE_URL'] || 'http://localhost:4025',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Gig Posting
    async postGig(userId: string, data: CreateGigDto) {
        try {
            const response = await this.client.post('/gigs', {
                ...data,
                postedBy: userId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to post gig',
                error.response?.status || 500,
            );
        }
    }

    async getGigs(query?: {
        category?: string;
        location?: string;
        budgetMin?: number;
        budgetMax?: number;
        status?: string;
    }) {
        try {
            const response = await this.client.get('/gigs', { params: query });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch gigs',
                error.response?.status || 500,
            );
        }
    }

    async getGigById(gigId: string) {
        try {
            const response = await this.client.get(`/gigs/${gigId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Gig not found',
                error.response?.status || 404,
            );
        }
    }

    // Worker Profiles
    async createWorkerProfile(userId: string, data: CreateWorkerProfileDto) {
        try {
            const response = await this.client.post(`/workers/${userId}`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create worker profile',
                error.response?.status || 500,
            );
        }
    }

    async getWorkerProfile(userId: string) {
        try {
            const response = await this.client.get(`/workers/${userId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Worker profile not found',
                error.response?.status || 404,
            );
        }
    }

    async updateWorkerProfile(userId: string, data: Partial<CreateWorkerProfileDto>) {
        try {
            const response = await this.client.patch(`/workers/${userId}`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to update worker profile',
                error.response?.status || 500,
            );
        }
    }

    // Matching
    async findMatchingWorkers(gigId: string) {
        try {
            const response = await this.client.get(`/gigs/${gigId}/matches`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to find matching workers',
                error.response?.status || 500,
            );
        }
    }

    async findMatchingGigs(workerId: string) {
        try {
            const response = await this.client.get(`/workers/${workerId}/matches`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to find matching gigs',
                error.response?.status || 500,
            );
        }
    }

    // Applications
    async applyForGig(workerId: string, gigId: string, message?: string) {
        try {
            const response = await this.client.post(`/gigs/${gigId}/apply`, {
                workerId,
                message,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to apply for gig',
                error.response?.status || 500,
            );
        }
    }

    async getGigApplications(gigId: string) {
        try {
            const response = await this.client.get(`/gigs/${gigId}/applications`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch applications',
                error.response?.status || 500,
            );
        }
    }

    // Hiring & Payments
    async hireWorker(gigId: string, workerId: string) {
        try {
            const response = await this.client.post(`/gigs/${gigId}/hire`, {
                workerId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to hire worker',
                error.response?.status || 500,
            );
        }
    }

    async releasePayment(gigId: string, amount: number) {
        try {
            const response = await this.client.post(`/gigs/${gigId}/payment/release`, {
                amount,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to release payment',
                error.response?.status || 500,
            );
        }
    }

    // Reviews
    async submitReview(
        gigId: string,
        reviewerId: string,
        reviewedId: string,
        rating: number,
        comment?: string,
    ) {
        try {
            const response = await this.client.post(`/gigs/${gigId}/reviews`, {
                reviewerId,
                reviewedId,
                rating,
                comment,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to submit review',
                error.response?.status || 500,
            );
        }
    }

    // Wallet
    async getWalletBalance(userId: string) {
        try {
            const response = await this.client.get(`/wallets/${userId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch wallet balance',
                error.response?.status || 500,
            );
        }
    }

    async withdrawEarnings(userId: string, amount: number, accountDetails: any) {
        try {
            const response = await this.client.post(`/wallets/${userId}/withdraw`, {
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