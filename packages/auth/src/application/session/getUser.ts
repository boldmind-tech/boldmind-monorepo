// PACKAGES/auth/src/application/session/getUser.ts
import { boldMindAPI } from '@boldmind/api-client';

let userService: any = null;

export function setUserService(service: any) {
  userService = service;
}

export async function getUser() {
  try {
    const { session } = await boldMindAPI.auth.getSession();

    if (!session?.user?.id) {
      return null;
    }

    // If userService is available, fetch full user data
    if (userService) {
      try {
        return await userService.getMe();
      } catch (error) {
        console.error('Failed to fetch user data via userService:', error);
        // Fallback to session user
      }
    }

    // Try default hub users.getMe if no userService
    try {
      return await boldMindAPI.users.getMe();
    } catch (error) {
      console.error('Failed to fetch user data via default hub:', error);
      return session.user;
    }
  } catch (error) {
    console.error('[getUser] Failed to fetch session:', error);
    return null;
  }
}