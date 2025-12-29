// packages/config/next/deploy-config.js
module.exports = {
  // Production domains
  domains: {
    'boldmind-hub': 'boldmind.ng',
    'educenter': 'educenter.com.ng', 
    'amebogist': 'amebogist.ng',
    'receptionist': 'receptionist.boldmind.ng',
    'boldmind-os': 'os.boldmind.ng',
    'naija-fither': 'naijafither.boldmind.ng',
    'emailscraper-pro': 'emailscraper.boldmind.ng',
    'safe-naija': 'safenaija.boldmind.ng',
    'koloAI': 'kolo.boldmind.ng',
    'social-factory': 'socialfactory.boldmind.ng',
    'credibility-hub': 'credibility.boldmind.ng',
    'digital-storefront': 'digitalstorefront.boldmind.ng',
    'business-plan-ai': 'businessplan.boldmind.ng',
    'analytics-ai': 'analytics.boldmind.ng',
    'marketing-automation-ai': 'marketingautomation.boldmind.ng',
    'branding-design-ai': 'brandingdesign.boldmind.ng',
    'financial-forecasting-ai': 'financialforecasting.boldmind.ng',
    'investor-readiness-ai': 'investorreadiness.boldmind.ng',
    'afroCopy': 'afrocopy.boldmind.ng',
    'afroHustle': 'afrohustle.boldmind.ng',
    'anonTruth': 'anontruth.boldmind.ng',
    'borderlessRemit': 'borderlessremit.boldmind.ng',
    'farmGate Direct': 'farmgatedirect.boldmind.ng',
    'NaijaGig Matcher': 'naijagigmatcher.boldmind.ng',
    'powerAlerts': 'poweralerts.boldmind.ng',
    'receiptGenius': 'receiptgenius.boldmind.ng',
    'skill2Cash': 'skill2cash.boldmind.ng',
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