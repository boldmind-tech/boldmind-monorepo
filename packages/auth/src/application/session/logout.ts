import { supabase } from '../../infrastructure/supabase/client';

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('[auth:logout]', error.message);
    throw error;
  }
}
