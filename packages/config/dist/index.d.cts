//#region src/shared/env-config.d.ts
type AppDomainKey = 'HUB' | 'AMEBOGIST' | 'EDUCENTER' | 'BOLDMIND_OS' | 'RECEPTIONIST_AI' | 'SOCIAL_FACTORY' | 'CREDIBILITY_HUB' | 'DIGITAL_STOREFRONT' | 'BUSSINESS_PLAN_AI' | 'PLANAI' | 'ANALYTICS_AI' | 'MARKETING_AUTOMATION_AI' | 'BRAND_DESIGN_AI' | 'FINANCIAL_FORCASTING_AI' | 'INVESTOR_READINESS_AI' | 'NAIJA_FITHER' | 'EMAILSCRAPER_PRO' | 'SAFE_NAIJA' | 'AFROHUSTLE_OS' | 'NAIJAGIG_MATCHER' | 'KOLO_AI' | 'BORDERLESS_REMIT' | 'RECEIPT_GENIUS' | 'POWER_ALERT' | 'FARMGATE_DIRECT' | 'AFROCOPY_AI' | 'SKILL2CASH' | 'ANONTRUTH_MIC';
type PostgresServiceName = 'boldmind-os-service' | 'user-service' | 'payment-service' | 'analytics-service' | 'educenter-service' | 'fither-service' | 'planai-service' | 'hub-service' | 'receptionist-service' | 'credibility-service' | 'business-planning-service' | 'financial-service' | 'investor-service' | 'storefronts-service' | 'digital-storefronts' | 'marketing-service' | 'analytics-dashboard-service' | 'safeai-service' | 'koloai-service' | 'receipt-service';
type MongoServiceName = 'amebogist-service' | 'social-factory-service' | 'emailscraper-pro-service' | 'safeai-service' | 'afrohustle-service' | 'naijagig-matcher-service' | 'borderless-remit-service' | 'power-alert-service' | 'farmgate-direct-service' | 'afrocopy-ai-service' | 'skill2cash-service' | 'anontruth-mic-service';
type ServiceName = PostgresServiceName | MongoServiceName;
declare const ENV_CONFIG: {
  NODE_ENV: string;
  PORT: number;
  CORS: {
    ORIGIN: string[];
    CREDENTIALS: boolean;
  };
  DOMAINS: Record<AppDomainKey, string>;
  DATABASE_URL: string;
  POSTGRES_SERVICES: {
    USER_SERVICE_DATABASE_URL: string;
    PAYMENT_SERVICE_DATABASE_URL: string;
    ANALYTICS_SERVICE_DATABASE_URL: string;
    EDUCENTER_SERVICE_DATABASE_URL: string;
    FITHER_SERVICE_DATABASE_URL: string;
    PLANAI_SERVICE_DATABASE_URL: string;
    HUB_SERVICE_DATABASE_URL: string;
    RECEPTIONIST_SERVICE_DATABASE_URL: string;
    CREDIBILITY_SERVICE_DATABASE_URL: string;
    BUSINESS_PLANNING_SERVICE_DATABASE_URL: string;
    FINANCIAL_SERVICE_DATABASE_URL: string;
    INVESTOR_SERVICE_DATABASE_URL: string;
    STOREFRONTS_SERVICE_DATABASE_URL: string;
    DIGITAL_STOREFRONTS_DATABASE_URL: string;
    MARKETING_SERVICE_DATABASE_URL: string;
    ANALYTICS_DASHBOARD_SERVICE_DATABASE_URL: string;
    SAFEAI_SERVICE_DATABASE_URL: string;
    KOLOAI_SERVICE_DATABASE_URL: string;
    RECEIPT_SERVICE_DATABASE_URL: string;
    BOLDMIND_OS_SERVICE_DATABASE_URL: string;
  };
  MONGODB_URL: string;
  MONGODB_SERVICES: {
    AMEBOGIST_SERVICE_MONGODB_URL: string;
    SOCIAL_FACTORY_SERVICE_MONGODB_URL: string;
    EMAILSCRAPER_PRO_SERVICE_MONGODB_URL: string;
    SAFEAI_SERVICE_MONGODB_URL: string;
    AFROHUSTLE_SERVICE_MONGODB_URL: string;
    NAIJAGIG_MATCHER_SERVICE_MONGODB_URL: string;
    BORDERLESS_REMIT_SERVICE_MONGODB_URL: string;
    POWER_ALERT_SERVICE_MONGODB_URL: string;
    FARMGATE_DIRECT_SERVICE_MONGODB_URL: string;
    AFROCOPY_AI_SERVICE_MONGODB_URL: string;
    SKILL2CASH_SERVICE_MONGODB_URL: string;
    ANONTRUTH_MIC_SERVICE_MONGODB_URL: string;
  };
  getPostgresConnection(service: PostgresServiceName): string;
  getMongoConnection(service: MongoServiceName): string;
  ANALYTICS: {
    GA4_ID: string;
    MIXPANEL_TOKEN: string | undefined;
    POSTHOG_KEY: string | undefined;
    POSTHOG_HOST: string;
  };
  SOCIAL: {
    youtube: {
      id: string;
      name: string;
      url: string;
      platform: string;
    }[];
    facebook: {
      id: string;
      name: string;
      url: string;
      platform: string;
    }[];
    instagram: {
      id: string;
      name: string;
      url: string;
      platform: string;
    }[];
    twitter: {
      id: string;
      name: string;
      url: string;
      platform: string;
    }[];
    tiktok: {
      id: string;
      name: string;
      url: string;
      platform: string;
    }[];
    whatsapp: {
      id: string;
      name: string;
      phone: string;
      platform: string;
    }[];
    linkedin: {
      id: string;
      name: string;
      url: string;
      platform: string;
    }[];
  };
  EMAIL: {
    SUPPORT: string;
    CONTACT: string;
    NO_REPLY: string;
    RESEND_API_KEY: string | undefined;
  };
  PAYMENT: {
    PAYSTACK_PUBLIC_KEY: string | undefined;
    PAYSTACK_SECRET_KEY: string | undefined;
    FLUTTERWAVE_PUBLIC_KEY: string | undefined;
    FLUTTERWAVE_SECRET_KEY: string | undefined;
    CURRENCY: string;
  };
  AUTH: {
    NEXTAUTH_SECRET: string | undefined;
    NEXTAUTH_URL: string;
    SUPABASE_URL: string | undefined;
    SUPABASE_KEY: string | undefined;
    JWT_SECRET: string;
    JWT_EXPIRES_IN: string;
  };
  AI: {
    OPENAI_API_KEY: string | undefined;
    OPENAI_ORG_ID: string | undefined;
    ANTHROPIC_API_KEY: string | undefined;
    HUGGINGFACE_TOKEN: string | undefined;
  };
  STORAGE: {
    CLOUDINARY_CLOUD_NAME: string | undefined;
    CLOUDINARY_API_KEY: string | undefined;
    CLOUDINARY_API_SECRET: string | undefined;
    AWS_ACCESS_KEY_ID: string | undefined;
    AWS_SECRET_ACCESS_KEY: string | undefined;
    AWS_REGION: string;
  };
  APIS: {
    TERMII_API_KEY: string | undefined;
    HUNTER_API_KEY: string | undefined;
    META_ACCESS_TOKEN: string | undefined;
  };
  FEATURES: {
    ENABLE_CROSS_APP_TRACKING: boolean;
    ENABLE_SOCIAL_SHARING: boolean;
    ENABLE_PAYMENTS: boolean;
    ENABLE_AI_FEATURES: boolean;
  };
};
declare function validateEnv(): boolean;
declare function getAppConfig(appName: string): {
  APP: {
    NAME: string;
    BASE_URL: string;
    API_URL: string;
    CDN_URL: string;
  };
  NODE_ENV: string;
  PORT: number;
  CORS: {
    ORIGIN: string[];
    CREDENTIALS: boolean;
  };
  DOMAINS: Record<AppDomainKey, string>;
  DATABASE_URL: string;
  POSTGRES_SERVICES: {
    USER_SERVICE_DATABASE_URL: string;
    PAYMENT_SERVICE_DATABASE_URL: string;
    ANALYTICS_SERVICE_DATABASE_URL: string;
    EDUCENTER_SERVICE_DATABASE_URL: string;
    FITHER_SERVICE_DATABASE_URL: string;
    PLANAI_SERVICE_DATABASE_URL: string;
    HUB_SERVICE_DATABASE_URL: string;
    RECEPTIONIST_SERVICE_DATABASE_URL: string;
    CREDIBILITY_SERVICE_DATABASE_URL: string;
    BUSINESS_PLANNING_SERVICE_DATABASE_URL: string;
    FINANCIAL_SERVICE_DATABASE_URL: string;
    INVESTOR_SERVICE_DATABASE_URL: string;
    STOREFRONTS_SERVICE_DATABASE_URL: string;
    DIGITAL_STOREFRONTS_DATABASE_URL: string;
    MARKETING_SERVICE_DATABASE_URL: string;
    ANALYTICS_DASHBOARD_SERVICE_DATABASE_URL: string;
    SAFEAI_SERVICE_DATABASE_URL: string;
    KOLOAI_SERVICE_DATABASE_URL: string;
    RECEIPT_SERVICE_DATABASE_URL: string;
    BOLDMIND_OS_SERVICE_DATABASE_URL: string;
  };
  MONGODB_URL: string;
  MONGODB_SERVICES: {
    AMEBOGIST_SERVICE_MONGODB_URL: string;
    SOCIAL_FACTORY_SERVICE_MONGODB_URL: string;
    EMAILSCRAPER_PRO_SERVICE_MONGODB_URL: string;
    SAFEAI_SERVICE_MONGODB_URL: string;
    AFROHUSTLE_SERVICE_MONGODB_URL: string;
    NAIJAGIG_MATCHER_SERVICE_MONGODB_URL: string;
    BORDERLESS_REMIT_SERVICE_MONGODB_URL: string;
    POWER_ALERT_SERVICE_MONGODB_URL: string;
    FARMGATE_DIRECT_SERVICE_MONGODB_URL: string;
    AFROCOPY_AI_SERVICE_MONGODB_URL: string;
    SKILL2CASH_SERVICE_MONGODB_URL: string;
    ANONTRUTH_MIC_SERVICE_MONGODB_URL: string;
  };
  getPostgresConnection(service: PostgresServiceName): string;
  getMongoConnection(service: MongoServiceName): string;
  ANALYTICS: {
    GA4_ID: string;
    MIXPANEL_TOKEN: string | undefined;
    POSTHOG_KEY: string | undefined;
    POSTHOG_HOST: string;
  };
  SOCIAL: {
    youtube: {
      id: string;
      name: string;
      url: string;
      platform: string;
    }[];
    facebook: {
      id: string;
      name: string;
      url: string;
      platform: string;
    }[];
    instagram: {
      id: string;
      name: string;
      url: string;
      platform: string;
    }[];
    twitter: {
      id: string;
      name: string;
      url: string;
      platform: string;
    }[];
    tiktok: {
      id: string;
      name: string;
      url: string;
      platform: string;
    }[];
    whatsapp: {
      id: string;
      name: string;
      phone: string;
      platform: string;
    }[];
    linkedin: {
      id: string;
      name: string;
      url: string;
      platform: string;
    }[];
  };
  EMAIL: {
    SUPPORT: string;
    CONTACT: string;
    NO_REPLY: string;
    RESEND_API_KEY: string | undefined;
  };
  PAYMENT: {
    PAYSTACK_PUBLIC_KEY: string | undefined;
    PAYSTACK_SECRET_KEY: string | undefined;
    FLUTTERWAVE_PUBLIC_KEY: string | undefined;
    FLUTTERWAVE_SECRET_KEY: string | undefined;
    CURRENCY: string;
  };
  AUTH: {
    NEXTAUTH_SECRET: string | undefined;
    NEXTAUTH_URL: string;
    SUPABASE_URL: string | undefined;
    SUPABASE_KEY: string | undefined;
    JWT_SECRET: string;
    JWT_EXPIRES_IN: string;
  };
  AI: {
    OPENAI_API_KEY: string | undefined;
    OPENAI_ORG_ID: string | undefined;
    ANTHROPIC_API_KEY: string | undefined;
    HUGGINGFACE_TOKEN: string | undefined;
  };
  STORAGE: {
    CLOUDINARY_CLOUD_NAME: string | undefined;
    CLOUDINARY_API_KEY: string | undefined;
    CLOUDINARY_API_SECRET: string | undefined;
    AWS_ACCESS_KEY_ID: string | undefined;
    AWS_SECRET_ACCESS_KEY: string | undefined;
    AWS_REGION: string;
  };
  APIS: {
    TERMII_API_KEY: string | undefined;
    HUNTER_API_KEY: string | undefined;
    META_ACCESS_TOKEN: string | undefined;
  };
  FEATURES: {
    ENABLE_CROSS_APP_TRACKING: boolean;
    ENABLE_SOCIAL_SHARING: boolean;
    ENABLE_PAYMENTS: boolean;
    ENABLE_AI_FEATURES: boolean;
  };
};
declare function getAppDomain(appName: string): string;
declare function getDatabaseUrl(serviceName: ServiceName): string;
//#endregion
export { AppDomainKey, ENV_CONFIG, MongoServiceName, PostgresServiceName, ServiceName, getAppConfig, getAppDomain, getDatabaseUrl, validateEnv };
//# sourceMappingURL=index.d.cts.map