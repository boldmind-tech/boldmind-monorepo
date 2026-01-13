import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionsController } from './subscriptions.controller';
import { PaystackModule } from '../paystack/paystack.module';

@Module({
  imports: [HttpModule, PaystackModule],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService],
})
export class SubscriptionsModule {}