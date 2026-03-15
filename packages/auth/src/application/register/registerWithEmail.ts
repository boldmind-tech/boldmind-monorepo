// PACKAGES/auth/src/application/register/registerWithEmail.ts
import { boldMindAPI } from "@boldmind/api-client";
import { AuthResponse } from '../../domain/models/Session';

export async function registerWithEmail(
  data: { email: string; password: string; fullName?: string; metadata?: Record<string, any> }
): Promise<AuthResponse> {
  try {
    const response = await boldMindAPI.auth.register({
      email: data.email,
      password: data.password,
      fullName: data.fullName || (data.metadata?.fullName as string),
    });

    return {
      session: (response as any).session || null,
      user: (response as any).user || null,
      error: null
    };
  } catch (error: any) {
    return {
      session: null,
      user: null,
      error: {
        message: error.message || 'Registration failed',
        status: error.status,
        code: error.code
      }
    };
  }
}