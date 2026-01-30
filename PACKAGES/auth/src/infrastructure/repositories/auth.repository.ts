import { getSupabaseClient } from "../supabase/client";

export const AuthRepository = {
  async loginWithEmail(email: string, password: string) {
    const { data, error } = await getSupabaseClient().auth.signInWithPassword({
      email,
      password
    });
    if (error) throw error;
    return data;
  },

  async getSession() {
    const { data } = await getSupabaseClient().auth.getSession();
    return data.session;
  },

  async logout() {
    await getSupabaseClient().auth.signOut();
  }
};
