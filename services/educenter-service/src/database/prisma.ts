// SERVICES/educenter-service/src/database/prisma.ts
import dotenv from 'dotenv';

// Load env vars BEFORE importing PrismaClient
dotenv.config();

import { PrismaClient } from '../generated/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.EDUCENTER_SERVICE_DATABASE_URL;

if (!connectionString) {
    throw new Error('Missing env variable: EDUCENTER_SERVICE_DATABASE_URL');
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });

// Graceful shutdown
process.on('SIGTERM', async () => {
    await prisma.$disconnect();
    await pool.end();
    process.exit(0);
});

process.on('SIGINT', async () => {
    await prisma.$disconnect();
    await pool.end();
    process.exit(0);
});