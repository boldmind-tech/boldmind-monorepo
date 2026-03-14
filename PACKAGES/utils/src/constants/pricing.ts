// packages/utils/src/constants/pricing.ts
// Last updated: February 2026 — All 32 BoldMind products included

export interface PricingTier {
    name: 'free' | 'basic' | 'pro' | 'enterprise';
    priceMonthly: number;
    priceYearly: number;
    currency: 'NGN' | 'USD';
    features: string[];
    limits?: {
        [key: string]: number | string;
    };
}

export interface ProductPricing {
    productSlug: string;
    productName: string;
    tiers: PricingTier[];
    oneTimePrices?: {
        name: string;
        price: number;
        currency: 'NGN' | 'USD';
        description: string;
    }[];
}

export const BOLDMIND_PRICING: ProductPricing[] = [

    // ================================================================
    // === LIVE PRODUCTS ===============================================
    // ================================================================

    {
        productSlug: 'amebogist',
        productName: 'AmeboGist',
        tiers: [
            {
                name: 'free',
                priceMonthly: 0,
                priceYearly: 0,
                currency: 'NGN',
                features: [
                    'Read unlimited articles',
                    'Comment on posts',
                    'Basic news alerts',
                    'Ad-supported experience',
                ],
            },
            {
                name: 'basic',
                priceMonthly: 1000,
                priceYearly: 10000,
                currency: 'NGN',
                features: [
                    'All Free features',
                    'Create and publish articles',
                    'Priority trending alerts',
                    'Reduced ads',
                    'Creator analytics',
                ],
                limits: { articlesPerMonth: 10 },
            },
            {
                name: 'pro',
                priceMonthly: 3000,
                priceYearly: 30000,
                currency: 'NGN',
                features: [
                    'All Basic features',
                    'Unlimited articles',
                    'Ad-free experience',
                    'Advanced analytics',
                    'Revenue sharing (60%)',
                    'Featured placement',
                    'Custom author page',
                ],
                limits: { articlesPerMonth: 'unlimited' },
            },
        ],
    },

    {
        productSlug: 'educenter',
        productName: 'EduCenter',
        tiers: [
            {
                name: 'free',
                priceMonthly: 0,
                priceYearly: 0,
                currency: 'NGN',
                features: [
                    '5 practice questions/day',
                    'Basic exam prep',
                    '1 subject',
                    'Weekly progress reports',
                ],
                limits: { questionsPerDay: 5, subjects: 1 },
            },
            {
                name: 'basic',
                priceMonthly: 3000,
                priceYearly: 30000,
                currency: 'NGN',
                features: [
                    'Unlimited practice questions',
                    'All subjects (JAMB/WAEC/NECO)',
                    'CBT simulation',
                    'Performance analytics',
                    'Study streaks & leaderboard',
                    'Downloadable notes',
                ],
                limits: { questionsPerDay: 'unlimited', subjects: 'all' },
            },
            {
                name: 'pro',
                priceMonthly: 5000,
                priceYearly: 50000,
                currency: 'NGN',
                features: [
                    'All Basic features',
                    'Digital business courses',
                    'AI tools training',
                    'Marketing playbooks',
                    'Live Q&A sessions',
                    'Certificate of completion',
                    'Priority support',
                ],
            },
        ],
    },

    {
        productSlug: 'ai-receptionist',
        productName: 'AI Receptionist',
        tiers: [
            {
                name: 'basic',
                priceMonthly: 20000,
                priceYearly: 200000,
                currency: 'NGN',
                features: [
                    'Auto-reply on Instagram & Facebook',
                    '500 leads/month',
                    'Basic lead qualification',
                    'Email notifications',
                    'Monthly analytics',
                ],
                limits: { leadsPerMonth: 500, platforms: 2 },
            },
            {
                name: 'pro',
                priceMonthly: 35000,
                priceYearly: 350000,
                currency: 'NGN',
                features: [
                    'All Basic features',
                    'WhatsApp integration',
                    '2,000 leads/month',
                    'Advanced lead qualification',
                    'Appointment booking',
                    'CRM integration',
                    'Real-time dashboard',
                ],
                limits: { leadsPerMonth: 2000, platforms: 3 },
            },
            {
                name: 'enterprise',
                priceMonthly: 50000,
                priceYearly: 500000,
                currency: 'NGN',
                features: [
                    'All Pro features',
                    'Unlimited leads',
                    'Multi-location support',
                    'Custom AI training',
                    'Priority support',
                    'Dedicated account manager',
                    'Custom integrations',
                ],
                limits: { leadsPerMonth: 'unlimited', platforms: 'all' },
            },
        ],
    },

    // ================================================================
    // === BUILDING PRODUCTS ===========================================
    // ================================================================

    {
        productSlug: 'social-factory',
        productName: 'Social Media Content Factory',
        tiers: [
            {
                name: 'free',
                priceMonthly: 0,
                priceYearly: 0,
                currency: 'NGN',
                features: [
                    '5 AI-generated videos/month',
                    '2 social accounts',
                    'Basic templates',
                    'Manual publishing',
                ],
                limits: { videosPerMonth: 5, accounts: 2 },
            },
            {
                name: 'basic',
                priceMonthly: 10000,
                priceYearly: 100000,
                currency: 'NGN',
                features: [
                    '50 AI-generated videos/month',
                    '5 social accounts',
                    'Premium templates',
                    'Scheduled publishing',
                    'Basic analytics',
                ],
                limits: { videosPerMonth: 50, accounts: 5 },
            },
            {
                name: 'pro',
                priceMonthly: 25000,
                priceYearly: 250000,
                currency: 'NGN',
                features: [
                    '200 AI-generated videos/month',
                    'Unlimited accounts',
                    'Custom templates',
                    'Advanced scheduling',
                    'Detailed analytics',
                    'Multi-platform publishing',
                ],
                limits: { videosPerMonth: 200, accounts: 'unlimited' },
            },
            {
                name: 'enterprise',
                priceMonthly: 50000,
                priceYearly: 500000,
                currency: 'NGN',
                features: [
                    'Unlimited videos',
                    'White-label option',
                    'API access',
                    'Custom AI training',
                    'Priority support',
                    'Team collaboration',
                ],
                limits: { videosPerMonth: 'unlimited', accounts: 'unlimited' },
            },
        ],
    },

    {
        productSlug: 'boldmind-os',
        productName: 'BoldMind OS',
        tiers: [
            {
                name: 'free',
                priceMonthly: 0,
                priceYearly: 0,
                currency: 'NGN',
                features: [
                    'Basic note capture',
                    'Simple Pomodoro timer',
                    '50 notes/month',
                    'Basic knowledge graph',
                ],
                limits: { notesPerMonth: 50 },
            },
            {
                name: 'basic',
                priceMonthly: 5000,
                priceYearly: 50000,
                currency: 'NGN',
                features: [
                    'Multi-modal capture (text, voice, image)',
                    'ADHD-friendly Pomodoro',
                    'Unlimited notes',
                    'Visual knowledge graph',
                    'Basic analytics',
                    'Dyslexia Mode',
                ],
                limits: { notesPerMonth: 'unlimited' },
            },
            {
                name: 'pro',
                priceMonthly: 15000,
                priceYearly: 150000,
                currency: 'NGN',
                features: [
                    'All Basic features',
                    'AI content pipeline',
                    'Advanced analytics',
                    'Team collaboration',
                    'Custom workflows',
                    'Priority support',
                    'n8n integration',
                ],
            },
        ],
    },

    {
        productSlug: 'naija-fither',
        productName: 'Naija FitHer',
        tiers: [
            {
                name: 'free',
                priceMonthly: 0,
                priceYearly: 0,
                currency: 'NGN',
                features: [
                    'Basic workout plans',
                    'Nigerian meal database (100 dishes)',
                    'Weight tracking',
                    'Community access',
                ],
            },
            {
                name: 'basic',
                priceMonthly: 3000,
                priceYearly: 30000,
                currency: 'NGN',
                features: [
                    'All Free features',
                    'Personalized Nigerian meal plans',
                    'Custom workout routines',
                    'Progress tracking & photos',
                    'Weekly challenges',
                    '500+ Nigerian dishes database',
                ],
            },
            {
                name: 'pro',
                priceMonthly: 8000,
                priceYearly: 80000,
                currency: 'NGN',
                features: [
                    'All Basic features',
                    'AI wellness coach',
                    'Video workout tutorials',
                    'Live group sessions',
                    'Nutritionist consultations',
                    'Advanced health analytics',
                    'Corporate wellness dashboard',
                ],
            },
        ],
    },

    {
        productSlug: 'emailscraper-pro',
        productName: 'EmailScraper Pro',
        tiers: [
            {
                name: 'free',
                priceMonthly: 0,
                priceYearly: 0,
                currency: 'NGN',
                features: [
                    '100 email finds/month',
                    'Basic verification',
                    'Manual search',
                ],
                limits: { emailFindsPerMonth: 100 },
            },
            {
                name: 'basic',
                priceMonthly: 5000,
                priceYearly: 50000,
                currency: 'NGN',
                features: [
                    '1,000 email finds/month',
                    'Real-time verification',
                    'Bulk CSV operations',
                    'Lead enrichment',
                    'Export to CRM',
                ],
                limits: { emailFindsPerMonth: 1000 },
            },
            {
                name: 'pro',
                priceMonthly: 15000,
                priceYearly: 150000,
                currency: 'NGN',
                features: [
                    '10,000 email finds/month',
                    'Advanced verification',
                    'API access',
                    'Automated workflows',
                    'LinkedIn scraping',
                    'Nigerian business directory scraping',
                    'Priority support',
                ],
                limits: { emailFindsPerMonth: 10000 },
            },
            {
                name: 'enterprise',
                priceMonthly: 50000,
                priceYearly: 500000,
                currency: 'NGN',
                features: [
                    'Unlimited email finds',
                    'White-label option',
                    'Custom integrations',
                    'Dedicated support',
                    'Team accounts',
                ],
                limits: { emailFindsPerMonth: 'unlimited' },
            },
        ],
    },

    // ================================================================
    // === PLANAI SUITE ================================================
    // ================================================================

    {
        productSlug: 'credibility-hubs',
        productName: 'Professional Credibility Hubs',
        tiers: [],
        oneTimePrices: [
            {
                name: 'Basic Portfolio',
                price: 5000,
                currency: 'NGN',
                description: 'Single-page portfolio with basic templates',
            },
            {
                name: 'Pro Portfolio',
                price: 10000,
                currency: 'NGN',
                description: 'Multi-page portfolio with custom design',
            },
            {
                name: 'Premium Package',
                price: 15000,
                currency: 'NGN',
                description: 'Portfolio + LinkedIn optimization + Resume',
            },
        ],
    },

    {
        productSlug: 'business-planning',
        productName: 'AI Business Planning',
        tiers: [],
        oneTimePrices: [
            {
                name: 'Basic Plan',
                price: 10000,
                currency: 'NGN',
                description: 'AI-generated business plan',
            },
            {
                name: 'Pro Plan',
                price: 20000,
                currency: 'NGN',
                description: 'Business plan + pitch deck + market analysis',
            },
            {
                name: 'Complete Package',
                price: 35000,
                currency: 'NGN',
                description: 'Everything + financial projections + consultation',
            },
        ],
    },

    {
        productSlug: 'financial-forecasting',
        productName: 'Financial Forecasting',
        tiers: [
            {
                name: 'basic',
                priceMonthly: 8000,
                priceYearly: 80000,
                currency: 'NGN',
                features: [
                    'Cashflow projections',
                    'Revenue forecasting',
                    'Basic financial models',
                    '3 scenarios',
                ],
            },
            {
                name: 'pro',
                priceMonthly: 15000,
                priceYearly: 150000,
                currency: 'NGN',
                features: [
                    'All Basic features',
                    'Break-even analysis',
                    'Unlimited scenarios',
                    'Bank integrations',
                    'Monthly consultations',
                ],
            },
        ],
    },

    {
        productSlug: 'branding-design',
        productName: 'Branding & Design Tools',
        tiers: [],
        oneTimePrices: [
            {
                name: 'Logo Package',
                price: 3000,
                currency: 'NGN',
                description: '3 logo concepts + color palette',
            },
            {
                name: 'Branding Kit',
                price: 8000,
                currency: 'NGN',
                description: 'Logo + brand guidelines + social media templates',
            },
            {
                name: 'Complete Package',
                price: 15000,
                currency: 'NGN',
                description: 'Everything + marketing materials + stationery design',
            },
        ],
    },

    {
        productSlug: 'digital-storefronts',
        productName: 'Digital Storefronts',
        tiers: [
            {
                name: 'basic',
                priceMonthly: 2000,
                priceYearly: 20000,
                currency: 'NGN',
                features: [
                    'Instant store setup',
                    '50 products',
                    'Paystack integration',
                    'Basic inventory',
                    'Order management',
                ],
                limits: { products: 50 },
            },
            {
                name: 'pro',
                priceMonthly: 5000,
                priceYearly: 50000,
                currency: 'NGN',
                features: [
                    'Unlimited products',
                    'Advanced inventory management',
                    'WhatsApp commerce',
                    'Customer CRM',
                    'Analytics dashboard',
                    'Custom domain',
                ],
                limits: { products: 'unlimited' },
            },
        ],
        oneTimePrices: [
            {
                name: 'Setup Fee',
                price: 5000,
                currency: 'NGN',
                description: 'One-time store setup and configuration',
            },
        ],
    },

    {
        productSlug: 'marketing-automation',
        productName: 'Marketing Automation',
        tiers: [
            {
                name: 'basic',
                priceMonthly: 10000,
                priceYearly: 100000,
                currency: 'NGN',
                features: [
                    'Email automation',
                    '1,000 contacts',
                    'Basic segmentation',
                    '5 campaigns/month',
                ],
                limits: { contacts: 1000, campaignsPerMonth: 5 },
            },
            {
                name: 'pro',
                priceMonthly: 20000,
                priceYearly: 200000,
                currency: 'NGN',
                features: [
                    '10,000 contacts',
                    'Advanced segmentation',
                    'Unlimited campaigns',
                    'A/B testing',
                    'CRM integration',
                    'Lead scoring',
                ],
                limits: { contacts: 10000, campaignsPerMonth: 'unlimited' },
            },
        ],
    },

    {
        // NEW — was missing from original file
        productSlug: 'analytics-dashboard',
        productName: 'Analytics Dashboard',
        tiers: [
            {
                name: 'free',
                priceMonthly: 0,
                priceYearly: 0,
                currency: 'NGN',
                features: [
                    'Basic traffic overview',
                    'Sales summary',
                    '30-day data retention',
                    '1 connected data source',
                ],
                limits: { sources: 1, dataRetentionDays: 30 },
            },
            {
                name: 'basic',
                priceMonthly: 8000,
                priceYearly: 80000,
                currency: 'NGN',
                features: [
                    'Unified multi-platform analytics',
                    'Behaviour insights',
                    '5 connected sources',
                    '90-day data retention',
                    'Weekly automated reports',
                    'Custom dashboards',
                ],
                limits: { sources: 5, dataRetentionDays: 90 },
            },
            {
                name: 'pro',
                priceMonthly: 20000,
                priceYearly: 200000,
                currency: 'NGN',
                features: [
                    'All Basic features',
                    'Unlimited connected sources',
                    '1-year data retention',
                    'AI growth recommendations',
                    'Competitor benchmarking',
                    'API data export',
                    'Team access (up to 5 seats)',
                ],
                limits: { sources: 'unlimited', dataRetentionDays: 365 },
            },
        ],
    },

    {
        // NEW — was missing from original file
        productSlug: 'investor-readiness',
        productName: 'Investor Readiness Suite',
        tiers: [
            {
                name: 'pro',
                priceMonthly: 10000,
                priceYearly: 100000,
                currency: 'NGN',
                features: [
                    'Cap table management',
                    'Monthly investor update templates',
                    'Document version control',
                    'Secure data room (link sharing)',
                    'E-signature integration',
                ],
            },
        ],
        oneTimePrices: [
            {
                name: 'Starter Kit',
                price: 25000,
                currency: 'NGN',
                description: 'Pitch deck template + cap table setup + investor one-pager',
            },
            {
                name: 'Full Suite',
                price: 50000,
                currency: 'NGN',
                description: 'SAFE/term sheet templates + data room + due diligence checklist',
            },
            {
                name: 'Premium Package',
                price: 100000,
                currency: 'NGN',
                description: 'Everything + financial model + 1 investor intro + consultation',
            },
        ],
    },

    // ================================================================
    // === CONCEPT PRODUCTS ============================================
    // ================================================================

    {
        productSlug: 'safe-ai',
        productName: 'SAFE AI (Police Security)',
        tiers: [
            {
                name: 'basic',
                priceMonthly: 100000,
                priceYearly: 1000000,
                currency: 'NGN',
                features: [
                    'Basic incident reporting',
                    '100 officers',
                    'Criminal database access',
                    'Monthly operational reports',
                ],
                limits: { officers: 100 },
            },
            {
                name: 'enterprise',
                priceMonthly: 500000,
                priceYearly: 5000000,
                currency: 'NGN',
                features: [
                    'Unlimited officers',
                    'AI pattern recognition',
                    'Predictive analytics',
                    'Real-time alerts',
                    'Custom government integrations',
                    'Dedicated support + SLA',
                ],
                limits: { officers: 'unlimited' },
            },
        ],
    },

    {
        productSlug: 'kolo-ai',
        productName: 'KoloAI',
        tiers: [
            {
                name: 'basic',
                priceMonthly: 5000,
                priceYearly: 50000,
                currency: 'NGN',
                features: [
                    'Group thrift (ajo) management',
                    'Up to 20 members',
                    'Basic AI contribution predictions',
                    'Payment reminders via WhatsApp',
                    'Monthly contribution history',
                ],
                limits: { members: 20 },
            },
            {
                name: 'pro',
                priceMonthly: 10000,
                priceYearly: 100000,
                currency: 'NGN',
                features: [
                    'All Basic features',
                    'Up to 50 members',
                    'Advanced AI default predictions',
                    'Auto-pause contributions',
                    'Savings analytics',
                    'Credit score building',
                    'Multi-group management',
                ],
                limits: { members: 50 },
            },
        ],
    },

    {
        // NEW — was missing from original file
        productSlug: 'afrocopy-ai',
        productName: 'AfroCopy AI',
        tiers: [
            {
                name: 'free',
                priceMonthly: 0,
                priceYearly: 0,
                currency: 'NGN',
                features: [
                    '10 AI copy generations/month',
                    'Basic templates (ads, captions)',
                    'English + Pidgin English output',
                ],
                limits: { generationsPerMonth: 10 },
            },
            {
                name: 'basic',
                priceMonthly: 5000,
                priceYearly: 50000,
                currency: 'NGN',
                features: [
                    '200 AI copy generations/month',
                    'All content types (ads, emails, SMS, social)',
                    'Pidgin + Yoruba + Igbo + Hausa tone options',
                    'Brand voice training',
                    'Copy history & favourites',
                ],
                limits: { generationsPerMonth: 200 },
            },
            {
                name: 'pro',
                priceMonthly: 15000,
                priceYearly: 150000,
                currency: 'NGN',
                features: [
                    'Unlimited generations',
                    'Team workspaces',
                    'API access',
                    'Fine-tuned brand voice',
                    'A/B copy variants',
                    'Analytics on best-performing copy',
                ],
                limits: { generationsPerMonth: 'unlimited' },
            },
        ],
    },

    {
        // NEW — was missing from original file
        productSlug: 'afrohustle-os',
        productName: 'AfroHustle OS',
        tiers: [
            {
                name: 'free',
                priceMonthly: 0,
                priceYearly: 0,
                currency: 'NGN',
                features: [
                    'Basic hustle tracker',
                    'Income/expense log',
                    '3 active goals',
                    'Daily task planner',
                ],
                limits: { activeGoals: 3 },
            },
            {
                name: 'basic',
                priceMonthly: 3000,
                priceYearly: 30000,
                currency: 'NGN',
                features: [
                    'All Free features',
                    'Unlimited goals & projects',
                    'AI hustle coach',
                    'Revenue tracking & insights',
                    'Client management (CRM-lite)',
                    'Invoice generator',
                ],
            },
            {
                name: 'pro',
                priceMonthly: 10000,
                priceYearly: 100000,
                currency: 'NGN',
                features: [
                    'All Basic features',
                    'Team / VA collaboration',
                    'Advanced financial reports',
                    'PlanAI suite integration',
                    'Tax estimation tools',
                    'Priority AI coaching',
                ],
            },
        ],
    },

    {
        // NEW — was missing from original file
        productSlug: 'anontruth-mic',
        productName: 'AnonTruth Mic',
        tiers: [
            {
                name: 'free',
                priceMonthly: 0,
                priceYearly: 0,
                currency: 'NGN',
                features: [
                    '1 anonymous audio drop/month',
                    '24-hour auto-delete',
                    'Basic encryption',
                    'Voice distortion',
                ],
                limits: { dropsPerMonth: 1 },
            },
        ],
        oneTimePrices: [
            {
                name: 'Boost Drop',
                price: 500,
                currency: 'NGN',
                description: 'Boost your anonymous audio drop to local audience for 48 hours',
            },
            {
                name: 'Extended Drop',
                price: 1000,
                currency: 'NGN',
                description: 'Keep drop live for 7 days instead of 24 hours',
            },
        ],
    },

    {
        // NEW — was missing from original file
        productSlug: 'borderless-remit',
        productName: 'Borderless Remit',
        tiers: [
            {
                name: 'free',
                priceMonthly: 0,
                priceYearly: 0,
                currency: 'NGN',
                features: [
                    'Send up to $100/month',
                    'NGN to GBP, USD, EUR',
                    'Standard transfer speed (1-2 days)',
                    'Basic rate tracking',
                ],
                limits: { monthlyLimitUSD: 100 },
            },
            {
                name: 'basic',
                priceMonthly: 2000,
                priceYearly: 20000,
                currency: 'NGN',
                features: [
                    'Send up to $1,000/month',
                    '10+ supported currencies',
                    'Faster transfers (same day)',
                    'Rate alerts',
                    'Transfer history',
                ],
                limits: { monthlyLimitUSD: 1000 },
            },
            {
                name: 'pro',
                priceMonthly: 5000,
                priceYearly: 50000,
                currency: 'NGN',
                features: [
                    'Unlimited transfers',
                    'Best exchange rates',
                    'Instant transfers',
                    'Multi-recipient (bulk send)',
                    'Business account support',
                    'Compliance documentation',
                ],
                limits: { monthlyLimitUSD: 'unlimited' },
            },
        ],
    },

    {
        // NEW — was missing from original file
        productSlug: 'farmgate-direct',
        productName: 'FarmGate Direct',
        tiers: [
            {
                name: 'free',
                priceMonthly: 0,
                priceYearly: 0,
                currency: 'NGN',
                features: [
                    'List up to 5 farm products',
                    'Basic buyer discovery',
                    'Price transparency board',
                    'WhatsApp contact sharing',
                ],
                limits: { productListings: 5 },
            },
            {
                name: 'basic',
                priceMonthly: 2000,
                priceYearly: 20000,
                currency: 'NGN',
                features: [
                    'Unlimited product listings',
                    'Verified farmer badge',
                    'Escrow payment protection',
                    'Logistics coordination',
                    'Seasonal price analytics',
                    'Bulk buyer matching',
                ],
                limits: { productListings: 'unlimited' },
            },
            {
                name: 'pro',
                priceMonthly: 8000,
                priceYearly: 80000,
                currency: 'NGN',
                features: [
                    'All Basic features',
                    'AI harvest yield forecasting',
                    'Export market access',
                    'Cold chain logistics partners',
                    'Government subsidy notifications',
                    'Priority listing placement',
                ],
            },
        ],
    },

    {
        // NEW — was missing from original file
        productSlug: 'naijagig-matcher',
        productName: 'NaijaGig Matcher',
        tiers: [
            {
                name: 'free',
                priceMonthly: 0,
                priceYearly: 0,
                currency: 'NGN',
                features: [
                    'Create basic gig profile',
                    'Browse available gigs',
                    '3 applications/month',
                    'Basic matching algorithm',
                ],
                limits: { applicationsPerMonth: 3 },
            },
            {
                name: 'basic',
                priceMonthly: 1500,
                priceYearly: 15000,
                currency: 'NGN',
                features: [
                    'Unlimited applications',
                    'AI-powered gig matching',
                    'Instant new gig notifications',
                    'Portfolio showcase',
                    'Rating & review system',
                    'Secure payment escrow',
                ],
            },
            {
                name: 'pro',
                priceMonthly: 5000,
                priceYearly: 50000,
                currency: 'NGN',
                features: [
                    'All Basic features',
                    'Priority matching (appear first)',
                    'Verified professional badge',
                    'Client relationship tools',
                    'Recurring gig contracts',
                    'Dedicated account support',
                ],
            },
        ],
    },

    {
        // NEW — was missing from original file
        productSlug: 'power-alert',
        productName: 'Power Alert',
        tiers: [
            {
                name: 'free',
                priceMonthly: 0,
                priceYearly: 0,
                currency: 'NGN',
                features: [
                    'NEPA/PHCN schedule tracking',
                    'Basic outage notifications',
                    '1 location tracked',
                    'Community-powered reports',
                ],
                limits: { locations: 1 },
            },
            {
                name: 'basic',
                priceMonthly: 1000,
                priceYearly: 10000,
                currency: 'NGN',
                features: [
                    'Up to 5 locations',
                    'Predictive outage alerts (AI-powered)',
                    'Generator fuel planning reminders',
                    'WhatsApp + SMS alerts',
                    'Monthly uptime reports',
                    'Inverter charge reminders',
                ],
                limits: { locations: 5 },
            },
            {
                name: 'pro',
                priceMonthly: 5000,
                priceYearly: 50000,
                currency: 'NGN',
                features: [
                    'Unlimited locations',
                    'Business continuity planning',
                    'Generator/solar optimization',
                    'Smart home API integration',
                    'Priority outage alerts',
                    'Historical outage analytics by area',
                ],
                limits: { locations: 'unlimited' },
            },
        ],
    },

    {
        // NEW — was missing from original file
        productSlug: 'receipt-genius',
        productName: 'Receipt Genius',
        tiers: [
            {
                name: 'free',
                priceMonthly: 0,
                priceYearly: 0,
                currency: 'NGN',
                features: [
                    '20 receipt scans/month',
                    'Basic expense categorisation',
                    'Manual data correction',
                    'CSV export',
                ],
                limits: { scansPerMonth: 20 },
            },
            {
                name: 'basic',
                priceMonthly: 3000,
                priceYearly: 30000,
                currency: 'NGN',
                features: [
                    '200 scans/month',
                    'AI-powered OCR (Nigerian vendors supported)',
                    'Auto-categorisation',
                    'Expense reports',
                    'Paystack statement import',
                    'WhatsApp receipt forwarding',
                ],
                limits: { scansPerMonth: 200 },
            },
            {
                name: 'pro',
                priceMonthly: 8000,
                priceYearly: 80000,
                currency: 'NGN',
                features: [
                    'Unlimited scans',
                    'Tax report generation',
                    'Multi-user team access',
                    'Accounting software export (QuickBooks, Sage)',
                    'Vendor analytics & spend tracking',
                    'Priority OCR processing',
                ],
                limits: { scansPerMonth: 'unlimited' },
            },
        ],
    },

    {
        // NEW — was missing from original file
        productSlug: 'skill2cash',
        productName: 'Skill2Cash',
        tiers: [
            {
                name: 'free',
                priceMonthly: 0,
                priceYearly: 0,
                currency: 'NGN',
                features: [
                    'Create skill profile (30-sec video)',
                    'List 1 service',
                    'Basic discovery',
                    'Paystack payment link',
                ],
                limits: { serviceListings: 1 },
            },
            {
                name: 'basic',
                priceMonthly: 1000,
                priceYearly: 10000,
                currency: 'NGN',
                features: [
                    'Up to 5 service listings',
                    'Priority placement in search',
                    'Booking calendar',
                    'Payment escrow',
                    'Anonymous profile option',
                    'Rating & review system',
                ],
                limits: { serviceListings: 5 },
            },
            {
                name: 'pro',
                priceMonthly: 5000,
                priceYearly: 50000,
                currency: 'NGN',
                features: [
                    'Unlimited service listings',
                    'Verified skill badge',
                    'Team/agency account',
                    'Recurring bookings',
                    'Custom portfolio page',
                    'Promoted placement',
                    'Earnings analytics dashboard',
                ],
                limits: { serviceListings: 'unlimited' },
            },
        ],
    },

];

