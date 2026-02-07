// SERVICES/api-gateway/src/app.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ProxyModule } from './proxy/proxy.module';
import { WebhooksModule } from './webhooks/webhooks.module';
import { HealthModule } from './health/health.module';
import { UsersModule } from './users/users.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PaymentsModule } from './payments/payments.module';
import { EducenterModule } from './educenter/educenter.module';
import { HubModule } from './hub/hub.module';
import { AmebogistModule } from './amebogist/amebogist.module';
import { SocialFactoryModule } from './social-factory/social-factory.module';
import { EmailscraperModule } from './emailscraper/emailscraper.module';
import { NaijaFitherModule } from './naija-fither/naija-fither.module';
import { BoldmindOsModule } from './boldmind-os/boldmind-os.module';
import { SafeaiModule } from './safeai/safeai.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { AiModule } from './ai/ai.module';
import { MediaModule } from './media/media.module';
import { BorderlessRemitModule } from './borderless-remit/borderless-remit.module';
import { ReceiptGeniusModule } from './receipt-genius/receipt-genius.module';
import { PlanaiSuiteModule } from './planai-suite/planai-suite.module';
import { PowerAlertModule } from './power-alert/power-alert.module';
import { FarmgateDirectModule } from './farmgate-direct/farmgate-direct.module';
import { AfrocopyAiModule } from './afrocopy-ai/afrocopy-ai.module';
import { Skill2cashModule } from './skill2cash/skill2cash.module';
import { AnontruthMicModule } from './anontruth-mic/anontruth-mic.module';
import { AfrohustleOsModule } from './afrohustle-os/afrohustle-os.module';
import { ScheduleModule } from '@nestjs/schedule';
import { KeepAliveModule } from './keep-alive/keep-alive.module';
import { ClientsModule } from './clients/clients.module';


@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env.development', '.env'],
    }),
    AuthModule,
    HubModule,
    AmebogistModule,
    UsersModule,
    PaymentsModule,
    EducenterModule,
    SocialFactoryModule,
    EmailscraperModule,
    NaijaFitherModule,
    BoldmindOsModule,
    SafeaiModule,
    AnalyticsModule,
    AiModule,
    MediaModule,
    BorderlessRemitModule,
    ReceiptGeniusModule,
    PlanaiSuiteModule,
    PowerAlertModule,
    FarmgateDirectModule,
    AfrocopyAiModule,
    Skill2cashModule,
    AnontruthMicModule,
    AfrohustleOsModule,
    WebhooksModule,
    HealthModule,
    NotificationsModule,
    KeepAliveModule,
    ClientsModule,
    ProxyModule,

  ],
})
export class AppModule { }