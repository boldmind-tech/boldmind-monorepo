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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const config_1 = require("@nestjs/config");
const auth_service_1 = require("./auth.service");
const sso_service_1 = require("./sso.service");
const auth_guard_1 = require("./auth.guard");
const roles_guard_1 = require("./roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const auth_dto_1 = require("./dto/auth.dto");
let GoogleAuthGuard = class GoogleAuthGuard extends (0, passport_1.AuthGuard)('google') {
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const res = context.switchToHttp().getResponse();
        const redirect = (req.query['redirect'] || req.query['return_url']);
        if (redirect) {
            res.cookie('oauth_redirect', redirect, {
                maxAge: 5 * 60 * 1000,
                httpOnly: false,
                sameSite: 'lax',
                path: '/',
            });
        }
        return super.canActivate(context);
    }
};
GoogleAuthGuard = __decorate([
    (0, common_1.Injectable)()
], GoogleAuthGuard);
let AuthController = class AuthController {
    constructor(authService, ssoService, configService) {
        this.authService = authService;
        this.ssoService = ssoService;
        this.configService = configService;
        this.hubUrl = this.configService.get('HUB_URL', 'https://boldmind.ng');
    }
    async register(dto, ip, res) {
        const tokens = await this.authService.register(dto, ip);
        this.ssoService.setSsoCookie(res, tokens.accessToken);
        return tokens;
    }
    async login(dto, ip, res) {
        const tokens = await this.authService.login(dto, ip);
        this.ssoService.setSsoCookie(res, tokens.accessToken);
        return tokens;
    }
    refresh(dto) {
        return this.authService.refreshToken(dto);
    }
    async logout(dto, res) {
        await this.authService.logout(dto.refreshToken);
        this.ssoService.clearSsoCookie(res);
    }
    async logoutAll(user, res) {
        await this.authService.logoutAll(user.sub);
        this.ssoService.clearSsoCookie(res);
    }
    getMe(user) {
        return this.authService.getMe(user.sub);
    }
    verifyEmail(dto) {
        return this.authService.verifyOtp({ ...dto, purpose: 'email_verify' });
    }
    forgotPassword(dto) {
        return this.authService.forgotPassword(dto);
    }
    resetPassword(dto) {
        return this.authService.resetPassword(dto);
    }
    changePassword(user, dto) {
        return this.authService.changePassword(user.sub, dto);
    }
    googleAuth() { }
    async googleCallback(req, res) {
        const tokens = req.user;
        this.ssoService.setSsoCookie(res, tokens.accessToken);
        res.clearCookie('oauth_redirect', { path: '/' });
        const redirectTo = tokens.redirectUrl || `${this.hubUrl}/dashboard`;
        return res.redirect(redirectTo);
    }
    updateRole(userId, dto, admin) {
        return this.authService.updateUserRole(userId, dto.role, admin.sub);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Ip)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RegisterDto, String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Ip)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.LoginDto, String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('refresh'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RefreshTokenDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refresh", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RefreshTokenDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('logout-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logoutAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('me'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getMe", null);
__decorate([
    (0, common_1.Post)('verify-email'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.VerifyOtpDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "verifyEmail", null);
__decorate([
    (0, common_1.Post)('forgot-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('change-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, auth_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Get)('google'),
    (0, common_1.UseGuards)(GoogleAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "googleAuth", null);
__decorate([
    (0, common_1.Get)('google/callback'),
    (0, common_1.UseGuards)(GoogleAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleCallback", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin', 'super_admin'),
    (0, common_1.Patch)('users/:id/role'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, auth_dto_1.UpdateRoleDto, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "updateRole", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        sso_service_1.SsoService,
        config_1.ConfigService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map