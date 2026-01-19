import APIClient from '../client';

const defaultClient = new APIClient(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api');

// Type-safe wrapper
export const typedApi = {
  get: <T = any>(url: string, config?: { params?: any; headers?: any }) => 
    defaultClient.get<T>(url, config),
  
  post: <T = any>(url: string, data?: any, config?: { params?: any; headers?: any }) => 
    defaultClient.post<T>(url, data, config),
  
  put: <T = any>(url: string, data?: any, config?: { params?: any; headers?: any }) => 
    defaultClient.put<T>(url, data, config),
  
  patch: <T = any>(url: string, data?: any, config?: { params?: any; headers?: any }) => 
    defaultClient.patch<T>(url, data, config),
  
  delete: <T = any>(url: string, config?: { params?: any; headers?: any }) => 
    defaultClient.delete<T>(url, config)
};

export default typedApi;