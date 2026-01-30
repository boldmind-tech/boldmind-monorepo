// SERVICES/hub-service/src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { RoadmapModule } from './roadmap/roadmap.module';
import { FeedbackModule } from './feedback/feedback.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        HttpModule.registerAsync({
            useFactory: () => ({
                timeout: 5000,
                maxRedirects: 5,
            }),
        }),
        PrismaModule,
        AuthModule,
        ProductsModule,
        AnalyticsModule,
        RoadmapModule,
        FeedbackModule,
        AnnouncementsModule,
    ],
})
export class AppModule { }