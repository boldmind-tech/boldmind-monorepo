import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosRequestConfig } from 'axios';

// Create a more flexible axios instance
const client: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Helper function to ensure headers are always defined
const ensureConfig = (config?: AxiosRequestConfig): InternalAxiosRequestConfig => {
  if (!config) {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    } as InternalAxiosRequestConfig;
  }
  
  return {
    ...config,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...config.headers,
    }
  } as InternalAxiosRequestConfig;
};

// Override axios methods with proper typing
export const api = {
  get: <T = any>(url: string, config?: AxiosRequestConfig) => 
    client.get<T>(url, ensureConfig(config)),
  
  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => 
    client.post<T>(url, data, ensureConfig(config)),
  
  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => 
    client.put<T>(url, data, ensureConfig(config)),
  
  patch: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => 
    client.patch<T>(url, data, ensureConfig(config)),
  
  delete: <T = any>(url: string, config?: AxiosRequestConfig) => 
    client.delete<T>(url, ensureConfig(config)),
};

export default client;