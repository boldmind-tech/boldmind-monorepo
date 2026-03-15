//PACKAGES/config/src/shared/env-config.ts
// Updated: March 2026 Sprint — Monolith architecture, NaijaFit rename, CF R2, Railway free trial

export type AppDomainKey =
  | 'HUB' | 'AMEBOGIST' | 'AMEBO_STUDIO' | 'EDUCENTER' | 'BOLDMIND_OS'
  | 'RECEPTIONIST_AI' | 'SOCIAL_FACTORY' | 'CREDIBILITY_HUB' | 'DIGITAL_STOREFRONT'
  | 'BUSSINESS_PLAN_AI' | 'PLANAI' | 'ANALYTICS_AI' | 'MARKETING_AUTOMATION_AI'
  | 'BRAND_DESIGN_AI' | 'FINANCIAL_FORCASTING_AI' | 'INVESTOR_READINESS_AI'
  | 'NAIJA_FIT' | 'EMAILSCRAPER_PRO' | 'TOOLS' | 'SAFE_NAIJA' | 'AFROHUSTLE_OS'
  | 'NAIJAGIG_MATCHER' | 'KOLO_AI' | 'BORDERLESS_REMIT' | 'RECEIPT_GENIUS'
  | 'POWER_ALERT' | 'FARMGATE_DIRECT' | 'AFROCOPY_AI' | 'SKILL2CASH'
  | 'ANONTRUTH_MIC' | 'CONCEPT_HUB' | 'SKILLGIG';

