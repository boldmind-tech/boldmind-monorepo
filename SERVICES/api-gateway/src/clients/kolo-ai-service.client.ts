// SERVICES/api-gateway/src/clients/kolo-ai-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface CreateThriftGroupDto {
    name: string;
    description?: string;
    contributionAmount: number;
    frequency: 'daily' | 'weekly' | 'monthly';
    members: string[];
    startDate: string;
    endDate?: string;
}

interface JoinGroupDto {
    userId: string;
    paymentMethod: string;
}

@Injectable()
export class KoloAiServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['KOLO_AI_SERVICE_URL'] || 'http://localhost:4026',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Group Management
    async createThriftGroup(userId: string, data: CreateThriftGroupDto) {
        try {
            const response = await this.client.post('/groups', {
                ...data,
                createdBy: userId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create thrift group',
                error.response?.status || 500,
            );
        }
    }

    async getGroups(query?: { status?: string; userId?: string }) {
        try {
            const response = await this.client.get('/groups', { params: query });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch groups',
                error.response?.status || 500,
            );
        }
    }

    async getGroupById(groupId: string) {
        try {
            const response = await this.client.get(`/groups/${groupId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Group not found',
                error.response?.status || 404,
            );
        }
    }

    // Membership
    async joinGroup(groupId: string, data: JoinGroupDto) {
        try {
            const response = await this.client.post(`/groups/${groupId}/join`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to join group',
                error.response?.status || 500,
            );
        }
    }

    async leaveGroup(groupId: string, userId: string) {
        try {
            const response = await this.client.post(`/groups/${groupId}/leave`, {
                userId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to leave group',
                error.response?.status || 500,
            );
        }
    }

    // Contributions
    async makeContribution(groupId: string, userId: string, amount: number) {
        try {
            const response = await this.client.post(`/groups/${groupId}/contribute`, {
                userId,
                amount,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Contribution failed',
                error.response?.status || 500,
            );
        }
    }

    async getContributionHistory(groupId: string, userId?: string) {
        try {
            const response = await this.client.get(`/groups/${groupId}/contributions`, {
                params: { userId },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch contribution history',
                error.response?.status || 500,
            );
        }
    }

    // Payouts
    async schedulePayout(groupId: string, userId: string, scheduledDate: string) {
        try {
            const response = await this.client.post(`/groups/${groupId}/payouts/schedule`, {
                userId,
                scheduledDate,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to schedule payout',
                error.response?.status || 500,
            );
        }
    }

    async processPayout(groupId: string, payoutId: string) {
        try {
            const response = await this.client.post(`/groups/${groupId}/payouts/${payoutId}/process`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Payout processing failed',
                error.response?.status || 500,
            );
        }
    }

    // AI Predictions
    async getDefaultPrediction(groupId: string, userId: string) {
        try {
            const response = await this.client.get(`/groups/${groupId}/predictions/default`, {
                params: { userId },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to get default prediction',
                error.response?.status || 500,
            );
        }
    }

    async getGroupRiskAnalysis(groupId: string) {
        try {
            const response = await this.client.get(`/groups/${groupId}/risk-analysis`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to get risk analysis',
                error.response?.status || 500,
            );
        }
    }

    async autoPauseContribution(groupId: string, userId: string, reason?: string) {
        try {
            const response = await this.client.post(`/groups/${groupId}/auto-pause`, {
                userId,
                reason,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to auto-pause contribution',
                error.response?.status || 500,
            );
        }
    }

    // Notifications
    async sendPaymentReminder(groupId: string, userId: string) {
        try {
            const response = await this.client.post(`/groups/${groupId}/reminders`, {
                userId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to send reminder',
                error.response?.status || 500,
            );
        }
    }

    // Credit Building
    async getCreditScore(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/credit-score`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch credit score',
                error.response?.status || 500,
            );
        }
    }

    async getCreditHistory(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/credit-history`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch credit history',
                error.response?.status || 500,
            );
        }
    }
}