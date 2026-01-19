// Export main API client class
export { default as APIClient } from './client';
export { BoldMindAPI, boldMindAPI } from './api';

// Export endpoint classes
export { AuthEndpoints } from './endpoints/auth';
export { UsersEndpoints } from './endpoints/users';
export { PaymentsEndpoints } from './endpoints/payments';
export { EducenterEndpoints } from './endpoints/educenter';

// Export API utilities
export { analyticsApi } from './endpoints/analytics';
export { typedApi } from './utils/typed-api';

// Export interceptor setup functions
export {
  setupLoggingInterceptor,
  setupRetryInterceptor,
  setupCacheInterceptor,
} from './interceptors';


export type { Product, CreateProductData } from './endpoints/products';

// Re-export Axios types for convenience
export type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';