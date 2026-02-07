// SERVICES/api-gateway/src/clients/payment-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface InitializePaymentDto {
    email: string;
    amount: number;
    metadata?: Record<string, any>;
    callback_url?: string;
}

interface VerifyPaymentDto {
    reference: string;
}

interface CreateSubscriptionDto {
    userId: string;
    planCode: string;
    email: string;
}

@Injectable()
export class PaymentServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['PAYMENT_SERVICE_URL'] || 'http://localhost:4002',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Transactions
    async initializePayment(data: InitializePaymentDto) {
        try {
            const response = await this.client.post('/payments/initialize', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to initialize payment',
                error.response?.status || 500,
            );
        }
    }

    async verifyPayment(data: VerifyPaymentDto) {
        try {
            const response = await this.client.post('/payments/verify', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to verify payment',
                error.response?.status || 500,
            );
        }
    }

    async getTransactionHistory(userId: string, query?: { page?: number; limit?: number }) {
        try {
            const response = await this.client.get(`/users/${userId}/transactions`, {
                params: query,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch transactions',
                error.response?.status || 500,
            );
        }
    }

    // Subscriptions
    async createSubscription(data: CreateSubscriptionDto) {
        try {
            const response = await this.client.post('/subscriptions', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create subscription',
                error.response?.status || 500,
            );
        }
    }

    async getUserSubscriptions(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/subscriptions`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch subscriptions',
                error.response?.status || 500,
            );
        }
    }

    async cancelSubscription(subscriptionId: string) {
        try {
            const response = await this.client.post(`/subscriptions/${subscriptionId}/cancel`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to cancel subscription',
                error.response?.status || 500,
            );
        }
    }

    // Plans
    async getPricingPlans(productSlug?: string) {
        try {
            const response = await this.client.get('/plans', {
                params: { productSlug },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch plans',
                error.response?.status || 500,
            );
        }
    }

    // Webhooks (internal)
    async processWebhook(provider: 'paystack' | 'flutterwave', payload: any) {
        try {
            const response = await this.client.post(`/webhooks/${provider}`, payload);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Webhook processing failed',
                error.response?.status || 500,
            );
        }
    }

    // Refunds
    async requestRefund(transactionId: string, reason?: string) {
        try {
            const response = await this.client.post(`/transactions/${transactionId}/refund`, {
                reason,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to process refund',
                error.response?.status || 500,
            );
        }
    }

    // Wallet (for BorderlessRemit, KoloAI, etc)
    async getWalletBalance(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/wallet`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch wallet',
                error.response?.status || 500,
            );
        }
    }

    async fundWallet(userId: string, amount: number, paymentMethod: string) {
        try {
            const response = await this.client.post(`/users/${userId}/wallet/fund`, {
                amount,
                paymentMethod,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fund wallet',
                error.response?.status || 500,
            );
        }
    }

    async transferFromWallet(
        userId: string,
        recipientId: string,
        amount: number,
        description?: string,
    ) {
        try {
            const response = await this.client.post(`/users/${userId}/wallet/transfer`, {
                recipientId,
                amount,
                description,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Transfer failed',
                error.response?.status || 500,
            );
        }
    }
}