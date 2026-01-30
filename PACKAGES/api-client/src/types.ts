// PACKAGES/api-client/src/types.ts

export interface User {
    id: string;
    email: string;
    fullName?: string;
    phone?: string;
    avatarUrl?: string;
    timezone?: string;
    locale?: string;
    isVerified: boolean;
    metadata?: Record<string, any>;
    createdAt: string;
    updatedAt: string;
}

export interface UserProfile {
    id: string;
    userId: string;
    productSlug: string;
    profileData: Record<string, any>;
    preferences: Record<string, any>;
    lastActive: string;
    createdAt: string;
    updatedAt: string;
}

export interface Session {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    expires_at?: number;
    token_type: string;
    user: {
        id: string;
        email: string;
        aud: string;
        role?: string;
    };
}

export interface APIResponse<T> {
    data: T;
    message?: string;
    status: number;
}

export interface APIError {
    message: string;
    status: number;
    code?: string;
    details?: any;
}