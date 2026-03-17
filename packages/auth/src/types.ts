// packages/auth/src/types.ts
import type { UserRole, EcosystemRole, AuthProvider } from '@boldmind/utils';

export type { UserRole, EcosystemRole, AuthProvider };

// ─── Token shapes ──────────────────────────────────────────────────────────────

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
  expiresIn: number; // seconds
}

export interface JwtPayload {
  sub: string;
  email: string;
  role: UserRole;
  ecosystemRole?: EcosystemRole;
  permissions: string[];
  iat: number;
  exp: number;
}

// ─── Session / User ────────────────────────────────────────────────────────────

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  ecosystemRole?: EcosystemRole;
  digitalMaturity: 'low' | 'medium' | 'high';
  permissions: string[];
  isVerified: boolean;
  avatar?: string;
  lastLoginAt?: string;
  createdAt: string;
  profile?: {
    displayName?: string;
    bio?: string;
    avatarUrl?: string;
    state?: string;
    prefersPidgin: boolean;
    dyslexiaMode: boolean;
    activeProducts: string[];
    onboardingDone: boolean;
    referralCode: string;
    examTarget?: string;
  };
  subscriptions?: Array<{
    productSlug: string;
    tier: string;
    currentPeriodEnd: string;
  }>;
}

export interface AuthSession {
  user: AuthUser;
  accessToken: string;
  expiresAt: number; // Unix timestamp
}

// ─── Auth state ────────────────────────────────────────────────────────────────

export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

export interface AuthState {
  status: AuthStatus;
  user: AuthUser | null;
  session: AuthSession | null;
}

// ─── API request/response ──────────────────────────────────────────────────────

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  ecosystemRole?: EcosystemRole;
  referralCode?: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface AuthError {
  message: string;
  statusCode: number;
  error?: string;
}