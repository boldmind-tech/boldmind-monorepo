// SERVICES/hub-service/src/analytics/analytics.module.ts
import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Module({
    providers: [AnalyticsService],
    exports: [AnalyticsService],
})
export class AnalyticsModule { }
