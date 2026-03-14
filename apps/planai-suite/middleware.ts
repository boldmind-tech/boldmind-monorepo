// ── apps/planai-suite/middleware.ts ─────────────────────────────────────────
import { middlewareSSOGuard } from "@boldmind/auth";

export default middlewareSSOGuard;
export const config = { matcher: ['/(tools)/:path*', '/dashboard/:path*'] };