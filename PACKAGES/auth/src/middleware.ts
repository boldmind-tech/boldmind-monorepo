//PACKAGES/auth/src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseMiddleware } from './providers/supabase/client';

// ============================================================================
// PUBLIC ROUTES CONFIGURATION
// ============================================================================

const DEFAULT_PUBLIC_ROUTES = [
  '/',
  '/login',
  '/register',
  '/signup',
  '/forgot-password',
  '/reset-password',
  '/verify-email',
  '/auth/callback',
  '/api/auth/callback',
];

// ============================================================================
// MAIN AUTH MIDDLEWARE
// ============================================================================

export interface AuthMiddlewareOptions {
  publicRoutes?: string[];
  protectedRoutes?: string[];
  redirectTo?: string;
  bypassAuth?: boolean; // For development/testing
}

/**
 * Main authentication middleware
 * Checks if user has valid session and redirects to login if not
 */
export function createAuthMiddleware(options: AuthMiddlewareOptions = {}) {
  const {
    publicRoutes = DEFAULT_PUBLIC_ROUTES,
    protectedRoutes = [],
    redirectTo = '/login',
    bypassAuth = false,
  } = options;

  return async function authMiddleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Bypass auth in development if needed
    if (bypassAuth) {
      return NextResponse.next();
    }

    // Check if route is public
    const isPublic = publicRoutes.some(route => {
      if (route.endsWith('*')) {
        return pathname.startsWith(route.slice(0, -1));
      }
      return pathname === route || pathname.startsWith(`${route}/`);
    });

    if (isPublic) {
      return NextResponse.next();
    }

    // Check if route is explicitly protected
    const isProtected = protectedRoutes.length === 0 ||
      protectedRoutes.some(route => {
        if (route.endsWith('*')) {
          return pathname.startsWith(route.slice(0, -1));
        }
        return pathname === route || pathname.startsWith(`${route}/`);
      });

    if (!isProtected) {
      return NextResponse.next();
    }

    // Validate user with Supabase
    try {
      const { supabase, response } = getSupabaseMiddleware(request, NextResponse.next());
      const { data: { user }, error } = await supabase.auth.getUser();

      console.log(`[AuthMiddleware] Path: ${pathname}, User: ${user?.id}, Error: ${error?.message}`);

      if (error || !user) {
        console.log('[AuthMiddleware] Redirecting to login due to missing user or error');
        const loginUrl = new URL(redirectTo, request.url);
        loginUrl.searchParams.set('callbackUrl', pathname);
        return NextResponse.redirect(loginUrl);
      }

      // Add user info to headers for easy access in API routes
      response.headers.set('x-user-id', user.id);
      response.headers.set('x-user-email', user.email || '');

      return response;
    } catch (error) {
      console.error('[AuthMiddleware] Session validation error:', error);
      // On error during redirect to login is safer than failing open
      const loginUrl = new URL(redirectTo, request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
  };
}

// ============================================================================
// ROLE-BASED MIDDLEWARE
// ============================================================================

export interface RoleMiddlewareOptions {
  allowedRoles: string | string[];
  redirectTo?: string;
  getUserRole?: (request: NextRequest) => Promise<string | null>;
}

/**
 * Role-based access control middleware
 * Checks if user has required role(s)
 */
export function createRoleMiddleware(options: RoleMiddlewareOptions) {
  const {
    allowedRoles,
    redirectTo = '/unauthorized',
    getUserRole,
  } = options;

  const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];

  return async function roleMiddleware(request: NextRequest) {
    // Get user role (implement this based on your user service)
    let userRole: string | null = null;

    if (getUserRole) {
      userRole = await getUserRole(request);
    } else {
      // Default: try to get from headers or token
      userRole = request.headers.get('x-user-role');
    }

    // Check if user has required role
    if (!userRole || !roles.includes(userRole)) {
      const redirectUrl = new URL(redirectTo, request.url);
      return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next();
  };
}

// ============================================================================
// RATE LIMITING MIDDLEWARE
// ============================================================================

export interface RateLimitOptions {
  maxRequests?: number;
  windowMs?: number;
  keyGenerator?: (request: NextRequest) => string;
}

/**
 * Rate limiting middleware
 * Limits number of requests per IP/user within time window
 */
export function createRateLimitMiddleware(options: RateLimitOptions = {}) {
  const {
    maxRequests = 100,
    windowMs = 60000, // 1 minute
    keyGenerator,
  } = options;

  const requests = new Map<string, { count: number; resetTime: number }>();

  return async function rateLimitMiddleware(request: NextRequest) {
    // Generate key (IP address or custom)
    let key: string;

    if (keyGenerator) {
      key = keyGenerator(request);
    } else {
      key = request.ip ||
        request.headers.get('x-forwarded-for') ||
        request.headers.get('x-real-ip') ||
        'unknown';
    }

    const now = Date.now();

    // Get or create entry for this key
    let entry = requests.get(key);

    if (!entry || now > entry.resetTime) {
      entry = { count: 0, resetTime: now + windowMs };
    }

    // Check rate limit
    if (entry.count >= maxRequests) {
      return NextResponse.json(
        {
          error: 'Too many requests',
          retryAfter: Math.ceil((entry.resetTime - now) / 1000)
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((entry.resetTime - now) / 1000)),
            'X-RateLimit-Limit': String(maxRequests),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(Math.ceil(entry.resetTime / 1000)),
          }
        }
      );
    }

    // Increment count
    entry.count++;
    requests.set(key, entry);

    // Add rate limit headers
    const response = NextResponse.next();
    response.headers.set('X-RateLimit-Limit', String(maxRequests));
    response.headers.set('X-RateLimit-Remaining', String(maxRequests - entry.count));
    response.headers.set('X-RateLimit-Reset', String(Math.ceil(entry.resetTime / 1000)));

    return response;
  };
}

