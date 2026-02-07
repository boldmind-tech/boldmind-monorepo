// SERVICES/api-gateway/src/ai/ai.module.ts

import { Module } from '@nestjs/common';
import { AiController } from './ai.controller';
import { AiServiceClient } from '../clients/ai-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [AiController],
    providers: [AiServiceClient],
    exports: [AiServiceClient],
})
export class AiModule { }