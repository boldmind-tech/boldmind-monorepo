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
exports.SSOTokenDto = exports.VerifyOTPDto = exports.ResetPasswordDto = exports.ForgotPasswordDto = exports.RefreshTokenDto = exports.LoginDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class LoginDto {
}
exports.LoginDto = LoginDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john@example.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SecurePass123!' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
class RefreshTokenDto {
}
exports.RefreshTokenDto = RefreshTokenDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RefreshTokenDto.prototype, "refreshToken", void 0);
class ForgotPasswordDto {
}
exports.ForgotPasswordDto = ForgotPasswordDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john@example.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], ForgotPasswordDto.prototype, "email", void 0);
class ResetPasswordDto {
}
exports.ResetPasswordDto = ResetPasswordDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResetPasswordDto.prototype, "token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ minLength: 8 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(64),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, {
        message: 'Password must contain uppercase, lowercase, number, and special character',
    }),
    __metadata("design:type", String)
], ResetPasswordDto.prototype, "newPassword", void 0);
class VerifyOTPDto {
}
exports.VerifyOTPDto = VerifyOTPDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOTPDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['email_verify', 'phone_verify', 'login'] }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], VerifyOTPDto.prototype, "type", void 0);
class SSOTokenDto {
}
exports.SSOTokenDto = SSOTokenDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SSOTokenDto.prototype, "token", void 0);
//# sourceMappingURL=login.dto.js.map