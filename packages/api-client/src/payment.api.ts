// ─────────────────────────────────────────────────────────────────────────────
// packages/api-client/src/payment.api.ts
// Routes: /api/v1/payment/*
// ─────────────────────────────────────────────────────────────────────────────

import { apiFetch } from './client';
import type { ApiResponse, PaystackInit, PaymentVerification, Subscription, ProductAccess, WaitlistEntry } from './types';

export interface InitializePaymentPayload {
  productSlug: string;
  plan:        string;
  email:       string;
  callbackUrl: string;
  amount?:     number;
  metadata?:   Record<string, unknown>;
}

export const paymentAPI = {
  /** POST /payment/initialize → get Paystack authorization URL */
  initialize: (payload: InitializePaymentPayload) =>
    apiFetch<ApiResponse<PaystackInit>>('/payment/initialize', {
      method: 'POST', body: JSON.stringify(payload),
    }),

  /** GET /payment/verify/:reference */
  verify: (reference: string) =>
    apiFetch<ApiResponse<PaymentVerification>>(`/payment/verify/${reference}`, {
      next: { revalidate: 0 },
    }),

  /** GET /payment/history */
  history: () =>
    apiFetch<ApiResponse<PaymentVerification[]>>('/payment/history', {
      next: { revalidate: 0 },
    }),

  /** GET /payment/subscriptions */
  subscriptions: () =>
    apiFetch<ApiResponse<Subscription[]>>('/payment/subscriptions', {
      next: { revalidate: 0 },
    }),

  /** GET /payment/access/:productSlug */
  checkAccess: (productSlug: string) =>
    apiFetch<ApiResponse<ProductAccess>>(`/payment/access/${productSlug}`, {
      next: { revalidate: 60 },
    }),

  /** POST /payment/waitlist */
  joinWaitlist: (data: { email: string; productSlug: string; name?: string }) =>
    apiFetch<ApiResponse<WaitlistEntry>>('/payment/waitlist', {
      method: 'POST', body: JSON.stringify(data),
    }),
};
