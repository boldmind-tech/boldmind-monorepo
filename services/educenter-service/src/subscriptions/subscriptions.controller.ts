import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('subscriptions')
export class SubscriptionsController {
  @Post('subscribe')
  subscribe(@Body() data: any) {
    return {
      success: true,
      reference: `ref_${Date.now()}`,
      message: 'Subscription initiated',
      checkoutUrl: 'https://paystack.com/pay/...',
    };
  }

  @Post('verify')
  verifyPayment(@Body() data: { reference: string }) {
    return {
      success: true,
      message: 'Payment verified successfully',
      subscription: {
        id: `sub_${Date.now()}`,
        status: 'active',
        activatedAt: new Date(),
      },
    };
  }

  @Get(':uid')
  getSubscriptions(@Param('uid') uid: string) {
    return {
      uid,
      subscriptions: [],
      activeCount: 0,
      totalSpent: 0,
    };
  }
}