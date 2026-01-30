// PACKAGES/auth/src/application/password/updatePassword.ts
import { getSupabaseAuthProvider } from '../../providers/supabase/singleton';

export async function updatePassword(newPassword: string): Promise<void> {
  return getSupabaseAuthProvider().updatePassword(newPassword);
}