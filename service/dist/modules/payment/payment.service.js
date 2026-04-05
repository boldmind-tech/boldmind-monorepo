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
var PaymentService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const event_emitter_1 = require("@nestjs/event-emitter");
const axios_1 = require("axios");
const crypto = require("crypto");
const prisma_service_1 = require("../../database/prisma.service");
let PaymentService = PaymentService_1 = class PaymentService {
    constructor(prisma, config, eventEmitter) {
        this.prisma = prisma;
        this.config = config;
        this.eventEmitter = eventEmitter;
        this.logger = new common_1.Logger(PaymentService_1.name);
        this.PAYSTACK_BASE = 'https://api.paystack.co';
        this.PAYSTACK_SECRET = this.config.get('PAYSTACK_SECRET_KEY');
    }
    get paystackHeaders() {
        return {
            Authorization: `Bearer ${this.PAYSTACK_SECRET}`,
            'Content-Type': 'application/json',
        };
    }
    async paystackPost(path, body) {
        const { data } = await axios_1.default.post(`${this.PAYSTACK_BASE}${path}`, body, {
            headers: this.paystackHeaders,
        });
        return data.data;
    }
    async paystackGet(path) {
        const { data } = await axios_1.default.get(`${this.PAYSTACK_BASE}${path}`, {
            headers: this.paystackHeaders,
        });
        return data.data;
    }
    async initializePayment(userId, userEmail, dto) {
        const reference = `BM_${Date.now()}_${Math.random().toString(36).slice(2, 9).toUpperCase()}`;
        const paystackData = await this.paystackPost('/transaction/initialize', {
            email: userEmail,
            amount: dto.amountNGN,
            reference,
            currency: 'NGN',
            callback_url: dto.callbackUrl || this.config.get('PAYMENT_CALLBACK_URL'),
            metadata: {
                userId,
                productSlug: dto.productSlug,
                ...dto.metadata,
            },
        });
        await this.prisma.payment.create({
            data: {
                userId,
                paystackRef: reference,
                amountNGN: dto.amountNGN,
                status: 'PENDING',
                productSlug: dto.productSlug,
                description: dto.description,
                metadata: dto.metadata || {},
            },
        });
        return {
            authorizationUrl: paystackData.authorization_url,
            reference,
            accessCode: paystackData.access_code,
        };
    }
    async verifyPayment(reference) {
        const paystackTrx = await this.paystackGet(`/transaction/verify/${reference}`);
        const payment = await this.prisma.payment.findUnique({ where: { paystackRef: reference } });
        if (!payment)
            throw new common_1.NotFoundException('Payment record not found');
        const status = paystackTrx.status === 'success' ? 'SUCCESS' : 'FAILED';
        const updated = await this.prisma.payment.update({
            where: { id: payment.id },
            data: {
                status,
                channel: paystackTrx.channel,
                paystackTrxRef: paystackTrx.reference,
                paidAt: status === 'SUCCESS' ? new Date(paystackTrx.paid_at) : null,
            },
        });
        if (status === 'SUCCESS') {
            this.eventEmitter.emit('payment.success', {
                userId: payment.userId,
                paymentId: payment.id,
                productSlug: payment.productSlug,
                amountNGN: payment.amountNGN,
            });
        }
        return updated;
    }
    async handleWebhook(signature, rawBody) {
        const hash = crypto
            .createHmac('sha512', this.PAYSTACK_SECRET)
            .update(rawBody)
            .digest('hex');
        if (hash !== signature) {
            throw new common_1.BadRequestException('Invalid webhook signature');
        }
        const event = JSON.parse(rawBody.toString());
        this.logger.log(`Paystack webhook: ${event.event}`);
        switch (event.event) {
            case 'charge.success':
                await this.handleChargeSuccess(event.data);
                break;
            case 'subscription.create':
                await this.handleSubscriptionCreated(event.data);
                break;
            case 'subscription.disable':
                await this.handleSubscriptionDisabled(event.data);
                break;
            case 'invoice.payment_failed':
                await this.handleInvoiceFailure(event.data);
                break;
        }
    }
    async handleChargeSuccess(data) {
        const reference = data.reference;
        const payment = await this.prisma.payment.findUnique({ where: { paystackRef: reference } });
        if (!payment || payment.status === 'SUCCESS')
            return;
        await this.prisma.payment.update({
            where: { id: payment.id },
            data: { status: 'SUCCESS', paidAt: new Date(), channel: data.channel },
        });
        this.eventEmitter.emit('payment.success', {
            userId: payment.userId,
            paymentId: payment.id,
            productSlug: payment.productSlug,
            amountNGN: payment.amountNGN,
        });
    }
    async handleSubscriptionCreated(data) {
        const userId = data.metadata?.userId;
        if (!userId)
            return;
        await this.prisma.subscription.updateMany({
            where: { userId, paystackSubCode: data.subscription_code },
            data: { status: 'ACTIVE' },
        });
    }
    async handleSubscriptionDisabled(data) {
        await this.prisma.subscription.updateMany({
            where: { paystackSubCode: data.subscription_code },
            data: { status: 'CANCELLED', cancelledAt: new Date() },
        });
    }
    async handleInvoiceFailure(data) {
        await this.prisma.subscription.updateMany({
            where: { paystackSubCode: data.subscription?.subscription_code },
            data: { status: 'PAST_DUE' },
        });
        this.eventEmitter.emit('payment.invoice_failed', {
            subscriptionCode: data.subscription?.subscription_code,
        });
    }
    async getUserPayments(userId, page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const [payments, total] = await Promise.all([
            this.prisma.payment.findMany({
                where: { userId },
                skip, take: limit,
                orderBy: { createdAt: 'desc' },
                include: { invoice: true },
            }),
            this.prisma.payment.count({ where: { userId } }),
        ]);
        return { data: payments, meta: { total, page, limit } };
    }
    async getUserSubscriptions(userId) {
        return this.prisma.subscription.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async checkProductAccess(userId, productSlug) {
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
    async createWaitlistEntry(productSlug, email, name, userId) {
        const count = await this.prisma.waitlistEntry.count({ where: { productSlug } });
        return this.prisma.waitlistEntry.upsert({
            where: { email_productSlug: { email, productSlug } },
            update: {},
            create: { email, productSlug, name, userId, position: count + 1 },
        });
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = PaymentService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService,
        event_emitter_1.EventEmitter2])
], PaymentService);
//# sourceMappingURL=payment.service.js.map