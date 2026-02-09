// PACKAGES/utils/src/constants/pricing.ts

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
    // === LIVE PRODUCTS ===
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
                limits: {
                    articlesPerMonth: 10,
                },
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
                limits: {
                    articlesPerMonth: 'unlimited',
                },
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
                limits: {
                    questionsPerDay: 5,
                    subjects: 1,
                },
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
                limits: {
                    questionsPerDay: 'unlimited',
                    subjects: 'all',
                },
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
                limits: {
                    leadsPerMonth: 500,
                    platforms: 2,
                },
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
                limits: {
                    leadsPerMonth: 2000,
                    platforms: 3,
                },
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
                limits: {
                    leadsPerMonth: 'unlimited',
                    platforms: 'all',
                },
            },
        ],
    },

    // === BUILDING PRODUCTS ===
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
                limits: {
                    videosPerMonth: 5,
                    accounts: 2,
                },
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
                limits: {
                    videosPerMonth: 50,
                    accounts: 5,
                },
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
                limits: {
                    videosPerMonth: 200,
                    accounts: 'unlimited',
                },
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
                limits: {
                    notesPerMonth: 50,
                },
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
                limits: {
                    notesPerMonth: 'unlimited',
                },
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
                    'Nigerian meal database',
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
                    'Personalized meal plans',
                    'Custom workout routines',
                    'Progress tracking',
                    'Weekly challenges',
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
                    'Video tutorials',
                    'Live group sessions',
                    'Nutritionist consultations',
                    'Advanced analytics',
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
                limits: {
                    emailFindsPerMonth: 100,
                },
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
                limits: {
                    emailFindsPerMonth: 1000,
                },
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
                    'Priority support',
                ],
                limits: {
                    emailFindsPerMonth: 10000,
                },
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
            },
        ],
    },

    // === PLANAI SUITE ===
    {
        productSlug: 'credibility-hubs',
        productName: 'Professional Credibility Hubs',
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
        tiers: [],
    },

    {
        productSlug: 'business-planning',
        productName: 'AI Business Planning',
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
        tiers: [],
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
                description: 'Logo + brand guidelines + social templates',
            },
            {
                name: 'Complete Package',
                price: 15000,
                currency: 'NGN',
                description: 'Everything + marketing materials + stationery',
            },
        ],
        tiers: [],
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
                limits: {
                    products: 50,
                },
            },
            {
                name: 'pro',
                priceMonthly: 5000,
                priceYearly: 50000,
                currency: 'NGN',
                features: [
                    'Unlimited products',
                    'Advanced inventory',
                    'WhatsApp commerce',
                    'Customer CRM',
                    'Analytics dashboard',
                    'Custom domain',
                ],
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
                limits: {
                    contacts: 1000,
                    campaignsPerMonth: 5,
                },
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
                limits: {
                    contacts: 10000,
                    campaignsPerMonth: 'unlimited',
                },
            },
        ],
    },

    // === CONCEPT PRODUCTS ===
    {
        productSlug: 'safe-ai',
        productName: 'SAFE AI',
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
                    'Monthly reports',
                ],
                limits: {
                    officers: 100,
                },
            },
            {
                name: 'enterprise',
                priceMonthly: 500000,
                priceYearly: 5000000,
                currency: 'NGN',
                features: [
                    'Unlimited officers',
                    'AI pattern recognition',
                    'Predictive policing',
                    'Real-time alerts',
                    'Custom integrations',
                    'Dedicated support',
                ],
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
                    'Group thrift management',
                    'Up to 20 members',
                    'Basic AI predictions',
                    'Payment reminders',
                ],
                limits: {
                    members: 20,
                },
            },
            {
                name: 'pro',
                priceMonthly: 10000,
                priceYearly: 100000,
                currency: 'NGN',
                features: [
                    'Up to 50 members',
                    'Advanced AI predictions',
                    'Auto-pause contributions',
                    'Savings analytics',
                    'Credit building',
                ],
                limits: {
                    members: 50,
                },
            },
        ],
    },
];

// Helper function to get pricing by product
export function getProductPricing(productSlug: string): ProductPricing | undefined {
    return BOLDMIND_PRICING.find(p => p.productSlug === productSlug);
}

// Helper to calculate yearly savings
export function calculateYearlySavings(tier: PricingTier): number {
    const monthlyCost = tier.priceMonthly * 12;
    return monthlyCost - tier.priceYearly;
}