// ================================================================
// === HELPER FUNCTIONS ===========================================
// ================================================================

/** Get pricing config for a specific product by slug */
export function getProductPricing(productSlug: string): ProductPricing | undefined {
    return BOLDMIND_PRICING.find(p => p.productSlug === productSlug);
}

/** Calculate yearly savings vs paying monthly for 12 months */
export function calculateYearlySavings(tier: PricingTier): number {
    const monthlyCost = tier.priceMonthly * 12;
    return monthlyCost - tier.priceYearly;
}

/** Calculate yearly savings as a percentage */
export function calculateYearlySavingsPercent(tier: PricingTier): number {
    if (tier.priceMonthly === 0) return 0;
    const savings = calculateYearlySavings(tier);
    return Math.round((savings / (tier.priceMonthly * 12)) * 100);
}

/** Get all products that include a specific tier name */
export function getProductsByTier(tierName: PricingTier['name']): ProductPricing[] {
    return BOLDMIND_PRICING.filter(p =>
        p.tiers.some(t => t.name === tierName)
    );
}

/** Get the lowest paid tier for a product */
export function getEntryTier(productSlug: string): PricingTier | undefined {
    const product = getProductPricing(productSlug);
    if (!product) return undefined;
    return product.tiers.find(t => t.priceMonthly > 0);
}

/** Get all products with a free tier */
export function getFreeProducts(): ProductPricing[] {
    return BOLDMIND_PRICING.filter(p =>
        p.tiers.some(t => t.name === 'free' && t.priceMonthly === 0)
    );
}

/** Convert NGN price to USD at a given exchange rate */
export function ngnToUsd(amountNGN: number, exchangeRate = 1670): number {
    return Math.round((amountNGN / exchangeRate) * 100) / 100;
}