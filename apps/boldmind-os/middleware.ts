// apps/boldmind-os/middleware.ts
// Public routes are open; OS/dashboard routes require SSO.
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const HUB_URL =
  process.env['NEXT_PUBLIC_HUB_URL'] ||
  (process.env.NODE_ENV === 'production' ? 'https://boldmind.ng' : 'http://localhost:3000');

const SSO_COOKIE = 'boldmind_sso';

const PUBLIC_PATHS = ['/', '/pricing', '/privacy', '/terms', '/about', '/mission', '/team', '/careers', '/contact'];

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  // Allow public marketing pages and auth routes
  if (PUBLIC_PATHS.includes(pathname) || pathname.startsWith('/login') || pathname.startsWith('/register') || pathname.startsWith('/reset-password') || pathname.startsWith('/verify-email') || pathname.startsWith('/change-password')) {
    return NextResponse.next();
  }

  const token = request.cookies.get(SSO_COOKIE)?.value;
  if (token) return NextResponse.next();

  const loginUrl = new URL(`${HUB_URL}/login`);
  loginUrl.searchParams.set('return_url', request.nextUrl.href);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|sw\\.js|manifest\\.webmanifest|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|xml|txt)$).*)'],
};
