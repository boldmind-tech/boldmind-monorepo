import { supabase } from '../../infrastructure/supabase/client';

export async function getSession() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error('[auth:getSession]', error.message);
    return null;
  }

  return data.session;
}
