// packages/utils/src/constants/products.ts
// BOLDMIND PRODUCTS CATALOG — Rewired for Monorepo Architecture
// Sprint launch: 2 March 2026 | Updated: 27 Feb 2026
//
// ARCHITECTURE RULES:
//  - 10 Next.js apps, 1 NestJS monolith on Railway
//  - Concept products → concept.boldmind.ng/[slug]  (boldmind-concepts app)
//  - B2B tools → tools.boldmind.ng/[tool]            (boldmind-tools app)
//  - All apps share api.boldmind.ng (monolith)
//  - `app` field = which Next.js app hosts this product
//  - `serviceModule` field = which NestJS module handles API

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
  | 'social';

export type DatabaseType = 'postgres' | 'mongodb' | 'both';

// Which Next.js app hosts this product
export type AppHost =
  | 'boldmind-hub'      // boldmind.ng
  | 'planai-suite'      // planai.boldmind.ng
  | 'boldmind-os'       // os.boldmind.ng
  | 'boldmind-tools'    // tools.boldmind.ng
  | 'naija-fit'         // fit.boldmind.ng
  | 'boldmind-concepts' // concept.boldmind.ng (ALL concepts live here)
  | 'amebogist'         // amebogist.ng
  | 'amebo-studio'      // studio.amebogist.ng
  | 'educenter'         // educenter.com.ng
  | 'skillgig';         // skills.educenter.com.ng

// Which NestJS module handles this product's API
export type ServiceModule =
  | 'AuthModule'
  | 'UserModule'
  | 'PaymentModule'
  | 'ContentModule'
  | 'EduCenterModule'
  | 'PlanAIModule'
  | 'FitnessModule'
  | 'AutomationModule'
  | 'MediaModule'
  | 'AIModule'
  | 'ConceptModule'
  | 'AdminModule';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  status: ProductStatus;
  version: string;
  slug: string;
  icon: string;
  // Domain architecture
  domain: string;
  subdomain?: string;    // path route e.g. "/receptionist"
  app: AppHost;          // which Next.js app hosts this
  serviceModule: ServiceModule; // which NestJS module handles API
  // Business
  revenueModel: string;
  monthlyRevenue?: number;
  users?: string | number;
  // Tech
  techStack: string[];
  database: DatabaseType;
  teamSize?: number;
  timeline?: string;
  priority: number;
  dependencies?: string[];
  integrations?: string[];
  tags: string[];
  links?: {
    website?: string;
    github?: string;
    demo?: string;
  };
  features: string[];
  suggestedFeatures?: string[];  // NEW: roadmap ideas
  challenges?: string[];
  opportunities?: string[];
  twa?: {
    packageName: string;
    themeColor: string;
    backgroundColor: string;
  };
  createdAt: string;
  updatedAt: string;
}

// ─────────────────────────────────────────────
// PRODUCT CATALOG
// ─────────────────────────────────────────────

