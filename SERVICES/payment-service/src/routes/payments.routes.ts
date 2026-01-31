// SERVICES/payment-service/src/routes/payments.routes.ts

import { Router } from 'express';
import { prisma } from '../index';
import { PaymentService } from '../services/payment.service';
import { PaystackProvider } from '../providers/paystack.provider';
import { FlutterwaveProvider } from '../providers/flutterwave.provider';

const router: Router = Router();
const paymentService = new PaymentService(
    prisma,
    new PaystackProvider(),
    new FlutterwaveProvider()
);

// Initialize payment
router.post('/initialize', async (req, res, next) => {
    try {
        const result = await paymentService.createPayment(req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

// Verify payment
router.get('/verify/:reference', async (req, res, next) => {
    try {
        const payment = await paymentService.verifyPayment(req.params.reference);
        res.json(payment);
    } catch (error) {
        next(error);
    }
});

// Get payment by ID
router.get('/:id', async (req, res, next) => {
    try {
        const payment = await prisma.payment.findUnique({
            where: { id: req.params.id },
        });
        res.json(payment);
    } catch (error) {
        next(error);
    }
});

// List user payments
router.get('/user/:userId', async (req, res, next) => {
    try {
        const payments = await prisma.payment.findMany({
            where: { userId: req.params.userId },
            orderBy: { createdAt: 'desc' },
        });
        res.json(payments);
    } catch (error) {
        next(error);
    }
});

export default router;