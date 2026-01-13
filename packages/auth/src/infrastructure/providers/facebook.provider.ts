import { supabase } from "../supabase/client";

export const FacebookProvider = {
  async login() {
    return supabase.auth.signInWithOAuth({
      provider: "facebook"
    });
  }
};
