// SERVICES/api-gateway/src/naija-fither/naija-fither.module.ts

import { Module } from '@nestjs/common';
import { NaijaFitherController } from './naija-fither.controller';
import { NaijaFitherServiceClient } from '../clients/naija-fither-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [NaijaFitherController],
    providers: [NaijaFitherServiceClient],
    exports: [NaijaFitherServiceClient],
})
export class NaijaFitherModule { }