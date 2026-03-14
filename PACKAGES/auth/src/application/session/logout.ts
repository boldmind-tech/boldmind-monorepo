// PACKAGES/auth/src/application/session/logout.ts
import { boldMindAPI } from "@boldmind/api-client";

export async function logout(): Promise<void> {
  return boldMindAPI.auth.logout();
}