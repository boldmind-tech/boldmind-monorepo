// PACKAGES/api-client/src/interceptors/auth.ts

import { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

export const setupAuthInterceptor = (client: AxiosInstance) => {
    client.interceptors.request.use(
        async (config: InternalAxiosRequestConfig) => {
            // Note: withCredentials is set to true in the client constructor,
            // so cookies (like boldmind_sso) will be sent automatically.
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    client.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

            if (error.response?.status === 401 && !originalRequest._retry) {
                // If it's a 401 Unauthorized, we might want to redirect to login
                // but only if we are in a browser environment.
                if (typeof window !== 'undefined' && !window.location.pathname.startsWith('/login')) {
                    // Avoid redirecting if the request itself was to a login/refresh endpoint
                    const isAuthRequest = originalRequest.url?.includes('/auth/login') || 
                                        originalRequest.url?.includes('/auth/refresh');
                    
                    if (!isAuthRequest) {
                        window.location.href = '/login';
                    }
                }
            }

            return Promise.reject(error);
        }
    );
};