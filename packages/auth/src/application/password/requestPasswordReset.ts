// PACKAGES/auth/src/application/password/requestPasswordReset.ts
import { getSupabaseAuthProvider } from '../../providers/supabase/singleton';

export async function requestPasswordReset(email: string): Promise<void> {
  return getSupabaseAuthProvider().resetPasswordForEmail(email);
}