
// SERVICES/api-gateway/src/clients/notification-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

export interface EmailPayload {
    to: string;
    subject: string;
    templateType: 'welcome' | 'verify' | 'reset_password';
    data: any;
}

@Injectable()
export class NotificationServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['NOTIFICATION_SERVICE_URL'] || 'http://localhost:4006',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 5000,
        });
    }

    async sendEmail(userId: string, payload: EmailPayload) {
        try {
            const response = await this.client.post('/notifications/send/email', {
                userId,
                ...payload
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.error?.message || error.response?.data?.error || 'Failed to send notification',
                error.response?.status || 500,
            );
        }
    }

    async healthCheck() {
        try {
            const response = await this.client.get('/health');
            return response.data;
        } catch (error: any) {
            return { status: 'error', message: error.message };
        }
    }
}
