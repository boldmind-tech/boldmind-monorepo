// PACKAGES/api-client/src/endpoints/payments.ts

import APIClient from '../client';

export interface InitializePaymentRequest {
  userId: string;
  amount: number;
  currency: 'NGN' | 'USD';
  email: string;
  phone?: string;
  subscriptionId?: string;
  invoiceId?: string;
  description?: string;
  metadata?: any;
  provider?: 'PAYSTACK' | 'FLUTTERWAVE';
}

export interface CreateSubscriptionRequest {
  userId: string;
  planId: string;
  currentPeriodStart: string;
  currentPeriodEnd: string;
}

export class PaymentsEndpoints {
  constructor(private client: APIClient) { }

  // Payments
  async initializePayment(data: InitializePaymentRequest) {
    return this.client.post('/payments/initialize', data);
  }

  async verifyPayment(reference: string) {
    return this.client.get(`/payments/verify/${reference}`);
  }

  async getPayment(id: string) {
    return this.client.get(`/payments/${id}`);
  }

  async getUserPayments(userId: string) {
    return this.client.get(`/payments/user/${userId}`);
  }

  // Subscriptions
  async createSubscription(data: CreateSubscriptionRequest) {
    return this.client.post('/subscriptions', data);
  }

  async getSubscription(id: string) {
    return this.client.get(`/subscriptions/${id}`);
  }

  async getUserSubscriptions(userId: string) {
    return this.client.get(`/subscriptions/user/${userId}`);
  }

  async cancelSubscription(id: string) {
    return this.client.post(`/subscriptions/${id}/cancel`);
  }

  // Payouts
  async requestPayout(data: {
    userId: string;
    amount: number;
    bankName: string;
    accountNumber: string;
    accountName: string;
    notes?: string;
  }) {
    return this.client.post('/payouts', data);
  }

  async getPayout(id: string) {
    return this.client.get(`/payouts/${id}`);
  }

  async getUserPayouts(userId: string) {
    return this.client.get(`/payouts/user/${userId}`);
  }
}