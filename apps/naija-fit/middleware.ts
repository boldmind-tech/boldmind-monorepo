// ── apps/naija-fit/middleware.ts ─────────────────────────────────────────────
import { middlewareSSOGuard } from "@boldmind/auth";

export default middlewareSSOGuard;
export const config = { matcher: ['/dashboard/:path*', '/workout/:path*', '/track/:path*', '/coach/:path*'] };