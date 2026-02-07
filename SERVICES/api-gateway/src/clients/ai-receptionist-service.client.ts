// SERVICES/api-gateway/src/clients/ai-receptionist-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface ConfigureReceptionistDto {
    businessName: string;
    welcomeMessage?: string;
    autoReplyEnabled: boolean;
    platforms: ('instagram' | 'facebook' | 'whatsapp')[];
    qualificationQuestions?: string[];
    bookingEnabled?: boolean;
}

// interface LeadDto {
//     name: string;
//     contact: string;
//     platform: string;
//     message: string;
//     qualified?: boolean;
// }

@Injectable()
export class AiReceptionistServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['AI_RECEPTIONIST_SERVICE_URL'] || 'http://localhost:4008',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Configuration
    async configureReceptionist(userId: string, data: ConfigureReceptionistDto) {
        try {
            const response = await this.client.post(`/users/${userId}/config`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to configure receptionist',
                error.response?.status || 500,
            );
        }
    }

    async getConfiguration(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/config`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch configuration',
                error.response?.status || 500,
            );
        }
    }

    // Leads Management
    async getLeads(userId: string, query?: { status?: string; platform?: string; page?: number }) {
        try {
            const response = await this.client.get(`/users/${userId}/leads`, { params: query });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch leads',
                error.response?.status || 500,
            );
        }
    }

    async getLeadById(userId: string, leadId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/leads/${leadId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Lead not found',
                error.response?.status || 404,
            );
        }
    }

    async updateLeadStatus(userId: string, leadId: string, status: string, notes?: string) {
        try {
            const response = await this.client.patch(`/users/${userId}/leads/${leadId}`, {
                status,
                notes,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to update lead',
                error.response?.status || 500,
            );
        }
    }

    // Appointments
    async getAppointments(userId: string, status?: string) {
        try {
            const response = await this.client.get(`/users/${userId}/appointments`, {
                params: { status },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch appointments',
                error.response?.status || 500,
            );
        }
    }

    async createAppointment(userId: string, data: {
        leadId: string;
        dateTime: string;
        duration: number;
        notes?: string;
    }) {
        try {
            const response = await this.client.post(`/users/${userId}/appointments`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create appointment',
                error.response?.status || 500,
            );
        }
    }

    // Analytics
    async getAnalytics(userId: string, period?: string) {
        try {
            const response = await this.client.get(`/users/${userId}/analytics`, {
                params: { period },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch analytics',
                error.response?.status || 500,
            );
        }
    }

    // Platform Connections
    async connectPlatform(userId: string, platform: string, accessToken: string) {
        try {
            const response = await this.client.post(`/users/${userId}/platforms`, {
                platform,
                accessToken,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to connect platform',
                error.response?.status || 500,
            );
        }
    }

    async disconnectPlatform(userId: string, platform: string) {
        try {
            const response = await this.client.delete(`/users/${userId}/platforms/${platform}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to disconnect platform',
                error.response?.status || 500,
            );
        }
    }

    // Webhook handlers (internal)
    async handleIncomingMessage(platform: string, payload: any) {
        try {
            const response = await this.client.post(`/webhooks/${platform}`, payload);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to process message',
                error.response?.status || 500,
            );
        }
    }
}