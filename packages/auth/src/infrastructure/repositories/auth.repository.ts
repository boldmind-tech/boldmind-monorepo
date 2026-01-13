import { supabase } from "../supabase/client";

export const AuthRepository = {
  async loginWithEmail(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) throw error;
    return data;
  },

  async getSession() {
    const { data } = await supabase.auth.getSession();
    return data.session;
  },

  async logout() {
    await supabase.auth.signOut();
  }
};
