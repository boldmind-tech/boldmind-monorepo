// SERVICES/payment-service/src/index.ts

import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { prisma } from './database/prisma';
import paymentsRouter from './routes/payments.routes';
import subscriptionsRouter from './routes/subscriptions.routes';
import webhooksRouter from './routes/webhooks.routes';
import payoutsRouter from './routes/payouts.routes';

dotenv.config();

const app: Express = express();
const PORT = process.env['PORT'] || 4002;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env['CORS_ORIGIN']?.split(',') || ['http://localhost:3001'],
  credentials: true,
}));
app.use(morgan('dev'));

// Webhook route needs raw body
app.use('/webhooks', express.raw({ type: 'application/json' }), webhooksRouter);

// Regular routes with JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/payments', paymentsRouter);
app.use('/subscriptions', subscriptionsRouter);
app.use('/payouts', payoutsRouter);

// Health check
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'payment-service' });
});

// Error handling
app.use((err: any, _req: Request, res: Response, _next: any) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: err.status || 500,
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Payment Service running on: http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

export { prisma };