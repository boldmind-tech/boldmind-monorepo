// packages/config/next/deploy-config.js
module.exports = {
  // Production domains
  domains: {
    'boldmind-hub': 'boldmind.ng',
    'educenter': 'educenter.com.ng',
    'amebogist': 'amebogist.ng',
    'planai-landing': 'planai.boldmind.ng',
    'receptionist': 'planai.boldmind.ng/receptionist',
    'boldmind-os': 'os.boldmind.ng',
    'naija-fither': 'fit.boldmind.ng',
    'emailscraper-pro': 'email.boldmind.ng',
    'safe-naija': 'safe.boldmind.ng',
    'koloAI': 'kolo.boldmind.ng',
    'social-factory': 'social.boldmind.ng',
    'credibility-hub': 'planai.boldmind.ng/credibility',
    'digital-storefront': 'planai.boldmind.ng/store',
    'business-plan-ai': 'planai.boldmind.ng/planning',
    'analytics-ai': 'planai.boldmind.ng/analytics',
    'marketing-automation-ai': 'planai.boldmind.ng/marketing',
    'branding-design-ai': 'planai.boldmind.ng/design',
    'financial-forecasting-ai': 'planai.boldmind.ng/finance',
    'investor-readiness-ai': 'planai.boldmind.ng/investor',
    'afroCopy': 'copy.amebogist.ng',
    'afroHustle': 'hustle.boldmind.ng',
    'anonTruth': 'anon.amebogist.ng',
    'borderlessRemit': 'border.boldmind.ng',
    'farmGate Direct': 'farm.boldmind.ng',
    'NaijaGig Matcher': 'gig.educenter.com.ng',
    'powerAlerts': 'power.boldmind.ng',
    'receiptGenius': 'receipt.boldmind.ng',
    'skill2Cash': 'skills.educenter.com.ng',
  },

  // Common environment variables
  env: {
    NODE_ENV: 'production',
    NEXT_PUBLIC_APP_ENV: 'production',
    NEXT_PUBLIC_APP_URL: process.env.VERCEL_URL || 'https://boldmind.ng',
  },

  // Build settings
  build: {
    command: 'npm run build',
    output: '.next',
  },

  // Deployment regions
  regions: ['fra1'], // Frankfurt for better latency to Nigeria

  // Image optimization
  images: {
    domains: ['boldmind.ng', 'amebogist.ng', 'educenter.com.ng'],
    formats: ['image/avif', 'image/webp'],
  },
};