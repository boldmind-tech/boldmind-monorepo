// PACKAGES/auth/src/application/login/loginWithEmail.ts
import { getAuthProviderInstance } from '../../providers/supabase/instance';
import { AuthResponse } from '../../domain/models/Session';

let userService: any = null;

export function setUserService(service: any) {
  userService = service;
}

export async function loginWithEmail(email: string, password: string): Promise<AuthResponse> {
  const authResponse = await getAuthProviderInstance().signInWithEmail(email, password);

  if (authResponse.error || !authResponse.session) {
    return authResponse;
  }

  if (userService) {
    try {
      const user = await userService.getMe();
      return {
        session: authResponse.session,
        user,
        error: null
      };
    } catch (error: any) {
      return {
        session: authResponse.session,
        user: null,
        error: {
          message: error.message || 'Failed to fetch user data',
          status: undefined,
          code: undefined
        }
      };
    }
  }

  return {
    session: authResponse.session,
    user: null,
    error: null
  };
}