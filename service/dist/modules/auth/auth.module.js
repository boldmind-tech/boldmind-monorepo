"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const config_1 = require("@nestjs/config");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const sso_service_1 = require("./sso.service");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const google_strategy_1 = require("./strategies/google.strategy");
const auth_guard_1 = require("./auth.guard");
const roles_guard_1 = require("./roles.guard");
const permissions_guard_1 = require("./permissions.guard");
const prisma_service_1 = require("../../database/prisma.service");
const redis_service_1 = require("../../database/redis.service");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    secret: config.getOrThrow('JWT_SECRET'),
                    signOptions: { expiresIn: config.get('JWT_EXPIRES_IN', '15m') },
                }),
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            sso_service_1.SsoService,
            jwt_strategy_1.JwtStrategy,
            google_strategy_1.GoogleStrategy,
            auth_guard_1.JwtAuthGuard,
            roles_guard_1.RolesGuard,
            permissions_guard_1.PermissionsGuard,
            prisma_service_1.PrismaService,
            redis_service_1.RedisService,
        ],
        exports: [auth_service_1.AuthService, auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, permissions_guard_1.PermissionsGuard, jwt_1.JwtModule],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map