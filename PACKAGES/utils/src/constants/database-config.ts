// packages/utils/src/constants/database-config.ts

export type DatabaseType = 'postgres' | 'mongodb' | 'redis';

export type ModuleName =
  // Core
  | 'auth'
  | 'user'
  | 'payment'
  | 'notification'
  | 'media'
  | 'admin'
  | 'educenter'
  | 'planai'
  | 'receptionist'
  | 'content'        
  | 'emailscraper'
  | 'social-factory'
  | 'naija-fit'
  | 'boldmind-os'
  | 'storefronts'
  | 'automation';

export type ProductSlug =
  | 'boldmind-hub'
  | 'planai-suite'
  | 'amebogist'
  | 'amebo-studio'
  | 'educenter'
  | 'skillgig'
  | 'naija-fit'
  | 'naija-fither'     
  | 'boldmind-os'
  | 'boldmind-tools'
  | 'boldmind-concepts'
  | 'ai-receptionist'
  | 'credibility-hubs'
  | 'business-planning'
  | 'financial-forecasting'
  | 'investor-readiness'
  | 'branding-design'
  | 'digital-storefronts'
  | 'marketing-automation'
  | 'analytics-dashboard'
  | 'emailscraper-pro'
  | 'social-factory'
  | 'kolo-ai'
  | 'safe-ai'
  | 'afrohustle-os'
  | 'naijagig-matcher'
  | 'borderless-remit'
  | 'farmgate-direct'
  | 'power-alert'
  | 'receipt-genius'
  | 'skill2cash'
  | 'afrocopy-ai'
  | 'anontruth-mic';

// ─────────────────────────────────────────────────────────────────────────────
// Single-connection config (monolith)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * All database connections — single URL each.
 * Set these in Railway environment variables.
 */
