import React from "react";
import * as zustand from "zustand";
import * as react_jsx_runtime0 from "react/jsx-runtime";
import { AuthProvider as AuthProvider$1, EcosystemRole, UserRole } from "@boldmind/utils";

//#region src/types.d.ts
interface TokenPair {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}
interface JwtPayload {
  sub: string;
  email: string;
  role: UserRole;
  ecosystemRole?: EcosystemRole;
  permissions: string[];
  iat: number;
  exp: number;
}
interface AuthUser {
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
interface AuthSession {
  user: AuthUser;
  accessToken: string;
  expiresAt: number;
}
type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';
interface AuthState {
  status: AuthStatus;
  user: AuthUser | null;
  session: AuthSession | null;
}
interface RegisterInput {
  name: string;
  email: string;
  password: string;
  ecosystemRole?: EcosystemRole;
  referralCode?: string;
}
interface LoginInput {
  email: string;
  password: string;
}
interface AuthError {
  message: string;
  statusCode: number;
  error?: string;
}
//#endregion
//#region src/api.d.ts
declare class AuthApiError extends Error {
  readonly statusCode: number;
  readonly error?: string | undefined;
  constructor(message: string, statusCode: number, error?: string | undefined);
}
declare const authApi: {
  register(input: RegisterInput): Promise<TokenPair>;
  login(input: LoginInput): Promise<TokenPair>;
  logout(refreshToken: string): Promise<void>;
  logoutAll(accessToken: string): Promise<void>;
  refresh(refreshToken: string): Promise<TokenPair>;
  getMe(accessToken: string): Promise<AuthUser>;
  verifyEmail(email: string, code: string): Promise<{
    verified: boolean;
  }>;
  forgotPassword(email: string): Promise<void>;
  resetPassword(email: string, code: string, newPassword: string): Promise<void>;
  googleLoginUrl(): string;
};
//#endregion
//#region src/client/use-auth.d.ts
declare function useAuth(): {
  status: AuthStatus;
  user: AuthUser | null;
  session: AuthSession | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  register: (input: RegisterInput) => Promise<void>;
  login: (input: LoginInput) => Promise<void>;
  logout: () => Promise<void>;
  logoutAll: () => Promise<void>;
  loginWithGoogle: () => void;
};
//#endregion
//#region src/client/auth-provider.d.ts
interface AuthProviderProps {
  children: React.ReactNode;
}
declare function AuthProvider({
  children
}: AuthProviderProps): react_jsx_runtime0.JSX.Element;
//#endregion
//#region src/token.d.ts
declare function saveRefreshToken(token: string): void;
declare function getRefreshToken(): string | null;
declare function clearRefreshToken(): void;
declare function decodeJwt(token: string): JwtPayload | null;
declare function isTokenExpired(token: string): boolean;
declare function isTokenNearExpiry(token: string): boolean;
declare function getTokenExpiryMs(token: string): number;
//#endregion
//#region src/store.d.ts
interface AuthStore {
  status: AuthStatus;
  user: AuthUser | null;
  session: AuthSession | null;
  setSession(session: AuthSession): void;
  setUser(user: AuthUser): void;
  setStatus(status: AuthStatus): void;
  clearSession(): void;
}
declare const useAuthStore: zustand.UseBoundStore<zustand.StoreApi<AuthStore>>;
//#endregion
//#region src/config.d.ts
declare const AUTH_CONFIG: {
  readonly apiUrl: string;
  readonly cookieName: "boldmind_sso";
  readonly refreshTokenKey: "bm_rt";
  readonly sessionKey: "bm_session";
  readonly refreshThresholdMs: number;
};
//#endregion
//#region src/sso.d.ts
declare const SSO_COOKIE_NAME = "boldmind_sso";
declare function buildHubLoginUrl(returnUrl: string): string;
declare function buildHubRegisterUrl(returnUrl?: string): string;
declare function redirectToHubLogin(returnUrl?: string): void;
declare function isSafeBoldMindUrl(url: string): boolean;
declare function safeRedirectUrl(url: string | null | undefined, fallback?: string): string;
declare function getAppNameFromReturnUrl(url: string): string;
//#endregion
export { AUTH_CONFIG, AuthApiError, type AuthError, type AuthProvider, type AuthProvider$1 as AuthProviderType, type AuthSession, type AuthState, type AuthStatus, type AuthUser, type EcosystemRole, type JwtPayload, type LoginInput, type RegisterInput, SSO_COOKIE_NAME, type TokenPair, type UserRole, authApi, buildHubLoginUrl, buildHubRegisterUrl, clearRefreshToken, decodeJwt, getAppNameFromReturnUrl, getRefreshToken, getTokenExpiryMs, isSafeBoldMindUrl, isTokenExpired, isTokenNearExpiry, redirectToHubLogin, safeRedirectUrl, saveRefreshToken, useAuth, useAuthStore };
//# sourceMappingURL=index.d.ts.map