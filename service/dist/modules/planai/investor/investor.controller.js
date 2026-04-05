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
exports.InvestorController = void 0;
const common_1 = require("@nestjs/common");
const investor_service_1 = require("./investor.service");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const user_decorator_1 = require("../../../common/decorators/user.decorator");
let InvestorController = class InvestorController {
    constructor(investorService) {
        this.investorService = investorService;
    }
    generateSAFE(dto, user) {
        return this.investorService.generateSAFEAgreement(dto, user.id);
    }
    setupDataRoom(dto, user) {
        return this.investorService.setupDataRoom(dto, user.id);
    }
    getDueDiligence(dto) {
        return this.investorService.getDueDiligenceChecklist(dto);
    }
    generateInvestorUpdate(dto, user) {
        return this.investorService.generateInvestorUpdate(dto, user.id);
    }
};
exports.InvestorController = InvestorController;
__decorate([
    (0, common_1.Post)('safe-agreement'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], InvestorController.prototype, "generateSAFE", null);
__decorate([
    (0, common_1.Post)('data-room'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], InvestorController.prototype, "setupDataRoom", null);
__decorate([
    (0, common_1.Post)('due-diligence-checklist'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InvestorController.prototype, "getDueDiligence", null);
__decorate([
    (0, common_1.Post)('investor-update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], InvestorController.prototype, "generateInvestorUpdate", null);
exports.InvestorController = InvestorController = __decorate([
    (0, common_1.Controller)('planai/investor'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [investor_service_1.InvestorService])
], InvestorController);
//# sourceMappingURL=investor.controller.js.map