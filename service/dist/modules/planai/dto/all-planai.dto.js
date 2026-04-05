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
exports.GenerateColorPaletteDto = exports.GenerateFlyerDto = exports.GenerateBrandKitDto = exports.GenerateLogoDto = exports.CalculateBreakEvenDto = exports.GenerateScenarioDto = exports.GenerateForecastDto = exports.GeneratePitchDeckDto = exports.GenerateBusinessPlanDto = void 0;
const class_validator_1 = require("class-validator");
class GenerateBusinessPlanDto {
}
exports.GenerateBusinessPlanDto = GenerateBusinessPlanDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateBusinessPlanDto.prototype, "businessName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateBusinessPlanDto.prototype, "industry", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateBusinessPlanDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateBusinessPlanDto.prototype, "targetCustomers", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateBusinessPlanDto.prototype, "productsServices", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateBusinessPlanDto.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], GenerateBusinessPlanDto.prototype, "initialCapitalNGN", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], GenerateBusinessPlanDto.prototype, "fundingNeeded", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateBusinessPlanDto.prototype, "additionalContext", void 0);
class GeneratePitchDeckDto {
}
exports.GeneratePitchDeckDto = GeneratePitchDeckDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GeneratePitchDeckDto.prototype, "businessName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GeneratePitchDeckDto.prototype, "industry", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GeneratePitchDeckDto.prototype, "problemStatement", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GeneratePitchDeckDto.prototype, "solution", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GeneratePitchDeckDto.prototype, "teamBackground", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GeneratePitchDeckDto.prototype, "traction", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], GeneratePitchDeckDto.prototype, "fundingAskNGN", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GeneratePitchDeckDto.prototype, "targetMarket", void 0);
class GenerateForecastDto {
}
exports.GenerateForecastDto = GenerateForecastDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateForecastDto.prototype, "businessName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateForecastDto.prototype, "industry", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], GenerateForecastDto.prototype, "currentMonthlyRevenue", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(500),
    __metadata("design:type", Number)
], GenerateForecastDto.prototype, "expectedGrowthPercent", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], GenerateForecastDto.prototype, "fixedExpensesNGN", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], GenerateForecastDto.prototype, "variableCostPercent", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], GenerateForecastDto.prototype, "startingCashNGN", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], GenerateForecastDto.prototype, "revenueSources", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateForecastDto.prototype, "upcomingExpenses", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateForecastDto.prototype, "context", void 0);
class GenerateScenarioDto {
}
exports.GenerateScenarioDto = GenerateScenarioDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateScenarioDto.prototype, "businessName", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GenerateScenarioDto.prototype, "baseRevenue", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GenerateScenarioDto.prototype, "growthRate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GenerateScenarioDto.prototype, "fixedCosts", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateScenarioDto.prototype, "industry", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateScenarioDto.prototype, "risks", void 0);
class CalculateBreakEvenDto {
}
exports.CalculateBreakEvenDto = CalculateBreakEvenDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CalculateBreakEvenDto.prototype, "fixedCostsNGN", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CalculateBreakEvenDto.prototype, "variableCostPerUnit", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CalculateBreakEvenDto.prototype, "pricePerUnit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CalculateBreakEvenDto.prototype, "currentUnits", void 0);
class GenerateLogoDto {
}
exports.GenerateLogoDto = GenerateLogoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateLogoDto.prototype, "businessName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateLogoDto.prototype, "industry", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['modern', 'traditional', 'playful', 'luxury']),
    __metadata("design:type", String)
], GenerateLogoDto.prototype, "style", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], GenerateLogoDto.prototype, "colors", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateLogoDto.prototype, "additionalInstructions", void 0);
class GenerateBrandKitDto {
}
exports.GenerateBrandKitDto = GenerateBrandKitDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateBrandKitDto.prototype, "businessName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateBrandKitDto.prototype, "industry", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateBrandKitDto.prototype, "targetAudience", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], GenerateBrandKitDto.prototype, "brandValues", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateBrandKitDto.prototype, "style", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateBrandKitDto.prototype, "inspiration", void 0);
class GenerateFlyerDto {
}
exports.GenerateFlyerDto = GenerateFlyerDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateFlyerDto.prototype, "businessName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateFlyerDto.prototype, "offerText", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateFlyerDto.prototype, "callToAction", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateFlyerDto.prototype, "contact", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateFlyerDto.prototype, "style", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateFlyerDto.prototype, "colors", void 0);
class GenerateColorPaletteDto {
}
exports.GenerateColorPaletteDto = GenerateColorPaletteDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateColorPaletteDto.prototype, "industry", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateColorPaletteDto.prototype, "targetAudience", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateColorPaletteDto.prototype, "mood", void 0);
//# sourceMappingURL=all-planai.dto.js.map