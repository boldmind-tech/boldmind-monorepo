import { supabase } from "../../infrastructure/supabase/client";

export async function updatePassword(newPassword: string) {
  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) throw error;
}
//This handles:

// password reset

// change password (when logged in)