export const ENV_CONFIG = {
  NODE_ENV: process.env['NODE_ENV'] || 'development',
  PORT: parseInt(process.env['PORT'] || '4000', 10),

  CORS: {
    ORIGIN: process.env['CORS_ORIGIN']?.split(',') || [
      'https://boldmind.ng',
      'https://planai.boldmind.ng',
      'https://os.boldmind.ng',
      'https://tools.boldmind.ng',
      'https://fit.boldmind.ng',
      'https://concept.boldmind.ng',
      'https://amebogist.ng',
      'https://studio.amebogist.ng',
      'https://educenter.com.ng',
      'https://skills.educenter.com.ng',
      'http://localhost:3000',
    ],
    CREDENTIALS: true,
  },

  DOMAINS: {
    HUB: process.env['NEXT_PUBLIC_HUB_DOMAIN'] || 'boldmind.ng',
    AMEBOGIST: process.env['NEXT_PUBLIC_AMEBO_DOMAIN'] || 'amebogist.ng',
    AMEBO_STUDIO: process.env['NEXT_PUBLIC_AMEBO_STUDIO_DOMAIN'] || 'studio.amebogist.ng',
    EDUCENTER: process.env['NEXT_PUBLIC_EDUCENTER_DOMAIN'] || 'educenter.com.ng',
    SKILLGIG: process.env['NEXT_PUBLIC_SKILLGIG_DOMAIN'] || 'skills.educenter.com.ng',
    BOLDMIND_OS: process.env['NEXT_PUBLIC_OS_DOMAIN'] || 'os.boldmind.ng',
    PLANAI: process.env['NEXT_PUBLIC_PLANAI_DOMAIN'] || 'planai.boldmind.ng',
    RECEPTIONIST_AI: process.env['NEXT_PUBLIC_RECEPTIONIST_AI_DOMAIN'] || 'planai.boldmind.ng/receptionist',
    CREDIBILITY_HUB: process.env['NEXT_PUBLIC_CREDIBILITY_HUB_DOMAIN'] || 'planai.boldmind.ng/credibility',
    DIGITAL_STOREFRONT: process.env['NEXT_PUBLIC_DIGITAL_STOREFRONT_DOMAIN'] || 'planai.boldmind.ng/store',
    BUSSINESS_PLAN_AI: process.env['NEXT_PUBLIC_BUSSINESS_PLAN_AI_DOMAIN'] || 'planai.boldmind.ng/planning',
    ANALYTICS_AI: process.env['NEXT_PUBLIC_ANALYTICS_AI_DOMAIN'] || 'planai.boldmind.ng/analytics',
    MARKETING_AUTOMATION_AI: process.env['NEXT_PUBLIC_MARKETING_AUTOMATION_AI_DOMAIN'] || 'planai.boldmind.ng/marketing',
    BRAND_DESIGN_AI: process.env['NEXT_PUBLIC_BRAND_DESIGN_AI_DOMAIN'] || 'planai.boldmind.ng/design',
    FINANCIAL_FORCASTING_AI: process.env['NEXT_PUBLIC_FINANCIAL_ANALYST_AI_DOMAIN'] || 'planai.boldmind.ng/finance',
    INVESTOR_READINESS_AI: process.env['NEXT_PUBLIC_INVESTOR_READINESS_AI_DOMAIN'] || 'planai.boldmind.ng/investor',
    NAIJA_FIT: process.env['NEXT_PUBLIC_NAIJA_FIT_DOMAIN'] || 'fit.boldmind.ng',
    TOOLS: process.env['NEXT_PUBLIC_TOOLS_DOMAIN'] || 'tools.boldmind.ng',
    EMAILSCRAPER_PRO: process.env['NEXT_PUBLIC_EMAILSCRAPER_PRO_DOMAIN'] || 'tools.boldmind.ng/emailscraper',
    SOCIAL_FACTORY: process.env['NEXT_PUBLIC_SOCIAL_FACTORY_DOMAIN'] || 'tools.boldmind.ng/social',
    CONCEPT_HUB: process.env['NEXT_PUBLIC_CONCEPT_HUB_DOMAIN'] || 'concept.boldmind.ng',
    SAFE_NAIJA: process.env['NEXT_PUBLIC_SAFE_NAIJA_DOMAIN'] || 'concept.boldmind.ng/safe',
    AFROHUSTLE_OS: process.env['NEXT_PUBLIC_AFROHUSTLE_OS_DOMAIN'] || 'concept.boldmind.ng/afrohustle',
    NAIJAGIG_MATCHER: process.env['NEXT_PUBLIC_NAIJAGIG_MATCHER_DOMAIN'] || 'concept.boldmind.ng/naijagig',
    KOLO_AI: process.env['NEXT_PUBLIC_KOLO_AI_DOMAIN'] || 'concept.boldmind.ng/kolo',
    BORDERLESS_REMIT: process.env['NEXT_PUBLIC_BORDERLESS_REMIT_DOMAIN'] || 'concept.boldmind.ng/remit',
    RECEIPT_GENIUS: process.env['NEXT_PUBLIC_RECEIPT_GENIUS_DOMAIN'] || 'concept.boldmind.ng/receipt',
    POWER_ALERT: process.env['NEXT_PUBLIC_POWER_ALERT_DOMAIN'] || 'concept.boldmind.ng/power',
    FARMGATE_DIRECT: process.env['NEXT_PUBLIC_FARMGATE_DIRECT_DOMAIN'] || 'concept.boldmind.ng/farmgate',
    AFROCOPY_AI: process.env['NEXT_PUBLIC_AFROCOPY_AI_DOMAIN'] || 'concept.boldmind.ng/afrocopy',
    SKILL2CASH: process.env['NEXT_PUBLIC_SKILL2CASH_DOMAIN'] || 'concept.boldmind.ng/skill2cash',
    ANONTRUTH_MIC: process.env['NEXT_PUBLIC_ANONTRUTH_MIC_DOMAIN'] || 'concept.boldmind.ng/anon',
  } as Record<AppDomainKey, string>,

  API_URL: process.env['NEXT_PUBLIC_API_URL'] || 'https://api.boldmind.ng',

  // MONOLITH: ONE Neon PG + ONE MongoDB Atlas M0 + Redis
  DATABASE_URL: process.env['DATABASE_URL'] || '',
  MONGODB_URL: process.env['MONGODB_URL'] || '',
  REDIS_URL: process.env['REDIS_URL'] || '',
  REDIS_TOKEN: process.env['REDIS_TOKEN'] || '',

  AUTH: {
    NEXTAUTH_SECRET: process.env['NEXTAUTH_SECRET'],
    NEXTAUTH_URL: process.env['NEXTAUTH_URL'] || 'https://boldmind.ng',
    JWT_SECRET: process.env['JWT_SECRET'] || 'change-this-in-production',
    JWT_EXPIRES_IN: process.env['JWT_EXPIRES_IN'] || '7d',
  },

  AI: {
    OPENAI_API_KEY: process.env['OPENAI_API_KEY'],
    OPENAI_ORG_ID: process.env['OPENAI_ORG_ID'],
    ANTHROPIC_API_KEY: process.env['ANTHROPIC_API_KEY'],
    FAL_API_KEY: process.env['FAL_API_KEY'],
    CF_AI_GATEWAY_URL: process.env['CF_AI_GATEWAY_URL'],
  },

  // CF R2 replaces Cloudinary + AWS S3 (zero egress fees)
  STORAGE: {
    CF_ACCOUNT_ID: process.env['CF_ACCOUNT_ID'],
    CF_API_TOKEN: process.env['CF_API_TOKEN'],
    R2_ACCESS_KEY_ID: process.env['R2_ACCESS_KEY_ID'],
    R2_SECRET_ACCESS_KEY: process.env['R2_SECRET_ACCESS_KEY'],
    R2_BUCKET_NAME: process.env['R2_BUCKET_NAME'] || 'boldmind-media',
    R2_ENDPOINT: process.env['R2_ENDPOINT'],
    R2_PUBLIC_URL: process.env['R2_PUBLIC_URL'] || 'https://media.boldmind.ng',
  },

  ANALYTICS: {
    GA4_ID: process.env['NEXT_PUBLIC_GA4_ID'] || 'G-XXXXXXXXXX',
    POSTHOG_KEY: process.env['NEXT_PUBLIC_POSTHOG_KEY'],
    POSTHOG_HOST: process.env['NEXT_PUBLIC_POSTHOG_HOST'] || 'https://app.posthog.com',
    META_PIXEL_ID: process.env['NEXT_PUBLIC_META_PIXEL_ID'],
    GTM_ID: process.env['NEXT_PUBLIC_GTM_ID'],
    TIKTOK_PIXEL_ID: process.env['NEXT_PUBLIC_TIKTOK_PIXEL_ID'],
  },

  EMAIL: {
    SUPPORT: process.env['SUPPORT_EMAIL'] || 'support@boldmind.ng',
    CONTACT: process.env['CONTACT_EMAIL'] || 'contact@boldmind.ng',
    NO_REPLY: process.env['NO_REPLY_EMAIL'] || 'noreply@boldmind.ng',
    RESEND_API_KEY: process.env['RESEND_API_KEY'],
  },

  PAYMENT: {
    PAYSTACK_PUBLIC_KEY: process.env['NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY'],
    PAYSTACK_SECRET_KEY: process.env['PAYSTACK_SECRET_KEY'],
    PAYSTACK_WEBHOOK_SECRET: process.env['PAYSTACK_WEBHOOK_SECRET'],
    CURRENCY: 'NGN',
  },

  FACEBOOK: {
    APP_ID: process.env['FACEBOOK_APP_ID'],
    APP_SECRET: process.env['FACEBOOK_APP_SECRET'],
    SYSTEM_USER_TOKEN: process.env['FACEBOOK_SYSTEM_USER_TOKEN'],
    VERIFY_TOKEN: process.env['FACEBOOK_VERIFY_TOKEN'],
    BUSINESS_ID: process.env['FACEBOOK_BUSINESS_ID'],
    PAGE_ID: process.env['FACEBOOK_PAGE_ID'],
    PAGE_ACCESS_TOKEN: process.env['FACEBOOK_PAGE_ACCESS_TOKEN'],
    INSTAGRAM_BUSINESS_ACCOUNT_ID: process.env['INSTAGRAM_BUSINESS_ACCOUNT_ID'],
    WHATSAPP_BUSINESS_ACCOUNT_ID: process.env['WHATSAPP_BUSINESS_ACCOUNT_ID'],
    WHATSAPP_PHONE_NUMBER_ID: process.env['WHATSAPP_PHONE_NUMBER_ID'],
    WHATSAPP_ACCESS_TOKEN: process.env['WHATSAPP_ACCESS_TOKEN'],
    PIXEL_ID: process.env['FACEBOOK_PIXEL_ID'],
    API_VERSION: process.env['FACEBOOK_API_VERSION'] || 'v19.0',
    GRAPH_API_URL: 'https://graph.facebook.com',
  },

  APIS: {
    TERMII_API_KEY: process.env['TERMII_API_KEY'],
    HUNTER_API_KEY: process.env['HUNTER_API_KEY'],
    META_ACCESS_TOKEN: process.env['META_ACCESS_TOKEN'],
    TIKTOK_ACCESS_TOKEN: process.env['TIKTOK_ACCESS_TOKEN'],
  },

  N8N: {
    HOST: process.env['N8N_HOST'] || 'n8n.boldmind.ng',
    PORT: parseInt(process.env['N8N_PORT'] || '5678', 10),
    WEBHOOK_URL: process.env['N8N_WEBHOOK_URL'] || 'https://n8n.boldmind.ng',
    ENCRYPTION_KEY: process.env['N8N_ENCRYPTION_KEY'],
    DB_POSTGRES_URL: process.env['N8N_POSTGRES_URL'] || process.env['DATABASE_URL'],
  },

  SOCIAL: {
    youtube: [
      { id: 'yt1', name: 'BoldMind Technology Solution Enterprise', url: 'https://youtube.com/@BoldMindTech', platform: 'youtube', status: 'active' },
      { id: 'yt2', name: 'Code Fires Africa', url: 'https://youtube.com/@Codefires', platform: 'youtube', status: 'active' },
      { id: 'yt3', name: 'Chains to Coins', url: 'https://youtube.com/@ChainstoCoins', platform: 'youtube', status: 'active' },
      { id: 'yt4', name: 'Echoes of the Elders', url: 'https://youtube.com/@EchoesoftheElders-d68', platform: 'youtube', status: 'active' },
      { id: 'yt5', name: 'NaijaFit', url: 'https://youtube.com/@NaijaFitNG', platform: 'youtube', status: 'new' },
      { id: 'yt6', name: 'PlanAI Business Tips', url: 'https://youtube.com/@PlanAING', platform: 'youtube', status: 'new' },
    ],
    facebook: [
      { id: 'fb1', name: 'BoldMind Technology Solution Enterprise', url: 'https://facebook.com/BoldMindTech', platform: 'facebook', status: 'active' },
      { id: 'fb2', name: 'Amebo Gist', url: 'https://facebook.com/amebogistng', platform: 'facebook', status: 'active' },
      { id: 'fb3', name: 'EduCenter Nigeria', url: 'https://facebook.com/DevConectPage', platform: 'facebook', status: 'active' },
      { id: 'fb4', name: 'Charles Uche Chijuka', url: 'https://facebook.com/cuche3', platform: 'facebook', status: 'active' },
      { id: 'fb5', name: 'NaijaFit', url: 'https://facebook.com/NaijaFitNG', platform: 'facebook', status: 'new' },
      { id: 'fb6', name: 'EduCenter Students Nigeria (Group)', url: 'https://facebook.com/groups/educenterng', platform: 'facebook', status: 'new' },
    ],
    instagram: [
      { id: 'ig1', name: '@boldmindtech ', url: 'https://instagram.com/boldmindtech', platform: 'instagram', status: 'active' },
      { id: 'ig2', name: '@amebogist10', url: 'https://instagram.com/amebogist10', platform: 'instagram', status: 'active' },
      { id: 'ig3', name: '@educenterc', url: 'https://instagram.com/educenterc', platform: 'instagram', status: 'active' },
      { id: 'ig4', name: '@charleschijuka (Monetized)', url: 'https://instagram.com/charleschijuka', platform: 'instagram', status: 'active' },
      { id: 'ig5', name: '@villagecircl', url: 'https://instagram.com/villagecircl', platform: 'instagram', status: 'active' },
      { id: 'ig6', name: '@naijafitng', url: 'https://instagram.com/naijafitng', platform: 'instagram', status: 'new' },
      { id: 'ig7', name: '@planai.ng', url: 'https://instagram.com/planai.ng', platform: 'instagram', status: 'new' },
    ],
    twitter: [
      { id: 'tw1', name: 'VillageCircle', url: 'https://x.com/bobbycuc2025', platform: 'twitter', status: 'active' },
      { id: 'tw2', name: 'AmeboGist', url: 'https://x.com/Amebo__Gist', platform: 'twitter', status: 'active' },
      { id: 'tw3', name: 'ChainsToCoins', url: 'https://x.com/ChainsToCoins', platform: 'twitter', status: 'active' },
      { id: 'tw4', name: 'CodeFiresAfrica', url: 'https://x.com/mediaman9ja', platform: 'twitter', status: 'active' },
      { id: 'tw5', name: 'Charles Uche Chijuka', url: 'https://x.com/CharlesUcheCh', platform: 'twitter', status: 'active' },
    ],
    tiktok: [
      { id: 'tt1', name: 'CodeFiresAfrica', url: 'https://tiktok.com/@codesfiresafrica', platform: 'tiktok', status: 'active' },
      { id: 'tt2', name: 'VillageCircle', url: 'https://tiktok.com/@viilagecircle', platform: 'tiktok', status: 'growth' },
      { id: 'tt3', name: 'ChainsToCoins', url: 'https://tiktok.com/@chainstocoins', platform: 'tiktok', status: 'active' },
      { id: 'tt4', name: 'EduCenter Nigeria', url: 'https://tiktok.com/@educenterng', platform: 'tiktok', status: 'new' },
      { id: 'tt5', name: 'NaijaFit', url: 'https://tiktok.com/@naijafitng', platform: 'tiktok', status: 'new' },
    ],
    whatsapp: [
      { id: 'wa1', name: 'Charles Uche Chijuka', phone: '+2348136705908', platform: 'whatsapp', status: 'active' },
      { id: 'wa2', name: 'BoldMind Technology Solution Enterprises', phone: '+2349138349271', platform: 'whatsapp', status: 'active' },
      { id: 'wa3', name: 'Village Circle Community', phone: '+2348055762023', platform: 'whatsapp', status: 'active' },
      { id: 'wa4', name: 'EduCenter Students Nigeria (Community)', phone: '', platform: 'whatsapp', status: 'new' },
    ],
    linkedin: [
      { id: 'li1', name: 'BoldMind Technology Solutions', url: 'https://linkedin.com/company/boldmindtech', platform: 'linkedin', status: 'active' },
      { id: 'li2', name: 'Charles Uche Chijuka', url: 'https://linkedin.com/in/charleschijuka', platform: 'linkedin', status: 'active' },
      { id: 'li3', name: 'AmeboGist Media', url: 'https://linkedin.com/company/amebogist', platform: 'linkedin', status: 'new' },
    ],
  },

  FEATURES: {
    ENABLE_CROSS_APP_TRACKING: process.env['NEXT_PUBLIC_ENABLE_CROSS_APP_TRACKING'] === 'true',
    ENABLE_AI_FEATURES: process.env['NEXT_PUBLIC_ENABLE_AI_FEATURES'] !== 'false',
    ENABLE_PAYMENTS: process.env['NEXT_PUBLIC_ENABLE_PAYMENTS'] !== 'false',
    ENABLE_TWA: process.env['NEXT_PUBLIC_ENABLE_TWA'] !== 'false',
    ENABLE_AI_CACHE: process.env['ENABLE_AI_CACHE'] !== 'false',
  },

  SERVICE_PORTS: {
    GATEWAY: 4000,
  },
};

