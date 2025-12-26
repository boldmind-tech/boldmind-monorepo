import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { prisma } from '@boldmind/database';

// Types for middleware
interface AuthMiddlewareOptions {
  requireAuth?: boolean;
  requireRole?: string | string[];
  publicRoutes?: string[];
  apiPrefix?: string;
}

// Default options
const defaultOptions: AuthMiddlewareOptions = {
  requireAuth: true,
  requireRole: 'user',
  publicRoutes: ['/', '/login', '/register', '/forgot-password', '/reset-password'],
  apiPrefix: '/api'
};

// Auth middleware for Next.js
export async function authMiddleware(
  request: NextRequest,
  options: AuthMiddlewareOptions = {}
) {
  const mergedOptions = { ...defaultOptions, ...options };
  const { pathname } = request.nextUrl;
  
  // Check if route is public
  if (mergedOptions.publicRoutes?.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }
  
  // Check if it's an API route
  const isApiRoute = pathname.startsWith(mergedOptions.apiPrefix || '/api');
  
  try {
    // Get token from NextAuth
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET
    });
    
    // If no token and auth is required
    if (!token && mergedOptions.requireAuth) {
      if (isApiRoute) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        );
      }
      
      // Redirect to login for non-API routes
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
    
    // Check role if required
    if (token && mergedOptions.requireRole) {
      const userRole = token.role || 'user';
      const requiredRoles = Array.isArray(mergedOptions.requireRole) 
        ? mergedOptions.requireRole 
        : [mergedOptions.requireRole];
      
      if (!requiredRoles.includes(userRole)) {
        if (isApiRoute) {
          return NextResponse.json(
            { error: 'Forbidden' },
            { status: 403 }
          );
        }
        
        // Redirect to unauthorized page
        return NextResponse.redirect(new URL('/unauthorized', request.url));
      }
    }
    
    // Add user info to request headers for API routes
    if (isApiRoute && token) {
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-user-id', token.sub || '');
      requestHeaders.set('x-user-email', token.email || '');
      requestHeaders.set('x-user-role', token.role || 'user');
      
      return NextResponse.next({
        request: {
          headers: requestHeaders
        }
      });
    }
    
    return NextResponse.next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    
    if (isApiRoute) {
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
    
    // Redirect to error page for non-API routes
    return NextResponse.redirect(new URL('/error', request.url));
  }
}

// Role-based middleware
export function requireRole(roles: string | string[]) {
  return async (request: NextRequest) => {
    return authMiddleware(request, { requireRole: roles });
  };
}

// Admin middleware
export function requireAdmin(request: NextRequest) {
  return requireRole(['admin', 'super_admin'])(request);
}

// API key middleware for external services
export async function apiKeyMiddleware(request: NextRequest) {
  const apiKey = request.headers.get('x-api-key') || 
                 request.nextUrl.searchParams.get('api_key');
  
  if (!apiKey) {
    return NextResponse.json(
      { error: 'API key required' },
      { status: 401 }
    );
  }
  
  try {
    const validKey = await prisma.apiKey.findFirst({
      where: {
        key: apiKey,
        active: true,
        expiresAt: {
          gt: new Date()
        }
      }
    });
    
    if (!validKey) {
      return NextResponse.json(
        { error: 'Invalid or expired API key' },
        { status: 401 }
      );
    }
    
    // Update last used timestamp
    await prisma.apiKey.update({
      where: { id: validKey.id },
      data: { lastUsedAt: new Date() }
    });
    
    // Add API key info to headers
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-api-key-id', validKey.id);
    requestHeaders.set('x-api-key-user', validKey.userId);
    
    return NextResponse.next({
      request: {
        headers: requestHeaders
      }
    });
  } catch (error) {
    console.error('API key middleware error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Rate limiting middleware
export function rateLimitMiddleware(maxRequests: number = 100, windowMs: number = 60000) {
  const requests = new Map<string, { count: number; resetTime: number }>();
  
  return async (request: NextRequest) => {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    
    // Clean up old entries
    for (const [key, value] of requests.entries()) {
      if (now > value.resetTime) {
        requests.delete(key);
      }
    }
    
    // Get or create entry for this IP
    const entry = requests.get(ip) || { count: 0, resetTime: now + windowMs };
    
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
            'Retry-After': String(Math.ceil((entry.resetTime - now) / 1000))
          }
        }
      );
    }
    
    // Increment count
    entry.count++;
    requests.set(ip, entry);
    
    // Add rate limit headers
    const response = NextResponse.next();
    response.headers.set('X-RateLimit-Limit', String(maxRequests));
    response.headers.set('X-RateLimit-Remaining', String(maxRequests - entry.count));
    response.headers.set('X-RateLimit-Reset', String(Math.ceil(entry.resetTime / 1000)));
    
    return response;
  };
}