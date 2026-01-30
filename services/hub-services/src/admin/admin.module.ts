// SERVICES/hub-service/src/admin/admin.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminGuard } from '../auth/guards/admin-auth.guard';

@Module({
    imports: [
        HttpModule.register({
            timeout: 10000,
            maxRedirects: 5,
        }),
    ],
    controllers: [AdminController],
    providers: [AdminService, AdminGuard],
    exports: [AdminService],
})
export class AdminModule { }