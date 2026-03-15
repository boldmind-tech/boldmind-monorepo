// PACKAGES/auth/src/application/password/requestPasswordReset.ts
import { boldMindAPI } from "@boldmind/api-client";

export async function requestPasswordReset(email: string): Promise<void> {
  return boldMindAPI.auth.forgotPassword({ email });
}