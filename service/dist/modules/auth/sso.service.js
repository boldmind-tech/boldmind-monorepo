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
exports.SsoService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const SSO_COOKIE_NAME = 'boldmind_sso';
let SsoService = class SsoService {
    constructor(config) {
        this.config = config;
        this.isProd = this.config.get('NODE_ENV') === 'production';
        this.cookieDomain = this.isProd ? '.boldmind.ng' : 'localhost';
    }
    setSsoCookie(res, accessToken) {
        res.cookie(SSO_COOKIE_NAME, accessToken, {
            httpOnly: true,
            secure: this.isProd,
            sameSite: this.isProd ? 'none' : 'lax',
            domain: this.cookieDomain,
            maxAge: 15 * 60 * 1000,
            path: '/',
        });
    }
    clearSsoCookie(res) {
        res.clearCookie(SSO_COOKIE_NAME, {
            domain: this.cookieDomain,
            path: '/',
        });
    }
};
exports.SsoService = SsoService;
exports.SsoService = SsoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SsoService);
//# sourceMappingURL=sso.service.js.map