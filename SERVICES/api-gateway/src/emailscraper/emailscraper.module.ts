// SERVICES/api-gateway/src/emailscraper/emailscraper.module.ts

import { Module } from '@nestjs/common';
import { EmailscraperController } from './emailscraper.controller';
import { EmailscraperServiceClient } from '../clients/emailscraper-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [EmailscraperController],
    providers: [EmailscraperServiceClient],
    exports: [EmailscraperServiceClient],
})
export class EmailscraperModule { }