import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
export declare class RedisService implements OnModuleInit, OnModuleDestroy {
    private readonly config;
    private readonly logger;
    client: Redis;
    constructor(config: ConfigService);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    get(key: string): Promise<string | null>;
    set(key: string, value: string, ttlSeconds?: number): Promise<void>;
    setex(key: string, ttlSeconds: number, value: string): Promise<void>;
    del(...keys: string[]): Promise<void>;
    exists(key: string): Promise<boolean>;
    incr(key: string): Promise<number>;
    expire(key: string, ttlSeconds: number): Promise<void>;
    hset(key: string, field: string, value: string): Promise<void>;
    hget(key: string, field: string): Promise<string | null>;
    hgetall(key: string): Promise<Record<string, string>>;
    keys(pattern: string): Promise<string[]>;
    cache<T>(key: string, fetchFn: () => Promise<T>, ttlSeconds?: number): Promise<T>;
    storeSSOToken(token: string, userId: string, ttlSeconds?: number): Promise<void>;
    consumeSSOToken(token: string): Promise<string | null>;
    revokeRefreshToken(tokenId: string, ttlSeconds?: number): Promise<void>;
    isRefreshTokenRevoked(tokenId: string): Promise<boolean>;
    checkRateLimit(key: string, limit: number, windowSecs: number): Promise<{
        allowed: boolean;
        remaining: number;
    }>;
}
