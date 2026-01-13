import { supabase } from '../../infrastructure/supabase/client';

export async function getUser() {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error('[auth:getUser]', error.message);
    return null;
  }

  return data.user;
}
