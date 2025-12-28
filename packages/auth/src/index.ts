// Export middleware
export { authMiddleware, requireRole, rateLimitMiddleware } from './middleware';

// Export supabase client
export { supabase } from './supabase';

// Export hooks
export { useAuth } from './hooks/useAuth';
export { useUser } from './hooks/useUser';
export { useSession } from './hooks/useSession';

// Export providers
export { googleProvider } from './providers/google';
export { facebookProvider } from './providers/facebook';
export { emailProvider } from './providers/email';

// Export types
export type { AuthUser, AuthSession } from './types/auth';

// Create a simple client factory
export function createAuthClient() {
  // Return a simple object for now
  return {
    signIn: async (email: string, _password: string) => {
      console.log('Sign in:', email);
      return { user: { id: '1', email }, session: null };
    },
    signUp: async (email: string, _password: string) => {
      console.log('Sign up:', email);
      return { user: { id: '1', email }, session: null };
    },
    signOut: async () => {
      console.log('Sign out');
    },
  };
}