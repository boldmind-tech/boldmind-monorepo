// Unified environment configuration for BoldMind Ecosystem

// Define all possible app domain keys as a union type
export type AppDomainKey = 
  | 'HUB' | 'AMEBOGIST' | 'EDUCENTER' | 'BOLDMIND_OS' | 'RECEPTIONIST_AI' 
  | 'SOCIAL_FACTORY' | 'CREDIBILITY_HUB' | 'DIGITAL_STOREFRONT' | 'BUSSINESS_PLAN_AI'
  | 'ANALYTICS_AI' | 'MARKETING_AUTOMATION_AI' | 'BRAND_DESIGN_AI' 
  | 'FINANCIAL_FORCASTING_AI' | 'INVESTOR_READINESS_AI' | 'NAIJA_FITHER'
  | 'EMAILSCRAPER_PRO' | 'SAFE_NAIJA' | 'AFROHUSTLE_OS' | 'NAIJAGIG_MATCHER'
  | 'KOLO_AI' | 'BORDERLESS_REMIT' | 'RECEIPT_GENIUS' | 'POWER_ALERT'
  | 'FARMGATE_DIRECT' | 'AFROCOPY_AI' | 'SKILL2CASH' | 'ANONTRUTH_MIC';

// Define the DOMAINS object with proper typing
export const ENV_CONFIG = {
  // Domains
  DOMAINS: {
    HUB: process.env.NEXT_PUBLIC_HUB_DOMAIN || 'boldmind.ng',
    AMEBOGIST: process.env.NEXT_PUBLIC_AMEBO_DOMAIN || 'amebogist.ng',
    EDUCENTER: process.env.NEXT_PUBLIC_EDUCENTER_DOMAIN || 'educenter.com.ng',
    BOLDMIND_OS: process.env.NEXT_PUBLIC_OS_DOMAIN || 'os.boldmind.ng',
    RECEPTIONIST_AI: process.env.NEXT_PUBLIC_RECEPTIONIST_AI_DOMAIN || 'receptionist.boldmind.ng',
    SOCIAL_FACTORY: process.env.NEXT_PUBLIC_SOCIAL_FACTORY_DOMAIN || 'socialfactory.boldmind.ng',
    CREDIBILITY_HUB: process.env.NEXT_PUBLIC_CREDIBILITY_HUB_DOMAIN || 'credibility.boldmind.ng',
    DIGITAL_STOREFRONT: process.env.NEXT_PUBLIC_DIGITAL_STOREFRONT_DOMAIN || 'digitalstorefront.boldmind.ng',
    BUSSINESS_PLAN_AI: process.env.NEXT_PUBLIC_BUSSINESS_PLAN_AI_DOMAIN || 'businessplan.boldmind.ng',
    ANALYTICS_AI: process.env.NEXT_PUBLIC_ANALYTICS_AI_DOMAIN || 'analytics.boldmind.ng',
    MARKETING_AUTOMATION_AI: process.env.NEXT_PUBLIC_MARKETING_AUTOMATION_AI_DOMAIN || 'marketingautomation.boldmind.ng',
    BRAND_DESIGN_AI: process.env.NEXT_PUBLIC_BRAND_DESIGN_AI_DOMAIN || 'branddesign.boldmind.ng',
    FINANCIAL_FORCASTING_AI: process.env.NEXT_PUBLIC_FINANCIAL_ANALYST_AI_DOMAIN || 'financialforcasting.boldmind.ng',
    INVESTOR_READINESS_AI: process.env.NEXT_PUBLIC_INVESTOR_READINESS_AI_DOMAIN || 'investorreadiness.boldmind.ng',
    NAIJA_FITHER: process.env.NEXT_PUBLIC_NAIJA_FITHER_DOMAIN || 'naijafither.boldmind.ng',
    EMAILSCRAPER_PRO: process.env.NEXT_PUBLIC_EMAILSCRAPER_PRO_DOMAIN || 'emailscraper.boldmind.ng',
    SAFE_NAIJA: process.env.NEXT_PUBLIC_SAFE_NAIJA_DOMAIN || 'safenaija.boldmind.ng',
    AFROHUSTLE_OS: process.env.NEXT_PUBLIC_AFROHUSTLE_OS_DOMAIN || 'afrohustle.boldmind.ng',
    NAIJAGIG_MATCHER: process.env.NEXT_PUBLIC_NAIJAGIG_MATCHER_DOMAIN || 'naijagigmatcher.boldmind.ng',
    KOLO_AI: process.env.NEXT_PUBLIC_KOLO_AI_DOMAIN || 'kolo.boldmind.ng',
    BORDERLESS_REMIT: process.env.NEXT_PUBLIC_BORDERLESS_REMIT_DOMAIN || 'borderlessremit.boldmind.ng',
    RECEIPT_GENIUS: process.env.NEXT_PUBLIC_RECEIPT_GENIUS_DOMAIN || 'receiptgenius.boldmind.ng',
    POWER_ALERT: process.env.NEXT_PUBLIC_POWER_ALERT_DOMAIN || 'poweralert.boldmind.ng',
    FARMGATE_DIRECT: process.env.NEXT_PUBLIC_FARMGATE_DIRECT_DOMAIN || 'farmgatedirect.boldmind.ng',
    AFROCOPY_AI: process.env.NEXT_PUBLIC_AFROCOPY_AI_DOMAIN || 'afrocopy-ai.boldmind.ng',
    SKILL2CASH: process.env.NEXT_PUBLIC_SKILL2CASH_DOMAIN || 'skill2cash.boldmind.ng',
    ANONTRUTH_MIC: process.env.NEXT_PUBLIC_ANONTRUTH_MIC_DOMAIN || 'anontruth-mic.boldmind.ng',
  } as Record<AppDomainKey, string>,
  
  // Analytics
  ANALYTICS: {
    GA4_ID: process.env.NEXT_PUBLIC_GA4_ID || 'G-XXXXXXXXXX',
    MIXPANEL_TOKEN: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
    POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
  },
  
  // Social Media
  SOCIAL: {
    TWITTER: '@boldmind_ng',
    FACEBOOK: 'boldmind',
    LINKEDIN: 'company/boldmind',
    INSTAGRAM: 'boldmind_ng',
    WHATSAPP: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  },
  
  // Email (using one email account as requested)
  EMAIL: {
    SUPPORT: process.env.SUPPORT_EMAIL || 'support@boldmind.ng',
    CONTACT: process.env.CONTACT_EMAIL || 'contact@boldmind.ng',
    NO_REPLY: process.env.NO_REPLY_EMAIL || 'noreply@boldmind.ng',
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  
  // Payment
  PAYMENT: {
    PAYSTACK_PUBLIC_KEY: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
    PAYSTACK_SECRET_KEY: process.env.PAYSTACK_SECRET_KEY,
    CURRENCY: 'NGN',
  },
  
  // Database
  DATABASE: {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/boldmind',
    POSTGRES_URL: process.env.POSTGRES_URL || 'postgresql://user:password@localhost:5432/boldmind',
    REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
  },
  
  // Authentication
  AUTH: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_KEY,
  },
  
  // AI Services
  AI: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    OPENAI_ORG_ID: process.env.OPENAI_ORG_ID,
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
    HUGGINGFACE_TOKEN: process.env.HUGGINGFACE_TOKEN,
  },
  
  // Storage
  STORAGE: {
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION || 'af-south-1',
  },
  
  // External APIs
  APIS: {
    TERMII_API_KEY: process.env.TERMII_API_KEY,
    HUNTER_API_KEY: process.env.HUNTER_API_KEY,
    PICTORY_API_KEY: process.env.PICTORY_API_KEY,
    META_ACCESS_TOKEN: process.env.META_ACCESS_TOKEN,
  },
  
  // Feature Flags
  FEATURES: {
    ENABLE_CROSS_APP_TRACKING: process.env.NEXT_PUBLIC_ENABLE_CROSS_APP_TRACKING === 'true',
    ENABLE_SOCIAL_SHARING: process.env.NEXT_PUBLIC_ENABLE_SOCIAL_SHARING === 'true',
    ENABLE_PAYMENTS: process.env.NEXT_PUBLIC_ENABLE_PAYMENTS === 'true',
    ENABLE_AI_FEATURES: process.env.NEXT_PUBLIC_ENABLE_AI_FEATURES === 'true',
  },
};

