// packages/utils/src/constants/domains.ts
// BOLDMIND DOMAIN ARCHITECTURE — Updated for Monorepo Sprint
// Updated: 27 Feb 2026
//
// ARCHITECTURE DECISIONS:
//  - ALL concept products → concept.boldmind.ng/[slug] (saves ₦100k+/yr in DNS/SSL costs)
//  - B2B tools consolidated → tools.boldmind.ng/[tool] (1 Vercel project instead of 2)
//  - NaijaFit renamed → fit.boldmind.ng (was fither, now gender-neutral)
//  - Amebo Studio added → studio.amebogist.ng (creator-facing app)
//  - All API → api.boldmind.ng (Railway NestJS monolith)
//  - n8n automation → n8n.boldmind.ng (Railway Service #2, internal only)

export type DomainStatus = 'LIVE' | 'BUILDING' | 'PLANNED' | 'CONCEPT';
export type DomainCategory =
  | 'hub'
  | 'media'
  | 'education'
  | 'ai'
  | 'productivity'
  | 'health'
  | 'marketplace'
  | 'fintech'
  | 'security'
  | 'utilities'
  | 'social'
  | 'infrastructure';

export interface DomainMapping {
  domain: string;
  subdomain?: string;           // path route e.g. "/receptionist"
  fullUrl: string;              // computed full URL
  productSlug: string;
  productName: string;
  status: DomainStatus;
  category: DomainCategory;
  app: string;                  // which Next.js app serves this domain
  apiEndpoint: string;          // always api.boldmind.ng
  vercelProject: string;        // which Vercel project to configure
  cloudflareProxy: boolean;     // should Cloudflare proxy this? (true = orange cloud)
  twaPackage?: string;          // Android TWA package name
}

// ─────────────────────────────────────────────
// INFRASTRUCTURE DOMAINS (non-product)
// ─────────────────────────────────────────────

export interface InfrastructureDomain {
  domain: string;
  purpose: string;
  service: string;
  cloudflareProxy: boolean;
  notes: string;
}

export const INFRASTRUCTURE_DOMAINS: InfrastructureDomain[] = [
  {
    domain: 'api.boldmind.ng',
    purpose: 'NestJS monolith REST API',
    service: 'Railway Service #1 (always-on)',
    cloudflareProxy: true,  // Proxied: protects Railway URL, adds DDoS protection
    notes: 'CNAME to [your-app].railway.app — all 10 frontend apps call this',
  },
  {
    domain: 'n8n.boldmind.ng',
    purpose: 'n8n workflow automation (internal)',
    service: 'Railway Service #2 (sleep-on-idle)',
    cloudflareProxy: false,  // DNS only: internal use, no proxy needed
    notes: 'Do NOT expose publicly. Only callable from api.boldmind.ng service-to-service',
  },
];

// ─────────────────────────────────────────────
// PRODUCT DOMAIN MAPPINGS
// ─────────────────────────────────────────────

