
import {
    Controller,
    Get,
    Post,
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
    ApiQuery,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { PowerAlertServiceClient } from '../clients/power-alert-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('power-alert')
@Controller('power-alert')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class PowerAlertController {
    constructor(private powerAlertClient: PowerAlertServiceClient) { }

    // Real-time Status
    @Get('status/current')
    @ApiOperation({ summary: 'Get current status by location' })
    @ApiQuery({ name: 'lat', required: true })
    @ApiQuery({ name: 'lng', required: true })
    async getCurrentStatus(@Query() query: { lat: number; lng: number }) {
        return this.powerAlertClient.getCurrentStatus(query);
    }

    @Get('areas/:areaName/status')
    @ApiOperation({ summary: 'Get area status' })
    @ApiParam({ name: 'areaName', description: 'Area Name' })
    async getAreaStatus(@Param('areaName') areaName: string) {
        return this.powerAlertClient.getAreaStatus(areaName);
    }

    @Get('areas/status')
    @ApiOperation({ summary: 'Get all areas status' })
    async getAllAreasStatus() {
        return this.powerAlertClient.getAllAreasStatus();
    }

    // Outage Reporting
    @Post('outages')
    @ApiOperation({ summary: 'Report outage' })
    async reportOutage(@CurrentUser() user: any, @Body() data: any) {
        return this.powerAlertClient.reportOutage(user.id, data);
    }

    @Get('outages')
    @ApiOperation({ summary: 'Get outages' })
    @ApiQuery({ name: 'area', required: false })
    @ApiQuery({ name: 'status', required: false })
    async getOutages(@Query('area') area?: string, @Query('status') status?: string) {
        return this.powerAlertClient.getOutages(area, status);
    }

    // Solar Calculator
    @Post('solar/calculate')
    @ApiOperation({ summary: 'Calculate solar savings' })
    async calculateSolarSavings(@Body() data: any) {
        return this.powerAlertClient.calculateSolarSavings(data);
    }

    @Get('solar/recommendations')
    @ApiOperation({ summary: 'Get solar recommendations' })
    @ApiQuery({ name: 'location', required: true })
    async getSolarRecommendations(@Query('location') location: string) {
        return this.powerAlertClient.getSolarRecommendations(location);
    }

    // Installer Directory
    @Get('installers')
    @ApiOperation({ summary: 'Get solar installers' })
    @ApiQuery({ name: 'location', required: false })
    async getSolarInstallers(@Query('location') location?: string) {
        return this.powerAlertClient.getSolarInstallers(location);
    }

    @Get('installers/:installerId')
    @ApiOperation({ summary: 'Get installer by ID' })
    @ApiParam({ name: 'installerId', description: 'Installer ID' })
    async getInstallerById(@Param('installerId') installerId: string) {
        return this.powerAlertClient.getInstallerById(installerId);
    }

    @Post('installers/:installerId/quote')
    @ApiOperation({ summary: 'Request quote' })
    @ApiParam({ name: 'installerId', description: 'Installer ID' })
    async requestQuote(
        @CurrentUser() user: any,
        @Param('installerId') installerId: string,
        @Body() requirements: any
    ) {
        return this.powerAlertClient.requestQuote(user.id, installerId, requirements);
    }

    // Energy Tracking
    @Post('energy-usage')
    @ApiOperation({ summary: 'Log energy usage' })
    async logEnergyUsage(@CurrentUser() user: any, @Body() data: any) {
        return this.powerAlertClient.logEnergyUsage(user.id, data);
    }

    @Get('energy-history')
    @ApiOperation({ summary: 'Get energy history' })
    @ApiQuery({ name: 'period', required: false })
    async getEnergyHistory(@CurrentUser() user: any, @Query('period') period?: string) {
        return this.powerAlertClient.getEnergyHistory(user.id, period);
    }

    @Get('cost-analysis')
    @ApiOperation({ summary: 'Get cost analysis' })
    async getEnergyCostAnalysis(@CurrentUser() user: any) {
        return this.powerAlertClient.getEnergyCostAnalysis(user.id);
    }

    // Alerts & Notifications
    @Post('subscriptions')
    @ApiOperation({ summary: 'Subscribe to area' })
    async subscribeToArea(@CurrentUser() user: any, @Body('areaName') areaName: string) {
        return this.powerAlertClient.subscribeToArea(user.id, areaName);
    }

    @Get('subscriptions')
    @ApiOperation({ summary: 'Get user subscriptions' })
    async getUserSubscriptions(@CurrentUser() user: any) {
        return this.powerAlertClient.getUserSubscriptions(user.id);
    }

    // Crowd-sourcing Stats
    @Get('community/stats')
    @ApiOperation({ summary: 'Get community stats' })
    @ApiQuery({ name: 'area', required: false })
    async getCommunityStats(@Query('area') areaName?: string) {
        return this.powerAlertClient.getCommunityStats(areaName);
    }
}
