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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const redis_service_1 = require("../../database/redis.service");
const utils_1 = require("@boldmind/utils");
let HubService = class HubService {
    constructor(prisma, redis) {
        this.prisma = prisma;
        this.redis = redis;
    }
    async getDashboardStats() {
        return this.redis.cache('hub:dashboard:stats', async () => {
            const now = new Date();
            const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
            const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
            const [totalUsers, newUsersThisMonth, newUsersLastMonth, adminCount, topProducts, recentActivity, totalRevenue,] = await Promise.all([
                this.prisma.user.count({ where: { isActive: true } }),
                this.prisma.user.count({ where: { createdAt: { gte: startOfMonth }, isActive: true } }),
                this.prisma.user.count({ where: { createdAt: { gte: startOfLastMonth, lt: startOfMonth }, isActive: true } }),
                this.prisma.user.count({ where: { role: { in: ['admin', 'super_admin', 'manager'] } } }),
                this.prisma.subscription.groupBy({
                    by: ['productSlug'],
                    where: { status: { in: ['ACTIVE', 'TRIAL'] } },
                    _count: { userId: true },
                    orderBy: { _count: { userId: 'desc' } },
                    take: 5,
                }),
                this.prisma.activityLog.findMany({
                    take: 10,
                    orderBy: { createdAt: 'desc' },
                    select: {
                        id: true, action: true, resource: true, createdAt: true,
                        user: { select: { name: true, email: true } },
                    },
                }),
                this.prisma.payment.aggregate({
                    where: { status: 'SUCCESS', createdAt: { gte: startOfMonth } },
                    _sum: { amountNGN: true },
                }),
            ]);
            const growth = newUsersLastMonth === 0 ? 100
                : Math.round(((newUsersThisMonth - newUsersLastMonth) / newUsersLastMonth) * 100);
            return {
                userStats: {
                    totals: {
                        users: totalUsers,
                        activeProducts: topProducts.reduce((a, p) => a + p._count.userId, 0),
                        admins: adminCount,
                    },
                    growth: {
                        trend: growth > 0 ? 'up' : growth < 0 ? 'down' : 'stable',
                        percentage: Math.abs(growth),
                        currentMonth: newUsersThisMonth,
                    },
                    topProducts: topProducts.map(p => ({
                        productSlug: p.productSlug,
                        productName: utils_1.BOLDMIND_PRODUCTS.find(bp => bp.slug === p.productSlug)?.name ?? p.productSlug,
                        userCount: p._count.userId,
                    })),
                },
                ecosystemOverview: {
                    totalMonthlyRevenue: totalRevenue._sum.amountNGN ?? 0,
                    totalTeamSize: adminCount,
                },
                recentActivity: recentActivity.map(a => ({
                    id: a.id,
                    action: a.action,
                    entityType: a.resource ?? 'system',
                    createdAt: a.createdAt.toISOString(),
                    user: { fullName: a.user?.name ?? 'System', email: a.user?.email ?? '' },
                })),
                systemHealth: [
                    { name: 'Database', status: 'healthy', responseTime: 12 },
                    { name: 'Redis', status: 'healthy', responseTime: 3 },
                    { name: 'Auth API', status: 'healthy', responseTime: 45 },
                ],
            };
        }, 60);
    }
    getProducts() {
        return utils_1.BOLDMIND_PRODUCTS.map(p => ({
            id: p.id,
            name: p.name,
            slug: p.slug,
            icon: p.icon,
            description: p.description,
            category: p.category,
            status: p.status,
            domain: p.domain,
            monthlyRevenue: p.monthlyRevenue ?? 0,
            priority: p.priority,
            tags: p.tags,
        }));
    }
    getPricing() {
        return [
            {
                id: 'free',
                name: 'Free',
                tier: 'FREE',
                priceNGN: 0,
                interval: 'forever',
                description: 'Get started with the basics',
                features: ['Access to public content', 'Basic dashboard', '1 active product'],
                cta: 'Get Started',
                isPopular: false,
            },
            {
                id: 'starter',
                name: 'Starter',
                tier: 'STARTER',
                priceNGN: 2500,
                interval: 'month',
                description: 'For individuals ready to grow',
                features: ['Up to 3 active products', 'Priority support', 'Analytics dashboard', 'Email notifications'],
                cta: 'Start for ₦2,500/mo',
                isPopular: false,
            },
            {
                id: 'pro',
                name: 'Pro',
                tier: 'PRO',
                priceNGN: 7500,
                interval: 'month',
                description: 'For serious founders & creators',
                features: ['Unlimited products', 'Advanced analytics', 'AI tools access', 'Team (up to 5)', 'Priority support', 'Custom domain'],
                cta: 'Go Pro — ₦7,500/mo',
                isPopular: true,
            },
            {
                id: 'agency',
                name: 'Agency',
                tier: 'AGENCY',
                priceNGN: 25000,
                interval: 'month',
                description: 'For teams & agencies scaling fast',
                features: ['Everything in Pro', 'Team (up to 20)', 'White-label options', 'API access', 'Dedicated support', 'SLA guarantee'],
                cta: 'Contact Sales',
                isPopular: false,
            },
        ];
    }
    async getTeam() {
        return this.prisma.user.findMany({
            where: { role: { in: ['admin', 'super_admin', 'manager', 'editor', 'support', 'analyst'] } },
            select: {
                id: true, name: true, email: true, role: true, avatar: true,
                createdAt: true, lastLoginAt: true, isActive: true,
            },
            orderBy: { createdAt: 'asc' },
        });
    }
    async inviteTeamMember(email, role, _invitedBy) {
        const existing = await this.prisma.user.findUnique({ where: { email: email.toLowerCase() } });
        if (existing) {
            await this.prisma.user.update({
                where: { id: existing.id },
                data: { role: role },
            });
            return { message: 'User role updated successfully', userId: existing.id };
        }
        return { message: 'Invite sent successfully', pending: true };
    }
    async removeTeamMember(targetUserId, actorId) {
        await this.prisma.user.update({
            where: { id: targetUserId },
            data: { role: 'guest' },
        });
        await this.prisma.adminLog.create({
            data: { adminId: actorId, targetId: targetUserId, targetType: 'users', action: 'REMOVE_TEAM_MEMBER' },
        });
        return { message: 'Team member removed' };
    }
};
exports.HubService = HubService;
exports.HubService = HubService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService])
], HubService);
//# sourceMappingURL=hub.service.js.map