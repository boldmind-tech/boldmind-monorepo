// PACKAGES/auth/src/application/session/getSession.ts
import { SupabaseAuthProvider } from '../../providers/supabase/auth';
import { Session } from '../../domain/models/Session';

let authProvider: SupabaseAuthProvider | null = null;

function getAuthProvider() {
  if (!authProvider) {
    authProvider = new SupabaseAuthProvider();
  }
  return authProvider;
}

export async function getSession(): Promise<Session | null> {
  return getAuthProvider().getSession();
}