export const BOLDMIND_PRODUCTS: Product[] = [

  {
    id: 'prod_000',
    name: 'BoldMind Hub',
    description: 'Central hub for the BoldMind ecosystem — unified auth, product directory, community, and founder dashboard for 32+ products empowering Nigerian entrepreneurs.',
    category: 'ai',
    status: 'LIVE',
    version: '1.0.0',
    slug: 'boldmind-hub',
    domain: 'boldmind.ng',
    app: 'boldmind-hub',
    serviceModule: 'AdminModule',
    icon: '🚀',
    revenueModel: 'Ecosystem gateway — drives conversion to paid products',
    database: 'postgres',
    monthlyRevenue: 0,
    users: '100+',
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Prisma'],
    teamSize: 1,
    timeline: 'Launched Q4 2025',
    priority: 0,
    tags: ['ecosystem', 'hub', 'portfolio', 'sso', 'admin'],
    links: { website: 'https://boldmind.ng' },
    twa: {
      packageName: 'ng.boldmind.hub',
      themeColor: '#00143C',
      backgroundColor: '#FAFAF9',
    },
    features: [
      'SSO — single login across all 10 apps',
      'Product ecosystem grid (32+ products)',
      'Personalized user dashboard',
      'Role-based access: USER / ADMIN / SUPER_ADMIN',
      'Cross-product subscription management',
      'Community feed for founders & entrepreneurs',
      'Verified business directory',
      'Founder circles & private groups',
      'Waitlist & early access management',
      'Business spotlight & featured listings',
      'Admin command center (stats, user mgmt, revenue)',
      'Real-time activity tracking',
    ],
    suggestedFeatures: [
      'Referral program — earn % on products you refer',
      'BoldMind Points loyalty system (spend on any product)',
      'Founder leaderboard (revenue generated via ecosystem)',
      'API marketplace — sell BoldMind APIs to third parties',
      'Investor pitch deck auto-generator from your product stats',
    ],
    challenges: ['Managing 32+ products', 'SSO consistency across apps'],
    opportunities: ['Ecosystem network effects', 'Investment showcase'],
    createdAt: '2025-01-01',
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_001',
    name: 'AmeboGist',
    description: "Nigeria's #1 Pidgin English platform — AI/Tech, Creator entrepreneurship, Sports, Politics, Entertainment, and Trending Gist. 12k+ users, AdSense monetized.",
    status: 'LIVE',
    version: '1.0.0',
    slug: 'amebogist',
    domain: 'amebogist.ng',
    category: 'media',
    app: 'amebogist',
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
    tags: ['news', 'pidgin', 'nigeria', 'media', 'content'],
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
      'Creator dashboard & earnings',
      'RSS feed for content syndication',
    ],
    suggestedFeatures: [
      'AmeboGist Premium — ad-free reading (₦500/month)',
      'Live Score widget for Nigerian football (embedded)',
      'Pidgin audio articles — text-to-speech in Pidgin accent',
      'Creator tipping — readers tip writers via Paystack',
      'AmeboGist TV — short video news clips (YouTube integration)',
      'Breaking news push notifications via Web Push API',
      'Local Ads — Nigerian SMEs advertise to specific states',
    ],
    challenges: ['Pidgin authenticity', 'Monetization beyond AdSense'],
    opportunities: ['Video content', 'Premium tier', 'Local ad network'],
    createdAt: '2025-01-15',
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_002',
    name: 'EduCenter',
    description: 'Nigerian ed-tech platform: JAMB/WAEC/NECO exam prep with 10k+ past questions, CBT simulator, AI tutoring, and business/digital skills courses.',
    category: 'education',
    status: 'LIVE',
    version: '1.0.0',
    slug: 'educenter',
    domain: 'educenter.com.ng',
    app: 'educenter',
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
      '10,000+ JAMB/WAEC/NECO past questions ALOC API',
      'CBT simulation',
      'Performance analytics',
      'Study streaks',
      'Leaderboard',
      'Course library',
      'Marketing playbooks',
      'AI tools training'
    ],
    suggestedFeatures: [
      'AI essay marking — WAEC essay practice with AI feedback',
      'Live group study sessions (video + whiteboard)',
      'School onboarding — license for 200+ students (B2B)',
      'Certificate courses (LinkedIn-shareable)',
      'Post-UTME practice for specific universities',
      'Teacher dashboard — set assignments, track class progress',
      'SMS result alerts to parents (₦50 per SMS)',
    ],
    challenges: ['User acquisition', 'Content freshness for new exam years'],
    opportunities: ['School B2B licensing', 'Video tutorials', 'Post-UTME niche'],
    createdAt: '2025-03-20',
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_003',
    name: 'AI Receptionist',
    description: 'Multi-tenant AI that handles Instagram DMs and Comment, WhatsApp, and Facebook messages and Comment for Nigerian businesses — auto-qualifies leads, books appointments, answers FAQs 24/7.',
    category: 'ai',
    status: 'LIVE',
    version: '1.0.0',
    slug: 'ai-receptionist',
    domain: 'planai.boldmind.ng',
    subdomain: '/receptionist',
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
      'Facebook Page message handling and comment moderation and Auto-reply to Facebook Page messages and comments',
      'WhatsAPP Business API integration for Nigerian phone numbers',
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
    ],
    challenges: ['Meta API policy changes', 'Client onboarding complexity'],
    opportunities: ['Expand to 50+ clients', 'Enterprise tier', 'White-label reseller program'],
    createdAt: '2025-10-15',
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_004',
    name: 'Social Content Factory',
    description: 'AI-powered content calendar, caption generator, and multi-platform scheduler. Automates posting to Instagram, TikTok, Facebook, Twitter/X, and LinkedIn.',
    category: 'ai',
    status: 'BUILDING',
    version: '0.5.0',
    slug: 'social-factory',
    domain: 'tools.boldmind.ng',
    subdomain: '/social',
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
    ],
    suggestedFeatures: [
      'Nigerian trending topics feed — auto-suggest content based on what\'s viral locally',
      'Pidgin caption mode — one-click convert English to Pidgin',
      'Reels/TikTok video script generator with on-screen text overlay',
      'Competitor analysis — track competitor posting patterns',
      'White-label — agencies resell under their own brand',
      'Content repurpose AI — turn one blog post into 10 social posts',
    ],
    challenges: ['API rate limits per platform', 'Quality control for AI output'],
    opportunities: ['Nigerian creator market (huge)', 'Agency white-label', 'BoldMind internal use'],
    createdAt: '2025-11-01',
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_005',
    name: 'BoldMind OS',
    description: 'Personal operating system for neurodivergent Nigerian entrepreneurs — ADHD-friendly task management, Pomodoro, voice capture, knowledge graph, and Dyslexia Mode.',
    category: 'productivity',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'boldmind-os',
    domain: 'os.boldmind.ng',
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_006',
    name: 'NaijaFit',
    description: 'Nigerian fitness and wellness platform — workout plans (gym & outdoor), Nigerian meal tracking (jollof, egusi, suya calories), AI coach, and community challenges.',
    category: 'health',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'naija-fit',
    domain: 'fit.boldmind.ng',
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
      'Connect with NaijaGig Matcher — hire local personal trainers',
    ],
    challenges: ['Nigerian nutrition database accuracy', 'User retention post-30-days'],
    opportunities: ['Corporate wellness B2B', 'Instagram fitness creator partnerships'],
    createdAt: '2025-12-26',
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_007',
    name: 'EmailScraper Pro',
    description: 'Nigerian B2B email discovery — find verified contact emails from LinkedIn profiles, business directories, and company websites. Bulk export, API access.',
    category: 'productivity',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'emailscraper-pro',
    domain: 'tools.boldmind.ng',
    subdomain: '/emailscraper',
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
    integrations: ['LinkedIn', 'Hunter.io', 'CRC Nigeria Business Registry'],
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
      'Intent signals — scrape companies that recently raised funding or posted job ads',
      'Chrome extension — one-click save while browsing LinkedIn',
    ],
    challenges: ['Privacy regulation compliance', 'LinkedIn rate limiting'],
    opportunities: ['Sales team subscriptions', 'Recruitment agencies', 'BoldMind internal use'],
    createdAt: '2025-12-26',
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_008',
    name: 'Professional Credibility Hubs',
    description: 'AI-assisted personal branding — instant portfolio site, LinkedIn profile optimizer, and resume generator designed for Nigerian professionals.',
    category: 'ai',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'credibility-hubs',
    domain: 'planai.boldmind.ng',
    subdomain: '/credibility',
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_009',
    name: 'AI Business Planning',
    description: 'Generate bank-ready Nigerian business plans, pitch decks, and market analysis using AI — in under 10 minutes.',
    category: 'ai',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'business-planning',
    domain: 'planai.boldmind.ng',
    subdomain: '/planning',
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
      'TON Bank-compatible format (meets Nigerian bank loan templates)',
      'SON/NAFDAC regulatory checklist per industry',
      'Investor match — connect plan to Nigerian VCs/angels',
      'Update-as-you-grow (re-generate plan with new data)',
    ],
    challenges: ['Nigerian market data accuracy', 'Keeping AI output legally compliant'],
    opportunities: ['Bank loan requirement pipeline', 'Government grant applications'],
    createdAt: '2025-12-26',
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_010',
    name: 'Financial Forecasting',
    description: 'AI cashflow modeling and revenue forecasting for Nigerian SMEs — visualize your next 12 months, run scenarios, detect financial risks early.',
    category: 'ai',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'financial-forecasting',
    domain: 'planai.boldmind.ng',
    subdomain: '/finance',
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_011',
    name: 'Investor Readiness Suite',
    description: 'Automated funding documentation for Nigerian startups — SAFE agreements, data room setup, cap table management, and due diligence checklists.',
    category: 'ai',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'investor-readiness',
    domain: 'planai.boldmind.ng',
    subdomain: '/investor',
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_012',
    name: 'Branding & Design Tools',
    description: 'AI logo generator, brand kit creator, and marketing visual maker — designed for Nigerian SMEs who need professional branding without a designer.',
    category: 'ai',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'branding-design',
    domain: 'planai.boldmind.ng',
    subdomain: '/design',
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_013',
    name: 'Digital Storefronts',
    description: 'Launch an online store in 5 minutes — Paystack payments, inventory management, WhatsApp order notifications, and a shareable link for Nigerian SMEs.',
    category: 'marketplace',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'digital-storefronts',
    domain: 'planai.boldmind.ng',
    subdomain: '/store',
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_014',
    name: 'Marketing Automation',
    description: 'AI-driven email campaigns, WhatsApp broadcast sequences, and lead nurturing for Nigerian businesses — with local compliance built in.',
    category: 'ai',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'marketing-automation',
    domain: 'planai.boldmind.ng',
    subdomain: '/marketing',
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_015',
    name: 'Analytics Dashboard',
    description: 'Cross-platform business intelligence — unify Instagram, TikTok, Paystack, and website analytics into one Nigerian entrepreneur-friendly dashboard.',
    category: 'ai',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'analytics-dashboard',
    domain: 'planai.boldmind.ng',
    subdomain: '/analytics',
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
    opportunities: ['Nigerian agency market (they need this)'],
    createdAt: '2025-12-26',
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_016',
    name: 'SAFE AI',
    description: 'AI-powered security intelligence for Nigerian law enforcement — digital incident reporting, criminal pattern analysis, and officer communication platform.',
    category: 'security',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'safe-ai',
    domain: 'concept.boldmind.ng',
    subdomain: '/safe',
    app: 'boldmind-concepts',
    serviceModule: 'ConceptModule',
    icon: '🛡️',
    database: 'postgres',
    revenueModel: 'Government contracts (₦5M+ deployment)',
    monthlyRevenue: 0,
    techStack: ['React Native', 'NestJS', 'PostgreSQL', 'TensorFlow', 'Offline-first'],
    teamSize: 5,
    timeline: 'Q1 2027 (requires government partnership)',
    priority: 16,
    integrations: ['NIN database (NIMC)', 'GIS/Mapping', 'Body camera APIs'],
    tags: ['security', 'law-enforcement', 'ai', 'government', 'nigeria'],
    links: { website: 'https://concept.boldmind.ng/safe' },
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
    opportunities: ['₦100B+ Nigerian government tech spending', 'Private security firms'],
    createdAt: '2025-12-26',
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_017',
    name: 'AfroHustle OS',
    description: 'Notion-style workspace with 100 proven side-hustle blueprints for Nigerian entrepreneurs — step-by-step guides to start, grow, and monetize.',
    category: 'education',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'afrohustle-os',
    domain: 'concept.boldmind.ng',
    subdomain: '/afrohustle',
    app: 'boldmind-concepts',
    serviceModule: 'ConceptModule',
    icon: '💼',
    database: 'mongodb',
    revenueModel: 'One-time: ₦5k | Monthly: ₦2k',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'MongoDB', 'Block editor (Tiptap)'],
    teamSize: 2,
    timeline: 'Q3 2026',
    priority: 17,
    tags: ['side-hustle', 'education', 'templates', 'entrepreneur', 'nigeria'],
    links: { website: 'https://concept.boldmind.ng/afrohustle' },
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_018',
    name: 'NaijaGig Matcher',
    description: 'Hyper-local gig marketplace for Nigerian artisans and service providers — plumbers, tailors, makeup artists, electricians — matched by location, same-day payout.',
    category: 'marketplace',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'naijagig-matcher',
    domain: 'concept.boldmind.ng',
    subdomain: '/naijagig',
    app: 'boldmind-concepts',
    serviceModule: 'ConceptModule',
    icon: '🔧',
    database: 'mongodb',
    revenueModel: 'Commission: 10-15% per booking',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'Google Maps API', 'Paystack', 'BullMQ'],
    teamSize: 3,
    timeline: 'Q3 2026',
    priority: 18,
    integrations: ['Google Maps', 'Paystack', 'WhatsApp notifications'],
    tags: ['marketplace', 'gigs', 'artisans', 'local', 'nigeria'],
    links: { website: 'https://concept.boldmind.ng/naijagig' },
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_019',
    name: 'KoloAI',
    description: 'Digital Ajo/Esusu thrift collector with AI default prediction — manage group savings, auto-pause risky members, send reminders, and track contributions.',
    category: 'fintech',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'kolo-ai',
    domain: 'concept.boldmind.ng',
    subdomain: '/kolo',
    app: 'boldmind-concepts',
    serviceModule: 'ConceptModule',
    icon: '👥',
    database: 'postgres',
    revenueModel: 'Per group: ₦5k-₦10k/month',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'Prisma', 'OpenAI', 'Paystack'],
    teamSize: 3,
    timeline: 'Q4 2026',
    priority: 19,
    integrations: ['Paystack', 'WhatsApp notifications', 'BVN verification'],
    tags: ['fintech', 'thrift', 'ajo', 'esusu', 'savings', 'ai'],
    links: { website: 'https://concept.boldmind.ng/kolo' },
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_020',
    name: 'BorderlessRemit Tracker',
    description: 'Real-time Nigerian remittance rate comparison — bank rates vs parallel market, receipt generator, affiliate links, and rate alerts for diaspora.',
    category: 'fintech',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'borderless-remit',
    domain: 'concept.boldmind.ng',
    subdomain: '/remit',
    app: 'boldmind-concepts',
    serviceModule: 'ConceptModule',
    icon: '💱',
    database: 'mongodb',
    revenueModel: 'Affiliate commissions (₦2k-₦10k per referred transfer)',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'Real-time rate APIs', 'Resend (alerts)'],
    teamSize: 2,
    timeline: 'Q4 2026',
    priority: 20,
    integrations: ['Remita', 'Wise API', 'WorldRemit affiliate'],
    tags: ['fintech', 'remittance', 'diaspora', 'forex', 'nigeria'],
    links: { website: 'https://concept.boldmind.ng/remit' },
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_021',
    name: 'ReceiptGenius NG',
    description: 'Instant VAT-compliant invoice and receipt generator for Nigerian SMEs — create, send via SMS/WhatsApp/email, and track all transactions in one place.',
    category: 'fintech',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'receipt-genius',
    domain: 'concept.boldmind.ng',
    subdomain: '/receipt',
    app: 'boldmind-concepts',
    serviceModule: 'ConceptModule',
    icon: '🧾',
    database: 'postgres',
    revenueModel: 'Subscription: ₦1k/month | ₦10k/year',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'Prisma', 'Resend', 'Termii SMS', 'PDF generation'],
    teamSize: 2,
    timeline: 'Q4 2026',
    priority: 21,
    integrations: ['Termii (SMS)', 'Resend (email)', 'FIRS TIN validation'],
    tags: ['fintech', 'invoicing', 'receipts', 'vat', 'nigeria', 'sme'],
    links: { website: 'https://concept.boldmind.ng/receipt' },
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_022',
    name: 'PowerAlert NG',
    description: 'Crowd-sourced NEPA/EKEDC light availability tracker by area + solar calculator — know when light is on near you before going home.',
    category: 'utilities',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'power-alert',
    domain: 'concept.boldmind.ng',
    subdomain: '/power',
    app: 'boldmind-concepts',
    serviceModule: 'ConceptModule',
    icon: '⚡',
    database: 'mongodb',
    revenueModel: 'Lead gen to solar installers (₦2k-₦5k/lead)',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'Google Maps API', 'MongoDB', 'Push notifications'],
    teamSize: 2,
    timeline: 'Q4 2026',
    priority: 22,
    integrations: ['Google Maps', 'Solar installer directory', 'Push notifications'],
    tags: ['utilities', 'energy', 'nepa', 'solar', 'nigeria', 'crowdsource'],
    links: { website: 'https://concept.boldmind.ng/power' },
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_023',
    name: 'FarmGate Direct',
    description: 'Direct farmer-to-buyer marketplace — cuts out middlemen, farmers post produce, buyers (hotels, restaurants, markets) buy directly with quality guarantee.',
    category: 'marketplace',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'farmgate-direct',
    domain: 'concept.boldmind.ng',
    subdomain: '/farmgate',
    app: 'boldmind-concepts',
    serviceModule: 'ConceptModule',
    icon: '🌾',
    database: 'mongodb',
    revenueModel: 'Commission: 3-5% | Listing: ₦3k/season',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'MongoDB', 'GIG Logistics API', 'Paystack'],
    teamSize: 4,
    timeline: 'Q4 2026',
    priority: 23,
    integrations: ['GIG Logistics', 'Paystack', 'WeatherAPI'],
    tags: ['agriculture', 'marketplace', 'farmers', 'food-security', 'nigeria'],
    links: { website: 'https://concept.boldmind.ng/farmgate' },
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
    opportunities: ['$6B+ Nigerian agricultural trade, massive inefficiencies to fix'],
    createdAt: '2025-12-26',
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_024',
    name: 'AfroCopy AI',
    description: 'African-first AI copywriting tool — generates ads, captions, emails, and blog posts in Pidgin English, Yoruba, Igbo, Hausa, and local marketing voice.',
    category: 'ai',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'afrocopy-ai',
    domain: 'concept.boldmind.ng',
    subdomain: '/afrocopy',
    app: 'boldmind-concepts',
    serviceModule: 'ConceptModule',
    icon: '✍️',
    database: 'mongodb',
    revenueModel: 'Subscription: ₦2k/month (Solo) | ₦5k (Agency)',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'OpenAI fine-tuned', 'MongoDB'],
    teamSize: 3,
    timeline: 'Q4 2026',
    priority: 24,
    tags: ['ai', 'copywriting', 'pidgin', 'yoruba', 'igbo', 'african', 'marketing'],
    links: { website: 'https://concept.boldmind.ng/afrocopy' },
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_025',
    name: 'Skill2Cash Board',
    description: 'Anonymous skill marketplace for Gen-Z Nigerians — post a 30-second video of your skill (DJ, makeup, tailoring), get booked instantly, no CV required.',
    category: 'marketplace',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'skill2cash',
    domain: 'concept.boldmind.ng',
    subdomain: '/skill2cash',
    app: 'boldmind-concepts',
    serviceModule: 'ConceptModule',
    icon: '🎭',
    database: 'mongodb',
    revenueModel: 'Listing: ₦500/month | Commission: 10% per booking',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'Cloudflare Stream (video)', 'Paystack escrow', 'MongoDB'],
    teamSize: 3,
    timeline: 'Q4 2026',
    priority: 25,
    integrations: ['Cloudflare Stream', 'Paystack (escrow)'],
    tags: ['marketplace', 'gigs', 'gen-z', 'creative', 'video', 'nigeria'],
    links: { website: 'https://concept.boldmind.ng/skill2cash' },
    features: [
      '30-second video skill showcase (no CV)',
      'Skills: DJ, makeup, tailoring, photography, catering',
      'Instant booking & scheduling',
      'Paystack escrow (safe payments)',
      'Optional anonymous profiles',
      'Skill categories & search',
    ],
    suggestedFeatures: [
      'EduCenter integration — skill → course → job pipeline',
      'Skill verification challenges (prove you can do what you claim)',
      'Collab matching — DJ + photographer + makeup artist for an event',
      'Student income tracker for university financial aid proof',
    ],
    challenges: ['Video hosting cost', 'Safety/vetting of anonymous users'],
    opportunities: ['Nigeria\'s youth unemployment crisis — millions of skilled Gen-Z'],
    createdAt: '2025-12-26',
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_026',
    name: 'AnonTruth Mic',
    description: 'Temporary anonymous audio drops for whistleblowers — voice-distorted, auto-deleted, location-targeted truth drops that expire in 24-72 hours.',
    category: 'social',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'anontruth-mic',
    domain: 'concept.boldmind.ng',
    subdomain: '/anon',
    app: 'boldmind-concepts',
    serviceModule: 'ConceptModule',
    icon: '🎤',
    database: 'mongodb',
    revenueModel: 'Boost feature (₦500-₦1k per boost)',
    monthlyRevenue: 0,
    techStack: ['Next.js 15', 'Audio encryption', 'Geolocation', 'Auto-delete jobs (BullMQ)'],
    teamSize: 4,
    timeline: 'Q4 2026 (HIGH RISK — requires legal review)',
    priority: 26,
    tags: ['social', 'anonymous', 'audio', 'whistleblower', 'journalism'],
    links: { website: 'https://concept.boldmind.ng/anon' },
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
    opportunities: ['Whistleblower journalism is underserved in Nigeria', 'Partnership with investigative outlets'],
    createdAt: '2025-12-26',
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_027',
    name: 'AmeboGist TWA',
    description: 'Android app (Trusted Web Activity) — AmeboGist as a Play Store app with push notifications, offline reading, and mobile AdSense.',
    category: 'media',
    status: 'PLANNED',
    version: '0.1.0',
    slug: 'amebogist-twa',
    domain: 'amebogist.ng',
    app: 'amebogist',
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_028',
    name: 'EduCenter TWA',
    description: 'Android app for EduCenter — JAMB/WAEC practice on mobile with offline question packs, in-app subscriptions, and parent tracking.',
    category: 'education',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'educenter-twa',
    domain: 'educenter.com.ng',
    app: 'educenter',
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_029',
    name: 'BoldMind OS TWA',
    description: 'Android companion for BoldMind OS — mobile focus timer, voice capture, quick task add, and offline sync.',
    category: 'productivity',
    status: 'PLANNED',
    version: '0.1.0',
    slug: 'boldmind-os-twa',
    domain: 'os.boldmind.ng',
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_030',
    name: 'NaijaFit TWA',
    description: 'Android app for NaijaFit — mobile workouts, Nigerian meal logging, progress photos, community challenges, and AI coach chat on mobile.',
    category: 'health',
    status: 'PLANNED',
    version: '0.1.0',
    slug: 'naija-fit-twa',
    domain: 'fit.boldmind.ng',
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_031',
    name: 'EmailScraper TWA',
    description: 'Android app for EmailScraper Pro — business card scanning, contact lookup, and lead list management on mobile.',
    category: 'productivity',
    status: 'PLANNED',
    version: '0.1.0',
    slug: 'emailscraper-twa',
    domain: 'tools.boldmind.ng',
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
    updatedAt: '2026-02-27',
  },

  {
    id: 'prod_032',
    name: 'SAFE AI Native',
    description: 'Full React Native app for police officers — offline-first incident reporting, GPS evidence tagging, voice-to-text (Pidgin + English), and photo evidence management.',
    category: 'security',
    status: 'PLANNED',
    version: '0.1.0',
    slug: 'safe-ai-native',
    domain: 'concept.boldmind.ng',
    app: 'boldmind-concepts',
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
    features: [
      'Offline incident reporting (works without internet)',
      'Voice-to-text in Pidgin & English (Whisper)',
      'GPS-tagged evidence photos & videos',
      'Real-time officer dispatch',
      'Secure evidence chain of custody',
    ],
    createdAt: '2025-12-26',
    updatedAt: '2026-02-27',
  },
];


