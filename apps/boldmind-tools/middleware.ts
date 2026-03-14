// ── apps/boldmind-tools/middleware.ts ───────────────────────────────────────
import { middlewareSSOGuard } from "@boldmind/auth";

export default middlewareSSOGuard;
export const config = { matcher: ['/emailscraper/results/:path*', '/social/accounts/:path*'] }