export const DOMAIN_MAPPINGS: DomainMapping[] = [

  // ═══════════════════════════════════════════
  // SECTION 1: LIVE + BUILDING — DEDICATED APPS
  // Each has its own Next.js app on Vercel
  // ═══════════════════════════════════════════

  // ── BoldMind Hub ──────────────────────────
  {
    domain: 'boldmind.ng',
    fullUrl: 'https://boldmind.ng',
    productSlug: 'boldmind-hub',
    productName: 'BoldMind Hub',
    status: 'LIVE',
    category: 'hub',
    app: 'boldmind-hub',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'boldmind-hub',
    cloudflareProxy: true,
    twaPackage: 'ng.boldmind.hub',
  },

  // ── AmeboGist ─────────────────────────────
  {
    domain: 'amebogist.ng',
    fullUrl: 'https://amebogist.ng',
    productSlug: 'amebogist',
    productName: 'AmeboGist',
    status: 'LIVE',
    category: 'media',
    app: 'amebogist',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'amebogist',
    cloudflareProxy: true,
    twaPackage: 'ng.amebogist.app',
  },
  {
    domain: 'studio.amebogist.ng',
    fullUrl: 'https://studio.amebogist.ng',
    productSlug: 'amebo-studio',
    productName: 'Amebo Studio (Creator Dashboard)',
    status: 'BUILDING',
    category: 'media',
    app: 'amebo-studio',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'amebo-studio',
    cloudflareProxy: true,
    // No TWA — creator tool, desktop-focused
  },

  // ── EduCenter ─────────────────────────────
  {
    domain: 'educenter.com.ng',
    fullUrl: 'https://educenter.com.ng',
    productSlug: 'educenter',
    productName: 'EduCenter',
    status: 'LIVE',
    category: 'education',
    app: 'educenter',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'educenter',
    cloudflareProxy: true,
    twaPackage: 'ng.educenter.app',
  },
  {
    domain: 'skills.educenter.com.ng',
    fullUrl: 'https://skills.educenter.com.ng',
    productSlug: 'skill2cash',
    productName: 'SkillGig / Skill2Cash',
    status: 'CONCEPT',
    category: 'marketplace',
    app: 'skillgig',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'skillgig',
    cloudflareProxy: true,
    twaPackage: 'ng.educenter.skills',
    // NOTE: Skill2Cash concept pages are on concept.boldmind.ng/skill2cash
    // This domain is reserved for when it graduates to BUILDING
  },

  // ── BoldMind OS ───────────────────────────
  {
    domain: 'os.boldmind.ng',
    fullUrl: 'https://os.boldmind.ng',
    productSlug: 'boldmind-os',
    productName: 'BoldMind OS',
    status: 'BUILDING',
    category: 'productivity',
    app: 'boldmind-os',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'boldmind-os',
    cloudflareProxy: true,
    twaPackage: 'ng.boldmind.os',
  },

  // ── NaijaFit (renamed from Naija FitHer) ──
  {
    domain: 'fit.boldmind.ng',
    fullUrl: 'https://fit.boldmind.ng',
    productSlug: 'naija-fit',                   // UPDATED: was naija-fither
    productName: 'NaijaFit',                    // UPDATED: was Naija FitHer
    status: 'BUILDING',
    category: 'health',
    app: 'naija-fit',                           // UPDATED: was naija-fither
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'naija-fit',                 // UPDATED
    cloudflareProxy: true,
    twaPackage: 'ng.boldmind.fit',
  },

  {
    domain: 'tools.boldmind.ng',
    subdomain: '/',
    fullUrl: 'https://tools.boldmind.ng',
    productSlug: 'boldmind-tools-landing',
    productName: 'BoldMind Tools (Landing)',
    status: 'BUILDING',
    category: 'productivity',
    app: 'boldmind-tools',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'boldmind-tools',
    cloudflareProxy: true,
  },
  {
    domain: 'tools.boldmind.ng',
    subdomain: '/emailscraper',
    fullUrl: 'https://tools.boldmind.ng/emailscraper',
    productSlug: 'emailscraper-pro',
    productName: 'EmailScraper Pro',
    status: 'BUILDING',
    category: 'productivity',
    app: 'boldmind-tools',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'boldmind-tools',
    cloudflareProxy: true,
    twaPackage: 'ng.boldmind.tools',
  },
  {
    domain: 'tools.boldmind.ng',
    subdomain: '/social',
    fullUrl: 'https://tools.boldmind.ng/social',
    productSlug: 'social-factory',
    productName: 'Social Content Factory',
    status: 'BUILDING',
    category: 'ai',
    app: 'boldmind-tools',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'boldmind-tools',
    cloudflareProxy: true,
  },

  // ═══════════════════════════════════════════
  // SECTION 2: PLANAI SUITE (routes within planai-suite app)
  // All under planai.boldmind.ng — 1 Vercel project, N routes
  // ═══════════════════════════════════════════

  {
    domain: 'planai.boldmind.ng',
    subdomain: '/',
    fullUrl: 'https://planai.boldmind.ng',
    productSlug: 'planai-landing',
    productName: 'PlanAI Suite (Landing)',
    status: 'LIVE',
    category: 'ai',
    app: 'planai-suite',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'planai-suite',
    cloudflareProxy: true,
    twaPackage: 'ng.boldmind.planai',
  },
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/receptionist',
    fullUrl: 'https://planai.boldmind.ng/receptionist',
    productSlug: 'ai-receptionist',
    productName: 'AI Receptionist',
    status: 'LIVE',
    category: 'ai',
    app: 'planai-suite',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'planai-suite',
    cloudflareProxy: true,
  },
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/credibility',
    fullUrl: 'https://planai.boldmind.ng/credibility',
    productSlug: 'credibility-hubs',
    productName: 'Credibility Hubs',
    status: 'BUILDING',
    category: 'ai',
    app: 'planai-suite',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'planai-suite',
    cloudflareProxy: true,
  },
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/planning',
    fullUrl: 'https://planai.boldmind.ng/planning',
    productSlug: 'business-planning',
    productName: 'AI Business Planning',
    status: 'PLANNED',
    category: 'ai',
    app: 'planai-suite',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'planai-suite',
    cloudflareProxy: true,
  },
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/finance',
    fullUrl: 'https://planai.boldmind.ng/finance',
    productSlug: 'financial-forecasting',
    productName: 'Financial Forecasting',
    status: 'PLANNED',
    category: 'ai',
    app: 'planai-suite',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'planai-suite',
    cloudflareProxy: true,
  },
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/investor',
    fullUrl: 'https://planai.boldmind.ng/investor',
    productSlug: 'investor-readiness',
    productName: 'Investor Readiness Suite',
    status: 'PLANNED',
    category: 'ai',
    app: 'planai-suite',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'planai-suite',
    cloudflareProxy: true,
  },
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/design',
    fullUrl: 'https://planai.boldmind.ng/design',
    productSlug: 'branding-design',
    productName: 'Branding & Design Tools',
    status: 'BUILDING',
    category: 'ai',
    app: 'planai-suite',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'planai-suite',
    cloudflareProxy: true,
  },
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/store',
    fullUrl: 'https://planai.boldmind.ng/store',
    productSlug: 'digital-storefronts',
    productName: 'Digital Storefronts',
    status: 'BUILDING',
    category: 'marketplace',
    app: 'planai-suite',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'planai-suite',
    cloudflareProxy: true,
  },
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/marketing',
    fullUrl: 'https://planai.boldmind.ng/marketing',
    productSlug: 'marketing-automation',
    productName: 'Marketing Automation',
    status: 'BUILDING',
    category: 'ai',
    app: 'planai-suite',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'planai-suite',
    cloudflareProxy: true,
  },
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/analytics',
    fullUrl: 'https://planai.boldmind.ng/analytics',
    productSlug: 'analytics-dashboard',
    productName: 'Analytics Dashboard',
    status: 'BUILDING',
    category: 'ai',
    app: 'planai-suite',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'planai-suite',
    cloudflareProxy: true,
  },

  // ═══════════════════════════════════════════
  // SECTION 3: CONCEPT HUB
  // ALL concept products live at concept.boldmind.ng/[slug]
  // Hosted by: boldmind-concepts Next.js app
  // API: ConceptModule (waitlist only)
  // When a product graduates → gets its own domain + module
  // ═══════════════════════════════════════════

  {
    domain: 'concept.boldmind.ng',
    subdomain: '/',
    fullUrl: 'https://concept.boldmind.ng',
    productSlug: 'concept-hub-landing',
    productName: 'Concept Hub (Product Roadmap)',
    status: 'BUILDING',
    category: 'hub',
    app: 'boldmind-concepts',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'boldmind-concepts',
    cloudflareProxy: true,
    twaPackage: 'ng.boldmind.concept',
  },

  {
    domain: 'concept.boldmind.ng',
    subdomain: '/safe',
    fullUrl: 'https://concept.boldmind.ng/safe',
    productSlug: 'safe-ai',
    productName: 'SAFE AI',
    status: 'CONCEPT',
    category: 'security',
    app: 'boldmind-concepts',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'boldmind-concepts',
    cloudflareProxy: true,
    // Graduation plan: safe.boldmind.ng when government contract signed
  },
  {
    domain: 'concept.boldmind.ng',
    subdomain: '/afrohustle',
    fullUrl: 'https://concept.boldmind.ng/afrohustle',
    productSlug: 'afrohustle-os',
    productName: 'AfroHustle OS',
    status: 'CONCEPT',
    category: 'education',
    app: 'boldmind-concepts',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'boldmind-concepts',
    cloudflareProxy: true,
    // Graduation plan: hustle.boldmind.ng when content ready
  },

  // Concept: NaijaGig Matcher (was gig.educenter.com.ng)
  {
    domain: 'concept.boldmind.ng',
    subdomain: '/naijagig',
    fullUrl: 'https://concept.boldmind.ng/naijagig',
    productSlug: 'naijagig-matcher',
    productName: 'NaijaGig Matcher',
    status: 'CONCEPT',
    category: 'marketplace',
    app: 'boldmind-concepts',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'boldmind-concepts',
    cloudflareProxy: true,
    // Graduation plan: gig.boldmind.ng (moving off educenter subdomain)
  },

  // Concept: KoloAI (was kolo.boldmind.ng)
  {
    domain: 'concept.boldmind.ng',
    subdomain: '/kolo',
    fullUrl: 'https://concept.boldmind.ng/kolo',
    productSlug: 'kolo-ai',
    productName: 'KoloAI',
    status: 'CONCEPT',
    category: 'fintech',
    app: 'boldmind-concepts',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'boldmind-concepts',
    cloudflareProxy: true,
    // Graduation plan: kolo.boldmind.ng when CBN compliance done
  },

  // Concept/Building: BorderlessRemit (was border.boldmind.ng)
  {
    domain: 'concept.boldmind.ng',
    subdomain: '/remit',
    fullUrl: 'https://concept.boldmind.ng/remit',
    productSlug: 'borderless-remit',
    productName: 'BorderlessRemit Tracker',
    status: 'BUILDING',
    category: 'fintech',
    app: 'boldmind-concepts',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'boldmind-concepts',
    cloudflareProxy: true,
    // Graduation plan: remit.boldmind.ng when affiliate deals signed
  },

  // Concept/Building: ReceiptGenius (was receipt.boldmind.ng)
  {
    domain: 'concept.boldmind.ng',
    subdomain: '/receipt',
    fullUrl: 'https://concept.boldmind.ng/receipt',
    productSlug: 'receipt-genius',
    productName: 'ReceiptGenius NG',
    status: 'BUILDING',
    category: 'fintech',
    app: 'boldmind-concepts',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'boldmind-concepts',
    cloudflareProxy: true,
    // Graduation plan: receipt.boldmind.ng when FIRS compliance verified
  },

  // Concept: PowerAlert (was power.boldmind.ng)
  {
    domain: 'concept.boldmind.ng',
    subdomain: '/power',
    fullUrl: 'https://concept.boldmind.ng/power',
    productSlug: 'power-alert',
    productName: 'PowerAlert NG',
    status: 'CONCEPT',
    category: 'utilities',
    app: 'boldmind-concepts',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'boldmind-concepts',
    cloudflareProxy: true,
    // Graduation plan: power.boldmind.ng + solar partner deals
  },

  // Concept: FarmGate Direct (was farm.boldmind.ng)
  {
    domain: 'concept.boldmind.ng',
    subdomain: '/farmgate',
    fullUrl: 'https://concept.boldmind.ng/farmgate',
    productSlug: 'farmgate-direct',
    productName: 'FarmGate Direct',
    status: 'CONCEPT',
    category: 'marketplace',
    app: 'boldmind-concepts',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'boldmind-concepts',
    cloudflareProxy: true,
    // Graduation plan: farm.boldmind.ng when logistics partner secured
  },

  // Concept: AfroCopy AI (was copy.amebogist.ng)
  {
    domain: 'concept.boldmind.ng',
    subdomain: '/afrocopy',
    fullUrl: 'https://concept.boldmind.ng/afrocopy',
    productSlug: 'afrocopy-ai',
    productName: 'AfroCopy AI',
    status: 'CONCEPT',
    category: 'ai',
    app: 'boldmind-concepts',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'boldmind-concepts',
    cloudflareProxy: true,
    // Graduation plan: copy.amebogist.ng (back to original domain, now live)
  },

  // Concept: Skill2Cash (was skills.educenter.com.ng)
  {
    domain: 'concept.boldmind.ng',
    subdomain: '/skill2cash',
    fullUrl: 'https://concept.boldmind.ng/skill2cash',
    productSlug: 'skill2cash',
    productName: 'Skill2Cash Board',
    status: 'CONCEPT',
    category: 'marketplace',
    app: 'boldmind-concepts',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'boldmind-concepts',
    cloudflareProxy: true,
    // Graduation plan: skills.educenter.com.ng (reserve domain back to skillgig app)
  },

  // Concept: AnonTruth Mic (was anon.amebogist.ng)
  {
    domain: 'concept.boldmind.ng',
    subdomain: '/anon',
    fullUrl: 'https://concept.boldmind.ng/anon',
    productSlug: 'anontruth-mic',
    productName: 'AnonTruth Mic',
    status: 'CONCEPT',
    category: 'social',
    app: 'boldmind-concepts',
    apiEndpoint: 'api.boldmind.ng',
    vercelProject: 'boldmind-concepts',
    cloudflareProxy: true,
    // Graduation plan: anon.amebogist.ng (requires legal review first)
  },
];

