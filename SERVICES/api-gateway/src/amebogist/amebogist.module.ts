// SERVICES/api-gateway/src/amebogist/amebogist.module.ts

import { Module } from '@nestjs/common';
import { AmebogistController } from './amebogist.controller';
import { AmebogistServiceClient } from '../clients/amebogist-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [AmebogistController],
    providers: [AmebogistServiceClient],
    exports: [AmebogistServiceClient],
})
export class AmebogistModule { }