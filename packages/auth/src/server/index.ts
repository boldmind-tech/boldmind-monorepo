// packages/auth/src/server/index.ts
// Server-side auth utilities for Next.js App Router (RSC + Route Handlers).
// Uses `jose` for JWT verification — no round-trip to the API needed.
'use server';
import { jwtVerify, type JWTPayload } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { JwtPayload, AuthUser } from '../types';
import { AUTH_CONFIG } from '../config';
import { authApi } from '../api';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? 'change-me-in-production',
);

// ─── Verify token (signature + expiry) ────────────────────────────────────────

export async function verifyToken(token: string): Promise<JwtPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as unknown as JwtPayload;
  } catch {
    return null;
  }
}

// ─── Get session from SSO cookie (Server Components / Route Handlers) ─────────

export async function getServerSession(): Promise<{ user: JwtPayload; token: string } | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_CONFIG.cookieName)?.value;

  if (!token) return null;

  const payload = await verifyToken(token);
  if (!payload) return null;

  return { user: payload, token };
}

// ─── Get full user profile (makes API call) ────────────────────────────────────

export async function getServerUser(): Promise<AuthUser | null> {
  const session = await getServerSession();
  if (!session) return null;

  try {
    return await authApi.getMe(session.token);
  } catch {
    return null;
  }
}

// ─── Route protection helpers ──────────────────────────────────────────────────

/**
 * Require authentication in Server Components.
 * Redirects to /login if not authenticated.
 *
 * Usage in page.tsx:
 *   const user = await requireAuth();
 */
export async function requireAuth(redirectTo = '/login'): Promise<JwtPayload> {
  const session = await getServerSession();
  if (!session) redirect(redirectTo);
  return session.user;
}

/**
 * Require specific roles in Server Components.
 * Redirects to /unauthorized if role not met.
 */
export async function requireRole(
  roles: string[],
  redirectTo = '/unauthorized',
): Promise<JwtPayload> {
  const user = await requireAuth();
  if (!roles.includes(user.role) && user.role !== 'super_admin') {
    redirect(redirectTo);
  }
  return user;
}

/**
 * Redirect to dashboard if already authenticated.
 * Use on /login and /register pages.
 */
export async function redirectIfAuthenticated(to = '/dashboard'): Promise<void> {
  const session = await getServerSession();
  if (session) redirect(to);
}