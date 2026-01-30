// SERVICES/user-service/src/users/admin.controller.ts
import {
    Controller,
    Get,
    Post,
    Patch,
    Body,
    Param,
    Query,
    UseGuards,
    ParseIntPipe,
    DefaultValuePipe,
    HttpCode,
    HttpStatus,
    Req,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { AdminGuard } from '../auth/guards/admin.guard';
import { SuperAdminGuard } from '../auth/guards/super-admin.guard';

@ApiTags('Admin')
@ApiBearerAuth()
@Controller('admin/users')
@UseGuards(AdminGuard)
export class AdminUsersController {
    constructor(private adminService: AdminService) { }

    @Get()
    @ApiOperation({ summary: 'Get all users with pagination and filters' })
    async getAllUsers(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit: number,
        @Query('role') role?: string,
        @Query('isAdmin') isAdmin?: string,
        @Query('search') search?: string,
    ) {
        return this.adminService.findAllUsers({
            page,
            limit,
            role: role as any,
            isAdmin: isAdmin === 'true',
            search,
        } as any);
    }

    @Get('stats')
    @ApiOperation({ summary: 'Get admin dashboard statistics' })
    async getAdminStats() {
        return this.adminService.getAdminStats();
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update user as admin' })
    async updateUser(
        @Param('id') id: string,
        @Body() data: any,
        @Req() req: any,
    ) {
        return this.adminService.updateUser(id, {
            ...data,
            currentUser: req.user,
        });
    }

    @Post('invite')
    @ApiOperation({ summary: 'Invite new admin user' })
    async inviteAdmin(@Body() data: any, @Req() req: any) {
        return this.adminService.inviteAdmin({
            ...data,
            invitedById: req.user.id,
        });
    }

    @Get('audit-logs')
    @ApiOperation({ summary: 'Get audit logs' })
    async getAuditLogs(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit: number,
        @Query('userId') userId?: string,
        @Query('action') action?: string,
    ) {
        return this.adminService.getAuditLogs({
            page,
            limit,
            userId,
            action,
        } as any);
    }

    @Get(':id/products')
    @ApiOperation({ summary: 'Get user products' })
    async getUserProducts(@Param('id') id: string) {
        return this.adminService.getUserProducts(id);
    }

    @Post(':id/products')
    @ApiOperation({ summary: 'Assign product to user' })
    async assignProduct(
        @Param('id') id: string,
        @Body() data: any,
    ) {
        return this.adminService.assignProductToUser(id, data);
    }

    @Get('products/:slug/users')
    @ApiOperation({ summary: 'Get all users for a specific product' })
    async getProductUsers(@Param('slug') slug: string) {
        return this.adminService.getProductUsers(slug);
    }

    @Post('init-super-admin')
    @HttpCode(HttpStatus.OK)
    @UseGuards(SuperAdminGuard)
    @ApiOperation({ summary: 'Initialize super admin (only for super admin)' })
    async initSuperAdmin() {
        return this.adminService.createSuperAdminIfNotExists();
    }
}