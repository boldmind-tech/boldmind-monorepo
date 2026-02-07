// SERVICES/api-gateway/src/naijagig-matcher/naijagig-matcher.module.ts

import { Module } from '@nestjs/common';
import { NaijagigMatcherController } from './naijagig-matcher.controller';
import { NaijagigMatcherServiceClient } from '../clients/naijagig-matcher-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [NaijagigMatcherController],
    providers: [NaijagigMatcherServiceClient],
    exports: [NaijagigMatcherServiceClient],
})
export class NaijagigMatcherModule { }