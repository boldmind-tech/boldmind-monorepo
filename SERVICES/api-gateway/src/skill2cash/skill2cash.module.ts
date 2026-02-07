
import { Module } from '@nestjs/common';
import { Skill2cashController } from './skill2cash.controller';
import { Skill2cashServiceClient } from '../clients/skill2cash-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [Skill2cashController],
    providers: [Skill2cashServiceClient],
    exports: [Skill2cashServiceClient],
})
export class Skill2cashModule { }
