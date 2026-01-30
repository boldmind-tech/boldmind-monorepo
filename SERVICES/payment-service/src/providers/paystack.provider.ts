
// SERVICES/payment-service/src/providers/paystack.provider.ts

import axios, { AxiosInstance } from 'axios';

interface PaystackInitializePayload {
  email: string;
  amount: number; // in kobo
  reference: string;
  currency?: 'NGN' | 'USD' | 'GBP';
  metadata?: any;
  callbackUrl?: string;
}

interface PaystackTransferRecipient {
  type: 'nuban' | 'mobile_money' | 'basa';
  name: string;
  accountNumber: string;
  bankCode: string;
  currency?: string;
}

interface PaystackTransferPayload {
  source: 'balance';
  amount: number;
  recipient: string;
  reason?: string;
  reference: string;
}

export class PaystackProvider {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.paystack.co',
      headers: {
        Authorization: `Bearer ${process.env['PAYSTACK_SECRET_KEY']}`,
        'Content-Type': 'application/json',
      },
    });
  }

  async initializePayment(payload: PaystackInitializePayload) {
    const response = await this.client.post('/transaction/initialize', {
      email: payload.email,
      amount: payload.amount,
      reference: payload.reference,
      currency: payload.currency || 'NGN',
      metadata: payload.metadata,
      callback_url: payload.callbackUrl,
    });
    return response.data;
  }

  async verifyPayment(reference: string) {
    const response = await this.client.get(`/transaction/verify/${reference}`);
    return response.data;
  }

  async createTransferRecipient(payload: PaystackTransferRecipient) {
    const response = await this.client.post('/transferrecipient', {
      type: payload.type,
      name: payload.name,
      account_number: payload.accountNumber,
      bank_code: payload.bankCode,
      currency: payload.currency || 'NGN',
    });
    return response.data;
  }

  async initiateTransfer(payload: PaystackTransferPayload) {
    const response = await this.client.post('/transfer', {
      source: payload.source,
      amount: payload.amount,
      recipient: payload.recipient,
      reason: payload.reason,
      reference: payload.reference,
    });
    return response.data;
  }

  async listBanks() {
    const response = await this.client.get('/bank');
    return response.data;
  }

  verifyWebhookSignature(signature: string, body: string): boolean {
    const crypto = require('crypto');
    const hash = crypto
      .createHmac('sha512', process.env['PAYSTACK_SECRET_KEY']!)
      .update(body)
      .digest('hex');
    return hash === signature;
  }
}
