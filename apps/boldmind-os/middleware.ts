// ── apps/boldmind-os/middleware.ts (entire OS is auth-gated) ────────────────
import { middlewareSSOGuard } from "@boldmind/auth";

export default middlewareSSOGuard;
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|$).*)'],
};