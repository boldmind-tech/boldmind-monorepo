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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanAIController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const planai_service_1 = require("./planai.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const user_decorator_1 = require("../../common/decorators/user.decorator");
let PlanAIController = class PlanAIController {
    constructor(planaiService) {
        this.planaiService = planaiService;
    }
    getJobs(userId, tool, page = 1, limit = 20) {
        return this.planaiService.getUserJobs(userId, tool, +page, +limit);
    }
    getJob(id, userId) {
        return this.planaiService.getJob(id, userId);
    }
    businessPlan(userId, body) {
        return this.planaiService.generateBusinessPlan(userId, body);
    }
    financeForecast(userId, body) {
        return this.planaiService.generateFinancialForecast(userId, body);
    }
    brandKit(userId, body) {
        return this.planaiService.generateBrandKit(userId, body);
    }
    marketingCopy(userId, body) {
        return this.planaiService.generateMarketingCopy(userId, body);
    }
    credibility(userId, body) {
        return this.planaiService.generateCredibilityContent(userId, body);
    }
    investor(userId, body) {
        return this.planaiService.generateInvestorDocs(userId, body);
    }
    hr(userId, body) {
        return this.planaiService.generateHRContent(userId, body);
    }
    legal(userId, body) {
        return this.planaiService.generateLegalTemplate(userId, body);
    }
    storeContent(userId, body) {
        return this.planaiService.generateStorefrontContent(userId, body);
    }
    analyticsInsights(userId, body) {
        return this.planaiService.generateAnalyticsInsights(userId, body);
    }
    operations(userId, body) {
        return this.planaiService.generateOperationsDoc(userId, body);
    }
    enrichLeads(userId, body) {
        return this.planaiService.enrichLeadData(userId, body.leads);
    }
};
exports.PlanAIController = PlanAIController;
__decorate([
    (0, common_1.Get)('jobs'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all PlanAI jobs for current user' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Query)('tool')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", void 0)
], PlanAIController.prototype, "getJobs", null);
__decorate([
    (0, common_1.Get)('jobs/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific PlanAI job result' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PlanAIController.prototype, "getJob", null);
__decorate([
    (0, common_1.Post)('planning'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate a bank-ready Nigerian business plan' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PlanAIController.prototype, "businessPlan", null);
__decorate([
    (0, common_1.Post)('finance'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate 12-month financial forecast' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PlanAIController.prototype, "financeForecast", null);
__decorate([
    (0, common_1.Post)('branding'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate brand kit + optional AI logo' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PlanAIController.prototype, "brandKit", null);
__decorate([
    (0, common_1.Post)('marketing'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate marketing copy for any platform' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PlanAIController.prototype, "marketingCopy", null);
__decorate([
    (0, common_1.Post)('credibility'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate LinkedIn profile, resume, portfolio content' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PlanAIController.prototype, "credibility", null);
__decorate([
    (0, common_1.Post)('investor'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate investor docs, pitch deck content, SAFE' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PlanAIController.prototype, "investor", null);
__decorate([
    (0, common_1.Post)('hr'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate HR documents for Nigerian businesses' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PlanAIController.prototype, "hr", null);
__decorate([
    (0, common_1.Post)('legal'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate Nigerian-law legal templates' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PlanAIController.prototype, "legal", null);
__decorate([
    (0, common_1.Post)('store/content'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate product descriptions and store copy' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PlanAIController.prototype, "storeContent", null);
__decorate([
    (0, common_1.Post)('analytics/insights'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate AI insights from your analytics metrics' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PlanAIController.prototype, "analyticsInsights", null);
__decorate([
    (0, common_1.Post)('operations'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate SOPs, KPI frameworks, org charts' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PlanAIController.prototype, "operations", null);
__decorate([
    (0, common_1.Post)('emailscraper/enrich'),
    (0, swagger_1.ApiOperation)({ summary: 'AI-enrich scraped email leads' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PlanAIController.prototype, "enrichLeads", null);
exports.PlanAIController = PlanAIController = __decorate([
    (0, swagger_1.ApiTags)('PlanAI'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('planai'),
    __metadata("design:paramtypes", [planai_service_1.PlanAIService])
], PlanAIController);
//# sourceMappingURL=planai.controller.js.map