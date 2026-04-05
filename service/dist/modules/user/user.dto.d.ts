export declare class UpdateUserDto {
    name?: string;
    avatar?: string;
    phone?: string;
}
export declare class UpdateProfileDto {
    bio?: string;
    businessName?: string;
    businessType?: string;
    industry?: string;
    state?: string;
    city?: string;
    website?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    tiktok?: string;
    yearFounded?: number;
    teamSize?: number;
    annualRevenue?: string;
}
export declare class UserQueryDto {
    page?: number;
    limit?: number;
    search?: string;
    role?: string;
    status?: string;
}
export declare class OnboardingDto {
    role?: string;
    preferences?: string[];
    digitalMaturity?: string;
}
