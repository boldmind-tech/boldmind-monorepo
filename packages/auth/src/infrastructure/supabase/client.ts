import { createClient } from '@supabase/supabase-js';

/**
 * Get Supabase client for authentication
 */
export const getSupabaseClient = () => {
  const supabaseUrl = process.env['SUPABASE_URL']!;
  const supabaseKey = process.env['SUPABASE_SERVICE_ROLE_KEY']!;

  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false
    }
  });
};

/**
 * Get authenticated user from Supabase
 */
export const getAuthenticatedUser = async (accessToken?: string) => {
  const supabase = getSupabaseClient();

  if (accessToken) {
    const { data: { user } } = await supabase.auth.getUser(accessToken);
    return user;
  }

  const { data: { user } } = await supabase.auth.getUser();
  return user;
};