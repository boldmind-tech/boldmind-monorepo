

// SERVICES/api-gateway/src/users/users.controller.ts

import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';
import {
    ApiTags,
    ApiBearerAuth,
    ApiOperation,
    ApiParam,
    ApiBody,
    ApiResponse,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { UserServiceClient } from '../clients/user-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-pofile.dto';

@ApiTags('users')
@Controller('users')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class UsersController {
    constructor(private userServiceClient: UserServiceClient) { }

    @Post()
    @ApiOperation({ summary: 'Create a new user' })
    @ApiBody({ type: CreateUserDto })
    async create(@Body() data: CreateUserDto) {
        return this.userServiceClient.createUser(data);
    }

    @Get('me')
    @ApiOperation({ summary: 'Get current user information' })
    @ApiResponse({ status: 200, description: 'Returns current user data' })
    async getMe(@CurrentUser() user: any) {
        return this.userServiceClient.getUserById(user.id);
    }

    @Get(':userId')
    @ApiOperation({ summary: 'Get user by ID' })
    @ApiParam({ name: 'userId', description: 'User ID', type: 'string' })
    async getUserById(@Param('userId') userId: string) {
        return this.userServiceClient.getUserById(userId);
    }

    @Patch(':userId')
    @ApiOperation({ summary: 'Update user' })
    @ApiParam({ name: 'userId', description: 'User ID', type: 'string' })
    @ApiBody({ type: UpdateUserDto })
    async updateUser(@Param('userId') userId: string, @Body() data: UpdateUserDto) {
        return this.userServiceClient.updateUser(userId, data);
    }

    @Delete(':userId')
    @ApiOperation({ summary: 'Delete user' })
    @ApiParam({ name: 'userId', description: 'User ID', type: 'string' })
    async deleteUser(@Param('userId') userId: string) {
        return this.userServiceClient.deleteUser(userId);
    }

    @Get('me/profiles')
    @ApiOperation({ summary: 'Get current user profiles' })
    async getMyProfiles(@CurrentUser() user: any) {
        return this.userServiceClient.getUserProfiles(user.id);
    }

    @Post('me/profiles')
    @ApiOperation({ summary: 'Create user profile' })
    @ApiBody({ type: CreateProfileDto })
    async createProfile(@CurrentUser() user: any, @Body() data: CreateProfileDto) {
        return this.userServiceClient.createProfile(user.id, data);
    }

    @Patch('me/profiles/:productSlug')
    @ApiOperation({ summary: 'Update user profile' })
    @ApiParam({ name: 'productSlug', description: 'Product slug', type: 'string' })
    @ApiBody({ type: UpdateProfileDto })
    async updateProfile(
        @CurrentUser() user: any,
        @Param('productSlug') productSlug: string,
        @Body() data: UpdateProfileDto,
    ) {
        return this.userServiceClient.updateProfile(user.id, productSlug, data);
    }
}