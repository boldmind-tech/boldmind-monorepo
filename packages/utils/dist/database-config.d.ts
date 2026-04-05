import { o as DatabaseType } from "./products-BcLbeltI.js";

//#region src/constants/database-config.d.ts
declare const DATABASE_CONFIG: {
  readonly postgres: {
    readonly 'boldmind-os-service': "boldmind_os";
    readonly 'user-service': "user_service";
    readonly 'payment-service': "payment_service";
    readonly 'analytics-service': "analytics_service";
    readonly 'educenter-service': "educenter_service";
    readonly 'fither-service': "fither_service";
    readonly 'planai-service': "planai_service";
    readonly 'hub-service': "hub_service";
    readonly 'receptionist-service': "receptionist_service";
    readonly 'credibility-service': "credibility_service";
    readonly 'business-planning-service': "business_planning_service";
    readonly 'financial-service': "financial_service";
    readonly 'investor-service': "investor_service";
    readonly 'storefronts-service': "storefronts_service";
    readonly 'digital-storefronts': "digital_storefronts_service";
    readonly 'marketing-service': "marketing_service";
    readonly 'analytics-dashboard-service': "analytics_dashboard_service";
    readonly 'safeai-service': "safeai_service";
    readonly 'koloai-service': "koloai_service";
    readonly 'receipt-service': "receipt_service";
  };
  readonly mongodb: {
    readonly 'amebogist-service': "amebogist";
    readonly 'social-factory-service': "social_factory";
    readonly 'emailscraper-pro-service': "emailscraper_pro";
    readonly 'safeai-service': "safeai";
    readonly 'afrohustle-service': "afrohustle";
    readonly 'naijagig-matcher-service': "naijagig_matcher";
    readonly 'borderless-remit-service': "borderless_remit";
    readonly 'power-alert-service': "power_alert";
    readonly 'farmgate-direct-service': "farmgate_direct";
    readonly 'afrocopy-ai-service': "afrocopy_ai";
    readonly 'skill2cash-service': "skill2cash";
    readonly 'anontruth-mic-service': "anontruth_mic";
  };
  readonly products: {
    readonly 'boldmind-hub': "hub-service";
    readonly educenter: "educenter-service";
    readonly receptionist: "receptionist-service";
    readonly 'boldmind-os': "boldmind-os-service";
    readonly 'naija-fither': "fither-service";
    readonly 'credibility-hubs': "credibility-service";
    readonly 'business-planning': "business-planning-service";
    readonly 'financial-forecasting': "financial-service";
    readonly 'investor-readiness': "investor-service";
    readonly 'digital-storefronts': "digital-storefronts";
    readonly 'marketing-automation': "marketing-service";
    readonly 'analytics-dashboard': "analytics-dashboard-service";
    readonly 'receipt-genius': "receipt-service";
    readonly 'safe-ai': "safeai-service";
    readonly 'kolo-ai': "koloai-service";
    readonly planai: "planai-service";
    readonly amebogist: "amebogist-service";
    readonly 'social-factory': "social-factory-service";
    readonly 'emailscraper-pro': "emailscraper-pro-service";
    readonly 'branding-design': "safeai-service";
    readonly 'afrohustle-os': "afrohustle-service";
    readonly 'naijagig-matcher': "naijagig-matcher-service";
    readonly 'borderless-remit': "borderless-remit-service";
    readonly 'power-alert': "power-alert-service";
    readonly 'farmgate-direct': "farmgate-direct-service";
    readonly 'afrocopy-ai': "afrocopy-ai-service";
    readonly skill2cash: "skill2cash-service";
    readonly 'anontruth-mic': "anontruth-mic-service";
  };
};
type PostgresService = keyof typeof DATABASE_CONFIG.postgres;
type MongoService = keyof typeof DATABASE_CONFIG.mongodb;
type ServiceName = PostgresService | MongoService;
type ProductSlug = keyof typeof DATABASE_CONFIG.products;
/**
 * Get which database a service uses
 */
declare function getServiceDatabase(serviceName: ServiceName): DatabaseType;
/**
 * Get which backend service handles a product
 */
declare function getServiceForProduct(productSlug: string): ServiceName | null;
/**
 * Get database name for a service
 */
declare function getDatabaseName(serviceName: ServiceName): string;
/**
 * Check if service uses PostgreSQL
 */
declare function usesPostgres(serviceName: ServiceName): boolean;
/**
 * Check if service uses MongoDB
 */
declare function usesMongoDB(serviceName: ServiceName): boolean;
/**
 * Get all services using a specific database
 */
declare function getServicesByDatabase(db: DatabaseType): readonly ServiceName[];
/**
 * Get all products for a service
 */
declare function getProductsForService(serviceName: ServiceName): ProductSlug[];
/**
 * Get environment variable name for a service's database URL
 */
declare function getDatabaseEnvVar(serviceName: ServiceName): string;
/**
 * Get HTTP service URL environment variable name
 * (For API Gateway to communicate with services)
 */
declare function getServiceUrlEnvVar(serviceName: ServiceName): string;
/**
 * Get connection string from environment variables
 * Throws error if environment variable is not set
 */
declare function getConnectionString(serviceName: ServiceName): string;
/**
 * Get service URL from environment variables
 * (For HTTP communication between services)
 */
declare function getServiceUrl(serviceName: ServiceName): string;
/**
 * Validate all required database environment variables are set
 */
declare function validateDatabaseEnvVars(): string[];
/**
 * Database configuration for each service
 */
declare const SERVICE_DB_CONFIG: {
  [k: string]: {
    database: string;
    type: DatabaseType;
    envVar: string;
    serviceUrl: string;
    products: ("amebogist" | "skill2cash" | "digital-storefronts" | "boldmind-hub" | "educenter" | "receptionist" | "boldmind-os" | "naija-fither" | "credibility-hubs" | "business-planning" | "financial-forecasting" | "investor-readiness" | "marketing-automation" | "analytics-dashboard" | "receipt-genius" | "safe-ai" | "kolo-ai" | "planai" | "social-factory" | "emailscraper-pro" | "branding-design" | "afrohustle-os" | "naijagig-matcher" | "borderless-remit" | "power-alert" | "farmgate-direct" | "afrocopy-ai" | "anontruth-mic")[];
  };
};
//#endregion
export { DATABASE_CONFIG, MongoService, PostgresService, ProductSlug, SERVICE_DB_CONFIG, ServiceName, getConnectionString, getDatabaseEnvVar, getDatabaseName, getProductsForService, getServiceDatabase, getServiceForProduct, getServiceUrl, getServiceUrlEnvVar, getServicesByDatabase, usesMongoDB, usesPostgres, validateDatabaseEnvVars };
//# sourceMappingURL=database-config.d.ts.map