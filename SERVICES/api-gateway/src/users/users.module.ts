// SERVICES/api-gateway/src/users/users.module.ts

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserServiceClient } from '../clients/user-service.client';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [AuthModule],
    controllers: [UsersController],
    providers: [UserServiceClient],
    exports: [UserServiceClient],
})
export class UsersModule { }