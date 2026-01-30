// PACKAGES/auth/src/application/login/loginWithOAuth.ts
import { getSupabaseAuthProvider } from '../../providers/supabase/singleton';

export async function loginWithOAuth(provider: 'google' | 'github' | 'twitter' | 'facebook'): Promise<void> {
  return getSupabaseAuthProvider().signInWithOAuth(provider);
}