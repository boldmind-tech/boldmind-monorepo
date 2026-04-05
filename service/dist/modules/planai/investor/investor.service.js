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
exports.InvestorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
const ai_service_1 = require("../../ai/ai.service");
const client_1 = require("@prisma/client");
let InvestorService = class InvestorService {
    constructor(prisma, aiService) {
        this.prisma = prisma;
        this.aiService = aiService;
    }
    async generateSAFEAgreement(dto, userId) {
        const response = await this.aiService.generateJson('You are a Nigerian startup lawyer. Generate SAFE agreements compliant with Nigerian law and SEC Nigeria guidelines. Return ONLY valid JSON.', `Generate a SAFE agreement:
Company: ${dto.companyName}, Founder: ${dto.founderName}, Investor: ${dto.investorName}
Investment: ₦${dto.investmentAmountNGN.toLocaleString()}
Valuation Cap: ${dto.valuationCapNGN ? `₦${dto.valuationCapNGN.toLocaleString()}` : 'None'}
Discount Rate: ${dto.discountRate ?? 20}%
Note: Flag any Nigerian SEC compliance issues. Include Lagos State law governing clause.
Return { safeDocument (full text), keyTerms (object summary), warningFlags (array) }`, {
            model: 'gpt-4o',
            maxTokens: 4000,
        });
        const job = await this.prisma.planAIJob.create({
            data: {
                userId, type: client_1.PlanAIJobType.INVESTOR_DECK, status: client_1.PlanAIJobStatus.COMPLETED,
                productSlug: 'investor-readiness', input: dto,
                output: response.content, completedAt: new Date(),
            },
        });
        return { jobId: job.id, ...response.content };
    }
    async setupDataRoom(dto, userId) {
        const checklist = await this.aiService.generateJson('Nigerian startup investment expert. Return ONLY valid JSON.', `Generate a data room document checklist for Nigerian ${dto.stage} stage ${dto.industry} startup "${dto.companyName}".
Include CAC documents, FIRS TIN, employee contracts, IP ownership, financial statements.
Return { sections: [{ name, documents: [{ name, required, description }] }], priorityItems }`, {
            model: 'gpt-4o',
            maxTokens: 1500,
        });
        return checklist.content;
    }
    async getDueDiligenceChecklist(dto) {
        const response = await this.aiService.generateJson('Nigerian VC investor. Return ONLY valid JSON due diligence checklist.', `Due diligence checklist for Nigerian ${dto.stage} ${dto.industry} startup. Include Nigerian-specific items (CAC, FIRS, CBN for fintech, NAFDAC for food, etc).`, {
            model: 'gpt-4o',
            maxTokens: 2000,
        });
        return response.content;
    }
    async generateInvestorUpdate(dto, userId) {
        const response = await this.aiService.chat('You are a startup communications expert. Write compelling investor update emails for Nigerian startups.', `Write a monthly investor update email for ${dto.companyName}:
Period: ${dto.period}
MRR: ₦${dto.mrrNGN.toLocaleString()} (${dto.mrrGrowth > 0 ? '+' : ''}${dto.mrrGrowth}% MoM)
Users: ${dto.userCount.toLocaleString()}
Top wins: ${dto.topWins.join('; ')}
Challenges: ${dto.challenges.join('; ')}
Next month goals: ${dto.nextGoals.join('; ')}`, {
            model: 'gpt-4o',
            maxTokens: 800,
        });
        return { emailBody: response };
    }
};
exports.InvestorService = InvestorService;
exports.InvestorService = InvestorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, ai_service_1.AiService])
], InvestorService);
//# sourceMappingURL=investor.service.js.map