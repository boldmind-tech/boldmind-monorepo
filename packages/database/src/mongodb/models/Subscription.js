import mongoose, { Schema } from 'mongoose';
const SubscriptionSchema = new Schema({
    userId: { type: String, required: true },
    productId: { type: String, required: true },
    planId: { type: String, required: true },
    status: {
        type: String,
        enum: ['active', 'cancelled', 'past_due', 'incomplete', 'trialing'],
        default: 'active'
    },
    currentPeriodStart: { type: Date, required: true },
    currentPeriodEnd: { type: Date, required: true },
    cancelAtPeriodEnd: { type: Boolean, default: false },
    provider: {
        type: String,
        enum: ['paystack', 'flutterwave', 'manual'],
        default: 'paystack'
    },
    providerSubscriptionId: { type: String },
    providerCustomerId: { type: String },
    metadata: { type: Schema.Types.Mixed }
}, {
    timestamps: true
});
SubscriptionSchema.index({ userId: 1 });
SubscriptionSchema.index({ productId: 1 });
SubscriptionSchema.index({ status: 1 });
SubscriptionSchema.index({ providerSubscriptionId: 1 });
SubscriptionSchema.index({ currentPeriodEnd: 1 });
SubscriptionSchema.virtual('isActive').get(function () {
    return this.status === 'active' && new Date() < this.currentPeriodEnd;
});
SubscriptionSchema.virtual('willCancel').get(function () {
    return this.cancelAtPeriodEnd;
});
export const Subscription = mongoose.models.Subscription ||
    mongoose.model('Subscription', SubscriptionSchema);
//# sourceMappingURL=Subscription.js.map