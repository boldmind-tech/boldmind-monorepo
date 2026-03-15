// PACKAGES/auth/src/application/session/getSession.ts
import { boldMindAPI } from "@boldmind/api-client";
import { Session } from '../../domain/models/Session';

export async function getSession(): Promise<Session | null> {
  try {
    const response = await boldMindAPI.auth.getSession();
    return (response as any).session || null;
  } catch (error) {
    console.error('Failed to get session:', error);
    return null;
  }
}