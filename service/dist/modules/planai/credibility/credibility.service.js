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
exports.CredibilityService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
const ai_service_1 = require("../../ai/ai.service");
const client_1 = require("@prisma/client");
let CredibilityService = class CredibilityService {
    constructor(prisma, aiService) {
        this.prisma = prisma;
        this.aiService = aiService;
    }
    async generatePortfolio(dto, userId) {
        const aiTagline = await this.aiService.generateJson('You are a Nigerian personal branding expert. Return ONLY valid JSON.', `Generate portfolio content for: ${dto.name}, ${dto.title}. Bio: ${dto.bio}. Skills: ${dto.skills.join(', ')}.
                        Return { tagline: string, highlights: string[], personalBrandSummary: string }`, {
            model: 'gpt-4o',
            maxTokens: 500,
        });
        const job = await this.prisma.planAIJob.create({
            data: {
                userId, type: client_1.PlanAIJobType.CREDIBILITY_HUB, status: client_1.PlanAIJobStatus.COMPLETED,
                productSlug: 'credibility-hubs', input: dto,
                output: { portfolioData: dto, aiEnhancements: aiTagline.content }, completedAt: new Date(),
            },
        });
        return { jobId: job.id, portfolio: { ...dto, ...aiTagline.content } };
    }
    async optimizeLinkedIn(dto) {
        const response = await this.aiService.generateJson('You are a Nigerian LinkedIn optimization expert. Return ONLY valid JSON.', `Optimize this LinkedIn profile for Nigerian market:
                        Current Headline: ${dto.currentHeadline}
                        Current Summary: ${dto.currentSummary}
                        Target Role: ${dto.targetRole}
                        Industry: ${dto.industry}
                        Return optimized headline, summary, keywords added, ATS score comparison, action items.`, {
            model: 'gpt-4o',
            maxTokens: 1200,
        });
        return response.content;
    }
    async generateResume(dto, userId) {
        const response = await this.aiService.generateJson('You are a Nigerian HR expert and resume writer. Create ATS-optimised resumes. Return ONLY valid JSON.', `Create a professional ATS-friendly resume for Nigerian job market:
                        Target Role: ${dto.targetRole}
                        Data: ${JSON.stringify(dto)}
                        Return { formattedResume (structured object), atsFriendlyText (plain text), improvementSuggestions, keywordScore (0-100) }`, {
            model: 'gpt-4o',
            maxTokens: 3000,
        });
        const job = await this.prisma.planAIJob.create({
            data: {
                userId, type: client_1.PlanAIJobType.CREDIBILITY_HUB, status: client_1.PlanAIJobStatus.COMPLETED,
                productSlug: 'credibility-hubs', input: dto,
                output: response.content, completedAt: new Date(),
            },
        });
        return { jobId: job.id, resume: response.content };
    }
    async getPublicPortfolio(userId) {
        const job = await this.prisma.planAIJob.findFirst({
            where: { userId, type: client_1.PlanAIJobType.CREDIBILITY_HUB, status: client_1.PlanAIJobStatus.COMPLETED },
            orderBy: { createdAt: 'desc' },
        });
        if (!job)
            throw new common_1.NotFoundException('Portfolio not found');
        return job.output;
    }
};
exports.CredibilityService = CredibilityService;
exports.CredibilityService = CredibilityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, ai_service_1.AiService])
], CredibilityService);
//# sourceMappingURL=credibility.service.js.map