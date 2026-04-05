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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_service_1 = require("./admin.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    getStats() {
        return this.adminService.getDashboardStats();
    }
    users(query) {
        return this.adminService.getFullUserList(query);
    }
    updateRole(id, actorId, role) {
        return this.adminService.updateUserRole(id, role, actorId);
    }
    revenue(period = 'month') {
        return this.adminService.getRevenueReport(period);
    }
    waitlist() {
        return this.adminService.getWaitlistStats();
    }
    invite(slug, count = 10) {
        return this.adminService.inviteFromWaitlist(slug, +count);
    }
    logs(page = 1, limit = 50) {
        return this.adminService.getAdminLogs(+page, +limit);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get full ecosystem dashboard stats' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)('users'),
    (0, swagger_1.ApiOperation)({ summary: 'Get full user list with filters' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "users", null);
__decorate([
    (0, common_1.Patch)('users/:id/role'),
    (0, swagger_1.ApiOperation)({ summary: 'Update user role' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Body)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateRole", null);
__decorate([
    (0, common_1.Get)('revenue'),
    (0, swagger_1.ApiOperation)({ summary: 'Get revenue report for a period' }),
    __param(0, (0, common_1.Query)('period')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "revenue", null);
__decorate([
    (0, common_1.Get)('waitlist'),
    (0, swagger_1.ApiOperation)({ summary: 'Get waitlist stats per product' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "waitlist", null);
__decorate([
    (0, common_1.Post)('waitlist/:productSlug/invite'),
    (0, swagger_1.ApiOperation)({ summary: 'Invite next N users from a product waitlist' }),
    __param(0, (0, common_1.Param)('productSlug')),
    __param(1, (0, common_1.Body)('count')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "invite", null);
__decorate([
    (0, common_1.Get)('logs'),
    (0, swagger_1.ApiOperation)({ summary: 'Get admin audit log' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "logs", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN', 'SUPER_ADMIN'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map