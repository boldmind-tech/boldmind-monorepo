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
var PlanningService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanningService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
const ai_service_1 = require("../../ai/ai.service");
const redis_service_1 = require("../../../database/redis.service");
const client_1 = require("@prisma/client");
const BUSINESS_PLAN_PROMPT = `You are a Nigerian business strategy expert with deep knowledge of the Lagos, Abuja, and Port Harcourt business ecosystems. 
Generate a professional, bank-ready Nigerian business plan in the following JSON structure. Use real Nigerian market data, naira figures, and local context.

Return ONLY valid JSON matching this schema:
{
  "executiveSummary": "string",
  "companyDescription": {
    "mission": "string",
    "vision": "string", 
    "legalStructure": "string",
    "location": "string",
    "foundingDate": "string"
  },
  "productsServices": [{ "name": "string", "description": "string", "priceNGN": number }],
  "marketAnalysis": {
    "targetMarket": "string",
    "marketSizeNGN": number,
    "competitorAnalysis": [{ "name": "string", "strengths": "string", "weaknesses": "string" }],
    "swot": { "strengths": [], "weaknesses": [], "opportunities": [], "threats": [] }
  },
  "marketingStrategy": {
    "channels": [],
    "acquisitionCost": number,
    "retentionStrategy": "string"
  },
  "operationsPlan": "string",
  "managementTeam": [{ "name": "string", "role": "string", "background": "string" }],
  "financialProjections": {
    "year1Revenue": number,
    "year2Revenue": number, 
    "year3Revenue": number,
    "startupCostNGN": number,
    "breakEvenMonths": number,
    "fundingRequired": number
  },
  "riskAnalysis": [{ "risk": "string", "mitigation": "string" }],
  "appendix": "string"
}`;
let PlanningService = PlanningService_1 = class PlanningService {
    constructor(prisma, aiService, redis) {
        this.prisma = prisma;
        this.aiService = aiService;
        this.redis = redis;
        this.logger = new common_1.Logger(PlanningService_1.name);
    }
    async generateBusinessPlan(dto, userId) {
        await this.assertCanGenerate(userId, 'business-planning');
        const job = await this.prisma.planAIJob.create({
            data: {
                userId,
                type: client_1.PlanAIJobType.BUSINESS_PLAN,
                status: client_1.PlanAIJobStatus.QUEUED,
                productSlug: 'business-planning',
                input: dto,
            },
        });
        try {
            await this.prisma.planAIJob.update({
                where: { id: job.id },
                data: { status: client_1.PlanAIJobStatus.PROCESSING, startedAt: new Date() },
            });
            const startMs = Date.now();
            const userPrompt = `
                        Business Name: ${dto.businessName}
                        Industry: ${dto.industry}
                        Location: ${dto.location ?? 'Lagos, Nigeria'}
                        Business Description: ${dto.description}
                        Target Customers: ${dto.targetCustomers}
                        Products/Services: ${dto.productsServices}
                        Initial Capital Available: ₦${dto.initialCapitalNGN?.toLocaleString() ?? 'Not specified'}
                        Funding Needed: ${dto.fundingNeeded ? `₦${dto.fundingNeeded.toLocaleString()}` : 'No external funding needed'}
                        Additional Context: ${dto.additionalContext ?? 'None'}

                        Generate a comprehensive Nigerian business plan for this business.`;
            const response = await this.aiService.generateJson(BUSINESS_PLAN_PROMPT, userPrompt, {
                model: 'gpt-4o',
                maxTokens: 4000,
            });
            const processingMs = Date.now() - startMs;
            const updatedJob = await this.prisma.planAIJob.update({
                where: { id: job.id },
                data: {
                    status: client_1.PlanAIJobStatus.COMPLETED,
                    output: response.content,
                    modelUsed: 'gpt-4o',
                    promptTokens: response.tokens || 0,
                    completionTokens: 0,
                    processingMs,
                    completedAt: new Date(),
                },
            });
            await this.prisma.activityLog.create({
                data: {
                    userId,
                    action: 'business_plan_generated',
                    resource: `planai_job:${job.id}`,
                    productSlug: 'business-planning',
                    metadata: { industry: dto.industry, processingMs },
                },
            });
            return { jobId: updatedJob.id, status: 'completed', output: response.content };
        }
        catch (error) {
            this.logger.error(`Business plan generation failed for job ${job.id}`, error);
            await this.prisma.planAIJob.update({
                where: { id: job.id },
                data: {
                    status: client_1.PlanAIJobStatus.FAILED,
                    errorMessage: error instanceof Error ? error.message : 'Unknown error',
                },
            });
            throw error;
        }
    }
    async generatePitchDeck(dto, userId) {
        await this.assertCanGenerate(userId, 'business-planning');
        const prompt = `Create a 10-slide Nigerian startup pitch deck outline in JSON.
                        Return ONLY valid JSON:
                        {
                            "slides": [
                                { "slideNumber": 1, "title": "Problem", "content": "string", "speakerNotes": "string", "keyMetric": "string" },
                                ...
                            ],
                            "totalFunding": number,
                            "valuation": number,
                            "useOfFunds": [{ "category": "string", "percentageNGN": number, "description": "string" }]
                        }

                        Business: ${dto.businessName}
                        Industry: ${dto.industry}
                        Problem solved: ${dto.problemStatement}
                        Solution: ${dto.solution}
                        Traction: ${dto.traction ?? 'Pre-launch'}
                        Funding ask: ₦${dto.fundingAskNGN?.toLocaleString() ?? 'TBD'}
                        Team: ${dto.teamBackground}`;
        const response = await this.aiService.generateJson('You are a Nigerian startup investor and pitch deck expert.', prompt, {
            model: 'gpt-4o',
            maxTokens: 3000,
        });
        const job = await this.prisma.planAIJob.create({
            data: {
                userId,
                type: client_1.PlanAIJobType.PITCH_DECK,
                status: client_1.PlanAIJobStatus.COMPLETED,
                productSlug: 'business-planning',
                input: dto,
                output: response.content,
                modelUsed: 'gpt-4o',
                completedAt: new Date(),
            },
        });
        return { jobId: job.id, status: 'completed', output: response.content };
    }
    async listUserJobs(userId, page) {
        const limit = 10;
        const skip = (page - 1) * limit;
        const [jobs, total] = await Promise.all([
            this.prisma.planAIJob.findMany({
                where: { userId, type: { in: [client_1.PlanAIJobType.BUSINESS_PLAN, client_1.PlanAIJobType.PITCH_DECK] } },
                select: { id: true, type: true, status: true, productSlug: true, createdAt: true, completedAt: true, outputFileUrl: true },
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit,
            }),
            this.prisma.planAIJob.count({
                where: { userId, type: { in: [client_1.PlanAIJobType.BUSINESS_PLAN, client_1.PlanAIJobType.PITCH_DECK] } },
            }),
        ]);
        return { data: jobs, meta: { total, page, limit, totalPages: Math.ceil(total / limit) } };
    }
    async getJob(jobId, userId) {
        const job = await this.prisma.planAIJob.findFirst({ where: { id: jobId, userId } });
        if (!job)
            throw new common_1.NotFoundException('Job not found');
        return job;
    }
    async getJobDownloadUrl(jobId, userId) {
        const job = await this.getJob(jobId, userId);
        if (!job.outputFileUrl)
            throw new common_1.BadRequestException('PDF not yet generated for this job');
        return { url: job.outputFileUrl };
    }
    async getTemplates(industry) {
        return this.prisma.planAITemplate.findMany({
            where: {
                type: client_1.PlanAIJobType.BUSINESS_PLAN,
                isPublic: true,
                ...(industry ? { tags: { has: industry.toLowerCase() } } : {}),
            },
            select: { id: true, name: true, description: true, tags: true, useCount: true },
            orderBy: { useCount: 'desc' },
            take: 20,
        });
    }
    async assertCanGenerate(userId, productSlug) {
        const sub = await this.prisma.subscription.findFirst({
            where: { userId, productSlug, status: { in: ['ACTIVE', 'TRIAL'] } },
        });
        if (!sub) {
            const monthStart = new Date();
            monthStart.setDate(1);
            monthStart.setHours(0, 0, 0, 0);
            const monthlyCount = await this.prisma.planAIJob.count({
                where: { userId, productSlug, createdAt: { gte: monthStart } },
            });
            if (monthlyCount >= 1) {
                throw new common_1.ForbiddenException('Free tier allows 1 plan/month. Upgrade to Pro for unlimited access.');
            }
        }
    }
};
exports.PlanningService = PlanningService;
exports.PlanningService = PlanningService = PlanningService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        ai_service_1.AiService,
        redis_service_1.RedisService])
], PlanningService);
//# sourceMappingURL=planning.service.js.map