// PACKAGES/api-client/src/client.ts - Updated with service URLs

import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

export default class APIClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      timeout: 30000, // 30 seconds
    });

    this.setupErrorInterceptor();
    this.setupRetryInterceptor();
  }

  private setupErrorInterceptor() {
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          if (typeof window !== 'undefined' && !window.location.pathname.startsWith('/login')) {
             window.location.href = '/login';
          }
        }
        return Promise.reject(error);
      }
    );
  }

  private setupRetryInterceptor() {
    this.client.interceptors.response.use(undefined, async (error) => {
      const config = error.config as InternalAxiosRequestConfig & {
        retryCount?: number;
        maxRetries?: number;
      };

      if (!config || config.retryCount === undefined) {
        config.retryCount = 0;
      }

      const maxRetries = config.maxRetries || 3;

      if (
        error.code === 'ECONNABORTED' ||
        error.code === 'ETIMEDOUT' ||
        (error.response?.status >= 500 && error.response?.status < 600)
      ) {
        if (config.retryCount < maxRetries) {
          config.retryCount += 1;
          const delay = Math.pow(2, config.retryCount) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
          return this.client(config);
        }
      }

      return Promise.reject(error);
    });
  }

  async get<T = any>(url: string, config?: AxiosRequestConfig) {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  async patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    const response = await this.client.patch<T>(url, data, config);
    return response.data;
  }

  async delete<T = any>(url: string, config?: AxiosRequestConfig) {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }
}