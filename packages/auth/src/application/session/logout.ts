// PACKAGES/auth/src/application/session/logout.ts
import { getSupabaseAuthProvider } from '../../providers/supabase/singleton';

export async function logout(): Promise<void> {
  return getSupabaseAuthProvider().signOut();
}