// Helper function to convert app name to domain key
function getDomainKey(appName: string): AppDomainKey | null {
  const keyMap: Record<string, AppDomainKey> = {
    'boldmind-hub': 'HUB',
    'amebogist': 'AMEBOGIST',
    'educenter': 'EDUCENTER',
    'boldmind-os': 'BOLDMIND_OS',
    'naija-fither': 'NAIJA_FITHER',
    'emailscraper-pro': 'EMAILSCRAPER_PRO',
    'safe-naija': 'SAFE_NAIJA',
    'receptionist': 'RECEPTIONIST_AI',
    'social-factory': 'SOCIAL_FACTORY',
    'credibility-hubs': 'CREDIBILITY_HUB',
    'business-planning': 'BUSSINESS_PLAN_AI',
    'financial-forecasting': 'FINANCIAL_FORCASTING_AI',
    'investor-readiness': 'INVESTOR_READINESS_AI',
    'branding-design': 'BRAND_DESIGN_AI',
    'digital-storefronts': 'DIGITAL_STOREFRONT',
    'marketing-automation': 'MARKETING_AUTOMATION_AI',
    'analytics-dashboard': 'ANALYTICS_AI',
    'afrohustle-os': 'AFROHUSTLE_OS',
    'naijagig-matcher': 'NAIJAGIG_MATCHER',
    'kolo-ai': 'KOLO_AI',
    'borderless-remit': 'BORDERLESS_REMIT',
    'receipt-genius': 'RECEIPT_GENIUS',
    'power-alert': 'POWER_ALERT',
    'farmgate-direct': 'FARMGATE_DIRECT',
    'afrocopy-ai': 'AFROCOPY_AI',
    'skill2cash': 'SKILL2CASH',
    'anontruth-mic': 'ANONTRUTH_MIC',
  };
  
  return keyMap[appName] || null;
}

// Validate required environment variables
export function validateEnv() {
  const required = [
    'NEXTAUTH_SECRET',
    'MONGODB_URI',
    'OPENAI_API_KEY',
  ];
  
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing);
    if (process.env.NODE_ENV === 'production') {
      throw new Error(`Missing environment variables: ${missing.join(', ')}`);
    }
  }
  
  return true;
}

// Get app-specific configuration
export function getAppConfig(appName: string) {
  const domainKey = getDomainKey(appName);
  const domain = domainKey ? ENV_CONFIG.DOMAINS[domainKey] : 'boldmind.ng';
  const baseUrl = `https://${domain}`;
  
  return {
    ...ENV_CONFIG,
    APP: {
      NAME: appName,
      BASE_URL: baseUrl,
      API_URL: `${baseUrl}/api`,
      CDN_URL: `https://cdn.boldmind.ng/${appName}`,
    },
  };
}

// Alternative: Type-safe domain getter
export function getAppDomain(appName: string): string {
  const domainKey = getDomainKey(appName);
  return domainKey ? ENV_CONFIG.DOMAINS[domainKey] : 'boldmind.ng';
}