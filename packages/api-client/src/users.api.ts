// ─────────────────────────────────────────────────────────────────────────────
// packages/api-client/src/users.api.ts
// Routes: /api/v1/users/*
// ─────────────────────────────────────────────────────────────────────────────

import { apiFetch, qs } from './client';
import type { ApiResponse, PaginatedResponse, AuthUser } from './types';

export interface UserListParams {
  page?:    number;
  limit?:   number;
  search?:  string;
  role?:    string;
  isActive?: boolean;
}

export interface UpdateProfilePayload {
  firstName?: string;
  lastName?:  string;
  avatar?:    string;
  bio?:       string;
  phone?:     string;
}

export const usersAPI = {
  /** GET /users — admin: list all users */
  list: (params?: UserListParams) =>
    apiFetch<PaginatedResponse<AuthUser>>(`/users${qs({ ...params })}`),

  /** GET /users/dashboard — current user dashboard stats */
  dashboard: () =>
    apiFetch<ApiResponse<unknown>>('/users/dashboard', { next: { revalidate: 0 } }),

  /** GET /users/:id */
  get: (id: string) =>
    apiFetch<ApiResponse<AuthUser>>(`/users/${id}`),

  /** PATCH /users/:id */
  update: (id: string, data: Partial<AuthUser>) =>
    apiFetch<ApiResponse<AuthUser>>(`/users/${id}`, {
      method: 'PATCH', body: JSON.stringify(data),
    }),

  /** PATCH /users/:id/profile */
  updateProfile: (id: string, payload: UpdateProfilePayload) =>
    apiFetch<ApiResponse<AuthUser>>(`/users/${id}/profile`, {
      method: 'PATCH', body: JSON.stringify(payload),
    }),

  /** GET /users/:id/activity */
  activity: (id: string) =>
    apiFetch<ApiResponse<unknown[]>>(`/users/${id}/activity`),

  /** DELETE /users/:id/ban */
  ban: (id: string) =>
    apiFetch<void>(`/users/${id}/ban`, { method: 'DELETE' }),
};
