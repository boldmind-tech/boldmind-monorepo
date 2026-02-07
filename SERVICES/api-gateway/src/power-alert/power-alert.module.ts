
import { Module } from '@nestjs/common';
import { PowerAlertController } from './power-alert.controller';
import { PowerAlertServiceClient } from '../clients/power-alert-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [PowerAlertController],
    providers: [PowerAlertServiceClient],
    exports: [PowerAlertServiceClient],
})
export class PowerAlertModule { }
