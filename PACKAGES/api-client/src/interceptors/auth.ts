
// PACKAGES/api-client/src/interceptors/auth.ts

import { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { getSupabaseClient } from '@boldmind/auth/server';

export const setupAuthInterceptor = (client: AxiosInstance) => {
    client.interceptors.request.use(
        async (config: InternalAxiosRequestConfig) => {
            try {
                const supabase = getSupabaseClient();
                const { data: { session } } = await supabase.auth.getSession();

                if (session?.access_token) {
                    config.headers.Authorization = `Bearer ${session.access_token}`;
                }
            } catch (error) {
                console.error('Failed to get session:', error);
            }

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
                originalRequest._retry = true;

                try {
                    const supabase = getSupabaseClient();
                    const { data: { session }, error: refreshError } = await supabase.auth.refreshSession();

                    if (refreshError || !session) {
                        throw new Error('Session refresh failed');
                    }

                    originalRequest.headers.Authorization = `Bearer ${session.access_token}`;
                    return client(originalRequest);
                } catch (refreshError) {
                    if (typeof window !== 'undefined') {
                        window.location.href = '/login';
                    }
                    return Promise.reject(error);
                }
            }

            return Promise.reject(error);
        }
    );
};