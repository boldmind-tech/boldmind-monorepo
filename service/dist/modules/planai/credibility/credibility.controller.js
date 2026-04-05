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
exports.CredibilityController = void 0;
const common_1 = require("@nestjs/common");
const credibility_service_1 = require("./credibility.service");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const user_decorator_1 = require("../../../common/decorators/user.decorator");
let CredibilityController = class CredibilityController {
    constructor(credibilityService) {
        this.credibilityService = credibilityService;
    }
    generatePortfolio(dto, user) {
        return this.credibilityService.generatePortfolio(dto, user.id);
    }
    optimizeLinkedIn(dto) {
        return this.credibilityService.optimizeLinkedIn(dto);
    }
    generateResume(dto, user) {
        return this.credibilityService.generateResume(dto, user.id);
    }
    getPublicPortfolio(userId) {
        return this.credibilityService.getPublicPortfolio(userId);
    }
};
exports.CredibilityController = CredibilityController;
__decorate([
    (0, common_1.Post)('portfolio'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CredibilityController.prototype, "generatePortfolio", null);
__decorate([
    (0, common_1.Post)('linkedin-optimize'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CredibilityController.prototype, "optimizeLinkedIn", null);
__decorate([
    (0, common_1.Post)('resume'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CredibilityController.prototype, "generateResume", null);
__decorate([
    (0, common_1.Get)('portfolio/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CredibilityController.prototype, "getPublicPortfolio", null);
exports.CredibilityController = CredibilityController = __decorate([
    (0, common_1.Controller)('planai/credibility'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [credibility_service_1.CredibilityService])
], CredibilityController);
//# sourceMappingURL=credibility.controller.js.map