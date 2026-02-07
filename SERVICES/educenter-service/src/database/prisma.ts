// SERVICES/educenter-service/src/database/prisma.ts
import dotenv from 'dotenv';

// Load env vars BEFORE importing PrismaClient
dotenv.config();

import { PrismaClient } from '../generated/client';

const connectionString = process.env.EDUCENTER_SERVICE_DATABASE_URL;

if (!connectionString) {
    throw new Error('Missing env variable: EDUCENTER_SERVICE_DATABASE_URL');
}

export const prisma = new PrismaClient();

// Graceful shutdown
process.on('SIGTERM', async () => {
    await prisma.$disconnect();
    process.exit(0);
});

process.on('SIGINT', async () => {
    await prisma.$disconnect();

    process.exit(0);
});