// ============================================================================
// CORS MIDDLEWARE
// ============================================================================

export interface CorsOptions {
  origin?: string | string[];
  methods?: string[];
  allowedHeaders?: string[];
  credentials?: boolean;
}

/**
 * CORS middleware for API routes
 */
export function createCorsMiddleware(options: CorsOptions = {}) {
  const {
    origin = '*',
    methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders = ['Content-Type', 'Authorization'],
    credentials = true,
  } = options;

  return async function corsMiddleware(request: NextRequest) {
    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': (Array.isArray(origin) ? origin[0] : origin) || '*',
          'Access-Control-Allow-Methods': methods.join(', '),
          'Access-Control-Allow-Headers': allowedHeaders.join(', '),
          'Access-Control-Allow-Credentials': credentials.toString(),
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // Add CORS headers to response
    const response = NextResponse.next();

    const requestOrigin = request.headers.get('origin') || '';
    const allowedOrigin = Array.isArray(origin)
      ? (origin.includes(requestOrigin) ? requestOrigin : origin[0])
      : origin;

    response.headers.set('Access-Control-Allow-Origin', allowedOrigin || '*');
    response.headers.set('Access-Control-Allow-Methods', methods.join(', '));
    response.headers.set('Access-Control-Allow-Headers', allowedHeaders.join(', '));

    if (credentials) {
      response.headers.set('Access-Control-Allow-Credentials', 'true');
    }

    return response;
  };
}

// ============================================================================
// MIDDLEWARE COMPOSER
// ============================================================================

/**
 * Compose multiple middleware functions
 */
export function composeMiddleware(...middlewares: Array<(request: NextRequest) => Promise<NextResponse>>) {
  return async function composedMiddleware(request: NextRequest): Promise<NextResponse> {
    const finalResponse = NextResponse.next();

    for (const middleware of middlewares) {
      const response = await middleware(request);

      // Merge cookies correctly using the Cookies API
      response.cookies.getAll().forEach(cookie => {
        finalResponse.cookies.set(cookie);
      });

      // Merge other headers
      response.headers.forEach((value, key) => {
        if (key.toLowerCase() !== 'set-cookie') {
          finalResponse.headers.set(key, value);
        }
      });

      if (response.status !== 200 && response.status !== 304) {
        return response;
      }
    }

    return finalResponse;
  };
}