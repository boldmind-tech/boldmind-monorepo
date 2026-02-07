// SERVICES/api-gateway/src/ai-receptionist/ai-receptionist.module.ts

import { Module } from '@nestjs/common';
import { AiReceptionistController } from './ai-receptionist.controller';
import { AiReceptionistServiceClient } from '../clients/ai-receptionist-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [AiReceptionistController],
    providers: [AiReceptionistServiceClient],
    exports: [AiReceptionistServiceClient],
})
export class AiReceptionistModule { }