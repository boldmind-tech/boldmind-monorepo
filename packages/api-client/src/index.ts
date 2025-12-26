import apiClient from './client';
import * as endpoints from './endpoints/index';
import * as interceptors from './interceptors';
import * as types from './typed-client';

export { apiClient, endpoints, interceptors, types };
export * from './endpoints';
export * from './typed-client';

// Setup default interceptors
interceptors.setupLoggingInterceptor();
interceptors.setupCacheInterceptor();
interceptors.setupRetryInterceptor();