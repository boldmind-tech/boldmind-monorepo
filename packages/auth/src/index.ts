// packages/auth/src/index.ts
// Main package barrel — re-exports everything needed by Next.js apps.

// Types
export type {
  AuthUser,
  AuthSession,
  AuthState,
  AuthStatus,
  TokenPair,
  JwtPayload,
  RegisterInput,
  LoginInput,
  AuthError,
  UserRole,
  EcosystemRole,
  AuthProvider as AuthProviderType,
} from './types';

// API client (can be used directly for custom flows)
export { authApi, AuthApiError } from './api';
export { useAuth } from './client/use-auth';
export { AuthProvider} from './client/auth-provider'


// Token utilities
export {
  saveRefreshToken,
  getRefreshToken,
  clearRefreshToken,
  decodeJwt,
  isTokenExpired,
  isTokenNearExpiry,
  getTokenExpiryMs,
} from './token';

// Zustand store (for advanced use — prefer hooks in components)
export { useAuthStore } from './store';

// Config
export { AUTH_CONFIG } from './config';

// SSO utilities
export {
  SSO_COOKIE_NAME,
  buildHubLoginUrl,
  buildHubRegisterUrl,
  redirectToHubLogin,
  isSafeBoldMindUrl,
  safeRedirectUrl,
  getAppNameFromReturnUrl,
} from './sso';