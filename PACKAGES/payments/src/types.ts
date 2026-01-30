export type PaymentProvider = 'paystack' | 'flutterwave';

export interface PaymentConfig {
  provider: PaymentProvider;
  publicKey: string;
  secretKey: string;
  currency: string;
}

export interface PaymentData {
  amount: number;
  email: string;
  reference?: string;
  currency?: string;
  metadata?: Record<string, any>;
  callback_url?: string;
  redirect_url?: string;
  customer?: {
    name?: string;
    phone?: string;
  };
}

export interface PaymentResponse {
  success: boolean;
  message: string;
  data?: {
    reference: string;
    authorization_url?: string;
    checkout_url?: string;
    access_code?: string;
  };
  error?: string;
}

export interface PaymentVerificationResponse {
  success: boolean;
  verified: boolean;
  data?: {
    reference: string;
    amount: number;
    currency: string;
    status: string;
    paid_at?: string;
    customer?: {
      email: string;
      name?: string;
    };
  };
    message?: string; 
  error?: string;

}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description?: string;
  price: number;
  interval: 'daily' | 'weekly' | 'monthly' | 'yearly';
  features: string[];
  providerPlanCode?: string; // Provider-specific plan code
}

export interface CreateSubscriptionData {
  customerEmail: string;
  planId: string;
  authorizationCode?: string;
  startDate?: Date;
}

export interface Subscription {
  id: string;
  customerEmail: string;
  planId: string;
  status: 'active' | 'inactive' | 'cancelled' | 'past_due';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  providerSubscriptionId?: string;
  provider: PaymentProvider;
}