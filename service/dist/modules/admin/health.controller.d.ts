import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
export declare class HealthController {
    private readonly prisma;
    private readonly redis;
    constructor(prisma: PrismaService, redis: RedisService);
    check(): Promise<{
        status: string;
        service: string;
        version: string;
        uptime: number;
        checks: Record<string, {
            status: string;
            latencyMs?: number;
            error?: string;
        }>;
        timestamp: string;
    }>;
    ping(): {
        pong: boolean;
        ts: number;
    };
}
