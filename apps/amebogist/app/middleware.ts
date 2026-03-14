// // APPS/WEB_APPS/amebogist/app/middleware.ts
// import { createAuthMiddleware, createRateLimitMiddleware, composeMiddleware } from '@boldmind/auth';

// export const middleware = composeMiddleware(
//     createAuthMiddleware({
//         publicRoutes: ['/', '/login', '/register', '/about'],
//         redirectTo: '/login',
//     }),
//     createRateLimitMiddleware({
//         maxRequests: 100,
//         windowMs: 60000,
//     })
// );

// export const config = {
//     matcher: [
//         '/((?!_next/static|_next/image|favicon.ico|api/auth/callback).*)',
//     ],
// };