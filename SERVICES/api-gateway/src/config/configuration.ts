import { ENV_CONFIG } from '@boldmind/config';

export default () => ({
  port: ENV_CONFIG.SERVICE_PORTS.GATEWAY,
  nodeEnv: ENV_CONFIG.NODE_ENV,

  // Service URLs
  services: {
    user: process.env['USER_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.USER}`,
    educenter: process.env['EDUCENTER_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.EDUCENTER}`,
    payment: process.env['PAYMENT_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.PAYMENT}`,
    naijaFither: process.env['NAIJA_FITHER_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.NAIJA_FITHER}`,
    safeNaija: process.env['SAFE_NAIJA_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.SAFE_AI}`,
    planai: process.env['PLANAI_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.PLANAI_SUITE}`,
    emailScraper: process.env['EMAIL_SCRAPER_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.EMAILSCRAPER_PRO}`,
    notification: process.env['NOTIFICATION_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.NOTIFICATION}`,
    boldmindOS: process.env['BOLDMIND_OS_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.BOLDMIND_OS}`,
    amebogist: process.env['AMEBOGIST_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.AMEBOGIST}`,
    hub: process.env['HUB_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.BOLDMIND_HUB}`,
    kolo: process.env['KOLO_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.KOLO_AI}`,
    farmgate: process.env['FARMGATE_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.FARMGATE_DIRECT}`,
    media: process.env['MEDIA_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.MEDIA}`,
    socialFactory: process.env['SOCIAL_FACTORY_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.SOCIAL_FACTORY}`,
    afrohustle: process.env['AFROHUSTLE_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.AFROHUSTLE_OS}`,
    naijagig: process.env['NAIJAGIG_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.NAIJAGIG_MATCHER}`,
    borderless: process.env['BORDERLESS_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.BORDERLESS_REMIT}`,
    analytics: process.env['ANALYTICS_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.ANALYTICS}`,
    aiservice: process.env['AIService_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.AI}`,
    afrocopy: process.env['AFROCOPY_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.AFROCOPY_AI}`,
    anontruth: process.env['ANONTRUTH_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.ANONTRUTH_MIC}`,
    poweralert: process.env['POWERALERT_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.POWER_ALERT}`,
    receiptgen: process.env['RECEIPTGEN_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.RECEIPT_GENIUS}`,
    skills2cash: process.env['SKILLS2CASH_SERVICE_URL'] || `http://localhost:${ENV_CONFIG.SERVICE_PORTS.SKILL2CASH}`,
  },

  // Supabase (from @boldmind/auth)
  supabase: {
    url: ENV_CONFIG.AUTH.SUPABASE_URL,
    anonKey: ENV_CONFIG.AUTH.SUPABASE_KEY,
    serviceKey: process.env['SUPABASE_SERVICE_KEY'], // Service key is sensitive, process.env is safer
  },

  // JWT
  jwt: {
    secret: process.env['JWT_SECRET'],
    expiresIn: process.env['JWT_EXPIRATION'] || '7d',
  },

  // CORS
  cors: {
    origin: process.env['CORS_ORIGIN']?.split(',') || ['http://localhost:3001'],
  },

  // Paystack
  paystack: {
    secretKey: process.env['PAYSTACK_SECRET_KEY'],
    publicKey: process.env['PAYSTACK_PUBLIC_KEY'],
  },

  // Frontend URL
  frontend: {
    url: process.env['FRONTEND_URL'] || 'http://localhost:3001',
  },
});