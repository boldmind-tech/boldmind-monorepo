import { Controller, Post, Get, Body, Param, Query } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private subscriptionsService: SubscriptionsService) {}

  @Post('initialize')
  async initialize(@Body() data: { uid: string; plan: string; email: string }) {
    return this.subscriptionsService.initializePayment(data);
  }

  @Post('verify/:reference')
  async verify(@Param('reference') reference: string) {
    return this.subscriptionsService.verifyPayment(reference);
  }

  @Get('user/:uid')
  async getUserSubscriptions(@Param('uid') uid: string) {
    return this.subscriptionsService.getUserSubscriptions(uid);
  }

  @Get('user/:uid/access')
  async checkAccess(
    @Param('uid') uid: string,
    @Query('plan') plan?: string,
  ) {
    const hasAccess = await this.subscriptionsService.hasAccess(uid, plan);
    return { hasAccess };
  }

  @Post('cancel')
  async cancel(@Body() data: { uid: string; subscriptionId: string }) {
    await this.subscriptionsService.cancelSubscription(data.uid, data.subscriptionId);
    return { message: 'Subscription cancelled successfully' };
  }
}