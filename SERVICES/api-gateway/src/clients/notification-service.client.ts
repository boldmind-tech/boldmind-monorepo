
// SERVICES/api-gateway/src/clients/notification-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

export interface EmailPayload {
    to: string;
    subject: string;
    templateType: 'welcome' | 'verify' | 'reset_password' | 'general';
    data: any;
}

export interface SmsPayload {
    to: string;
    message: string;
}

export interface PushNotificationPayload {
    userId: string;
    title: string;
    body: string;
    data?: any;
}

export interface InAppNotificationPayload {
    userId: string;
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    actionUrl?: string;
    metadata?: any;
}

export interface NotificationPreferences {
    email: boolean;
    sms: boolean;
    push: boolean;
    inApp: boolean;
    categories: {
        marketing: boolean;
        transactional: boolean;
        updates: boolean;
        security: boolean;
    };
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

    // Email
    async sendEmail(userId: string, payload: EmailPayload) {
        try {
            const response = await this.client.post('/notifications/send/email', {
                userId,
                ...payload
            });
            return response.data;
        } catch (error: any) {
            this.handleError(error, 'Failed to send email');
        }
    }

    // SMS
    async sendSMS(userId: string, payload: SmsPayload) {
        try {
            const response = await this.client.post('/notifications/send/sms', {
                userId,
                ...payload
            });
            return response.data;
        } catch (error: any) {
            this.handleError(error, 'Failed to send SMS');
        }
    }

    // Push Notifications
    async sendPushNotification(payload: PushNotificationPayload) {
        try {
            const response = await this.client.post('/notifications/send/push', payload);
            return response.data;
        } catch (error: any) {
            this.handleError(error, 'Failed to send push notification');
        }
    }

    // In-App Notifications
    async sendInAppNotification(payload: InAppNotificationPayload) {
        try {
            const response = await this.client.post('/notifications/send/in-app', payload);
            return response.data;
        } catch (error: any) {
            this.handleError(error, 'Failed to send in-app notification');
        }
    }

    async getUserNotifications(userId: string, query?: { page?: number | undefined; limit?: number | undefined; read?: boolean | undefined }) {
        try {
            const response = await this.client.get(`/notifications/users/${userId}`, {
                params: query
            });
            return response.data;
        } catch (error: any) {
            this.handleError(error, 'Failed to fetch user notifications');
        }
    }

    async getUnreadCount(userId: string) {
        try {
            const response = await this.client.get(`/notifications/users/${userId}/unread/count`);
            return response.data;
        } catch (error: any) {
            this.handleError(error, 'Failed to fetch unread count');
        }
    }

    async markAsRead(userId: string, notificationId: string) {
        try {
            const response = await this.client.patch(`/notifications/${notificationId}/read`, {
                userId
            });
            return response.data;
        } catch (error: any) {
            this.handleError(error, 'Failed to mark notification as read');
        }
    }

    async markAllAsRead(userId: string) {
        try {
            const response = await this.client.patch(`/notifications/users/${userId}/read-all`);
            return response.data;
        } catch (error: any) {
            this.handleError(error, 'Failed to mark all notifications as read');
        }
    }

    async deleteNotification(userId: string, notificationId: string) {
        try {
            const response = await this.client.delete(`/notifications/${notificationId}`, {
                data: { userId }
            });
            return response.data;
        } catch (error: any) {
            this.handleError(error, 'Failed to delete notification');
        }
    }

    // Preferences
    async getPreferences(userId: string) {
        try {
            const response = await this.client.get(`/notifications/preferences/${userId}`);
            return response.data;
        } catch (error: any) {
            this.handleError(error, 'Failed to fetch notification preferences');
        }
    }

    async updatePreferences(userId: string, preferences: Partial<NotificationPreferences>) {
        try {
            const response = await this.client.patch(`/notifications/preferences/${userId}`, preferences);
            return response.data;
        } catch (error: any) {
            this.handleError(error, 'Failed to update notification preferences');
        }
    }

    // System/Admin
    async healthCheck() {
        try {
            const response = await this.client.get('/health');
            return response.data;
        } catch (error: any) {
            return { status: 'error', message: error.message };
        }
    }

    private handleError(error: any, defaultMessage: string) {
        throw new HttpException(
            error.response?.data?.message || error.response?.data?.error || defaultMessage,
            error.response?.status || 500,
        );
    }
}
