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
exports.LogMealDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class LogMealDto {
}
exports.LogMealDto = LogMealDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2026-03-04', description: 'Meal date (defaults to today)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LogMealDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'lunch', enum: ['breakfast', 'lunch', 'dinner', 'snack'] }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LogMealDto.prototype, "mealType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Foods consumed', example: [{ name: 'Rice and beans', quantity: '1 plate', calories: 450 }] }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], LogMealDto.prototype, "foods", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 650 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], LogMealDto.prototype, "totalCalories", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 25, description: 'Protein in grams' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LogMealDto.prototype, "protein", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 80, description: 'Carbs in grams' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LogMealDto.prototype, "carbs", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 15, description: 'Fat in grams' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], LogMealDto.prototype, "fat", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Added extra vegetables' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LogMealDto.prototype, "notes", void 0);
//# sourceMappingURL=log-meal.dto.js.map