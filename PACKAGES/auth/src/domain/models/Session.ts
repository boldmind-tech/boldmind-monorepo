// PACKAGES/auth/src/domain/models/Session.ts
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
    createdAt: Date;
    updatedAt: Date;
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
        email_confirmed_at?: string;
        phone?: string;
        confirmed_at?: string;
        last_sign_in_at?: string;
        app_metadata?: Record<string, any>;
        user_metadata?: Record<string, any>;
    };
}

export interface AuthResponse {
    session: Session | null;
    user: User | null;
    error: AuthError | null;
}

export interface AuthError {
    message: string;
    status: number | undefined;
    code: string | undefined;
}
