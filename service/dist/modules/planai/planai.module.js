"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanAIModule = void 0;
const common_1 = require("@nestjs/common");
const bull_1 = require("@nestjs/bull");
const bullmq_1 = require("@nestjs/bullmq");
const axios_1 = require("@nestjs/axios");
const planai_controller_1 = require("./planai.controller");
const planai_service_1 = require("./planai.service");
const planai_processor_1 = require("./planai.processor");
const receptionist_controller_1 = require("./receptionist/receptionist.controller");
const receptionist_service_1 = require("./receptionist/receptionist.service");
const metawebhook_service_1 = require("./receptionist/metawebhook.service");
const credibility_controller_1 = require("./credibility/credibility.controller");
const credibility_service_1 = require("./credibility/credibility.service");
const financial_controller_1 = require("./financial/financial.controller");
const financial_service_1 = require("./financial/financial.service");
const analytics_controller_1 = require("./analytics/analytics.controller");
const analytics_service_1 = require("./analytics/analytics.service");
const branding_controller_1 = require("./branding/branding.controller");
const branding_service_1 = require("./branding/branding.service");
const planning_controller_1 = require("./business-planning/planning.controller");
const planning_service_1 = require("./business-planning/planning.service");
const investor_controller_1 = require("./investor/investor.controller");
const investor_service_1 = require("./investor/investor.service");
const marketing_controller_1 = require("./marketing/marketing.controller");
const marketing_service_1 = require("./marketing/marketing.service");
const storefronts_controller_1 = require("./storefronts/storefronts.controller");
const storefronts_service_1 = require("./storefronts/storefronts.service");
let PlanAIModule = class PlanAIModule {
};
exports.PlanAIModule = PlanAIModule;
exports.PlanAIModule = PlanAIModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bull_1.BullModule.registerQueue({ name: 'planai-jobs' }),
            bullmq_1.BullModule.registerQueue({ name: 'receptionist' }),
            axios_1.HttpModule,
        ],
        controllers: [
            planai_controller_1.PlanAIController,
            receptionist_controller_1.ReceptionistController,
            credibility_controller_1.CredibilityController,
            financial_controller_1.FinancialController,
            analytics_controller_1.AnalyticsController,
            branding_controller_1.BrandingController,
            planning_controller_1.PlanningController,
            investor_controller_1.InvestorController,
            marketing_controller_1.MarketingController,
            storefronts_controller_1.StorefrontsController,
        ],
        providers: [
            planai_service_1.PlanAIService,
            planai_processor_1.PlanAIProcessor,
            receptionist_service_1.ReceptionistService,
            metawebhook_service_1.MetaWebhookService,
            credibility_service_1.CredibilityService,
            financial_service_1.FinancialService,
            analytics_service_1.AnalyticsReportService,
            branding_service_1.BrandingService,
            planning_service_1.PlanningService,
            investor_service_1.InvestorService,
            marketing_service_1.MarketingService,
            storefronts_service_1.StorefrontsService,
        ],
        exports: [planai_service_1.PlanAIService, metawebhook_service_1.MetaWebhookService],
    })
], PlanAIModule);
//# sourceMappingURL=planai.module.js.map