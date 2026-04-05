import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { SsoService } from './sso.service';
import { JwtPayload } from './auth.service';
import { RegisterDto, LoginDto, RefreshTokenDto, ForgotPasswordDto, ResetPasswordDto, VerifyOtpDto, ChangePasswordDto, UpdateRoleDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    private readonly ssoService;
    private readonly configService;
    private readonly hubUrl;
    constructor(authService: AuthService, ssoService: SsoService, configService: ConfigService);
    register(dto: RegisterDto, ip: string, res: Response): Promise<import("./auth.service").TokenPair>;
    login(dto: LoginDto, ip: string, res: Response): Promise<import("./auth.service").TokenPair>;
    refresh(dto: RefreshTokenDto): Promise<import("./auth.service").TokenPair>;
    logout(dto: RefreshTokenDto, res: Response): Promise<void>;
    logoutAll(user: JwtPayload, res: Response): Promise<void>;
    getMe(user: JwtPayload): Promise<{
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
    verifyEmail(dto: VerifyOtpDto): Promise<{
        verified: boolean;
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<void>;
    resetPassword(dto: ResetPasswordDto): Promise<void>;
    changePassword(user: JwtPayload, dto: ChangePasswordDto): Promise<void>;
    googleAuth(): void;
    googleCallback(req: Request, res: Response): Promise<void>;
    updateRole(userId: string, dto: UpdateRoleDto, admin: JwtPayload): Promise<void>;
}
