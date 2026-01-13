// subscriptions/subscriptions.controller.ts
import { Controller, Post, Get, Body, Param, Headers, HttpException, HttpStatus } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import * as crypto from 'crypto';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private subscriptionsService: SubscriptionsService) {}

  @Post('subscribe')
  subscribe(@Body() data: any) {
    return this.subscriptionsService.subscribe(data);
  }

  @Post('verify')
  verify(@Body() body: { reference: string }) {
    return this.subscriptionsService.verifyPayment(body.reference);
  }

  @Get(':uid')
  getSubscriptions(@Param('uid') uid: string) {
    return this.subscriptionsService.getSubscriptions(uid);
  }

  @Get(':uid/:pillar/status')
  checkStatus(@Param('uid') uid: string, @Param('pillar') pillar: any) {
    return this.subscriptionsService.checkSubscriptionStatus(uid, pillar);
  }

  @Post('webhooks/paystack')
  handleWebhook(@Body() payload: any, @Headers('x-paystack-signature') signature: string) {
    // Verify signature
    const hash = crypto
      .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY!)
      .update(JSON.stringify(payload))
      .digest('hex');

    if (hash !== signature) {
      throw new HttpException('Invalid signature', HttpStatus.UNAUTHORIZED);
    }

    return this.subscriptionsService.handleWebhook(payload);
  }
}