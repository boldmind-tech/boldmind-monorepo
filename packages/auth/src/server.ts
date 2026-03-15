// PACKAGES/auth/src/server.ts

// session helpers
export { getSession } from "./application/session/getSession";
export { getUser } from "./application/session/getUser";
export { logout } from "./application/session/logout";

// providers
export { getSupabaseClient, getSupabaseServer, getSupabaseAdmin, getSupabaseMiddleware, resetSupabaseInstance } from './providers/supabase/client';
export { getSupabaseAuthProvider, resetSupabaseAuthProvider } from './providers/supabase/singleton';

// domain models & types
export type { User, Session, AuthState, AuthError, AuthResponse } from './domain/models/index';
export type { UserAPI } from './domain/models/UserAPI';
export {
    canAccessFeature,
    canAccessProduct,
    getUserTier,
    PRODUCT_FEATURES
} from './domain/policies/canAccessFeature';
export type { ProductSlug, FeatureTier } from './domain/policies/canAccessFeature';