export const TWA_CONFIG: Record<string, { packageName: string; themeColor: string; backgroundColor: string; priority: 'high' | 'medium' | 'low' }> = {
  'educenter': { packageName: 'ng.educenter.app', themeColor: '#1E40AF', backgroundColor: '#F8FAFC', priority: 'high' },
  'amebogist': { packageName: 'ng.amebogist.app', themeColor: '#065F46', backgroundColor: '#FFFBEB', priority: 'high' },
  'boldmind-hub': { packageName: 'ng.boldmind.hub', themeColor: '#00143C', backgroundColor: '#FAFAF9', priority: 'medium' },
  'planai-suite': { packageName: 'ng.boldmind.planai', themeColor: '#6B21A8', backgroundColor: '#FAF5FF', priority: 'medium' },
  'boldmind-os': { packageName: 'ng.boldmind.os', themeColor: '#9F1239', backgroundColor: '#FFF7ED', priority: 'medium' },
  'boldmind-tools': { packageName: 'ng.boldmind.tools', themeColor: '#075985', backgroundColor: '#FAFAFA', priority: 'medium' },
  'naija-fit': { packageName: 'ng.boldmind.fit', themeColor: '#065F46', backgroundColor: '#F0FFF4', priority: 'medium' },
  'amebo-studio': { packageName: 'ng.amebogist.studio', themeColor: '#065F46', backgroundColor: '#FFFBEB', priority: 'low' },
  'skillgig': { packageName: 'ng.educenter.skills', themeColor: '#1E40AF', backgroundColor: '#F8FAFC', priority: 'low' },
  'boldmind-concepts': { packageName: 'ng.boldmind.concept', themeColor: '#44403C', backgroundColor: '#FAFAF9', priority: 'low' },
};

