
import { Module } from '@nestjs/common';
import { FarmgateDirectController } from './farmgate-direct.controller';
import { FarmgateDirectServiceClient } from '../clients/farmgate-direct-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [FarmgateDirectController],
    providers: [FarmgateDirectServiceClient],
    exports: [FarmgateDirectServiceClient],
})
export class FarmgateDirectModule { }
