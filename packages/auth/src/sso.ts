// ─────────────────────────────────────────────────────────────────────────────
// packages/auth/src/sso.ts
// ─────────────────────────────────────────────────────────────────────────────
//
// HOW THE TWO SSO FILES FIT TOGETHER:
//
//  BACKEND  → service/src/modules/auth/sso.service.ts
//    Sets `boldmind_sso` as httpOnly cookie via Express Response.
//    httpOnly=true means JavaScript CANNOT read it — XSS protected.
//    The cookie lives on .boldmind.ng domain in prod / localhost in dev.
//    This is the ONLY place the token is stored — no localStorage copy.
//
//  FRONTEND → packages/auth/src/sso.ts  (THIS FILE)
//    Does NOT try to read or write the httpOnly cookie.
//    Its only jobs:
//      1. Build the hub login URL with ?return_url= param
//      2. Redirect the user there when client-side navigation hits auth wall
//      3. Validate redirect URLs to prevent open-redirect attacks
//
//  MIDDLEWARE → packages/auth/src/middleware.ts
//    Runs on the Edge (server-side) — CAN read httpOnly cookies.
//    Reads `boldmind_sso` from request.cookies.
//    If missing → redirects to hub login. If present → allows through.
//
// FULL SSO FLOW:
//   1. User visits educenter.com.ng/dashboard
//   2. Edge middleware: no `boldmind_sso` → redirect to boldmind.ng/login?return_url=...
//   3. Hub shows login form. User submits credentials.
//   4. NestJS: validates → ssoService.setSsoCookie(res, token)
//      → Sets boldmind_sso httpOnly cookie on .boldmind.ng domain
//   5. Hub redirects to return_url (no token in URL — cookie travels with browser)
//   6. educenter middleware: reads boldmind_sso → found → allow through
//   7. AppLayout AuthProvider: calls /auth/me (cookie auto-attached) → user loaded
// ─────────────────────────────────────────────────────────────────────────────

// Must match service/src/modules/auth/sso.service.ts SSO_COOKIE_NAME
export const SSO_COOKIE_NAME = 'boldmind_sso';

const HUB_URL =
  process.env['NEXT_PUBLIC_HUB_URL'] ||
  (process.env.NODE_ENV === 'production'
    ? 'https://boldmind.ng'
    : 'http://localhost:3000s');

const SAFE_DOMAINS = [
  'boldmind.ng',
  'amebogist.ng',
  'educenter.com.ng',
  'localhost',
  '127.0.0.0',
];

// ─── URL builders ─────────────────────────────────────────────────────────────

export function buildHubLoginUrl(returnUrl: string): string {
  const url = new URL(`${HUB_URL}/login`);
  url.searchParams.set('return_url', returnUrl);
  return url.toString();
}

export function buildHubRegisterUrl(returnUrl?: string): string {
  const url = new URL(`${HUB_URL}/register`);
  if (returnUrl) url.searchParams.set('return_url', returnUrl);
  return url.toString();
}

// ─── Client-side redirect ─────────────────────────────────────────────────────

export function redirectToHubLogin(returnUrl?: string): void {
  if (typeof window === 'undefined') return;
  window.location.href = buildHubLoginUrl(returnUrl ?? window.location.href);
}

// ─── URL safety ───────────────────────────────────────────────────────────────

export function isSafeBoldMindUrl(url: string): boolean {
  try {
    const { hostname } = new URL(url);
    return SAFE_DOMAINS.some((d) => hostname === d || hostname.endsWith(`.${d}`));
  } catch {
    return false;
  }
}

export function safeRedirectUrl(url: string | null | undefined, fallback = '/dashboard'): string {
  if (!url) return fallback;
  if (url.startsWith('/')) return url;
  return isSafeBoldMindUrl(url) ? url : fallback;
}

export function getAppNameFromReturnUrl(url: string): string {
  try {
    const { hostname } = new URL(url);
    if (hostname.includes('amebogist')) return 'AmeboGist';
    if (hostname.includes('educenter')) return 'EduCenter';
    if (hostname.includes('planai'))    return 'PlanAI Suite';
    if (hostname.includes('fit'))       return 'NaijaFit';
    if (hostname.includes('os.'))       return 'BoldMind OS';
    if (hostname.includes('studio'))    return 'Amebo Studio';
    if (hostname.includes('tools'))     return 'BoldMind Tools';
    if (hostname.includes('skills'))    return 'SkillGig';
    return 'BoldMind';
  } catch {
    return 'BoldMind';
  }
}