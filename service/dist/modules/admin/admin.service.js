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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AdminService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../../database/prisma.service");
const redis_service_1 = require("../../database/redis.service");
const post_schema_1 = require("../content/schemas/post.schema");
let AdminService = AdminService_1 = class AdminService {
    constructor(prisma, redis, postModel) {
        this.prisma = prisma;
        this.redis = redis;
        this.postModel = postModel;
        this.logger = new common_1.Logger(AdminService_1.name);
    }
    async getDashboardStats() {
        return this.redis.cache('admin:dashboard:stats', async () => this.buildDashboardStats(), 120);
    }
    async buildDashboardStats() {
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - 7);
        const [totalUsers, activeUsers, newThisMonth, newThisWeek, usersByRole, totalRevenue, monthRevenue, lastMonthRevenue,] = await Promise.all([
            this.prisma.user.count(),
            this.prisma.user.count({ where: { isActive: true, } }),
            this.prisma.user.count({ where: { createdAt: { gte: startOfMonth } } }),
            this.prisma.user.count({ where: { createdAt: { gte: startOfWeek } } }),
            this.prisma.user.groupBy({ by: ['role'], _count: { id: true } }),
            this.prisma.payment.aggregate({
                where: { status: 'SUCCESS' },
                _sum: { amountNGN: true },
            }),
            this.prisma.payment.aggregate({
                where: { status: 'SUCCESS', paidAt: { gte: startOfMonth } },
                _sum: { amountNGN: true },
            }),
            this.prisma.payment.aggregate({
                where: { status: 'SUCCESS', paidAt: { gte: startOfLastMonth, lt: startOfMonth } },
                _sum: { amountNGN: true },
            }),
        ]);
        const [revenueByProduct, subscriptionStats, subscriptionsByProduct, totalArticles, publishedArticles, articleViews, totalTransactions, waitlistCount,] = await Promise.all([
            this.prisma.payment.groupBy({
                by: ['productSlug'],
                where: { status: 'SUCCESS' },
                _sum: { amountNGN: true },
                orderBy: { _sum: { amountNGN: 'desc' } },
                take: 10,
            }),
            this.prisma.subscription.groupBy({
                by: ['status'],
                _count: { id: true },
            }),
            this.prisma.subscription.groupBy({
                by: ['productSlug'],
                where: { status: { in: ['ACTIVE', 'TRIAL'] } },
                _count: { id: true },
                orderBy: { _count: { id: 'desc' } },
                take: 10,
            }),
            this.postModel.countDocuments(),
            this.postModel.countDocuments({ status: 'PUBLISHED' }),
            this.postModel.aggregate([{ $group: { _id: null, total: { $sum: '$views' } } }]),
            this.prisma.payment.count({ where: { status: 'SUCCESS' } }),
            this.prisma.waitlistEntry.count(),
        ]);
        const thisM = monthRevenue._sum.amountNGN || 0;
        const lastM = lastMonthRevenue._sum.amountNGN || 0;
        const growth = lastM > 0 ? Math.round(((thisM - lastM) / lastM) * 100) : 0;
        const subStatusMap = subscriptionStats.reduce((acc, s) => {
            acc[s.status] = s._count.id;
            return acc;
        }, {});
        const totalSubs = subscriptionStats.reduce((sum, s) => sum + s._count.id, 0);
        return {
            users: {
                total: totalUsers,
                active: activeUsers,
                newThisMonth,
                newThisWeek,
                byRole: usersByRole.reduce((acc, r) => {
                    acc[r.role] = r._count.id;
                    return acc;
                }, {}),
            },
            revenue: {
                totalMRR: thisM,
                totalAllTime: totalRevenue._sum.amountNGN || 0,
                thisMonth: thisM,
                lastMonth: lastM,
                growth,
                byProduct: revenueByProduct.map((r) => ({
                    productSlug: r.productSlug,
                    revenue: r._sum.amountNGN || 0,
                })),
            },
            subscriptions: {
                total: totalSubs,
                active: subStatusMap['ACTIVE'] || 0,
                trial: subStatusMap['TRIAL'] || 0,
                cancelled: subStatusMap['CANCELLED'] || 0,
                byProduct: subscriptionsByProduct.map((s) => ({
                    productSlug: s.productSlug,
                    count: s._count.id,
                })),
            },
            content: {
                totalArticles,
                publishedArticles,
                totalViews: articleViews[0]?.total || 0,
            },
            products: {
                totalTransactions,
                waitlistEntries: waitlistCount,
            },
            system: {
                uptime: process.uptime(),
                memoryUsage: process.memoryUsage(),
                nodeVersion: process.version,
                timestamp: new Date().toISOString(),
            },
        };
    }
    async getFullUserList(query) {
        const { page = 1, limit = 50, search, role, isActive, isBanned, productSlug } = query;
        const where = {};
        if (search)
            where.OR = [
                { email: { contains: search, mode: 'insensitive' } },
                { name: { contains: search, mode: 'insensitive' } },
            ];
        if (role)
            where.role = role;
        if (isActive !== undefined)
            where.isActive = isActive;
        if (isBanned !== undefined)
            where.isBanned = isBanned;
        if (productSlug) {
            where.subscriptions = { some: { productSlug, status: { in: ['ACTIVE', 'TRIAL'] } } };
        }
        const skip = (page - 1) * limit;
        const [users, total] = await Promise.all([
            this.prisma.user.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true, email: true, name: true, role: true, phone: true,
                    isActive: true, isBanned: true, banReason: true,
                    emailVerifiedAt: true, createdAt: true, lastLoginAt: true,
                    _count: { select: { subscriptions: true, payments: true } },
                    profile: { select: { displayName: true, state: true } },
                },
            }),
            this.prisma.user.count({ where }),
        ]);
        return { data: users, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
    }
    async updateUserRole(targetId, newRole, actorId) {
        const user = await this.prisma.user.update({
            where: { id: targetId },
            data: { role: newRole },
            select: { id: true, email: true, role: true },
        });
        await this.prisma.adminLog.create({
            data: {
                adminId: actorId,
                targetId,
                action: 'UPDATE_ROLE',
                targetType: 'users',
                metadata: { newRole },
            },
        });
        await this.redis.del(`user:${targetId}`);
        return user;
    }
    async getRevenueReport(period) {
        const periodMap = {
            week: 7,
            month: 30,
            quarter: 90,
            year: 365,
        };
        const days = periodMap[period];
        const from = new Date(Date.now() - days * 86400000);
        const payments = await this.prisma.payment.findMany({
            where: { status: 'SUCCESS', paidAt: { gte: from } },
            select: { amountNGN: true, productSlug: true, paidAt: true, channel: true },
            orderBy: { paidAt: 'asc' },
        });
        const byDay = {};
        for (const p of payments) {
            const day = p.paidAt.toISOString().split('T')[0];
            if (!byDay[day])
                byDay[day] = { revenue: 0, transactions: 0 };
            byDay[day].revenue += p.amountNGN;
            byDay[day].transactions++;
        }
        const total = payments.reduce((sum, p) => sum + p.amountNGN, 0);
        return {
            period,
            from: from.toISOString(),
            to: new Date().toISOString(),
            totalRevenue: total,
            totalTransactions: payments.length,
            avgTransactionValue: payments.length > 0 ? Math.round(total / payments.length) : 0,
            dailyBreakdown: Object.entries(byDay).map(([date, data]) => ({ date, ...data })),
        };
    }
    async getWaitlistStats() {
        return this.prisma.waitlistEntry.groupBy({
            by: ['productSlug'],
            _count: { id: true },
            orderBy: { _count: { id: 'desc' } },
        });
    }
    async inviteFromWaitlist(productSlug, count = 10) {
        const entries = await this.prisma.waitlistEntry.findMany({
            where: { productSlug, status: 'PENDING' },
            orderBy: { position: 'asc' },
            take: count,
        });
        const ids = entries.map((e) => e.id);
        await this.prisma.waitlistEntry.updateMany({
            where: { id: { in: ids } },
            data: { status: 'INVITED', invitedAt: new Date() },
        });
        return { invited: entries.length, emails: entries.map((e) => e.email) };
    }
    async getAdminLogs(page = 1, limit = 50) {
        const skip = (page - 1) * limit;
        const [rawLogs, total] = await Promise.all([
            this.prisma.adminLog.findMany({
                skip, take: limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    admin: { select: { name: true, email: true } },
                },
            }),
            this.prisma.adminLog.count(),
        ]);
        const targetIds = rawLogs
            .filter((l) => l.targetType === 'users' && l.targetId)
            .map((l) => l.targetId);
        const targetUsersMap = new Map();
        if (targetIds.length > 0) {
            const users = await this.prisma.user.findMany({
                where: { id: { in: targetIds } },
                select: { id: true, name: true, email: true },
            });
            users.forEach((u) => targetUsersMap.set(u.id, { name: u.name, email: u.email }));
        }
        const logs = rawLogs.map((log) => {
            const { admin, ...rest } = log;
            return {
                ...rest,
                actor: admin,
                target: log.targetType === 'users' && log.targetId ? targetUsersMap.get(log.targetId) || null : null,
            };
        });
        return { data: logs, meta: { total, page, limit } };
    }
    async refreshDashboardCache() {
        await this.redis.del('admin:dashboard:stats');
        this.logger.debug('Admin dashboard cache invalidated');
    }
};
exports.AdminService = AdminService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_5_MINUTES),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminService.prototype, "refreshDashboardCache", null);
exports.AdminService = AdminService = AdminService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, mongoose_1.InjectModel)(post_schema_1.Post.name)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService,
        mongoose_2.Model])
], AdminService);
//# sourceMappingURL=admin.service.js.map