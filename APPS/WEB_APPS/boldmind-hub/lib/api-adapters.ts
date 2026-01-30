// // app/lib/user-api-adapter.ts
// /**
//  * User API Adapter
//  * Connects AuthProvider with the user-service backend
//  *
//  * This file should be created in each app at: app/lib/user-api-adapter.ts
//  */

// import type { UserAPI } from '@boldmind/auth';
// import { createCurrentProductAPI } from '@boldmind/api-client';

// // Auto-detect current product and create API clients
// const api = createCurrentProductAPI();

// /**
//  * User API Adapter
//  * Implements the UserAPI interface required by AuthProvider
//  */
// export const userAPIAdapter: UserAPI = {
//     /**
//      * Get current user from user-service
//      */
//     async getMe() {
//         try {
//             console.log('[userAPIAdapter] Fetching current user...');

//             const response = await api.user.get('/users/me');

//             console.log('[userAPIAdapter] User fetched successfully:', response);

//             return response as any;
//         } catch (error) {
//             console.error('[userAPIAdapter] Failed to fetch user:', error);
//             return null;
//         }
//     },

//     /**
//      * Create user in user-service after Supabase signup
//      */
//     async createUser(userData: any) {
//         try {
//             console.log('[userAPIAdapter] Creating user in database:', userData);

//             await api.user.post('/users', {
//                 id: userData.id,
//                 email: userData.email,
//                 fullName: userData.user_metadata?.full_name || userData.user_metadata?.fullName,
//                 avatarUrl: userData.user_metadata?.avatar_url,
//                 ...userData.user_metadata,
//             });

//             console.log('[userAPIAdapter] User created successfully in database');
//         } catch (error: any) {
//             console.error('[userAPIAdapter] Failed to create user:', error);

//             // Don't throw error if user already exists (409 conflict)
//             if (error?.response?.status === 409) {
//                 console.log('[userAPIAdapter] User already exists, continuing...');
//                 return;
//             }

//             throw error;
//         }
//     },
// };

// export default userAPIAdapter;