
import { Module } from '@nestjs/common';
import { PlanaiSuiteController } from './planai-suite.controller';
import { PlanaiSuiteServiceClient } from '../clients/planai-suite-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [PlanaiSuiteController],
    providers: [PlanaiSuiteServiceClient],
    exports: [PlanaiSuiteServiceClient],
})
export class PlanaiSuiteModule { }
