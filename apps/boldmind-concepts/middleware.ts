// apps/boldmind-concepts/middleware.ts
// All concept tools require authentication — unauthenticated users go to hub.
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const HUB_URL =
  process.env['NEXT_PUBLIC_HUB_URL'] ||
  (process.env.NODE_ENV === 'production' ? 'https://boldmind.ng' : 'http://localhost:3000');

const SSO_COOKIE = 'boldmind_sso';

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(SSO_COOKIE)?.value;

  // Authenticated users on local auth pages → home
  if (token && ['/login', '/register'].some(p => pathname.startsWith(p))) {
    return NextResponse.redirect(new URL('/', request.url));
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
  // Protect all tool routes and local auth pages; allow root + pricing public
  matcher: [
    '/afrocopy/:path*',
    '/afrohustle/:path*',
    '/anon/:path*',
    '/farmgate/:path*',
    '/kolo/:path*',
    '/naijagig/:path*',
    '/power/:path*',
    '/receipt/:path*',
    '/remit/:path*',
    '/safe/:path*',
    '/skill2cash/:path*',
    '/login',
    '/register',
  ],
};
