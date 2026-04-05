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
var AutomationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomationService = void 0;
const common_1 = require("@nestjs/common");
const bull_1 = require("@nestjs/bull");
const config_1 = require("@nestjs/config");
const schedule_1 = require("@nestjs/schedule");
const axios_1 = require("axios");
const prisma_service_1 = require("../../database/prisma.service");
const ai_service_1 = require("../ai/ai.service");
let AutomationService = AutomationService_1 = class AutomationService {
    constructor(prisma, config, ai, socialQueue, emailQueue, aiQueue) {
        this.prisma = prisma;
        this.config = config;
        this.ai = ai;
        this.socialQueue = socialQueue;
        this.emailQueue = emailQueue;
        this.aiQueue = aiQueue;
        this.logger = new common_1.Logger(AutomationService_1.name);
        this.N8N_BASE = config.get('N8N_BASE_URL', 'http://n8n:5678');
        this.N8N_TOKEN = config.get('N8N_API_KEY', '');
    }
    async triggerN8NWorkflow(webhookPath, payload) {
        try {
            const { data } = await axios_1.default.post(`${this.N8N_BASE}/webhook/${webhookPath}`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.N8N_TOKEN}`,
                },
                timeout: 10000,
            });
            this.logger.log(`n8n workflow triggered: ${webhookPath}`);
            return data;
        }
        catch (err) {
            this.logger.error(`n8n webhook failed (${webhookPath}):`, err.message);
            return null;
        }
    }
    async scheduleSocialPost(userId, dto) {
        const delay = dto.scheduledAt.getTime() - Date.now();
        if (delay < 0)
            throw new Error('Scheduled time must be in the future');
        const job = await this.socialQueue.add('post', { userId, ...dto }, { delay, attempts: 3, backoff: { type: 'exponential', delay: 60000 } });
        this.logger.log(`Social post scheduled for ${dto.scheduledAt.toISOString()} (job ${job.id})`);
        return { jobId: job.id, scheduledAt: dto.scheduledAt };
    }
    async generateContentCalendar(userId, input) {
        const calendar = await this.ai.structuredChat(`You are a Nigerian social media strategist. Create content calendars optimized for Nigerian audiences.
Key dates: Nigerian holidays (Independence Day Oct 1, Democracy Day June 12), Islamic/Christian calendars, 
local trends like SAPA season, JAPA discourse, market days.`, `Create a ${input.weeks}-week content calendar for ${input.businessName} (${input.industry}).
Platforms: ${input.platforms.join(', ')}
Themes: ${input.themes?.join(', ') || 'auto-suggest'}

Return JSON with: weeks (array), each week having: theme, posts (array of { day, platform, type, caption, hashtags, bestTimeToPost }).
Include at least 1 Pidgin English post per week.`);
        return calendar;
    }
    async bulkGenerateCaptions(userId, input) {
        const captions = await this.ai.structuredChat('You are a Nigerian social media copywriter who understands Pidgin, local slang, and viral content.', `Generate ${input.count} unique ${input.platform} captions for ${input.businessName}.
Products/services: ${input.products.join(', ')}
Tone: ${input.tone}

Return JSON with: captions (array of { text, hashtags, emojis, callToAction, type: "promotional|educational|entertainment" }).`);
        return captions;
    }
    async scheduleEmailCampaign(userId, dto) {
        const batchSize = dto.batchSize || 100;
        const batches = [];
        for (let i = 0; i < dto.recipientEmails.length; i += batchSize) {
            batches.push(dto.recipientEmails.slice(i, i + batchSize));
        }
        const jobs = await Promise.all(batches.map((batch, idx) => this.emailQueue.add('send-batch', { userId, subject: dto.subject, htmlBody: dto.htmlBody, recipients: batch }, {
            delay: dto.scheduledAt
                ? dto.scheduledAt.getTime() - Date.now() + idx * 5000
                : idx * 5000,
            attempts: 3,
        })));
        return { batches: batches.length, jobs: jobs.map((j) => j.id), totalRecipients: dto.recipientEmails.length };
    }
    async scrapeEmails(userId, dto) {
        const jobId = await this.aiQueue.add('email-scrape', { userId, ...dto, limit: dto.limit || 50 }, { attempts: 2, timeout: 60000 });
        return { jobId: jobId.id, status: 'QUEUED', message: 'Email scraping started. Results will be ready in 2-5 minutes.' };
    }
    async verifyEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email))
            return { valid: false, reason: 'Invalid format' };
        try {
            const hunterKey = this.config.get('HUNTER_IO_API_KEY');
            if (hunterKey) {
                const { data } = await axios_1.default.get(`https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${hunterKey}`);
                return {
                    valid: data.data.result === 'deliverable',
                    reason: data.data.result,
                };
            }
            return { valid: true };
        }
        catch {
            return { valid: true };
        }
    }
    async dailySubscriptionCheck() {
        const threeDaysFromNow = new Date(Date.now() + 3 * 24 * 3600 * 1000);
        const expiringSoon = await this.prisma.subscription.findMany({
            where: {
                status: 'ACTIVE',
                currentPeriodEnd: { lte: threeDaysFromNow, gte: new Date() },
            },
            include: { user: { select: { email: true, name: true } } },
        });
        for (const sub of expiringSoon) {
            await this.emailQueue.add('expiry-reminder', {
                email: sub.user.email,
                name: sub.user.name,
                productSlug: sub.productSlug,
                expiresAt: sub.currentPeriodEnd,
            });
        }
        this.logger.log(`Expiry reminders queued for ${expiringSoon.length} subscriptions`);
    }
    async cleanExpiredTokens() {
        const deleted = await this.prisma.refreshToken.deleteMany({
            where: { OR: [{ expiresAt: { lt: new Date() } }, { isRevoked: true }] },
        });
        this.logger.log(`Cleaned ${deleted.count} expired/revoked tokens`);
    }
    async weeklyAnalyticsDigest() {
        await this.triggerN8NWorkflow('weekly-analytics-digest', { triggeredAt: new Date() });
    }
    async getQueueStats() {
        const [social, email, ai] = await Promise.all([
            this.getQueueInfo(this.socialQueue),
            this.getQueueInfo(this.emailQueue),
            this.getQueueInfo(this.aiQueue),
        ]);
        return { social, email, ai };
    }
    async getQueueInfo(queue) {
        const [waiting, active, completed, failed] = await Promise.all([
            queue.getWaitingCount(),
            queue.getActiveCount(),
            queue.getCompletedCount(),
            queue.getFailedCount(),
        ]);
        return { name: queue.name, waiting, active, completed, failed };
    }
};
exports.AutomationService = AutomationService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_8AM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AutomationService.prototype, "dailySubscriptionCheck", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AutomationService.prototype, "cleanExpiredTokens", null);
__decorate([
    (0, schedule_1.Cron)('0 6 * * 1'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AutomationService.prototype, "weeklyAnalyticsDigest", null);
exports.AutomationService = AutomationService = AutomationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, bull_1.InjectQueue)('social-posts')),
    __param(4, (0, bull_1.InjectQueue)('email-campaigns')),
    __param(5, (0, bull_1.InjectQueue)('ai-jobs')),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService,
        ai_service_1.AiService, Object, Object, Object])
], AutomationService);
//# sourceMappingURL=automation.service.js.map