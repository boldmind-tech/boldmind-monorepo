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
var PlanAIService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanAIService = void 0;
const common_1 = require("@nestjs/common");
const bull_1 = require("@nestjs/bull");
const prisma_service_1 = require("../../database/prisma.service");
const ai_service_1 = require("../ai/ai.service");
let PlanAIService = PlanAIService_1 = class PlanAIService {
    constructor(prisma, ai, planaiQueue) {
        this.prisma = prisma;
        this.ai = ai;
        this.planaiQueue = planaiQueue;
        this.logger = new common_1.Logger(PlanAIService_1.name);
    }
    async createJob(userId, tool, input) {
        const typeMap = {
            'business-planning': 'BUSINESS_PLAN',
            'financial-forecasting': 'FINANCIAL_FORECAST',
            'branding-design': 'BRANDING_PACKAGE',
            'marketing-automation': 'MARKETING_CAMPAIGN',
            'credibility-hubs': 'CREDIBILITY_HUB',
            'investor-readiness': 'INVESTOR_DECK',
            'digital-storefronts': 'STOREFRONT_SETUP',
            'analytics-dashboard': 'ANALYTICS_REPORT',
        };
        const job = await this.prisma.planAIJob.create({
            data: {
                userId,
                tool,
                type: typeMap[tool] || 'BUSINESS_PLAN',
                status: 'QUEUED',
                productSlug: 'planai',
                input
            },
        });
        await this.planaiQueue.add('process', { jobId: job.id, tool, input, userId }, {
            jobId: job.id,
            priority: 1,
        });
        return job;
    }
    async getJob(jobId, userId) {
        const job = await this.prisma.planAIJob.findFirst({
            where: { id: jobId, userId },
        });
        if (!job)
            throw new common_1.NotFoundException('Job not found');
        return job;
    }
    async getUserJobs(userId, tool, page = 1, limit = 20) {
        const where = { userId };
        if (tool)
            where.tool = tool;
        const skip = (page - 1) * limit;
        const [jobs, total] = await Promise.all([
            this.prisma.planAIJob.findMany({ where, skip, take: limit, orderBy: { createdAt: 'desc' } }),
            this.prisma.planAIJob.count({ where }),
        ]);
        return { data: jobs, meta: { total, page, limit } };
    }
    async generateBusinessPlan(userId, input) {
        const businessContext = `You are a Nigerian business advisor. ${input.businessName} is in the ${input.industry} industry, located in ${input.location}.`;
        const { content: plan } = await this.ai.generateJson(businessContext, `Generate a comprehensive, bank-ready Nigerian business plan for:
Business: ${input.businessName}
Industry: ${input.industry}
Target Market: ${input.targetMarket}
Starting Capital: ₦${input.initialCapital.toLocaleString()}
Location: ${input.location}
Products/Services: ${input.products}
Competitive Advantage: ${input.competitiveAdvantage}

Return JSON with: executiveSummary, companyDescription, marketAnalysis (size, competitors, opportunity), 
productsServices, marketingStrategy, operationalPlan, managementTeam, financialProjections (3-year), 
fundingRequirements, appendix, swotAnalysis.`, { task: 'reasoning' });
        return this.createJob(userId, 'business-planning', { input, output: plan });
    }
    async generateFinancialForecast(userId, input) {
        const { content: forecast } = await this.ai.generateJson('You are a Nigerian financial analyst. Generate accurate cash flow projections in NGN.', `Generate 12-month financial forecast:
Current Monthly Revenue: ₦${input.monthlyRevenue.toLocaleString()}
Monthly Expenses: ${JSON.stringify(input.monthlyExpenses)}
Expected Growth Rate: ${input.growthRate}%/month
Scenario: ${input.scenario}

Return JSON with: months (array of 12 month projections with revenue, expenses, profit, cashFlow),
breakEvenMonth, totalYear1Revenue, totalYear1Expenses, totalYear1Profit, 
burnRate, runwayMonths, keyRisks, recommendations.`, { task: 'reasoning' });
        return this.createJob(userId, 'financial-forecasting', { input, output: forecast });
    }
    async generateBrandKit(userId, input) {
        const [brandKitResponse, logoResult] = await Promise.all([
            this.ai.generateJson(`You are a Nigerian branding expert. Business: ${input.businessName}, Industry: ${input.industry}.`, `Create a complete brand kit for "${input.businessName}" in ${input.industry}.
Target: ${input.targetAudience}. Personality: ${input.brandPersonality}.
Return JSON: tagline, brandVoice, colorPalette (primary/secondary/accent hex codes + rationale),
typography (heading/body font recommendations), brandValues (5 core values),
marketingMessages (5 key messages), socialBioTemplates (Instagram/LinkedIn/Twitter),
emailSignatureTemplate, logoPrompt (DALL-E 3 prompt for logo generation).`),
            input.generateLogo
                ? this.ai.generateLogo({
                    brandName: input.businessName,
                    industry: input.industry,
                    style: 'minimalist professional',
                    colors: ['#000000'],
                })
                : Promise.resolve(null),
        ]);
        const brandKit = brandKitResponse.content;
        const logoUrls = logoResult?.url ? [logoResult.url] : [];
        return this.createJob(userId, 'branding-design', {
            input,
            output: { ...brandKit, logoUrls },
        });
    }
    async generateMarketingCopy(userId, input) {
        const { content: copies } = await this.ai.generateJson('You are an expert Nigerian social media copywriter. You understand Pidgin English, Nigerian slang, and local marketing culture.', `Create ${input.platform} marketing copy for:
Business: ${input.businessName}
Product: ${input.product}
Tone: ${input.tone}
CTA: ${input.callToAction}
Language style: ${input.language}

Return JSON with: 5 caption variations (each with text, hashtags, emojis), 
3 story/status ideas, 2 broadcast message templates, 1 WhatsApp status idea.`);
        return this.createJob(userId, 'marketing-automation', { input, output: copies });
    }
    async generateCredibilityContent(userId, input) {
        const { content } = await this.ai.generateJson('You are a Nigerian professional branding expert who helps people stand out on LinkedIn and in job applications.', `Create professional credibility content for:
Name: ${input.name}
Title: ${input.title}
Industry: ${input.industry}
Experience: ${input.yearsExperience} years
Key Achievements: ${input.achievements.join(', ')}
Skills: ${input.skills.join(', ')}
Target: ${input.targetRole || 'General professional visibility'}

Return JSON: linkedinHeadline (3 variations), linkedinSummary (2 versions, 1 formal 1 conversational),
resumeSummary (ATS-optimized), elevatorPitch (30-sec verbal), portfolioTagline,
twitterBio, instagramBio, recommendationRequestTemplate, coldOutreachTemplate.`);
        return this.createJob(userId, 'credibility-hubs', { input, output: content });
    }
    async generateInvestorDocs(userId, input) {
        const { content: docs } = await this.ai.generateJson('You are a Nigerian startup funding advisor with knowledge of SEC Nigeria, Venture Gardens, Future Africa, and Lagos startup ecosystem.', `Generate investor readiness documents for:
Startup: ${input.startupName}
Problem: ${input.problem}
Solution: ${input.solution}
Traction: ${input.traction}
Funding Ask: ₦${input.fundingAmount.toLocaleString()}
Use of Funds: ${input.useOfFunds}
Team: ${input.teamBackground}

Return JSON: executiveSummary (200 words), problemStatement, solutionStatement,
marketOpportunity, businessModel, tractionMetrics, competitiveLandscape,
teamBios, fundingAsk (with use of funds breakdown), financialHighlights,
exitStrategy, dueDiligenceChecklist, investorFAQ (10 likely questions + answers).`, { task: 'reasoning' });
        return this.createJob(userId, 'investor-readiness', { input, output: docs });
    }
    async generateHRContent(userId, input) {
        const { content } = await this.ai.generateJson('You are a Nigerian HR expert. Create legally appropriate, culturally relevant HR documents for Nigerian businesses.', `Generate Nigerian HR document:
Type: ${input.type}
Company: ${input.companyName}
${input.role ? `Role: ${input.role}` : ''}
${input.salary ? `Salary: ₦${input.salary.toLocaleString()}/month` : ''}
Details: ${JSON.stringify(input.details)}

Return JSON with the complete document content and any required metadata.`);
        return this.createJob(userId, 'planai', { tool: 'hr', input, output: content });
    }
    async generateLegalTemplate(userId, input) {
        const { content: template } = await this.ai.generateJson('You are a Nigerian commercial lawyer. Generate legally appropriate templates compliant with Nigerian law. Always include a disclaimer that this is a template and should be reviewed by a licensed attorney.', `Generate Nigerian ${input.type} template:
Party A: ${input.partyAName}
${input.partyBName ? `Party B: ${input.partyBName}` : ''}
Business Type: ${input.businessType}
Jurisdiction: ${input.jurisdiction || 'Federal Republic of Nigeria'}
Details: ${JSON.stringify(input.details)}

Return JSON with: title, disclaimer, preamble, clauses (array of {title, content}), signatures section.`);
        return this.createJob(userId, 'planai', { tool: 'legal', input, output: template });
    }
    async generateStorefrontContent(userId, input) {
        const { content } = await this.ai.generateJson(`You are a Nigerian business advisor. Business: ${input.businessName}.`, `Generate compelling product descriptions and store copy for ${input.businessName}.
Products: ${JSON.stringify(input.products)}
Tone: ${input.tone}

Return JSON with: storeTagline, storeDescription, productDescriptions (enhanced versions),
whatsappBroadcastTemplate, returnPolicyTemplate, shippingPolicyTemplate.`);
        return this.createJob(userId, 'digital-storefronts', { input, output: content });
    }
    async generateAnalyticsInsights(userId, input) {
        const { content: insights } = await this.ai.generateJson('You are a Nigerian digital marketing analyst. Provide actionable insights for Nigerian businesses.', `Analyze these ${input.platform} metrics for a Nigerian business in ${input.industry}:
Period: ${input.period}
Metrics: ${JSON.stringify(input.metrics)}

Return JSON with: performanceSummary, topInsights (5), actionableRecommendations (5),
growthOpportunities (3), warningSignals (any), nextMonthForecast, competitorBenchmarks.`);
        return this.createJob(userId, 'analytics-dashboard', { input, output: insights });
    }
    async generateOperationsDoc(userId, input) {
        const businessContext = `You are a Nigerian business advisor. ${input.businessName} is in the ${input.industry} industry.`;
        const { content: doc } = await this.ai.generateJson(businessContext, `Generate a ${input.docType} for the ${input.department} department of ${input.businessName}.
Details: ${JSON.stringify(input.details)}

Return JSON with the complete operational document structure.`);
        return this.createJob(userId, 'planai', { tool: 'operations', input, output: doc });
    }
    async enrichLeadData(userId, leads) {
        const { content: enriched } = await this.ai.generateJson('You are a B2B lead researcher with knowledge of Nigerian businesses.', `Enrich these leads with likely information based on their email domains and company names:
Leads: ${JSON.stringify(leads.slice(0, 10))}

Return JSON with: enrichedLeads (array with added: industry, estimatedSize, 
linkedinSearchQuery, outreachPersonalization, qualificationScore 1-10).`);
        return this.createJob(userId, 'emailscraper', { input: { leads }, output: enriched });
    }
};
exports.PlanAIService = PlanAIService;
exports.PlanAIService = PlanAIService = PlanAIService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, bull_1.InjectQueue)('planai-jobs')),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        ai_service_1.AiService, Object])
], PlanAIService);
//# sourceMappingURL=planai.service.js.map