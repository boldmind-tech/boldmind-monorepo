// PACKAGES/auth/src/application/register/registerWithEmail.ts
import { getSupabaseAuthProvider } from '../../providers/supabase/singleton';
import { AuthResponse } from '../../domain/models/Session';

function getAuthProvider() {
  return getSupabaseAuthProvider();
}

export async function registerWithEmail(
  data: { email: string; password: string; metadata?: Record<string, any> }
): Promise<AuthResponse> {
  return getAuthProvider().signUpWithEmail(data.email, data.password, data.metadata);
}