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
var FinancialService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
const ai_service_1 = require("../../ai/ai.service");
const redis_service_1 = require("../../../database/redis.service");
const client_1 = require("@prisma/client");
const FORECAST_PROMPT = `You are a Nigerian financial analyst specialising in SME cashflow modeling.
Generate a detailed 12-month financial forecast in JSON. Use Naira (NGN) amounts. Account for:
- Nigerian inflation (~30% annual)
- Naira/Dollar FX volatility
- Seasonal demand patterns (e.g., December/January peaks, Ramadan)
- Nigerian public holidays impact
- Bank charges and Paystack fees (1.5% + ₦100)

Return ONLY valid JSON:
{
  "summary": { "totalRevenue": number, "totalExpenses": number, "netProfit": number, "profitMargin": number },
  "months": [
    {
      "month": "Jan 2026",
      "revenue": number,
      "expenses": { "salaries": number, "rent": number, "marketing": number, "operations": number, "other": number, "total": number },
      "grossProfit": number,
      "netProfit": number,
      "cashBalance": number,
      "notes": "string"
    }
  ],
  "keyInsights": ["string"],
  "cashflowWarnings": ["string"],
  "recommendations": ["string"]
}`;
let FinancialService = FinancialService_1 = class FinancialService {
    constructor(prisma, aiService, redis) {
        this.prisma = prisma;
        this.aiService = aiService;
        this.redis = redis;
        this.logger = new common_1.Logger(FinancialService_1.name);
    }
    async generateForecast(dto, userId) {
        const userPrompt = `
Business: ${dto.businessName}
Industry: ${dto.industry}
Current Monthly Revenue: ₦${dto.currentMonthlyRevenue.toLocaleString()}
Expected Monthly Growth: ${dto.expectedGrowthPercent}%
Fixed Monthly Expenses: ₦${dto.fixedExpensesNGN.toLocaleString()}
Variable Cost Percentage: ${dto.variableCostPercent}%
Starting Cash Balance: ₦${dto.startingCashNGN.toLocaleString()}
Revenue Sources: ${dto.revenueSources.join(', ')}
Upcoming Major Expenses: ${dto.upcomingExpenses ?? 'None'}
Business Context: ${dto.context ?? 'Nigerian SME'}

Generate a 12-month financial forecast with monthly cashflow projections.`;
        const response = await this.aiService.generateJson(FORECAST_PROMPT, userPrompt, {
            model: 'gpt-4o',
            maxTokens: 4000,
        });
        const job = await this.prisma.planAIJob.create({
            data: {
                userId,
                type: client_1.PlanAIJobType.FINANCIAL_FORECAST,
                status: client_1.PlanAIJobStatus.COMPLETED,
                productSlug: 'financial-forecasting',
                input: dto,
                output: response.content,
                modelUsed: 'gpt-4o',
                completedAt: new Date(),
            },
        });
        return { jobId: job.id, output: response.content };
    }
    async runScenarioAnalysis(dto, userId) {
        const prompt = `Run best/base/worst case scenario analysis for a Nigerian business.
Base input: ${JSON.stringify(dto)}

Return ONLY valid JSON:
{
  "baseCase": { "year1Revenue": number, "year2Revenue": number, "year3Revenue": number, "assumptions": [] },
  "bestCase": { "year1Revenue": number, "year2Revenue": number, "year3Revenue": number, "assumptions": [] },
  "worstCase": { "year1Revenue": number, "year2Revenue": number, "year3Revenue": number, "assumptions": [] },
  "fxImpact": { "ngnStrengthens": "string", "ngnWeakens": "string" },
  "breakEvenPoint": { "baseCase": number, "bestCase": number, "worstCase": number }
}`;
        const response = await this.aiService.generateJson('You are a Nigerian financial scenario analyst.', prompt, {
            model: 'gpt-4o',
            maxTokens: 2000,
        });
        return { scenarios: response.content };
    }
    calculateBreakEven(dto) {
        const { fixedCostsNGN, variableCostPerUnit, pricePerUnit, currentUnits } = dto;
        if (pricePerUnit <= variableCostPerUnit) {
            return { error: 'Price per unit must be greater than variable cost per unit' };
        }
        const contributionMargin = pricePerUnit - variableCostPerUnit;
        const breakEvenUnits = Math.ceil(fixedCostsNGN / contributionMargin);
        const breakEvenRevenueNGN = breakEvenUnits * pricePerUnit;
        const currentRevenue = (currentUnits ?? 0) * pricePerUnit;
        const marginOfSafetyPercent = currentUnits
            ? Math.round(((currentUnits - breakEvenUnits) / currentUnits) * 100)
            : null;
        const monthsToBreakEven = currentUnits && currentUnits > 0
            ? Math.ceil(breakEvenUnits / currentUnits)
            : null;
        return {
            breakEvenUnits,
            breakEvenRevenueNGN,
            contributionMarginNGN: contributionMargin,
            contributionMarginPercent: Math.round((contributionMargin / pricePerUnit) * 100),
            currentRevenueNGN: currentRevenue,
            marginOfSafetyPercent,
            monthsToBreakEven,
        };
    }
    async listUserForecasts(userId, page) {
        const limit = 10;
        const [jobs, total] = await Promise.all([
            this.prisma.planAIJob.findMany({
                where: { userId, type: client_1.PlanAIJobType.FINANCIAL_FORECAST },
                select: { id: true, status: true, createdAt: true, completedAt: true, input: true },
                orderBy: { createdAt: 'desc' },
                skip: (page - 1) * limit,
                take: limit,
            }),
            this.prisma.planAIJob.count({ where: { userId, type: client_1.PlanAIJobType.FINANCIAL_FORECAST } }),
        ]);
        return { data: jobs, meta: { total, page, limit } };
    }
    async getForecast(jobId, userId) {
        const job = await this.prisma.planAIJob.findFirst({ where: { id: jobId, userId } });
        if (!job)
            throw new common_1.NotFoundException('Forecast not found');
        return job;
    }
    async getCurrentExchangeRate() {
        const cacheKey = 'fx:usd_ngn';
        const cached = await this.redis.get(cacheKey);
        if (cached)
            return JSON.parse(cached);
        const rate = { usdToNgn: 1580, gbpToNgn: 2010, eurToNgn: 1720, source: 'parallel_market', fetchedAt: new Date() };
        await this.redis.setex(cacheKey, 3600, JSON.stringify(rate));
        return rate;
    }
};
exports.FinancialService = FinancialService;
exports.FinancialService = FinancialService = FinancialService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        ai_service_1.AiService,
        redis_service_1.RedisService])
], FinancialService);
//# sourceMappingURL=financial.service.js.map