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
exports.CreateReceptionistDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateReceptionistDto {
}
exports.CreateReceptionistDto = CreateReceptionistDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'My Awesome Business' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateReceptionistDto.prototype, "businessName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'friendly and professional' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReceptionistDto.prototype, "tone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Nigerian business' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReceptionistDto.prototype, "businessType", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Hello! How can I help you today?' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReceptionistDto.prototype, "greeting", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Knowledge base object containing FAQs' }),
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateReceptionistDto.prototype, "knowledgeBase", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: ['manager', 'human', 'complaint', 'supervisor'] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateReceptionistDto.prototype, "escalationTriggers", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Facebook Page ID' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReceptionistDto.prototype, "pageId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Instagram Business ID' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReceptionistDto.prototype, "igBusinessId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'WhatsApp Phone Number ID' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReceptionistDto.prototype, "waPhoneNumberId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Meta App Access Token' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateReceptionistDto.prototype, "accessToken", void 0);
//# sourceMappingURL=create-receptionist.dto.js.map