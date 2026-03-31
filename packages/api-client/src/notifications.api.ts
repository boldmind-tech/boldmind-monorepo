// ─────────────────────────────────────────────────────────────────────────────
// packages/api-client/src/notifications.api.ts
// Routes: /api/v1/notifications/*
// ─────────────────────────────────────────────────────────────────────────────

import { apiFetch, qs } from './client';
import type { ApiResponse, PaginatedResponse, Notification } from './types';

export const notificationsAPI = {
  /** GET /notifications */
  list: (params?: { page?: number; limit?: number }) =>
    apiFetch<PaginatedResponse<Notification>>(`/notifications${qs({ ...params })}`, {
      next: { revalidate: 0 },
    }),

  /** POST /notifications/read — mark all as read (or pass ids in body) */
  markRead: (ids?: string[]) =>
    apiFetch<void>('/notifications/read', {
      method: 'POST',
      body: JSON.stringify(ids ? { ids } : {}),
    }),

  /** DELETE /notifications/:id */
  delete: (id: string) =>
    apiFetch<void>(`/notifications/${id}`, { method: 'DELETE' }),

  push: {
    /** POST /notifications/push/subscribe */
    subscribe: (subscription: PushSubscription) =>
      apiFetch<void>('/notifications/push/subscribe', {
        method: 'POST', body: JSON.stringify(subscription),
      }),

    /** POST /notifications/push/unsubscribe */
    unsubscribe: (endpoint: string) =>
      apiFetch<void>('/notifications/push/unsubscribe', {
        method: 'POST', body: JSON.stringify({ endpoint }),
      }),
  },

  admin: {
    /** POST /notifications/broadcast/push */
    broadcastPush: (data: { title: string; body: string; url?: string }) =>
      apiFetch<ApiResponse<void>>('/notifications/broadcast/push', {
        method: 'POST', body: JSON.stringify(data),
      }),

    /** POST /notifications/broadcast/email */
    broadcastEmail: (data: { subject: string; html: string; userIds?: string[] }) =>
      apiFetch<ApiResponse<void>>('/notifications/broadcast/email', {
        method: 'POST', body: JSON.stringify(data),
      }),
  },
};