// SERVICES/api-gateway/src/social-factory/social-factory.module.ts

import { Module } from '@nestjs/common';
import { SocialFactoryController } from './social-factory.controller';
import { SocialFactoryServiceClient } from '../clients/social-factory-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [SocialFactoryController],
    providers: [SocialFactoryServiceClient],
    exports: [SocialFactoryServiceClient],
})
export class SocialFactoryModule { }