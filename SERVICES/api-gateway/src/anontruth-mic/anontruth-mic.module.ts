
import { Module } from '@nestjs/common';
import { AnontruthMicController } from './anontruth-mic.controller';
import { AnontruthMicServiceClient } from '../clients/anontruth-mic-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [AnontruthMicController],
    providers: [AnontruthMicServiceClient],
    exports: [AnontruthMicServiceClient],
})
export class AnontruthMicModule { }
