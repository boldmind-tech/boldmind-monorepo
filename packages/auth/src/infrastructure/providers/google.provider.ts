import { supabase } from "../supabase/client";
import { OAuthProvider } from "../../domain/value-objects/Provider";

export const GoogleProvider: OAuthProvider = {
  type: "google",
  async login() {
    return supabase.auth.signInWithOAuth({
      provider: "google",
    });
  },
};
