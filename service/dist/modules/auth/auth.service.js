"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../../database/prisma.service");
const redis_service_1 = require("../../database/redis.service");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const utils_1 = require("@boldmind/utils");
const resend_1 = require("resend");
const SALT_ROUNDS = 12;
const OTP_TTL_SECS = 600;
const REFRESH_TOKEN_EXPIRY_DAYS = 30;
const MAX_LOGIN_ATTEMPTS = 5;
const LOCKOUT_DURATION_SECS = 900;
let AuthService = AuthService_1 = class AuthService {
    constructor(prisma, jwtService, config, redis) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.config = config;
        this.redis = redis;
        this.logger = new common_1.Logger(AuthService_1.name);
        this.resend = null;
    }
    getResend() {
        if (this.resend)
            return this.resend;
        const key = this.config.get('RESEND_API_KEY');
        if (!key)
            return null;
        this.resend = new resend_1.Resend(key);
        return this.resend;
    }
    async register(dto, ipAddress) {
        const existing = await this.prisma.user.findUnique({ where: { email: dto.email.toLowerCase() } });
        if (existing) {
            throw new common_1.ConflictException('An account with this email already exists');
        }
        const passwordHash = await bcrypt.hash(dto.password, SALT_ROUNDS);
        const role = dto.ecosystemRole ?? 'guest';
        const permissions = (0, utils_1.getRolePermissions)(role);
        const user = await this.prisma.user.create({
            data: {
                email: dto.email.toLowerCase(),
                name: dto.name,
                passwordHash,
                role,
                ecosystemRole: dto.ecosystemRole,
                provider: 'email',
                permissions,
                profile: {
                    create: {
                        displayName: dto.name,
                        referralCode: crypto.randomBytes(6).toString('hex'),
                        referredBy: dto.referralCode,
                    },
                },
                studyStreak: dto.ecosystemRole === 'student' ? { create: {} } : undefined,
            },
        });
        await this.sendEmailOtp(user.id, user.email, 'email_verify');
        const resend = this.getResend();
        if (resend) {
            resend.emails.send({
                from: 'BoldMind <noreply@boldmind.ng>',
                to: user.email,
                subject: 'Welcome to BoldMind! 🚀',
                text: `Welcome ${dto.name}!\n\nYour BoldMind account is ready. Please verify your email using the OTP we just sent you to get started.\n\nBoldMind Team`,
            }).catch(err => this.logger.error(`Welcome email failed: ${err.message}`));
        }
        await this.prisma.activityLog.create({
            data: { userId: user.id, action: 'register', ipAddress, metadata: { role } },
        });
        return this.issueTokenPair(user.id, user.email, user.role, user.ecosystemRole ?? undefined, permissions);
    }
    async login(dto, ipAddress) {
        const lockKey = `auth:lock:${dto.email.toLowerCase()}`;
        const attemptKey = `auth:attempts:${dto.email.toLowerCase()}`;
        const isLocked = await this.redis.get(lockKey);
        if (isLocked) {
            throw new common_1.ForbiddenException('Account temporarily locked due to too many failed attempts. Try again in 15 minutes.');
        }
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email.toLowerCase() },
            select: {
                id: true, email: true, passwordHash: true, role: true,
                ecosystemRole: true, permissions: true, isActive: true, isVerified: true,
            },
        });
        if (!user || !user.passwordHash) {
            await this.trackFailedAttempt(attemptKey, lockKey);
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        if (!user.isActive) {
            throw new common_1.ForbiddenException('This account has been deactivated');
        }
        const isPasswordValid = await bcrypt.compare(dto.password, user.passwordHash);
        if (!isPasswordValid) {
            await this.trackFailedAttempt(attemptKey, lockKey);
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        await this.redis.del(attemptKey);
        await this.prisma.user.update({
            where: { id: user.id },
            data: { lastLoginAt: new Date(), lastLoginIp: ipAddress },
        });
        await this.prisma.activityLog.create({
            data: { userId: user.id, action: 'login', ipAddress },
        });
        return this.issueTokenPair(user.id, user.email, user.role, user.ecosystemRole, user.permissions);
    }
    async handleOAuthLogin(params) {
        let user = await this.prisma.user.findFirst({
            where: { OR: [{ provider: params.provider, providerId: params.providerId }, { email: params.email.toLowerCase() }] },
        });
        if (!user) {
            user = await this.prisma.user.create({
                data: {
                    email: params.email.toLowerCase(),
                    name: params.name,
                    avatar: params.avatar,
                    provider: params.provider,
                    providerId: params.providerId,
                    role: 'guest',
                    isVerified: true,
                    emailVerifiedAt: new Date(),
                    permissions: [],
                    profile: {
                        create: {
                            displayName: params.name,
                            avatarUrl: params.avatar,
                            referralCode: crypto.randomBytes(6).toString('hex'),
                        },
                    },
                },
            });
        }
        else {
            await this.prisma.user.update({
                where: { id: user.id },
                data: {
                    providerId: params.providerId,
                    avatar: params.avatar ?? user.avatar,
                    lastLoginAt: new Date(),
                    lastLoginIp: params.ipAddress,
                    isVerified: true,
                },
            });
        }
        await this.prisma.activityLog.create({
            data: { userId: user.id, action: `oauth_login:${params.provider}`, ipAddress: params.ipAddress },
        });
        return this.issueTokenPair(user.id, user.email, user.role, user.ecosystemRole, user.permissions);
    }
    async refreshToken(dto) {
        const stored = await this.prisma.refreshToken.findUnique({ where: { token: dto.refreshToken } });
        if (!stored || stored.isRevoked || stored.expiresAt < new Date()) {
            if (stored) {
                await this.prisma.refreshToken.updateMany({
                    where: { family: stored.family },
                    data: { isRevoked: true },
                });
            }
            throw new common_1.UnauthorizedException('Invalid or expired refresh token');
        }
        await this.prisma.refreshToken.update({
            where: { id: stored.id },
            data: { isRevoked: true },
        });
        const user = await this.prisma.user.findUnique({
            where: { id: stored.userId },
            select: { id: true, email: true, role: true, ecosystemRole: true, permissions: true, isActive: true },
        });
        if (!user || !user.isActive) {
            throw new common_1.UnauthorizedException('User not found or deactivated');
        }
        return this.issueTokenPair(user.id, user.email, user.role, user.ecosystemRole, user.permissions, stored.family);
    }
    async verifyOtp(dto) {
        const otp = await this.prisma.oTPVerification.findFirst({
            where: {
                email: dto.email.toLowerCase(),
                purpose: dto.purpose,
                isUsed: false,
                expiresAt: { gt: new Date() },
            },
            orderBy: { createdAt: 'desc' },
        });
        if (!otp)
            throw new common_1.BadRequestException('OTP is invalid or has expired');
        if (otp.attempts >= 3)
            throw new common_1.ForbiddenException('Too many OTP attempts');
        const isValid = await bcrypt.compare(dto.code, otp.code);
        if (!isValid) {
            await this.prisma.oTPVerification.update({
                where: { id: otp.id },
                data: { attempts: { increment: 1 } },
            });
            throw new common_1.BadRequestException('Incorrect OTP code');
        }
        await this.prisma.oTPVerification.update({ where: { id: otp.id }, data: { isUsed: true } });
        if (dto.purpose === 'email_verify' && otp.userId) {
            await this.prisma.user.update({
                where: { id: otp.userId },
                data: { isVerified: true, emailVerifiedAt: new Date() },
            });
        }
        return { verified: true };
    }
    async forgotPassword(dto) {
        const user = await this.prisma.user.findUnique({ where: { email: dto.email.toLowerCase() } });
        if (!user)
            return;
        await this.sendEmailOtp(user.id, user.email, 'password_reset');
    }
    async resetPassword(dto) {
        await this.verifyOtp({ email: dto.email, code: dto.code, purpose: 'password_reset' });
        const passwordHash = await bcrypt.hash(dto.newPassword, SALT_ROUNDS);
        await this.prisma.user.update({
            where: { email: dto.email.toLowerCase() },
            data: { passwordHash },
        });
        const user = await this.prisma.user.findUnique({ where: { email: dto.email.toLowerCase() } });
        if (user) {
            await this.prisma.refreshToken.updateMany({
                where: { userId: user.id },
                data: { isRevoked: true },
            });
        }
    }
    async changePassword(userId, dto) {
        const user = await this.prisma.user.findUnique({ where: { id: userId }, select: { passwordHash: true } });
        if (!user?.passwordHash)
            throw new common_1.BadRequestException('No password set (OAuth account)');
        const isValid = await bcrypt.compare(dto.currentPassword, user.passwordHash);
        if (!isValid)
            throw new common_1.UnauthorizedException('Current password is incorrect');
        const passwordHash = await bcrypt.hash(dto.newPassword, SALT_ROUNDS);
        await this.prisma.user.update({ where: { id: userId }, data: { passwordHash } });
    }
    async getMe(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true, email: true, name: true, role: true, ecosystemRole: true,
                digitalMaturity: true, permissions: true, isVerified: true, avatar: true,
                createdAt: true, lastLoginAt: true,
                profile: {
                    select: {
                        displayName: true, bio: true, avatarUrl: true, state: true,
                        prefersPidgin: true, dyslexiaMode: true, activeProducts: true,
                        onboardingDone: true, referralCode: true, examTarget: true,
                    },
                },
                subscriptions: {
                    where: { status: { in: ['ACTIVE', 'TRIAL'] } },
                    select: { productSlug: true, tier: true, currentPeriodEnd: true },
                },
            },
        });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return user;
    }
    async updateUserRole(targetUserId, newRole, adminId) {
        const permissions = (0, utils_1.getRolePermissions)(newRole);
        await this.prisma.user.update({
            where: { id: targetUserId },
            data: { role: newRole, permissions },
        });
        await this.prisma.adminLog.create({
            data: {
                adminId,
                action: 'update_user_role',
                targetType: 'user',
                targetId: targetUserId,
                metadata: { newRole },
            },
        });
    }
    async logout(refreshToken) {
        await this.prisma.refreshToken.updateMany({
            where: { token: refreshToken },
            data: { isRevoked: true },
        });
    }
    async logoutAll(userId) {
        await this.prisma.refreshToken.updateMany({
            where: { userId },
            data: { isRevoked: true },
        });
    }
    async validatePayload(payload) {
        const user = await this.prisma.user.findUnique({
            where: { id: payload.sub },
            select: { id: true, email: true, role: true, ecosystemRole: true, permissions: true, isActive: true },
        });
        if (!user || !user.isActive)
            throw new common_1.UnauthorizedException('Token is no longer valid');
        return { ...user, sub: user.id };
    }
    async issueTokenPair(userId, email, role, ecosystemRole, permissions, existingFamily) {
        const payload = { sub: userId, email, role, ecosystemRole, permissions };
        const accessToken = this.jwtService.sign(payload);
        const rawRefreshToken = crypto.randomBytes(64).toString('hex');
        const family = existingFamily ?? crypto.randomBytes(16).toString('hex');
        const expiresAt = new Date(Date.now() + REFRESH_TOKEN_EXPIRY_DAYS * 24 * 60 * 60 * 1000);
        await this.prisma.refreshToken.create({
            data: { userId, token: rawRefreshToken, family, expiresAt },
        });
        return {
            accessToken,
            refreshToken: rawRefreshToken,
            expiresIn: 900,
        };
    }
    async sendEmailOtp(userId, email, purpose) {
        await this.prisma.oTPVerification.updateMany({
            where: { email, purpose, isUsed: false },
            data: { isUsed: true },
        });
        const rawCode = Math.floor(100000 + Math.random() * 900000).toString();
        const hashedCode = await bcrypt.hash(rawCode, 10);
        const expiresAt = new Date(Date.now() + OTP_TTL_SECS * 1000);
        await this.prisma.oTPVerification.create({
            data: { userId, email, code: hashedCode, purpose, expiresAt },
        });
        this.logger.log(`OTP for ${email} [${purpose}]: ${rawCode}`);
        const resend = this.getResend();
        if (resend) {
            const subject = purpose === 'email_verify'
                ? 'Verify your BoldMind email'
                : 'Reset your BoldMind password';
            const text = purpose === 'email_verify'
                ? `Your BoldMind email verification code is:\n\n${rawCode}\n\nThis code expires in 10 minutes.`
                : `Your BoldMind password reset code is:\n\n${rawCode}\n\nThis code expires in 10 minutes. If you did not request this, ignore this email.`;
            resend.emails.send({
                from: 'BoldMind <noreply@boldmind.ng>',
                to: email,
                subject,
                text,
            }).catch(err => this.logger.error(`Email send failed [${purpose}]: ${err.message}`));
        }
    }
    async trackFailedAttempt(attemptKey, lockKey) {
        const attempts = await this.redis.incr(attemptKey);
        await this.redis.expire(attemptKey, LOCKOUT_DURATION_SECS);
        if (attempts >= MAX_LOGIN_ATTEMPTS) {
            await this.redis.setex(lockKey, LOCKOUT_DURATION_SECS, '1');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService,
        redis_service_1.RedisService])
], AuthService);
//# sourceMappingURL=auth.service.js.map