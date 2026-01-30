
// SERVICES/payment-service/src/routes/subscriptions.routes.ts

import { Router } from 'express';
import { prisma } from '../index';

const router = Router();

// Create subscription
router.post('/', async (req, res, next) => {
    try {
        const subscription = await prisma.subscription.create({
            data: req.body,
        });
        res.json(subscription);
    } catch (error) {
        next(error);
    }
});

// Get subscription
router.get('/:id', async (req, res, next) => {
    try {
        const subscription = await prisma.subscription.findUnique({
            where: { id: req.params.id },
            include: { plan: true },
        });
        res.json(subscription);
    } catch (error) {
        next(error);
    }
});

// List user subscriptions
router.get('/user/:userId', async (req, res, next) => {
    try {
        const subscriptions = await prisma.subscription.findMany({
            where: { userId: req.params.userId },
            include: { plan: true },
        });
        res.json(subscriptions);
    } catch (error) {
        next(error);
    }
});

// Cancel subscription
router.post('/:id/cancel', async (req, res, next) => {
    try {
        const subscription = await prisma.subscription.update({
            where: { id: req.params.id },
            data: {
                cancelAtPeriodEnd: true,
                canceledAt: new Date(),
            },
        });
        res.json(subscription);
    } catch (error) {
        next(error);
    }
});

export default router;

