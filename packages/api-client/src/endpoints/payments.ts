import { api } from '../client';

// Define types locally since @boldmind/payments might not exist yet
export type PaymentProvider = 'paystack' | 'flutterwave' | 'stripe';

export interface PaymentData {
  amount: number;
  currency?: string;
  email: string;
  reference?: string;
  callback_url?: string;
  redirect_url?: string;
  metadata?: Record<string, any>;
  customer?: {
    name?: string;
    phone?: string;
    email: string;
  };
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  amount: number;
  currency: string;
  interval: 'daily' | 'weekly' | 'monthly' | 'yearly';
  features: string[];
  isPopular?: boolean;
}

export interface PaymentRequest extends PaymentData {
  provider: PaymentProvider;
  productId?: string;
  planId?: string;
}

export interface CreateSubscriptionRequest {
  planId: string;
  provider: PaymentProvider;
  paymentMethodId?: string;
  trialDays?: number;
}

export interface PaymentHistory {
  id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'successful' | 'failed' | 'refunded';
  reference: string;
  provider: PaymentProvider;
  createdAt: string;
  description?: string;
  productName?: string;
}

export const paymentsApi = {
  // Payment methods
  initializePayment: (data: PaymentRequest) => 
    api.post<{ checkout_url?: string; authorization_url?: string; reference: string }>(
      '/payments/initialize',
      data
    ),
  
  verifyPayment: (reference: string) => 
    api.get<{ verified: boolean; data: any }>(`/payments/verify/${reference}`),
  
  getPaymentHistory: (params?: { limit?: number; offset?: number }) => 
    api.get<{ payments: PaymentHistory[]; total: number }>('/payments/history', params ? { params } : {}),
  
  // Subscriptions
  getSubscriptionPlans: () => 
    api.get<SubscriptionPlan[]>('/payments/plans'),
  
  getActiveSubscription: () => 
    api.get<{ plan: SubscriptionPlan; status: string; nextBillingDate: string }>('/payments/subscription'),
  
  createSubscription: (data: CreateSubscriptionRequest) => 
    api.post('/payments/subscription', data),
  
  cancelSubscription: () => 
    api.delete('/payments/subscription'),
  
  updateSubscription: (planId: string) => 
    api.put('/payments/subscription', { planId }),
  
  // Webhooks
  handleWebhook: (provider: PaymentProvider, payload: any, signature?: string) => 
    api.post(`/webhooks/${provider}`, { payload, signature }),
  
  // Refunds
  requestRefund: (paymentId: string, reason: string) => 
    api.post(`/payments/${paymentId}/refund`, { reason }),
  
  // Payment methods management
  getPaymentMethods: () => 
    api.get<any[]>('/payments/methods'),
  
  addPaymentMethod: (data: any) => 
    api.post('/payments/methods', data),
  
  removePaymentMethod: (methodId: string) => 
    api.delete(`/payments/methods/${methodId}`),
  
  setDefaultPaymentMethod: (methodId: string) => 
    api.put(`/payments/methods/${methodId}/default`)
};