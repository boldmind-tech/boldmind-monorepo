// SERVICES/api-gateway/src/kolo-ai/kolo-ai.module.ts

import { Module } from '@nestjs/common';
import { KoloAiController } from './kolo-ai.controller';
import { KoloAiServiceClient } from '../clients/kolo-ai-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [KoloAiController],
    providers: [KoloAiServiceClient],
    exports: [KoloAiServiceClient],
})
export class KoloAiModule { }