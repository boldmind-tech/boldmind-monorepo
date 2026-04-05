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
exports.EmailScraperController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const emailscraper_service_1 = require("./emailscraper.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const user_decorator_1 = require("../../common/decorators/user.decorator");
class SearchEmailsDto {
}
let EmailScraperController = class EmailScraperController {
    constructor(emailScraperService) {
        this.emailScraperService = emailScraperService;
    }
    searchEmails(dto, user) {
        return this.emailScraperService.searchEmails(dto, user.id);
    }
    verifyEmail(email, user) {
        return this.emailScraperService.verifyEmail(email);
    }
    bulkVerify(emails, user) {
        return this.emailScraperService.bulkVerify(emails, user.id);
    }
    getLeads(user, page, listId, status) {
        return this.emailScraperService.getUserLeads(user.id, page, listId, status);
    }
    exportLeads(user, listId, format = 'csv') {
        return this.emailScraperService.exportLeads(user.id, listId, format);
    }
    createList(dto, user) {
        return this.emailScraperService.createList(dto.name, dto.description, user.id);
    }
    getLists(user) {
        return this.emailScraperService.getUserLists(user.id);
    }
    getScrapeJobs(user) {
        return this.emailScraperService.getUserJobs(user.id);
    }
};
exports.EmailScraperController = EmailScraperController;
__decorate([
    (0, common_1.Post)('search'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Search for emails by domain, company, or industry' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SearchEmailsDto, Object]),
    __metadata("design:returntype", void 0)
], EmailScraperController.prototype, "searchEmails", null);
__decorate([
    (0, common_1.Post)('verify'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Verify a single email address' }),
    __param(0, (0, common_1.Body)('email')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EmailScraperController.prototype, "verifyEmail", null);
__decorate([
    (0, common_1.Post)('bulk-verify'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Bulk verify multiple email addresses' }),
    __param(0, (0, common_1.Body)('emails')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", void 0)
], EmailScraperController.prototype, "bulkVerify", null);
__decorate([
    (0, common_1.Get)('leads'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user leads with pagination and filters' }),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('listId')),
    __param(3, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, String, String]),
    __metadata("design:returntype", void 0)
], EmailScraperController.prototype, "getLeads", null);
__decorate([
    (0, common_1.Get)('leads/export'),
    (0, swagger_1.ApiOperation)({ summary: 'Export leads as CSV or JSON' }),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('listId')),
    __param(2, (0, common_1.Query)('format')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], EmailScraperController.prototype, "exportLeads", null);
__decorate([
    (0, common_1.Post)('lists'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new lead list' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], EmailScraperController.prototype, "createList", null);
__decorate([
    (0, common_1.Get)('lists'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all user lead lists' }),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EmailScraperController.prototype, "getLists", null);
__decorate([
    (0, common_1.Get)('jobs'),
    (0, swagger_1.ApiOperation)({ summary: 'Get recent scrape job history' }),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EmailScraperController.prototype, "getScrapeJobs", null);
exports.EmailScraperController = EmailScraperController = __decorate([
    (0, swagger_1.ApiTags)('Email Scraper'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('planai/emailscraper'),
    __metadata("design:paramtypes", [emailscraper_service_1.EmailScraperService])
], EmailScraperController);
//# sourceMappingURL=emailscraper.controller.js.map