// PACKAGES/auth/src/application/login/loginWithEmail.ts
import { boldMindAPI } from "@boldmind/api-client";
import { AuthResponse } from '../../domain/models/Session';

let userService: any = null;

export function setUserService(service: any) {
  userService = service;
}

export async function loginWithEmail(email: string, password: string): Promise<AuthResponse> {
  try {
    const response = await boldMindAPI.auth.login({ email, password });
    
    // Response mapping to match existing application logic
    const authResponse: AuthResponse = {
      session: (response as any).session || null,
      user: (response as any).user || null,
      error: null
    };

    if (userService && authResponse.session) {
      try {
        const user = await userService.getMe();
        authResponse.user = user;
      } catch (error: any) {
        authResponse.error = {
          message: error.message || 'Failed to fetch user data',
          status: undefined,
          code: undefined
        };
      }
    }

    return authResponse;
  } catch (error: any) {
    return {
      session: null,
      user: null,
      error: {
        message: error.message || 'Login failed',
        status: error.status,
        code: error.code
      }
    };
  }
}