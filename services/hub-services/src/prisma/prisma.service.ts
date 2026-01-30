// SERVICES/hub-service/src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
    private readonly prisma: PrismaClient;
    private readonly pool: Pool;

    constructor(private readonly configService: ConfigService) {
        const connectionString = this.configService.get<string>('HUB_SERVICE_DATABASE_URL');

        if (!connectionString) {
            throw new Error('Missing env variable: HUB_SERVICE_DATABASE_URL');
        }

        this.pool = new Pool({ connectionString });
        const adapter = new PrismaPg(this.pool);

        this.prisma = new PrismaClient({ adapter });
    }

    async onModuleInit() {
        await this.prisma.$connect();
    }

    async onModuleDestroy() {
        await this.prisma.$disconnect();
        await this.pool.end();
    }

    get client() {
        return this.prisma;
    }
}