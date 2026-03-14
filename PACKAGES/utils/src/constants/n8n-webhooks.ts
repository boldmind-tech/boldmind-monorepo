//PACKAGES/utils/src/constants/n8n-webhooks.ts

// ============================================
// BOLDMIND n8n CLOUD WEBHOOKS
// Last updated: February 12, 2026
// 
// ============================================

export const N8N_WEBHOOKS = {
  // ============ LIVE PRODUCTS ============

  AI_RECEPTIONIST: {
    // Webhook URL from n8n Cloud
    // Workflow: AI Receptionist - Lead Capture
    INBOUND: 'https://charles.app.n8n.cloud/webhook/ai-receptionist-inbound',

    // Workflow: AI Receptionist - Appointment Booking
    BOOKING: 'https://charles.app.n8n.cloud/webhook/ai-receptionist-book',

    // Workflow: AI Receptionist - Lead Enrichment
    ENRICH: 'https://charles.app.n8n.cloud/webhook/ai-receptionist-enrich',
  },

  EDUCENTER: {
    // Workflow: EduCenter - Auto Grade Exam
    GRADE_EXAM: 'https://charles.app.n8n.cloud/webhook/educenter-grade',

    // Workflow: EduCenter - Generate Certificate
    CERTIFICATE: 'https://charles.app.n8n.cloud/webhook/educenter-cert',

    // Workflow: EduCenter - Payment to Enrollment
    ENROLL: 'https://charles.app.n8n.cloud/webhook/educenter-enroll',

    // Workflow: EduCenter - Study Streak Reminder
    REMINDER: 'https://charles.app.n8n.cloud/webhook/educenter-remind',
  },

  SOCIAL_FACTORY: {
    // Workflow: Social Factory - AI Video Generation
    GENERATE_VIDEO: 'https://charles.app.n8n.cloud/webhook/social-generate',

    // Workflow: Social Factory - Multi-Platform Publish
    PUBLISH: 'https://charles.app.n8n.cloud/webhook/social-publish',

    // Workflow: Social Factory - Content Analytics
    ANALYTICS: 'https://charles.app.n8n.cloud/webhook/social-analytics',
  },

  BOLDMIND_OS: {
    // Workflow: BoldMind OS - Sync Note to Knowledge Graph
    SYNC_NOTE: 'https://charles.app.n8n.cloud/webhook/boldmind-sync',

    // Workflow: BoldMind OS - ADHD Focus Timer
    FOCUS_TIMER: 'https://charles.app.n8n.cloud/webhook/boldmind-focus',

    // Workflow: BoldMind OS - Daily Task Reminder
    REMINDER: 'https://charles.app.n8n.cloud/webhook/boldmind-remind',
  },

  NAIJA_FITHER: {
    // Workflow: Naija FitHer - Weekly Meal Plan
    MEAL_PLAN: 'https://charles.app.n8n.cloud/webhook/fither-meal',

    // Workflow: Naija FitHer - Workout Logger
    WORKOUT: 'https://charles.app.n8n.cloud/webhook/fither-workout',

    // Workflow: Naija FitHer - Weight Tracking
    WEIGHT: 'https://charles.app.n8n.cloud/webhook/fither-weight',

    // Workflow: Naija FitHer - AI Wellness Coach
    AI_COACH: 'https://charles.app.n8n.cloud/webhook/fither-coach',
  },

  EMAILSCRAPER_PRO: {
    // Workflow: EmailScraper - Find Emails
    SEARCH: 'https://charles.app.n8n.cloud/webhook/email-search',

    // Workflow: EmailScraper - Verify Email
    VERIFY: 'https://charles.app.n8n.cloud/webhook/email-verify',

    // Workflow: EmailScraper - Enrich Lead
    ENRICH: 'https://charles.app.n8n.cloud/webhook/email-enrich',

    // Workflow: EmailScraper - Export to CRM
    EXPORT: 'https://charles.app.n8n.cloud/webhook/email-export',
  },

  CREDIBILITY_HUBS: {
    // Workflow: Credibility Hubs - Generate Portfolio
    PORTFOLIO: 'https://charles.app.n8n.cloud/webhook/credibility-portfolio',

    // Workflow: Credibility Hubs - LinkedIn Optimizer
    LINKEDIN: 'https://charles.app.n8n.cloud/webhook/credibility-linkedin',

    // Workflow: Credibility Hubs - Resume Builder
    RESUME: 'https://charles.app.n8n.cloud/webhook/credibility-resume',
  },

  // ============ PLANAI SUITE ============

  BUSINESS_PLANNING: {
    // Workflow: AI Business Plan Generator
    GENERATE_PLAN: 'https://charles.app.n8n.cloud/webhook/planai-business',

    // Workflow: Market Analysis
    MARKET_ANALYSIS: 'https://charles.app.n8n.cloud/webhook/planai-market',

    // Workflow: Competitor Research
    COMPETITOR: 'https://charles.app.n8n.cloud/webhook/planai-competitor',
  },

  FINANCIAL_FORECASTING: {
    // Workflow: Cashflow Projection
    CASHFLOW: 'https://charles.app.n8n.cloud/webhook/planai-cashflow',

    // Workflow: Revenue Forecast
    REVENUE: 'https://charles.app.n8n.cloud/webhook/planai-revenue',

    // Workflow: Break-Even Analysis
    BREAK_EVEN: 'https://charles.app.n8n.cloud/webhook/planai-breakeven',
  },

  INVESTOR_READINESS: {
    // Workflow: Pitch Deck Generator
    PITCH_DECK: 'https://charles.app.n8n.cloud/webhook/planai-pitch',

    // Workflow: Data Room Setup
    DATA_ROOM: 'https://charles.app.n8n.cloud/webhook/planai-dataroom',

    // Workflow: Term Sheet Generator
    TERM_SHEET: 'https://charles.app.n8n.cloud/webhook/planai-termsheet',

    // Workflow: Cap Table Management
    CAP_TABLE: 'https://charles.app.n8n.cloud/webhook/planai-captable',
  },

  BRANDING_DESIGN: {
    // Workflow: AI Logo Generator
    LOGO: 'https://charles.app.n8n.cloud/webhook/planai-logo',

    // Workflow: Color Palette Generator
    COLORS: 'https://charles.app.n8n.cloud/webhook/planai-colors',

    // Workflow: Brand Kit Creator
    BRAND_KIT: 'https://charles.app.n8n.cloud/webhook/planai-brandkit',

    // Workflow: Social Media Templates
    SOCIAL_TEMPLATES: 'https://charles.app.n8n.cloud/webhook/planai-templates',
  },

  DIGITAL_STOREFRONTS: {
    // Workflow: Instant Store Creation
    CREATE_STORE: 'https://charles.app.n8n.cloud/webhook/planai-createstore',

    // Workflow: New Order Processing
    NEW_ORDER: 'https://charles.app.n8n.cloud/webhook/planai-neworder',

    // Workflow: Inventory Update
    INVENTORY: 'https://charles.app.n8n.cloud/webhook/planai-inventory',

    // Workflow: Delivery Request
    DELIVERY: 'https://charles.app.n8n.cloud/webhook/planai-delivery',
  },

  MARKETING_AUTOMATION: {
    // Workflow: Email Campaign
    EMAIL_CAMPAIGN: 'https://charles.app.n8n.cloud/webhook/planai-email',

    // Workflow: Abandoned Cart Recovery
    ABANDONED_CART: 'https://charles.app.n8n.cloud/webhook/planai-cart',

    // Workflow: Lead Scoring
    LEAD_SCORE: 'https://charles.app.n8n.cloud/webhook/planai-leadscore',

    // Workflow: Customer Segmentation
    SEGMENT: 'https://charles.app.n8n.cloud/webhook/planai-segment',
  },

  ANALYTICS_DASHBOARD: {
    // Workflow: Nightly ETL
    ETL: 'https://charles.app.n8n.cloud/webhook/planai-etl',

    // Workflow: Custom Report Generator
    REPORT: 'https://charles.app.n8n.cloud/webhook/planai-report',

    // Workflow: Real-time Dashboard Update
    DASHBOARD: 'https://charles.app.n8n.cloud/webhook/planai-dashboard',
  },

  // ============ CONCEPT PRODUCTS ============

  KOLO_AI: {
    // Workflow: Record Contribution
    CONTRIBUTION: 'https://charles.app.n8n.cloud/webhook/kolo-contribution',

    // Workflow: AI Default Prediction
    RISK_ANALYSIS: 'https://charles.app.n8n.cloud/webhook/kolo-risk',

    // Workflow: Auto-Pause Contributions
    AUTO_PAUSE: 'https://charles.app.n8n.cloud/webhook/kolo-pause',

    // Workflow: Group Payout
    PAYOUT: 'https://charles.app.n8n.cloud/webhook/kolo-payout',
  },

  BORDERLESS_REMIT: {
    // Workflow: Rate Scraper & Comparison
    RATE_COMPARE: 'https://charles.app.n8n.cloud/webhook/borderless-rates',

    // Workflow: Receipt Generator
    RECEIPT: 'https://charles.app.n8n.cloud/webhook/borderless-receipt',

    // Workflow: Rate Alert
    ALERT: 'https://charles.app.n8n.cloud/webhook/borderless-alert',
  },

  RECEIPT_GENIUS: {
    // Workflow: VAT-Compliant Invoice Generator
    CREATE_INVOICE: 'https://charles.app.n8n.cloud/webhook/receipt-create',

    // Workflow: Send via WhatsApp
    SEND_WHATSAPP: 'https://charles.app.n8n.cloud/webhook/receipt-whatsapp',

    // Workflow: Send via Email
    SEND_EMAIL: 'https://charles.app.n8n.cloud/webhook/receipt-email',

    // Workflow: Tax Records to Sheets
    TAX_RECORDS: 'https://charles.app.n8n.cloud/webhook/receipt-tax',
  },

  POWER_ALERT: {
    // Workflow: Report Outage
    REPORT_OUTAGE: 'https://charles.app.n8n.cloud/webhook/power-outage',

    // Workflow: Aggregate by Area
    AGGREGATE: 'https://charles.app.n8n.cloud/webhook/power-aggregate',

    // Workflow: Solar Lead Generation
    SOLAR_LEAD: 'https://charles.app.n8n.cloud/webhook/power-solar',
  },

  FARMGATE_DIRECT: {
    // Workflow: New Produce Listing
    NEW_PRODUCE: 'https://charles.app.n8n.cloud/webhook/farmgate-produce',

    // Workflow: Match Buyers
    MATCH_BUYER: 'https://charles.app.n8n.cloud/webhook/farmgate-match',

    // Workflow: Logistics Coordination
    LOGISTICS: 'https://charles.app.n8n.cloud/webhook/farmgate-logistics',

    // Workflow: Price Tracking
    PRICE_TRACK: 'https://charles.app.n8n.cloud/webhook/farmgate-price',
  },

  AFROCOPY_AI: {
    // Workflow: Pidgin Caption Generator
    PIDGIN_CAPTION: 'https://charles.app.n8n.cloud/webhook/afrocopy-pidgin',

    // Workflow: Yoruba Translation
    YORUBA: 'https://charles.app.n8n.cloud/webhook/afrocopy-yoruba',

    // Workflow: Igbo Translation
    IGBO: 'https://charles.app.n8n.cloud/webhook/afrocopy-igbo',

    // Workflow: Hausa Translation
    HAUSA: 'https://charles.app.n8n.cloud/webhook/afrocopy-hausa',

    // Workflow: Blog Post Generator
    BLOG: 'https://charles.app.n8n.cloud/webhook/afrocopy-blog',
  },

  SKILL2CASH: {
    // Workflow: Video Profile Submission
    VIDEO_SUBMIT: 'https://charles.app.n8n.cloud/webhook/skill2cash-video',

    // Workflow: Transcode & Watermark
    PROCESS_VIDEO: 'https://charles.app.n8n.cloud/webhook/skill2cash-process',

    // Workflow: Match with Hirer
    MATCH: 'https://charles.app.n8n.cloud/webhook/skill2cash-match',

    // Workflow: Escrow Payment
    PAYMENT: 'https://charles.app.n8n.cloud/webhook/skill2cash-payment',
  },

  ANONTRUTH_MIC: {
    // Workflow: Anonymous Audio Drop
    AUDIO_DROP: 'https://charles.app.n8n.cloud/webhook/anontruth-audio',

    // Workflow: Transcribe with Whisper
    TRANSCRIBE: 'https://charles.app.n8n.cloud/webhook/anontruth-transcribe',

    // Workflow: Sentiment Analysis
    SENTIMENT: 'https://charles.app.n8n.cloud/webhook/anontruth-sentiment',

    // Workflow: Auto-Delete after 24h
    EXPIRE: 'https://charles.app.n8n.cloud/webhook/anontruth-expire',

    // Workflow: Boost Content
    BOOST: 'https://charles.app.n8n.cloud/webhook/anontruth-boost',
  },

  SAFE_AI: {
    // Workflow: Incident Reporting
    INCIDENT: 'https://charles.app.n8n.cloud/webhook/safeai-incident',

    // Workflow: Criminal Database Search
    DATABASE_SEARCH: 'https://charles.app.n8n.cloud/webhook/safeai-search',

    // Workflow: Pattern Recognition
    PATTERN: 'https://charles.app.n8n.cloud/webhook/safeai-pattern',

    // Workflow: Officer Dispatch
    DISPATCH: 'https://charles.app.n8n.cloud/webhook/safeai-dispatch',
  },

  // ============ FACEBOOK/META MARKETING ============

  FACEBOOK_MARKETING: {
    // Workflow: Facebook Lead Ads - Real-time Capture
    LEAD_CAPTURE: 'https://charles.app.n8n.cloud/webhook/facebook-lead-capture',

    // Workflow: Campaign Creation & Management
    CREATE_CAMPAIGN: 'https://charles.app.n8n.cloud/webhook/facebook-create-campaign',
    UPDATE_CAMPAIGN: 'https://charles.app.n8n.cloud/webhook/facebook-update-campaign',

    // Workflow: Ad Performance & Insights
    AD_INSIGHTS: 'https://charles.app.n8n.cloud/webhook/facebook-ad-insights',
    DAILY_REPORT: 'https://charles.app.n8n.cloud/webhook/facebook-daily-report',

    // Workflow: Conversions API
    SEND_CONVERSION: 'https://charles.app.n8n.cloud/webhook/facebook-conversion',

    // Workflow: Audience Management
    CREATE_AUDIENCE: 'https://charles.app.n8n.cloud/webhook/facebook-create-audience',
    UPDATE_AUDIENCE: 'https://charles.app.n8n.cloud/webhook/facebook-update-audience',
  },

  INSTAGRAM_AUTOMATION: {
    // Workflow: Content Publishing
    PUBLISH_POST: 'https://charles.app.n8n.cloud/webhook/instagram-publish-post',
    PUBLISH_STORY: 'https://charles.app.n8n.cloud/webhook/instagram-publish-story',
    PUBLISH_CAROUSEL: 'https://charles.app.n8n.cloud/webhook/instagram-publish-carousel',

    // Workflow: Engagement Management
    NEW_COMMENT: 'https://charles.app.n8n.cloud/webhook/instagram-new-comment',
    REPLY_COMMENT: 'https://charles.app.n8n.cloud/webhook/instagram-reply-comment',
    NEW_MENTION: 'https://charles.app.n8n.cloud/webhook/instagram-new-mention',
    NEW_DM: 'https://charles.app.n8n.cloud/webhook/instagram-new-dm',
    SEND_DM: 'https://charles.app.n8n.cloud/webhook/instagram-send-dm',

    // Workflow: Analytics & Insights
    ACCOUNT_INSIGHTS: 'https://charles.app.n8n.cloud/webhook/instagram-account-insights',
    MEDIA_INSIGHTS: 'https://charles.app.n8n.cloud/webhook/instagram-media-insights',

    // Workflow: Discovery & Research
    HASHTAG_SEARCH: 'https://charles.app.n8n.cloud/webhook/instagram-hashtag-search',
    BUSINESS_DISCOVERY: 'https://charles.app.n8n.cloud/webhook/instagram-business-discovery',
  },

  WHATSAPP_BUSINESS: {
    // Workflow: Send Messages
    SEND_TEXT: 'https://charles.app.n8n.cloud/webhook/whatsapp-send-text',
    SEND_TEMPLATE: 'https://charles.app.n8n.cloud/webhook/whatsapp-send-template',
    SEND_MEDIA: 'https://charles.app.n8n.cloud/webhook/whatsapp-send-media',
    SEND_INTERACTIVE: 'https://charles.app.n8n.cloud/webhook/whatsapp-send-interactive',

    // Workflow: Receive Messages (Webhooks)
    MESSAGE_RECEIVED: 'https://charles.app.n8n.cloud/webhook/whatsapp-message-received',
    MESSAGE_STATUS: 'https://charles.app.n8n.cloud/webhook/whatsapp-message-status',

    // Workflow: Business Profile
    UPDATE_PROFILE: 'https://charles.app.n8n.cloud/webhook/whatsapp-update-profile',

    // Workflow: Template Management
    CREATE_TEMPLATE: 'https://charles.app.n8n.cloud/webhook/whatsapp-create-template',
  },

  MESSENGER_PLATFORM: {
    // Workflow: Send Messages
    SEND_MESSAGE: 'https://charles.app.n8n.cloud/webhook/messenger-send-message',
    SEND_TEMPLATE: 'https://charles.app.n8n.cloud/webhook/messenger-send-template',

    // Workflow: Receive Messages (Webhooks)
    MESSAGE_RECEIVED: 'https://charles.app.n8n.cloud/webhook/messenger-message-received',
    POSTBACK: 'https://charles.app.n8n.cloud/webhook/messenger-postback',

    // Workflow: Messenger Profile
    SET_GET_STARTED: 'https://charles.app.n8n.cloud/webhook/messenger-set-get-started',
    SET_GREETING: 'https://charles.app.n8n.cloud/webhook/messenger-set-greeting',
    SET_MENU: 'https://charles.app.n8n.cloud/webhook/messenger-set-menu',
  },

  FACEBOOK_PAGE: {
    // Workflow: Page Management
    CREATE_POST: 'https://charles.app.n8n.cloud/webhook/facebook-create-post',
    SCHEDULE_POST: 'https://charles.app.n8n.cloud/webhook/facebook-schedule-post',

    // Workflow: Engagement
    NEW_COMMENT: 'https://charles.app.n8n.cloud/webhook/facebook-new-comment',
    REPLY_COMMENT: 'https://charles.app.n8n.cloud/webhook/facebook-reply-comment',

    // Workflow: Page Insights
    PAGE_INSIGHTS: 'https://charles.app.n8n.cloud/webhook/facebook-page-insights',
  },

  // ============ MOBILE APPS (TWA) ============

  MOBILE_PUSH: {
    // Workflow: Send Push Notification
    SEND: 'https://charles.app.n8n.cloud/webhook/mobile-push',

    // Workflow: Track Engagement
    TRACK: 'https://charles.app.n8n.cloud/webhook/mobile-track',
  }
} as const;

// ============================================
// USAGE IN NEXT.JS:
// 
// import { N8N_WEBHOOKS } from '@boldmind/utils';
// 
// fetch(N8N_WEBHOOKS.AI_RECEPTIONIST.INBOUND, {
//   method: 'POST',
//   body: JSON.stringify({ message: 'hello' })
// })
// ============================================

export type N8NWebhookPath = typeof N8N_WEBHOOKS[keyof typeof N8N_WEBHOOKS][keyof typeof N8N_WEBHOOKS[keyof typeof N8N_WEBHOOKS]];