// ─────────────────────────────────────────────────────────────────────────────
// packages/api-client/src/admin.api.ts
// Routes: /api/v1/admin/*
// ─────────────────────────────────────────────────────────────────────────────

import { apiFetch, qs } from './client';
import type { ApiResponse, PaginatedResponse, AdminStats, AdminUser, WaitlistEntry } from './types';

export const adminAPI = {
  /** GET /admin/stats */
  stats: () =>
    apiFetch<ApiResponse<AdminStats>>('/admin/stats', { next: { revalidate: 60 } }),

  users: {
    /** GET /admin/users */
    list: (params?: { page?: number; limit?: number; role?: string; search?: string }) =>
      apiFetch<PaginatedResponse<AdminUser>>(`/admin/users${qs({ ...params })}`),

    /** PATCH /admin/users/:id/role */
    updateRole: (id: string, role: string) =>
      apiFetch<ApiResponse<AdminUser>>(`/admin/users/${id}/role`, {
        method: 'PATCH', body: JSON.stringify({ role }),
      }),
  },

  /** GET /admin/revenue */
  revenue: () =>
    apiFetch<ApiResponse<unknown>>('/admin/revenue', { next: { revalidate: 300 } }),

  waitlist: {
    /** GET /admin/waitlist */
    list: (params?: { productSlug?: string; page?: number }) =>
      apiFetch<PaginatedResponse<WaitlistEntry>>(`/admin/waitlist${qs({ ...params })}`),

    /** POST /admin/waitlist/:productSlug/invite */
    invite: (productSlug: string, emails: string[]) =>
      apiFetch<ApiResponse<{ invited: number }>>(`/admin/waitlist/${productSlug}/invite`, {
        method: 'POST', body: JSON.stringify({ emails }),
      }),
  },

  /** GET /admin/logs */
  logs: (params?: { page?: number; limit?: number; level?: string }) =>
    apiFetch<PaginatedResponse<unknown>>(`/admin/logs${qs({ ...params })}`),
};