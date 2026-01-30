export default () => ({
  port: parseInt(process.env['PORT'] || '4000', 10),
  nodeEnv: process.env['NODE_ENV'] || 'development',

  // Service URLs
  services: {
    user: process.env['USER_SERVICE_URL'] || 'http://localhost:4001',
    educenter: process.env['EDUCENTER_SERVICE_URL'] || 'http://localhost:4002',
    payment: process.env['PAYMENT_SERVICE_URL'] || 'http://localhost:4003',
    naijaFither: process.env['NAIJA_FITHER_SERVICE_URL'] || 'http://localhost:4004',
    safeNaija: process.env['SAFE_NAIJA_SERVICE_URL'] || 'http://localhost:4005',
    planai: process.env['PLANAI_SERVICE_URL'] || 'http://localhost:4006',
    emailScraper: process.env['EMAIL_SCRAPER_SERVICE_URL'] || 'http://localhost:4007',
    notification: process.env['NOTIFICATION_SERVICE_URL'] || 'http://localhost:4008',
    boldmindOS: process.env['BOLDMIND_OS_SERVICE_URL'] || 'http://localhost:4009',
    amebogist: process.env['AMEBOGIST_SERVICE_URL'] || 'http://localhost:4010',
    hub: process.env['HUB_SERVICE_URL'] || 'http://localhost:4011',
    kolo: process.env['KOLO_SERVICE_URL'] || 'http://localhost:4012',
    farmgate: process.env['FARMGATE_SERVICE_URL'] || 'http://localhost:4013',
    media: process.env['MEDIA_SERVICE_URL'] || 'http://localhost:4014',
    socialFactory: process.env['SOCIAL_FACTORY_SERVICE_URL'] || 'http://localhost:4015',
    afrohustle: process.env['AFROHUSTLE_SERVICE_URL'] || 'http://localhost:4016',
    naijagig: process.env['NAIJAGIG_SERVICE_URL'] || 'http://localhost:4017',
    borderless: process.env['BORDERLESS_SERVICE_URL'] || 'http://localhost:4018',
    analytics: process.env['ANALYTICS_SERVICE_URL'] || 'http://localhost:4019',
    aiservice: process.env['AIService_SERVICE_URL'] || 'http://localhost:4020',
    afrocopy: process.env['AFROCOPY_SERVICE_URL'] || 'http://localhost:4021',
    anontruth: process.env['ANONTRUTH_SERVICE_URL'] || 'http://localhost:4022',
    poweralert: process.env['POWERALERT_SERVICE_URL'] || 'http://localhost:4023',
    receiptgen: process.env['RECEIPTGEN_SERVICE_URL'] || 'http://localhost:4024',
    skills2cash: process.env['SKILLS2CASH_SERVICE_URL'] || 'http://localhost:4025',
  },

  // Supabase (from @boldmind/auth)
  supabase: {
    url: process.env['SUPABASE_URL'],
    anonKey: process.env['SUPABASE_ANON_KEY'],
    serviceKey: process.env['SUPABASE_SERVICE_KEY'],
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