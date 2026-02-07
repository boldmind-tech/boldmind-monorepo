// SERVICES/api-gateway/src/payments/payments.module.ts

import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentServiceClient } from '../clients/payment-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [PaymentsController],
    providers: [PaymentServiceClient],
    exports: [PaymentServiceClient],
})
export class PaymentsModule { }