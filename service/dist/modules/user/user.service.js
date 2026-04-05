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
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const redis_service_1 = require("../../database/redis.service");
let UserService = UserService_1 = class UserService {
    constructor(prisma, redis) {
        this.prisma = prisma;
        this.redis = redis;
        this.logger = new common_1.Logger(UserService_1.name);
    }
    async findById(id) {
        return this.redis.cache(`user:${id}`, () => this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true, email: true, name: true, phone: true, avatar: true,
                role: true, ecosystemRole: true, isVerified: true, emailVerifiedAt: true, phoneVerifiedAt: true,
                createdAt: true, lastLoginAt: true,
                profile: true,
                _count: { select: { subscriptions: true } },
            },
        }), 120);
    }
    async findAll(query) {
        const { page = 1, limit = 20, search, role } = query;
        const skip = (page - 1) * limit;
        const where = {};
        if (search) {
            where.OR = [
                { email: { contains: search, mode: 'insensitive' } },
                { name: { contains: search, mode: 'insensitive' } },
            ];
        }
        if (role)
            where.role = role.toUpperCase();
        const [users, total] = await Promise.all([
            this.prisma.user.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true, email: true, name: true, role: true,
                    isActive: true, createdAt: true, lastLoginAt: true,
                    _count: { select: { subscriptions: true } },
                },
            }),
            this.prisma.user.count({ where }),
        ]);
        return {
            data: users,
            meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
        };
    }
    async updateUser(id, actorId, dto) {
        if (id !== actorId)
            throw new common_1.ForbiddenException('Cannot update another user');
        const user = await this.prisma.user.update({
            where: { id },
            data: dto,
            select: { id: true, email: true, name: true, avatar: true, phone: true },
        });
        await this.redis.del(`user:${id}`);
        return user;
    }
    async updateProfile(userId, dto) {
        const profile = await this.prisma.userProfile.upsert({
            where: { userId },
            update: { ...dto },
            create: { userId, ...dto },
        });
        await this.redis.del(`user:${userId}`);
        return profile;
    }
    async getUserDashboard(userId) {
        return this.redis.cache(`user:dashboard:${userId}`, async () => {
            const [user, subscriptions, recentActivity] = await Promise.all([
                this.prisma.user.findUnique({
                    where: { id: userId },
                    select: { id: true, name: true, email: true, role: true, profile: true },
                }),
                this.prisma.subscription.findMany({
                    where: { userId, status: { in: ['TRIAL', 'ACTIVE'] } },
                    select: { productSlug: true, status: true, currentPeriodEnd: true, tier: true, planCode: true },
                }),
                this.prisma.activityLog.findMany({
                    where: { userId },
                    take: 10,
                    orderBy: { createdAt: 'desc' },
                    select: { action: true, resource: true, createdAt: true },
                }),
            ]);
            return { user, subscriptions, recentActivity };
        }, 60);
    }
    async banUser(targetId, reason, actorId) {
        await this.prisma.user.update({
            where: { id: targetId },
            data: { isActive: false },
        });
        await this.prisma.adminLog.create({
            data: { adminId: actorId, targetId, targetType: 'users', action: 'BAN_USER', reason },
        });
        await this.redis.del(`user:${targetId}`);
        this.logger.warn(`User ${targetId} banned by ${actorId}: ${reason}`);
    }
    async unbanUser(targetId, actorId) {
        await this.prisma.user.update({
            where: { id: targetId },
            data: { isActive: true },
        });
        await this.prisma.adminLog.create({
            data: { adminId: actorId, targetId, targetType: 'users', action: 'UNBAN_USER' },
        });
        await this.redis.del(`user:${targetId}`);
    }
    async deleteUser(targetId, actorId) {
        await this.prisma.user.update({
            where: { id: targetId },
            data: { isActive: false, email: `deleted_${targetId}@boldmind.ng` },
        });
        await this.redis.del(`user:${targetId}`);
        this.logger.warn(`User ${targetId} soft-deleted by ${actorId}`);
    }
    async getActivityLog(userId, page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const [logs, total] = await Promise.all([
            this.prisma.activityLog.findMany({
                where: { userId },
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.activityLog.count({ where: { userId } }),
        ]);
        return { data: logs, meta: { total, page, limit } };
    }
    async getUserProducts(userId) {
        return this.prisma.subscription.findMany({
            where: { userId, status: { in: ['ACTIVE', 'TRIAL'] } },
            select: { productSlug: true, tier: true, status: true, currentPeriodEnd: true, planCode: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async completeOnboarding(userId, dto) {
        const profile = await this.prisma.userProfile.upsert({
            where: { userId },
            update: {
                onboardingDone: true,
                ...(dto.preferences ? { activeProducts: dto.preferences } : {}),
            },
            create: {
                userId,
                onboardingDone: true,
                activeProducts: dto.preferences ?? [],
                referralCode: require('crypto').randomBytes(6).toString('hex'),
            },
        });
        if (dto.role || dto.digitalMaturity) {
            await this.prisma.user.update({
                where: { id: userId },
                data: {
                    ...(dto.role ? { ecosystemRole: dto.role } : {}),
                    ...(dto.digitalMaturity ? { digitalMaturity: dto.digitalMaturity } : {}),
                },
            });
            await this.redis.del(`user:${userId}`);
        }
        return { onboardingDone: true, profile };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService])
], UserService);
//# sourceMappingURL=user.service.js.map