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
var AnalyticsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const redis_service_1 = require("../../database/redis.service");
let AnalyticsService = AnalyticsService_1 = class AnalyticsService {
    constructor(prisma, redis) {
        this.prisma = prisma;
        this.redis = redis;
        this.logger = new common_1.Logger(AnalyticsService_1.name);
    }
    async trackEvent(data) {
        try {
            await this.prisma.analyticsEvent.create({ data: data });
        }
        catch (err) {
            this.logger.warn('Failed to track event', err);
        }
        return { tracked: true };
    }
    async trackPageView(data) {
        return this.trackEvent({
            ...data,
            event: 'page_view',
            properties: { page: data.page, referrer: data.referrer },
        });
    }
    async getDashboard(period = 'week') {
        const cacheKey = `analytics:dashboard:${period}`;
        const cached = await this.redis.get(cacheKey);
        if (cached)
            return JSON.parse(cached);
        const since = this.getSinceDate(period);
        const [totalUsers, newUsers, totalEvents, topPages, topEvents] = await Promise.all([
            this.prisma.user.count(),
            this.prisma.user.count({ where: { createdAt: { gte: since } } }),
            this.prisma.analyticsEvent.count({ where: { createdAt: { gte: since } } }),
            this.prisma.analyticsEvent.groupBy({
                by: ['page'],
                where: { createdAt: { gte: since }, page: { not: null } },
                _count: true,
                orderBy: { _count: { page: 'desc' } },
                take: 10,
            }),
            this.prisma.analyticsEvent.groupBy({
                by: ['event'],
                where: { createdAt: { gte: since } },
                _count: true,
                orderBy: { _count: { event: 'desc' } },
                take: 10,
            }),
        ]);
        const result = { totalUsers, newUsers, totalEvents, topPages, topEvents, period };
        await this.redis.set(cacheKey, JSON.stringify(result), 300);
        return result;
    }
    async getUserAnalytics(userId, period = 'week') {
        const since = this.getSinceDate(period);
        const events = await this.prisma.analyticsEvent.findMany({
            where: { userId, createdAt: { gte: since } },
            orderBy: { createdAt: 'desc' },
            take: 100,
        });
        return {
            totalEvents: events.length,
            events,
            period,
        };
    }
    async getProductUsage(period = 'week') {
        const since = this.getSinceDate(period);
        return this.prisma.analyticsEvent.groupBy({
            by: ['source'],
            where: { createdAt: { gte: since }, source: { not: null } },
            _count: true,
            orderBy: { _count: { source: 'desc' } },
        });
    }
    getSinceDate(period) {
        const ms = {
            day: 24 * 60 * 60 * 1000,
            week: 7 * 24 * 60 * 60 * 1000,
            month: 30 * 24 * 60 * 60 * 1000,
        };
        return new Date(Date.now() - ms[period]);
    }
};
exports.AnalyticsService = AnalyticsService;
exports.AnalyticsService = AnalyticsService = AnalyticsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService])
], AnalyticsService);
//# sourceMappingURL=analytics.service.js.map