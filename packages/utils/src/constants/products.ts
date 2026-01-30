// packages/utils/src/constants/products.ts
// COMPLETE BOLDMIND PRODUCTS CATALOG - Updated Jan 18, 2026
// Full blow lauch 19/1/2026

export type ProductStatus = 'LIVE' | 'BUILDING' | 'PLANNED' | 'CONCEPT';
export type ProductCategory = 'media' | 'education' | 'ai' | 'productivity' | 'security' | 'health' | 'marketplace' | 'fintech' | 'utilities' | 'social';
export type DatabaseType = 'postgres' | 'mongodb';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  status: ProductStatus;
  version: string;
  slug: string;
  icon: string;
  domain: string;
  subdomain?: string;
  revenueModel: string;
  monthlyRevenue?: number;
  users?: string | number;
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
    figma?: string;
  };
  features: string[];
  challenges?: string[];
  opportunities?: string[];
  createdAt: string;
  updatedAt: string;
}


export const PRODUCT_CATEGORIES = [
  { id: 'media', name: 'Media & Content', count: 2 },
  { id: 'education', name: 'Education', count: 3 },
  { id: 'ai', name: 'AI Automation', count: 13 },
  { id: 'productivity', name: 'Productivity', count: 5 },
  { id: 'lead-gen', name: 'Lead Generation', count: 2 },
  { id: 'security', name: 'Security', count: 2 },
  { id: 'health', name: 'Health & Wellness', count: 2 },
  { id: 'marketplace', name: 'Marketplaces', count: 6 },
  { id: 'fintech', name: 'Fintech', count: 5 },
  { id: 'utilities', name: 'Utilities', count: 2 },
  { id: 'marketing', name: 'Marketing', count: 2 },
  { id: 'social', name: 'Social', count: 2 },
];


