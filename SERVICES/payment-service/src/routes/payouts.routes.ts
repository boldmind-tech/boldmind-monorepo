
// SERVICES/payment-service/src/routes/payouts.routes.ts

import { Router } from 'express';
import { prisma } from '../index';
// import { PaystackProvider } from '../providers/paystack.provider';

const router: Router = Router();
// const paystackProvider = new PaystackProvider();

// Request payout
router.post('/', async (req, res, next) => {
    try {
        const { userId, amount, bankName, accountNumber, accountName, notes } = req.body;

        const fee = amount * 0.01;
        const netAmount = amount - fee;

        const payout = await prisma.payout.create({
            data: {
                userId,
                amount,
                bankName,
                accountNumber,
                accountName,
                fee,
                netAmount,
                status: 'PENDING',
                provider: 'PAYSTACK',
                notes,
            },
        });

        res.json(payout);
    } catch (error) {
        next(error);
    }
});

// Get payout
router.get('/:id', async (req, res, next) => {
    try {
        const payout = await prisma.payout.findUnique({
            where: { id: req.params.id },
        });
        res.json(payout);
    } catch (error) {
        next(error);
    }
});

// List user payouts
router.get('/user/:userId', async (req, res, next) => {
    try {
        const payouts = await prisma.payout.findMany({
            where: { userId: req.params.userId },
            orderBy: { createdAt: 'desc' },
        });
        res.json(payouts);
    } catch (error) {
        next(error);
    }
});

export default router;