export const APP_PRODUCT_MAP: Record<AppHost, string[]> = {
  'boldmind-hub': ['boldmind-hub'],
  'planai-suite': [
    'ai-receptionist', 'credibility-hubs', 'business-planning',
    'financial-forecasting', 'investor-readiness', 'branding-design',
    'digital-storefronts', 'marketing-automation', 'analytics-dashboard',
  ],
  'boldmind-os': ['boldmind-os', 'boldmind-os-twa'],
  'boldmind-tools': ['social-factory', 'emailscraper-pro', 'emailscraper-twa'],
  'naija-fit': ['naija-fit', 'naija-fit-twa'],
  'boldmind-concepts': [
    'safe-ai', 'afrohustle-os', 'naijagig-matcher', 'kolo-ai',
    'borderless-remit', 'receipt-genius', 'power-alert', 'farmgate-direct',
    'afrocopy-ai', 'skill2cash', 'anontruth-mic', 'safe-ai-native',
  ],
  'amebogist': ['amebogist', 'amebogist-twa'],
  'amebo-studio': [],
  'educenter': ['educenter', 'educenter-twa'],
  'skillgig': ['skill2cash'],  // skillgig app hosts skill2cash when it graduates from concept
};


export const CONCEPT_MODULE_PRODUCTS = BOLDMIND_PRODUCTS
  .filter(p => p.serviceModule === 'ConceptModule')
  .map(p => p.slug);

