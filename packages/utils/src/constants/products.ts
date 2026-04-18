// packages/utils/src/constants/products.ts
// ═══════════════════════════════════════════════════════════════════════════════
// BoldMind Ecosystem Product Catalog — v2.0
// Restructured: 4 domains, 4 pillars, clear flywheel ownership.
// ═══════════════════════════════════════════════════════════════════════════════

export type ProductStatus = 'LIVE' | 'BUILDING' | 'PLANNED' | 'CONCEPT';

export type ProductCategory =
  | 'media'
  | 'education'
  | 'ai'
  | 'productivity'
  | 'security'
  | 'health'
  | 'marketplace'
  | 'fintech'
  | 'utilities'
  | 'social'
  | 'community';

export type DatabaseType = 'postgres' | 'mongodb';

/**
 * The four pillars of the BoldMind flywheel.
 * Every product belongs to exactly one pillar — this is the organising principle.
 *
 *   awareness  → amebogist.ng       (stranger → reader)
 *   conviction → villagecircle.ng   (reader → believer + concept incubator)
 *   education  → educenter.com.ng   (believer → student)
 *   enablement → boldmind.ng        (student → builder)
 */
export type EcosystemPillar = 'awareness' | 'conviction' | 'education' | 'enablement';

/**
 * The four core domains. Products either live at a domain root, on a subdomain
 * (only if scale potential justifies it), or on a route path.
 */
export type CoreDomain =
  | 'boldmind.ng'
  | 'amebogist.ng'
  | 'educenter.com.ng'
  | 'villagecircle.ng';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  status: ProductStatus;
  pillar: EcosystemPillar;             // NEW — which flywheel stage
  version: string;
  slug: string;
  icon: string;
  domain: CoreDomain;                  // NOW typed — must be one of 4 core domains
  subdomain?: string;                  // e.g. "planai" → planai.boldmind.ng
  routePath?: string;                  // e.g. "/kolo" → villagecircle.ng/kolo
  revenueModel: string;
  monthlyRevenue?: number;
  users?: string | number;
  app: string;
  techStack: string[];
  serviceModule: string;
  database: DatabaseType;
  teamSize?: number;
  timeline?: string;
  priority: number;
  /** If a concept graduates, this is where it will move to. */
  graduationTarget?: {
    domain: CoreDomain;
    subdomain?: string;
    pillar: EcosystemPillar;
  };
  twa?: {
    packageName: string;
    themeColor: string;
    backgroundColor: string;
  };
  suggestedFeatures?: string[];
  dependencies?: string[];
  integrations?: string[];
  tags: string[];
  links?: {
    website?: string;
    github?: string;
    demo?: string;
    figma?: string;
  };
  features: string[];
  challenges?: string[];
  opportunities?: string[];
  createdAt: string;
  updatedAt: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// DERIVED TYPES
// ─────────────────────────────────────────────────────────────────────────────

export interface ProductCard {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  category: ProductCategory;
  status: ProductStatus;
  pillar: EcosystemPillar;
  domain: CoreDomain;
  monthlyRevenue: number;
  priority: number;
  tags: string[];
}

export interface ProductPair {
  a: Product;
  b: Product;
  reason: string;
}

