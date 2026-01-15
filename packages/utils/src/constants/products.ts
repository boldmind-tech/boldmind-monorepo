// packages/utils/src/constants/products.ts

export type ProductStatus = 'LIVE' | 'BUILDING' | 'PLANNED' | 'CONCEPT';
export type ProductCategory = 'media' | 'education' | 'ai' | 'productivity' | 'security' | 'health' | 'marketplace' | 'fintech' | 'utilities' | 'social';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  status: ProductStatus;
  version: string;
  slug: string;
  icon: string;
  revenueModel: string;
  monthlyRevenue?: number;
  users?: string | number;
  techStack: string[];
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
  { id: 'media', name: 'Media & Content', count: 1 },
  { id: 'education', name: 'Education', count: 1 },
  { id: 'ai', name: 'AI Automation', count: 10 },
  { id: 'productivity', name: 'Productivity', count: 1 },
  { id: 'lead-gen', name: 'Lead Generation', count: 1 },
  { id: 'security', name: 'Security', count: 1 },
  { id: 'health', name: 'Health & Wellness', count: 1 },
  { id: 'marketplace', name: 'Marketplaces', count: 3 },
  { id: 'fintech', name: 'Fintech', count: 3 },
  { id: 'utilities', name: 'Utilities', count: 1 },
  { id: 'marketing', name: 'Marketing', count: 1 },
  { id: 'social', name: 'Social', count: 1 },
];

