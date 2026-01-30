// SERVICES/user-service/src/users/users.controller.ts

import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    UseGuards,
    ParseIntPipe,
    DefaultValuePipe,
    // HttpCode,
    // HttpStatus,
    Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AdminService } from './admin.service';
import { CreateUserDto, UpdateUserDto, AdminUpdateUserDto } from './dto';
import { AdminGuard } from '../auth/guards/admin.guard';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService,
        private adminService: AdminService,) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.usersService.findById(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.usersService.delete(id);
    }

    @Get(':id/profiles')
    getProfiles(@Param('id') id: string) {
        return this.usersService.getProfiles(id);
    }

    @Post(':id/profiles')
    createProfile(@Param('id') id: string, @Body() data: any) {
        return this.usersService.createProfile(id, data);
    }

    @Patch(':id/profiles/:productSlug')
    updateProfile(
        @Param('id') id: string,
        @Param('productSlug') productSlug: string,
        @Body() data: any,
    ) {
        return this.usersService.updateProfile(id, productSlug, data);
    }

    @Get(':id/organizations')
    getOrganizations(@Param('id') id: string) {
        return this.usersService.getOrganizations(id);
    }

    @Post(':id/organizations')
    createOrganization(@Param('id') id: string, @Body() data: any) {
        return this.usersService.createOrganization(id, data);
    }

    // ==================== ADMIN ROUTES ====================
    @Get()
    @UseGuards(AdminGuard)
    async findAll(
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

    @Patch('admin/:id')
    @UseGuards(AdminGuard)
    async adminUpdate(
        @Param('id') id: string,
        @Body() adminUpdateUserDto: AdminUpdateUserDto,
    ) {
        return this.adminService.updateUser(id, adminUpdateUserDto);
    }

    @Post('admin/invite')
    @UseGuards(AdminGuard)
    async inviteAdmin(@Body() data: any) {
        return this.adminService.inviteAdmin(data);
    }

    @Get('admin/stats')
    @UseGuards(AdminGuard)
    async getAdminStats() {
        return this.adminService.getAdminStats();
    }

    @Get('admin/audit-logs')
    @UseGuards(AdminGuard)
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

    // User products
    @Get(':id/products')
    @UseGuards(AdminGuard)
    async getUserProducts(@Param('id') id: string) {
        return this.adminService.getUserProducts(id);
    }

    @Post(':id/products')
    @UseGuards(AdminGuard)
    async assignProduct(
        @Param('id') id: string,
        @Body() data: any,
    ) {
        return this.adminService.assignProductToUser(id, data);
    }

}
