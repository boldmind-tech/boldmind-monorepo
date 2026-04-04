// apps/planai-suite/middleware.ts
// SSO guard — unauthenticated users are sent to boldmind-hub to log in.
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const HUB_URL =
  process.env['NEXT_PUBLIC_HUB_URL'] ||
  (process.env.NODE_ENV === 'production' ? 'https://boldmind.ng' : 'http://localhost:3000');

const SSO_COOKIE = 'boldmind_sso';

export function middleware(request: NextRequest): NextResponse {
  const token = request.cookies.get(SSO_COOKIE)?.value;
  if (token) return NextResponse.next();

  const loginUrl = new URL(`${HUB_URL}/login`);
  loginUrl.searchParams.set('return_url', request.nextUrl.href);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/(tools)/:path*', '/dashboard/:path*'],
};
