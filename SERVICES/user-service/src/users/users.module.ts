// SERVICES/user-service/src/users/users.module.ts

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AdminUsersController } from './admin.controller';
import { UsersService } from './users.service';
import { AdminService } from './admin.service';

@Module({
    controllers: [UsersController, AdminUsersController],
    providers: [UsersService, AdminService],
    exports: [UsersService, AdminService],
})
export class UsersModule { }


