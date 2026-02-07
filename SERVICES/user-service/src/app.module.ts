import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ScheduleModule } from '@nestjs/schedule'
import { PrismaModule } from './prisma/prisma.module'
import { UsersModule } from './users/users.module'
import { HealthModule } from './health/health.module'
import { KeepAliveModule } from './keep-alive/keep-alive.module'

@Module({
    imports: [
        ScheduleModule.forRoot(),
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        PrismaModule,
        UsersModule,
        HealthModule,
        KeepAliveModule,
    ],
})
export class AppModule { }