export function getProductById(id: string): Product | undefined {
  return BOLDMIND_PRODUCTS.find(p => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return BOLDMIND_PRODUCTS.find(p => p.slug === slug);
}

export function getProductsByStatus(status: ProductStatus): Product[] {
  return BOLDMIND_PRODUCTS.filter(p => p.status === status);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return BOLDMIND_PRODUCTS.filter(p => p.category === category);
}

export function getProductsByApp(app: AppHost): Product[] {
  return BOLDMIND_PRODUCTS.filter(p => p.app === app);
}

export function getProductsByServiceModule(module: ServiceModule): Product[] {
  return BOLDMIND_PRODUCTS.filter(p => p.serviceModule === module);
}

export function getConceptProducts(): Product[] {
  return getProductsByStatus('CONCEPT');
}

export function getPlannedProducts(): Product[] {
  return getProductsByStatus('PLANNED');
}

export function getLiveProducts(): Product[] {
  return getProductsByStatus('LIVE');
}

export function getBuildingProducts(): Product[] {
  return getProductsByStatus('BUILDING');
}

export function getSprintProducts(): Product[] {
  // Products to focus on for March-May 2026 sprint
  return BOLDMIND_PRODUCTS.filter(p => p.priority <= 10 && p.status !== 'CONCEPT');
}

export function getPlanAISuiteProducts(): Product[] {
  return getProductsByApp('planai-suite');
}

export function getConceptHubProducts(): Product[] {
  return getProductsByApp('boldmind-concepts');
}

export function getProductFullUrl(product: Product): string {
  if (product.subdomain) {
    return `https://${product.domain}${product.subdomain}`;
  }
  return `https://${product.domain}`;
}

export function calculateTotalMonthlyRevenue(): number {
  return BOLDMIND_PRODUCTS.reduce((total, p) => total + (p.monthlyRevenue || 0), 0);
}

export function getProductStatusSummary() {
  return {
    total: BOLDMIND_PRODUCTS.length,
    live: getLiveProducts().length,
    building: getBuildingProducts().length,
    planned: getProductsByStatus('PLANNED').length,
    concept: getConceptProducts().length,
    revenue: calculateTotalMonthlyRevenue(),
    inConceptHub: getConceptHubProducts().length,
  };
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return BOLDMIND_PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.tags.some(t => t.includes(q)) ||
    p.slug.includes(q)
  );
}

export default BOLDMIND_PRODUCTS;