// ─────────────────────────────────────────────────────────────────────────────
// packages/api-client/src/auth.api.ts
// Routes: /api/v1/auth/*
// ─────────────────────────────────────────────────────────────────────────────

import { apiFetch } from './client';
import type { ApiResponse, AuthUser, AuthTokenResponse } from './types';

// ── Payloads ──────────────────────────────────────────────────────────────────

export interface RegisterPayload {
  email:       string;
  password:    string;
  firstName?:  string;
  lastName?:   string;
}

export interface LoginPayload {
  email:      string;
  password:   string;
  rememberMe?: boolean;
}

export interface VerifyEmailPayload  { email: string; code: string; }
export interface ForgotPasswordPayload { email: string; }
export interface ResetPasswordPayload  { token: string; password: string; }
export interface ChangePasswordPayload { currentPassword: string; newPassword: string; }

// ── API ───────────────────────────────────────────────────────────────────────

export const authAPI = {
  /** POST /auth/register */
  register: (payload: RegisterPayload) =>
    apiFetch<ApiResponse<AuthTokenResponse>>('/auth/register', {
      method: 'POST', body: JSON.stringify(payload),
    }),

  /** POST /auth/login → sets HttpOnly cookie + returns tokens */
  login: (payload: LoginPayload) =>
    apiFetch<ApiResponse<AuthTokenResponse>>('/auth/login', {
      method: 'POST', body: JSON.stringify(payload),
    }),

  /** POST /auth/refresh → uses HttpOnly refresh cookie */
  refresh: () =>
    apiFetch<ApiResponse<{ accessToken: string }>>('/auth/refresh', { method: 'POST' }),

  /** POST /auth/logout */
  logout: () =>
    apiFetch<void>('/auth/logout', { method: 'POST' }),

  /** POST /auth/logout-all → revoke all sessions */
  logoutAll: () =>
    apiFetch<void>('/auth/logout-all', { method: 'POST' }),

  /** GET /auth/me → current user from cookie */
  me: () =>
    apiFetch<ApiResponse<AuthUser>>('/auth/me', { next: { revalidate: 0 } }),

  /** POST /auth/verify-email */
  verifyEmail: (payload: VerifyEmailPayload) =>
    apiFetch<ApiResponse<void>>('/auth/verify-email', {
      method: 'POST', body: JSON.stringify(payload),
    }),

  /** POST /auth/forgot-password */
  forgotPassword: (payload: ForgotPasswordPayload) =>
    apiFetch<ApiResponse<void>>('/auth/forgot-password', {
      method: 'POST', body: JSON.stringify(payload),
    }),

  /** POST /auth/reset-password */
  resetPassword: (payload: ResetPasswordPayload) =>
    apiFetch<ApiResponse<void>>('/auth/reset-password', {
      method: 'POST', body: JSON.stringify(payload),
    }),

  /** PATCH /auth/change-password (authenticated) */
  changePassword: (payload: ChangePasswordPayload) =>
    apiFetch<ApiResponse<void>>('/auth/change-password', {
      method: 'PATCH', body: JSON.stringify(payload),
    }),

  /** PATCH /auth/users/:id/role */
  updateUserRole: (userId: string, role: string) =>
    apiFetch<ApiResponse<AuthUser>>(`/auth/users/${userId}/role`, {
      method: 'PATCH', body: JSON.stringify({ role }),
    }),

  /** Google OAuth redirect URL builder (client-side only) */
  googleOAuthUrl: (redirectUrl: string, isExternal = false): string => {
    const base = (typeof process !== 'undefined'
      ? process.env['NEXT_PUBLIC_API_URL']
      : undefined)?.replace(/\/$/, '') ?? 'http://localhost:4001/api/v1';
    const url = new URL(`${base}/auth/google`);
    url.searchParams.set('redirect', redirectUrl);
    if (isExternal) url.searchParams.set('external', '1');
    return url.toString();
  },
};