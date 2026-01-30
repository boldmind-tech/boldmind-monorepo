import { OAuthProvider } from "../../domain/value-objects/Provider";
import { getSupabaseClient } from "../supabase/client";

export const GoogleProvider: OAuthProvider = {
  type: "google",
  async login() {
    return getSupabaseClient().auth.signInWithOAuth({
      provider: "google",
    });
  },
};