// ─────────────────────────────────────────────
// VERCEL PROJECT MAP
// One entry per Vercel project (10 total)
// ─────────────────────────────────────────────

export interface VercelProject {
  name: string;
  domains: string[];          // all custom domains for this project
  envVars: string[];          // required env vars for this project
  status: DomainStatus;
}

export const VERCEL_PROJECTS: VercelProject[] = [
  {
    name: 'boldmind-hub',
    domains: ['boldmind.ng', 'www.boldmind.ng'],
    envVars: ['NEXT_PUBLIC_API_URL', 'NEXT_PUBLIC_APP_NAME', 'JWT_SECRET'],
    status: 'LIVE',
  },
  {
    name: 'amebogist',
    domains: ['amebogist.ng', 'www.amebogist.ng'],
    envVars: ['NEXT_PUBLIC_API_URL', 'NEXT_PUBLIC_ADSENSE_ID', 'MONGODB_URL'],
    status: 'LIVE',
  },
  {
    name: 'amebo-studio',
    domains: ['studio.amebogist.ng'],
    envVars: ['NEXT_PUBLIC_API_URL'],
    status: 'BUILDING',
  },
  {
    name: 'educenter',
    domains: ['educenter.com.ng', 'www.educenter.com.ng'],
    envVars: ['NEXT_PUBLIC_API_URL', 'NEXT_PUBLIC_PAYSTACK_KEY'],
    status: 'LIVE',
  },
  {
    name: 'skillgig',
    domains: ['skills.educenter.com.ng'],
    envVars: ['NEXT_PUBLIC_API_URL'],
    status: 'CONCEPT',
  },
  {
    name: 'planai-suite',
    domains: ['planai.boldmind.ng'],
    envVars: ['NEXT_PUBLIC_API_URL', 'NEXT_PUBLIC_PAYSTACK_KEY', 'NEXT_PUBLIC_META_PIXEL_ID'],
    status: 'LIVE',
  },
  {
    name: 'boldmind-os',
    domains: ['os.boldmind.ng'],
    envVars: ['NEXT_PUBLIC_API_URL'],
    status: 'BUILDING',
  },
  {
    name: 'boldmind-tools',
    domains: ['tools.boldmind.ng'],
    envVars: ['NEXT_PUBLIC_API_URL', 'NEXT_PUBLIC_PAYSTACK_KEY'],
    status: 'BUILDING',
  },
  {
    name: 'naija-fit',
    domains: ['fit.boldmind.ng'],
    envVars: ['NEXT_PUBLIC_API_URL', 'NEXT_PUBLIC_PAYSTACK_KEY'],
    status: 'BUILDING',
  },
  {
    name: 'boldmind-concepts',
    domains: ['concept.boldmind.ng'],
    envVars: ['NEXT_PUBLIC_API_URL'],
    status: 'BUILDING',
  },
];

