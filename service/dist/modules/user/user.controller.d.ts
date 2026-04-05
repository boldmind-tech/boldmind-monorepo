import { UserService } from './user.service';
import { UpdateUserDto, UpdateProfileDto, UserQueryDto, OnboardingDto } from './user.dto';
import { JwtPayload } from '../auth/auth.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(query: UserQueryDto): Promise<{
        data: {
            name: string;
            email: string;
            role: import("@prisma/client").$Enums.UserRole;
            id: string;
            isActive: boolean;
            lastLoginAt: Date;
            createdAt: Date;
            _count: {
                subscriptions: number;
            };
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    dashboard(userId: string): Promise<{
        user: {
            name: string;
            email: string;
            role: import("@prisma/client").$Enums.UserRole;
            id: string;
            profile: {
                referralCode: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                displayName: string | null;
                bio: string | null;
                avatarUrl: string | null;
                coverImageUrl: string | null;
                website: string | null;
                location: string | null;
                state: string | null;
                timezone: string;
                language: string;
                prefersPidgin: boolean;
                dyslexiaMode: boolean;
                activeProducts: string[];
                onboardingDone: boolean;
                referredBy: string | null;
                examTarget: import("@prisma/client").$Enums.ExamType | null;
                targetYear: number | null;
                targetScore: number | null;
                userId: string;
            };
        };
        subscriptions: {
            productSlug: string;
            tier: import("@prisma/client").$Enums.SubscriptionTier;
            status: import("@prisma/client").$Enums.SubscriptionStatus;
            planCode: string;
            currentPeriodEnd: Date;
        }[];
        recentActivity: {
            createdAt: Date;
            action: string;
            resource: string;
        }[];
    }>;
    findOne(id: string): Promise<{
        name: string;
        email: string;
        ecosystemRole: import("@prisma/client").$Enums.EcosystemRole;
        role: import("@prisma/client").$Enums.UserRole;
        id: string;
        phone: string;
        isVerified: boolean;
        emailVerifiedAt: Date;
        phoneVerifiedAt: Date;
        lastLoginAt: Date;
        avatar: string;
        createdAt: Date;
        profile: {
            referralCode: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            displayName: string | null;
            bio: string | null;
            avatarUrl: string | null;
            coverImageUrl: string | null;
            website: string | null;
            location: string | null;
            state: string | null;
            timezone: string;
            language: string;
            prefersPidgin: boolean;
            dyslexiaMode: boolean;
            activeProducts: string[];
            onboardingDone: boolean;
            referredBy: string | null;
            examTarget: import("@prisma/client").$Enums.ExamType | null;
            targetYear: number | null;
            targetScore: number | null;
            userId: string;
        };
        _count: {
            subscriptions: number;
        };
    }>;
    update(id: string, actorId: string, dto: UpdateUserDto): Promise<{
        name: string;
        email: string;
        id: string;
        phone: string;
        avatar: string;
    }>;
    updateProfile(id: string, userId: string, dto: UpdateProfileDto): Promise<{
        referralCode: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        displayName: string | null;
        bio: string | null;
        avatarUrl: string | null;
        coverImageUrl: string | null;
        website: string | null;
        location: string | null;
        state: string | null;
        timezone: string;
        language: string;
        prefersPidgin: boolean;
        dyslexiaMode: boolean;
        activeProducts: string[];
        onboardingDone: boolean;
        referredBy: string | null;
        examTarget: import("@prisma/client").$Enums.ExamType | null;
        targetYear: number | null;
        targetScore: number | null;
        userId: string;
    }>;
    activity(id: string, page?: number, limit?: number): Promise<{
        data: {
            id: string;
            createdAt: Date;
            userId: string;
            action: string;
            resource: string | null;
            productSlug: string | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            ipAddress: string | null;
            userAgent: string | null;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
        };
    }>;
    ban(id: string, actorId: string, reason: string): Promise<void>;
    completeOnboarding(user: JwtPayload, dto: OnboardingDto): Promise<{
        onboardingDone: boolean;
        profile: {
            referralCode: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            displayName: string | null;
            bio: string | null;
            avatarUrl: string | null;
            coverImageUrl: string | null;
            website: string | null;
            location: string | null;
            state: string | null;
            timezone: string;
            language: string;
            prefersPidgin: boolean;
            dyslexiaMode: boolean;
            activeProducts: string[];
            onboardingDone: boolean;
            referredBy: string | null;
            examTarget: import("@prisma/client").$Enums.ExamType | null;
            targetYear: number | null;
            targetScore: number | null;
            userId: string;
        };
    }>;
}
