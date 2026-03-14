// ── apps/skillgig/middleware.ts ──────────────────────────────────────────────

import { middlewareSSOGuard } from "@boldmind/auth";

export default middlewareSSOGuard;
export const config = { matcher: ['/post/:path*', '/book/:path*', '/escrow/:path*'] };