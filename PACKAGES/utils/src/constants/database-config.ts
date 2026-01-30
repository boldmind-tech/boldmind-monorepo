import { DatabaseType } from './products';

export const DATABASE_CONFIG = {
  // PostgreSQL/Prisma Services (each has own database)
  postgres: {
    'boldmind-os-service': 'boldmind_os',
    'user-service': 'user_service',
    'payment-service': 'payment_service',
    'analytics-service': 'analytics_service',
    'educenter-service': 'educenter_service',
    'fither-service': 'fither_service',
    'planai-service': 'planai_service',
    'hub-service': 'hub_service',
    'receptionist-service': 'receptionist_service',
    'credibility-service': 'credibility_service',
    'business-planning-service': 'business_planning_service',
    'financial-service': 'financial_service',
    'investor-service': 'investor_service',
    'storefronts-service': 'storefronts_service',
    'digital-storefronts': 'digital_storefronts_service',
    'marketing-service': 'marketing_service',
    'analytics-dashboard-service': 'analytics_dashboard_service',
    'safeai-service': 'safeai_service',
    'koloai-service': 'koloai_service',
    'receipt-service': 'receipt_service'
  } as const,

  // MongoDB Services (each has own database)
  mongodb: {
    'amebogist-service': 'amebogist',
    'social-factory-service': 'social_factory',
    'emailscraper-pro-service': 'emailscraper_pro',
    'safeai-service': 'safeai',
    'afrohustle-service': 'afrohustle',
    'naijagig-matcher-service': 'naijagig_matcher',
    'borderless-remit-service': 'borderless_remit',
    'power-alert-service': 'power_alert',
    'farmgate-direct-service': 'farmgate_direct',
    'afrocopy-ai-service': 'afrocopy_ai',
    'skill2cash-service': 'skill2cash',
    'anontruth-mic-service': 'anontruth_mic'
  } as const,

  // Frontend/App Products mapping to backend services
  products: {
    // PostgreSQL-based products
    'boldmind-hub': 'hub-service',
    'educenter': 'educenter-service',
    'receptionist': 'receptionist-service',
    'boldmind-os': 'boldmind-os-service',
    'naija-fither': 'fither-service',
    'credibility-hubs': 'credibility-service',
    'business-planning': 'business-planning-service',
    'financial-forecasting': 'financial-service',
    'investor-readiness': 'investor-service',
    'digital-storefronts': 'digital-storefronts',
    'marketing-automation': 'marketing-service',
    'analytics-dashboard': 'analytics-dashboard-service',
    'receipt-genius': 'receipt-service',
    'safe-ai': 'safeai-service',
    'kolo-ai': 'koloai-service',
    'planai': 'planai-service',

    // MongoDB-based products
    'amebogist': 'amebogist-service',
    'social-factory': 'social-factory-service',
    'emailscraper-pro': 'emailscraper-pro-service',
    'branding-design': 'safeai-service',
    'afrohustle-os': 'afrohustle-service',
    'naijagig-matcher': 'naijagig-matcher-service',
    'borderless-remit': 'borderless-remit-service',
    'power-alert': 'power-alert-service',
    'farmgate-direct': 'farmgate-direct-service',
    'afrocopy-ai': 'afrocopy-ai-service',
    'skill2cash': 'skill2cash-service',
    'anontruth-mic': 'anontruth-mic-service'
  } as const
} as const;

// Type helpers
export type PostgresService = keyof typeof DATABASE_CONFIG.postgres;
export type MongoService = keyof typeof DATABASE_CONFIG.mongodb;
export type ServiceName = PostgresService | MongoService;
export type ProductSlug = keyof typeof DATABASE_CONFIG.products;

/**
 * Get which database a service uses
 */
export function getServiceDatabase(serviceName: ServiceName): DatabaseType {
  if (serviceName in DATABASE_CONFIG.postgres) {
    return 'postgres';
  }
  if (serviceName in DATABASE_CONFIG.mongodb) {
    return 'mongodb';
  }
  throw new Error(`Unknown service: ${serviceName}`);
}

/**
 * Get which backend service handles a product
 */
export function getServiceForProduct(productSlug: string): ServiceName | null {
  return DATABASE_CONFIG.products[productSlug as ProductSlug] || null;
}

/**
 * Get database name for a service
 */
