// packages/utils/src/constants/database-config.ts

export const DATABASE_CONFIG = {
  // PostgreSQL/Prisma Products (Transactional, structured data)
  postgres: [
    'boldmind-hub',
    'educenter',
    'educenter-twa',
    'ai-receptionist',
    'boldmind-os',
    'boldmind-os-twa',
    'naija-fither',
    'naija-fither-twa',
    'credibility-hubs',
    'business-planning',
    'financial-forecasting',
    'investor-readiness',
    'digital-storefronts',
    'marketing-automation',
    'analytics-dashboard',
    'receipt-genius',
    'safe-ai',
    'safe-ai-native',
    'kolo-ai'
  ],
  
  // MongoDB Products (Flexible schema, unstructured data)
  mongodb: [
    'amebogist',
    'amebogist-twa',
    'social-factory',
    'emailscraper-pro',
    'emailscraper-twa',
    'branding-design',
    'afrohustle-os',
    'naijagig-matcher',
    'borderless-remit',
    'power-alert',
    'farmgate-direct',
    'afrocopy-ai',
    'skill2cash',
    'anontruth-mic'
  ]
} as const;

export type DatabaseType = 'postgres' | 'mongodb';

/**
 * Get which database a product uses
 */
export function getProductDatabase(productSlug: string): DatabaseType {
  if (DATABASE_CONFIG.postgres.includes(productSlug as any)) {
    return 'postgres';
  }
  if (DATABASE_CONFIG.mongodb.includes(productSlug as any)) {
    return 'mongodb';
  }
  return 'postgres'; // default
}

/**
 * Check if product uses PostgreSQL
 */
export function usesPostgres(productSlug: string): boolean {
  return DATABASE_CONFIG.postgres.includes(productSlug as any);
}

/**
 * Check if product uses MongoDB
 */
export function usesMongoDB(productSlug: string): boolean {
  return DATABASE_CONFIG.mongodb.includes(productSlug as any);
}

/**
 * Get all products using a specific database
 */
export function getProductsByDatabase(db: DatabaseType): readonly string[] {
  return DATABASE_CONFIG[db];
}

/**
 * Database connection strings (use environment variables)
 */
export const DB_CONNECTIONS = {
  postgres: {
    production: process.env.DATABASE_URL,
    development: process.env.DATABASE_URL,
  },
  mongodb: {
    production: process.env.MONGODB_URI,
    development: process.env.MONGODB_URI,
  }
} as const;

export default DATABASE_CONFIG;