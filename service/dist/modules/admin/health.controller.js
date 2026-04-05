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
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_service_1 = require("../../database/prisma.service");
const redis_service_1 = require("../../database/redis.service");
const public_decorator_1 = require("../../common/decorators/public.decorator");
let HealthController = class HealthController {
    constructor(prisma, redis) {
        this.prisma = prisma;
        this.redis = redis;
    }
    async check() {
        const checks = {};
        const pgStart = Date.now();
        try {
            await this.prisma.$queryRaw `SELECT 1`;
            checks.postgres = { status: 'ok', latencyMs: Date.now() - pgStart };
        }
        catch (err) {
            checks.postgres = { status: 'error', error: err.message };
        }
        const redisStart = Date.now();
        try {
            await this.redis.set('health:ping', '1', 5);
            await this.redis.get('health:ping');
            checks.redis = { status: 'ok', latencyMs: Date.now() - redisStart };
        }
        catch (err) {
            checks.redis = { status: 'error', error: err.message };
        }
        const allOk = Object.values(checks).every((c) => c.status === 'ok');
        return {
            status: allOk ? 'ok' : 'degraded',
            service: 'boldmind-api',
            version: process.env.npm_package_version || '1.0.0',
            uptime: Math.floor(process.uptime()),
            checks,
            timestamp: new Date().toISOString(),
        };
    }
    ping() {
        return { pong: true, ts: Date.now() };
    }
};
exports.HealthController = HealthController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Railway healthcheck — returns 200 if healthy' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "check", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('ping'),
    (0, swagger_1.ApiOperation)({ summary: 'Simple ping — no DB check' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "ping", null);
exports.HealthController = HealthController = __decorate([
    (0, swagger_1.ApiTags)('Health'),
    (0, common_1.Controller)('health'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService])
], HealthController);
//# sourceMappingURL=health.controller.js.map