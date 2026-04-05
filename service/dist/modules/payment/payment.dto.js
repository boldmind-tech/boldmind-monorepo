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
exports.CreateSubscriptionDto = exports.WebhookDto = exports.VerifyPaymentDto = exports.InitializePaymentDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class InitializePaymentDto {
}
exports.InitializePaymentDto = InitializePaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'educenter', description: 'Product slug' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InitializePaymentDto.prototype, "productSlug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 300000, description: 'Amount in kobo (₦3,000 = 300000 kobo)' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(10000),
    __metadata("design:type", Number)
], InitializePaymentDto.prototype, "amountNGN", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'EduCenter Monthly Subscription' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InitializePaymentDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'monthly' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InitializePaymentDto.prototype, "interval", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'https://boldmind.ng/dashboard' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InitializePaymentDto.prototype, "callbackUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], InitializePaymentDto.prototype, "metadata", void 0);
class VerifyPaymentDto {
}
exports.VerifyPaymentDto = VerifyPaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyPaymentDto.prototype, "reference", void 0);
class WebhookDto {
}
exports.WebhookDto = WebhookDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WebhookDto.prototype, "event", void 0);
class CreateSubscriptionDto {
}
exports.CreateSubscriptionDto = CreateSubscriptionDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSubscriptionDto.prototype, "productSlug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSubscriptionDto.prototype, "planName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(10000),
    __metadata("design:type", Number)
], CreateSubscriptionDto.prototype, "amountNGN", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['monthly', 'quarterly', 'annually'] }),
    (0, class_validator_1.IsEnum)(['monthly', 'quarterly', 'annually']),
    __metadata("design:type", String)
], CreateSubscriptionDto.prototype, "interval", void 0);
//# sourceMappingURL=payment.dto.js.map