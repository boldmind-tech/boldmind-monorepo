// SERVICES/api-gateway/src/analytics/analytics.controller.ts

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
    //   ApiBody,
    ApiQuery,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { AnalyticsServiceClient } from '../clients/analytics-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('analytics')
@Controller('analytics')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class AnalyticsController {
    constructor(private analyticsClient: AnalyticsServiceClient) { }

    // Event Tracking
    @Post('events')
    @ApiOperation({ summary: 'Track event' })
    async trackEvent(@Body() data: any) {
        return this.analyticsClient.trackEvent(data);
    }

    @Post('events/batch')
    @ApiOperation({ summary: 'Track batch events' })
    async trackBatchEvents(@Body() data: { events: any[] }) {
        return this.analyticsClient.trackBatchEvents(data.events);
    }

    // User Analytics
    @Get('me/activity')
    @ApiOperation({ summary: 'Get my activity' })
    @ApiQuery({ name: 'period', required: false })
    async getMyActivity(
        @CurrentUser() user: any,
        @Query('period') period?: string,
    ) {
        return this.analyticsClient.getUserActivity(user.id, period);
    }

    @Get('me/journey')
    @ApiOperation({ summary: 'Get my journey' })
    async getMyJourney(@CurrentUser() user: any) {
        return this.analyticsClient.getUserJourney(user.id);
    }

    // Product Analytics
    @Get('products/:slug/metrics')
    @ApiOperation({ summary: 'Get product metrics' })
    @ApiParam({ name: 'slug', description: 'Product slug' })
    @ApiQuery({ name: 'period', required: false })
    async getProductMetrics(
        @Param('slug') slug: string,
        @Query('period') period?: string,
    ) {
        return this.analyticsClient.getProductMetrics(slug, period);
    }

    @Get('products/:slug/usage')
    @ApiOperation({ summary: 'Get product usage' })
    @ApiParam({ name: 'slug', description: 'Product slug' })
    async getProductUsage(@Param('slug') slug: string) {
        return this.analyticsClient.getProductUsage(slug);
    }

    // Dashboard
    @Get('dashboard/overview')
    @ApiOperation({ summary: 'Get dashboard overview' })
    async getDashboardOverview() {
        return this.analyticsClient.getDashboardOverview();
    }

    @Get('metrics/realtime')
    @ApiOperation({ summary: 'Get realtime metrics' })
    async getRealtimeMetrics() {
        return this.analyticsClient.getRealtimeMetrics();
    }

    // Reports
    @Post('reports')
    @ApiOperation({ summary: 'Create report' })
    async createReport(@Body() data: any) {
        return this.analyticsClient.createReport(data);
    }

    @Get('reports')
    @ApiOperation({ summary: 'Get reports' })
    async getReports() {
        return this.analyticsClient.getReports();
    }

    @Post('reports/:id/generate')
    @ApiOperation({ summary: 'Generate report' })
    @ApiParam({ name: 'id', description: 'Report ID' })
    async generateReport(@Param('id') id: string) {
        return this.analyticsClient.generateReport(id);
    }

    // Funnels
    @Get('funnels/:id')
    @ApiOperation({ summary: 'Get funnel analysis' })
    @ApiParam({ name: 'id', description: 'Funnel ID' })
    async getFunnelAnalysis(@Param('id') id: string) {
        return this.analyticsClient.getFunnelAnalysis(id);
    }

    @Post('funnels')
    @ApiOperation({ summary: 'Create funnel' })
    async createFunnel(@Body() data: { name: string; steps: string[] }) {
        return this.analyticsClient.createFunnel(data);
    }

    // Retention
    @Get('retention/cohort')
    @ApiOperation({ summary: 'Get retention cohort' })
    @ApiQuery({ name: 'period', required: false })
    async getRetentionCohort(@Query('period') period?: string) {
        return this.analyticsClient.getRetentionCohort(period);
    }

    // Revenue
    @Get('revenue/breakdown')
    @ApiOperation({ summary: 'Get revenue breakdown' })
    @ApiQuery({ name: 'period', required: false })
    async getRevenueBreakdown(@Query('period') period?: string) {
        return this.analyticsClient.getRevenueBreakdown(period);
    }

    @Get('revenue/mrr-churn')
    @ApiOperation({ summary: 'Get MRR/Churn' })
    async getMrrChurn() {
        return this.analyticsClient.getMrrChurn();
    }
}