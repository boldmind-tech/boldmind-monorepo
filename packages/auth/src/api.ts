// packages/auth/src/api.ts
// Typed fetch wrapper for BoldMind auth endpoints.
// Used by both client hooks and server utilities.

import { AUTH_CONFIG } from './config';
import type {
  AuthUser, TokenPair, RegisterInput, LoginInput, AuthError,
} from './types';

class AuthApiError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly error?: string,
  ) {
    super(message);
    this.name = 'AuthApiError';
  }
}

async function authFetch<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const url = `${AUTH_CONFIG.apiUrl}${path}`;

  const res = await fetch(url, {
    ...options,
    credentials: 'include', // send SSO cookie
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) {
    let body: AuthError = { message: res.statusText, statusCode: res.status };
    try {
      body = await res.json();
    } catch { /* ignore parse errors */ }
    throw new AuthApiError(body.message, res.status, body.error);
  }

  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

// ─── Auth endpoints ────────────────────────────────────────────────────────────

export const authApi = {
  register(input: RegisterInput): Promise<TokenPair> {
    return authFetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify(input),
    });
  },

  login(input: LoginInput): Promise<TokenPair> {
    return authFetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify(input),
    });
  },

  logout(refreshToken: string): Promise<void> {
    return authFetch('/auth/logout', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    });
  },

  logoutAll(accessToken: string): Promise<void> {
    return authFetch('/auth/logout-all', {
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  },

  refresh(refreshToken: string): Promise<TokenPair> {
    return authFetch('/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    });
  },

  getMe(accessToken: string): Promise<AuthUser> {
    return authFetch('/auth/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  },

  verifyEmail(email: string, code: string): Promise<{ verified: boolean }> {
    return authFetch('/auth/verify-email', {
      method: 'POST',
      body: JSON.stringify({ email, code, purpose: 'email_verify' }),
    });
  },

  forgotPassword(email: string): Promise<void> {
    return authFetch('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },

  resetPassword(email: string, code: string, newPassword: string): Promise<void> {
    return authFetch('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ email, code, newPassword }),
    });
  },

  googleLoginUrl(): string {
    return `${AUTH_CONFIG.apiUrl}/auth/google`;
  },
};

export { AuthApiError };

