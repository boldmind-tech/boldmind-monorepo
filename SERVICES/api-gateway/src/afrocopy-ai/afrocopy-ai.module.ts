
import { Module } from '@nestjs/common';
import { AfrocopyAiController } from './afrocopy-ai.controller';
import { AfrocopyAiServiceClient } from '../clients/afrocopy-ai-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [AfrocopyAiController],
    providers: [AfrocopyAiServiceClient],
    exports: [AfrocopyAiServiceClient],
})
export class AfrocopyAiModule { }
