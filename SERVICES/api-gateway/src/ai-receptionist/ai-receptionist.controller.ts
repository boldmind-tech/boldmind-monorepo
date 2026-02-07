// SERVICES/api-gateway/src/ai-receptionist/ai-receptionist.controller.ts

import {
    Controller,
    Get,
    Post,
    Patch,
    Body,
    Param,
    Query,
    UseGuards,
    Delete,
} from '@nestjs/common';
import {
    ApiTags,
    ApiBearerAuth,
    ApiOperation,
    ApiParam,
    // ApiBody,
    ApiQuery,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { AiReceptionistServiceClient } from '../clients/ai-receptionist-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('ai-receptionist')
@Controller('ai-receptionist')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class AiReceptionistController {
    constructor(private aiReceptionistClient: AiReceptionistServiceClient) { }

    // Configuration
    @Post('config')
    @ApiOperation({ summary: 'Configure receptionist' })
    async configureReceptionist(@CurrentUser() user: any, @Body() data: any) {
        return this.aiReceptionistClient.configureReceptionist(user.id, data);
    }

    @Get('me/config')
    @ApiOperation({ summary: 'Get my configuration' })
    async getMyConfiguration(@CurrentUser() user: any) {
        return this.aiReceptionistClient.getConfiguration(user.id);
    }

    // Leads
    @Get('me/leads')
    @ApiOperation({ summary: 'Get my leads' })
    @ApiQuery({ name: 'status', required: false })
    @ApiQuery({ name: 'platform', required: false })
    @ApiQuery({ name: 'page', required: false })
    async getMyLeads(
        @CurrentUser() user: any,
        @Query() query: { status?: string; platform?: string; page?: number },
    ) {
        return this.aiReceptionistClient.getLeads(user.id, query);
    }

    @Get('me/leads/:id')
    @ApiOperation({ summary: 'Get lead by ID' })
    @ApiParam({ name: 'id', description: 'Lead ID' })
    async getLead(@CurrentUser() user: any, @Param('id') id: string) {
        return this.aiReceptionistClient.getLeadById(user.id, id);
    }

    @Patch('me/leads/:id')
    @ApiOperation({ summary: 'Update lead status' })
    @ApiParam({ name: 'id', description: 'Lead ID' })
    async updateLeadStatus(
        @CurrentUser() user: any,
        @Param('id') id: string,
        @Body() data: { status: string; notes?: string },
    ) {
        return this.aiReceptionistClient.updateLeadStatus(user.id, id, data.status, data.notes);
    }

    // Appointments
    @Get('me/appointments')
    @ApiOperation({ summary: 'Get my appointments' })
    @ApiQuery({ name: 'status', required: false })
    async getMyAppointments(
        @CurrentUser() user: any,
        @Query('status') status?: string,
    ) {
        return this.aiReceptionistClient.getAppointments(user.id, status);
    }

    @Post('me/appointments')
    @ApiOperation({ summary: 'Create appointment' })
    async createAppointment(
        @CurrentUser() user: any,
        @Body() data: { leadId: string; dateTime: string; duration: number; notes?: string },
    ) {
        return this.aiReceptionistClient.createAppointment(user.id, data);
    }

    // Analytics
    @Get('me/analytics')
    @ApiOperation({ summary: 'Get my analytics' })
    @ApiQuery({ name: 'period', required: false })
    async getMyAnalytics(
        @CurrentUser() user: any,
        @Query('period') period?: string,
    ) {
        return this.aiReceptionistClient.getAnalytics(user.id, period);
    }

    // Platforms
    @Post('me/platforms')
    @ApiOperation({ summary: 'Connect platform' })
    async connectPlatform(
        @CurrentUser() user: any,
        @Body() data: { platform: string; accessToken: string },
    ) {
        return this.aiReceptionistClient.connectPlatform(user.id, data.platform, data.accessToken);
    }

    @Delete('me/platforms/:platform')
    @ApiOperation({ summary: 'Disconnect platform' })
    @ApiParam({ name: 'platform', description: 'Platform name' })
    async disconnectPlatform(
        @CurrentUser() user: any,
        @Param('platform') platform: string,
    ) {
        return this.aiReceptionistClient.disconnectPlatform(user.id, platform);
    }

    // @Get('me/platforms')
    // @ApiOperation({ summary: 'Get connected platforms' })
    // async getConnectedPlatforms(@CurrentUser() user: any) {
    //     return this.aiReceptionistClient.(user.id);
    // }
}