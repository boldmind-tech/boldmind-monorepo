// ── apps/amebo-studio/middleware.ts (entire studio is auth-gated) ────────────
import { middlewareSSOGuard } from "@boldmind/auth";

export default middlewareSSOGuard;
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|logo|og-image).*)'],
};
