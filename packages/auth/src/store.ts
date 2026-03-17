// packages/auth/src/store.ts
// Global Zustand store — single source of truth for auth state across all
// components within a Next.js app.

import { create } from 'zustand';
import type { AuthUser, AuthSession, AuthStatus } from './types';

interface AuthStore {
  status: AuthStatus;
  user: AuthUser | null;
  session: AuthSession | null;

  // Actions
  setSession(session: AuthSession): void;
  setUser(user: AuthUser): void;
  setStatus(status: AuthStatus): void;
  clearSession(): void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  status: 'loading',
  user: null,
  session: null,

  setSession(session) {
    set({ session, user: session.user, status: 'authenticated' });
  },

  setUser(user) {
    set((state) => ({
      user,
      session: state.session ? { ...state.session, user } : null,
    }));
  },

  setStatus(status) {
    set({ status });
  },

  clearSession() {
    set({ status: 'unauthenticated', user: null, session: null });
  },
}));