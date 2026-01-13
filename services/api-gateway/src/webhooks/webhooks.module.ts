// webhooks.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PaystackWebhookController } from './paystack.controller';
import { ProxyModule } from '../proxy/proxy.module';

@Module({
  imports: [HttpModule, ProxyModule],
  controllers: [PaystackWebhookController],
})
export class WebhooksModule {}