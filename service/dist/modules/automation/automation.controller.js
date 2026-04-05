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
exports.AutomationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const automation_service_1 = require("./automation.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
let AutomationController = class AutomationController {
    constructor(automationService) {
        this.automationService = automationService;
    }
    schedulePost(userId, dto) {
        return this.automationService.scheduleSocialPost(userId, {
            ...dto,
            scheduledAt: new Date(dto.scheduledAt),
        });
    }
    generateCalendar(userId, dto) {
        return this.automationService.generateContentCalendar(userId, dto);
    }
    bulkCaptions(userId, dto) {
        return this.automationService.bulkGenerateCaptions(userId, dto);
    }
    emailCampaign(userId, dto) {
        return this.automationService.scheduleEmailCampaign(userId, {
            ...dto,
            scheduledAt: dto.scheduledAt ? new Date(dto.scheduledAt) : undefined,
        });
    }
    scrapeEmails(userId, dto) {
        return this.automationService.scrapeEmails(userId, dto);
    }
    verifyEmail(email) {
        return this.automationService.verifyEmail(email);
    }
    trigger(body) {
        return this.automationService.triggerN8NWorkflow(body.workflow, body.payload || {});
    }
    queueStats() {
        return this.automationService.getQueueStats();
    }
};
exports.AutomationController = AutomationController;
__decorate([
    (0, common_1.Post)('social/schedule'),
    (0, swagger_1.ApiOperation)({ summary: 'Schedule a social media post across platforms' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AutomationController.prototype, "schedulePost", null);
__decorate([
    (0, common_1.Post)('social/calendar'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate an AI content calendar' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AutomationController.prototype, "generateCalendar", null);
__decorate([
    (0, common_1.Post)('social/captions'),
    (0, swagger_1.ApiOperation)({ summary: 'Bulk generate captions for posts' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AutomationController.prototype, "bulkCaptions", null);
__decorate([
    (0, common_1.Post)('email/campaign'),
    (0, swagger_1.ApiOperation)({ summary: 'Schedule an email broadcast campaign' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AutomationController.prototype, "emailCampaign", null);
__decorate([
    (0, common_1.Post)('scraper/run'),
    (0, swagger_1.ApiOperation)({ summary: 'Start an email scraping job' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AutomationController.prototype, "scrapeEmails", null);
__decorate([
    (0, common_1.Post)('scraper/verify'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify a single email address' }),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AutomationController.prototype, "verifyEmail", null);
__decorate([
    (0, common_1.Post)('trigger'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN', 'SUPER_ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Manually trigger an n8n workflow (admin)' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AutomationController.prototype, "trigger", null);
__decorate([
    (0, common_1.Get)('queues'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN', 'SUPER_ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Get BullMQ queue statistics (admin)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AutomationController.prototype, "queueStats", null);
exports.AutomationController = AutomationController = __decorate([
    (0, swagger_1.ApiTags)('Automation'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('automation'),
    __metadata("design:paramtypes", [automation_service_1.AutomationService])
], AutomationController);
//# sourceMappingURL=automation.controller.js.map