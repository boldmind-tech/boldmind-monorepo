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
exports.MarketingService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../../../database/prisma.service");
const ai_service_1 = require("../../ai/ai.service");
const resend_1 = require("resend");
const client_1 = require("@prisma/client");
let MarketingService = class MarketingService {
    constructor(prisma, aiService, config) {
        this.prisma = prisma;
        this.aiService = aiService;
        this.config = config;
        this.resend = new resend_1.Resend(this.config.getOrThrow('RESEND_API_KEY'));
    }
    async createEmailCampaign(dto, userId) {
        return this.prisma.planAIJob.create({
            data: {
                userId, type: client_1.PlanAIJobType.MARKETING_CAMPAIGN, status: client_1.PlanAIJobStatus.QUEUED,
                productSlug: 'marketing-automation',
                input: { ...dto, scheduledFor: dto.scheduledFor ? new Date(dto.scheduledFor) : null },
            },
        });
    }
    async sendCampaign(jobId, userId) {
        const job = await this.prisma.planAIJob.findFirst({ where: { id: jobId, userId } });
        if (!job)
            throw new common_1.NotFoundException('Campaign not found');
        const input = job.input;
        const batches = this.chunk(input.recipientEmails, 50);
        let sent = 0;
        for (const batch of batches) {
            await Promise.all(batch.map((email) => this.resend.emails.send({
                from: `BoldMind <noreply@boldmind.ng>`,
                to: email,
                subject: input.subject,
                html: input.bodyHtml,
            })));
            sent += batch.length;
        }
        await this.prisma.planAIJob.update({
            where: { id: jobId },
            data: { status: client_1.PlanAIJobStatus.COMPLETED, output: { sentCount: sent, sentAt: new Date() }, completedAt: new Date() },
        });
        return { sent, total: input.recipientEmails.length };
    }
    async generateSubjectLines(dto) {
        const response = await this.aiService.generateJson('You are a Nigerian email marketing expert. Generate compelling email subject lines for Nigerian audiences. Return ONLY valid JSON.', `Generate 5 email subject lines for: Topic: ${dto.topic}, Brand: ${dto.brand}, Tone: ${dto.tone ?? 'professional but warm'}.
Include Nigerian cultural references where appropriate (e.g., "Omo!", "No dulling", local phrases).
Return { subjectLines: [{ line: string, type: "curiosity|urgency|value|social_proof|question", predictedOpenRate: "low|medium|high" }] }`, {
            model: 'gpt-4o',
            maxTokens: 800,
        });
        return response.content;
    }
    async generateEmailCopy(dto) {
        const response = await this.aiService.generateJson('You are a Nigerian copywriter. Write compelling email copy for Nigerian audiences. Return ONLY valid JSON.', `Write a marketing email:
Topic: ${dto.topic}
CTA: ${dto.cta}
Target Audience: ${dto.audience}
Tone: ${dto.tone ?? 'friendly, professional'}
Return { subject, preheader, bodyHtml (full HTML email), bodyText (plain text version) }`, {
            model: 'gpt-4o',
            maxTokens: 2000,
        });
        return response.content;
    }
    async createWhatsappBroadcast(dto, userId) {
        const job = await this.prisma.planAIJob.create({
            data: {
                userId, type: client_1.PlanAIJobType.MARKETING_CAMPAIGN, status: client_1.PlanAIJobStatus.QUEUED,
                productSlug: 'marketing-automation', input: dto,
            },
        });
        return { jobId: job.id, scheduledCount: dto.recipientNumbers.length };
    }
    async getCampaignAnalytics(jobId, userId) {
        const job = await this.prisma.planAIJob.findFirst({ where: { id: jobId, userId } });
        if (!job)
            throw new common_1.NotFoundException('Campaign not found');
        return { campaign: job, analytics: job.output };
    }
    chunk(arr, size) {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
    }
};
exports.MarketingService = MarketingService;
exports.MarketingService = MarketingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, ai_service_1.AiService, config_1.ConfigService])
], MarketingService);
//# sourceMappingURL=marketing.service.js.map