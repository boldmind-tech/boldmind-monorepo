// Export main API client class
export { default as APIClient } from './client';
export { BoldMindAPI, boldMindAPI } from './api';

// Export endpoint classes
export { AuthEndpoints } from './endpoints/auth';
export { UsersEndpoints } from './endpoints/users';
export { PaymentsEndpoints } from './endpoints/payments';
export { EducenterEndpoints } from './endpoints/educenter';
export { ProductsEndpoints } from './endpoints/products';

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