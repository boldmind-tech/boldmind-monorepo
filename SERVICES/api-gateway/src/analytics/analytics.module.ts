// SERVICES/api-gateway/src/analytics/analytics.module.ts

import { Module } from '@nestjs/common';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsServiceClient } from '../clients/analytics-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [AnalyticsController],
    providers: [AnalyticsServiceClient],
    exports: [AnalyticsServiceClient],
})
export class AnalyticsModule { }