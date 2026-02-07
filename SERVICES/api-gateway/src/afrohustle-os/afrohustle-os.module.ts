
import { Module } from '@nestjs/common';
import { AfrohustleOsController } from './afrohustle-os.controller';
import { AfrohustleOsServiceClient } from '../clients/afrohustle-os-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [AfrohustleOsController],
    providers: [AfrohustleOsServiceClient],
    exports: [AfrohustleOsServiceClient],
})
export class AfrohustleOsModule { }
