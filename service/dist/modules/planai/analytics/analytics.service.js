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
exports.AnalyticsReportService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
const ai_service_1 = require("../../ai/ai.service");
const client_1 = require("@prisma/client");
let AnalyticsReportService = class AnalyticsReportService {
    constructor(prisma, ai) {
        this.prisma = prisma;
        this.ai = ai;
    }
    async getUserOverview(userId) {
        const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
        const [payments, subscriptions, storeRevenue, jobs] = await Promise.all([
            this.prisma.payment.aggregate({
                where: { userId, status: client_1.PaymentStatus.SUCCESS, paidAt: { gte: thirtyDaysAgo } },
                _sum: { amountNGN: true },
                _count: true,
            }),
            this.prisma.subscription.findMany({
                where: { userId, status: { in: ['ACTIVE', 'TRIAL'] } },
                select: { productSlug: true, tier: true, currentPeriodEnd: true },
            }),
            this.prisma.store.findMany({
                where: { userId },
                select: { name: true, totalRevenue: true, totalOrders: true },
            }),
            this.prisma.planAIJob.count({
                where: { userId, createdAt: { gte: thirtyDaysAgo } },
            }),
        ]);
        return {
            last30Days: {
                paymentsNGN: (payments._sum.amountNGN ?? 0) / 100,
                paymentCount: payments._count,
                aiJobsRun: jobs,
            },
            activeSubscriptions: subscriptions,
            stores: storeRevenue,
        };
    }
    async getRevenueStats(userId, period) {
        const days = period === '7d' ? 7 : period === '90d' ? 90 : 30;
        const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
        const rows = await this.prisma.payment.groupBy({
            by: ['productSlug'],
            where: { userId, status: client_1.PaymentStatus.SUCCESS, paidAt: { gte: since } },
            _sum: { amountNGN: true },
            _count: true,
        });
        return rows.map((p) => ({
            productSlug: p.productSlug,
            revenueNGN: (p._sum.amountNGN ?? 0) / 100,
            transactions: p._count,
        }));
    }
    async generateAnalyticsReport(dto, userId) {
        const stats = await this.getRevenueStats(userId, dto.period);
        const insight = await this.ai.chat('You are a Nigerian business analytics expert. Provide actionable insights from business revenue data.', `Analyze this Nigerian business revenue data:
Products analyzed: ${dto.productSlugs.join(', ')}
Period: ${dto.period}
Revenue breakdown: ${JSON.stringify(stats)}

Provide: top 3 growth opportunities, 2 risks to watch, 3 recommended actions.
Be specific to the Nigerian market context (Naira, local platforms, CBN policies).`, {
            task: 'reasoning',
            forceProvider: 'groq',
            maxTokens: 1200,
            cacheTtl: 3600,
        });
        const job = await this.prisma.planAIJob.create({
            data: {
                userId,
                type: client_1.PlanAIJobType.ANALYTICS_REPORT,
                status: client_1.PlanAIJobStatus.COMPLETED,
                productSlug: 'analytics-dashboard',
                input: dto,
                output: { stats, insights: insight.content },
                modelUsed: insight.model,
                completedAt: new Date(),
            },
        });
        return { jobId: job.id, stats, insights: insight.content, provider: insight.provider };
    }
    async generateGrowthInsights(userId) {
        const overview = await this.getUserOverview(userId);
        const response = await this.ai.chat('You are a Nigerian business growth expert. Give specific, actionable growth advice for Nigerian SMEs.', `My business overview: ${JSON.stringify(overview)}

What are my top 5 growth actions for the next 30 days?
Consider: Nigerian market realities, Paystack, WhatsApp Business, power infrastructure, FX volatility.`, {
            task: 'reasoning',
            maxTokens: 900,
            cacheTtl: 1800,
        });
        return { insights: response.content, provider: response.provider };
    }
};
exports.AnalyticsReportService = AnalyticsReportService;
exports.AnalyticsReportService = AnalyticsReportService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        ai_service_1.AiService])
], AnalyticsReportService);
//# sourceMappingURL=analytics.service.js.map