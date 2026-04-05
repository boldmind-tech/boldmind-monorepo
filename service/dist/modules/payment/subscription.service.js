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
var SubscriptionService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const prisma_service_1 = require("../../database/prisma.service");
const redis_service_1 = require("../../database/redis.service");
let SubscriptionService = SubscriptionService_1 = class SubscriptionService {
    constructor(prisma, redis, eventEmitter) {
        this.prisma = prisma;
        this.redis = redis;
        this.eventEmitter = eventEmitter;
        this.logger = new common_1.Logger(SubscriptionService_1.name);
    }
    async createSubscription(userId, dto) {
        const existing = await this.prisma.subscription.findFirst({
            where: {
                userId,
                productSlug: dto.productSlug,
                status: { in: ['ACTIVE', 'TRIAL'] },
            },
        });
        if (existing) {
            throw new common_1.BadRequestException('You already have an active subscription to this product');
        }
        const intervalDays = this.getIntervalDays(dto.interval);
        const now = new Date();
        const periodEnd = new Date(now.getTime() + intervalDays * 24 * 60 * 60 * 1000);
        const subscription = await this.prisma.subscription.create({
            data: {
                userId,
                productSlug: dto.productSlug,
                planName: dto.planName,
                amountNGN: dto.amountNGN,
                interval: dto.interval,
                status: 'ACTIVE',
                currentPeriodStart: now,
                currentPeriodEnd: periodEnd,
            },
        });
        this.eventEmitter.emit('subscription.created', {
            userId,
            subscriptionId: subscription.id,
            productSlug: dto.productSlug,
        });
        this.logger.log(`Subscription created: ${subscription.id} for user ${userId}`);
        return subscription;
    }
    async startTrial(userId, productSlug, trialDays = 7) {
        const existing = await this.prisma.subscription.findFirst({
            where: { userId, productSlug, status: { in: ['ACTIVE', 'TRIAL'] } },
        });
        if (existing) {
            throw new common_1.BadRequestException('Already subscribed or on trial for this product');
        }
        const now = new Date();
        const trialEnd = new Date(now.getTime() + trialDays * 24 * 60 * 60 * 1000);
        return this.prisma.subscription.create({
            data: {
                userId,
                productSlug,
                planName: 'Trial',
                amountNGN: 0,
                interval: 'trial',
                status: 'TRIAL',
                currentPeriodStart: now,
                currentPeriodEnd: trialEnd,
            },
        });
    }
    async cancelSubscription(userId, subscriptionId) {
        const sub = await this.prisma.subscription.findFirst({
            where: { id: subscriptionId, userId, status: { in: ['ACTIVE', 'TRIAL'] } },
        });
        if (!sub)
            throw new common_1.NotFoundException('Active subscription not found');
        const updated = await this.prisma.subscription.update({
            where: { id: subscriptionId },
            data: { status: 'CANCELLED', cancelledAt: new Date() },
        });
        this.eventEmitter.emit('subscription.cancelled', {
            userId,
            subscriptionId,
            productSlug: sub.productSlug,
        });
        return updated;
    }
    async renewSubscription(subscriptionId) {
        const sub = await this.prisma.subscription.findUnique({ where: { id: subscriptionId } });
        if (!sub)
            throw new common_1.NotFoundException('Subscription not found');
        const intervalDays = this.getIntervalDays(sub.interval);
        const now = new Date();
        const newPeriodEnd = new Date(now.getTime() + intervalDays * 24 * 60 * 60 * 1000);
        return this.prisma.subscription.update({
            where: { id: subscriptionId },
            data: {
                status: 'ACTIVE',
                currentPeriodStart: now,
                currentPeriodEnd: newPeriodEnd,
                cancelledAt: null,
            },
        });
    }
    async checkAccess(userId, productSlug) {
        const sub = await this.prisma.subscription.findFirst({
            where: {
                userId,
                productSlug,
                status: { in: ['TRIAL', 'ACTIVE'] },
                currentPeriodEnd: { gte: new Date() },
            },
        });
        return !!sub;
    }
    async getUserSubscriptions(userId) {
        return this.prisma.subscription.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async handlePaymentSuccess(payload) {
        this.logger.log(`Payment success for ${payload.productSlug}, creating/renewing subscription`);
        const existing = await this.prisma.subscription.findFirst({
            where: {
                userId: payload.userId,
                productSlug: payload.productSlug,
                status: { in: ['ACTIVE', 'TRIAL', 'PAST_DUE'] },
            },
        });
        if (existing) {
            await this.renewSubscription(existing.id);
        }
        else {
            await this.createSubscription(payload.userId, {
                productSlug: payload.productSlug,
                planName: `${payload.productSlug} Plan`,
                amountNGN: payload.amountNGN,
                interval: 'monthly',
            });
        }
    }
    getIntervalDays(interval) {
        switch (interval) {
            case 'monthly': return 30;
            case 'quarterly': return 90;
            case 'annually': return 365;
            case 'trial': return 7;
            default: return 30;
        }
    }
};
exports.SubscriptionService = SubscriptionService;
__decorate([
    (0, event_emitter_1.OnEvent)('payment.success'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubscriptionService.prototype, "handlePaymentSuccess", null);
exports.SubscriptionService = SubscriptionService = SubscriptionService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService,
        event_emitter_1.EventEmitter2])
], SubscriptionService);
//# sourceMappingURL=subscription.service.js.map