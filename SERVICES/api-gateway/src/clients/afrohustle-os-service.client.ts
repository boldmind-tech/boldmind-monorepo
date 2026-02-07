// SERVICES/api-gateway/src/clients/afrohustle-os-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

// interface CreateHustleBlueprintDto {
//   title: string;
//   category: string;
//   description: string;
//   startupCost: {
//     min: number;
//     max: number;
//   };
//   monthlyPotential: number;
//   skillsRequired: string[];
//   timeCommitment: string;
//   steps: string[];
//   resources?: string[];
// }

interface TrackIncomeDto {
    source: string;
    amount: number;
    date: string;
    category?: string;
    notes?: string;
}

@Injectable()
export class AfrohustleOsServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['AFROHUSTLE_OS_SERVICE_URL'] || 'http://localhost:4034',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Blueprints
    async getBlueprints(query?: {
        category?: string;
        budgetMax?: number;
        skillLevel?: string;
        timeAvailable?: string;
    }) {
        try {
            const response = await this.client.get('/blueprints', { params: query });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch blueprints',
                error.response?.status || 500,
            );
        }
    }

    async getBlueprintById(blueprintId: string) {
        try {
            const response = await this.client.get(`/blueprints/${blueprintId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Blueprint not found',
                error.response?.status || 404,
            );
        }
    }

    async saveBlueprint(userId: string, blueprintId: string) {
        try {
            const response = await this.client.post(`/users/${userId}/saved-blueprints`, {
                blueprintId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to save blueprint',
                error.response?.status || 500,
            );
        }
    }

    // Income Tracking
    async trackIncome(userId: string, data: TrackIncomeDto) {
        try {
            const response = await this.client.post(`/users/${userId}/income`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to track income',
                error.response?.status || 500,
            );
        }
    }

    async getIncomeHistory(userId: string, period?: string) {
        try {
            const response = await this.client.get(`/users/${userId}/income`, {
                params: { period },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch income history',
                error.response?.status || 500,
            );
        }
    }

    async getIncomeAnalytics(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/income/analytics`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch income analytics',
                error.response?.status || 500,
            );
        }
    }

    // Hustle Progress
    async startHustle(userId: string, blueprintId: string, startDate?: string) {
        try {
            const response = await this.client.post(`/users/${userId}/hustles`, {
                blueprintId,
                startDate,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to start hustle',
                error.response?.status || 500,
            );
        }
    }

    async updateHustleProgress(userId: string, hustleId: string, progress: number, notes?: string) {
        try {
            const response = await this.client.patch(`/users/${userId}/hustles/${hustleId}`, {
                progress,
                notes,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to update hustle progress',
                error.response?.status || 500,
            );
        }
    }

    async getActiveHustles(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/hustles`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch active hustles',
                error.response?.status || 500,
            );
        }
    }

    // Community Circles
    async getCircles(category?: string) {
        try {
            const response = await this.client.get('/circles', {
                params: category ? { category } : undefined,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch circles',
                error.response?.status || 500,
            );
        }
    }

    async joinCircle(userId: string, circleId: string) {
        try {
            const response = await this.client.post(`/circles/${circleId}/join`, {
                userId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to join circle',
                error.response?.status || 500,
            );
        }
    }

    async getCircleMessages(circleId: string, page?: number) {
        try {
            const response = await this.client.get(`/circles/${circleId}/messages`, {
                params: { page },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch circle messages',
                error.response?.status || 500,
            );
        }
    }

    async postToCircle(circleId: string, userId: string, content: string) {
        try {
            const response = await this.client.post(`/circles/${circleId}/messages`, {
                userId,
                content,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to post to circle',
                error.response?.status || 500,
            );
        }
    }

    // Resource Library
    async getResources(category?: string, type?: string) {
        try {
            const response = await this.client.get('/resources', {
                params: { category, type },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch resources',
                error.response?.status || 500,
            );
        }
    }

    async getResourceById(resourceId: string) {
        try {
            const response = await this.client.get(`/resources/${resourceId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Resource not found',
                error.response?.status || 404,
            );
        }
    }

    // Goals & Milestones
    async setGoal(userId: string, data: {
        title: string;
        targetAmount: number;
        deadline: string;
        hustleId?: string;
    }) {
        try {
            const response = await this.client.post(`/users/${userId}/goals`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to set goal',
                error.response?.status || 500,
            );
        }
    }

    async getGoals(userId: string, status?: 'active' | 'completed' | 'all') {
        try {
            const response = await this.client.get(`/users/${userId}/goals`, {
                params: { status },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch goals',
                error.response?.status || 500,
            );
        }
    }

    async updateGoalProgress(userId: string, goalId: string, currentAmount: number) {
        try {
            const response = await this.client.patch(`/users/${userId}/goals/${goalId}`, {
                currentAmount,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to update goal progress',
                error.response?.status || 500,
            );
        }
    }
}