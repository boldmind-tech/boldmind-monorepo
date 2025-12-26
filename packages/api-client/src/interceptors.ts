import { AxiosRequestConfig, AxiosResponse } from 'axios';
import apiClient from './client';

// Logging interceptor
export const setupLoggingInterceptor = () => {
  apiClient.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
      if (config.data) {
        console.log('[Request Data]', config.data);
      }
      return config;
    },
    (error) => {
      console.error('[Request Error]', error);
      return Promise.reject(error);
    }
  );

  apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log(`[API Response] ${response.status} ${response.config.url}`);
      return response;
    },
    (error) => {
      console.error('[Response Error]', error.response?.data || error.message);
      return Promise.reject(error);
    }
  );
};

// Retry interceptor for failed requests
export const setupRetryInterceptor = (maxRetries: number = 3) => {
  apiClient.interceptors.response.use(undefined, async (error) => {
    const config = error.config;
    
    // Check if we should retry
    if (!config || !config.retry || config.retryCount >= maxRetries) {
      return Promise.reject(error);
    }
    
    // Mark that we're retrying
    config.retryCount = config.retryCount || 0;
    config.retryCount += 1;
    
    // Wait before retrying (exponential backoff)
    const delay = Math.pow(2, config.retryCount) * 1000;
    await new Promise(resolve => setTimeout(resolve, delay));
    
    // Retry the request
    return apiClient(config);
  });
};

// Cache interceptor
export const setupCacheInterceptor = () => {
  const cache = new Map<string, { data: any; timestamp: number }>();
  const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  apiClient.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      if (config.method?.toLowerCase() === 'get' && config.cache) {
        const cacheKey = JSON.stringify({
          url: config.url,
          params: config.params,
          headers: config.headers
        });
        
        const cached = cache.get(cacheKey);
        if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
          console.log('[Cache] Serving from cache:', config.url);
          return Promise.resolve({ data: cached.data, status: 200, statusText: 'OK', headers: {}, config });
        }
        
        // Store cache key for later
        config.cacheKey = cacheKey;
      }
      return config;
    }
  );

  apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
      const config = response.config as any;
      if (config.cacheKey && response.status === 200) {
        cache.set(config.cacheKey, {
          data: response.data,
          timestamp: Date.now()
        });
      }
      return response;
    }
  );
};