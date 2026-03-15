

// ─────────────────────────────────────────────────────────────────────────────
// packages/auth/src/middleware.ts
// Copy to each app as: apps/*/middleware.ts
// ─────────────────────────────────────────────────────────────────────────────
// Edge-compatible SSO guard.
//
// Reads the `boldmind_sso` httpOnly cookie set by NestJS SsoService.
// This runs on the server edge — it CAN read httpOnly cookies (unlike JS).
//
// COOKIE NAME: must match service/src/modules/auth/sso.service.ts
//   const SSO_COOKIE_NAME = 'boldmind_sso'
//
// Each app copies this file and sets its own matcher config.
// ─────────────────────────────────────────────────────────────────────────────
 
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
const HUB_URL =
  process.env['NEXT_PUBLIC_HUB_URL'] ||
  (process.env.NODE_ENV === 'production' ? 'https://boldmind.ng' : 'http://localhost:3000');
 
// Must match service/src/modules/auth/sso.service.ts
const SSO_COOKIE = 'boldmind_sso';
 
export function middlewareSSOGuard(request: NextRequest): NextResponse {
  const token = request.cookies.get(SSO_COOKIE)?.value;
 
  if (token) return NextResponse.next();
 
  // Build hub login URL with the current URL as return destination
  const loginUrl = new URL(`${HUB_URL}/login`);
  loginUrl.searchParams.set('return_url', request.nextUrl.href);
  return NextResponse.redirect(loginUrl);
}