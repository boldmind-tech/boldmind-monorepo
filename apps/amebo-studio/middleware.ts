// ─────────────────────────────────────────────────────────────────────────────
// FILE: apps/amebo-studio/middleware.ts
// Public routes are open; dashboard and app routes require SSO
// ─────────────────────────────────────────────────────────────────────────────

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const HUB_URL = process.env['NEXT_PUBLIC_HUB_URL'] ||
  (process.env.NODE_ENV === 'production' ? 'https://boldmind.ng' : 'http://localhost:3001');
const SSO_COOKIE = 'boldmind_sso';

const PUBLIC_PATHS = ['/', '/pricing', '/privacy', '/terms', '/cookies'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (PUBLIC_PATHS.includes(pathname)) return NextResponse.next();

  if (!request.cookies.get(SSO_COOKIE)?.value) {
    const loginUrl = new URL(`${HUB_URL}/login`);
    loginUrl.searchParams.set('return_url', request.nextUrl.href);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|logo|og-image).*)'],
};

 