// ─────────────────────────────────────────────
// CLOUDFLARE DNS RECORDS
// All 14 records to add to Cloudflare dashboard
// ─────────────────────────────────────────────

export interface CloudflareDNSRecord {
  type: 'CNAME' | 'TXT' | 'A';
  zone: string;               // which CF zone (domain) to add this to
  name: string;               // subdomain or '@' for root
  target: string;             // CNAME target or TXT value
  proxied: boolean;
  notes: string;
}

export const CLOUDFLARE_DNS_RECORDS: CloudflareDNSRecord[] = [
  // boldmind.ng zone
  { type: 'CNAME', zone: 'boldmind.ng', name: '@', target: 'cname.vercel-dns.com', proxied: true, notes: 'BoldMind Hub root domain' },
  { type: 'CNAME', zone: 'boldmind.ng', name: 'planai', target: 'cname.vercel-dns.com', proxied: true, notes: 'PlanAI Suite' },
  { type: 'CNAME', zone: 'boldmind.ng', name: 'os', target: 'cname.vercel-dns.com', proxied: true, notes: 'BoldMind OS' },
  { type: 'CNAME', zone: 'boldmind.ng', name: 'tools', target: 'cname.vercel-dns.com', proxied: true, notes: 'B2B Tools (EmailScraper + Social Factory)' },
  { type: 'CNAME', zone: 'boldmind.ng', name: 'fit', target: 'cname.vercel-dns.com', proxied: true, notes: 'NaijaFit (was fither — renamed)' },
  { type: 'CNAME', zone: 'boldmind.ng', name: 'concept', target: 'cname.vercel-dns.com', proxied: true, notes: 'Concept Hub (all 11 concept products)' },
  { type: 'CNAME', zone: 'boldmind.ng', name: 'api', target: '[railway-service].railway.app', proxied: true, notes: 'NestJS monolith — get URL from Railway dashboard' },
  { type: 'CNAME', zone: 'boldmind.ng', name: 'n8n', target: '[n8n-railway].railway.app', proxied: false, notes: 'INTERNAL ONLY — DNS only, no CF proxy' },

  // amebogist.ng zone
  { type: 'CNAME', zone: 'amebogist.ng', name: '@', target: 'cname.vercel-dns.com', proxied: true, notes: 'AmeboGist main site' },
  { type: 'CNAME', zone: 'amebogist.ng', name: 'studio', target: 'cname.vercel-dns.com', proxied: true, notes: 'Amebo Studio creator dashboard' },

  // educenter.com.ng zone
  { type: 'CNAME', zone: 'educenter.com.ng', name: '@', target: 'cname.vercel-dns.com', proxied: true, notes: 'EduCenter main site' },
  { type: 'CNAME', zone: 'educenter.com.ng', name: 'skills', target: 'cname.vercel-dns.com', proxied: true, notes: 'SkillGig (reserved for Skill2Cash graduation)' },

  // Vercel TXT verification (add one per zone after adding domains in Vercel)
  { type: 'TXT', zone: 'boldmind.ng', name: '_vercel', target: 'vc-domain-verify=[token-from-vercel]', proxied: false, notes: 'Get token from Vercel → add domain → copy TXT value' },
];

