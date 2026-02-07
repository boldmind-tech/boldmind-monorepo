// SERVICES/api-gateway/src/borderless-remit/borderless-remit.module.ts

import { Module } from '@nestjs/common';
import { BorderlessRemitController } from './borderless-remit.controller';
import { BorderlessRemitServiceClient } from '../clients/borderless-remit-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [BorderlessRemitController],
    providers: [BorderlessRemitServiceClient],
    exports: [BorderlessRemitServiceClient],
})
export class BorderlessRemitModule { }