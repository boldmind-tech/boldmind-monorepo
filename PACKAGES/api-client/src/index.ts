// Export main API client class
export { default as APIClient } from './client';
export { BoldMindAPI, boldMindAPI } from './api';

// Export endpoint classes
export { AuthEndpoints } from './endpoints/auth';
export { UsersEndpoints } from './endpoints/users';
export { PaymentsEndpoints } from './endpoints/payments';
export { EducenterEndpoints } from './endpoints/educenter';
export { ProductsEndpoints } from './endpoints/products';
export { PlanaiSuiteEndpoints } from './endpoints/planai-suite';
export { PowerAlertEndpoints } from './endpoints/power-alert';
export { FarmgateDirectEndpoints } from './endpoints/farmgate-direct';
export { AfrocopyAiEndpoints } from './endpoints/afrocopy-ai';
export { Skill2cashEndpoints } from './endpoints/skill2cash';
export { AnontruthMicEndpoints } from './endpoints/anontruth-mic';
export { AfrohustleOsEndpoints } from './endpoints/afrohustle-os';
export { NotificationsEndpoints } from './endpoints/notifications';
export { AiReceptionistEndpoints } from './endpoints/ai-receptionist';
export { AmebogistEndpoints } from './endpoints/amebogist';
export { BoldmindOsEndpoints } from './endpoints/boldmind-os';
export { HubEndpoints } from './endpoints/hub';
export { SocialFactoryEndpoints } from './endpoints/social-factory';
export { EmailscraperEndpoints } from './endpoints/emailscraper';
export { NaijaFitherEndpoints } from './endpoints/naija-fither';
export { SafeaiEndpoints } from './endpoints/safeai';
export { AiEndpoints } from './endpoints/ai';
export { MediaEndpoints } from './endpoints/media';
export { BorderlessRemitEndpoints } from './endpoints/borderless-remit';
export { ReceiptGeniusEndpoints } from './endpoints/receipt-genius';

// Export API utilities
export { analyticsApi } from './endpoints/analytics';
export { typedApi } from './utils/typed-api';

// Export interceptor setup functions
export {
  setupLoggingInterceptor,
  setupRetryInterceptor,
  setupCacheInterceptor,
} from './interceptors';

// ────────────────────────────────────────────────
// FIX FOR TS4053: Re-export types from @boldmind/utils that appear
// in public method return types / parameters of this package.
// This makes them visible/namable in the bundled .d.ts files.
export type {
  // ProductPricing,          // the main culprit from the original error
  BOLDMIND_PRICING,        // if you expose the constant or its shape
  // Add others only if new TS4053 errors mention them, e.g.:
  // BOLDMIND_PRODUCTS,
  // ProductTheme,
} from '@boldmind/utils';

// Your existing local type re-exports (good to keep)
export type { Product, CreateProductData } from './endpoints/products';

// Re-export Axios types for convenience
export type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
export * from './config';
export * from './product-client';
export * from './types/amebogist';