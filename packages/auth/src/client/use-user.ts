'use client';
// packages/auth/src/client/use-user.ts
// Convenience hook — returns just the current user (or null).

import { useAuthStore } from '../store';
import type { AuthUser } from '../types';

export function useUser(): AuthUser | null {
  return useAuthStore((s: { user: AuthUser | null }) => s.user);
}


