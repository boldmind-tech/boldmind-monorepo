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
exports.LogWorkoutDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class LogWorkoutDto {
}
exports.LogWorkoutDto = LogWorkoutDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Associated workout plan ID' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LogWorkoutDto.prototype, "planId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2026-03-04', description: 'Workout date (defaults to today)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LogWorkoutDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Exercises performed', example: [{ name: 'Push-ups', sets: 3, reps: 15 }] }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], LogWorkoutDto.prototype, "exercises", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 45 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], LogWorkoutDto.prototype, "durationMinutes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 300 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], LogWorkoutDto.prototype, "caloriesBurned", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Felt strong today' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LogWorkoutDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'great', enum: ['terrible', 'bad', 'okay', 'good', 'great'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LogWorkoutDto.prototype, "mood", void 0);
//# sourceMappingURL=log-workout.dto.js.map