// SERVICES/api-gateway/src/hub/hub.controller.ts

import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    Query,
    UseGuards,
} from '@nestjs/common';
import {
    ApiTags,
    ApiBearerAuth,
    ApiOperation,
    ApiParam,
    //   ApiBody,
    ApiQuery,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { HubServiceClient } from '../clients/hub-service.client';

@ApiTags('hub')
@Controller('hub')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class HubController {
    constructor(private hubClient: HubServiceClient) { }

    // Dashboard
    @Get('dashboard/stats')
    @ApiOperation({ summary: 'Get dashboard stats' })
    async getDashboardStats() {
        return this.hubClient.getDashboardStats();
    }

    @Get('analytics/revenue')
    @ApiOperation({ summary: 'Get revenue analytics' })
    @ApiQuery({ name: 'startDate', required: false })
    @ApiQuery({ name: 'endDate', required: false })
    @ApiQuery({ name: 'product', required: false })
    async getRevenueAnalytics(
        @Query() query: { startDate?: string; endDate?: string; product?: string },
    ) {
        return this.hubClient.getRevenueAnalytics(query);
    }

    // Products
    @Get('products')
    @ApiOperation({ summary: 'Get all products' })
    @ApiQuery({ name: 'status', required: false })
    @ApiQuery({ name: 'category', required: false })
    async getProducts(@Query() query: { status?: string; category?: string }) {
        return this.hubClient.getAllProducts(query);
    }

    @Get('products/:id')
    @ApiOperation({ summary: 'Get product by ID' })
    @ApiParam({ name: 'id', description: 'Product ID' })
    async getProduct(@Param('id') id: string) {
        return this.hubClient.getProductById(id);
    }

    @Post('products')
    @ApiOperation({ summary: 'Create product listing' })
    async createProduct(@Body() data: any) {
        return this.hubClient.createProductListing(data);
    }

    @Patch('products/:id')
    @ApiOperation({ summary: 'Update product' })
    async updateProduct(@Param('id') id: string, @Body() data: any) {
        return this.hubClient.updateProduct(id, data);
    }

    @Delete('products/:id')
    @ApiOperation({ summary: 'Delete product' })
    async deleteProduct(@Param('id') id: string) {
        return this.hubClient.deleteProduct(id);
    }

    // Team
    @Get('team')
    @ApiOperation({ summary: 'Get team members' })
    async getTeamMembers() {
        return this.hubClient.getTeamMembers();
    }

    @Post('team/invite')
    @ApiOperation({ summary: 'Invite team member' })
    async inviteTeamMember(@Body() data: { email: string; role: string }) {
        return this.hubClient.inviteTeamMember(data.email, data.role);
    }

    @Delete('team/:id')
    @ApiOperation({ summary: 'Remove team member' })
    @ApiParam({ name: 'id', description: 'Member ID' })
    async removeTeamMember(@Param('id') id: string) {
        return this.hubClient.removeTeamMember(id);
    }

    // Announcements
    @Get('announcements')
    @ApiOperation({ summary: 'Get announcements' })
    async getAnnouncements() {
        return this.hubClient.getAnnouncements();
    }

    @Post('announcements')
    @ApiOperation({ summary: 'Create announcement' })
    async createAnnouncement(@Body() data: { title: string; content: string; priority?: string }) {
        return this.hubClient.createAnnouncement(data);
    }
}