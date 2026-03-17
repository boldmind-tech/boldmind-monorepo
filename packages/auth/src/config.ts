// packages/auth/src/config.ts
// Reads from NEXT_PUBLIC_API_URL — set per Next.js app in .env.local

export const AUTH_CONFIG = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4001/api/v1',
  cookieName: 'boldmind_sso',
  refreshTokenKey: 'bm_rt',       // localStorage key for refresh token
  sessionKey: 'bm_session',       // localStorage key for session cache
  refreshThresholdMs: 2 * 60 * 1000, // Refresh if expiring in < 2 min
} as const;