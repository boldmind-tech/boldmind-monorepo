
// ── apps/educenter/middleware.ts ─────────────────────────────────────────────
import { middlewareSSOGuard } from "@boldmind/auth";

export default middlewareSSOGuard;
export const config = { matcher: ['/dashboard/:path*', '/cbt/:path*', '/profile/:path*'] };