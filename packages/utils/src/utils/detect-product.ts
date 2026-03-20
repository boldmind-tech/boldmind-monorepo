// packages/utils/src/utils/detect-product.ts
// ─────────────────────────────────────────────────────────────────────────────
// Resolves the current BoldMind product slug from the browser's location.
// Safe to call in SSR — returns 'boldmind-hub' when window is unavailable.
//
// Resolution order:
//   1. Exact hostname match         → amebogist.ng            → 'amebogist'
//   2. Subdomain path match         → planai.boldmind.ng/store → 'digital-storefronts'
//   3. Subdomain prefix match       → os.boldmind.ng           → 'boldmind-os'
//   4. Pathname segment match       → /educenter/...           → 'educenter'
//   5. Fallback                     →                          → 'boldmind-hub'
// ─────────────────────────────────────────────────────────────────────────────

// ─── Static maps (no runtime import of the full products array needed) ────────
// Keeping these inline makes this module free of circular-dependency risk.
// When you add a new product, add its domain / subdomain / path here too.

/** hostname → product slug */
const HOSTNAME_MAP: Record<string, string> = {
  // Live
  'boldmind.ng':          'boldmind-hub',
  'www.boldmind.ng':      'boldmind-hub',
  'amebogist.ng':         'amebogist',
  'www.amebogist.ng':     'amebogist',
  'educenter.com.ng':     'educenter',
  'www.educenter.com.ng': 'educenter',

  // Sub-apps that have their own hostname
  'os.boldmind.ng':       'boldmind-os',
  'fit.boldmind.ng':      'naija-fit',
  'tools.boldmind.ng':    'boldmind-tools', // resolved further by pathname
  'planai.boldmind.ng':   'planai-suite',   // resolved further by pathname
  'concept.boldmind.ng':  'boldmind-concepts',

  // Dev / preview
  'localhost':            'boldmind-hub',
  '127.0.0.1':            'boldmind-hub',
};

/**
 * hostname + pathname-prefix → product slug.
 * Checked BEFORE the bare hostname fallback so subdomain paths win.
 * Keys are  "hostname/path-prefix"  (no trailing slash).
 */
const HOST_PATH_MAP: Record<string, string> = {
  // planai.boldmind.ng sub-routes
  'planai.boldmind.ng/receptionist': 'ai-receptionist',
  'planai.boldmind.ng/credibility':  'credibility-hubs',
  'planai.boldmind.ng/planning':     'business-planning',
  'planai.boldmind.ng/finance':      'financial-forecasting',
  'planai.boldmind.ng/investor':     'investor-readiness',
  'planai.boldmind.ng/design':       'branding-design',
  'planai.boldmind.ng/store':        'digital-storefronts',
  'planai.boldmind.ng/marketing':    'marketing-automation',
  'planai.boldmind.ng/analytics':    'analytics-dashboard',

  // tools.boldmind.ng sub-routes
  'tools.boldmind.ng/social':        'social-factory',
  'tools.boldmind.ng/emailscraper':  'emailscraper-pro',

  // concept.boldmind.ng sub-routes
  'concept.boldmind.ng/safe':        'safe-ai',
  'concept.boldmind.ng/afrohustle':  'afrohustle-os',
  'concept.boldmind.ng/naijagig':    'naijagig-matcher',
  'concept.boldmind.ng/kolo':        'kolo-ai',
  'concept.boldmind.ng/remit':       'borderless-remit',
  'concept.boldmind.ng/receipt':     'receipt-genius',
  'concept.boldmind.ng/power':       'power-alert',
  'concept.boldmind.ng/farmgate':    'farmgate-direct',
  'concept.boldmind.ng/afrocopy':    'afrocopy-ai',
  'concept.boldmind.ng/skill2cash':  'skill2cash',
  'concept.boldmind.ng/anon':        'anontruth-mic',
};

/**
 * First pathname segment → product slug.
 * Used as last resort when running on localhost or an unknown domain
 * (e.g. a monorepo dev server serving all apps under one port).
 */
const PATH_SEGMENT_MAP: Record<string, string> = {
  'boldmind-hub':         'boldmind-hub',
  'amebogist':            'amebogist',
  'educenter':            'educenter',
  'boldmind-os':          'boldmind-os',
  'naija-fit':            'naija-fit',
  'social-factory':       'social-factory',
  'emailscraper-pro':     'emailscraper-pro',
  'ai-receptionist':      'ai-receptionist',
  'credibility-hubs':     'credibility-hubs',
  'business-planning':    'business-planning',
  'financial-forecasting':'financial-forecasting',
  'investor-readiness':   'investor-readiness',
  'branding-design':      'branding-design',
  'digital-storefronts':  'digital-storefronts',
  'marketing-automation': 'marketing-automation',
  'analytics-dashboard':  'analytics-dashboard',
  'safe-ai':              'safe-ai',
  'afrohustle-os':        'afrohustle-os',
  'naijagig-matcher':     'naijagig-matcher',
  'kolo-ai':              'kolo-ai',
  'borderless-remit':     'borderless-remit',
  'receipt-genius':       'receipt-genius',
  'power-alert':          'power-alert',
  'farmgate-direct':      'farmgate-direct',
  'afrocopy-ai':          'afrocopy-ai',
  'skill2cash':           'skill2cash',
  'anontruth-mic':        'anontruth-mic',
  // dev-server aliases
  'planai':               'planai-suite',
  'tools':                'boldmind-tools',
  'os':                   'boldmind-os',
  'fit':                  'naija-fit',
  'concept':              'boldmind-concepts',
};

