import { createAuthMiddleware, createRateLimitMiddleware, composeMiddleware } from '@boldmind/auth';

/**
 * emailscraper-pro Middleware
 * - Auth protection for dashboard/admin routes
 * - Rate limiting for all routes
 */
export const middleware = composeMiddleware(
    createAuthMiddleware({
        publicRoutes: [
            '/',
            '/login',
            '/register',
            '/about',
            '/contact',
            '/products',
            '/products/*',
            '/privacy',
            '/terms',
            '/forgot-password',
            '/reset-password',
            '/verify-email',
            '/api/auth/*',
        ],
        protectedRoutes: [
            '/dashboard',
            '/dashboard/*',
            '/admin',
            '/admin/*',
        ],
        redirectTo: '/login',
    }),
    createRateLimitMiddleware({
        maxRequests: 100,
        windowMs: 60000, // 1 minute
    })
);

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (images, etc.)
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
    ],
};
