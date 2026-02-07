// SERVICES/api-gateway/src/media/media.module.ts

import { Module } from '@nestjs/common';
import { MediaController } from './media.controller';
import { MediaServiceClient } from '../clients/media-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [MediaController],
    providers: [MediaServiceClient],
    exports: [MediaServiceClient],
})
export class MediaModule { }