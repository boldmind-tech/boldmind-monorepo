// SERVICES/api-gateway/src/clients/borderless-remit-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface CompareRatesDto {
    fromCurrency: string;
    toCurrency: string;
    amount: number;
}

interface CreateTransferDto {
    fromCurrency: string;
    toCurrency: string;
    amount: number;
    recipient: {
        name: string;
        accountNumber: string;
        bankCode: string;
        country: string;
    };
    purpose?: string;
}

@Injectable()
export class BorderlessRemitServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['BORDERLESS_REMIT_SERVICE_URL'] || 'http://localhost:4027',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Rate Comparison
    async compareRates(data: CompareRatesDto) {
        try {
            const response = await this.client.post('/rates/compare', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to compare rates',
                error.response?.status || 500,
            );
        }
    }

    async getCurrentRates(currencyPair?: string) {
        try {
            const response = await this.client.get('/rates/current', {
                params: currencyPair ? { pair: currencyPair } : undefined,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch current rates',
                error.response?.status || 500,
            );
        }
    }

    async getRateHistory(currencyPair: string, days?: number) {
        try {
            const response = await this.client.get('/rates/history', {
                params: { pair: currencyPair, days },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch rate history',
                error.response?.status || 500,
            );
        }
    }

    // Transfers
    async createTransfer(userId: string, data: CreateTransferDto) {
        try {
            const response = await this.client.post('/transfers', {
                ...data,
                userId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create transfer',
                error.response?.status || 500,
            );
        }
    }

    async getTransfers(userId: string, status?: string) {
        try {
            const response = await this.client.get(`/users/${userId}/transfers`, {
                params: { status },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch transfers',
                error.response?.status || 500,
            );
        }
    }

    async getTransferById(transferId: string) {
        try {
            const response = await this.client.get(`/transfers/${transferId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Transfer not found',
                error.response?.status || 404,
            );
        }
    }

    async cancelTransfer(transferId: string, reason?: string) {
        try {
            const response = await this.client.post(`/transfers/${transferId}/cancel`, {
                reason,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to cancel transfer',
                error.response?.status || 500,
            );
        }
    }

    // Bank vs Black Market
    async getBankRate(currency: string) {
        try {
            const response = await this.client.get('/rates/bank', {
                params: { currency },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch bank rate',
                error.response?.status || 500,
            );
        }
    }

    async getBlackMarketRate(currency: string) {
        try {
            const response = await this.client.get('/rates/black-market', {
                params: { currency },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch black market rate',
                error.response?.status || 500,
            );
        }
    }

    // Receipt Generation
    async generateReceipt(transferId: string) {
        try {
            const response = await this.client.get(`/transfers/${transferId}/receipt`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to generate receipt',
                error.response?.status || 500,
            );
        }
    }

    // Rate Alerts
    async createRateAlert(userId: string, data: {
        currencyPair: string;
        targetRate: number;
        condition: 'above' | 'below';
    }) {
        try {
            const response = await this.client.post(`/users/${userId}/alerts`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create rate alert',
                error.response?.status || 500,
            );
        }
    }

    async getRateAlerts(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/alerts`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch rate alerts',
                error.response?.status || 500,
            );
        }
    }

    async deleteRateAlert(userId: string, alertId: string) {
        try {
            const response = await this.client.delete(`/users/${userId}/alerts/${alertId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to delete rate alert',
                error.response?.status || 500,
            );
        }
    }

    // Affiliate/Partner Links
    async getPartnerLinks() {
        try {
            const response = await this.client.get('/partners');
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch partner links',
                error.response?.status || 500,
            );
        }
    }

    async trackPartnerClick(partnerId: string, userId?: string) {
        try {
            const response = await this.client.post(`/partners/${partnerId}/click`, {
                userId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to track partner click',
                error.response?.status || 500,
            );
        }
    }
}