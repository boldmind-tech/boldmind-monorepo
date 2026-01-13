export default () => ({
  port: parseInt(process.env.PORT || '4000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // Service URLs
  services: {
    user: process.env.USER_SERVICE_URL || 'http://localhost:4001',
    educenter: process.env.EDUCENTER_SERVICE_URL || 'http://localhost:4002',
    payment: process.env.PAYMENT_SERVICE_URL || 'http://localhost:4003',
    naijaFither: process.env.NAIJA_FITHER_SERVICE_URL || 'http://localhost:4004',
    safeNaija: process.env.SAFE_NAIJA_SERVICE_URL || 'http://localhost:4005',
    planai: process.env.PLANAI_SERVICE_URL || 'http://localhost:4006',
    emailScraper: process.env.EMAIL_SCRAPER_SERVICE_URL || 'http://localhost:4007',
    notification: process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:4008',
  },

  // Supabase (from @boldmind/auth)
  supabase: {
    url: process.env.SUPABASE_URL,
    anonKey: process.env.SUPABASE_ANON_KEY,
    serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  },

  // JWT
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRATION || '7d',
  },

  // CORS
  cors: {
    origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3001'],
  },

  // Paystack
  paystack: {
    secretKey: process.env.PAYSTACK_SECRET_KEY,
    publicKey: process.env.PAYSTACK_PUBLIC_KEY,
  },

  // Frontend URL
  frontend: {
    url: process.env.FRONTEND_URL || 'http://localhost:3001',
  },
});