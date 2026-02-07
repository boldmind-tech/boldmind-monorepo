// SERVICES/api-gateway/src/receipt-genius/receipt-genius.module.ts

import { Module } from '@nestjs/common';
import { ReceiptGeniusController } from './receipt-genius.controller';
import { ReceiptGeniusServiceClient } from '../clients/receipt-genius-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [ReceiptGeniusController],
    providers: [ReceiptGeniusServiceClient],
    exports: [ReceiptGeniusServiceClient],
})
export class ReceiptGeniusModule { }