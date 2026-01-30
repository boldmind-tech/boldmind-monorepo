// SERVICES/ai-receptionist-service/src/index.ts

import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import clientsRouter from './routes/clients.routes';
// import leadsRouter from './routes/leads.routes';
// import conversationsRouter from './routes/conversations.routes';
import webhooksRouter from './routes/webhooks.route';
// import analyticsRouter from './routes/analytics.routes';

dotenv.config();

const app: Express = express();
const prisma = new PrismaClient();
const PORT = process.env['PORT'] || 4004;

app.use(helmet());
app.use(cors({
    origin: process.env['CORS_ORIGIN']?.split(',') || ['http://localhost:3001'],
    credentials: true,
}));
app.use(morgan('dev'));

// Webhook route needs raw body for signature verification
app.use('/webhooks', express.raw({ type: 'application/json' }), webhooksRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/clients', clientsRouter);
// app.use('/leads', leadsRouter);
// app.use('/conversations', conversationsRouter);
// app.use('/analytics', analyticsRouter);

app.get('/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', service: 'ai-receptionist-service' });
});

app.use((err: any, req: Request, res: Response, next: any) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
            status: err.status || 500,
        },
    });
});

app.listen(PORT, () => {
    console.log(`🚀 AI Receptionist Service running on: http://localhost:${PORT}`);
});

process.on('SIGTERM', async () => {
    await prisma.$disconnect();
    process.exit(0);
});

export { prisma };
