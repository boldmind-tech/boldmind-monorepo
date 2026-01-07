import client from './client';

// Type-safe wrapper
export const typedApi = {
  get: <T = any>(url: string, config?: { params?: any; headers?: any }) => 
    client.get<T>(url, config),
  
  post: <T = any>(url: string, data?: any, config?: { params?: any; headers?: any }) => 
    client.post<T>(url, data, config),
  
  put: <T = any>(url: string, data?: any, config?: { params?: any; headers?: any }) => 
    client.put<T>(url, data, config),
  
  patch: <T = any>(url: string, data?: any, config?: { params?: any; headers?: any }) => 
    client.patch<T>(url, data, config),
  
  delete: <T = any>(url: string, config?: { params?: any; headers?: any }) => 
    client.delete<T>(url, config)
};

export default typedApi;