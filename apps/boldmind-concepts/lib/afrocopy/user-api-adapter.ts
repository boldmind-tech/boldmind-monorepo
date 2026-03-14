import { boldMindAPI } from '@boldmind/api-client';
import type { UserAPI } from '@boldmind/auth';

/**
 * Standardized User API Adapter
 */
export const userAPIAdapter: UserAPI = {
    async getMe() {
        try {
            const response = await boldMindAPI.users.getMe();
            return response as any;
        } catch (error) {
            console.error('[userAPIAdapter] Failed to fetch user:', error);
            return null;
        }
    },

    async createUser(userData: any) {
        try {
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
            await boldMindAPI.users.createUser(payload as any);
        } catch (error: any) {
            if (error?.response?.status === 409) return;
            throw error;
        }
    },
};

export default userAPIAdapter;