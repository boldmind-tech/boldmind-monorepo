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
exports.PlanningController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../auth/auth.guard");
const user_decorator_1 = require("../../../common/decorators/user.decorator");
const planning_service_1 = require("./planning.service");
const all_planai_dto_1 = require("../dto/all-planai.dto");
let PlanningController = class PlanningController {
    constructor(planningService) {
        this.planningService = planningService;
    }
    generatePlan(dto, user) {
        return this.planningService.generateBusinessPlan(dto, user.id);
    }
    generatePitchDeck(dto, user) {
        return this.planningService.generatePitchDeck(dto, user.id);
    }
    listJobs(user, page) {
        return this.planningService.listUserJobs(user.id, page);
    }
    getJob(jobId, user) {
        return this.planningService.getJob(jobId, user.id);
    }
    downloadJob(jobId, user) {
        return this.planningService.getJobDownloadUrl(jobId, user.id);
    }
    getTemplates(industry) {
        return this.planningService.getTemplates(industry);
    }
};
exports.PlanningController = PlanningController;
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [all_planai_dto_1.GenerateBusinessPlanDto, Object]),
    __metadata("design:returntype", void 0)
], PlanningController.prototype, "generatePlan", null);
__decorate([
    (0, common_1.Post)('pitch-deck'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [all_planai_dto_1.GeneratePitchDeckDto, Object]),
    __metadata("design:returntype", void 0)
], PlanningController.prototype, "generatePitchDeck", null);
__decorate([
    (0, common_1.Get)('jobs'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", void 0)
], PlanningController.prototype, "listJobs", null);
__decorate([
    (0, common_1.Get)('jobs/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PlanningController.prototype, "getJob", null);
__decorate([
    (0, common_1.Get)('jobs/:id/download'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PlanningController.prototype, "downloadJob", null);
__decorate([
    (0, common_1.Get)('templates'),
    __param(0, (0, common_1.Query)('industry')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlanningController.prototype, "getTemplates", null);
exports.PlanningController = PlanningController = __decorate([
    (0, common_1.Controller)('planai/planning'),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [planning_service_1.PlanningService])
], PlanningController);
//# sourceMappingURL=planning.controller.js.map