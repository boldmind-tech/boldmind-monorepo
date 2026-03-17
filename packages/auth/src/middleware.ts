// packages/auth/src/middleware.ts
// Drop-in Next.js middleware. Import and re-export from each app's middleware.ts
//
// Usage in apps/your-app/middleware.ts:
//
//   export { middleware, config } from '@boldmind/auth/middleware';
//
// Or wrap with custom logic:
//
//   import { createAuthMiddleware } from '@boldmind/auth/middleware';
//   export const middleware = createAuthMiddleware({ publicPaths: ['/about'] });
//   export { config } from '@boldmind/auth/middleware';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import { AUTH_CONFIG } from './config';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? 'change-me-in-production',
);

// Paths that never require authentication
const DEFAULT_PUBLIC_PATHS = [
  '/',
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/verify-email',
  '/auth/google',
  '/auth/google/callback',
];

interface MiddlewareOptions {
  /** Additional public paths (regex or string) */
  publicPaths?: (string | RegExp)[];
  /** Where to redirect unauthenticated users */
  loginPath?: string;
  /** Where to redirect authenticated users from auth pages */
  dashboardPath?: string;
}

export function createAuthMiddleware(options: MiddlewareOptions = {}) {
  const {
    publicPaths = [],
    loginPath = '/login',
    dashboardPath = '/dashboard',
  } = options;

  const allPublicPaths = [...DEFAULT_PUBLIC_PATHS, ...publicPaths];

  return async function middleware(request: NextRequest): Promise<NextResponse> {
    const { pathname } = request.nextUrl;

    // Check if this is a public path
    const isPublic = allPublicPaths.some((p) =>
      typeof p === 'string' ? pathname.startsWith(p) : p.test(pathname),
    );

    // Get SSO cookie
    const token = request.cookies.get(AUTH_CONFIG.cookieName)?.value;
    let isAuthenticated = false;

    if (token) {
      try {
        await jwtVerify(token, JWT_SECRET);
        isAuthenticated = true;
      } catch {
        isAuthenticated = false;
      }
    }

    // Redirect authenticated users away from auth pages
    const isAuthPage = [loginPath, '/register', '/forgot-password'].includes(pathname);
    if (isAuthenticated && isAuthPage) {
      return NextResponse.redirect(new URL(dashboardPath, request.url));
    }

    // Require authentication for protected routes
    if (!isPublic && !isAuthenticated) {
      const loginUrl = new URL(loginPath, request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  };
}

// Default middleware — protect everything except default public paths
export const middleware = createAuthMiddleware();

// Default matcher — skip static files and API routes
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|public|api).*)',
  ],
};