// ─────────────────────────────────────────────
// HELPER FUNCTIONS
// ─────────────────────────────────────────────

/**
 * Get domain mapping by product slug
 */
export function getDomainBySlug(productSlug: string): DomainMapping | null {
  return DOMAIN_MAPPINGS.find(m => m.productSlug === productSlug) || null;
}

/**
 * Alias for getDomainBySlug used in cross-domain navigation
 */
export const getDomainFromProduct = getDomainBySlug;

/**
 * Get all mappings for a specific app
 */
export function getDomainsByApp(app: string): DomainMapping[] {
  return DOMAIN_MAPPINGS.filter(m => m.app === app);
}

/**
 * Get all domains for a Vercel project
 * (handles multi-route apps like planai-suite)
 */
export function getDomainsByVercelProject(projectName: string): DomainMapping[] {
  return DOMAIN_MAPPINGS.filter(m => m.vercelProject === projectName);
}

/**
 * Get all concept hub products (concept.boldmind.ng routes)
 */
export function getConceptHubDomains(): DomainMapping[] {
  return DOMAIN_MAPPINGS.filter(m => m.domain === 'concept.boldmind.ng' && m.subdomain !== '/');
}


/**
 * Get product slug from domain + optional subdomain path
 */
export function getProductFromDomain(domain: string, subdomainPath?: string): string | null {
  const mapping = DOMAIN_MAPPINGS.find(m => {
    if (subdomainPath) {
      return m.domain === domain && m.subdomain === subdomainPath;
    }
    return m.domain === domain && (!m.subdomain || m.subdomain === '/');
  });
  return mapping?.productSlug || null;
}

/**
 * Get all live domains (for sitemap generation)
 */
export function getLiveDomains(): DomainMapping[] {
  return DOMAIN_MAPPINGS.filter(m => m.status === 'LIVE');
}

/**
 * Get all Cloudflare proxied domains (for security rules)
 */
export function getProxiedDomains(): DomainMapping[] {
  return DOMAIN_MAPPINGS.filter(m => m.cloudflareProxy);
}

/**
 * Get all TWA-configured products (for Bubblewrap APK generation)
 */
export function getTWAProducts(): DomainMapping[] {
  return DOMAIN_MAPPINGS.filter(m => m.twaPackage !== undefined);
}

export default DOMAIN_MAPPINGS;