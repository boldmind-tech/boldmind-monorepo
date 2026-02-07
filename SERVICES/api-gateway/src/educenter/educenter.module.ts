// SERVICES/api-gateway/src/educenter/educenter.module.ts

import { Module } from '@nestjs/common';
import { EducenterController } from './educenter.controller';
import { EducenterServiceClient } from '../clients/educenter-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [EducenterController],
    providers: [EducenterServiceClient],
    exports: [EducenterServiceClient],
})
export class EducenterModule { }