export const DATABASE_CONNECTIONS = {
  /**
   * PostgreSQL — Neon serverless
   * Used for: users, subscriptions, educenter questions,
   *           planai jobs, fitness profiles, payments
   */
  postgres: {
    envVar: 'DATABASE_URL',
    provider: 'neon',
    url: process.env['DATABASE_URL'],
  },

  /**
   * MongoDB — Atlas M0 (free tier)
   * Used for: amebogist articles, email leads,
   *           social posts, automation logs
   */
  mongodb: {
    envVar: 'MONGODB_URL',
    provider: 'atlas',
    url: process.env['MONGODB_URL'],
  },

  /**
   * Redis — Upstash (serverless)
   * Used for: AI response cache, BullMQ queues,
   *           session store, rate limiting
   */
  redis: {
    envVar: 'REDIS_URL',
    provider: 'upstash',
    url: process.env['REDIS_URL'],
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Module → Database mapping
// Which database does each NestJS module use?
// ─────────────────────────────────────────────────────────────────────────────

export const MODULE_DATABASE: Record<ModuleName, DatabaseType> = {
  auth: 'postgres',
  user: 'postgres',
  payment: 'postgres',
  notification: 'postgres',
  media: 'postgres',
  admin: 'postgres',
  educenter: 'postgres',
  planai: 'postgres',
  receptionist: 'postgres',
  'naija-fit': 'postgres',
  'boldmind-os': 'postgres',
  storefronts: 'postgres',

  content: 'mongodb',
  emailscraper: 'mongodb',
  'social-factory': 'mongodb',
  automation: 'mongodb',
};

// ─────────────────────────────────────────────────────────────────────────────
// Product → Module mapping
// Which NestJS module handles each product slug?
// ─────────────────────────────────────────────────────────────────────────────

export const PRODUCT_MODULE: Record<ProductSlug, ModuleName> = {
  // Hub
  'boldmind-hub': 'admin',
  'planai-suite': 'planai',
  'ai-receptionist': 'receptionist',
  'credibility-hubs': 'planai',
  'business-planning': 'planai',
  'financial-forecasting': 'planai',
  'investor-readiness': 'planai',
  'branding-design': 'planai',
  'digital-storefronts': 'storefronts',
  'marketing-automation': 'planai',
  'analytics-dashboard': 'admin',

  // AmeboGist
  'amebogist': 'content',
  'amebo-studio': 'content',
  'anontruth-mic': 'content',

  // EduCenter
  'educenter': 'educenter',
  'skillgig': 'educenter',

  // Fitness
  'naija-fit': 'naija-fit',
  'naija-fither': 'naija-fit', 

  // Productivity
  'boldmind-os': 'boldmind-os',

  // B2B Tools
  'boldmind-tools': 'emailscraper',
  'emailscraper-pro': 'emailscraper',
  'social-factory': 'social-factory',

  'boldmind-concepts': 'admin',
  'kolo-ai': 'admin',
  'safe-ai': 'admin',
  'afrohustle-os': 'admin',
  'naijagig-matcher': 'admin',
  'borderless-remit': 'admin',
  'farmgate-direct': 'admin',
  'power-alert': 'admin',
  'receipt-genius': 'admin',
  'skill2cash': 'admin',
  'afrocopy-ai': 'admin',
};

// ─────────────────────────────────────────────────────────────────────────────
// App → Domain mapping
// ─────────────────────────────────────────────────────────────────────────────

export const APP_DOMAINS: Record<string, string> = {
  'boldmind-hub': 'boldmind.ng',
  'planai-suite': 'planai.boldmind.ng',
  'amebogist': 'amebogist.ng',
  'amebo-studio': 'studio.amebogist.ng',
  'educenter': 'educenter.com.ng',
  'skillgig': 'skills.educenter.com.ng',
  'naija-fit': 'fit.boldmind.ng',
  'boldmind-os': 'os.boldmind.ng',
  'boldmind-tools': 'tools.boldmind.ng',
  'boldmind-concepts': 'concept.boldmind.ng',
};

// ─────────────────────────────────────────────────────────────────────────────
// Helper functions
// ─────────────────────────────────────────────────────────────────────────────

export function getModuleForProduct(slug: string): ModuleName | null {
  return PRODUCT_MODULE[slug as ProductSlug] ?? null;
}

export function getDatabaseForProduct(slug: string): DatabaseType | null {
  const module = getModuleForProduct(slug);
  return module ? MODULE_DATABASE[module] : null;
}

export function getDatabaseForModule(module: ModuleName): DatabaseType {
  return MODULE_DATABASE[module];
}

export function getPostgresModules(): ModuleName[] {
  return Object.entries(MODULE_DATABASE)
    .filter(([, db]) => db === 'postgres')
    .map(([mod]) => mod as ModuleName);
}

export function getMongoModules(): ModuleName[] {
  return Object.entries(MODULE_DATABASE)
    .filter(([, db]) => db === 'mongodb')
    .map(([mod]) => mod as ModuleName);
}

export function getDomainForApp(appKey: string): string {
  return APP_DOMAINS[appKey] ?? `${appKey}.boldmind.ng`;
}

/**
 * Validate that all required database env vars are set at startup.
 * Call this in NestJS main.ts before bootstrapping.
 */
export function validateDatabaseEnvVars(): { valid: boolean; missing: string[] } {
  const required = ['DATABASE_URL', 'MONGODB_URL', 'REDIS_URL'];
  const missing = required.filter(v => !process.env[v]);
  return { valid: missing.length === 0, missing };
}

/**
 * @deprecated Old microservice helper — use getModuleForProduct() instead
 * Kept for backward compatibility during migration
 */
export function getServiceForProduct(productSlug: string): string | null {
  const module = getModuleForProduct(productSlug);
  return module ? `${module}-module` : null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Prisma schema hint — Postgres collections per module
// (reference only — actual schema is in service/prisma/schema.prisma)
// ─────────────────────────────────────────────────────────────────────────────

export const POSTGRES_TABLES = {
  auth: ['User', 'RefreshToken', 'OTPVerification'],
  user: ['UserProfile', 'ActivityLog'],
  payment: ['Subscription', 'Payment', 'Invoice'],
  notification: ['NotificationLog', 'PushSubscription'],
  media: ['MediaFile'],
  educenter: ['Question', 'StudentProgress', 'StudyStreak'],
  planai: ['PlanAIJob', 'PlanAITemplate'],
  receptionist: ['ReceptionistClient', 'ConversationLog', 'LeadCapture'],
  'naija-fit': ['FitnessProfile', 'WorkoutPlan', 'WorkoutLog', 'MealLog'],
  'boldmind-os': ['OSProfile', 'Task', 'PomodoroSession', 'KnowledgeNode'],
  storefronts: ['Store', 'Product', 'Order'],
  admin: ['AdminLog', 'WaitlistEntry'],
} as const;

export const MONGO_COLLECTIONS = {
  content: ['articles', 'comments', 'reactions', 'creator_stats'],
  emailscraper: ['email_leads', 'scrape_jobs'],
  'social-factory': ['social_posts', 'content_calendars', 'account_connections'],
  automation: ['n8n_logs', 'workflow_runs'],
} as const;