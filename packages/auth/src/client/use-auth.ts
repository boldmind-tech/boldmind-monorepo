'use client';
// packages/auth/src/client/use-auth.ts
// Primary hook — provides login, logout, register, and current session.

import { useCallback } from 'react';
import { useAuthStore } from '../store';
import { authApi, AuthApiError } from '../api';
import {
  saveRefreshToken,
  clearRefreshToken,
  getTokenExpiryMs,
} from '../token';
import type { RegisterInput, LoginInput, AuthSession } from '../types';

export function useAuth() {
  const { status, user, session, setSession, clearSession } = useAuthStore();

  // ── Register ──────────────────────────────────────────────────────────────

  const register = useCallback(async (input: RegisterInput): Promise<void> => {
    const tokens = await authApi.register(input);
    saveRefreshToken(tokens.refreshToken);

    const authUser = await authApi.getMe(tokens.accessToken);
    const sess: AuthSession = {
      user: authUser,
      accessToken: tokens.accessToken,
      expiresAt: getTokenExpiryMs(tokens.accessToken),
    };
    setSession(sess);
  }, [setSession]);

  // ── Login ─────────────────────────────────────────────────────────────────

  const login = useCallback(async (input: LoginInput): Promise<void> => {
    const tokens = await authApi.login(input);
    saveRefreshToken(tokens.refreshToken);

    const authUser = await authApi.getMe(tokens.accessToken);
    const sess: AuthSession = {
      user: authUser,
      accessToken: tokens.accessToken,
      expiresAt: getTokenExpiryMs(tokens.accessToken),
    };
    setSession(sess);
  }, [setSession]);

  // ── Logout ────────────────────────────────────────────────────────────────

  const logout = useCallback(async (): Promise<void> => {
    const rt = localStorage.getItem('bm_rt');
    try {
      if (rt) await authApi.logout(rt);
    } catch { /* best-effort */ }
    clearRefreshToken();
    clearSession();
  }, [clearSession]);

  // ── Logout all devices ────────────────────────────────────────────────────

  const logoutAll = useCallback(async (): Promise<void> => {
    const accessToken = session?.accessToken;
    try {
      if (accessToken) await authApi.logoutAll(accessToken);
    } catch { /* best-effort */ }
    clearRefreshToken();
    clearSession();
  }, [session, clearSession]);

  // ── Google SSO ────────────────────────────────────────────────────────────

  const loginWithGoogle = useCallback((): void => {
    window.location.href = authApi.googleLoginUrl();
  }, []);

  return {
    // State
    status,
    user,
    session,
    isAuthenticated: status === 'authenticated',
    isLoading: status === 'loading',

    // Actions
    register,
    login,
    logout,
    logoutAll,
    loginWithGoogle,
  };
}