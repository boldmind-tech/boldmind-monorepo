// PACKAGES/auth/src/application/session/getUser.ts
import { getSupabaseAuthProvider } from '../../providers/supabase/singleton';

let userService: any = null;

export function setUserService(service: any) {
  userService = service;
}

export async function getUser() {
  const session = await getSupabaseAuthProvider().getSession();

  if (!session?.user?.id) {
    return null;
  }

  // If userService is available, fetch full user data
  if (userService) {
    try {
      return await userService.getMe();
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      return null;
    }
  }

  // Return session user if no userService
  return session.user;
}