export const BOLDMIND_PRODUCTS: Product[] = [
  {
    id: 'prod_000',
    name: 'BoldMind Hub',
    description: 'Central hub for the BoldMind Technology Solution Enterprise ecosystem - showcasing 31+ innovative products empowering Nigerian entrepreneurs.',
    category: 'ai',
    status: 'LIVE',
    version: '1.0.0',
    slug: 'boldmind-hub',
    domain: 'boldmind.ng',
    icon: '🚀',
    revenueModel: 'Portfolio management',
    database: 'postgres',
    monthlyRevenue: 0,
    users: '100+',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Prisma', 'Neon'],
    teamSize: 1,
    timeline: 'Launched Q4 2025',
    priority: 0,
    tags: ['ecosystem', 'hub', 'portfolio', 'showcase'],
    links: { website: 'https://boldmind.ng' },
    features: [
      'Product ecosystem dashboard',
      'Real-time revenue tracking',
      'Team management',
      'Product launch roadmap',
      'Entrepreneur resources',
      'Authentication system',
      'User profiles'
    ],
    challenges: ['Managing 31+ products', 'Resource allocation'],
    opportunities: ['Ecosystem partnerships', 'Investment opportunities'],
    createdAt: '2025-01-01',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_001',
    name: 'AmeboGist',
    description: 'Nigeria\'s #1 Pidgin English platform led by AI/Tech education 🤖 and Creator entrepreneurship ✍️, plus Sports ⚽, Politics 🏛️, Entertainment 🎭, and Trending Gist 🔥.',
    status: 'LIVE',
    version: '1.0.0',
    slug: 'amebogist',
    domain: 'amebogist.ng',
    category: 'media',
    icon: '📰',
    database: 'mongodb',
    revenueModel: 'AdSense + Affiliate + Local Ads',
    monthlyRevenue: 15000,
    users: '12,000+',
    techStack: ['Next.js', 'MongoDB', 'PWA', 'Tailwind CSS', 'AI Tools'],
    teamSize: 2,
    timeline: 'Launched Q2 2025',
    priority: 1,
    integrations: ['Google AdSense', 'Meta API', 'Paystack'],
    tags: ['news', 'pidgin', 'nigeria', 'ai-tech', 'content'],
    links: { website: 'https://amebogist.ng' },
    features: [
      'AI & Tech Amebo',
      'Creator Life guidance',
      'Sports coverage',
      'Politics analysis',
      'Entertainment news',
      'Trending gists',
      'SEO-optimized content',
      'PWA experience'
    ],
    challenges: ['Pidgin authenticity', 'Content balance', 'Monetization'],
    opportunities: ['Video content', 'Marketplace', 'Masterclasses', 'Premium tier'],
    createdAt: '2025-01-15',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_002',
    name: 'EduCenter',
    description: 'A comprehensive Nigerian ed-tech platform combining exam prep (JAMB/WAEC/NECO), digital business education, and AI skills training.',
    category: 'education',
    status: 'LIVE',
    version: '1.0.0',
    slug: 'educenter',
    domain: 'educenter.com.ng',
    icon: '🎓',
    database: 'postgres',
    revenueModel: 'Subscription (₦3k/month)',
    monthlyRevenue: 60000,
    users: '20',
    techStack: ['Next.js', 'Prisma', 'Neon', 'Paystack', 'PWA'],
    teamSize: 2,
    timeline: 'Launched Q3 2025',
    priority: 2,
    integrations: ['Paystack', 'WhatsApp API'],
    tags: ['education', 'jamb', 'waec', 'neco', 'nigeria'],
    links: { website: 'https://educenter.com.ng' },
    features: [
      '10,000+ past questions',
      'CBT simulation',
      'Performance analytics',
      'Study streaks',
      'Leaderboard',
      'Course library',
      'Marketing playbooks',
      'AI tools training'
    ],
    challenges: ['User acquisition', 'Content expansion'],
    opportunities: ['More exam types', 'Video tutorials', 'Live classes'],
    createdAt: '2025-03-20',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_003',
    name: 'AI Receptionist',
    description: 'Multi-tenant AI-powered lead capture and booking system',
    category: 'ai',
    status: 'LIVE',
    version: '1.0.0',
    slug: 'ai-receptionist',
    domain: 'planai.boldmind.ng',
    subdomain: '/receptionist',
    icon: '🤖',
    database: 'postgres',
    revenueModel: 'Monthly (₦20k-₦50k/client)',
    monthlyRevenue: 20000,
    users: '1',
    techStack: ['Next.js', 'NestJS', 'Meta Graph API', 'Webhooks'],
    teamSize: 1,
    timeline: 'Deployed Q4 2025',
    priority: 3,
    dependencies: ['planai-suite'],
    integrations: ['Meta API', 'WhatsApp', 'Instagram', 'Facebook'],
    tags: ['ai', 'automation', 'customer-service', 'whatsapp'],
    links: { website: 'https://planai.boldmind.ng/receptionist' },
    features: [
      'Auto-reply DMs',
      'Lead qualification',
      'Appointment booking',
      'Multi-platform',
      'Analytics dashboard'
    ],
    challenges: ['Client onboarding', 'API changes'],
    opportunities: ['More clients', 'Enterprise', 'SMS integration'],
    createdAt: '2025-10-15',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_004',
    name: 'Social Media Content Factory',
    description: 'Automated video content generation and multi-channel publishing',
    category: 'ai',
    status: 'BUILDING',
    version: '0.5.0',
    slug: 'social-factory',
    domain: 'social.boldmind.ng',
    icon: '🎬',
    database: 'mongodb',
    revenueModel: 'Subscription + usage',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'n8n', 'AI Models', 'Meta API'],
    teamSize: 2,
    timeline: 'Q2 2026 (12 weeks)',
    priority: 4,
    integrations: ['YouTube', 'Instagram', 'Facebook', 'Twitter', 'TikTok'],
    tags: ['content', 'video', 'social-media', 'automation'],
    links: { website: 'https://social.boldmind.ng' },
    features: [
      'AI video generation',
      'Multi-platform publishing',
      'Content calendar',
      'Analytics aggregation',
      'n8n workflows'
    ],
    challenges: ['API limits', 'Quality control'],
    opportunities: ['Agency partnerships', 'White-label'],
    createdAt: '2025-11-01',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_005',
    name: 'BoldMind OS',
    description: 'Personal operating system for neurodivergent entrepreneurs',
    category: 'productivity',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'boldmind-os',
    domain: 'os.boldmind.ng',
    icon: '🧠',
    database: 'postgres',
    revenueModel: 'Freemium (Free/₦5k/₦15k)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'NestJS', 'Prisma', 'OpenAI', 'Supabase'],
    teamSize: 3,
    timeline: 'Q2 2026 MVP',
    priority: 5,
    integrations: ['n8n', 'OpenAI', 'Whisper', 'Supabase'],
    tags: ['productivity', 'adhd', 'dyslexia', 'ai', 'neurodivergent'],
    links: { website: 'https://os.boldmind.ng' },
    features: [
      'Multi-modal capture',
      'ADHD-friendly Pomodoro',
      'Visual knowledge graph',
      'Content pipeline',
      'Analytics',
      'Dyslexia Mode'
    ],
    challenges: ['Complex UI/UX', 'Performance'],
    opportunities: ['Therapist partnerships', 'Research', 'Enterprise'],
    createdAt: '2025-12-01',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_006',
    name: 'Naija FitHer',
    description: 'Weight loss and wellness platform for Nigerian women',
    category: 'health',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'naija-fither',
    domain: 'fit.boldmind.ng',
    icon: '💪',
    database: 'postgres',
    revenueModel: 'Freemium (₦3k/month)',
    monthlyRevenue: 0,
    techStack: ['React Native', 'NestJS', 'Prisma', 'AI APIs'],
    teamSize: 4,
    timeline: 'Q2 2026 MVP',
    priority: 6,
    integrations: ['WhatsApp', 'Fitness trackers', 'Nutrition DB'],
    tags: ['health', 'fitness', 'women', 'weight-loss', 'nigeria'],
    links: { website: 'https://fit.boldmind.ng' },
    features: [
      'Nigerian meal plans',
      'Home workouts',
      'Community support',
      'Health tracking',
      'AI wellness coach',
      '500+ Nigerian dishes'
    ],
    challenges: ['Nutrition data', 'User retention'],
    opportunities: ['Corporate wellness', 'Insurance partnerships'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_007',
    name: 'EmailScraper Pro',
    description: 'Advanced email discovery and verification for Nigerian B2B market',
    category: 'productivity',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'emailscraper-pro',
    domain: 'email.boldmind.ng',
    icon: '🔍',
    database: 'mongodb',
    revenueModel: 'Tiered (Free/₦5k/₦15k/₦50k)',
    monthlyRevenue: 0,
    techStack: ['NestJS', 'MongoDB', 'Custom scraper', 'Hunter.io'],
    teamSize: 2,
    timeline: 'Q2 2026',
    priority: 7,
    integrations: ['LinkedIn', 'Hunter.io', 'CRM systems'],
    tags: ['lead-gen', 'sales', 'email', 'b2b'],
    links: { website: 'https://email.boldmind.ng' },
    features: [
      'Email finding',
      'Real-time verification',
      'Lead enrichment',
      'Bulk CSV ops',
      'API access',
      'Nigerian directory scraping'
    ],
    challenges: ['Privacy regulations', 'API limits'],
    opportunities: ['Sales partnerships', 'Recruitment agencies'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_008',
    name: 'Professional Credibility Hubs',
    description: 'AI-assisted personal branding and portfolio sites',
    category: 'ai',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'credibility-hubs',
    domain: 'planai.boldmind.ng',
    subdomain: '/credibility',
    icon: '💼',
    database: 'postgres',
    revenueModel: 'One-time (₦5k-₦15k)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'AI APIs', 'Tailwind'],
    teamSize: 1,
    timeline: 'Q2 2026',
    priority: 8,
    dependencies: ['planai-suite'],
    integrations: ['LinkedIn API', 'Resume parsers'],
    tags: ['portfolio', 'branding', 'resume'],
    links: { website: 'https://planai.boldmind.ng/credibility' },
    features: [
      'Portfolio builder',
      'LinkedIn optimizer',
      'Resume generator',
      'AI branding coach',
      'Templates library'
    ],
    challenges: ['Design variations', 'Export formats'],
    opportunities: ['University partnerships', 'Recruiter tools'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_009',
    name: 'AI Business Planning',
    description: 'Generate dynamic business plans and market analysis',
    category: 'ai',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'business-planning',
    domain: 'planai.boldmind.ng',
    subdomain: '/planning',
    icon: '📊',
    database: 'postgres',
    revenueModel: 'Per plan (₦10k)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'AI APIs', 'Chart.js'],
    teamSize: 2,
    timeline: 'Q2 2026',
    priority: 9,
    dependencies: ['planai-suite'],
    integrations: ['Financial APIs', 'Market data'],
    tags: ['business', 'planning', 'market-analysis'],
    links: { website: 'https://planai.boldmind.ng/planning' },
    features: [
      'AI business plans',
      'Pitch deck creator',
      'Nigerian market analysis',
      'Financial projections',
      'Competitor analysis'
    ],
    challenges: ['Market data accuracy', 'Financial modeling'],
    opportunities: ['Bank partnerships', 'Government grants'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_010',
    name: 'Financial Forecasting',
    description: 'AI-driven cashflow modeling and revenue forecasting',
    category: 'ai',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'financial-forecasting',
    domain: 'planai.boldmind.ng',
    subdomain: '/finance',
    icon: '💰',
    database: 'postgres',
    revenueModel: 'Subscription (₦8k/month)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Python', 'ML models', 'Chart.js'],
    teamSize: 2,
    timeline: 'Q2 2026',
    priority: 10,
    dependencies: ['planai-suite'],
    integrations: ['Accounting software', 'Bank APIs'],
    tags: ['finance', 'forecasting', 'cashflow'],
    links: { website: 'https://planai.boldmind.ng/finance' },
    features: [
      'Cashflow projections',
      'Revenue forecasting',
      'Break-even analysis',
      'Financial models',
      'Scenario planning'
    ],
    challenges: ['Data accuracy', 'Regulatory compliance'],
    opportunities: ['SME market', 'Financial advisors'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_011',
    name: 'Investor Readiness Suite',
    description: 'Automated funding documentation and workflows',
    category: 'ai',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'investor-readiness',
    domain: 'planai.boldmind.ng',
    subdomain: '/investor',
    icon: '📈',
    database: 'postgres',
    revenueModel: 'Setup + Monthly (₦50k + ₦10k)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Document gen', 'E-signature'],
    teamSize: 3,
    timeline: 'Q3 2026',
    priority: 11,
    dependencies: ['planai-suite'],
    integrations: ['Legal templates', 'E-signature APIs'],
    tags: ['investment', 'funding', 'legal', 'startups'],
    links: { website: 'https://planai.boldmind.ng/investor' },
    features: [
      'SAFE/term sheets',
      'Data room setup',
      'Pitch deck templates',
      'Cap table management',
      'Due diligence checklist'
    ],
    challenges: ['Legal compliance', 'Complex docs'],
    opportunities: ['VC partnerships', 'Incubators'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_012',
    name: 'Branding & Design Tools',
    description: 'AI-powered logo creation and marketing visuals',
    category: 'ai',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'branding-design',
    domain: 'planai.boldmind.ng',
    subdomain: '/design',
    icon: '🎨',
    database: 'mongodb',
    revenueModel: 'Per package (₦3k)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'AI image gen', 'Canvas API'],
    teamSize: 2,
    timeline: 'Q2 2026',
    priority: 12,
    dependencies: ['planai-suite'],
    integrations: ['DALL-E', 'Midjourney', 'Social media'],
    tags: ['design', 'branding', 'logo', 'marketing'],
    links: { website: 'https://planai.boldmind.ng/design' },
    features: [
      'Logo generator',
      'Color palettes',
      'Marketing templates',
      'Brand guidelines',
      'Social media kits'
    ],
    challenges: ['Design quality', 'IP issues'],
    opportunities: ['White-label', 'Bulk creation'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_013',
    name: 'Digital Storefronts',
    description: 'Instant e-commerce stores for SMEs and creators',
    category: 'marketplace',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'digital-storefronts',
    domain: 'planai.boldmind.ng',
    subdomain: '/store',
    icon: '🛍️',
    database: 'postgres',
    revenueModel: 'Setup + Monthly (₦5k + ₦2k)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Paystack', 'Inventory mgmt'],
    teamSize: 3,
    timeline: 'Q3 2026',
    priority: 13,
    dependencies: ['planai-suite'],
    integrations: ['Paystack', 'Delivery APIs', 'WhatsApp'],
    tags: ['ecommerce', 'store', 'payments', 'inventory'],
    links: { website: 'https://planai.boldmind.ng/store' },
    features: [
      'Instant store creation',
      'Paystack integration',
      'Inventory management',
      'Order tracking',
      'Customer management'
    ],
    challenges: ['Delivery logistics', 'Payment disputes'],
    opportunities: ['WhatsApp commerce', 'Social commerce'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_014',
    name: 'Marketing Automation',
    description: 'AI-driven marketing campaigns and lead nurturing',
    category: 'ai',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'marketing-automation',
    domain: 'planai.boldmind.ng',
    subdomain: '/marketing',
    icon: '📧',
    database: 'postgres',
    revenueModel: 'Subscription (₦10k/month)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Email APIs', 'CRM', 'Analytics'],
    teamSize: 3,
    timeline: 'Q3 2026',
    priority: 14,
    dependencies: ['planai-suite'],
    integrations: ['Email services', 'CRM', 'Analytics'],
    tags: ['marketing', 'automation', 'email', 'crm'],
    links: { website: 'https://planai.boldmind.ng/marketing' },
    features: [
      'Email automation',
      'Customer segmentation',
      'Personalized campaigns',
      'Lead scoring',
      'A/B testing'
    ],
    challenges: ['Email deliverability', 'Spam compliance'],
    opportunities: ['E-commerce integration', 'B2B'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_015',
    name: 'Analytics Dashboard',
    description: 'Cross-platform business intelligence',
    category: 'ai',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'analytics-dashboard',
    domain: 'planai.boldmind.ng',
    subdomain: '/analytics',
    icon: '📊',
    database: 'postgres',
    revenueModel: 'Subscription (₦8k/month)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Data viz', 'API aggregation'],
    teamSize: 3,
    timeline: 'Q3 2026',
    priority: 15,
    dependencies: ['planai-suite'],
    integrations: ['Google Analytics', 'Social APIs', 'Payment processors'],
    tags: ['analytics', 'bi', 'dashboards', 'reports'],
    links: { website: 'https://planai.boldmind.ng/analytics' },
    features: [
      'Unified analytics',
      'Behavior insights',
      'Growth opportunities',
      'Custom reports',
      'Real-time monitoring'
    ],
    challenges: ['Data aggregation', 'Real-time processing'],
    opportunities: ['Agency analytics', 'Enterprise BI'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_016',
    name: 'SAFE AI',
    description: 'AI-powered security intelligence for Nigerian police',
    category: 'security',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'safe-ai',
    domain: 'safe.boldmind.ng',
    icon: '🛡️',
    database: 'postgres',
    revenueModel: 'Government contracts + private',
    monthlyRevenue: 0,
    techStack: ['React Native', 'NestJS', 'PostgreSQL', 'TensorFlow'],
    teamSize: 5,
    timeline: '18-24 months',
    priority: 16,
    integrations: ['Facial recognition', 'Plate recognition', 'GIS'],
    tags: ['security', 'law-enforcement', 'ai', 'crime'],
    links: { website: 'https://safe.boldmind.ng' },
    features: [
      'Incident reporting',
      'Criminal database',
      'Pattern recognition',
      'Predictive policing',
      'Investigation tools',
      'Officer communication'
    ],
    challenges: ['Government bureaucracy', 'Privacy', 'Infrastructure'],
    opportunities: ['Police partnerships', 'Private security', 'International'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_017',
    name: 'AfroHustle OS',
    description: 'Notion-style workspace with 100 side-hustle blueprints',
    category: 'education',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'afrohustle-os',
    domain: 'hustle.boldmind.ng',
    icon: '💼',
    database: 'mongodb',
    revenueModel: 'One-time/Sub (₦5k-₦15k or ₦2k/mo)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Notion-like editor', 'Database'],
    teamSize: 2,
    timeline: 'Q3 2026',
    priority: 17,
    tags: ['side-hustle', 'education', 'templates', 'productivity'],
    links: { website: 'https://hustle.boldmind.ng' },
    features: [
      '100 side-hustle blueprints',
      'Income tracker',
      'Community circles',
      'Progress tracking',
      'Resource library'
    ],
    challenges: ['Content creation', 'User engagement'],
    opportunities: ['University partnerships', 'Youth programs'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_018',
    name: 'NaijaGig Matcher',
    description: 'Hyper-local gig marketplace for artisans',
    category: 'marketplace',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'naijagig-matcher',
    domain: 'gig.educenter.com.ng',
    icon: '🔧',
    database: 'mongodb',
    revenueModel: 'Commission (10-15%)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Geolocation', 'Payment', 'Reviews'],
    teamSize: 3,
    timeline: 'Q3 2026',
    priority: 18,
    integrations: ['Payment gateways', 'Maps API'],
    tags: ['marketplace', 'gigs', 'artisans', 'local'],
    links: { website: 'https://gig.educenter.com.ng' },
    features: [
      'Gig worker profiles',
      'Location matching',
      'Same-day wallet payout',
      'Reviews and ratings',
      'Job posting'
    ],
    challenges: ['Quality control', 'Payment disputes'],
    opportunities: ['Corporate contracts', 'Training partnerships'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_019',
    name: 'KoloAI',
    description: 'Digital thrift collector with AI default prediction',
    category: 'fintech',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'kolo-ai',
    domain: 'kolo.boldmind.ng',
    icon: '👥',
    database: 'postgres',
    revenueModel: 'Per group (₦5k-₦10k/month)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'AI/ML', 'Payment', 'Group mgmt'],
    teamSize: 3,
    timeline: 'Q4 2026',
    priority: 19,
    integrations: ['Bank APIs', 'Credit scoring'],
    tags: ['fintech', 'thrift', 'savings', 'groups', 'ai'],
    links: { website: 'https://kolo.boldmind.ng' },
    features: [
      'Group thrift management',
      'AI default prediction',
      'Auto-pause contributions',
      'Payment reminders',
      'Savings analytics'
    ],
    challenges: ['Prediction accuracy', 'Regulatory compliance'],
    opportunities: ['Microfinance partnerships', 'Credit building'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_020',
    name: 'BorderlessRemit Tracker',
    description: 'Real-time remittance rate comparison',
    category: 'fintech',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'borderless-remit',
    domain: 'border.boldmind.ng',
    icon: '💱',
    database: 'mongodb',
    revenueModel: 'Affiliate commissions',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Real-time data', 'Comparison engine'],
    teamSize: 2,
    timeline: 'Q4 2026',
    priority: 20,
    integrations: ['Remittance APIs', 'Bank APIs'],
    tags: ['fintech', 'remittance', 'comparison', 'money-transfer'],
    links: { website: 'https://border.boldmind.ng' },
    features: [
      'Compare bank vs black market rates',
      'Receipt generator',
      'Affiliate links to services',
      'Rate alerts',
      'Transfer tracking'
    ],
    challenges: ['Data accuracy', 'Regulatory compliance'],
    opportunities: ['Remittance partnerships', 'Financial education'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_021',
    name: 'ReceiptGenius NG',
    description: 'Instant VAT-compliant invoice/receipt generator',
    category: 'fintech',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'receipt-genius',
    domain: 'receipt.boldmind.ng',
    icon: '🧾',
    database: 'postgres',
    revenueModel: 'Subscription (₦1k/month)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Document gen', 'SMS/Email'],
    teamSize: 2,
    timeline: 'Q4 2026',
    priority: 21,
    integrations: ['SMS APIs', 'Email services', 'FIRS compliance'],
    tags: ['fintech', 'invoicing', 'receipts', 'tax', 'business'],
    links: { website: 'https://receipt.boldmind.ng' },
    features: [
      'VAT-compliant receipts',
      'Invoice generation',
      'Customer database',
      'SMS/email delivery',
      'Sales analytics'
    ],
    challenges: ['Tax compliance updates', 'User adoption'],
    opportunities: ['POS agent partnerships', 'Business registrations'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_022',
    name: 'PowerAlert NG',
    description: 'Crowd-sourced NEPA light tracker + solar calculator',
    category: 'utilities',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'power-alert',
    domain: 'power.boldmind.ng',
    icon: '⚡',
    database: 'mongodb',
    revenueModel: 'Lead gen to solar installers (₦2k-₦5k/lead)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Geolocation', 'Crowdsourcing', 'Calculator'],
    teamSize: 2,
    timeline: 'Q4 2026',
    priority: 22,
    integrations: ['Maps API', 'Solar data APIs'],
    tags: ['utilities', 'energy', 'solar', 'crowdsourcing'],
    links: { website: 'https://power.boldmind.ng' },
    features: [
      'Real-time NEPA status by area',
      'Solar calculator',
      'Installer directory',
      'Energy cost tracking',
      'Outage reporting'
    ],
    challenges: ['Data accuracy', 'User contributions'],
    opportunities: ['Solar partnerships', 'Energy consulting'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_023',
    name: 'FarmGate Direct',
    description: 'Direct farmer-to-buyer marketplace',
    category: 'marketplace',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'farmgate-direct',
    domain: 'farm.boldmind.ng',
    icon: '🌾',
    database: 'mongodb',
    revenueModel: 'Commission (3-5%) or listing fee (₦3k/season)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Marketplace', 'Logistics', 'Quality'],
    teamSize: 4,
    timeline: 'Q4 2026',
    priority: 23,
    integrations: ['Logistics APIs', 'Payment gateways', 'Weather APIs'],
    tags: ['agriculture', 'marketplace', 'farmers', 'produce'],
    links: { website: 'https://farm.boldmind.ng' },
    features: [
      'Farmers post produce',
      'Direct buyer contact',
      'Quality verification',
      'Logistics coordination',
      'Market price tracking'
    ],
    challenges: ['Quality control', 'Logistics'],
    opportunities: ['Export partnerships', 'Agricultural financing'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_024',
    name: 'AfroCopy AI',
    description: 'African-trained copywriting tool with local languages',
    category: 'ai',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'afrocopy-ai',
    domain: 'copy.amebogist.ng',
    icon: '✍️',
    database: 'mongodb',
    revenueModel: 'Subscription (₦2k-₦5k/month)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'AI models', 'Local training data'],
    teamSize: 3,
    timeline: 'Q4 2026',
    priority: 24,
    tags: ['ai', 'copywriting', 'content', 'marketing', 'african'],
    links: { website: 'https://copy.amebogist.ng' },
    features: [
      'Pidgin, Yoruba, Igbo, Hausa',
      'Social media captions',
      'Ad copy',
      'Email templates',
      'Blog content generation'
    ],
    challenges: ['Training data', 'Language accuracy'],
    opportunities: ['Marketing agencies', 'Content creators', 'International'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_025',
    name: 'Skill2Cash Board',
    description: 'Anonymous job board for creative skills with video profiles',
    category: 'marketplace',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'skill2cash',
    domain: 'skills.educenter.com.ng',
    icon: '🎭',
    database: 'mongodb',
    revenueModel: 'Listing (₦500/month) or commission (10%)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Video upload', 'Payment escrow', 'Anonymous'],
    teamSize: 3,
    timeline: 'Q4 2026',
    priority: 25,
    integrations: ['Video hosting', 'Payment processing'],
    tags: ['marketplace', 'gigs', 'gen-z', 'creative', 'video'],
    links: { website: 'https://skills.educenter.com.ng' },
    features: [
      'No CV required (30-sec video)',
      'Skills: DJ, makeup, tailoring',
      'Instant booking',
      'Payment escrow',
      'Anonymous profiles'
    ],
    challenges: ['Quality control', 'Safety verification'],
    opportunities: ['University partnerships', 'Event industry'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_026',
    name: 'AnonTruth Mic',
    description: 'Temporary anonymous audio drop for whistleblowers',
    category: 'social',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'anontruth-mic',
    domain: 'anon.amebogist.ng',
    icon: '🎤',
    database: 'mongodb',
    revenueModel: 'Boost feature (₦500-₦1k)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Audio', 'Encryption', 'Geo', 'Auto-delete'],
    teamSize: 4,
    timeline: 'Q4 2026 (High risk)',
    priority: 26,
    tags: ['social', 'anonymous', 'audio', 'whistleblower', 'high-risk'],
    links: { website: 'https://anon.amebogist.ng' },
    features: [
      '100% anonymous + encrypted',
      'Temporary (auto-delete)',
      'Location-targeted',
      'Boost feature',
      'Voice distortion'
    ],
    challenges: ['Legal risks', 'Moderation', 'Platform abuse'],
    opportunities: ['Journalism partnerships', 'Community feedback'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },

  // === MOBILE APPS (TWA) ===
  {
    id: 'prod_027',
    name: 'AmeboGist TWA',
    description: 'Mobile app (Trusted Web Activity) for AmeboGist',
    category: 'media',
    status: 'PLANNED',
    version: '0.1.0',
    slug: 'amebogist-twa',
    domain: 'amebogist.ng',
    icon: '📱',
    database: 'mongodb',
    revenueModel: 'Mobile AdSense',
    monthlyRevenue: 0,
    techStack: ['PWA', 'Android', 'TWA'],
    teamSize: 1,
    timeline: 'Q2 2026',
    priority: 27,
    dependencies: ['amebogist'],
    integrations: ['Google Play', 'Mobile ads'],
    tags: ['mobile', 'pwa', 'android', 'news'],
    features: [
      'Mobile-optimized reading',
      'Push notifications',
      'Offline reading',
      'Mobile ads',
      'App store distribution'
    ],
    challenges: ['App store approval', 'Mobile performance'],
    opportunities: ['Mobile user growth', 'In-app purchases'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_028',
    name: 'EduCenter TWA',
    description: 'Mobile app for EduCenter platform',
    category: 'education',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'educenter-twa',
    domain: 'educenter.com.ng',
    icon: '📚',
    database: 'postgres',
    revenueModel: 'Mobile subscriptions',
    monthlyRevenue: 0,
    techStack: ['PWA', 'Android', 'In-app payments'],
    teamSize: 1,
    timeline: 'Q2 2026',
    priority: 28,
    dependencies: ['educenter'],
    integrations: ['Google Play Billing', 'Mobile payments'],
    tags: ['mobile', 'education', 'android', 'subscription'],
    features: [
      'Mobile course access',
      'In-app payments',
      'Offline content',
      'Progress tracking',
      'Mobile notifications'
    ],
    challenges: ['Payment integration', 'Content delivery'],
    opportunities: ['Mobile learning', 'Parent tracking'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_029',
    name: 'BoldMind OS TWA',
    description: 'Mobile companion for BoldMind OS',
    category: 'productivity',
    status: 'PLANNED',
    version: '0.1.0',
    slug: 'boldmind-os-twa',
    domain: 'os.boldmind.ng',
    icon: '🧠',
    database: 'postgres',
    revenueModel: 'Mobile Pro subscription',
    monthlyRevenue: 0,
    techStack: ['PWA', 'Android', 'Mobile-first'],
    teamSize: 2,
    timeline: 'Q2 2026',
    priority: 29,
    dependencies: ['boldmind-os'],
    integrations: ['Mobile sensors', 'Notifications'],
    tags: ['mobile', 'productivity', 'adhd', 'android'],
    features: [
      'Mobile capture',
      'Focus timer',
      'Quick notes',
      'Mobile analytics',
      'Offline functionality'
    ],
    challenges: ['Mobile performance', 'Battery optimization'],
    opportunities: ['Mobile-first users', 'Wearable integration'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_030',
    name: 'Naija FitHer TWA',
    description: 'Mobile app for wellness platform',
    category: 'health',
    status: 'PLANNED',
    version: '0.1.0',
    slug: 'naija-fither-twa',
    domain: 'fit.boldmind.ng',
    icon: '💪',
    database: 'postgres',
    revenueModel: 'Mobile premium',
    monthlyRevenue: 0,
    techStack: ['PWA', 'Android', 'Health tracking'],
    teamSize: 2,
    timeline: 'Q3 2026',
    priority: 30,
    dependencies: ['naija-fither'],
    integrations: ['Health sensors', 'Mobile cameras'],
    tags: ['mobile', 'health', 'fitness', 'android', 'women'],
    features: [
      'Mobile workouts',
      'Meal tracking',
      'Progress photos',
      'Community chat',
      'Health reminders'
    ],
    challenges: ['Health data privacy', 'Mobile storage'],
    opportunities: ['Wearable integration', 'Health analytics'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_031',
    name: 'EmailScraper TWA',
    description: 'Mobile app for lead generation',
    category: 'productivity',
    status: 'PLANNED',
    version: '0.1.0',
    slug: 'emailscraper-twa',
    domain: 'email.boldmind.ng',
    icon: '🔍',
    database: 'mongodb',
    revenueModel: 'Mobile subscriptions',
    monthlyRevenue: 0,
    techStack: ['PWA', 'Android', 'Mobile APIs'],
    teamSize: 1,
    timeline: 'Q3 2026',
    priority: 31,
    dependencies: ['emailscraper-pro'],
    integrations: ['Mobile contacts', 'Camera'],
    tags: ['mobile', 'sales', 'lead-gen', 'android'],
    features: [
      'Contact scanning',
      'Business card scanning',
      'Lead lookup',
      'Mobile notifications',
      'Quick actions'
    ],
    challenges: ['Camera quality', 'OCR accuracy'],
    opportunities: ['Sales teams', 'Conference networking'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  },
  {
    id: 'prod_032',
    name: 'SAFE AI Native',
    description: 'Full React Native app for police officers',
    category: 'security',
    status: 'PLANNED',
    version: '0.1.0',
    slug: 'safe-ai-native',
    domain: 'safe.boldmind.ng',
    icon: '📱',
    database: 'postgres',
    revenueModel: 'Government deployment',
    monthlyRevenue: 0,
    techStack: ['React Native', 'iOS', 'Android', 'Offline-first'],
    teamSize: 4,
    timeline: 'Q4 2026',
    priority: 32,
    dependencies: ['safe-ai'],
    integrations: ['Mobile cameras', 'GPS', 'Offline storage'],
    tags: ['mobile', 'security', 'react-native', 'ios', 'android'],
    features: [
      'Offline incident reporting',
      'Voice-to-text (Pidgin/English)',
      'Photo/video evidence',
      'GPS tagging',
      'Real-time communication'
    ],
    challenges: ['Offline functionality', 'Mobile security'],
    opportunities: ['Government contracts', 'Field officer adoption'],
    createdAt: '2025-12-26',
    updatedAt: '2026-01-18'
  }
];


// Helper Functions
export function getProductById(id: string): Product | undefined {
  return BOLDMIND_PRODUCTS.find(product => product.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return BOLDMIND_PRODUCTS.find(product => product.slug === slug);
}

export function getProductByDomain(domain: string): Product | undefined {
  return BOLDMIND_PRODUCTS.find(p => p.domain === domain);
}

export function getProductByFullDomain(fullDomain: string): Product | undefined {
  return BOLDMIND_PRODUCTS.find(product => {
    const productFullDomain = product.subdomain
      ? `${product.subdomain}.${product.domain}`
      : product.domain;
    return productFullDomain === fullDomain;
  });
}

export function getProductsByStatus(status: ProductStatus): Product[] {
  return BOLDMIND_PRODUCTS.filter(product => product.status === status);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return BOLDMIND_PRODUCTS.filter(product => product.category === category);
}

export function getProductsByPriority(minPriority: number, maxPriority?: number): Product[] {
  if (maxPriority) {
    return BOLDMIND_PRODUCTS.filter(product =>
      product.priority >= minPriority && product.priority <= maxPriority
    );
  }
  return BOLDMIND_PRODUCTS.filter(product => product.priority >= minPriority);
}


export function getLiveProducts(): Product[] {
  return getProductsByStatus('LIVE');
}

export function getBuildingProducts(): Product[] {
  return getProductsByStatus('BUILDING');
}

export function getPlannedProducts(): Product[] {
  return getProductsByStatus('PLANNED');
}

export function getConceptProducts(): Product[] {
  return getProductsByStatus('CONCEPT');
}

export function getProductsByDomainName(domain: string): Product[] {
  return BOLDMIND_PRODUCTS.filter(product => product.domain === domain);
}

export function getProductsBySubdomain(subdomain: string): Product[] {
  return BOLDMIND_PRODUCTS.filter(product => product.subdomain === subdomain);
}

export function getProductsWithSubdomain(): Product[] {
  return BOLDMIND_PRODUCTS.filter(product => product.subdomain !== undefined);
}

export function getProductsWithoutSubdomain(): Product[] {
  return BOLDMIND_PRODUCTS.filter(product => product.subdomain === undefined);
}

export function getPlanAISuiteProducts(): Product[] {
  return BOLDMIND_PRODUCTS.filter(product =>
    product.domain === 'planai.boldmind.ng' ||
    product.slug.includes('planai') ||
    product.slug.includes('receptionist') ||
    product.slug.includes('credibility') ||
    product.slug.includes('business-planning') ||
    product.slug.includes('financial-forecasting') ||
    product.slug.includes('investor-readiness') ||
    product.slug.includes('branding-design') ||
    product.slug.includes('digital-storefronts') ||
    product.slug.includes('marketing-automation') ||
    product.slug.includes('analytics-dashboard')
  );
}

export function getProductsByDatabase(dbType: DatabaseType): Product[] {
  return BOLDMIND_PRODUCTS.filter(product => product.database === dbType);
}

// Revenue calculations
export function calculateTotalMonthlyRevenue(): number {
  return BOLDMIND_PRODUCTS.reduce((total, product) =>
    total + (product.monthlyRevenue || 0), 0
  );
}

export function calculateProjectedRevenue(months: number = 12): number {
  const liveRevenue = getLiveProducts().reduce((total, product) =>
    total + (product.monthlyRevenue || 0) * months, 0
  );

  const buildingRevenue = getBuildingProducts().length * 100000 * months * 0.5;
  const plannedRevenue = getPlannedProducts().length * 50000 * months * 0.3;
  const conceptRevenue = getConceptProducts().length * 25000 * months * 0.1;

  return liveRevenue + buildingRevenue + plannedRevenue + conceptRevenue;
}

// Team size calculations
export function calculateTotalTeamSize(): number {
  const teamSizes = BOLDMIND_PRODUCTS
    .map(product => product.teamSize || 0)
    .reduce((total, size) => total + size, 0);

  return Math.ceil(teamSizes / 2); // Account for overlapping team members
}

// Timeline analysis
export function getUpcomingReleases(months: number = 6): Product[] {
  const now = new Date();
  const future = new Date();
  future.setMonth(future.getMonth() + months);

  return BOLDMIND_PRODUCTS.filter(product => {
    if (!product.timeline) return false;

    const timelineMatch = product.timeline.match(/Q(\d) (\d{4})/);
    if (timelineMatch) {
      const quarter = parseInt(timelineMatch[1] || '');
      const year = parseInt(timelineMatch[2] || '');

      const releaseDate = new Date(year, (quarter - 1) * 3, 1);
      return releaseDate >= now && releaseDate <= future;
    }

    return false;
  }).sort((a, b) => a.priority - b.priority);
}

// Product dependencies analysis
export function getProductDependencies(productSlug: string): Product[] {
  const product = getProductBySlug(productSlug);
  if (!product || !product.dependencies) return [];

  return product.dependencies
    .map(depSlug => getProductBySlug(depSlug))
    .filter((dep): dep is Product => dep !== undefined);
}

// Status summary
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

// Tech stack analysis
export function getProductsByTech(tech: string): Product[] {
  return BOLDMIND_PRODUCTS.filter(product =>
    product.techStack.some(t => t.toLowerCase().includes(tech.toLowerCase()))
  );
}

// Domain utility functions
export function getProductWebsiteUrl(product: Product): string {
  if (product.subdomain) {
    return `https://${product.subdomain}.${product.domain}`;
  }
  return `https://${product.domain}`;
}

export function getAllDomains(): string[] {
  const domains = new Set<string>();
  BOLDMIND_PRODUCTS.forEach(product => domains.add(product.domain));
  return Array.from(domains);
}

export function getAllSubdomains(): string[] {
  const subdomains = new Set<string>();
  BOLDMIND_PRODUCTS.forEach(product => {
    if (product.subdomain) subdomains.add(product.subdomain);
  });
  return Array.from(subdomains);
}

// Priority-based functions
export function getHighPriorityProducts(threshold: number = 10): Product[] {
  return BOLDMIND_PRODUCTS.filter(product => product.priority <= threshold)
    .sort((a, b) => a.priority - b.priority);
}

export function getLowPriorityProducts(threshold: number = 20): Product[] {
  return BOLDMIND_PRODUCTS.filter(product => product.priority > threshold)
    .sort((a, b) => a.priority - b.priority);
}

// Revenue-focused functions
export function getRevenueGeneratingProducts(): Product[] {
  return BOLDMIND_PRODUCTS.filter(product => (product.monthlyRevenue || 0) > 0)
    .sort((a, b) => (b.monthlyRevenue || 0) - (a.monthlyRevenue || 0));
}

export function getTopRevenueProducts(limit: number = 5): Product[] {
  return getRevenueGeneratingProducts().slice(0, limit);
}

// Team size analysis
export function getProductsByTeamSize(minSize: number, maxSize?: number): Product[] {
  if (maxSize) {
    return BOLDMIND_PRODUCTS.filter(product =>
      (product.teamSize || 0) >= minSize && (product.teamSize || 0) <= maxSize
    );
  }
  return BOLDMIND_PRODUCTS.filter(product => (product.teamSize || 0) >= minSize);
}

// Timeline-based functions
export function getProductsLaunchingThisYear(year: number = 2026): Product[] {
  return BOLDMIND_PRODUCTS.filter(product => {
    if (!product.timeline) return false;
    const timelineMatch = product.timeline.match(/Q(\d) (\d{4})/);
    if (timelineMatch) {
      const timelineYear = parseInt(timelineMatch[2] || '');
      return timelineYear === year;
    }
    return false;
  });
}

// Integration-based functions
export function getProductsWithIntegration(integration: string): Product[] {
  return BOLDMIND_PRODUCTS.filter(product =>
    product.integrations?.some(integ => integ.toLowerCase().includes(integration.toLowerCase()))
  );
}

// Category summary
export interface CategorySummary {
  category: string;
  count: number;
  live: number;
  building: number;
  planned: number;
  concept: number;
  revenue: number;
}

export function getCategorySummary(): CategorySummary[] {
  const summary: Record<string, CategorySummary> = {};

  BOLDMIND_PRODUCTS.forEach(product => {
    if (!summary[product.category]) {
      summary[product.category] = {
        category: product.category,
        count: 0,
        live: 0,
        building: 0,
        planned: 0,
        concept: 0,
        revenue: 0
      };
    }

    const catSummary: any = summary[product.category];
    catSummary.count++;
    catSummary[product.status.toLowerCase() as keyof Omit<CategorySummary, 'category' | 'count' | 'revenue'>]++;
    catSummary.revenue += (product.monthlyRevenue || 0);
  });

  return Object.values(summary).sort((a, b) => b.count - a.count);
}

// Search functionality
export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();

  return BOLDMIND_PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    product.category.toLowerCase().includes(lowerQuery) ||
    product.slug.toLowerCase().includes(lowerQuery)
  );
}

// Budget estimation
export function estimateDevelopmentCost(product: Product): number {
  // Rough estimation based on team size and timeline
  const teamSize = product.teamSize || 1;
  const months = getTimelineMonths(product.timeline);

  // Average developer cost in Nigeria: ₦500,000/month
  const monthlyCostPerDev = 500000;
  const totalCost = teamSize * months * monthlyCostPerDev;

  return totalCost;
}

function getTimelineMonths(timeline?: string): number {
  if (!timeline) return 3; // Default 3 months

  if (timeline.includes('week')) {
    const weeksMatch = timeline.match(/(\d+)\s*weeks?/);
    if (weeksMatch) {
      return parseInt(weeksMatch[1] || '') / 4;
    }
  }

  if (timeline.includes('month')) {
    const monthsMatch = timeline.match(/(\d+)\s*months?/);
    if (monthsMatch) {
      return parseInt(monthsMatch[1] || '');
    }
  }

  return 3; // Default fallback
}

export function calculateTotalDevelopmentCost(): number {
  return BOLDMIND_PRODUCTS.reduce((total, product) =>
    total + estimateDevelopmentCost(product), 0
  );
}

// ROI calculation
export function calculateROI(product: Product): number {
  const developmentCost = estimateDevelopmentCost(product);
  const annualRevenue = (product.monthlyRevenue || 0) * 12;

  if (developmentCost === 0) return 0;

  return (annualRevenue / developmentCost) * 100;
}

// Quick stats
export function getQuickStats() {
  const totalProducts = BOLDMIND_PRODUCTS.length;
  const totalRevenue = calculateTotalMonthlyRevenue();
  const totalTeamSize = calculateTotalTeamSize();
  const upcomingReleases = getUpcomingReleases(6).length;
  const developmentCost = calculateTotalDevelopmentCost();

  return {
    totalProducts,
    totalRevenue: `₦${totalRevenue.toLocaleString()}/month`,
    totalTeamSize,
    upcomingReleases,
    developmentCost: `₦${developmentCost.toLocaleString()}`,
    averageROI: `${(totalRevenue * 12 / developmentCost * 100).toFixed(1)}%`
  };
}

export default BOLDMIND_PRODUCTS;
