// PACKAGES/auth/src/domain/models/User.ts

export interface User {
    id: string;
    email: string;
    fullName?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    avatarUrl?: string;
    timezone?: string;
    locale?: string;
    isVerified: boolean;
    isAdmin?: boolean;
    isSuperAdmin?: boolean;
    role?: string;
    permissions?: string[];
    metadata?: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserProfile {
    id: string;
    userId: string;
    productSlug: string;
    profileData: Record<string, any>;
    preferences: Record<string, any>;
    lastActive: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface Organization {
    id: string;
    ownerId: string;
    name: string;
    slug: string;
    logoUrl?: string;
    industry?: string;
    size?: string;
    location?: string;
    metadata: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
}
