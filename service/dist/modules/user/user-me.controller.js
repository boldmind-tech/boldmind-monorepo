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
exports.UserMeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("./user.service");
const user_dto_1 = require("./user.dto");
const auth_guard_1 = require("../auth/auth.guard");
const user_decorator_1 = require("../../common/decorators/user.decorator");
let UserMeController = class UserMeController {
    constructor(userService) {
        this.userService = userService;
    }
    getMyProfile(user) {
        return this.userService.findById(user.sub);
    }
    updateMyProfile(user, dto) {
        return this.userService.updateProfile(user.sub, dto);
    }
    getMyProducts(user) {
        return this.userService.getUserProducts(user.sub);
    }
    completeOnboarding(user, dto) {
        return this.userService.completeOnboarding(user.sub, dto);
    }
    deleteAccount(user) {
        return this.userService.deleteUser(user.sub, user.sub);
    }
};
exports.UserMeController = UserMeController;
__decorate([
    (0, common_1.Get)('profile'),
    (0, swagger_1.ApiOperation)({ summary: 'Get current user profile' }),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserMeController.prototype, "getMyProfile", null);
__decorate([
    (0, common_1.Patch)('profile'),
    (0, swagger_1.ApiOperation)({ summary: 'Update current user profile' }),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.UpdateProfileDto]),
    __metadata("design:returntype", void 0)
], UserMeController.prototype, "updateMyProfile", null);
__decorate([
    (0, common_1.Get)('products'),
    (0, swagger_1.ApiOperation)({ summary: 'Get my active products / subscriptions' }),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserMeController.prototype, "getMyProducts", null);
__decorate([
    (0, common_1.Post)('onboarding'),
    (0, swagger_1.ApiOperation)({ summary: 'Complete onboarding' }),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.OnboardingDto]),
    __metadata("design:returntype", void 0)
], UserMeController.prototype, "completeOnboarding", null);
__decorate([
    (0, common_1.Delete)('account'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete my account (soft delete)' }),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserMeController.prototype, "deleteAccount", null);
exports.UserMeController = UserMeController = __decorate([
    (0, swagger_1.ApiTags)('User (self)'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserMeController);
//# sourceMappingURL=user-me.controller.js.map