export interface BuildPlan {
  wave: number;
  products: Product[];
  estimatedCost: number;
  estimatedMonthlyRevenue: number;
  durationWeeks: number;
  dependencies: string[];
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface ProductHealthScore {
  productId: string;
  productName: string;
  overall: number;
  breakdown: {
    revenueScore: number;
    userScore: number;
    teamScore: number;
    techScore: number;
    priorityScore: number;
  };
  rating: 'excellent' | 'good' | 'fair' | 'needs-attention';
  recommendations: string[];
}

export interface CompetitorGap {
  category: ProductCategory;
  boldmindCount: number;
  estimatedMarketSize: string;
  missingFeatureAreas: string[];
  opportunityScore: number;
}

export interface ProductStatusSummary {
  total: number;
  live: number;
  building: number;
  planned: number;
  concept: number;
  revenue: number;
  teamSize: number;
  upcomingReleases: number;
}

export interface CategorySummary {
  category: string;
  count: number;
  live: number;
  building: number;
  planned: number;
  concept: number;
  revenue: number;
}

export interface PillarSummary {
  pillar: EcosystemPillar;
  domain: CoreDomain;
  label: string;
  jobInFlywheel: string;
  count: number;
  live: number;
  building: number;
  planned: number;
  concept: number;
  revenue: number;
}

// ═══════════════════════════════════════════════════════════════════════════════
// PILLAR METADATA
// ═══════════════════════════════════════════════════════════════════════════════

export const PILLAR_METADATA: Record<EcosystemPillar, {
  domain: CoreDomain;
  label: string;
  jobInFlywheel: string;
  audienceState: string;
  emoji: string;
  primaryColor: string;
}> = {
  awareness: {
    domain: 'amebogist.ng',
    label: 'Awareness',
    jobInFlywheel: 'Turns strangers into readers through Pidgin media and viral content',
    audienceState: 'stranger → reader',
    emoji: '📰',
    primaryColor: '#065F46',
  },
  conviction: {
    domain: 'villagecircle.ng',
    label: 'Conviction',
    jobInFlywheel: 'Turns readers into believers through story-driven philosophy; incubates concepts',
    audienceState: 'reader → believer',
    emoji: '🌱',
    primaryColor: '#C9922A',
  },
  education: {
    domain: 'educenter.com.ng',
    label: 'Education',
    jobInFlywheel: 'Turns believers into students through structured learning',
    audienceState: 'believer → student',
    emoji: '🎓',
    primaryColor: '#1E40AF',
  },
  enablement: {
    domain: 'boldmind.ng',
    label: 'Enablement',
    jobInFlywheel: 'Turns students into builders through AI tools and community',
    audienceState: 'student → builder',
    emoji: '🚀',
    primaryColor: '#00143C',
  },
};

export const PRODUCT_CATEGORIES = [
  { id: 'media', name: 'Media & Content', count: 2 },
  { id: 'education', name: 'Education', count: 3 },
  { id: 'ai', name: 'AI Automation', count: 13 },
  { id: 'productivity', name: 'Productivity', count: 5 },
  { id: 'community', name: 'Community', count: 2 },
  { id: 'security', name: 'Security', count: 2 },
  { id: 'health', name: 'Health & Wellness', count: 2 },
  { id: 'marketplace', name: 'Marketplaces', count: 6 },
  { id: 'fintech', name: 'Fintech', count: 5 },
  { id: 'utilities', name: 'Utilities', count: 2 },
  { id: 'social', name: 'Social', count: 2 },
];


// ═══════════════════════════════════════════════════════════════════════════════
// PRODUCT CATALOG
// ═══════════════════════════════════════════════════════════════════════════════

export const BOLDMIND_PRODUCTS: Product[] = [

  // ═══════════════════════════════════════════════════════════════════════════
  // PILLAR 1: ENABLEMENT — boldmind.ng (student → builder)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'prod_000',
    name: 'BoldMind',
    description: 'Community + tool house for Nigerian digital builders — unified auth, founder community, tool suite gateway, and builder dashboard. The enablement pillar of the ecosystem.',
    category: 'community',
    status: 'LIVE',
    pillar: 'enablement',
    version: '2.0.0',
    slug: 'boldmind',
    domain: 'boldmind.ng',
    app: 'boldmind-web',
    serviceModule: 'AdminModule',
    icon: '🚀',
    revenueModel: 'Gateway to paid tools + community membership (₦2k/month pro tier)',
    database: 'postgres',
    monthlyRevenue: 0,
    users: '100+',
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Prisma'],
    teamSize: 1,
    timeline: 'Relaunched Q2 2026 as enablement pillar',
    priority: 0,
    tags: ['community', 'hub', 'tools-gateway', 'sso', 'builders'],
    links: { website: 'https://boldmind.ng' },
    twa: {
      packageName: 'ng.boldmind.hub',
      themeColor: '#00143C',
      backgroundColor: '#FAFAF9',
    },
    features: [
      'SSO — single login across all BoldMind tools',
      'Builder community feed (founder stories, wins, asks)',
      'Tool suite gateway (PlanAI, Tools, OS, Fit)',
      'Personal builder dashboard (all your tools in one view)',
      'Verified business directory',
      'Founder circles & private groups',
      'Role-based access',
      'Cross-product subscription management',
      'Admin command center (stats, user mgmt, revenue)',
      'Business spotlight & featured listings',
    ],
    suggestedFeatures: [
      'BoldMind Wallet — unified balance across all tools',
      'Affiliate hub — track referral revenue across every tool',
      'Cross-product AI assistant — "Ask BoldMind" knows your stack',
      'Founder leaderboard (revenue generated via ecosystem)',
      'API marketplace — sell BoldMind APIs to third parties',
      'Investor pitch deck auto-generator from your tool stats',
      'Open Graph preview cards per founder',
      'BoldMind Academy hand-off to EduCenter for deep learning',
      'VillageCircle cross-post integration — share builder stories',
    ],
    challenges: ['Keeping community feel as scale grows', 'SSO consistency across 4 domains'],
    opportunities: ['Ecosystem network effects', 'Investment showcase', 'Cross-sell between tools'],
    createdAt: '2025-01-01',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_003',
    name: 'AI Receptionist',
    description: 'Multi-tenant AI that handles Instagram DMs, WhatsApp, and Facebook messages for Nigerian businesses — auto-qualifies leads, books appointments, answers FAQs 24/7.',
    category: 'ai',
    status: 'LIVE',
    pillar: 'enablement',
    version: '1.0.0',
    slug: 'ai-receptionist',
    domain: 'boldmind.ng',
    subdomain: 'planai',
    routePath: '/receptionist',
    app: 'planai-suite',
    serviceModule: 'PlanAIModule',
    icon: '🤖',
    database: 'postgres',
    revenueModel: 'Monthly retainer (₦20k-₦50k/client) + Setup fee (₦10k)',
    monthlyRevenue: 20000,
    users: '1',
    techStack: ['Next.js 15', 'NestJS', 'Meta Graph API', 'Webhooks', 'OpenAI'],
    teamSize: 1,
    timeline: 'Deployed Q4 2025',
    priority: 3,
    dependencies: ['planai-suite'],
    integrations: ['Meta API', 'WhatsApp Business API', 'Instagram Graph API', 'Facebook Pages'],
    tags: ['ai', 'automation', 'customer-service', 'whatsapp', 'instagram'],
    links: { website: 'https://planai.boldmind.ng/receptionist' },
    features: [
      'Auto-reply Instagram DMs & Comments',
      'WhatsApp Business 24/7 responses',
      'Facebook Page message handling and comment moderation',
      'WhatsApp Business API integration for Nigerian phone numbers',
      'Lead qualification & scoring',
      'Appointment booking (Google Calendar sync)',
      'FAQ knowledge base (per client)',
      'Multi-tenant (1 system, N clients)',
      'Client analytics dashboard',
      'Handoff to human (escalation triggers)',
      'Nigerian business context training',
    ],
    suggestedFeatures: [
      'Voice note replies (AI generates WhatsApp voice notes)',
      'Payment collection via WhatsApp (Paystack link injection)',
      'Google My Business integration for restaurant bookings',
      'Multilingual: English + Pidgin + Yoruba + Igbo + Hausa',
      'CRM export (HubSpot, Google Sheets)',
      'AI sentiment analysis — alert owner when customer is angry',
      'Broadcast campaigns — send promotions to all past leads',
      'Abandoned cart recovery — AI follows up after 30 minutes',
      'AI voice call answering — inbound phone calls via Twilio',
      'Product catalog bot — AI shows product photos + prices inline',
      'Upsell engine — AI recommends add-ons based on inquiry context',
      'Competitor mention trigger — counter-script when customer mentions rival',
    ],
    challenges: ['Meta API policy changes', 'Client onboarding complexity'],
    opportunities: ['Expand to 50+ clients', 'Enterprise tier', 'White-label reseller program'],
    createdAt: '2025-10-15',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_004',
    name: 'Social Content Factory',
    description: 'AI-powered content calendar, caption generator, and multi-platform scheduler. Powers VillageCircle story videos and customer content for Instagram, TikTok, Facebook, Twitter/X, LinkedIn.',
    category: 'ai',
    status: 'BUILDING',
    pillar: 'enablement',
    version: '0.5.0',
    slug: 'social-factory',
    domain: 'boldmind.ng',
    subdomain: 'tools',
    routePath: '/social',
    app: 'boldmind-tools',
    serviceModule: 'AutomationModule',
    icon: '🎬',
    database: 'mongodb',
    revenueModel: 'Subscription: ₦5k/month (Starter) | ₦10k (Pro) | ₦25k (Agency)',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'n8n', 'OpenAI', 'fal.ai', 'Meta API', 'BullMQ'],
    teamSize: 2,
    timeline: 'Q2 2026 (12 weeks)',
    priority: 4,
    integrations: ['YouTube', 'Instagram', 'Facebook', 'Twitter/X', 'TikTok', 'LinkedIn'],
    tags: ['content', 'social-media', 'automation', 'scheduling', 'ai'],
    links: { website: 'https://tools.boldmind.ng/social' },
    features: [
      'AI Video generator',
      'AI caption generator (brand voice trained)',
      'Content calendar drag-and-drop',
      'Auto-schedule to 6 platforms',
      'AI image generation for posts (fal.ai)',
      'n8n workflow automation backend',
      'Best time to post (per platform)',
      'Hashtag research & optimization',
      'Analytics aggregation (all platforms in 1 dashboard)',
      'Bulk content creation (30 posts in one session)',
      'VillageCircle story → video pipeline (auto-generate concept videos)',
      'Per-pillar branding (AmeboGist / VillageCircle / EduCenter / BoldMind watermarks)',
    ],
    suggestedFeatures: [
      'Nigerian trending topics feed — auto-suggest content based on local virality',
      'Pidgin caption mode — one-click convert English to Pidgin',
      'Reels/TikTok video script generator with on-screen text overlay',
      'Competitor analysis — track competitor posting patterns',
      'White-label — agencies resell under their own brand',
      'Content repurpose AI — turn one blog post into 10 social posts',
      'source_concept tagging — trace every video back to its VillageCircle story',
    ],
    challenges: ['API rate limits per platform', 'Quality control for AI output'],
    opportunities: ['Nigerian creator market', 'Agency white-label', 'Internal VillageCircle engine'],
    createdAt: '2025-11-01',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_005',
    name: 'BoldMind OS',
    description: 'Personal operating system for neurodivergent Nigerian entrepreneurs — ADHD-friendly task management, Pomodoro, voice capture, knowledge graph, and Dyslexia Mode.',
    category: 'productivity',
    status: 'BUILDING',
    pillar: 'enablement',
    version: '0.1.0',
    slug: 'boldmind-os',
    domain: 'boldmind.ng',
    subdomain: 'os',
    app: 'boldmind-os',
    serviceModule: 'UserModule',
    icon: '🧠',
    database: 'postgres',
    revenueModel: 'Freemium: Free | ₦5k/month (Pro) | ₦15k/month (Teams)',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'NestJS', 'Prisma', 'OpenAI Whisper', 'Railway JWT'],
    teamSize: 3,
    timeline: 'Q2 2026 MVP',
    priority: 5,
    integrations: ['n8n', 'OpenAI Whisper', 'Resend Email'],
    tags: ['productivity', 'adhd', 'dyslexia', 'ai', 'neurodivergent'],
    links: { website: 'https://os.boldmind.ng' },
    twa: {
      packageName: 'ng.boldmind.os',
      themeColor: '#9F1239',
      backgroundColor: '#FFF7ED',
    },
    features: [
      'ADHD-friendly Pomodoro timer (visual ring progress)',
      'One-task focus mode (hides everything else)',
      'Voice note capture → AI transcription (Whisper)',
      'Visual knowledge graph (mind map of all notes)',
      'Daily priority stack (max 3 tasks shown)',
      'Dopamine checkboxes (satisfying micro-animations)',
      'Dyslexia Mode (OpenDyslexic font, wider spacing)',
      'Content pipeline (capture → draft → publish)',
      'Weekly brain dump → AI organizes into tasks',
      'Offline-first PWA',
    ],
    suggestedFeatures: [
      'Body doubling rooms — virtual co-working for ADHD users',
      'AI "accountability partner" — daily WhatsApp check-ins',
      'Time blindness alerts — vibrate/notify every 30 min during tasks',
      'Therapist dashboard — share progress with occupational therapist',
      'Impulse buy blocker — "sleep on it" reminder for spending decisions',
      'Energy tracker — log high/low energy times to schedule deep work',
      'Integration with NaijaFit — fitness affects cognitive performance',
    ],
    challenges: ['Complex UI/UX (must be simple despite deep features)', 'Nigerian ADHD awareness'],
    opportunities: ['Nigerian therapist partnerships', 'Remote work productivity niche'],
    createdAt: '2025-12-01',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_006',
    name: 'NaijaFit',
    description: 'Nigerian fitness and wellness platform — workout plans (gym & outdoor), Nigerian meal tracking (jollof, egusi, suya calories), AI coach, and community challenges.',
    category: 'health',
    status: 'BUILDING',
    pillar: 'enablement',
    version: '0.1.0',
    slug: 'naija-fit',
    domain: 'boldmind.ng',
    subdomain: 'fit',
    app: 'naija-fit',
    serviceModule: 'FitnessModule',
    icon: '💪',
    database: 'postgres',
    revenueModel: 'Freemium: Free | ₦3k/month (Pro) | ₦8k/month (Coaching)',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'NestJS', 'Prisma', 'OpenAI', 'PWA'],
    teamSize: 4,
    timeline: 'Q2 2026 MVP',
    priority: 6,
    integrations: ['WhatsApp Communities', 'Paystack'],
    tags: ['health', 'fitness', 'nigeria', 'wellness', 'nutrition'],
    links: { website: 'https://fit.boldmind.ng' },
    twa: {
      packageName: 'ng.boldmind.fit',
      themeColor: '#065F46',
      backgroundColor: '#F0FFF4',
    },
    features: [
      'Nigerian meal database (500+ dishes with calories)',
      'Home & outdoor workout plans (no gym required)',
      'AI wellness coach (personalized daily plans)',
      'Body measurement tracker (waist, weight, BMI)',
      'Community challenges (30-day Naija fit challenge)',
      'Progress photos with side-by-side comparison',
      'Meal plan generator (budget-aware: ₦500-₦2k/day)',
      'Workout videos (Nigerian trainers)',
      'WhatsApp accountability group integration',
      'Leaderboard (challenge rankings)',
    ],
    suggestedFeatures: [
      'Corporate wellness — sell to companies for employee fitness programs',
      'Suya & pepper soup macro calculator (very Nigerian, goes viral)',
      'AI personal trainer video analysis (form correction via phone camera)',
      'Trainer marketplace — certified Nigerian trainers offer 1:1 sessions',
      'Period tracking integration for female-specific workout adjustments',
      'Ramadan fitness mode — workout plans adapted for fasting schedule',
    ],
    challenges: ['Nigerian nutrition database accuracy', 'User retention post-30-days'],
    opportunities: ['Corporate wellness B2B', 'Instagram fitness creator partnerships'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_007',
    name: 'EmailScraper Pro',
    description: 'Nigerian B2B email discovery — find verified contact emails from LinkedIn profiles, business directories, and company websites. Bulk export, API access.',
    category: 'productivity',
    status: 'BUILDING',
    pillar: 'enablement',
    version: '0.1.0',
    slug: 'emailscraper-pro',
    domain: 'boldmind.ng',
    subdomain: 'tools',
    routePath: '/emailscraper',
    app: 'boldmind-tools',
    serviceModule: 'PlanAIModule',
    icon: '🔍',
    database: 'mongodb',
    revenueModel: 'Tiered: Free (50 leads) | ₦5k (500/mo) | ₦15k (2000/mo) | ₦50k (API)',
    monthlyRevenue: 0,
    techStack: ['NestJS', 'MongoDB', 'Puppeteer', 'Hunter.io', 'BullMQ'],
    teamSize: 2,
    timeline: 'Q2 2026',
    priority: 7,
    integrations: ['LinkedIn', 'Hunter.io', 'CAC Nigeria Business Registry'],
    tags: ['lead-gen', 'sales', 'email', 'b2b', 'nigeria'],
    links: { website: 'https://tools.boldmind.ng/emailscraper' },
    features: [
      'Email discovery from LinkedIn profiles',
      'Nigerian business directory scraping (CAC, VConnect, ConnectNigeria)',
      'Real-time email verification (MX record + SMTP check)',
      'Lead enrichment (company, role, phone)',
      'Bulk CSV import & export',
      'Saved lead lists & folders',
      'API access (for developers)',
      'CRM-ready export (HubSpot, Google Sheets format)',
    ],
    suggestedFeatures: [
      'Nigeria-specific verticals: lawyers, doctors, real estate agents',
      'WhatsApp number finder (complementary to email)',
      'Outreach sequence builder (send emails directly from tool)',
      'Duplicate detection across all your lists',
      'Intent signals — scrape companies that recently raised funding or posted jobs',
      'Chrome extension — one-click save while browsing LinkedIn',
    ],
    challenges: ['Privacy regulation compliance', 'LinkedIn rate limiting'],
    opportunities: ['Sales team subscriptions', 'Recruitment agencies'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_008',
    name: 'Professional Credibility Hubs',
    description: 'AI-assisted personal branding — instant portfolio site, LinkedIn profile optimizer, and resume generator designed for Nigerian professionals.',
    category: 'ai',
    status: 'BUILDING',
    pillar: 'enablement',
    version: '0.1.0',
    slug: 'credibility-hubs',
    domain: 'boldmind.ng',
    subdomain: 'planai',
    routePath: '/credibility',
    app: 'planai-suite',
    serviceModule: 'PlanAIModule',
    icon: '💼',
    database: 'postgres',
    revenueModel: 'One-time ₦5k (Starter) | ₦15k (Pro with custom domain)',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'OpenAI GPT-4o', 'Tailwind CSS', 'Cloudflare R2'],
    teamSize: 1,
    timeline: 'Q2 2026',
    priority: 8,
    dependencies: ['planai-suite'],
    integrations: ['LinkedIn API', 'Cloudflare R2'],
    tags: ['portfolio', 'branding', 'resume', 'linkedin', 'career'],
    links: { website: 'https://planai.boldmind.ng/credibility' },
    features: [
      'Portfolio builder (drag & drop, 10+ templates)',
      'LinkedIn headline & summary optimizer (AI)',
      'Resume generator (ATS-friendly PDF)',
      'AI personal branding coach (feedback on your positioning)',
      'Custom domain support (e.g. name.ng)',
      'Social proof section (testimonials, metrics)',
    ],
    suggestedFeatures: [
      'Nigerian recruiter database — share your profile directly',
      'Cold outreach email generator (personalized per company)',
      'Salary benchmarking tool (Nigerian market rates)',
      'Skills gap analyzer — "to get this role, you need X"',
    ],
    challenges: ['Nigerian market skepticism around personal branding', 'Template diversity'],
    opportunities: ['University final-year students (huge TAM)', 'Recruiter partnerships'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_009',
    name: 'AI Business Planning',
    description: 'Generate bank-ready Nigerian business plans, pitch decks, and market analysis using AI — in under 10 minutes.',
    category: 'ai',
    status: 'PLANNED',
    pillar: 'enablement',
    version: '0.0.1',
    slug: 'business-planning',
    domain: 'boldmind.ng',
    subdomain: 'planai',
    routePath: '/planning',
    app: 'planai-suite',
    serviceModule: 'PlanAIModule',
    icon: '📊',
    database: 'postgres',
    revenueModel: 'Per plan: ₦10k | Bundle: ₦25k (plan + pitch + financial)',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'OpenAI GPT-4o', 'Chart.js', 'PDF generation'],
    teamSize: 2,
    timeline: 'Q2 2026',
    priority: 9,
    dependencies: ['planai-suite'],
    integrations: ['CBN data APIs', 'NBS (National Bureau of Statistics) data'],
    tags: ['business', 'planning', 'startups', 'nigeria', 'ai'],
    links: { website: 'https://planai.boldmind.ng/planning' },
    features: [
      'AI business plan generator (Nigerian market context)',
      'Pitch deck creator (10-slide template)',
      'Nigerian market size & competitor analysis',
      'Financial projections (3-year model)',
      'SWOT analysis auto-generation',
      'Export to PDF & DOCX (bank/investor ready)',
    ],
    suggestedFeatures: [
      'Nigerian bank loan template compatibility',
      'SON/NAFDAC regulatory checklist per industry',
      'Investor match — connect plan to Nigerian VCs/angels',
      'Update-as-you-grow (re-generate plan with new data)',
    ],
    challenges: ['Nigerian market data accuracy', 'Keeping AI output legally compliant'],
    opportunities: ['Bank loan requirement pipeline', 'Government grant applications'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_010',
    name: 'Financial Forecasting',
    description: 'AI cashflow modeling and revenue forecasting for Nigerian SMEs — visualize your next 12 months, run scenarios, detect financial risks early.',
    category: 'ai',
    status: 'PLANNED',
    pillar: 'enablement',
    version: '0.0.1',
    slug: 'financial-forecasting',
    domain: 'boldmind.ng',
    subdomain: 'planai',
    routePath: '/finance',
    app: 'planai-suite',
    serviceModule: 'PlanAIModule',
    icon: '💰',
    database: 'postgres',
    revenueModel: 'Subscription: ₦8k/month | ₦20k/quarter',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'OpenAI', 'Chart.js', 'Recharts'],
    teamSize: 2,
    timeline: 'Q3 2026',
    priority: 10,
    dependencies: ['planai-suite'],
    integrations: ['Paystack analytics', 'CBN exchange rate API'],
    tags: ['finance', 'forecasting', 'cashflow', 'sme', 'nigeria'],
    links: { website: 'https://planai.boldmind.ng/finance' },
    features: [
      'Cashflow projections (12-month visual)',
      'Revenue forecasting with AI',
      'Break-even analysis',
      'Scenario planning (best/worst/base case)',
      'Naira/Dollar FX impact modeling',
      'Burn rate calculator',
    ],
    suggestedFeatures: [
      'Connect Paystack — auto-import real revenue data',
      'Expense categorization (AI classifies bank statement)',
      'Naira inflation adjustment mode',
      'WhatsApp alerts when cash is projected to run low',
    ],
    challenges: ['FX volatility makes projections tricky', 'Data import complexity'],
    opportunities: ['Accountant partnerships', 'SME loan pre-qualification tool'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_011',
    name: 'Investor Readiness Suite',
    description: 'Automated funding documentation for Nigerian startups — SAFE agreements, data room setup, cap table management, and due diligence checklists.',
    category: 'ai',
    status: 'PLANNED',
    pillar: 'enablement',
    version: '0.0.1',
    slug: 'investor-readiness',
    domain: 'boldmind.ng',
    subdomain: 'planai',
    routePath: '/investor',
    app: 'planai-suite',
    serviceModule: 'PlanAIModule',
    icon: '📈',
    database: 'postgres',
    revenueModel: 'Setup: ₦50k | Monthly: ₦10k',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'OpenAI', 'DocuSign API', 'Cloudflare R2'],
    teamSize: 3,
    timeline: 'Q3 2026',
    priority: 11,
    dependencies: ['planai-suite'],
    integrations: ['DocuSign (e-signature)', 'CAC online portal'],
    tags: ['investment', 'funding', 'legal', 'startups', 'venture'],
    links: { website: 'https://planai.boldmind.ng/investor' },
    features: [
      'SAFE/Convertible note generator',
      'Data room setup & sharing',
      'Pitch deck templates (Nigerian startup context)',
      'Cap table management',
      'Due diligence checklist (SEC Nigeria compliant)',
      'Investor update email templates',
    ],
    suggestedFeatures: [
      'Nigerian VC tracker — know which VCs are actively investing',
      'CAC incorporation wizard (built into the suite)',
      'SEC registration checklist for public offerings',
    ],
    challenges: ['Legal compliance (SEC Nigeria)', 'Lawyer partnership needed'],
    opportunities: ['VC partnerships', 'Lagos tech ecosystem positioning'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_012',
    name: 'Branding & Design Tools',
    description: 'AI logo generator, brand kit creator, and marketing visual maker — designed for Nigerian SMEs who need professional branding without a designer.',
    category: 'ai',
    status: 'BUILDING',
    pillar: 'enablement',
    version: '0.1.0',
    slug: 'branding-design',
    domain: 'boldmind.ng',
    subdomain: 'planai',
    routePath: '/design',
    app: 'planai-suite',
    serviceModule: 'PlanAIModule',
    icon: '🎨',
    database: 'mongodb',
    revenueModel: 'Per package: ₦3k (Logo) | ₦8k (Full Brand Kit)',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'fal.ai', 'Cloudflare Workers AI', 'Canvas API'],
    teamSize: 2,
    timeline: 'Q2 2026',
    priority: 12,
    dependencies: ['planai-suite'],
    integrations: ['fal.ai (FLUX image generation)', 'Cloudflare R2'],
    tags: ['design', 'branding', 'logo', 'marketing', 'nigerian-sme'],
    links: { website: 'https://planai.boldmind.ng/design' },
    features: [
      'Logo generator (FLUX AI image model)',
      'Brand color palette generator',
      'Marketing flyer templates (WhatsApp-ready format)',
      'Brand guidelines PDF export',
      'Social media kit (profile pics, banners, post templates)',
      'Typography pairing suggestions',
    ],
    suggestedFeatures: [
      'Nigerian cultural design motifs (Adire, Ankara patterns)',
      'Flyer maker — optimized for WhatsApp broadcast',
      'Business card designer (digital + printable PDF)',
      'Animation generator — looping logo for TikTok/Reels',
    ],
    challenges: ['AI image quality consistency', 'Nigerian market aesthetic preferences'],
    opportunities: ['Market stalls & informal businesses that can\'t afford designers'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_013',
    name: 'Digital Storefronts',
    description: 'Launch an online store in 5 minutes — Paystack payments, inventory management, WhatsApp order notifications, and a shareable link for Nigerian SMEs.',
    category: 'marketplace',
    status: 'BUILDING',
    pillar: 'enablement',
    version: '0.1.0',
    slug: 'digital-storefronts',
    domain: 'boldmind.ng',
    subdomain: 'planai',
    routePath: '/store',
    app: 'planai-suite',
    serviceModule: 'PlanAIModule',
    icon: '🛍️',
    database: 'postgres',
    revenueModel: 'Setup: ₦5k | Monthly: ₦2k + 1% transaction fee',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'Paystack', 'Prisma'],
    teamSize: 3,
    timeline: 'Q3 2026',
    priority: 13,
    dependencies: ['planai-suite'],
    integrations: ['Paystack', 'GIG Logistics API', 'WhatsApp Business API'],
    tags: ['ecommerce', 'store', 'payments', 'sme', 'nigeria'],
    links: { website: 'https://planai.boldmind.ng/store' },
    features: [
      'Store live in 5 minutes (no coding)',
      'Product catalog with photos (Cloudflare R2)',
      'Paystack payment collection',
      'Inventory management & low-stock alerts',
      'Order tracking & customer management',
      'WhatsApp order notification to seller',
      'Shareable store link (store.boldmind.ng/your-store)',
    ],
    suggestedFeatures: [
      'Instagram Shop sync — products also appear on Instagram',
      'Bulk order management for wholesale',
      'Customer loyalty stamps (buy 5 get 1 free)',
      'Delivery cost calculator (GIG/DHL rates auto-fetched)',
      'Abandoned cart WhatsApp recovery message',
    ],
    challenges: ['Delivery logistics complexity', 'Payment disputes'],
    opportunities: ['Billions in informal Nigerian commerce moving online'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_014',
    name: 'Marketing Automation',
    description: 'AI-driven email campaigns, WhatsApp broadcast sequences, and lead nurturing for Nigerian businesses — with local compliance built in.',
    category: 'ai',
    status: 'BUILDING',
    pillar: 'enablement',
    version: '0.1.0',
    slug: 'marketing-automation',
    domain: 'boldmind.ng',
    subdomain: 'planai',
    routePath: '/marketing',
    app: 'planai-suite',
    serviceModule: 'AutomationModule',
    icon: '📧',
    database: 'postgres',
    revenueModel: 'Subscription: ₦10k/month',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'Resend', 'WhatsApp Business API', 'BullMQ'],
    teamSize: 3,
    timeline: 'Q3 2026',
    priority: 14,
    dependencies: ['planai-suite'],
    integrations: ['Resend (email)', 'WhatsApp Business API', 'Paystack'],
    tags: ['marketing', 'automation', 'email', 'whatsapp', 'crm'],
    links: { website: 'https://planai.boldmind.ng/marketing' },
    features: [
      'Email automation sequences (drip campaigns)',
      'WhatsApp broadcast campaigns',
      'Customer segmentation by behavior',
      'Personalized campaigns (merge tags)',
      'Lead scoring',
      'A/B testing for subject lines',
    ],
    suggestedFeatures: [
      'SMS campaigns via Nigerian SMS gateways (Termii)',
      'Campaign ROI tracker — see ₦ generated per campaign',
      'Pre-built Nigerian campaign templates (Ramadan, Christmas, back-to-school)',
    ],
    challenges: ['Email deliverability', 'WhatsApp Business API policy compliance'],
    opportunities: ['Nigerian SME market desperate for affordable CRM'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_015',
    name: 'Analytics Dashboard',
    description: 'Cross-platform business intelligence — unify Instagram, TikTok, Paystack, and website analytics into one Nigerian entrepreneur-friendly dashboard.',
    category: 'ai',
    status: 'BUILDING',
    pillar: 'enablement',
    version: '0.1.0',
    slug: 'analytics-dashboard',
    domain: 'boldmind.ng',
    subdomain: 'planai',
    routePath: '/analytics',
    app: 'planai-suite',
    serviceModule: 'PlanAIModule',
    icon: '📊',
    database: 'postgres',
    revenueModel: 'Subscription: ₦8k/month',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'Recharts', 'Neon', 'PostHog'],
    teamSize: 3,
    timeline: 'Q3 2026',
    priority: 15,
    dependencies: ['planai-suite'],
    integrations: ['Meta Insights API', 'TikTok Analytics API', 'Paystack', 'Google Analytics 4'],
    tags: ['analytics', 'bi', 'dashboards', 'instagram', 'paystack'],
    links: { website: 'https://planai.boldmind.ng/analytics' },
    features: [
      'Unified analytics across all channels',
      'Behavior insights & funnels',
      'Revenue tracking (Paystack integrated)',
      'Custom reports & exports',
      'Real-time monitoring',
      'AI-generated growth recommendations',
    ],
    suggestedFeatures: [
      'Naira revenue dashboard (no dollar confusion)',
      'WhatsApp business metrics integration',
      'Competitor benchmarking for your industry in Nigeria',
    ],
    challenges: ['API data freshness', 'Multiple platform auth complexity'],
    opportunities: ['Nigerian agency market'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PILLAR 2: AWARENESS — amebogist.ng (stranger → reader)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'prod_001',
    name: 'AmeboGist',
    description: "Nigeria's #1 Pidgin English platform — AI/Tech, Creator entrepreneurship, Sports, Politics, Entertainment, and Trending Gist. 12k+ users, AdSense monetized.",
    status: 'LIVE',
    pillar: 'awareness',
    version: '1.0.0',
    slug: 'amebogist',
    domain: 'amebogist.ng',
    category: 'media',
    app: 'amebogist-web',
    serviceModule: 'ContentModule',
    icon: '📰',
    database: 'mongodb',
    revenueModel: 'AdSense + Local Ads + Creator subscriptions (₦1k/month)',
    monthlyRevenue: 15000,
    users: '12,000+',
    techStack: ['Next.js 15', 'MongoDB', 'Mongoose', 'PWA', 'Tailwind CSS'],
    teamSize: 2,
    timeline: 'Launched Q2 2025',
    priority: 1,
    integrations: ['Google AdSense', 'Meta API', 'Paystack'],
    tags: ['news', 'pidgin', 'nigeria', 'media', 'content', 'awareness'],
    links: { website: 'https://amebogist.ng' },
    twa: {
      packageName: 'ng.amebogist.app',
      themeColor: '#065F46',
      backgroundColor: '#FFFBEB',
    },
    features: [
      'AI & Tech Amebo (Pidgin English)',
      'Creator Life guidance & entrepreneurship',
      'Sports coverage',
      'Politics analysis',
      'Entertainment & Celebrity gist',
      'Trending gists + viral content',
      'SEO-optimized Pidgin articles',
      'PWA (installable, offline reading)',
      'Creator dashboard & earnings (at studio.amebogist.ng)',
      'RSS feed for content syndication',
      'Cross-promo slots for VillageCircle concept stories',
    ],
    suggestedFeatures: [
      'AmeboGist Premium — ad-free reading (₦500/month)',
      'Live Score widget for Nigerian football (embedded)',
      'Pidgin audio articles — text-to-speech in Pidgin accent',
      'Creator tipping — readers tip writers via Paystack',
      'AmeboGist TV — short video news clips (YouTube integration)',
      'Breaking news push notifications via Web Push API',
      'Local Ads — Nigerian SMEs advertise to specific states',
      'AI-generated Pidgin summaries of 3rd-party news',
      'AmeboGist Radio — livestream Pidgin commentary during big events',
      'Gist Club membership — ₦200/month unlock exclusive stories',
      'Pidgin SEO tool — suggests trending Pidgin keywords',
      'Branded content studio — Nigerian brands pay ₦50k+ for advertorials',
    ],
    challenges: ['Pidgin authenticity', 'Monetization beyond AdSense'],
    opportunities: ['Video content', 'Premium tier', 'Local ad network', 'VillageCircle cross-traffic'],
    createdAt: '2025-01-15',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_027',
    name: 'AmeboGist TWA',
    description: 'Android app (Trusted Web Activity) — AmeboGist as a Play Store app with push notifications, offline reading, and mobile AdSense.',
    category: 'media',
    status: 'PLANNED',
    pillar: 'awareness',
    version: '0.1.0',
    slug: 'amebogist-twa',
    domain: 'amebogist.ng',
    app: 'amebogist-web',
    serviceModule: 'ContentModule',
    icon: '📱',
    database: 'mongodb',
    revenueModel: 'Mobile AdSense + in-app creator subscriptions',
    monthlyRevenue: 0,
    techStack: ['PWA', 'Bubblewrap TWA', 'Android'],
    teamSize: 1,
    timeline: 'Q2 2026 — HIGH PRIORITY (12k users → app store)',
    priority: 27,
    dependencies: ['amebogist'],
    integrations: ['Google Play', 'Mobile AdSense'],
    tags: ['mobile', 'pwa', 'android', 'news', 'twa'],
    features: ['Push notifications', 'Offline reading cache', 'Mobile-optimized UI', 'App store listing'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PILLAR 3: EDUCATION — educenter.com.ng (believer → student)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'prod_002',
    name: 'EduCenter',
    description: 'Nigerian ed-tech platform: JAMB/WAEC/NECO exam prep with 10k+ past questions, CBT simulator, AI tutoring, and business/digital skills courses.',
    category: 'education',
    status: 'LIVE',
    pillar: 'education',
    version: '1.0.0',
    slug: 'educenter',
    domain: 'educenter.com.ng',
    app: 'educenter-web',
    serviceModule: 'EduCenterModule',
    icon: '🎓',
    database: 'postgres',
    revenueModel: 'Subscription (₦3k/month) + Course packs (₦1k-₦5k)',
    monthlyRevenue: 60000,
    users: '20',
    techStack: ['Next.js 15', 'Prisma', 'Neon', 'Paystack', 'PWA'],
    teamSize: 2,
    timeline: 'Launched Q3 2025',
    priority: 2,
    integrations: ['Paystack', 'WhatsApp API', 'Google Analytics'],
    tags: ['education', 'jamb', 'waec', 'neco', 'nigeria', 'exam-prep'],
    links: { website: 'https://educenter.com.ng' },
    twa: {
      packageName: 'ng.educenter.app',
      themeColor: '#1E40AF',
      backgroundColor: '#F8FAFC',
    },
    features: [
      '10,000+ JAMB/WAEC/NECO past questions (ALOC API)',
      'CBT simulation',
      'Performance analytics',
      'Study streaks',
      'Leaderboard',
      'Course library',
      'Marketing playbooks',
      'AI tools training',
    ],
    suggestedFeatures: [
      'AI essay marking — WAEC essay practice with AI feedback',
      'Live group study sessions (video + whiteboard)',
      'School onboarding — license for 200+ students (B2B)',
      'Certificate courses (LinkedIn-shareable)',
      'Post-UTME practice for specific universities',
      'Teacher dashboard — set assignments, track class progress',
      'SMS result alerts to parents (₦50 per SMS)',
      'EduCenter Maths Clinic — AI step-by-step solver for WAEC maths',
      'Scholarship radar — auto-alert students about scholarships',
      'Peer study rooms — 4-student virtual CBT rooms',
      'School dashboard — subscribe schools per-student at ₦500/student/term',
      'JAMB mock marathon — 24-hour live countdown mock exam',
    ],
    challenges: ['User acquisition', 'Content freshness for new exam years'],
    opportunities: ['School B2B licensing', 'Video tutorials', 'Post-UTME niche'],
    createdAt: '2025-03-20',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_025',
    name: 'Skill2Cash Board',
    description: 'Skill marketplace for Nigerian youth — post a 30-second video of your skill (DJ, makeup, tailoring, catering), get booked instantly. Pipeline from EduCenter courses into real income.',
    category: 'marketplace',
    status: 'CONCEPT',
    pillar: 'education',
    version: '0.0.1',
    slug: 'skill2cash',
    domain: 'educenter.com.ng',
    subdomain: 'skills',
    app: 'skill2cash-web',
    serviceModule: 'EduCenterModule',
    icon: '🎭',
    database: 'mongodb',
    revenueModel: 'Listing: ₦500/month | Commission: 10% per booking',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'Cloudflare Stream (video)', 'Paystack escrow', 'MongoDB'],
    teamSize: 3,
    timeline: 'Q4 2026',
    priority: 25,
    integrations: ['Cloudflare Stream', 'Paystack (escrow)', 'EduCenter courses'],
    tags: ['marketplace', 'gigs', 'youth', 'creative', 'video', 'nigeria', 'learn-to-earn'],
    links: { website: 'https://skills.educenter.com.ng' },
    features: [
      '30-second video skill showcase (no CV)',
      'Skills: DJ, makeup, tailoring, photography, catering',
      'Instant booking & scheduling',
      'Paystack escrow (safe payments)',
      'Optional anonymous profiles',
      'Skill categories & search',
      'EduCenter course completion → automatic skill badge',
    ],
    suggestedFeatures: [
      'EduCenter integration — course → certificate → skill → job pipeline',
      'Skill verification challenges (prove you can do what you claim)',
      'Collab matching — DJ + photographer + makeup artist for an event',
      'Student income tracker for university financial aid proof',
    ],
    challenges: ['Video hosting cost', 'Safety/vetting of anonymous users'],
    opportunities: ['Nigeria\'s youth unemployment crisis — millions of skilled youth'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_028',
    name: 'EduCenter TWA',
    description: 'Android app for EduCenter — JAMB/WAEC practice on mobile with offline question packs, in-app subscriptions, and parent tracking.',
    category: 'education',
    status: 'BUILDING',
    pillar: 'education',
    version: '0.1.0',
    slug: 'educenter-twa',
    domain: 'educenter.com.ng',
    app: 'educenter-web',
    serviceModule: 'EduCenterModule',
    icon: '📚',
    database: 'postgres',
    revenueModel: 'In-app subscriptions (Google Play Billing)',
    monthlyRevenue: 0,
    techStack: ['PWA', 'Bubblewrap TWA', 'Android', 'Google Play Billing'],
    teamSize: 1,
    timeline: 'Q2 2026 — HIGH PRIORITY (students on mobile)',
    priority: 28,
    dependencies: ['educenter'],
    integrations: ['Google Play Billing', 'Google Play Console'],
    tags: ['mobile', 'education', 'android', 'jamb', 'twa'],
    features: ['Offline question packs', 'In-app subscriptions', 'Push study reminders', 'Progress sync'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PILLAR 4: CONVICTION — villagecircle.ng (reader → believer + concept incubator)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'prod_033',
    name: 'VillageCircle',
    description: 'Story-driven philosophy hub of the BoldMind ecosystem — daily drops, the 5 Rivers doctrine, and concept incubator where tomorrow\'s products grow as stories before they become code.',
    category: 'community',
    status: 'BUILDING',
    pillar: 'conviction',
    version: '0.1.0',
    slug: 'villagecircle',
    domain: 'villagecircle.ng',
    app: 'villagecircle-web',
    serviceModule: 'ContentModule',
    icon: '🌱',
    database: 'mongodb',
    revenueModel: 'Waitlist-first (no direct revenue) — drives traffic to other pillars',
    monthlyRevenue: 0,
    users: '0',
    techStack: ['Next.js 15', 'MongoDB', 'Framer Motion', 'Resend', 'Social Content Factory'],
    teamSize: 1,
    timeline: 'Q2 2026 launch',
    priority: 2,
    integrations: ['Resend (email)', 'Meta API', 'TikTok', 'Social Content Factory', 'AmeboGist cross-posts'],
    tags: ['philosophy', 'community', 'storytelling', 'waitlist', 'concept-incubator'],
    links: { website: 'https://villagecircle.ng' },
    features: [
      'Daily drops (8:30 AM Africa/Lagos) — short philosophical texts',
      '5 Rivers taxonomy (Religion & Culture, History, Economic Liberation, Technology Leap, Pan-African Governance)',
      'Concept showcases as story pages (10+ concepts)',
      'Unified waitlist per concept',
      'Story → auto-video pipeline via Social Content Factory',
      'Per-pillar watermarks ("Tool from BoldMind. Story from VillageCircle.")',
      'Newsletter (quiet cadence — only when seed breaks ground)',
      'OpenDyslexic + Playfair/Lora dual typography system',
      'Achebe-style narrative voice (no hustle-theatre)',
    ],
    suggestedFeatures: [
      'Audio daily drops — voice of the circle (Pidgin + English)',
      'Community contribution — approved elders write drops',
      'Proverb library — searchable by theme',
      'Annual printed Village Circle book (bundled drops of the year)',
      'Physical gatherings (Lagos, Abuja, Port Harcourt)',
      'Patron tier — ₦5k/month to sustain the circle',
      'Concept graduation announcements — when a concept moves to boldmind.ng',
    ],
    challenges: ['Staying philosophical without becoming preachy', 'Narrative discipline at scale'],
    opportunities: ['Unique brand moat', 'Trojan horse for waitlists', 'Cultural leadership'],
    createdAt: '2026-03-01',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_019',
    name: 'KoloAI',
    description: 'Digital Ajo/Esusu thrift collector with AI default prediction — manage group savings, auto-pause risky members, send reminders, and track contributions.',
    category: 'fintech',
    status: 'CONCEPT',
    pillar: 'conviction',
    version: '0.0.1',
    slug: 'kolo-ai',
    domain: 'villagecircle.ng',
    routePath: '/kolo',
    app: 'villagecircle-web',
    serviceModule: 'ConceptModule',
    icon: '🪙',
    database: 'postgres',
    revenueModel: 'Per group: ₦5k-₦10k/month (after graduation)',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'Prisma', 'OpenAI', 'Paystack'],
    teamSize: 3,
    timeline: 'Q4 2026',
    priority: 19,
    integrations: ['Paystack', 'WhatsApp notifications', 'BVN verification'],
    tags: ['fintech', 'thrift', 'ajo', 'esusu', 'savings', 'ai'],
    links: { website: 'https://villagecircle.ng/kolo' },
    graduationTarget: { domain: 'boldmind.ng', subdomain: 'kolo', pillar: 'enablement' },
    features: [
      'Digital Ajo/Esusu group management',
      'AI default risk prediction per member',
      'Auto-pause contributions for at-risk members',
      'Automated WhatsApp payment reminders',
      'Savings analytics per group',
      'Multiple payout rotation schedules',
    ],
    suggestedFeatures: [
      'BVN-based member verification',
      'Interest generation on idle group funds (money market)',
      'Loan product — borrow against your Kolo contributions',
      'Family Kolo — savings goals for kids education, wedding, etc.',
    ],
    challenges: ['CBN regulation for fintech', 'Trust & fraud prevention'],
    opportunities: ['₦500B+ informal thrift market in Nigeria', 'Microfinance bank partnership'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_016',
    name: 'SAFE AI',
    description: 'AI-powered security intelligence for Nigerian law enforcement — digital incident reporting, criminal pattern analysis, and officer communication platform.',
    category: 'security',
    status: 'CONCEPT',
    pillar: 'conviction',
    version: '0.0.1',
    slug: 'safe-ai',
    domain: 'villagecircle.ng',
    routePath: '/safe',
    app: 'villagecircle-web',
    serviceModule: 'ConceptModule',
    icon: '🛡️',
    database: 'postgres',
    revenueModel: 'Government contracts (₦5M+ deployment) after graduation',
    monthlyRevenue: 0,
    techStack: ['React Native', 'NestJS', 'PostgreSQL', 'TensorFlow', 'Offline-first'],
    teamSize: 5,
    timeline: 'Q1 2027 (requires government partnership)',
    priority: 16,
    integrations: ['NIN database (NIMC)', 'GIS/Mapping', 'Body camera APIs'],
    tags: ['security', 'law-enforcement', 'ai', 'government', 'nigeria'],
    links: { website: 'https://villagecircle.ng/safe' },
    graduationTarget: { domain: 'boldmind.ng', subdomain: 'safe', pillar: 'enablement' },
    features: [
      'Digital incident reporting (replaces paper)',
      'Criminal pattern analysis by AI',
      'Predictive crime hotspot mapping',
      'Officer communication & dispatch',
      'Evidence management (photos, GPS)',
      'Offline-first (works without internet)',
    ],
    suggestedFeatures: [
      'Body camera footage tagging & storage',
      'Civilian tip line (anonymous reporting)',
      'Court case management integration',
      'Corruption alert system (anonymous officer reporting)',
    ],
    challenges: ['Government bureaucracy', 'Privacy & civil liberties concerns', '18-24 month sales cycle'],
    opportunities: ['Nigerian government tech spending', 'Private security firms'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_017',
    name: 'AfroHustle OS',
    description: 'Notion-style workspace with 100 proven side-hustle blueprints for Nigerian entrepreneurs — step-by-step guides to start, grow, and monetize.',
    category: 'education',
    status: 'CONCEPT',
    pillar: 'conviction',
    version: '0.0.1',
    slug: 'afrohustle-os',
    domain: 'villagecircle.ng',
    routePath: '/afrohustle',
    app: 'villagecircle-web',
    serviceModule: 'ConceptModule',
    icon: '⚡',
    database: 'mongodb',
    revenueModel: 'One-time: ₦5k | Monthly: ₦2k (after graduation)',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'MongoDB', 'Block editor (Tiptap)'],
    teamSize: 2,
    timeline: 'Q3 2026',
    priority: 17,
    tags: ['side-hustle', 'education', 'templates', 'entrepreneur', 'nigeria'],
    links: { website: 'https://villagecircle.ng/afrohustle' },
    graduationTarget: { domain: 'educenter.com.ng', subdomain: 'hustle', pillar: 'education' },
    features: [
      '100 Nigerian side-hustle blueprints',
      'Income tracker per hustle',
      'Community hustle circles',
      'Step-by-step launch guides',
      'Resource library (tools, vendors, platforms)',
    ],
    suggestedFeatures: [
      'Hustle matchmaking — "based on your skills, try these 5"',
      'Revenue showcase — real users sharing actual income',
      'WhatsApp hustle mentor (AI-powered)',
      'Hustle bootcamp challenges (30 days to ₦100k)',
    ],
    challenges: ['Content creation volume', 'Keeping blueprints current'],
    opportunities: ['Nigeria has 40M+ informal entrepreneurs — massive TAM'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_018',
    name: 'NaijaGig Matcher',
    description: 'Hyper-local gig marketplace for Nigerian artisans and service providers — plumbers, tailors, makeup artists, electricians — matched by location, same-day payout.',
    category: 'marketplace',
    status: 'CONCEPT',
    pillar: 'conviction',
    version: '0.0.1',
    slug: 'naijagig-matcher',
    domain: 'villagecircle.ng',
    routePath: '/naijagig',
    app: 'villagecircle-web',
    serviceModule: 'ConceptModule',
    icon: '🎭',
    database: 'mongodb',
    revenueModel: 'Commission: 10-15% per booking (after graduation)',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'Google Maps API', 'Paystack', 'BullMQ'],
    teamSize: 3,
    timeline: 'Q3 2026',
    priority: 18,
    integrations: ['Google Maps', 'Paystack', 'WhatsApp notifications'],
    tags: ['marketplace', 'gigs', 'artisans', 'local', 'nigeria'],
    links: { website: 'https://villagecircle.ng/naijagig' },
    graduationTarget: { domain: 'boldmind.ng', subdomain: 'gig', pillar: 'enablement' },
    features: [
      'Location-based gig worker matching',
      'Instant same-day wallet payout (Paystack)',
      'Worker profiles & portfolio photos',
      'Client reviews & ratings',
      'Job posting & bidding',
      'Dispute resolution system',
    ],
    suggestedFeatures: [
      'Background verification (NIN check)',
      'Skills training integration (EduCenter courses → NaijaGig jobs)',
      'Corporate contracts — companies hire vetted artisan pools',
      '"On my way" real-time tracking',
    ],
    challenges: ['Worker vetting & quality', 'Payment disputes'],
    opportunities: ['Nigeria\'s informal sector is worth trillions'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_020',
    name: 'BorderlessRemit Tracker',
    description: 'Real-time Nigerian remittance rate comparison — bank rates vs parallel market, receipt generator, affiliate links, and rate alerts for diaspora.',
    category: 'fintech',
    status: 'BUILDING',
    pillar: 'conviction',
    version: '0.1.0',
    slug: 'borderless-remit',
    domain: 'villagecircle.ng',
    routePath: '/remit',
    app: 'villagecircle-web',
    serviceModule: 'ConceptModule',
    icon: '🌍',
    database: 'mongodb',
    revenueModel: 'Affiliate commissions (₦2k-₦10k per referred transfer)',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'Real-time rate APIs', 'Resend (alerts)'],
    teamSize: 2,
    timeline: 'Q4 2026',
    priority: 20,
    integrations: ['Remita', 'Wise API', 'WorldRemit affiliate'],
    tags: ['fintech', 'remittance', 'diaspora', 'forex', 'nigeria'],
    links: { website: 'https://villagecircle.ng/remit' },
    graduationTarget: { domain: 'boldmind.ng', subdomain: 'remit', pillar: 'enablement' },
    features: [
      'Live rate comparison (bank vs parallel market vs remittance apps)',
      'Rate alert notifications (email + WhatsApp)',
      'Transfer receipt generator',
      'Affiliate links to transfer services',
      'Historical rate charts',
      'Estimated transfer time per service',
    ],
    suggestedFeatures: [
      'Telegram bot for instant rate checks',
      'Chrome extension — auto-shows rate on remittance sites',
      'Collective group remittances (multiple senders, one receiver)',
    ],
    challenges: ['Parallel market rate accuracy (changes hourly)', 'CBN regulatory risk'],
    opportunities: ['$25B+ remittances to Nigeria annually — massive affiliate market'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_021',
    name: 'ReceiptGenius NG',
    description: 'Instant VAT-compliant invoice and receipt generator for Nigerian SMEs — create, send via SMS/WhatsApp/email, and track all transactions in one place.',
    category: 'fintech',
    status: 'BUILDING',
    pillar: 'conviction',
    version: '0.1.0',
    slug: 'receipt-genius',
    domain: 'villagecircle.ng',
    routePath: '/receipt',
    app: 'villagecircle-web',
    serviceModule: 'ConceptModule',
    icon: '🧾',
    database: 'postgres',
    revenueModel: 'Subscription: ₦1k/month | ₦10k/year (after graduation)',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'Prisma', 'Resend', 'Termii SMS', 'PDF generation'],
    teamSize: 2,
    timeline: 'Q4 2026',
    priority: 21,
    integrations: ['Termii (SMS)', 'Resend (email)', 'FIRS TIN validation'],
    tags: ['fintech', 'invoicing', 'receipts', 'vat', 'nigeria', 'sme'],
    links: { website: 'https://villagecircle.ng/receipt' },
    graduationTarget: { domain: 'boldmind.ng', subdomain: 'receipt', pillar: 'enablement' },
    features: [
      'VAT-compliant receipts (7.5% FIRS compliant)',
      'Professional invoice generation',
      'Customer database',
      'SMS + WhatsApp + email delivery',
      'Sales analytics & monthly reports',
      'Multi-currency (₦, $, £)',
    ],
    suggestedFeatures: [
      'FIRS e-invoice integration (Nigeria moving to digital tax)',
      'POS agent receipt sync (₦50/receipt via API)',
      'Expense tracker (add bills, not just receipts you create)',
      'Accountant access (read-only sharing)',
    ],
    challenges: ['FIRS e-invoicing regulation changes', 'User adoption over WhatsApp screenshots'],
    opportunities: ['10M+ Nigerian SMEs that currently use hand-written receipts'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_022',
    name: 'PowerAlert NG',
    description: 'Crowd-sourced NEPA/EKEDC light availability tracker by area + solar calculator — know when light is on near you before going home.',
    category: 'utilities',
    status: 'CONCEPT',
    pillar: 'conviction',
    version: '0.0.1',
    slug: 'power-alert',
    domain: 'villagecircle.ng',
    routePath: '/power',
    app: 'villagecircle-web',
    serviceModule: 'ConceptModule',
    icon: '⚡',
    database: 'mongodb',
    revenueModel: 'Lead gen to solar installers (₦2k-₦5k/lead) after graduation',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'Google Maps API', 'MongoDB', 'Push notifications'],
    teamSize: 2,
    timeline: 'Q4 2026',
    priority: 22,
    integrations: ['Google Maps', 'Solar installer directory', 'Push notifications'],
    tags: ['utilities', 'energy', 'nepa', 'solar', 'nigeria', 'crowdsource'],
    links: { website: 'https://villagecircle.ng/power' },
    graduationTarget: { domain: 'boldmind.ng', subdomain: 'power', pillar: 'enablement' },
    features: [
      'Real-time NEPA/EKEDC status by street/area',
      'Solar calculator (how much you need + cost)',
      'Installer directory (vetted solar companies)',
      'Energy cost tracker (generator vs solar comparison)',
      'Community outage reporting',
      'Push notifications when light returns to your area',
    ],
    suggestedFeatures: [
      'Generator petrol cost tracker (how much you spend monthly)',
      'Predict outage duration by historical pattern per area',
      'Inverter & battery sizing calculator',
      'Group buy solar — neighborhoods pool to get bulk discount',
    ],
    challenges: ['Crowdsourcing data accuracy at launch (cold start)', 'Area granularity'],
    opportunities: ['Nigerian generator fuel cost ($10B+ market) → solar conversion'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_023',
    name: 'FarmGate Direct',
    description: 'Direct farmer-to-buyer marketplace — cuts out middlemen, farmers post produce, buyers (hotels, restaurants, markets) buy directly with quality guarantee.',
    category: 'marketplace',
    status: 'CONCEPT',
    pillar: 'conviction',
    version: '0.0.1',
    slug: 'farmgate-direct',
    domain: 'villagecircle.ng',
    routePath: '/farmgate',
    app: 'villagecircle-web',
    serviceModule: 'ConceptModule',
    icon: '🌾',
    database: 'mongodb',
    revenueModel: 'Commission: 3-5% | Listing: ₦3k/season (after graduation)',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'MongoDB', 'GIG Logistics API', 'Paystack'],
    teamSize: 4,
    timeline: 'Q4 2026',
    priority: 23,
    integrations: ['GIG Logistics', 'Paystack', 'WeatherAPI'],
    tags: ['agriculture', 'marketplace', 'farmers', 'food-security', 'nigeria'],
    links: { website: 'https://villagecircle.ng/farmgate' },
    graduationTarget: { domain: 'boldmind.ng', subdomain: 'farm', pillar: 'enablement' },
    features: [
      'Farmers post produce listings with photos',
      'Direct buyer contact (restaurants, hotels, markets)',
      'Quality verification system',
      'Logistics coordination (GIG delivery)',
      'Market price tracking',
      'Seasonal crop calendar',
    ],
    suggestedFeatures: [
      'AI crop disease detection via photo',
      'Farm input marketplace (seeds, fertilizer at wholesale prices)',
      'Export facilitation — connect to international buyers',
      'Farmer credit scoring based on sales history (KoloAI integration)',
    ],
    challenges: ['Quality consistency', 'Logistics last-mile in rural areas'],
    opportunities: ['$6B+ Nigerian agricultural trade, massive inefficiencies'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_024',
    name: 'AfroCopy AI',
    description: 'African-first AI copywriting tool — generates ads, captions, emails, and blog posts in Pidgin English, Yoruba, Igbo, Hausa, and local marketing voice.',
    category: 'ai',
    status: 'CONCEPT',
    pillar: 'conviction',
    version: '0.0.1',
    slug: 'afrocopy-ai',
    domain: 'villagecircle.ng',
    routePath: '/afrocopy',
    app: 'villagecircle-web',
    serviceModule: 'ConceptModule',
    icon: '✍️',
    database: 'mongodb',
    revenueModel: 'Subscription: ₦2k/month (Solo) | ₦5k (Agency) after graduation',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'OpenAI fine-tuned', 'MongoDB'],
    teamSize: 3,
    timeline: 'Q4 2026',
    priority: 24,
    tags: ['ai', 'copywriting', 'pidgin', 'yoruba', 'igbo', 'african', 'marketing'],
    links: { website: 'https://villagecircle.ng/afrocopy' },
    graduationTarget: { domain: 'boldmind.ng', subdomain: 'planai', pillar: 'enablement' },
    features: [
      'Pidgin English copy generation',
      'Yoruba, Igbo, Hausa translations',
      'Social media captions (Instagram, TikTok, Twitter)',
      'WhatsApp broadcast messages',
      'Email marketing copy',
      'Nigerian cultural reference injection ("Sapa," "Japa" etc)',
    ],
    suggestedFeatures: [
      'AmeboGist article writer in Pidgin (internal use + sell)',
      'Nigerian proverb & idiom library for human-sounding copy',
      'Voice copy — script generator for TikTok voiceovers',
      'Agency mode — manage copy for multiple brand clients',
    ],
    challenges: ['Training data quality for Nigerian languages', 'Language accuracy validation'],
    opportunities: ['No good African-trained copywriting AI exists yet — first mover'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_026',
    name: 'AnonTruth Mic',
    description: 'Temporary anonymous audio drops for whistleblowers — voice-distorted, auto-deleted, location-targeted truth drops that expire in 24-72 hours.',
    category: 'social',
    status: 'CONCEPT',
    pillar: 'conviction',
    version: '0.0.1',
    slug: 'anontruth-mic',
    domain: 'villagecircle.ng',
    routePath: '/anon',
    app: 'villagecircle-web',
    serviceModule: 'ConceptModule',
    icon: '🎤',
    database: 'mongodb',
    revenueModel: 'Boost feature (₦500-₦1k per boost) after graduation',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'Audio encryption', 'Geolocation', 'Auto-delete jobs (BullMQ)'],
    teamSize: 4,
    timeline: 'Q4 2026 (HIGH RISK — requires legal review)',
    priority: 26,
    tags: ['social', 'anonymous', 'audio', 'whistleblower', 'journalism'],
    links: { website: 'https://villagecircle.ng/anon' },
    graduationTarget: { domain: 'amebogist.ng', subdomain: 'studio', pillar: 'awareness' },
    features: [
      'Anonymous audio drop (no account required)',
      'Voice distortion (pitch shift + background noise removal)',
      'Auto-delete after 24-72 hours',
      'Location-targeted drops (by state/city)',
      'Boost feature to surface drops to top',
      'End-to-end encryption',
    ],
    suggestedFeatures: [
      'AmeboGist integration — verified drops appear as news tips',
      'Journalist verification tier (access to raw drops)',
      'Text drops in addition to audio',
    ],
    challenges: ['Nigerian cybercrime law (EFCC risk)', 'Moderation of abuse', 'Platform liability'],
    opportunities: ['Whistleblower journalism is underserved', 'Partnership with investigative outlets'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TWA COMPANIONS (inherit pillar from parent)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'prod_029',
    name: 'BoldMind OS TWA',
    description: 'Android companion for BoldMind OS — mobile focus timer, voice capture, quick task add, and offline sync.',
    category: 'productivity',
    status: 'PLANNED',
    pillar: 'enablement',
    version: '0.1.0',
    slug: 'boldmind-os-twa',
    domain: 'boldmind.ng',
    subdomain: 'os',
    app: 'boldmind-os',
    serviceModule: 'UserModule',
    icon: '🧠',
    database: 'postgres',
    revenueModel: 'Bundled with BoldMind OS Pro subscription',
    monthlyRevenue: 0,
    techStack: ['PWA', 'Bubblewrap TWA', 'Android'],
    teamSize: 2,
    timeline: 'Q2 2026',
    priority: 29,
    dependencies: ['boldmind-os'],
    integrations: ['Mobile sensors', 'Web Push API'],
    tags: ['mobile', 'productivity', 'adhd', 'android', 'twa'],
    features: ['Mobile Pomodoro', 'Voice capture → sync to desktop', 'Quick task add', 'Offline mode'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_030',
    name: 'NaijaFit TWA',
    description: 'Android app for NaijaFit — mobile workouts, Nigerian meal logging, progress photos, community challenges, and AI coach chat on mobile.',
    category: 'health',
    status: 'PLANNED',
    pillar: 'enablement',
    version: '0.1.0',
    slug: 'naija-fit-twa',
    domain: 'boldmind.ng',
    subdomain: 'fit',
    app: 'naija-fit',
    serviceModule: 'FitnessModule',
    icon: '💪',
    database: 'postgres',
    revenueModel: 'Bundled with NaijaFit Pro subscription',
    monthlyRevenue: 0,
    techStack: ['PWA', 'Bubblewrap TWA', 'Android', 'Camera API'],
    teamSize: 2,
    timeline: 'Q3 2026',
    dependencies: ['naija-fit'],
    integrations: ['Mobile camera (progress photos)', 'Health APIs'],
    tags: ['mobile', 'health', 'fitness', 'android', 'twa'],
    priority: 30,
    features: ['Mobile workouts', 'Meal photo logging', 'Progress photos', 'Community challenges'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_031',
    name: 'EmailScraper TWA',
    description: 'Android app for EmailScraper Pro — business card scanning, contact lookup, and lead list management on mobile.',
    category: 'productivity',
    status: 'PLANNED',
    pillar: 'enablement',
    version: '0.1.0',
    slug: 'emailscraper-twa',
    domain: 'boldmind.ng',
    subdomain: 'tools',
    app: 'boldmind-tools',
    serviceModule: 'PlanAIModule',
    icon: '🔍',
    database: 'mongodb',
    revenueModel: 'Bundled with EmailScraper Pro subscription',
    monthlyRevenue: 0,
    techStack: ['PWA', 'Bubblewrap TWA', 'Android', 'Camera/OCR API'],
    teamSize: 1,
    timeline: 'Q3 2026',
    priority: 31,
    dependencies: ['emailscraper-pro'],
    integrations: ['Camera (business card scan)', 'OCR'],
    tags: ['mobile', 'sales', 'lead-gen', 'android', 'twa'],
    features: ['Business card scanner (OCR)', 'Lead list management', 'Quick search'],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },

  {
    id: 'prod_032',
    name: 'SAFE AI Native',
    description: 'Full React Native app for police officers — offline-first incident reporting, GPS evidence tagging, voice-to-text (Pidgin + English), and photo evidence management.',
    category: 'security',
    status: 'PLANNED',
    pillar: 'conviction',
    version: '0.1.0',
    slug: 'safe-ai-native',
    domain: 'villagecircle.ng',
    routePath: '/safe/native',
    app: 'villagecircle-web',
    serviceModule: 'ConceptModule',
    icon: '📱',
    database: 'postgres',
    revenueModel: 'Government deployment contract',
    monthlyRevenue: 0,
    techStack: ['React Native', 'iOS', 'Android', 'SQLite (offline)', 'GPS'],
    teamSize: 4,
    timeline: 'Q4 2026 (after government contract)',
    priority: 32,
    dependencies: ['safe-ai'],
    integrations: ['Mobile cameras', 'GPS', 'Offline SQLite', 'Whisper (voice)'],
    tags: ['mobile', 'security', 'react-native', 'ios', 'android', 'government'],
    graduationTarget: { domain: 'boldmind.ng', subdomain: 'safe', pillar: 'enablement' },
    features: [
      'Offline incident reporting (works without internet)',
      'Voice-to-text in Pidgin & English (Whisper)',
      'GPS-tagged evidence photos & videos',
      'Real-time officer dispatch',
      'Secure evidence chain of custody',
    ],
    createdAt: '2025-12-26',
    updatedAt: '2026-04-18',
  },
];


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION A: BASIC LOOKUP HELPERS
// ═══════════════════════════════════════════════════════════════════════════════

const _byId = new Map<string, Product>(
  BOLDMIND_PRODUCTS.map((p) => [p.id, p]),
);
const _bySlug = new Map<string, Product>(
  BOLDMIND_PRODUCTS.map((p) => [p.slug, p]),
);

export function getProductById(id: string): Product | undefined {
  return _byId.get(id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return _bySlug.get(slug);
}

export function getProductByDomain(domain: CoreDomain): Product | undefined {
  return BOLDMIND_PRODUCTS.find((p) => p.domain === domain && !p.subdomain && !p.routePath);
}

export function getProductByFullDomain(fullDomain: string): Product | undefined {
  return BOLDMIND_PRODUCTS.find((product) => {
    const full = product.subdomain
      ? `${product.subdomain}.${product.domain}`
      : product.domain;
    return full === fullDomain;
  });
}

/** Returns the canonical URL for a product, honouring subdomain and routePath */
export function getProductWebsiteUrl(product: Product): string {
  const host = product.subdomain
    ? `${product.subdomain}.${product.domain}`
    : product.domain;
  return `https://${host}${product.routePath ?? ''}`;
}

export function toProductCard(p: Product): ProductCard {
  return {
    id: p.id,
    name: p.name,
    slug: p.slug,
    icon: p.icon,
    description: p.description,
    category: p.category,
    status: p.status,
    pillar: p.pillar,
    domain: p.domain,
    monthlyRevenue: p.monthlyRevenue ?? 0,
    priority: p.priority,
    tags: p.tags,
  };
}

export function toProductCards(products: Product[]): ProductCard[] {
  return products.map(toProductCard);
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION B: PILLAR FILTERS (NEW)
// ═══════════════════════════════════════════════════════════════════════════════

export function getProductsByPillar(pillar: EcosystemPillar): Product[] {
  return BOLDMIND_PRODUCTS.filter((p) => p.pillar === pillar);
}

export const getAwarenessProducts  = (): Product[] => getProductsByPillar('awareness');
export const getConvictionProducts = (): Product[] => getProductsByPillar('conviction');
export const getEducationProducts  = (): Product[] => getProductsByPillar('education');
export const getEnablementProducts = (): Product[] => getProductsByPillar('enablement');

/** Products that live at villagecircle.ng but will graduate to another pillar */
export function getGraduatingConcepts(): Product[] {
  return BOLDMIND_PRODUCTS.filter(
    (p) => p.pillar === 'conviction' && p.graduationTarget !== undefined,
  );
}

/** Products whose graduation target is the given domain */
export function getConceptsGraduatingTo(domain: CoreDomain): Product[] {
  return BOLDMIND_PRODUCTS.filter(
    (p) => p.graduationTarget?.domain === domain,
  );
}

export function getPillarSummary(): PillarSummary[] {
  return (Object.keys(PILLAR_METADATA) as EcosystemPillar[]).map((pillar) => {
    const products = getProductsByPillar(pillar);
    const meta = PILLAR_METADATA[pillar];
    return {
      pillar,
      domain: meta.domain,
      label: meta.label,
      jobInFlywheel: meta.jobInFlywheel,
      count: products.length,
      live: products.filter((p) => p.status === 'LIVE').length,
      building: products.filter((p) => p.status === 'BUILDING').length,
      planned: products.filter((p) => p.status === 'PLANNED').length,
      concept: products.filter((p) => p.status === 'CONCEPT').length,
      revenue: products.reduce((sum, p) => sum + (p.monthlyRevenue ?? 0), 0),
    };
  });
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION C: STATUS FILTERS
// ═══════════════════════════════════════════════════════════════════════════════

export function getProductsByStatus(status: ProductStatus): Product[] {
  return BOLDMIND_PRODUCTS.filter((p) => p.status === status);
}

export const getLiveProducts     = (): Product[] => getProductsByStatus('LIVE');
export const getBuildingProducts = (): Product[] => getProductsByStatus('BUILDING');
export const getPlannedProducts  = (): Product[] => getProductsByStatus('PLANNED');
export const getConceptProducts  = (): Product[] => getProductsByStatus('CONCEPT');

export function getActiveProducts(): Product[] {
  return BOLDMIND_PRODUCTS.filter(
    (p) => p.status === 'LIVE' || p.status === 'BUILDING',
  );
}

export function getInactiveProducts(): Product[] {
  return BOLDMIND_PRODUCTS.filter(
    (p) => p.status === 'PLANNED' || p.status === 'CONCEPT',
  );
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION D: CATEGORY & TAG FILTERS
// ═══════════════════════════════════════════════════════════════════════════════

export function getProductsByCategory(category: ProductCategory): Product[] {
  return BOLDMIND_PRODUCTS.filter((p) => p.category === category);
}

export function getProductsByCategories(categories: ProductCategory[]): Product[] {
  const set = new Set<ProductCategory>(categories);
  return BOLDMIND_PRODUCTS.filter((p) => set.has(p.category));
}

export function getProductsByTags(tags: string[]): Product[] {
  const lower = tags.map((t) => t.toLowerCase());
  return BOLDMIND_PRODUCTS.filter((p) =>
    lower.every((tag) => p.tags.some((t) => t.toLowerCase().includes(tag))),
  );
}

export function getProductsByAnyTag(tags: string[]): Product[] {
  const lower = tags.map((t) => t.toLowerCase());
  return BOLDMIND_PRODUCTS.filter((p) =>
    lower.some((tag) => p.tags.some((t) => t.toLowerCase().includes(tag))),
  );
}

export function getAllTags(): string[] {
  const set = new Set<string>();
  BOLDMIND_PRODUCTS.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

export function getTagFrequency(): Record<string, number> {
  const freq: Record<string, number> = {};
  BOLDMIND_PRODUCTS.forEach((p) =>
    p.tags.forEach((t) => {
      freq[t] = (freq[t] ?? 0) + 1;
    }),
  );
  return freq;
}

export function getTopTags(n = 10): Array<{ tag: string; count: number }> {
  return Object.entries(getTagFrequency())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, n);
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION E: SEARCH & FULL-TEXT
// ═══════════════════════════════════════════════════════════════════════════════

export function searchProducts(query: string): Product[] {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length) return [...BOLDMIND_PRODUCTS];

  return BOLDMIND_PRODUCTS.filter((p) => {
    const haystack = [
      p.name,
      p.description,
      p.category,
      p.pillar,
      p.slug,
      ...p.tags,
      ...(p.techStack ?? []),
    ]
      .join(' ')
      .toLowerCase();
    return words.every((word) => haystack.includes(word));
  });
}

export function fuzzySearchProducts(
  query: string,
): Array<{ product: Product; score: number }> {
  const q = query.toLowerCase();
  const scored = BOLDMIND_PRODUCTS.map((p) => {
    let score = 0;
    if (p.name.toLowerCase().includes(q)) score += 10;
    if (p.slug.toLowerCase().includes(q)) score += 8;
    if (p.description.toLowerCase().includes(q)) score += 5;
    if (p.category.toLowerCase().includes(q)) score += 4;
    if (p.pillar.toLowerCase().includes(q)) score += 3;
    p.tags.forEach((t) => { if (t.toLowerCase().includes(q)) score += 2; });
    p.techStack.forEach((t) => { if (t.toLowerCase().includes(q)) score += 1; });
    return { product: p, score };
  });
  return scored.filter((s) => s.score > 0).sort((a, b) => b.score - a.score);
}

export function paginateProducts(
  products: Product[],
  page = 1,
  pageSize = 10,
): PaginatedResult<Product> {
  const total = products.length;
  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  return {
    data: products.slice(start, start + pageSize),
    total,
    page,
    pageSize,
    totalPages,
    hasNext: page < totalPages,
    hasPrev: page > 1,
  };
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION F: TECH STACK & DATABASE ANALYSIS
// ═══════════════════════════════════════════════════════════════════════════════

export function getProductsByTech(tech: string): Product[] {
  const q = tech.toLowerCase();
  return BOLDMIND_PRODUCTS.filter((p) =>
    p.techStack.some((t) => t.toLowerCase().includes(q)),
  );
}

export function getProductsByDatabase(dbType: DatabaseType): Product[] {
  return BOLDMIND_PRODUCTS.filter((p) => p.database === dbType);
}

export function getAllTechStack(): string[] {
  const set = new Set<string>();
  BOLDMIND_PRODUCTS.forEach((p) => p.techStack.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}

export function getTechStackFrequency(): Record<string, number> {
  const freq: Record<string, number> = {};
  BOLDMIND_PRODUCTS.forEach((p) =>
    p.techStack.forEach((t) => {
      freq[t] = (freq[t] ?? 0) + 1;
    }),
  );
  return freq;
}

export function getProductsBySimilarStack(slug: string): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return [];
  const stackSet = new Set(product.techStack.map((t) => t.toLowerCase()));
  return BOLDMIND_PRODUCTS.filter(
    (p) =>
      p.slug !== slug &&
      p.techStack.some((t) => stackSet.has(t.toLowerCase())),
  );
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION G: DOMAIN & URL UTILITIES
// ═══════════════════════════════════════════════════════════════════════════════

export const CORE_DOMAINS: CoreDomain[] = [
  'boldmind.ng',
  'amebogist.ng',
  'educenter.com.ng',
  'villagecircle.ng',
];

export function getAllDomains(): CoreDomain[] {
  return Array.from(new Set(BOLDMIND_PRODUCTS.map((p) => p.domain)));
}

export function getAllSubdomains(): string[] {
  return Array.from(
    new Set(
      BOLDMIND_PRODUCTS.filter((p) => p.subdomain).map((p) => p.subdomain!),
    ),
  );
}

export function getProductsByDomainName(domain: CoreDomain): Product[] {
  return BOLDMIND_PRODUCTS.filter((p) => p.domain === domain);
}

export function getProductsBySubdomain(subdomain: string): Product[] {
  return BOLDMIND_PRODUCTS.filter((p) => p.subdomain === subdomain);
}

export function getProductsWithSubdomain(): Product[] {
  return BOLDMIND_PRODUCTS.filter((p) => p.subdomain !== undefined);
}

export function getProductsWithoutSubdomain(): Product[] {
  return BOLDMIND_PRODUCTS.filter((p) => p.subdomain === undefined);
}

/** Detect which product a request belongs to from an incoming Host header */
export function detectProductFromHost(host: string): Product | undefined {
  const clean = host.split(':')[0] ?? host;

  // Exact match with subdomain
  const withSub = BOLDMIND_PRODUCTS.find((p) => {
    if (!p.subdomain) return false;
    return `${p.subdomain}.${p.domain}` === clean;
  });
  if (withSub) return withSub;

  // Fall back to root domain (product with no subdomain/routePath)
  return BOLDMIND_PRODUCTS.find(
    (p) => p.domain === clean && !p.subdomain && !p.routePath,
  );
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION H: INTEGRATION & DEPENDENCY GRAPH
// ═══════════════════════════════════════════════════════════════════════════════

export function getProductsWithIntegration(integration: string): Product[] {
  const q = integration.toLowerCase();
  return BOLDMIND_PRODUCTS.filter((p) =>
    p.integrations?.some((i) => i.toLowerCase().includes(q)),
  );
}

export function getAllIntegrations(): string[] {
  const set = new Set<string>();
  BOLDMIND_PRODUCTS.forEach((p) =>
    p.integrations?.forEach((i) => set.add(i)),
  );
  return Array.from(set).sort();
}

export function getProductDependencies(productSlug: string): Product[] {
  const product = getProductBySlug(productSlug);
  if (!product?.dependencies?.length) return [];
  return product.dependencies
    .map((dep) => getProductBySlug(dep))
    .filter((dep): dep is Product => dep !== undefined);
}

export function getProductDependents(productSlug: string): Product[] {
  return BOLDMIND_PRODUCTS.filter((p) =>
    p.dependencies?.includes(productSlug),
  );
}

export function getTransitiveDependencies(
  productSlug: string,
  visited = new Set<string>(),
): Product[] {
  if (visited.has(productSlug)) return [];
  visited.add(productSlug);

  const directDeps = getProductDependencies(productSlug);
  const transitive = directDeps.flatMap((dep) =>
    getTransitiveDependencies(dep.slug, visited),
  );
  return [...directDeps, ...transitive].filter(
    (p, i, arr) => arr.findIndex((x) => x.id === p.id) === i,
  );
}

export function getProductsByApp(app: string): Product[] {
  return BOLDMIND_PRODUCTS.filter((p) => p.app === app);
}

export function getAllApps(): string[] {
  return Array.from(new Set(BOLDMIND_PRODUCTS.map((p) => p.app))).sort();
}

export function getPlanAISuiteProducts(): Product[] {
  return getProductsByApp('planai-suite');
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION I: REVENUE & FINANCIAL ANALYSIS
// ═══════════════════════════════════════════════════════════════════════════════

export function calculateTotalMonthlyRevenue(): number {
  return BOLDMIND_PRODUCTS.reduce(
    (sum, p) => sum + (p.monthlyRevenue ?? 0),
    0,
  );
}

export function calculateAnnualRevenue(): number {
  return calculateTotalMonthlyRevenue() * 12;
}

export function getRevenueGeneratingProducts(): Product[] {
  return BOLDMIND_PRODUCTS.filter((p) => (p.monthlyRevenue ?? 0) > 0).sort(
    (a, b) => (b.monthlyRevenue ?? 0) - (a.monthlyRevenue ?? 0),
  );
}

export function getTopRevenueProducts(limit = 5): Product[] {
  return getRevenueGeneratingProducts().slice(0, limit);
}

export function getZeroRevenueProducts(): Product[] {
  return BOLDMIND_PRODUCTS.filter((p) => (p.monthlyRevenue ?? 0) === 0);
}

export function getRevenueByPillar(): Array<{
  pillar: EcosystemPillar;
  monthlyRevenue: number;
  productCount: number;
}> {
  const map = new Map<EcosystemPillar, { monthlyRevenue: number; productCount: number }>();
  BOLDMIND_PRODUCTS.forEach((p) => {
    const existing = map.get(p.pillar) ?? { monthlyRevenue: 0, productCount: 0 };
    map.set(p.pillar, {
      monthlyRevenue: existing.monthlyRevenue + (p.monthlyRevenue ?? 0),
      productCount: existing.productCount + 1,
    });
  });
  return Array.from(map.entries())
    .map(([pillar, v]) => ({ pillar, ...v }))
    .sort((a, b) => b.monthlyRevenue - a.monthlyRevenue);
}

export function getRevenueByCategory(): Array<{
  category: ProductCategory;
  monthlyRevenue: number;
  productCount: number;
}> {
  const map = new Map<ProductCategory, { monthlyRevenue: number; productCount: number }>();
  BOLDMIND_PRODUCTS.forEach((p) => {
    const existing = map.get(p.category) ?? { monthlyRevenue: 0, productCount: 0 };
    map.set(p.category, {
      monthlyRevenue: existing.monthlyRevenue + (p.monthlyRevenue ?? 0),
      productCount: existing.productCount + 1,
    });
  });
  return Array.from(map.entries())
    .map(([category, v]) => ({ category, ...v }))
    .sort((a, b) => b.monthlyRevenue - a.monthlyRevenue);
}

export function projectRevenue(months: number, annualGrowthRate = 0.5): number {
  const baseMonthly = calculateTotalMonthlyRevenue();
  const monthlyGrowthRate = Math.pow(1 + annualGrowthRate, 1 / 12) - 1;
  return baseMonthly * Math.pow(1 + monthlyGrowthRate, months);
}

export function getPaybackPeriod(product: Product): number {
  const cost = estimateDevelopmentCost(product);
  const monthly = product.monthlyRevenue ?? 0;
  if (monthly === 0) return Infinity;
  return Math.ceil(cost / monthly);
}

export function calculateROI(product: Product): number {
  const cost = estimateDevelopmentCost(product);
  if (cost === 0) return 0;
  return ((product.monthlyRevenue ?? 0) * 12) / cost * 100;
}

export function getAverageRevenuePerLiveProduct(): number {
  const live = getLiveProducts();
  if (!live.length) return 0;
  return live.reduce((sum, p) => sum + (p.monthlyRevenue ?? 0), 0) / live.length;
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION J: TEAM & COST ANALYSIS
// ═══════════════════════════════════════════════════════════════════════════════

export function calculateTotalTeamSize(): number {
  const raw = BOLDMIND_PRODUCTS.reduce(
    (sum, p) => sum + (p.teamSize ?? 0),
    0,
  );
  return Math.ceil(raw / 2);
}

export function getProductsByTeamSize(minSize: number, maxSize?: number): Product[] {
  return BOLDMIND_PRODUCTS.filter((p) => {
    const ts = p.teamSize ?? 0;
    return ts >= minSize && (maxSize === undefined || ts <= maxSize);
  });
}

export function getSoloProducts(): Product[] {
  return BOLDMIND_PRODUCTS.filter((p) => p.teamSize === 1);
}

export function estimateDevelopmentCost(
  product: Product,
  monthlyRatePerDev = 500_000,
): number {
  const teamSize = product.teamSize ?? 1;
  const months = getTimelineMonths(product.timeline);
  return teamSize * months * monthlyRatePerDev;
}

export function calculateTotalDevelopmentCost(monthlyRatePerDev = 500_000): number {
  return BOLDMIND_PRODUCTS.reduce(
    (sum, p) => sum + estimateDevelopmentCost(p, monthlyRatePerDev),
    0,
  );
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION K: TIMELINE ANALYSIS
// ═══════════════════════════════════════════════════════════════════════════════

function getTimelineMonths(timeline?: string): number {
  if (!timeline) return 3;
  const weeks = timeline.match(/(\d+)\s*weeks?/);
  if (weeks) return parseInt(weeks[1]!) / 4;
  const months = timeline.match(/(\d+)\s*months?/);
  if (months) return parseInt(months[1]!);
  return 3;
}

export function getUpcomingReleases(months = 6): Product[] {
  const now = new Date();
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() + months);

  return BOLDMIND_PRODUCTS.filter((p) => {
    if (!p.timeline) return false;
    const m = p.timeline.match(/Q(\d)\s+(\d{4})/);
    if (!m) return false;
    const releaseDate = new Date(
      parseInt(m[2]!),
      (parseInt(m[1]!) - 1) * 3,
      1,
    );
    return releaseDate >= now && releaseDate <= cutoff;
  }).sort((a, b) => a.priority - b.priority);
}

export function getProductsLaunchingThisYear(year = 2026): Product[] {
  return BOLDMIND_PRODUCTS.filter((p) => {
    if (!p.timeline) return false;
    const m = p.timeline.match(/Q\d\s+(\d{4})/);
    return m ? parseInt(m[1]!) === year : false;
  });
}

export function groupByQuarter(): Map<string, Product[]> {
  const map = new Map<string, Product[]>();
  BOLDMIND_PRODUCTS.forEach((p) => {
    if (!p.timeline) return;
    const m = p.timeline.match(/(Q\d\s+\d{4})/);
    const key = m ? m[1]! : 'Unknown';
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(p);
  });
  return map;
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION L: SUMMARY & REPORTING
// ═══════════════════════════════════════════════════════════════════════════════

export function getProductStatusSummary(): ProductStatusSummary {
  return {
    total: BOLDMIND_PRODUCTS.length,
    live: getLiveProducts().length,
    building: getBuildingProducts().length,
    planned: getPlannedProducts().length,
    concept: getConceptProducts().length,
    revenue: calculateTotalMonthlyRevenue(),
    teamSize: calculateTotalTeamSize(),
    upcomingReleases: getUpcomingReleases(6).length,
  };
}

export function getCategorySummary(): CategorySummary[] {
  const map: Record<string, CategorySummary> = {};
  BOLDMIND_PRODUCTS.forEach((p) => {
    if (!map[p.category]) {
      map[p.category] = {
        category: p.category,
        count: 0,
        live: 0,
        building: 0,
        planned: 0,
        concept: 0,
        revenue: 0,
      };
    }
    const s = map[p.category]!;
    s.count++;
    (s as any)[p.status.toLowerCase()]++;
    s.revenue += p.monthlyRevenue ?? 0;
  });
  return Object.values(map).sort((a, b) => b.count - a.count);
}

export function getQuickStats() {
  const totalRevenue = calculateTotalMonthlyRevenue();
  const developmentCost = calculateTotalDevelopmentCost();
  return {
    totalProducts: BOLDMIND_PRODUCTS.length,
    totalRevenue: `₦${totalRevenue.toLocaleString()}/month`,
    annualRevenue: `₦${calculateAnnualRevenue().toLocaleString()}/year`,
    totalTeamSize: calculateTotalTeamSize(),
    upcomingReleases: getUpcomingReleases(6).length,
    developmentCost: `₦${developmentCost.toLocaleString()}`,
    averageROI: `${developmentCost > 0 ? ((totalRevenue * 12 / developmentCost) * 100).toFixed(1) : 0}%`,
    revenueGeneratingCount: getRevenueGeneratingProducts().length,
    zeroRevenueCount: getZeroRevenueProducts().length,
    pillars: getPillarSummary(),
  };
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION M: HEALTH SCORE ENGINE
// ═══════════════════════════════════════════════════════════════════════════════

export function getProductHealthScore(product: Product): ProductHealthScore {
  const maxRevenue = Math.max(
    ...BOLDMIND_PRODUCTS.map((p) => p.monthlyRevenue ?? 0),
    1,
  );

  const revenueScore = Math.min(100, ((product.monthlyRevenue ?? 0) / maxRevenue) * 100);

  const rawUsers = typeof product.users === 'string'
    ? parseInt(product.users.replace(/[^0-9]/g, ''), 10) || 0
    : (product.users ?? 0);
  const userScore = Math.min(100, (rawUsers / 100_000) * 100);

  const teamScore = Math.min(100, ((product.teamSize ?? 0) / 5) * 100);
  const techScore = Math.min(100, (product.techStack.length / 8) * 100);
  const priorityScore = Math.max(0, 100 - product.priority * 3);

  const overall = Math.round(
    revenueScore * 0.35 +
    userScore * 0.25 +
    teamScore * 0.15 +
    techScore * 0.1 +
    priorityScore * 0.15,
  );

  const rating: ProductHealthScore['rating'] =
    overall >= 75 ? 'excellent' :
    overall >= 50 ? 'good' :
    overall >= 25 ? 'fair' :
    'needs-attention';

  const recommendations: string[] = [];
  if (revenueScore < 20) recommendations.push('Implement a paid tier or charge for setup');
  if (userScore < 10) recommendations.push('Run a WhatsApp/Instagram growth campaign');
  if (teamScore < 20) recommendations.push('Consider hiring a co-founder or contractor');
  if (product.status === 'CONCEPT') recommendations.push('Validate with 5 paying customers before building');
  if (!product.integrations?.length) recommendations.push('Add at least one external integration');
  if (product.pillar === 'conviction' && !product.graduationTarget) {
    recommendations.push('Define a graduationTarget — where this concept will move when it ships');
  }

  return {
    productId: product.id,
    productName: product.name,
    overall,
    breakdown: { revenueScore, userScore, teamScore, techScore, priorityScore },
    rating,
    recommendations,
  };
}

export function getAllHealthScores(): ProductHealthScore[] {
  return BOLDMIND_PRODUCTS.map(getProductHealthScore).sort(
    (a, b) => b.overall - a.overall,
  );
}

export function getProductsNeedingAttention(threshold = 25): Product[] {
  return BOLDMIND_PRODUCTS.filter(
    (p) => getProductHealthScore(p).overall < threshold,
  );
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION N: RELATIONSHIP & RECOMMENDATION ENGINE
// ═══════════════════════════════════════════════════════════════════════════════

export function getRelatedProducts(slug: string, limit = 5): Product[] {
  const target = getProductBySlug(slug);
  if (!target) return [];

  const targetTags = new Set(target.tags);

  return BOLDMIND_PRODUCTS
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      product: p,
      score:
        (p.category === target.category ? 5 : 0) +
        (p.pillar === target.pillar ? 3 : 0) +
        p.tags.filter((t) => targetTags.has(t)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.product);
}

export function suggestProductPairs(): ProductPair[] {
  const pairs: ProductPair[] = [];
  const products = BOLDMIND_PRODUCTS;

  for (let i = 0; i < products.length; i++) {
    for (let j = i + 1; j < products.length; j++) {
      const a = products[i]!;
      const b = products[j]!;

      if (a.category === b.category && a.status === 'LIVE' && b.status === 'LIVE') {
        pairs.push({ a, b, reason: `Both are ${a.category} products` });
        continue;
      }

      // Cross-pillar flywheel pairs are especially valuable
      if (a.pillar !== b.pillar && a.status === 'LIVE' && b.status === 'LIVE') {
        pairs.push({
          a,
          b,
          reason: `Cross-pillar flywheel: ${a.pillar} → ${b.pillar}`,
        });
        continue;
      }

      const sharedIntegrations = a.integrations?.filter((i) =>
        b.integrations?.includes(i),
      );
      if (sharedIntegrations?.length) {
        pairs.push({
          a,
          b,
          reason: `Shared integration: ${sharedIntegrations[0]}`,
        });
      }
    }
  }

  return pairs.slice(0, 20);
}

export function getRecommendedNextBuild(): Product[] {
  const liveSlugs = new Set(getLiveProducts().map((p) => p.slug));

  return getConceptProducts()
    .map((p) => {
      const depsReady = (p.dependencies ?? []).every((d) => liveSlugs.has(d));
      const opportunityScore = (p.opportunities?.join(' ').length ?? 0) / 100;
      const score = (depsReady ? 30 : 0) + opportunityScore + (100 - p.priority);
      return { product: p, score };
    })
    .sort((a, b) => b.score - a.score)
    .map((x) => x.product);
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION O: BUILD WAVE PLANNER
// ═══════════════════════════════════════════════════════════════════════════════

export function generateBuildPlan(): BuildPlan[] {
  const pending = [...getBuildingProducts(), ...getPlannedProducts()];
  const launched = new Set(getLiveProducts().map((p) => p.slug));
  const waves: BuildPlan[] = [];
  let waveNumber = 1;

  while (pending.length > 0) {
    const readyThisWave = pending.filter((p) =>
      (p.dependencies ?? []).every((d) => launched.has(d)),
    );

    if (!readyThisWave.length) break;

    const sorted = readyThisWave.sort((a, b) => a.priority - b.priority);
    const estimatedCost = sorted.reduce(
      (sum, p) => sum + estimateDevelopmentCost(p),
      0,
    );
    const estimatedRevenue = sorted.reduce(
      (sum, p) => sum + (p.monthlyRevenue ?? 0),
      0,
    );
    const maxWeeks = Math.max(
      ...sorted.map((p) => getTimelineMonths(p.timeline) * 4),
      4,
    );

    waves.push({
      wave: waveNumber++,
      products: sorted,
      estimatedCost,
      estimatedMonthlyRevenue: estimatedRevenue,
      durationWeeks: maxWeeks,
      dependencies: Array.from(
        new Set(sorted.flatMap((p) => p.dependencies ?? [])),
      ),
    });

    sorted.forEach((p) => {
      launched.add(p.slug);
      pending.splice(pending.indexOf(p), 1);
    });
  }

  return waves;
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION P: COMPETITIVE GAP ANALYSIS
// ═══════════════════════════════════════════════════════════════════════════════

const CATEGORY_MARKET_SIZES: Record<string, string> = {
  ai: '₦500B+ (Nigerian AI services market)',
  fintech: '₦2T+ (Nigerian fintech market)',
  education: '₦300B+ (Nigerian EdTech market)',
  marketplace: '₦1T+ (Nigerian e-commerce)',
  health: '₦150B+ (Nigerian digital health)',
  media: '₦80B+ (Nigerian digital media)',
  productivity: '₦50B+ (Nigerian SaaS productivity)',
  security: '₦100B+ (Nigerian security tech)',
  utilities: '₦200B+ (Nigerian utilities disruption)',
  social: '₦30B+ (Nigerian creator economy)',
  community: '₦20B+ (Nigerian creator community)',
};

const CATEGORY_MISSING_FEATURES: Record<string, string[]> = {
  ai: ['AI voice agents in Pidgin/Yoruba', 'Offline AI inference for low-data areas', 'AI compliance checker for Nigerian regulations'],
  fintech: ['Crypto off-ramp to Naira', 'BNPL for SMEs', 'Group insurance pooling'],
  education: ['Tertiary institution CBT mock', 'Trade skills certification', 'Scholarship tracker'],
  marketplace: ['Logistics tracking API', 'Escrow-first payments', 'Bulk wholesale ordering'],
  health: ['Mental health chatbot (Pidgin-aware)', 'Telehealth appointments', 'Malaria & typhoid symptom checker'],
  media: ['Nollywood streaming micro-payment', 'Local language podcast hosting', 'Creator NFT collectibles'],
  productivity: ['Offline-first document editor', 'Multi-currency expense tracker', 'Automated Nigerian tax filing'],
  security: ['Community safety reports', 'Digital identity vault', 'Fraud alert for Naira transactions'],
  utilities: ['Water availability tracker', 'Internet service comparison', 'Fuel price aggregator'],
  social: ['Nigerian language keyboard', 'Private family group sharing', 'Local event ticketing'],
  community: ['Elder-led story circles', 'Village square digital meet-ups', 'Intergenerational mentorship'],
};

export function getCompetitorGaps(): CompetitorGap[] {
  const categories = Array.from(
    new Set(BOLDMIND_PRODUCTS.map((p) => p.category)),
  ) as ProductCategory[];

  return categories.map((category) => {
    const products = getProductsByCategory(category);
    const liveCount = products.filter((p) => p.status === 'LIVE').length;
    const opportunityScore = Math.min(
      100,
      100 - liveCount * 15 + products.length * 5,
    );

    return {
      category,
      boldmindCount: products.length,
      estimatedMarketSize: CATEGORY_MARKET_SIZES[category] ?? 'Unknown',
      missingFeatureAreas: CATEGORY_MISSING_FEATURES[category] ?? [],
      opportunityScore,
    };
  }).sort((a, b) => b.opportunityScore - a.opportunityScore);
}

export function getTopOpportunityGap(): CompetitorGap | undefined {
  return getCompetitorGaps()[0];
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION Q: VERSION & DATE UTILITIES
// ═══════════════════════════════════════════════════════════════════════════════

export function getRecentlyUpdatedProducts(days = 30): Product[] {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  return BOLDMIND_PRODUCTS.filter(
    (p) => new Date(p.updatedAt) >= cutoff,
  ).sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );
}

export function getRecentlyCreatedProducts(days = 30): Product[] {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  return BOLDMIND_PRODUCTS.filter(
    (p) => new Date(p.createdAt) >= cutoff,
  ).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export function getStaleProducts(days = 90): Product[] {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  return BOLDMIND_PRODUCTS.filter(
    (p) => new Date(p.updatedAt) < cutoff,
  );
}

function parseSemver(version: string): [number, number, number] {
  const [major = 0, minor = 0, patch = 0] = version
    .split('.')
    .map((n) => parseInt(n, 10));
  return [major, minor, patch];
}

export function getProductsByMinVersion(minVersion: string): Product[] {
  const [minMaj, minMin, minPat] = parseSemver(minVersion);
  return BOLDMIND_PRODUCTS.filter((p) => {
    const [maj, min, pat] = parseSemver(p.version);
    if (maj !== minMaj) return maj > minMaj;
    if (min !== minMin) return min > minMin;
    return pat >= minPat;
  });
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION R: TWA HELPERS
// ═══════════════════════════════════════════════════════════════════════════════

export function getProductsWithTWA(): Product[] {
  return BOLDMIND_PRODUCTS.filter((p) => p.twa !== undefined);
}

export function getTWAByPackageName(packageName: string): Product | undefined {
  return BOLDMIND_PRODUCTS.find((p) => p.twa?.packageName === packageName);
}

export function getAllTWAPackageNames(): string[] {
  return BOLDMIND_PRODUCTS.filter((p) => p.twa).map((p) => p.twa!.packageName);
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION S: SERVICE MODULE HELPERS
// ═══════════════════════════════════════════════════════════════════════════════

export function getProductsByServiceModule(module: string): Product[] {
  return BOLDMIND_PRODUCTS.filter((p) => p.serviceModule === module);
}

export function getAllServiceModules(): string[] {
  return Array.from(new Set(BOLDMIND_PRODUCTS.map((p) => p.serviceModule))).sort();
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION T: SERIALIZATION & API HELPERS
// ═══════════════════════════════════════════════════════════════════════════════

export function serializeProducts(products: Product[]): string {
  return JSON.stringify(products);
}

export function toStaticProps(product: Product): Record<string, unknown> {
  return JSON.parse(JSON.stringify(product));
}

export function buildProductCardMap(): Record<string, ProductCard> {
  return Object.fromEntries(
    BOLDMIND_PRODUCTS.map((p) => [p.slug, toProductCard(p)]),
  );
}

export function getAllProductUrls(): Array<{
  url: string;
  lastModified: string;
  changeFrequency: string;
  priority: number;
}> {
  return BOLDMIND_PRODUCTS.map((p) => ({
    url: getProductWebsiteUrl(p),
    lastModified: p.updatedAt,
    changeFrequency: p.status === 'LIVE' ? 'daily' : 'weekly',
    priority: p.status === 'LIVE' ? 1.0 : 0.7,
  }));
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION U: FONT CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════════

export const BOLDMIND_FONT_CONFIG = {
  default: 'OpenDyslexic, "Comic Sans MS", sans-serif',
  heading: 'OpenDyslexic, "Plus Jakarta Sans", "Inter", sans-serif',
  mono: '"JetBrains Mono", "Fira Code", monospace',
  overrides: {
    'amebogist':     'OpenDyslexic, "Plus Jakarta Sans", sans-serif',
    'educenter':     'OpenDyslexic, "Inter", sans-serif',
    'boldmind-os':   'OpenDyslexic, sans-serif',
    'naija-fit':     'OpenDyslexic, "Inter", sans-serif',
    'boldmind':      'OpenDyslexic, "Plus Jakarta Sans", sans-serif',
    'villagecircle': '"Playfair Display", "Lora", Georgia, serif',
  } as Record<string, string>,
  cssVariable: '--font-body',
  dyslexiaSpacing: {
    letterSpacing: '0.12em',
    wordSpacing: '0.25em',
    lineHeight: '1.8',
  },
} as const;

export function getProductFont(slug: string): string {
  return (
    BOLDMIND_FONT_CONFIG.overrides[slug] ?? BOLDMIND_FONT_CONFIG.default
  );
}

export function generateFontCSS(slug: string): string {
  const font = getProductFont(slug);
  return `
    :root { ${BOLDMIND_FONT_CONFIG.cssVariable}: ${font}; }
    body, * { font-family: var(${BOLDMIND_FONT_CONFIG.cssVariable}); }
  `.trim();
}


// ═══════════════════════════════════════════════════════════════════════════════
// SECTION V: LEGACY HELPERS (unchanged API — backwards compatibility)
// ═══════════════════════════════════════════════════════════════════════════════

export function getProductsByDomainNameLegacy(domain: CoreDomain): Product[] {
  return getProductsByDomainName(domain);
}

export function calculateProjectedRevenue(months = 12): number {
  const liveRevenue = getLiveProducts().reduce(
    (sum, p) => sum + (p.monthlyRevenue ?? 0) * months,
    0,
  );
  const buildingRevenue = getBuildingProducts().length * 100_000 * months * 0.5;
  const plannedRevenue  = getPlannedProducts().length  * 50_000  * months * 0.3;
  const conceptRevenue  = getConceptProducts().length  * 25_000  * months * 0.1;
  return liveRevenue + buildingRevenue + plannedRevenue + conceptRevenue;
}

export function estimateDevelopmentCostLegacy(product: Product): number {
  return estimateDevelopmentCost(product);
}

export function searchProductsLegacy(query: string): Product[] {
  return searchProducts(query);
}


// ═══════════════════════════════════════════════════════════════════════════════
// DEFAULT EXPORT
// ═══════════════════════════════════════════════════════════════════════════════

export default BOLDMIND_PRODUCTS;