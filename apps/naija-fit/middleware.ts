// apps/naija-fit/middleware.ts
// Unauthenticated users are redirected to boldmind-hub for sign-in.
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const HUB_URL =
  process.env['NEXT_PUBLIC_HUB_URL'] ||
  (process.env.NODE_ENV === 'production' ? 'https://boldmind.ng' : 'http://localhost:3000');

const SSO_COOKIE = 'boldmind_sso';

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(SSO_COOKIE)?.value;

  // Authenticated users on local auth pages → dashboard
  if (token && ['/login', '/register'].some(p => pathname.startsWith(p))) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Unauthenticated → hub login
  if (!token) {
    const loginUrl = new URL(`${HUB_URL}/login`);
    loginUrl.searchParams.set('return_url', request.nextUrl.href);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/workout/:path*', '/track/:path*', '/coach/:path*', '/login', '/register'],
};