export function getDatabaseName(serviceName: ServiceName): string {
  if (serviceName in DATABASE_CONFIG.postgres) {
    return DATABASE_CONFIG.postgres[serviceName as PostgresService];
  }
  if (serviceName in DATABASE_CONFIG.mongodb) {
    return DATABASE_CONFIG.mongodb[serviceName as MongoService];
  }
  throw new Error(`Unknown service: ${serviceName}`);
}

/**
 * Check if service uses PostgreSQL
 */
export function usesPostgres(serviceName: ServiceName): boolean {
  return serviceName in DATABASE_CONFIG.postgres;
}

/**
 * Check if service uses MongoDB
 */
export function usesMongoDB(serviceName: ServiceName): boolean {
  return serviceName in DATABASE_CONFIG.mongodb;
}

/**
 * Get all services using a specific database
 */
export function getServicesByDatabase(db: DatabaseType): readonly ServiceName[] {
  return Object.keys(
    db === 'postgres' ? DATABASE_CONFIG.postgres : DATABASE_CONFIG.mongodb
  ) as ServiceName[];
}

/**
 * Get all products for a service
 */
export function getProductsForService(serviceName: ServiceName): ProductSlug[] {
  return Object.entries(DATABASE_CONFIG.products)
    .filter(([_, service]) => service === serviceName)
    .map(([product]) => product) as ProductSlug[];
}

/**
 * Get environment variable name for a service's database URL
 */
export function getDatabaseEnvVar(serviceName: ServiceName): string {
  const dbType = getServiceDatabase(serviceName);

  if (dbType === 'postgres') {
    // PostgreSQL services use SERVICE_NAME_DATABASE_URL
    const suffix = serviceName.toUpperCase().replace(/-/g, '_');
    return `${suffix}_DATABASE_URL`;
  } else {
    // MongoDB services use SERVICE_NAME_MONGODB_URL
    const suffix = serviceName.toUpperCase().replace(/-/g, '_');
    return `${suffix}_MONGODB_URL`;
  }
}

/**
 * Get HTTP service URL environment variable name
 * (For API Gateway to communicate with services)
 */
export function getServiceUrlEnvVar(serviceName: ServiceName): string {
  const suffix = serviceName.toUpperCase().replace(/-/g, '_');
  return `${suffix}_URL`;
}

/**
 * Get connection string from environment variables
 * Throws error if environment variable is not set
 */
export function getConnectionString(serviceName: ServiceName): string {
  const envVar = getDatabaseEnvVar(serviceName);
  const connectionString = process.env[envVar];

  if (!connectionString) {
    throw new Error(
      `Database connection string not found for ${serviceName}. ` +
      `Please set ${envVar} environment variable.`
    );
  }

  return connectionString;
}

/**
 * Get service URL from environment variables
 * (For HTTP communication between services)
 */
export function getServiceUrl(serviceName: ServiceName): string {
  const envVar = getServiceUrlEnvVar(serviceName);
  const url = process.env[envVar];

  if (!url) {
    // Fallback to default localhost with standard port pattern
    const serviceNumber = serviceName === 'hub-service' ? '4001' :
      serviceName === 'user-service' ? '4002' :
        serviceName === 'payment-service' ? '4003' : '4000';
    return `http://localhost:${serviceNumber}`;
  }

  return url;
}

/**
 * Validate all required database environment variables are set
 */
export function validateDatabaseEnvVars(): string[] {
  const missing: string[] = [];

  // Check all PostgreSQL services
  Object.keys(DATABASE_CONFIG.postgres).forEach(serviceName => {
    const envVar = getDatabaseEnvVar(serviceName as ServiceName);
    if (!process.env[envVar]) {
      missing.push(envVar);
    }
  });

  // Check all MongoDB services
  Object.keys(DATABASE_CONFIG.mongodb).forEach(serviceName => {
    const envVar = getDatabaseEnvVar(serviceName as ServiceName);
    if (!process.env[envVar]) {
      missing.push(envVar);
    }
  });

  return missing;
}

/**
 * Database configuration for each service
 */
export const SERVICE_DB_CONFIG = Object.fromEntries(
  [...Object.keys(DATABASE_CONFIG.postgres), ...Object.keys(DATABASE_CONFIG.mongodb)].map(
    (serviceName) => [
      serviceName,
      {
        database: getDatabaseName(serviceName as ServiceName),
        type: getServiceDatabase(serviceName as ServiceName),
        envVar: getDatabaseEnvVar(serviceName as ServiceName),
        serviceUrl: getServiceUrl(serviceName as ServiceName),
        products: getProductsForService(serviceName as ServiceName)
      }
    ]
  )
);