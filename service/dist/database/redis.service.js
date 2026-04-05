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
var RedisService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const ioredis_1 = require("ioredis");
let RedisService = RedisService_1 = class RedisService {
    constructor(config) {
        this.config = config;
        this.logger = new common_1.Logger(RedisService_1.name);
    }
    async onModuleInit() {
        let redisUrl = this.config.get('REDIS_URL');
        if (redisUrl && redisUrl.includes('-u ')) {
            redisUrl = redisUrl.split('-u ')[1].split(' ')[0];
        }
        const options = {
            maxRetriesPerRequest: 3,
            enableReadyCheck: false,
            lazyConnect: true,
        };
        if (redisUrl && (redisUrl.startsWith('rediss://') || redisUrl.includes('.upstash.io'))) {
            options.tls = { rejectUnauthorized: false };
        }
        this.client = new ioredis_1.default(redisUrl, options);
        this.client.on('connect', () => this.logger.log('Redis connected (Upstash)'));
        this.client.on('error', (err) => this.logger.error('Redis error:', err.message));
        await this.client.connect();
    }
    async onModuleDestroy() {
        await this.client.quit();
    }
    async get(key) {
        return this.client.get(key);
    }
    async set(key, value, ttlSeconds) {
        if (ttlSeconds) {
            await this.client.setex(key, ttlSeconds, value);
        }
        else {
            await this.client.set(key, value);
        }
    }
    async setex(key, ttlSeconds, value) {
        await this.client.setex(key, ttlSeconds, value);
    }
    async del(...keys) {
        await this.client.del(...keys);
    }
    async exists(key) {
        return (await this.client.exists(key)) === 1;
    }
    async incr(key) {
        return this.client.incr(key);
    }
    async expire(key, ttlSeconds) {
        await this.client.expire(key, ttlSeconds);
    }
    async hset(key, field, value) {
        await this.client.hset(key, field, value);
    }
    async hget(key, field) {
        return this.client.hget(key, field);
    }
    async hgetall(key) {
        return this.client.hgetall(key);
    }
    async keys(pattern) {
        return this.client.keys(pattern);
    }
    async cache(key, fetchFn, ttlSeconds = 300) {
        const cached = await this.get(key);
        if (cached) {
            return JSON.parse(cached);
        }
        const data = await fetchFn();
        await this.setex(key, ttlSeconds, JSON.stringify(data));
        return data;
    }
    async storeSSOToken(token, userId, ttlSeconds = 300) {
        await this.setex(`sso:${token}`, ttlSeconds, userId);
    }
    async consumeSSOToken(token) {
        const userId = await this.get(`sso:${token}`);
        if (userId) {
            await this.del(`sso:${token}`);
        }
        return userId;
    }
    async revokeRefreshToken(tokenId, ttlSeconds = 60 * 60 * 24 * 30) {
        await this.setex(`revoked:${tokenId}`, ttlSeconds, '1');
    }
    async isRefreshTokenRevoked(tokenId) {
        return this.exists(`revoked:${tokenId}`);
    }
    async checkRateLimit(key, limit, windowSecs) {
        const current = await this.incr(key);
        if (current === 1) {
            await this.expire(key, windowSecs);
        }
        return {
            allowed: current <= limit,
            remaining: Math.max(0, limit - current),
        };
    }
};
exports.RedisService = RedisService;
exports.RedisService = RedisService = RedisService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], RedisService);
//# sourceMappingURL=redis.service.js.map