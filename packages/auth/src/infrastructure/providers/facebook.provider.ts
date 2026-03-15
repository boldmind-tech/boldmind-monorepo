import { getSupabaseClient } from "../supabase/client";

export const FacebookProvider = {
  async login() {
    return getSupabaseClient().auth.signInWithOAuth({
      provider: "facebook"
    });
  }
};
