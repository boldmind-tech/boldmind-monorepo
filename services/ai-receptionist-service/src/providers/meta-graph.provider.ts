// SERVICES/ai-receptionist-service/src/providers/meta-graph.provider.ts

import axios, { AxiosInstance } from 'axios';

export interface MetaMessage {
    id: string;
    from: {
        id: string;
        username?: string;
        name?: string;
    };
    to: {
        id: string;
    };
    message: string;
    timestamp: string;
}

export interface SendMessagePayload {
    recipient: { id: string };
    message: { text: string };
}

export class MetaGraphProvider {
    private client: AxiosInstance;

    constructor(private pageAccessToken: string) {
        this.client = axios.create({
            baseURL: 'https://graph.facebook.com/v18.0',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    // Send message to Instagram/Facebook
    async sendMessage(recipientId: string, messageText: string, platform: 'instagram' | 'facebook'): Promise<any> {
        const endpoint = platform === 'instagram'
            ? '/me/messages'
            : '/me/messages';

        try {
            const response = await this.client.post(endpoint, {
                recipient: { id: recipientId },
                message: { text: messageText },
                access_token: this.pageAccessToken,
            });

            return response.data;
        } catch (error: any) {
            console.error('Meta Graph API Error:', error.response?.data || error.message);
            throw new Error('Failed to send message via Meta Graph API');
        }
    }

    // Send comment reply
    async replyToComment(commentId: string, messageText: string): Promise<any> {
        try {
            const response = await this.client.post(`/${commentId}/replies`, {
                message: messageText,
                access_token: this.pageAccessToken,
            });

            return response.data;
        } catch (error: any) {
            console.error('Meta Graph API Error:', error.response?.data || error.message);
            throw new Error('Failed to reply to comment');
        }
    }

    // Get user profile
    async getUserProfile(userId: string): Promise<any> {
        try {
            const response = await this.client.get(`/${userId}`, {
                params: {
                    fields: 'name,username,profile_pic',
                    access_token: this.pageAccessToken,
                },
            });

            return response.data;
        } catch (error: any) {
            console.error('Meta Graph API Error:', error.response?.data || error.message);
            return null;
        }
    }

    // Verify webhook signature
    static verifyWebhookSignature(signature: string, body: string, appSecret: string): boolean {
        const crypto = require('crypto');
        const expectedSignature = crypto
            .createHmac('sha256', appSecret)
            .update(body)
            .digest('hex');

        return signature === `sha256=${expectedSignature}`;
    }
}