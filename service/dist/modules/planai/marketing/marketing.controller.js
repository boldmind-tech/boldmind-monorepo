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
exports.MarketingController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const user_decorator_1 = require("../../../common/decorators/user.decorator");
const marketing_service_1 = require("./marketing.service");
const create_email_campaign_dto_1 = require("./dto/create-email-campaign.dto");
const create_broadcast_dto_1 = require("./dto/create-broadcast.dto");
let MarketingController = class MarketingController {
    constructor(marketingService) {
        this.marketingService = marketingService;
    }
    createEmailCampaign(dto, user) {
        return this.marketingService.createEmailCampaign(dto, user.id);
    }
    sendCampaign(id, user) {
        return this.marketingService.sendCampaign(id, user.id);
    }
    generateSubjectLines(dto) {
        return this.marketingService.generateSubjectLines(dto);
    }
    generateEmailCopy(dto) {
        return this.marketingService.generateEmailCopy(dto);
    }
    createWhatsappBroadcast(dto, user) {
        return this.marketingService.createWhatsappBroadcast(dto, user.id);
    }
    getCampaignAnalytics(id, user) {
        return this.marketingService.getCampaignAnalytics(id, user.id);
    }
};
exports.MarketingController = MarketingController;
__decorate([
    (0, common_1.Post)('campaign/email'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_email_campaign_dto_1.CreateEmailCampaignDto, Object]),
    __metadata("design:returntype", void 0)
], MarketingController.prototype, "createEmailCampaign", null);
__decorate([
    (0, common_1.Post)('campaign/:id/send'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MarketingController.prototype, "sendCampaign", null);
__decorate([
    (0, common_1.Post)('generate/subject-lines'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MarketingController.prototype, "generateSubjectLines", null);
__decorate([
    (0, common_1.Post)('generate/email-copy'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MarketingController.prototype, "generateEmailCopy", null);
__decorate([
    (0, common_1.Post)('whatsapp/broadcast'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_broadcast_dto_1.CreateBroadcastDto, Object]),
    __metadata("design:returntype", void 0)
], MarketingController.prototype, "createWhatsappBroadcast", null);
__decorate([
    (0, common_1.Get)('analytics/:campaignId'),
    __param(0, (0, common_1.Param)('campaignId')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MarketingController.prototype, "getCampaignAnalytics", null);
exports.MarketingController = MarketingController = __decorate([
    (0, common_1.Controller)('planai/marketing'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [marketing_service_1.MarketingService])
], MarketingController);
//# sourceMappingURL=marketing.controller.js.map