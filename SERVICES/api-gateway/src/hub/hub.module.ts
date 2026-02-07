// SERVICES/api-gateway/src/hub/hub.module.ts

import { Module } from '@nestjs/common';
import { HubController } from './hub.controller';
import { HubServiceClient } from '../clients/hub-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [HubController],
    providers: [HubServiceClient],
    exports: [HubServiceClient],
})
export class HubModule { }