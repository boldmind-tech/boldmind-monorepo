// SERVICES/api-gateway/src/safeai/safeai.module.ts

import { Module } from '@nestjs/common';
import { SafeaiController } from './safeai.controller';
import { SafeaiServiceClient } from '../clients/safeai-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [SafeaiController],
    providers: [SafeaiServiceClient],
    exports: [SafeaiServiceClient],
})
export class SafeaiModule { }