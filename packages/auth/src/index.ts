// PACKAGES/auth/src/index.ts

// auth actions
export { loginWithEmail } from "./application/login/loginWithEmail";
export { loginWithOAuth } from "./application/login/loginWithOAuth";
export { registerWithEmail } from "./application/register/registerWithEmail";

// password
export { requestPasswordReset } from "./application/password/requestPasswordReset";
export { updatePassword } from "./application/password/updatePassword";

// session
export { getSession } from "./application/session/getSession";
export { getUser } from "./application/session/getUser";
export { logout } from "./application/session/logout";

// react
export { AuthProvider, useAuth, createAuthProvider } from "./delivery/react/AuthProvider";
export { useUser } from "./delivery/react/hooks/useUser";

// access control
export {
  canAccessFeature,
  canAccessProduct,
  getUserTier,
  PRODUCT_FEATURES
} from './domain/policies/canAccessFeature';
export type { ProductSlug, FeatureTier } from './domain/policies/canAccessFeature';

// providers - ONLY export the class, not the instance
// export { SupabaseAuthProvider } from './providers/supabase/auth';
export { getSupabaseClient, getSupabaseServer, getSupabaseBrowser, resetSupabaseInstance } from './providers/supabase/client';
export { getSupabaseAuthProvider, resetSupabaseAuthProvider } from './providers/supabase/singleton';

// domain models
export type { User, Session, AuthState, AuthError, AuthResponse } from './domain/models/index';

export type { AuthContextValue, UserAPI } from './delivery/react/AuthProvider';
export * from './middleware'