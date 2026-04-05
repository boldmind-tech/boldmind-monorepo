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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("./user.service");
const user_dto_1 = require("./user.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    findAll(query) {
        return this.userService.findAll(query);
    }
    dashboard(userId) {
        return this.userService.getUserDashboard(userId);
    }
    findOne(id) {
        return this.userService.findById(id);
    }
    update(id, actorId, dto) {
        return this.userService.updateUser(id, actorId, dto);
    }
    updateProfile(id, userId, dto) {
        return this.userService.updateProfile(userId, dto);
    }
    activity(id, page = 1, limit = 20) {
        return this.userService.getActivityLog(id, +page, +limit);
    }
    ban(id, actorId, reason) {
        return this.userService.banUser(id, reason, actorId);
    }
    completeOnboarding(user, dto) {
        return this.userService.completeOnboarding(user.sub, dto);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN', 'SUPER_ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'List all users (admin)' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserQueryDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, swagger_1.ApiOperation)({ summary: 'Get current user dashboard' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "dashboard", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update user' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/profile'),
    (0, swagger_1.ApiOperation)({ summary: 'Update user profile' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, user_dto_1.UpdateProfileDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Get)(':id/activity'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user activity log' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "activity", null);
__decorate([
    (0, common_1.Delete)(':id/ban'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN', 'SUPER_ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Ban a user (admin)' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __param(2, (0, common_1.Body)('reason')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "ban", null);
__decorate([
    (0, common_1.Post)('onboarding'),
    (0, swagger_1.ApiOperation)({ summary: 'Complete user onboarding' }),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.OnboardingDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "completeOnboarding", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map