export function getAppDomain(appName: string): string {
  const keyMap: Record<string, AppDomainKey> = {
    'boldmind-hub': 'HUB',
    'amebogist': 'AMEBOGIST',
    'amebo-studio': 'AMEBO_STUDIO',
    'educenter': 'EDUCENTER',
    'skillgig': 'SKILLGIG',
    'boldmind-os': 'BOLDMIND_OS',
    'planai': 'PLANAI',
    'planai-suite': 'PLANAI',
    'naija-fit': 'NAIJA_FIT',
    'naija-fither': 'NAIJA_FIT',
    'boldmind-tools': 'TOOLS',
    'emailscraper-pro': 'EMAILSCRAPER_PRO',
    'social-factory': 'SOCIAL_FACTORY',
    'boldmind-concepts': 'CONCEPT_HUB',
  };
  const domainKey = keyMap[appName];
  return domainKey ? ENV_CONFIG.DOMAINS[domainKey] : 'boldmind.ng';
}

export function validateEnv(): boolean {
  const required = ['NEXTAUTH_SECRET', 'JWT_SECRET', 'DATABASE_URL', 'MONGODB_URL', 'PAYSTACK_SECRET_KEY'];
  const missing = required.filter(key => !process.env[key]);
  if (missing.length > 0) {
    console.warn('Missing env vars:', missing);
    if (process.env['NODE_ENV'] === 'production') throw new Error(`Missing: ${missing.join(', ')}`);
  }
  return missing.length === 0;
}