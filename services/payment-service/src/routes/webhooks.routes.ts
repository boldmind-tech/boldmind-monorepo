
// SERVICES/payment-service/src/routes/webhooks.routes.ts

import { Router } from 'express';
import { prisma } from '../index';
import { PaystackProvider } from '../providers/paystack.provider';
import { FlutterwaveProvider } from '../providers/flutterwave.provider';
import { PaymentService } from '../services/payment.service';

const router = Router();
const paystackProvider = new PaystackProvider();
const flutterwaveProvider = new FlutterwaveProvider();
const paymentService = new PaymentService(
    prisma,
    paystackProvider,
    flutterwaveProvider
);

// Paystack webhook
router.post('/paystack', async (req, res, next) => {
    try {
        const signature = req.headers['x-paystack-signature'] as string;
        const body = JSON.stringify(req.body);

        if (!paystackProvider.verifyWebhookSignature(signature, body)) {
            return res.status(400).json({ error: 'Invalid signature' });
        }

        const event = req.body;

        // Store webhook
        const webhook = await prisma.paymentWebhook.create({
            data: {
                provider: 'PAYSTACK',
                event: event.event,
                payload: event,
                signature,
            },
        });

        // Process webhook
        try {
            switch (event.event) {
                case 'charge.success':
                    await paymentService.verifyPayment(event.data.reference);
                    break;

                case 'transfer.success':
                case 'transfer.failed':
                    // Handle payout webhooks
                    const payoutRef = event.data.reference;
                    if (payoutRef.startsWith('PAYOUT-')) {
                        const payoutId = payoutRef.replace('PAYOUT-', '');
                        const status = event.event === 'transfer.success' ? 'COMPLETED' : 'FAILED';

                        await prisma.payout.update({
                            where: { id: payoutId },
                            data: {
                                status,
                                completedAt: status === 'COMPLETED' ? new Date() : undefined,
                                failureReason: status === 'FAILED' ? event.data.reason : undefined,
                            },
                        });
                    }
                    break;
            }

            await prisma.paymentWebhook.update({
                where: { id: webhook.id },
                data: { processed: true, processedAt: new Date() },
            });
        } catch (error: any) {
            await prisma.paymentWebhook.update({
                where: { id: webhook.id },
                data: { error: error.message, retryCount: { increment: 1 } },
            });
        }

        res.status(200).send('OK');
    } catch (error) {
        next(error);
    }
});

// Flutterwave webhook
router.post('/flutterwave', async (req, res, next) => {
    try {
        const signature = req.headers['verif-hash'] as string;

        if (signature !== process.env.FLUTTERWAVE_SECRET_HASH) {
            return res.status(400).json({ error: 'Invalid signature' });
        }

        const event = req.body;

        const webhook = await prisma.paymentWebhook.create({
            data: {
                provider: 'FLUTTERWAVE',
                event: event.event,
                payload: event,
                signature,
            },
        });

        // Process similar to Paystack
        res.status(200).send('OK');
    } catch (error) {
        next(error);
    }
});

export default router;
