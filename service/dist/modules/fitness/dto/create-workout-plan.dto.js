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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkoutPlanDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateWorkoutPlanDto {
}
exports.CreateWorkoutPlanDto = CreateWorkoutPlanDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4, description: 'Plan duration in weeks' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(52),
    __metadata("design:type", Number)
], CreateWorkoutPlanDto.prototype, "durationWeeks", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'LOSE_WEIGHT', enum: ['LOSE_WEIGHT', 'BUILD_MUSCLE', 'MAINTAIN', 'IMPROVE_ENDURANCE'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWorkoutPlanDto.prototype, "goal", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 4, default: 4, description: 'Workout days per week' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(7),
    __metadata("design:type", Number)
], CreateWorkoutPlanDto.prototype, "daysPerWeek", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'moderate', enum: ['beginner', 'moderate', 'advanced'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateWorkoutPlanDto.prototype, "activityLevel", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: ['dumbbells', 'barbell', 'resistance_bands'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateWorkoutPlanDto.prototype, "equipment", void 0);
//# sourceMappingURL=create-workout-plan.dto.js.map