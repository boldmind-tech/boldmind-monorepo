'use client';
// packages/auth/src/client/auth-provider.tsx
// Wrap each Next.js app's layout with this provider.
// It initialises the auth state on mount by attempting a silent refresh.

import React, { useEffect, useRef } from 'react';
import { useAuthStore } from '../store';
import { authApi } from '../api';
import {
  getRefreshToken,
  saveRefreshToken,
  clearRefreshToken,
  isTokenExpired,
  isTokenNearExpiry,
  getTokenExpiryMs,
} from '../token';
import type { AuthSession } from '../types';

let refreshTimer: ReturnType<typeof setTimeout> | null = null;

function scheduleRefresh(accessToken: string, onRefresh: () => void): void {
  if (refreshTimer) clearTimeout(refreshTimer);
  const expiryMs = getTokenExpiryMs(accessToken);
  const delay = expiryMs - Date.now() - 60_000; // 1 min before expiry
  if (delay > 0) {
    refreshTimer = setTimeout(onRefresh, delay);
  }
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { setSession, setStatus, clearSession } = useAuthStore();
  const initialized = useRef(false);

  const silentRefresh = React.useCallback(async () => {
    const rt = getRefreshToken();
    if (!rt) {
      clearSession();
      return;
    }

    try {
      const tokens = await authApi.refresh(rt);
      saveRefreshToken(tokens.refreshToken);

      const user = await authApi.getMe(tokens.accessToken);
      const session: AuthSession = {
        user,
        accessToken: tokens.accessToken,
        expiresAt: getTokenExpiryMs(tokens.accessToken),
      };
      setSession(session);
      scheduleRefresh(tokens.accessToken, silentRefresh);
    } catch {
      clearRefreshToken();
      clearSession();
    }
  }, [setSession, clearSession]);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const rt = getRefreshToken();
    if (!rt) {
      setStatus('unauthenticated');
      return;
    }

    // Attempt silent refresh on mount
    silentRefresh();

    return () => {
      if (refreshTimer) clearTimeout(refreshTimer);
    };
  }, [silentRefresh, setStatus]);

  return <>{children}</>;
}