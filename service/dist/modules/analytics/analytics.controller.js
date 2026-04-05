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
const swagger_1 = require("@nestjs/swagger");
const analytics_service_1 = require("./analytics.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const public_decorator_1 = require("../../common/decorators/public.decorator");
let AnalyticsController = class AnalyticsController {
    constructor(analytics) {
        this.analytics = analytics;
    }
    trackEvent(data, req) {
        return this.analytics.trackEvent({
            ...data,
            userAgent: req.headers['user-agent'],
            ip: req.ip,
        });
    }
    trackPageView(data, req) {
        return this.analytics.trackPageView({
            ...data,
            userAgent: req.headers['user-agent'],
            ip: req.ip,
        });
    }
    getDashboard(period = 'week') {
        return this.analytics.getDashboard(period);
    }
    getMyAnalytics(userId, period = 'week') {
        return this.analytics.getUserAnalytics(userId, period);
    }
    getProductUsage(period = 'week') {
        return this.analytics.getProductUsage(period);
    }
};
exports.AnalyticsController = AnalyticsController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('track'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Track an analytics event (public)' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "trackEvent", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('pageview'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Track a page view (public)' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "trackPageView", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN', 'SUPER_ADMIN'),
    (0, common_1.Get)('dashboard'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Get analytics dashboard (admin)' }),
    __param(0, (0, common_1.Query)('period')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('me'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Get my analytics' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Query)('period')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "getMyAnalytics", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN', 'SUPER_ADMIN'),
    (0, common_1.Get)('products'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, swagger_1.ApiOperation)({ summary: 'Get product usage analytics (admin)' }),
    __param(0, (0, common_1.Query)('period')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "getProductUsage", null);
exports.AnalyticsController = AnalyticsController = __decorate([
    (0, swagger_1.ApiTags)('Analytics'),
    (0, common_1.Controller)('analytics'),
    __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
], AnalyticsController);
//# sourceMappingURL=analytics.controller.js.map