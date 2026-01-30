// SERVICES/hub-service/src/admin/admin.controller.ts
import {
    Controller,
    Get,
    UseGuards,
    Query,
    Param,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { AdminGuard } from '../auth/guards/admin-auth.guard';

@ApiTags('Admin Dashboard')
@ApiBearerAuth()
@Controller('admin/dashboard')
@UseGuards(AdminGuard)
export class AdminController {
    constructor(private adminService: AdminService) { }

    @Get()
    @ApiOperation({ summary: 'Get ecosystem dashboard overview' })
    async getDashboard() {
        return this.adminService.getEcosystemDashboard();
    }

    @Get('products')
    @ApiOperation({ summary: 'Get product statistics' })
    async getProductStats() {
        return this.adminService.getProductStats();
    }

    @Get('products/:slug')
    @ApiOperation({ summary: 'Get detailed product analytics' })
    async getProductAnalytics(@Param('slug') slug: string) {
        return this.adminService.getProductAnalytics(slug);
    }

    @Get('system/health')
    @ApiOperation({ summary: 'Check system health status' })
    async getSystemHealth() {
        return this.adminService.checkSystemHealth();
    }

    @Get('revenue')
    @ApiOperation({ summary: 'Get revenue analytics' })
    async getRevenueAnalytics(@Query('period') period: string = '30d') {
        return this.adminService.getRevenueAnalytics(period);
    }

    @Get('users/growth')
    @ApiOperation({ summary: 'Get user growth analytics' })
    async getUserGrowth(@Query('period') period: string = '30d') {
        return this.adminService.getUserGrowthAnalytics(period);
    }
}