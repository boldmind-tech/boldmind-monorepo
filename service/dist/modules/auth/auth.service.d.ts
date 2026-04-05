import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
import { RegisterDto, LoginDto, RefreshTokenDto, ForgotPasswordDto, ResetPasswordDto, VerifyOtpDto, ChangePasswordDto } from './dto/auth.dto';
import { UserRole, EcosystemRole, AuthProvider } from '@boldmind/utils';
export interface JwtPayload {
    sub: string;
    email: string;
    role: UserRole;
    ecosystemRole?: EcosystemRole;
    permissions: string[];
    iat?: number;
    exp?: number;
}
export interface TokenPair {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly config;
    private readonly redis;
    private readonly logger;
    private resend;
    constructor(prisma: PrismaService, jwtService: JwtService, config: ConfigService, redis: RedisService);
    private getResend;
    register(dto: RegisterDto, ipAddress?: string): Promise<TokenPair>;
    login(dto: LoginDto, ipAddress?: string): Promise<TokenPair>;
    handleOAuthLogin(params: {
        providerId: string;
        provider: AuthProvider;
        email: string;
        name: string;
        avatar?: string;
        ipAddress?: string;
    }): Promise<TokenPair>;
    refreshToken(dto: RefreshTokenDto): Promise<TokenPair>;
    verifyOtp(dto: VerifyOtpDto): Promise<{
        verified: boolean;
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<void>;
    resetPassword(dto: ResetPasswordDto): Promise<void>;
    changePassword(userId: string, dto: ChangePasswordDto): Promise<void>;
    getMe(userId: string): Promise<{
        name: string;
        email: string;
        ecosystemRole: import("@prisma/client").$Enums.EcosystemRole;
        role: import("@prisma/client").$Enums.UserRole;
        id: string;
        digitalMaturity: import("@prisma/client").$Enums.DigitalMaturity;
        permissions: string[];
        isVerified: boolean;
        lastLoginAt: Date;
        avatar: string;
        createdAt: Date;
        profile: {
            referralCode: string;
            displayName: string;
            bio: string;
            avatarUrl: string;
            state: string;
            prefersPidgin: boolean;
            dyslexiaMode: boolean;
            activeProducts: string[];
            onboardingDone: boolean;
            examTarget: import("@prisma/client").$Enums.ExamType;
        };
        subscriptions: {
            productSlug: string;
            tier: import("@prisma/client").$Enums.SubscriptionTier;
            currentPeriodEnd: Date;
        }[];
    }>;
    updateUserRole(targetUserId: string, newRole: UserRole, adminId: string): Promise<void>;
    logout(refreshToken: string): Promise<void>;
    logoutAll(userId: string): Promise<void>;
    validatePayload(payload: JwtPayload): Promise<{
        sub: string;
        email: string;
        ecosystemRole: import("@prisma/client").$Enums.EcosystemRole;
        role: import("@prisma/client").$Enums.UserRole;
        id: string;
        permissions: string[];
        isActive: boolean;
    }>;
    private issueTokenPair;
    private sendEmailOtp;
    private trackFailedAttempt;
}
