import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getMongoDb } from '@boldmind/database';
import { PaymentGateway, generateReference, validatePaymentData } from '@boldmind/payments';
import { ObjectId } from 'mongodb';

export interface Subscription {
  _id?: ObjectId;
  uid: string;
  plan: 'study-hub-6m' | 'study-hub-1y' | 'business-school' | 'ai-lab';
  status: 'active' | 'expired' | 'cancelled' | 'pending';
  amount: number;
  provider: 'paystack' | 'flutterwave';
  reference: string;
  startDate: Date;
  endDate?: Date;
  autoRenew: boolean;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable()
export class SubscriptionsService {
  private paymentGateway: PaymentGateway;

  constructor(private configService: ConfigService) {
    // Initialize YOUR payment gateway
    this.paymentGateway = new PaymentGateway({
      provider: 'paystack', // or 'flutterwave'
      secretKey: this.configService.get<string>('paystack.secretKey')!,
      publicKey: this.configService.get<string>('paystack.publicKey')!,
    });
  }

  private async getDb() {
    return getMongoDb(
      process.env.MONGODB_URI!,
      process.env.MONGODB_DB_NAME || 'boldmind_educenter'
    );
  }

  private getPlanDetails(plan: string): { amount: number; duration?: number } {
    const plans = {
      'study-hub-6m': { amount: 700, duration: 180 }, // 6 months
      'study-hub-1y': { amount: 1000, duration: 365 }, // 1 year
      'business-school': { amount: 1000, duration: null }, // Lifetime
      'ai-lab': { amount: 1000, duration: null }, // Lifetime
    };

    return plans[plan] || { amount: 0, duration: 0 };
  }

  async initializePayment(data: {
    uid: string;
    plan: string;
    email: string;
  }): Promise<any> {
    const planDetails = this.getPlanDetails(data.plan);
    const reference = generateReference('edu');

    // Validate using YOUR utility
    const validation = validatePaymentData({
      amount: planDetails.amount,
      email: data.email,
    });

    if (!validation.valid) {
      throw new Error(validation.errors.join(', '));
    }

    // Initialize payment using YOUR gateway
    const result = await this.paymentGateway.initializePayment({
      amount: planDetails.amount,
      email: data.email,
      reference,
      callback_url: `${process.env.FRONTEND_URL}/dashboard/verify-payment`,
      metadata: {
        uid: data.uid,
        plan: data.plan,
        product: 'educenter',
      },
    });

    if (!result.success) {
      throw new Error(result.message);
    }

    // Save pending subscription
    const db = await this.getDb();
    const subscription: Subscription = {
      uid: data.uid,
      plan: data.plan as any,
      status: 'pending',
      amount: planDetails.amount,
      provider: 'paystack',
      reference,
      startDate: new Date(),
      autoRenew: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await db.collection<Subscription>('subscriptions').insertOne(subscription as any);

    return {
      reference,
      authorization_url: result.data?.authorization_url,
    };
  }

  async verifyPayment(reference: string): Promise<Subscription | null> {
    // Verify using YOUR gateway
    const verification = await this.paymentGateway.verifyPayment(reference);

    if (!verification.verified) {
      throw new Error('Payment verification failed');
    }

    const db = await this.getDb();
    const subscription = await db.collection<Subscription>('subscriptions')
      .findOne({ reference });

    if (!subscription) {
      throw new Error('Subscription not found');
    }

    // Update subscription status
    const planDetails = this.getPlanDetails(subscription.plan);
    const endDate = planDetails.duration
      ? new Date(Date.now() + planDetails.duration * 24 * 60 * 60 * 1000)
      : undefined;

    await db.collection<Subscription>('subscriptions').updateOne(
      { reference },
      {
        $set: {
          status: 'active',
          endDate,
          updatedAt: new Date(),
        },
      }
    );

    return db.collection<Subscription>('subscriptions').findOne({ reference });
  }

  async getUserSubscriptions(uid: string): Promise<Subscription[]> {
    const db = await this.getDb();
    return db.collection<Subscription>('subscriptions')
      .find({ uid })
      .sort({ createdAt: -1 })
      .toArray();
  }

  async hasAccess(uid: string, plan?: string): Promise<boolean> {
    const db = await this.getDb();
    const query: any = { uid, status: 'active' };
    
    if (plan) {
      query.plan = plan;
    }

    const subscription = await db.collection<Subscription>('subscriptions')
      .findOne(query);

    if (!subscription) return false;

    // Check if expired (for time-based plans)
    if (subscription.endDate && subscription.endDate < new Date()) {
      // Update to expired
      await db.collection<Subscription>('subscriptions').updateOne(
        { _id: subscription._id },
        { $set: { status: 'expired', updatedAt: new Date() } }
      );
      return false;
    }

    return true;
  }

  async cancelSubscription(uid: string, subscriptionId: string): Promise<void> {
    const db = await this.getDb();
    
    await db.collection<Subscription>('subscriptions').updateOne(
      { _id: new ObjectId(subscriptionId), uid },
      {
        $set: {
          status: 'cancelled',
          autoRenew: false,
          updatedAt: new Date(),
        },
      }
    );
  }
}