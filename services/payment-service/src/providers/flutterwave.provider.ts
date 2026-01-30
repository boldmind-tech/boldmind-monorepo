// SERVICES/payment-service/src/providers/flutterwave.provider.ts

import axios, { AxiosInstance } from 'axios';

interface FlutterwaveInitializePayload {
    txRef: string;
    amount: number;
    currency: string;
    redirectUrl: string;
    customer: {
        email: string;
        phonenumber?: string;
        name?: string;
    };
    customizations?: {
        title?: string;
        description?: string;
        logo?: string;
    };
    meta?: any;
}

export class FlutterwaveProvider {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: 'https://api.flutterwave.com/v3',
            headers: {
                Authorization: `Bearer ${process.env['FLUTTERWAVE_SECRET_KEY']}`,
                'Content-Type': 'application/json',
            },
        });
    }

    async initializePayment(payload: FlutterwaveInitializePayload) {
        const response = await this.client.post('/payments', {
            tx_ref: payload.txRef,
            amount: payload.amount,
            currency: payload.currency,
            redirect_url: payload.redirectUrl,
            customer: payload.customer,
            customizations: payload.customizations,
            meta: payload.meta,
        });
        return response.data;
    }

    async verifyPayment(transactionId: string) {
        const response = await this.client.get(`/transactions/${transactionId}/verify`);
        return response.data;
    }

    async createTransfer(payload: any) {
        const response = await this.client.post('/transfers', payload);
        return response.data;
    }

    async listBanks(country: string = 'NG') {
        const response = await this.client.get(`/banks/${country}`);
        return response.data;
    }

    verifyWebhookSignature(signature: string, body: string): boolean {
        const crypto = require('crypto');
        const hash = crypto
            .createHmac('sha256', process.env['FLUTTERWAVE_SECRET_HASH']!)
            .update(body)
            .digest('hex');
        return hash === signature;
    }
}
