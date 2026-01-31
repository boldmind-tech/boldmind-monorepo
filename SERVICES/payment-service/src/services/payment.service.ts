
// SERVICES/payment-service/src/services/payment.service.ts

import { PrismaClient, PaymentStatus, PaymentProvider } from '../generated/client';
import { PaystackProvider } from '../providers/paystack.provider';
import { FlutterwaveProvider } from '../providers/flutterwave.provider';

export class PaymentService {
    constructor(
        private prisma: PrismaClient,
        private paystackProvider: PaystackProvider,
        private flutterwaveProvider: FlutterwaveProvider
    ) { }

    async createPayment(params: {
        userId: string;
        amount: number;
        currency: 'NGN' | 'USD';
        email: string;
        phone?: string;
        subscriptionId?: string;
        invoiceId?: string;
        description?: string;
        metadata?: any;
        provider?: 'PAYSTACK' | 'FLUTTERWAVE';
    }) {
        const reference = `PAY-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const provider = params.provider || 'PAYSTACK';

        // Create payment record
        const payment = await this.prisma.payment.create({
            data: {
                userId: params.userId,

                amount: params.amount,
                currency: params.currency,
                provider,
                method: 'CARD',
                status: PaymentStatus.PENDING,
                providerRef: reference,
                customerEmail: params.email,
                ...(params.subscriptionId ? { subscriptionId: params.subscriptionId } : {}),
                ...(params.invoiceId ? { invoiceId: params.invoiceId } : {}),
                ...(params.phone ? { customerPhone: params.phone } : {}),
                ...(params.description ? { description: params.description } : {}),
                metadata: params.metadata || {},
            },
        });

        // Initialize payment with provider
        let providerResponse;
        if (provider === 'PAYSTACK') {
            providerResponse = await this.paystackProvider.initializePayment({
                email: params.email,
                amount: Math.round(params.amount * 100), // Convert to kobo
                reference,
                currency: params.currency,
                metadata: {
                    paymentId: payment.id,
                    userId: params.userId,
                    ...params.metadata,
                },
                callbackUrl: process.env.PAYMENT_CALLBACK_URL || '',
            });
        } else {
            providerResponse = await this.flutterwaveProvider.initializePayment({
                txRef: reference,
                amount: params.amount,
                currency: params.currency,
                redirectUrl: process.env.PAYMENT_CALLBACK_URL!,
                customer: {
                    email: params.email,
                    ...(params.phone ? { phonenumber: params.phone } : {}),
                },
                meta: {
                    paymentId: payment.id,
                    userId: params.userId,
                    ...params.metadata,
                },
            });
        }

        // Update payment with provider data
        await this.prisma.payment.update({
            where: { id: payment.id },
            data: {
                providerData: providerResponse.data,
            },
        });

        return {
            paymentId: payment.id,
            authorizationUrl: providerResponse.data.authorization_url || providerResponse.data.link,
            reference,
        };
    }

    async verifyPayment(reference: string) {
        const payment = await this.prisma.payment.findFirst({
            where: { providerRef: reference },
        });

        if (!payment) {
            throw new Error('Payment not found');
        }

        let verification;
        if (payment.provider === PaymentProvider.PAYSTACK) {
            verification = await this.paystackProvider.verifyPayment(reference);
        } else {
            // For Flutterwave, you'd use transaction ID
            verification = await this.flutterwaveProvider.verifyPayment(reference);
        }

        const status = verification.data.status === 'success'
            ? PaymentStatus.SUCCESS
            : PaymentStatus.FAILED;

        const updatedPayment = await this.prisma.payment.update({
            where: { id: payment.id },
            data: {
                status,
                verifiedAt: new Date(),
                providerData: verification.data,
            },
        });

        // Handle success logic
        if (status === PaymentStatus.SUCCESS) {
            if (payment.invoiceId) {
                await this.prisma.invoice.update({
                    where: { id: payment.invoiceId },
                    data: { status: 'PAID', paidAt: new Date() },
                });
            }

            if (payment.subscriptionId) {
                const subscription = await this.prisma.subscription.findUnique({
                    where: { id: payment.subscriptionId },
                });

                if (subscription) {
                    const now = new Date();
                    const nextPeriodEnd = new Date(now);
                    nextPeriodEnd.setMonth(nextPeriodEnd.getMonth() + 1);

                    await this.prisma.subscription.update({
                        where: { id: payment.subscriptionId },
                        data: {
                            status: 'ACTIVE',
                            currentPeriodStart: now,
                            currentPeriodEnd: nextPeriodEnd,
                        },
                    });
                }
            }
        }

        return updatedPayment;
    }
}