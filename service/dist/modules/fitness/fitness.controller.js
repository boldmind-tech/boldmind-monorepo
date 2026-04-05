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
exports.FitnessController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const fitness_service_1 = require("./fitness.service");
const create_workout_plan_dto_1 = require("./dto/create-workout-plan.dto");
const log_workout_dto_1 = require("./dto/log-workout.dto");
const log_meal_dto_1 = require("./dto/log-meal.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const user_decorator_1 = require("../../common/decorators/user.decorator");
let FitnessController = class FitnessController {
    constructor(fitnessService) {
        this.fitnessService = fitnessService;
    }
    getProfile(userId) {
        return this.fitnessService.getOrCreateProfile(userId);
    }
    updateProfile(userId, data) {
        return this.fitnessService.updateProfile(userId, data);
    }
    generatePlan(userId, dto) {
        return this.fitnessService.generateWorkoutPlan(userId, dto);
    }
    getPlans(userId) {
        return this.fitnessService.getWorkoutPlans(userId);
    }
    getPlan(id, userId) {
        return this.fitnessService.getWorkoutPlan(id, userId);
    }
    logWorkout(userId, dto) {
        return this.fitnessService.logWorkout(userId, dto);
    }
    getWorkoutHistory(userId, page = 1, limit = 20) {
        return this.fitnessService.getWorkoutHistory(userId, +page, +limit);
    }
    logMeal(userId, dto) {
        return this.fitnessService.logMeal(userId, dto);
    }
    getMealHistory(userId, date) {
        return this.fitnessService.getMealHistory(userId, date);
    }
    analyzeMeal(userId, description) {
        return this.fitnessService.analyzeMealFromText(userId, description);
    }
    logMetrics(userId, data) {
        return this.fitnessService.logBodyMetrics(userId, data);
    }
    getMetricsHistory(userId, days = 30) {
        return this.fitnessService.getBodyMetricsHistory(userId, +days);
    }
    getDashboard(userId) {
        return this.fitnessService.getDashboard(userId);
    }
};
exports.FitnessController = FitnessController;
__decorate([
    (0, common_1.Get)('profile'),
    (0, swagger_1.ApiOperation)({ summary: 'Get or create fitness profile' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FitnessController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Patch)('profile'),
    (0, swagger_1.ApiOperation)({ summary: 'Update fitness profile' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FitnessController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Post)('plans/generate'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Generate AI workout plan' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_workout_plan_dto_1.CreateWorkoutPlanDto]),
    __metadata("design:returntype", void 0)
], FitnessController.prototype, "generatePlan", null);
__decorate([
    (0, common_1.Get)('plans'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all workout plans' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FitnessController.prototype, "getPlans", null);
__decorate([
    (0, common_1.Get)('plans/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific workout plan' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FitnessController.prototype, "getPlan", null);
__decorate([
    (0, common_1.Post)('workouts'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Log a workout session' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, log_workout_dto_1.LogWorkoutDto]),
    __metadata("design:returntype", void 0)
], FitnessController.prototype, "logWorkout", null);
__decorate([
    (0, common_1.Get)('workouts'),
    (0, swagger_1.ApiOperation)({ summary: 'Get workout history' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], FitnessController.prototype, "getWorkoutHistory", null);
__decorate([
    (0, common_1.Post)('meals'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Log a meal' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, log_meal_dto_1.LogMealDto]),
    __metadata("design:returntype", void 0)
], FitnessController.prototype, "logMeal", null);
__decorate([
    (0, common_1.Get)('meals'),
    (0, swagger_1.ApiOperation)({ summary: 'Get meal history (optionally by date)' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FitnessController.prototype, "getMealHistory", null);
__decorate([
    (0, common_1.Post)('meals/analyze'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'AI-analyze a meal from text description' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FitnessController.prototype, "analyzeMeal", null);
__decorate([
    (0, common_1.Post)('metrics'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Log body metrics (weight, body fat, etc.)' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FitnessController.prototype, "logMetrics", null);
__decorate([
    (0, common_1.Get)('metrics'),
    (0, swagger_1.ApiOperation)({ summary: 'Get body metrics history' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Query)('days')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FitnessController.prototype, "getMetricsHistory", null);
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, swagger_1.ApiOperation)({ summary: 'Get fitness dashboard with stats' }),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FitnessController.prototype, "getDashboard", null);
exports.FitnessController = FitnessController = __decorate([
    (0, swagger_1.ApiTags)('Fitness'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('fitness'),
    __metadata("design:paramtypes", [fitness_service_1.FitnessService])
], FitnessController);
//# sourceMappingURL=fitness.controller.js.map