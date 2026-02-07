// app/lib/user-api-adapter.ts
/**
 * User API Adapter
 * Connects AuthProvider with the user-service backend
 * 
 * This file should be created in each app at: app/lib/user-api-adapter.ts
 */

import type { UserAPI } from '@boldmind/auth';
import { createCurrentProductAPI } from '@boldmind/api-client';

// Auto-detect current product and create API clients
const api = createCurrentProductAPI();

/**
 * User API Adapter
 * Implements the UserAPI interface required by AuthProvider
 */
export const userAPIAdapter: UserAPI = {
    /**
     * Get current user from user-service
     */
    async getMe() {
        try {
            console.log('[userAPIAdapter] Fetching current user via Gateway...');

            const response = await api.gateway.get('/users/me');

            console.log('[userAPIAdapter] User fetched successfully:', response);

            return response as any;
        } catch (error) {
            console.error('[userAPIAdapter] Failed to fetch user:', error);
            return null;
        }
    },

    /**
     * Create user in user-service after Supabase signup
     */
    async createUser(userData: any) {
        try {
            console.log('[userAPIAdapter] Creating user in database:', userData.id);

            // Whitelist fields to avoid ValidationPipe errors in backend
            const payload = {
                id: userData.id,
                email: userData.email,
                fullName: userData.user_metadata?.full_name || userData.user_metadata?.fullName || userData.email?.split('@')[0],
                avatarUrl: userData.user_metadata?.avatar_url || userData.user_metadata?.picture,
                isVerified: userData.email_verified || false,
                metadata: {
                    provider: userData.app_metadata?.provider,
                    ...userData.user_metadata
                }
            };

            console.log('[userAPIAdapter] Sending creation payload:', payload);

            // Call through the gateway to ensure SupabaseAuthGuard sync logic is triggered
            // Use the proxy route for users
            await api.gateway.post('/users', payload);

            console.log('[userAPIAdapter] User created successfully in database');
        } catch (error: any) {
            console.error('[userAPIAdapter] Failed to create user:', error.response?.data || error.message);

            // Don't throw error if user already exists (409 conflict)
            if (error?.response?.status === 409) {
                console.log('[userAPIAdapter] User already exists, continuing...');
                return;
            }

            throw error;
        }
    },
};

export default userAPIAdapter;