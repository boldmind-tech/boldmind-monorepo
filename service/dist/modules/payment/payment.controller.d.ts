import { RawBodyRequest } from '@nestjs/common';
import { Request } from 'express';
import { PaymentService } from './payment.service';
import { InitializePaymentDto } from './payment.dto';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    initialize(userId: string, email: string, dto: InitializePaymentDto): Promise<{
        authorizationUrl: any;
        reference: string;
        accessCode: any;
    }>;
    verify(reference: string): Promise<{
        id: string;
        provider: import("@prisma/client").$Enums.PaymentProvider;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        productSlug: string;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        amountNGN: number;
        status: import("@prisma/client").$Enums.PaymentStatus;
        description: string | null;
        paystackRef: string;
        paystackTrxRef: string | null;
        paystackId: string | null;
        currency: string;
        channel: string | null;
        webhookPayload: import("@prisma/client/runtime/client").JsonValue | null;
        paidAt: Date | null;
        subscriptionId: string | null;
    }>;
    webhook(signature: string, req: RawBodyRequest<Request>): Promise<void>;
    history(userId: string, page?: number, limit?: number): Promise<{
        data: ({
            invoice: {
                id: string;
                createdAt: Date;
                userId: string;
                currency: string;
                paidAt: Date | null;
                paymentId: string;
                invoiceNumber: string;
                amount: number;
                vatAmount: number;
                totalAmount: number;
                dueDate: Date | null;
                pdfUrl: string | null;
                lineItems: import("@prisma/client/runtime/client").JsonValue;
                billingAddress: import("@prisma/client/runtime/client").JsonValue | null;
            };
        } & {
            id: string;
            provider: import("@prisma/client").$Enums.PaymentProvider;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            productSlug: string;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            amountNGN: number;
            status: import("@prisma/client").$Enums.PaymentStatus;
            description: string | null;
            paystackRef: string;
            paystackTrxRef: string | null;
            paystackId: string | null;
            currency: string;
            channel: string | null;
            webhookPayload: import("@prisma/client/runtime/client").JsonValue | null;
            paidAt: Date | null;
            subscriptionId: string | null;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
        };
    }>;
    subscriptions(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        productSlug: string;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        planName: string;
        amountNGN: number;
        interval: string;
        tier: import("@prisma/client").$Enums.SubscriptionTier;
        status: import("@prisma/client").$Enums.SubscriptionStatus;
        paystackSubCode: string | null;
        planCode: string | null;
        currentPeriodStart: Date;
        currentPeriodEnd: Date;
        cancelledAt: Date | null;
        cancelReason: string | null;
        trialEndsAt: Date | null;
    }[]>;
    checkAccess(userId: string, productSlug: string): Promise<boolean>;
    joinWaitlist(body: {
        productSlug: string;
        email: string;
        name?: string;
    }): Promise<{
        name: string | null;
        email: string;
        referralCode: string | null;
        id: string;
        createdAt: Date;
        userId: string | null;
        productSlug: string;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        status: import("@prisma/client").$Enums.WaitlistStatus;
        position: number;
        source: string | null;
        invitedAt: Date | null;
        convertedAt: Date | null;
    }>;
}