const FALLBACK_SLUG = 'boldmind-hub';

// ─────────────────────────────────────────────────────────────────────────────

/**
 * Detects the current BoldMind product slug from the browser's URL.
 *
 * @returns A product slug string, always. Never throws.
 *
 * @example
 * // On https://planai.boldmind.ng/store
 * detectCurrentProduct() // → 'digital-storefronts'
 *
 * // On https://amebogist.ng/article/something
 * detectCurrentProduct() // → 'amebogist'
 *
 * // During SSR (no window)
 * detectCurrentProduct() // → 'boldmind-hub'
 */
export function detectCurrentProduct(): string {
  if (typeof window === 'undefined') return FALLBACK_SLUG;

  const { hostname, pathname } = window.location;

  // Normalise pathname — strip leading slash, lowercase
  const path      = pathname.replace(/^\//, '').toLowerCase();
  // First segment only (e.g. "store" from "/store/checkout")
  const firstSeg  = path.split('/')[0] ?? '';

  // ── 1. hostname + path-prefix (most specific) ─────────────────────────────
  // Try progressively shorter path prefixes so "/store/checkout" still matches "/store"
  const pathParts = path.split('/').filter(Boolean);
  for (let len = pathParts.length; len >= 1; len--) {
    const prefix = pathParts.slice(0, len).join('/');
    const key    = `${hostname}/${prefix}`;
    if (HOST_PATH_MAP[key]) return HOST_PATH_MAP[key]!;
  }

  // ── 2. Exact hostname ──────────────────────────────────────────────────────
  if (HOSTNAME_MAP[hostname]) return HOSTNAME_MAP[hostname]!;

  // ── 3. Subdomain prefix (e.g. "os" from "os.boldmind.ng") ─────────────────
  const subdomainMatch = hostname.match(/^([^.]+)\.boldmind\.ng$/);
  if (subdomainMatch) {
    const sub = subdomainMatch[1]!.toLowerCase();
    // Map common sub prefixes
    const subMap: Record<string, string> = {
      os:      'boldmind-os',
      fit:     'naija-fit',
      tools:   'boldmind-tools',
      planai:  'planai-suite',
      concept: 'boldmind-concepts',
    };
    if (subMap[sub]) return subMap[sub]!;
  }

  // ── 4. First pathname segment ──────────────────────────────────────────────
  if (firstSeg && PATH_SEGMENT_MAP[firstSeg]) return PATH_SEGMENT_MAP[firstSeg]!;

  // ── 5. Fallback ────────────────────────────────────────────────────────────
  return FALLBACK_SLUG;
}

// ─────────────────────────────────────────────────────────────────────────────
// Convenience helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Same as detectCurrentProduct but accepts an explicit URL string.
 * Useful in middleware, Edge functions, or unit tests.
 *
 * @example
 * detectProductFromUrl('https://planai.boldmind.ng/analytics')
 * // → 'analytics-dashboard'
 */
export function detectProductFromUrl(url: string): string {
  try {
    const { hostname, pathname } = new URL(url);
    const path     = pathname.replace(/^\//, '').toLowerCase();
    const pathParts = path.split('/').filter(Boolean);

    // host + path prefix
    for (let len = pathParts.length; len >= 1; len--) {
      const key = `${hostname}/${pathParts.slice(0, len).join('/')}`;
      if (HOST_PATH_MAP[key]) return HOST_PATH_MAP[key]!;
    }

    // exact hostname
    if (HOSTNAME_MAP[hostname]) return HOSTNAME_MAP[hostname]!;

    // subdomain prefix
    const sub = hostname.match(/^([^.]+)\.boldmind\.ng$/)?.[1]?.toLowerCase();
    if (sub) {
      const subMap: Record<string, string> = {
        os: 'boldmind-os', fit: 'naija-fit',
        tools: 'boldmind-tools', planai: 'planai-suite', concept: 'boldmind-concepts',
      };
      if (subMap[sub]) return subMap[sub]!;
    }

    // first path segment
    const firstSeg = pathParts[0] ?? '';
    if (firstSeg && PATH_SEGMENT_MAP[firstSeg]) return PATH_SEGMENT_MAP[firstSeg]!;

    return FALLBACK_SLUG;
  } catch {
    return FALLBACK_SLUG;
  }
}

/**
 * Returns true when the given slug belongs to the app running at the current URL.
 *
 * @example
 * // On https://amebogist.ng
 * isCurrentProduct('amebogist') // → true
 * isCurrentProduct('educenter') // → false
 */
export function isCurrentProduct(slug: string): boolean {
  return detectCurrentProduct() === slug;
}

/**
 * Returns true when the current URL is any BoldMind-owned domain.
 */
export function isBoldMindDomain(): boolean {
  if (typeof window === 'undefined') return false;
  const { hostname } = window.location;
  return (
    hostname.endsWith('.boldmind.ng') ||
    hostname === 'boldmind.ng'        ||
    hostname.endsWith('.amebogist.ng') ||
    hostname === 'amebogist.ng'       ||
    hostname.endsWith('.educenter.com.ng') ||
    hostname === 'educenter.com.ng'
  );
}