export const BOLDMIND_PRODUCTS: Product[] = [
{
  id: 'prod_000',
  name: 'BoldMind Hub',
  description: 'Central hub for the BoldMind technology ecosystem - showcasing 31+ innovative products empowering Nigerian entrepreneurs.',
  category: 'ai',
  status: 'LIVE',
  version: '1.0.0',
  slug: 'boldmind-hub',
  icon: '🚀',
  revenueModel: 'Portfolio management',
  monthlyRevenue: 0,
  users: '10,000+',
  techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  teamSize: 3,
  timeline: 'Launched Q4 2025',
  priority: 0,
  dependencies: [],
  integrations: [],
  tags: ['ecosystem', 'hub', 'portfolio', 'showcase'],
  links: {
    website: 'https://boldmind.ng',
  },
  features: [
    'Product ecosystem dashboard',
    'Real-time revenue tracking',
    'Team management tools',
    'Product launch roadmap',
    'Entrepreneur resources'
  ],
  challenges: ['Managing 31+ product portfolio', 'Resource allocation'],
  opportunities: ['Ecosystem partnerships', 'Investment opportunities'],
  createdAt: '2025-01-01',
  updatedAt: '2025-12-28'
},
 {
    id: 'prod_001',
    name: 'AmeboGist',
    description: 'Nigeria\'s #1 Pidgin English platform led by AI/Tech education 🤖 and Creator entrepreneurship ✍️, plus Sports ⚽, Politics 🏛️, Entertainment 🎭, and Trending Gist 🔥. "Amebo wey make sense, gist wey fit change your level!"',
    status: 'LIVE',
    version: '1.0.0', 
    slug: 'amebogist',
    category: 'media',
    icon: '📰',
    revenueModel: 'Google AdSense + Affiliate Marketing (Tech/AI tools)',
    monthlyRevenue: 85000,
    users: '25,000+', 
    techStack: ['Next.js', 'MongoDB', 'PWA', 'Tailwind CSS', 'AI Content Tools'],
    teamSize: 2,
    timeline: 'Launched Q2 2025, Pidgin AI/Tech Focus Q4 2025',
    priority: 1,
    integrations: ['Google AdSense', 'Meta API', 'Paystack', 'Analytics'],
    tags: ['news', 'pidgin', 'nigeria', 'ai-tech', 'amebo', 'gist', 'content-creation', 'education', 'tech-reviews'],
    links: {
      website: 'https://amebogist.ng',
    },
    features: [
      '🤖-ai-tech Amebo AI & Tech - Technical tools, business use cases, reviews',
      '✍️-creator-life Creator Life - Side hustles, content hacks, platform tips',
      '⚽-sports Sports Wahala - Super Eagles, EPL Naija stars',
      '🏛️-politics Politics Naija Style - Political events, policies, bills',
      '🎭-entertainment Entertainment Vibes - Nollywood, afrobeat, celeb news',
      '🔥-trending Trending Gist - Viral content, what\'s hot on the street',
      'AI SEO-Optimized Content Generation',
      'Mobile-First PWA Experience',
      'Structured Post Templates (Gist format)',
      'Local Use Case Focus for Tech/AI',
      'Google AdSense + Affiliate Integration',
      'Community Engagement Features',
      'Daily Gist Roundups',
    ],
    challenges: [
      'Maintaining authentic Pidgin voice at scale',
      'Balancing trending vs. evergreen AI/Tech content',
      'Monetization beyond ads for sustainability',
      'Fact-checking in fast-paced gist environment'
    ],
    opportunities: [
      'Video Content (Short-form Pidgin explainers)',
      'Amebo AI Tools Marketplace (Curated for Nigerians)',
      'Sponsored Tech/AI Masterclasses',
      'Premium Subscription (Early access + exclusive gist)',
      'Community-Driven "Amebo Corner" UGC',
      'Interview Series with Nigerian Tech Leaders',
      'Comparison Reviews (AI tools, gadgets for Naija)',
      'WhatsApp Newsletter Expansion'
    ],

    createdAt: '2025-01-15',
    updatedAt: '2025-12-28' 
},
  {
    id: 'prod_002',
    name: 'EduCenter',
    description: 'A comprehensive Nigerian ed-tech platform combining exam prep (JAMB/WAEC/NECO), digital business education, and AI skills training. Features include interactive past questions, CBT simulation, business courses, and AI tools for modern career development.',
    category: 'education',
    status: 'LIVE',
    version: '1.0.0',
    slug: 'educenter',
    icon: '🎓',
    revenueModel: 'Subscription (₦3k/month)',
    monthlyRevenue: 60000,
    users: '20',
    techStack: ['Next.js', 'MongoDB', 'Paystack', 'PWA'],
    teamSize: 2,
    timeline: 'Launched Q3 2025',
    priority: 2,
    integrations: ['Paystack', 'WhatsApp API'],
    tags: ['education', 'jamb', 'courses', 'nigeria'],
    links: {
      website: 'https://educenter.com.ng',
    },
    features: [
      'JAMB/WAEC/NECO past questions (10,000+)',
      'Subject-based practice',
      'CBT simulation mode',
      'Performance tracking & analytics',
      'Study streak system',
      'Random practice (5 daily attempts for free users)',
      'Leaderboard',
      'Course library (free & paid)',
      'Sales funnel templates',
      'WhatsApp automation guides',
      'Marketing playbooks',
      'Expert-led masterclasses',
      'Community access',
      'AI video generation',
      'Prompt engineering course',
      'WhatsApp AI automation',
      'Content creation suite',
      'AI tools marketplace'
    ],
    challenges: ['User acquisition', 'Content creation'],
    opportunities: ['WAEC/NECO questions', 'Video tutorials', 'Live classes'],
    createdAt: '2025-03-20',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_003',
    name: 'AI Receptionist',
    description: 'Multi-tenant AI-powered lead capture and booking system',
    category: 'ai',
    status: 'LIVE',
    version: '1.0.0',
    slug: 'ai-receptionist',
    icon: '🤖',
    revenueModel: 'Monthly subscription (₦20k-₦50k/client)',
    monthlyRevenue: 20000,
    users: '1',
    techStack: ['Next.js', 'NestJS', 'Meta Graph API', 'Webhooks'],
    teamSize: 1,
    timeline: 'Deployed Q4 2025',
    priority: 3,
    dependencies: ['PlanAI Suite'],
    integrations: ['Meta API', 'WhatsApp', 'Instagram', 'Facebook'],
    tags: ['ai', 'automation', 'customer-service', 'whatsapp'],
    links: {},
    features: [
      'Auto-reply to comments and DMs',
      'Lead qualification',
      'Appointment booking',
      'Multi-platform support',
      'Analytics dashboard'
    ],
    challenges: ['Client onboarding', 'Platform API changes'],
    opportunities: ['More clients', 'Enterprise features', 'SMS integration'],
    createdAt: '2025-10-15',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_004',
    name: 'Social Media Content Factory',
    description: 'Automated video content generation and multi-channel publishing',
    category: 'ai',
    status: 'BUILDING',
    version: '0.5.0',
    slug: 'social-factory',
    icon: '🎬',
    revenueModel: 'Monthly subscription + usage-based',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'n8n', 'Pictory API', 'Meta API', 'Twitter API'],
    teamSize: 2,
    timeline: '12 weeks (Jan-Mar 2026)',
    priority: 4,
    dependencies: ['PlanAI Suite'],
    integrations: ['Open source ai video generator', 'YouTube', 'Instagram', 'Facebook', 'Twitter', 'TikTok'],
    tags: ['content-creation', 'video', 'social-media', 'automation'],
    links: {},
    features: [
      'AI video generation',
      'Multi-platform publishing',
      'Content calendar',
      'Analytics aggregation',
      'n8n automation workflows'
    ],
    challenges: ['API rate limits', 'Content quality control'],
    opportunities: ['Agency partnerships', 'Content marketplace', 'White-label solution'],
    createdAt: '2025-11-01',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_005',
    name: 'BoldMind OS',
    description: 'Personal operating system for neurodivergent entrepreneurs',
    category: 'productivity',
    status: 'BUILDING',
    version: '0.1.0',
    slug: 'boldmind-os',
    icon: '🧠',
    revenueModel: 'Freemium (Free/₦5k Pro/₦15k Team)',
    monthlyRevenue: 0,
    techStack: ['Next.js 14', 'NestJS', 'MongoDB', 'OpenAI API', 'Supabase'],
    teamSize: 3,
    timeline: '12 weeks to MVP (Jan-Mar 2026)',
    priority: 5,
    dependencies: [],
    integrations: ['n8n', 'OpenAI', 'Whisper API', 'Supabase Auth'],
    tags: ['productivity', 'adhd', 'dyslexia', 'ai', 'pomodoro'],
    links: {},
    features: [
      'Capture Brain (multi-modal input)',
      'Focus Brain (ADHD-friendly Pomodoro)',
      'Connect Brain (visual knowledge graph)',
      'Create Brain (content pipeline)',
      'Reflect Brain (analytics)',
      'Dyslexia Mode (OpenDyslexic font, TTS)'
    ],
    challenges: ['Complex UI/UX', 'Performance optimization'],
    opportunities: ['Therapist partnerships', 'Research collaborations', 'Enterprise sales'],
    createdAt: '2025-12-01',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_006',
    name: 'Professional Credibility Hubs',
    description: 'AI-assisted personal branding and one-pager sites',
    category: 'ai',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'credibility-hubs',
    icon: '💼',
    revenueModel: 'One-time setup (₦5k-₦15k)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'AI APIs', 'Tailwind CSS'],
    teamSize: 1,
    timeline: 'Q2 2026',
    priority: 6,
    dependencies: ['PlanAI Suite'],
    integrations: ['LinkedIn API', 'Resume parsers'],
    tags: ['portfolio', 'personal-branding', 'resume', 'linkedin'],
    links: {},
    features: [
      'Portfolio website builder',
      'LinkedIn profile optimizer',
      'Resume/CV generator',
      'Personal branding AI coach',
      'Templates library'
    ],
    challenges: ['Design variations', 'Export formats'],
    opportunities: ['University partnerships', 'Recruiter tools'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_007',
    name: 'AI Business Planning',
    description: 'Generate dynamic business plans and market analysis',
    category: 'ai',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'business-planning',
    icon: '📊',
    revenueModel: 'Per business plan (₦10k)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'AI APIs', 'Chart.js'],
    teamSize: 2,
    timeline: 'Q2 2026',
    priority: 7,
    dependencies: ['PlanAI Suite'],
    integrations: ['Financial APIs', 'Market data'],
    tags: ['business', 'planning', 'market-analysis', 'pitch-deck'],
    links: {},
    features: [
      'AI-generated business plans',
      'Pitch deck creator',
      'Market analysis (Nigerian-focused)',
      'Financial projections',
      'Competitor analysis'
    ],
    challenges: ['Accurate Nigerian market data', 'Complex financial modeling'],
    opportunities: ['Bank partnerships', 'Government grants assistance'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_008',
    name: 'Financial Forecasting',
    description: 'AI-driven cashflow modeling and revenue forecasting',
    category: 'ai',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'financial-forecasting',
    icon: '💰',
    revenueModel: 'Subscription (₦8k/month)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Python', 'ML models', 'Chart.js'],
    teamSize: 2,
    timeline: 'Q2 2026',
    priority: 8,
    dependencies: ['PlanAI Suite'],
    integrations: ['Accounting software', 'Bank APIs'],
    tags: ['finance', 'forecasting', 'cashflow', 'analytics'],
    links: {},
    features: [
      'Cashflow projections',
      'Revenue forecasting',
      'Break-even analysis',
      'Investor-ready financial models',
      'Scenario planning'
    ],
    challenges: ['Data accuracy', 'Regulatory compliance'],
    opportunities: ['SME market', 'Financial advisor partnerships'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_009',
    name: 'Investor Readiness Suite',
    description: 'Automated funding documentation and workflows',
    category: 'ai',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'investor-readiness',
    icon: '📈',
    revenueModel: 'One-time + monthly (₦50k + ₦10k/month)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Document generation', 'E-signature'],
    teamSize: 3,
    timeline: 'Q3 2026',
    priority: 9,
    dependencies: ['PlanAI Suite'],
    integrations: ['Legal document templates', 'E-signature APIs'],
    tags: ['investment', 'funding', 'legal', 'startups'],
    links: {},
    features: [
      'SAFE/term sheet generator',
      'Data room scaffolding',
      'Investor pitch deck templates',
      'Cap table management',
      'Due diligence checklist'
    ],
    challenges: ['Legal compliance', 'Complex document structures'],
    opportunities: ['VC firm partnerships', 'Startup incubators'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_010',
    name: 'Branding & Design Tools',
    description: 'AI-powered logo creation and marketing visuals',
    category: 'ai',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'branding-design',
    icon: '🎨',
    revenueModel: 'Per design package (₦3k)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'AI image generation', 'Canvas API'],
    teamSize: 2,
    timeline: 'Q2 2026',
    priority: 10,
    dependencies: ['PlanAI Suite'],
    integrations: ['DALL-E', 'Midjourney API', 'Social media'],
    tags: ['design', 'branding', 'logo', 'marketing'],
    links: {},
    features: [
      'Logo generator',
      'Color palette creator',
      'Marketing visual templates',
      'Brand guidelines generator',
      'Social media kit generator'
    ],
    challenges: ['Design quality', 'Intellectual property'],
    opportunities: ['Agency white-label', 'Bulk creation for businesses'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_011',
    name: 'Digital Storefronts',
    description: 'Instant e-commerce stores for SMEs and creators',
    category: 'marketplace',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'digital-storefronts',
    icon: '🛍️',
    revenueModel: 'Setup + monthly (₦5k + ₦2k/month)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Paystack', 'Inventory management'],
    teamSize: 3,
    timeline: 'Q3 2026',
    priority: 11,
    dependencies: ['PlanAI Suite'],
    integrations: ['Paystack', 'Delivery APIs', 'WhatsApp'],
    tags: ['ecommerce', 'store', 'payments', 'inventory'],
    links: {},
    features: [
      'Instant store creation',
      'Paystack integration',
      'Inventory management',
      'Order tracking',
      'Customer management'
    ],
    challenges: ['Delivery logistics', 'Payment disputes'],
    opportunities: ['WhatsApp commerce', 'Social commerce integration'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_012',
    name: 'Marketing Automation',
    description: 'AI-driven marketing campaigns and lead nurturing',
    category: 'ai',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'marketing-automation',
    icon: '📧',
    revenueModel: 'Subscription (₦10k/month)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Email APIs', 'CRM', 'Analytics'],
    teamSize: 3,
    timeline: 'Q3 2026',
    priority: 12,
    dependencies: ['PlanAI Suite'],
    integrations: ['Email services', 'CRM systems', 'Analytics'],
    tags: ['marketing', 'automation', 'email', 'crm'],
    links: {},
    features: [
      'Email campaign automation',
      'Customer segmentation',
      'Personalized campaigns',
      'Lead scoring',
      'A/B testing'
    ],
    challenges: ['Email deliverability', 'Spam compliance'],
    opportunities: ['E-commerce integration', 'B2B marketing'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_013',
    name: 'Analytics Dashboard',
    description: 'Cross-platform business intelligence',
    category: 'ai',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'analytics-dashboard',
    icon: '📊',
    revenueModel: 'Subscription (₦8k/month)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Data visualization', 'API aggregation'],
    teamSize: 3,
    timeline: 'Q3 2026',
    priority: 13,
    dependencies: ['PlanAI Suite'],
    integrations: ['Google Analytics', 'Social APIs', 'Payment processors'],
    tags: ['analytics', 'business-intelligence', 'dashboards', 'reports'],
    links: {},
    features: [
      'Unified analytics (all platforms)',
      'Customer behavior insights',
      'Growth opportunity identification',
      'Custom reports',
      'Real-time monitoring'
    ],
    challenges: ['Data aggregation', 'Real-time processing'],
    opportunities: ['Agency analytics', 'Enterprise BI'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_014',
    name: 'EmailScraper Pro',
    description: 'Advanced email discovery and verification tool for Nigerian B2B market',
    category: 'productivity',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'emailscraper-pro',
    icon: '🔍',
    revenueModel: 'Tiered subscription (Free/₦5k/₦15k/₦50k)',
    monthlyRevenue: 0,
    techStack: ['NestJS', 'MongoDB', 'Custom scraper', 'Hunter.io API'],
    teamSize: 2,
    timeline: 'Q2 2026 (8 weeks)',
    priority: 14,
    dependencies: [],
    integrations: ['LinkedIn', 'Hunter.io', 'CRM systems'],
    tags: ['lead-generation', 'sales', 'email', 'b2b'],
    links: {},
    features: [
      'Email finding from LinkedIn/company domains',
      'Real-time email verification',
      'Lead enrichment with company data',
      'Bulk CSV operations',
      'API access for automation',
      'Nigerian business directory scraping'
    ],
    challenges: ['Email privacy regulations', 'API rate limits'],
    opportunities: ['Sales team partnerships', 'Recruitment agencies'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_015',
    name: 'SAFE AI',
    description: 'AI-powered security intelligence platform for Nigerian police and private security',
    category: 'security',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'safe-ai',
    icon: '🛡️',
    revenueModel: 'Government contracts + private subscriptions',
    monthlyRevenue: 0,
    techStack: ['React Native', 'NestJS', 'PostgreSQL', 'TensorFlow', 'Python'],
    teamSize: 5,
    timeline: '18-24 months (pilot to deployment)',
    priority: 15,
    dependencies: [],
    integrations: ['Facial recognition', 'Vehicle plate recognition', 'GIS'],
    tags: ['security', 'law-enforcement', 'ai', 'crime-prevention'],
    links: {},
    features: [
      'Incident reporting & management',
      'Criminal database & pattern recognition',
      'Predictive policing (crime hotspots)',
      'Investigation tools',
      'Secure officer communication',
      'Body cam footage management'
    ],
    challenges: ['Government bureaucracy', 'Data privacy compliance', 'Infrastructure'],
    opportunities: ['Police partnerships', 'Private security companies', 'International expansion'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_016',
    name: 'Naija FitHer',
    description: 'Weight loss and wellness platform specifically for Nigerian women',
    category: 'health',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'naija-fither',
    icon: '💪',
    revenueModel: 'Freemium + coaching (₦3k/month premium)',
    monthlyRevenue: 0,
    techStack: ['React Native', 'NestJS', 'MongoDB', 'AI APIs'],
    teamSize: 4,
    timeline: '6 months to MVP (Q2 2026)',
    priority: 16,
    dependencies: [],
    integrations: ['WhatsApp', 'Fitness trackers', 'Nutrition databases'],
    tags: ['health', 'fitness', 'women', 'weight-loss', 'nigeria'],
    links: {},
    features: [
      'Personalized Nigerian meal plans',
      'Home workouts (no gym equipment)',
      'Community & accountability (WhatsApp groups)',
      'Health tracking',
      'AI wellness coach',
      'Nigerian food database (500+ dishes)'
    ],
    challenges: ['Nutrition data accuracy', 'User retention'],
    opportunities: ['Corporate wellness programs', 'Insurance partnerships'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_017',
    name: 'AfroHustle OS',
    description: 'Notion-style workspace with 100 proven side-hustle blueprints',
    category: 'education',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'afrohustle-os',
    icon: '💼',
    revenueModel: 'One-time or subscription (₦5k-₦15k one-time or ₦2k/month)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Notion-like editor', 'Database'],
    teamSize: 2,
    timeline: 'Q3 2026',
    priority: 17,
    dependencies: [],
    integrations: [],
    tags: ['side-hustle', 'education', 'templates', 'productivity'],
    links: {},
    features: [
      '100 side-hustle blueprints',
      'Income tracker',
      'Community accountability circles',
      'Progress tracking',
      'Resource library'
    ],
    challenges: ['Content creation', 'User engagement'],
    opportunities: ['University partnerships', 'Youth empowerment programs'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_018',
    name: 'NaijaGig Matcher',
    description: 'Hyper-local gig marketplace for artisans',
    category: 'marketplace',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'naijagig-matcher',
    icon: '🔧',
    revenueModel: 'Commission (10-15%)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Geolocation', 'Payment processing', 'Reviews'],
    teamSize: 3,
    timeline: 'Q3 2026',
    priority: 18,
    dependencies: [],
    integrations: ['Payment gateways', 'Maps API'],
    tags: ['marketplace', 'gigs', 'artisans', 'local-services'],
    links: {},
    features: [
      'Gig worker profiles',
      'Location-based matching',
      'Wallet payout same-day',
      'Reviews and ratings',
      'Job posting and bidding'
    ],
    challenges: ['Quality control', 'Payment disputes'],
    opportunities: ['Corporate contracts', 'Training partnerships'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_019',
    name: 'KoloAI',
    description: 'Digital thrift collector (esusu/ajo) with AI default prediction',
    category: 'fintech',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'kolo-ai',
    icon: '👥',
    revenueModel: 'Monthly subscription per group (₦5k-₦10k)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'AI/ML', 'Payment processing', 'Group management'],
    teamSize: 3,
    timeline: 'Q4 2026',
    priority: 19,
    dependencies: [],
    integrations: ['Bank APIs', 'Credit scoring'],
    tags: ['fintech', 'thrift', 'savings', 'groups', 'ai'],
    links: {},
    features: [
      'Group thrift management',
      'AI predicts who will default',
      'Auto-pause contributions for risky members',
      'Payment reminders',
      'Savings analytics'
    ],
    challenges: ['Default prediction accuracy', 'Regulatory compliance'],
    opportunities: ['Microfinance partnerships', 'Credit building'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_020',
    name: 'BorderlessRemit Tracker',
    description: 'Real-time remittance rate comparison',
    category: 'fintech',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'borderless-remit-tracker',
    icon: '💱',
    revenueModel: 'Affiliate commissions',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Real-time data', 'Comparison engine'],
    teamSize: 2,
    timeline: 'Q4 2026',
    priority: 20,
    dependencies: [],
    integrations: ['Remittance APIs', 'Bank APIs'],
    tags: ['fintech', 'remittance', 'comparison', 'money-transfer'],
    links: {},
    features: [
      'Compare bank rates vs. black market',
      'Receipt generator',
      'Affiliate links to licensed services',
      'Rate alerts',
      'Transfer tracking'
    ],
    challenges: ['Data accuracy', 'Regulatory compliance'],
    opportunities: ['Remittance company partnerships', 'Financial education'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_021',
    name: 'ReceiptGenius NG',
    description: 'Instant VAT-compliant invoice/receipt generator',
    category: 'fintech',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'receipt-genius-ng',
    icon: '🧾',
    revenueModel: 'Subscription (₦1k/month)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Document generation', 'SMS/Email'],
    teamSize: 2,
    timeline: 'Q4 2026',
    priority: 21,
    dependencies: [],
    integrations: ['SMS APIs', 'Email services', 'FIRS compliance'],
    tags: ['fintech', 'invoicing', 'receipts', 'tax', 'business-tools'],
    links: {},
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
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_022',
    name: 'PowerAlert NG',
    description: 'Crowd-sourced NEPA light tracker + solar calculator',
    category: 'utilities',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'power-alert-ng',
    icon: '⚡',
    revenueModel: 'Lead generation to solar installers (₦2k-₦5k/lead)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Geolocation', 'Crowdsourcing', 'Calculator'],
    teamSize: 2,
    timeline: 'Q4 2026',
    priority: 22,
    dependencies: [],
    integrations: ['Maps API', 'Solar data APIs'],
    tags: ['utilities', 'energy', 'solar', 'crowdsourcing'],
    links: {},
    features: [
      'Real-time NEPA status by area',
      'Solar calculator (panels + batteries needed)',
      'Installer directory',
      'Energy cost tracking',
      'Outage reporting'
    ],
    challenges: ['Data accuracy', 'User contributions'],
    opportunities: ['Solar company partnerships', 'Energy efficiency consulting'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_023',
    name: 'FarmGate Direct',
    description: 'Direct farmer-to-buyer marketplace',
    category: 'marketplace',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'farmgate-direct',
    icon: '🌾',
    revenueModel: 'Commission (3-5%) or listing fee (₦3k/season)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Marketplace', 'Logistics', 'Quality verification'],
    teamSize: 4,
    timeline: 'Q4 2026',
    priority: 23,
    dependencies: [],
    integrations: ['Logistics APIs', 'Payment gateways', 'Weather APIs'],
    tags: ['agriculture', 'marketplace', 'farmers', 'produce', 'logistics'],
    links: {},
    features: [
      'Farmers post produce + price + location',
      'Buyers contact directly',
      'Quality verification',
      'Logistics coordination',
      'Market price tracking'
    ],
    challenges: ['Quality control', 'Logistics management'],
    opportunities: ['Export partnerships', 'Agricultural financing'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_024',
    name: 'AfroCopy AI',
    description: 'African-trained copywriting tool with local languages and slang',
    category: 'ai',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'afrocopy-ai',
    icon: '✍️',
    revenueModel: 'Subscription (₦2k-₦5k/month)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'AI language models', 'Local training data'],
    teamSize: 3,
    timeline: 'Q4 2026',
    priority: 24,
    dependencies: [],
    integrations: [],
    tags: ['ai', 'copywriting', 'content', 'marketing', 'african'],
    links: {},
    features: [
      'Pidgin, Yoruba slang, Igbo proverbs, Hausa vibes',
      'Social media captions',
      'Ad copy',
      'Email templates',
      'Blog content generation'
    ],
    challenges: ['Training data collection', 'Language accuracy'],
    opportunities: ['Marketing agencies', 'Content creators', 'International expansion'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_025',
    name: 'Skill2Cash Board',
    description: 'Anonymous job board for "unserious" skills with video profiles',
    category: 'marketplace',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'skill2cash-board',
    icon: '🎭',
    revenueModel: 'Listing fee (₦500/month) or commission (10%)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Video upload', 'Payment escrow', 'Anonymous profiles'],
    teamSize: 3,
    timeline: 'Q4 2026',
    priority: 25,
    dependencies: [],
    integrations: ['Video hosting', 'Payment processing'],
    tags: ['marketplace', 'gigs', 'gen-z', 'creative', 'video'],
    links: {},
    features: [
      'No CV required (30-sec video + price)',
      'Skills: DJ, makeup, tailoring, phone repair',
      'Instant booking',
      'Payment escrow',
      'Anonymous profiles'
    ],
    challenges: ['Quality control', 'Safety and verification'],
    opportunities: ['University partnerships', 'Event industry connections'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_026',
    name: 'AnonTruth Mic',
    description: 'Temporary anonymous audio drop platform for whistleblowers and activists',
    category: 'social',
    status: 'CONCEPT',
    version: '0.0.1',
    slug: 'anontruth-mic',
    icon: '🎤',
    revenueModel: 'Boost feature (₦500-₦1k to boost drops)',
    monthlyRevenue: 0,
    techStack: ['Next.js', 'Audio recording', 'Encryption', 'Geolocation', 'Auto-delete'],
    teamSize: 4,
    timeline: 'Q4 2026 (High risk - legal review needed)',
    priority: 26,
    dependencies: [],
    integrations: [],
    tags: ['social', 'anonymous', 'audio', 'whistleblower', 'high-risk'],
    links: {},
    features: [
      '100% anonymous + encrypted',
      'Temporary (auto-delete after time)',
      'Location-targeted (state/LGA level)',
      'Boost feature (paid visibility)',
      'Voice distortion options'
    ],
    challenges: ['Legal risks (defamation, abuse)', 'Moderation', 'Platform abuse'],
    opportunities: ['Journalism partnerships', 'Community feedback'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_027',
    name: 'AmeboGist TWA',
    description: 'Mobile app (Trusted Web Activity) for AmeboGist.ng',
    category: 'media',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'amebogist-twa',
    icon: '📱',
    revenueModel: 'Mobile AdSense revenue',
    monthlyRevenue: 0,
    techStack: ['PWA', 'Android', 'Trusted Web Activity'],
    teamSize: 1,
    timeline: 'Q2 2026',
    priority: 27,
    dependencies: ['amebogist'],
    integrations: ['Google Play Store', 'Mobile ads'],
    tags: ['mobile', 'pwa', 'android', 'news'],
    links: {},
    features: [
      'Mobile-optimized news reading',
      'Push notifications',
      'Offline reading',
      'Mobile ad integration',
      'App store distribution'
    ],
    challenges: ['App store approval', 'Mobile performance'],
    opportunities: ['Mobile user growth', 'In-app purchases'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_028',
    name: 'EduCenter TWA',
    description: 'Mobile app for EduCenter educational platform',
    category: 'education',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'educenter-twa',
    icon: '📚',
    revenueModel: 'Mobile subscription management',
    monthlyRevenue: 0,
    techStack: ['PWA', 'Android', 'In-app payments'],
    teamSize: 1,
    timeline: 'Q2 2026',
    priority: 28,
    dependencies: ['educenter'],
    integrations: ['Google Play Billing', 'Mobile payments'],
    tags: ['mobile', 'education', 'android', 'subscription'],
    links: {},
    features: [
      'Mobile course access',
      'In-app payments',
      'Offline content',
      'Progress tracking',
      'Mobile notifications'
    ],
    challenges: ['Payment integration', 'Content delivery'],
    opportunities: ['Mobile learning growth', 'Parent tracking features'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_029',
    name: 'BoldMind OS TWA',
    description: 'Mobile companion app for BoldMind OS',
    category: 'productivity',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'boldmind-os-twa',
    icon: '🧠',
    revenueModel: 'Mobile Pro subscription',
    monthlyRevenue: 0,
    techStack: ['PWA', 'Android', 'Mobile-first features'],
    teamSize: 2,
    timeline: 'Q2 2026 (after BoldMind OS MVP)',
    priority: 29,
    dependencies: ['boldmind-os'],
    integrations: ['Mobile sensors', 'Notifications'],
    tags: ['mobile', 'productivity', 'adhd', 'android'],
    links: {},
    features: [
      'Mobile capture (voice, photos)',
      'Focus timer on mobile',
      'Quick notes and reminders',
      'Mobile analytics',
      'Offline functionality'
    ],
    challenges: ['Mobile performance', 'Battery optimization'],
    opportunities: ['Mobile-first users', 'Wearable integration'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_030',
    name: 'Naija FitHer TWA',
    description: 'Mobile app for weight loss and wellness platform',
    category: 'health',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'naija-fither-twa',
    icon: '💪',
    revenueModel: 'Mobile premium subscriptions',
    monthlyRevenue: 0,
    techStack: ['PWA', 'Android', 'Health tracking'],
    teamSize: 2,
    timeline: 'Q3 2026 (after Naija FitHer web)',
    priority: 30,
    dependencies: ['naija-fither'],
    integrations: ['Health sensors', 'Mobile cameras'],
    tags: ['mobile', 'health', 'fitness', 'android', 'women'],
    links: {},
    features: [
      'Mobile workout videos',
      'Meal plan tracking',
      'Progress photos',
      'Community chat',
      'Health reminders'
    ],
    challenges: ['Health data privacy', 'Mobile storage'],
    opportunities: ['Wearable integration', 'Health data analytics'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_031',
    name: 'EmailScraper TWA',
    description: 'Mobile app for lead generation tool',
    category: 'productivity',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'emailscraper-twa',
    icon: '🔍',
    revenueModel: 'Mobile subscriptions',
    monthlyRevenue: 0,
    techStack: ['PWA', 'Android', 'Mobile APIs'],
    teamSize: 1,
    timeline: 'Q3 2026 (after EmailScraper Pro web)',
    priority: 31,
    dependencies: ['emailscraper-pro'],
    integrations: ['Mobile contacts', 'Camera for business cards'],
    tags: ['mobile', 'sales', 'lead-generation', 'android'],
    links: {},
    features: [
      'Mobile contact scanning',
      'Business card scanning',
      'On-the-go lead lookup',
      'Mobile notifications',
      'Quick actions'
    ],
    challenges: ['Mobile camera quality', 'OCR accuracy'],
    opportunities: ['Sales teams on mobile', 'Conference networking'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  },
  {
    id: 'prod_032',
    name: 'SAFE AI Native',
    description: 'Full React Native mobile app for SAFE AI (police officers)',
    category: 'security',
    status: 'PLANNED',
    version: '0.0.1',
    slug: 'safe-ai-native',
    icon: '📱',
    revenueModel: 'Government deployment',
    monthlyRevenue: 0,
    techStack: ['React Native', 'iOS', 'Android', 'Offline-first'],
    teamSize: 4,
    timeline: 'Q4 2026 (after SAFE AI pilot)',
    priority: 32,
    dependencies: ['safe-ai'],
    integrations: ['Mobile cameras', 'GPS', 'Offline storage'],
    tags: ['mobile', 'security', 'react-native', 'ios', 'android'],
    links: {},
    features: [
      'Offline incident reporting',
      'Voice-to-text reports (Pidgin/English)',
      'Photo/video evidence upload',
      'GPS location tagging',
      'Real-time officer communication'
    ],
    challenges: ['Offline functionality', 'Mobile security'],
    opportunities: ['Government contracts', 'Field officer adoption'],
    createdAt: '2025-12-26',
    updatedAt: '2025-12-26'
  }
];

export function getProductById(id: string): Product | undefined {
  return BOLDMIND_PRODUCTS.find(product => product.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return BOLDMIND_PRODUCTS.find(product => product.slug === slug);
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

  // Estimate growth for building/planned products
  const buildingRevenue = getBuildingProducts().length * 100000 * months * 0.5; // 50% chance of launch
  const plannedRevenue = getPlannedProducts().length * 50000 * months * 0.3; // 30% chance of launch

  return liveRevenue + buildingRevenue + plannedRevenue;
}

// Team size calculations
export function calculateTotalTeamSize(): number {
  const uniqueTeamSizes = new Set<number>();
  BOLDMIND_PRODUCTS.forEach(product => {
    if (product.teamSize) uniqueTeamSizes.add(product.teamSize);
  });

  return Array.from(uniqueTeamSizes).reduce((total, size) => total + size, 0);
}

// Timeline analysis
export function getUpcomingReleases(months: number = 6): Product[] {
  const now = new Date();
  const future = new Date();
  future.setMonth(future.getMonth() + months);

  return BOLDMIND_PRODUCTS.filter(product => {
    if (!product.timeline) return false;

    // Simple parsing of timeline strings
    const timelineMatch = product.timeline.match(/Q(\d) (\d{4})/);
    if (timelineMatch) {
      const quarter = parseInt(timelineMatch[1]);
      const year = parseInt(timelineMatch[2]);

      const releaseDate = new Date(year, (quarter - 1) * 3, 1);
      return releaseDate >= now && releaseDate <= future;
    }

    return false;
  });
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
  const liveProducts = getLiveProducts();
  const buildingProducts = getBuildingProducts();
  const plannedProducts = getPlannedProducts();
  const conceptProducts = getConceptProducts();

  return {
    total: BOLDMIND_PRODUCTS.length,
    live: liveProducts.length,
    building: buildingProducts.length,
    planned: plannedProducts.length,
    concept: conceptProducts.length,
    revenue: calculateTotalMonthlyRevenue(),
    teamSize: calculateTotalTeamSize(),
    upcomingReleases: getUpcomingReleases(6).length
  };
}

export default BOLDMIND_PRODUCTS;