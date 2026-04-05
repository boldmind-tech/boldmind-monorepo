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
exports.AnalyticsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const user_decorator_1 = require("../../../common/decorators/user.decorator");
const analytics_service_1 = require("./analytics.service");
let AnalyticsController = class AnalyticsController {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    getOverview(user) {
        return this.analyticsService.getUserOverview(user.id);
    }
    generateReport(dto, user) {
        return this.analyticsService.generateAnalyticsReport(dto, user.id);
    }
    getRevenueStats(user, period = '30d') {
        return this.analyticsService.getRevenueStats(user.id, period);
    }
    getGrowthInsights(user) {
        return this.analyticsService.generateGrowthInsights(user.id);
    }
};
exports.AnalyticsController = AnalyticsController;
__decorate([
    (0, common_1.Get)('overview'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "getOverview", null);
__decorate([
    (0, common_1.Post)('report'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "generateReport", null);
__decorate([
    (0, common_1.Get)('revenue'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('period')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "getRevenueStats", null);
__decorate([
    (0, common_1.Get)('growth-insights'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "getGrowthInsights", null);
exports.AnalyticsController = AnalyticsController = __decorate([
    (0, common_1.Controller)('planai/analytics'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [analytics_service_1.AnalyticsReportService])
], AnalyticsController);
//# sourceMappingURL=analytics.controller.js.map