// PACKAGES/auth/src/application/login/loginWithOAuth.ts
import { boldMindAPI } from "@boldmind/api-client";

export async function loginWithOAuth(provider: 'google' | 'github' | 'twitter' | 'facebook'): Promise<void> {
  // Redirect to the centralized API hub OAuth endpoint
  const apiUrl = process.env['NEXT_PUBLIC_API_URL'] || 'http://localhost:4001/api/v1';
  window.location.href = `${apiUrl}/auth/oauth/${provider}`;
}