import { Controller, Post, Body, Headers, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProxyService } from '../proxy/proxy.service';
import * as crypto from 'crypto';

@ApiTags('webhooks')
@Controller('webhooks')
export class PaystackWebhookController {
  constructor(private proxyService: ProxyService) {}

  @Post('paystack')
  @ApiOperation({ summary: 'Handle Paystack webhooks' })
  async handlePaystackWebhook(
    @Body() payload: any,
    @Headers('x-paystack-signature') signature: string,
  ) {
    // Verify Paystack signature
    const hash = crypto
      .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY!)
      .update(JSON.stringify(payload))
      .digest('hex');

    if (hash !== signature) {
      throw new HttpException('Invalid signature', HttpStatus.UNAUTHORIZED);
    }

    // Forward to payment service
    try {
      const result = await this.proxyService.paymentRequest(
        'POST',
        '/webhooks/paystack',
        payload,
        {},
      );

      return { status: 'success', message: 'Webhook processed', result };
    } catch (error) {
      throw new HttpException(
        'Webhook processing failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}