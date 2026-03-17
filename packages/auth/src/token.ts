// packages/auth/src/token.ts
// Client-side token storage helpers (localStorage + in-memory cache).
// Never called during SSR — all checks are guarded by typeof window.

import { AUTH_CONFIG } from './config';
import type { JwtPayload } from './types';

// ─── Storage ───────────────────────────────────────────────────────────────────

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

export function saveRefreshToken(token: string): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(AUTH_CONFIG.refreshTokenKey, token);
  } catch { /* storage quota exceeded / private mode */ }
}

export function getRefreshToken(): string | null {
  if (!isBrowser()) return null;
  try {
    return localStorage.getItem(AUTH_CONFIG.refreshTokenKey);
  } catch {
    return null;
  }
}

export function clearRefreshToken(): void {
  if (!isBrowser()) return;
  try {
    localStorage.removeItem(AUTH_CONFIG.refreshTokenKey);
    localStorage.removeItem(AUTH_CONFIG.sessionKey);
  } catch { /* ignore */ }
}

// ─── JWT decode (no signature verification — trust the server) ─────────────────

export function decodeJwt(token: string): JwtPayload | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const payload = parts[1];
    // Pad base64url to standard base64
    const padded = payload.replace(/-/g, '+').replace(/_/g, '/');
    const json = atob(padded);
    return JSON.parse(json) as JwtPayload;
  } catch {
    return null;
  }
}

export function isTokenExpired(token: string): boolean {
  const payload = decodeJwt(token);
  if (!payload) return true;
  return payload.exp * 1000 < Date.now();
}

export function isTokenNearExpiry(token: string): boolean {
  const payload = decodeJwt(token);
  if (!payload) return true;
  return payload.exp * 1000 - Date.now() < AUTH_CONFIG.refreshThresholdMs;
}

export function getTokenExpiryMs(token: string): number {
  const payload = decodeJwt(token);
  if (!payload) return 0;
  return payload.exp * 1000;
}