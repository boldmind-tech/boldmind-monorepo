
// subscriptions/subscriptions.service.ts - UPDATED FOR ALL APPS
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { PaystackService } from '../paystack/paystack.service';
import { ProductsService } from '../products/products.service';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SubscriptionsService {
  private userServiceUrl: string;

  constructor(
    private paystackService: PaystackService,
    private productsService: ProductsService,
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.userServiceUrl = this.configService.get('USER_SERVICE_URL') || 'http://localhost:4001';
  }

  async subscribe(data: {
    uid: string;
    email: string;
    productId: string; // Changed from pillar/plan to productId
  }) {
    // Get product details
    const product = await this.productsService.getProduct(data.productId);
    
    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    // Initialize Paystack transaction
    const response = await this.paystackService.initializeTransaction({
      email: data.email,
      amount: product.price,
      metadata: {
        uid: data.uid,
        productId: data.productId,
        app: product.app,
        category: product.category,
        duration: product.duration,
        ...product.metadata,
      },
      callback_url: `${this.configService.get('FRONTEND_URL')}/subscription/verify`,
    });

    return response;
  }

  async verifyPayment(reference: string) {
    const response = await this.paystackService.verifyTransaction(reference);

    if (response.data.status === 'success') {
      const { uid, productId, app, duration, pillar } = response.data.metadata;

      // Calculate expiry date if subscription
      let expiresAt: Date | undefined;
      if (duration) {
        expiresAt = new Date();
        expiresAt.setMonth(expiresAt.getMonth() + duration);
      }

      // Update user subscription based on app
      await this.updateUserSubscription(uid, app, productId, true, expiresAt, pillar);

      // Record transaction
      await this.recordTransaction({
        uid,
        productId,
        app,
        amount: response.data.amount,
        reference,
        status: 'success',
      });

      return {
        success: true,
        message: 'Subscription activated successfully',
        data: { app, productId, expiresAt },
      };
    }

    throw new HttpException('Payment verification failed', HttpStatus.BAD_REQUEST);
  }

  async handleWebhook(payload: any) {
    const event = payload.event;
    const data = payload.data;

    if (event === 'charge.success') {
      const { uid, productId, app, duration, pillar } = data.metadata;

      let expiresAt: Date | undefined;
      if (duration) {
        expiresAt = new Date();
        expiresAt.setMonth(expiresAt.getMonth() + duration);
      }

      await this.updateUserSubscription(uid, app, productId, true, expiresAt, pillar);

      // Record transaction
      await this.recordTransaction({
        uid,
        productId,
        app,
        amount: data.amount,
        reference: data.reference,
        status: 'success',
      });

      return { message: 'Webhook processed successfully' };
    }

    return { message: 'Event not handled' };
  }

  private async updateUserSubscription(
    uid: string,
    app: string,
    productId: string,
    active: boolean,
    expiresAt?: Date,
    pillar?: string,
  ) {
    try {
      // Different update logic based on app
      const updateData: any = {};

      // For apps with pillars (EduCenter)
      if (pillar) {
        updateData.subscriptions = {
          [pillar]: { active, expiresAt, productId },
        };
      } else {
        // For apps without pillars
        updateData.subscriptions = {
          [app]: { active, expiresAt, productId },
        };
      }

      await firstValueFrom(
        this.httpService.put(`${this.userServiceUrl}/users/${uid}`, updateData),
      );
    } catch (error) {
      console.error('Failed to update user subscription:', error);
    }
  }

  private async recordTransaction(data: any) {
    // TODO: Save to transactions collection for accounting/reporting
    console.log('Transaction recorded:', data);
  }
}