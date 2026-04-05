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
exports.HubController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const hub_service_1 = require("./hub.service");
const auth_guard_1 = require("../auth/auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const user_decorator_1 = require("../../common/decorators/user.decorator");
let HubController = class HubController {
    constructor(hubService) {
        this.hubService = hubService;
    }
    getProducts() {
        return this.hubService.getProducts();
    }
    getPricing() {
        return this.hubService.getPricing();
    }
    getDashboardStats() {
        return this.hubService.getDashboardStats();
    }
    getTeam() {
        return this.hubService.getTeam();
    }
    inviteTeamMember(body, user) {
        return this.hubService.inviteTeamMember(body.email, body.role, user.sub);
    }
    removeTeamMember(userId, actor) {
        return this.hubService.removeTeamMember(userId, actor.sub);
    }
};
exports.HubController = HubController;
__decorate([
    (0, common_1.Get)('products'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all ecosystem products' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HubController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)('pricing'),
    (0, swagger_1.ApiOperation)({ summary: 'Get pricing plans' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HubController.prototype, "getPricing", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Get)('dashboard'),
    (0, swagger_1.ApiOperation)({ summary: 'Get hub dashboard stats' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HubController.prototype, "getDashboardStats", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'super_admin', 'manager'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Get)('team'),
    (0, swagger_1.ApiOperation)({ summary: 'Get team members' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HubController.prototype, "getTeam", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'super_admin'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Post)('team/invite'),
    (0, swagger_1.ApiOperation)({ summary: 'Invite a team member' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], HubController.prototype, "inviteTeamMember", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'super_admin'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Delete)('team/:userId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a team member' }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], HubController.prototype, "removeTeamMember", null);
exports.HubController = HubController = __decorate([
    (0, swagger_1.ApiTags)('Hub'),
    (0, common_1.Controller)('hub'),
    __metadata("design:paramtypes", [hub_service_1.HubService])
], HubController);
//# sourceMappingURL=hub.controller.js.map