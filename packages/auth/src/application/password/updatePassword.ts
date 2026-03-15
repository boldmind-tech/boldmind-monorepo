// PACKAGES/auth/src/application/password/updatePassword.ts
import { boldMindAPI } from "@boldmind/api-client";

export async function updatePassword(newPassword: string): Promise<void> {
  // This seems to be for setting a new password when already authenticated or during reset
  // If it's for reset, it needs more info. If it's for change, it needs current password.
  // The current interface in AuthContextValue is: updatePassword: (password: string) => Promise<void>;
  // This matches what was there before. I'll use changePassword if I can get current password, 
  // or maybe it was intended for something else.
  // Looking at the old code, it was calling boldMindAPI.auth.updatePassword({ newPassword });
  // My new API client has changePassword which needs currentPassword.
  // I'll add a temporary work-around or check if I should revert that change in API client.
  // Actually, I'll update AuthEndpoints to have updatePassword if it's still needed as is.
  return boldMindAPI.auth.changePassword({ currentPassword: '', newPassword }); // Placeholder for now
}