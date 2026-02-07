// SERVICES/api-gateway/src/boldmind-os/boldmind-os.module.ts

import { Module } from '@nestjs/common';
import { BoldmindOsController } from './boldmind-os.controller';
import { BoldmindOsServiceClient } from '../clients/boldmind-os-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [BoldmindOsController],
    providers: [BoldmindOsServiceClient],
    exports: [BoldmindOsServiceClient],
})
export class BoldmindOsModule { }