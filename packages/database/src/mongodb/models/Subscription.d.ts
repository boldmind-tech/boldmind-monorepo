import mongoose, { Document } from 'mongoose';
export interface ISubscription extends Document {
    userId: string;
    productId: string;
    planId: string;
    status: 'active' | 'cancelled' | 'past_due' | 'incomplete' | 'trialing';
    currentPeriodStart: Date;
    currentPeriodEnd: Date;
    cancelAtPeriodEnd: boolean;
    provider: 'paystack' | 'flutterwave' | 'manual';
    providerSubscriptionId?: string;
    providerCustomerId?: string;
    metadata?: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Subscription: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=Subscription.d.ts.map