import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { KeepAliveModule } from '../keep-alive/keep-alive.module';

@Module({
  imports: [KeepAliveModule],
  controllers: [HealthController],
})
export class HealthModule { }
