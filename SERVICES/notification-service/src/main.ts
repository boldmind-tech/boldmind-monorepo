import './config';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import notificationRouter from './routes/notification.routes';
import authWebhookRouter from './routes/auth-webhook.routes';

const app: Express = express();
const PORT = process.env['PORT'] || 4005;
const MONGODB_URL = process.env['MONGODB_URL'] || 'mongodb://localhost:27017/notification_service';

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/notifications', notificationRouter);
app.use('/webhooks/auth', express.json(), authWebhookRouter);
app.get('/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok', service: 'notification-service' });
});
app.get('/health/ping', (_req: Request, res: Response) => {
    res.json({ message: 'pong', timestamp: new Date().toISOString() });
});

// Basic Error Handler
app.use((err: any, _req: Request, res: Response, _next: any) => {
    console.error(err.stack);
    return res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
            status: err.status || 500,
        },
    });
});

import { startKeepAlive } from './keep-alive';

// Start Server & Connect Database
const start = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('🌱 Connected to MongoDB');

        app.listen(PORT, () => {
            console.log(`🚀 Notification Service running on: http://localhost:${PORT}`);
            startKeepAlive(PORT);
        });
    } catch (error) {
        console.error('❌ Failed to start service:', error);
        process.exit(1);
    }
};

start();
