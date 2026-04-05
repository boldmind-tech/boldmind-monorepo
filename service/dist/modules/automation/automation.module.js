"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomationModule = void 0;
const common_1 = require("@nestjs/common");
const bull_1 = require("@nestjs/bull");
const automation_controller_1 = require("./automation.controller");
const automation_service_1 = require("./automation.service");
const social_post_processor_1 = require("./queue/social-post.processor");
const email_campaign_processor_1 = require("./queue/email-campaign.processor");
const ai_jobs_processor_1 = require("./queue/ai-jobs.processor");
let AutomationModule = class AutomationModule {
};
exports.AutomationModule = AutomationModule;
exports.AutomationModule = AutomationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bull_1.BullModule.registerQueue({ name: 'social-posts' }, { name: 'email-campaigns' }, { name: 'ai-jobs' }),
        ],
        controllers: [automation_controller_1.AutomationController],
        providers: [
            automation_service_1.AutomationService,
            social_post_processor_1.SocialPostProcessor,
            email_campaign_processor_1.EmailCampaignProcessor,
            ai_jobs_processor_1.AIJobsProcessor,
        ],
        exports: [automation_service_1.AutomationService],
    })
], AutomationModule);
//# sourceMappingURL=automation.module.js.map