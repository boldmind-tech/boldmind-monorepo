import { NextRequest, NextResponse } from 'next/server';

// Simple middleware without prisma dependency
export async function authMiddleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Public routes that don't require authentication
  const publicRoutes = ['/', '/login', '/register', '/forgot-password', '/reset-password'];
  
  // Check if route is public
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }
  
  // Check for auth token in headers or cookies
  const token = request.headers.get('Authorization')?.replace('Bearer ', '') ||
               request.cookies.get('auth-token')?.value;
  
  // If no token, redirect to login
  if (!token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }
  
  // You can add token validation here
  // For now, just pass through
  return NextResponse.next();
}

// Role-based middleware (simplified)
export function requireRole(_roles: string | string[]) {
  return async (_request: NextRequest) => {
    // For now, just pass through
    // Implement role checking when you have user data
    return NextResponse.next();
  };
}

// Rate limiting middleware
export function rateLimitMiddleware(maxRequests: number = 100, windowMs: number = 60000) {
  const requests = new Map<string, { count: number; resetTime: number }>();
  
  return async (request: NextRequest) => {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    
    // Get or create entry for this IP
    let entry = requests.get(ip);
    
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