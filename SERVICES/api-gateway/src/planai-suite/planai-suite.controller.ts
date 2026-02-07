
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
import { PlanaiSuiteServiceClient } from '../clients/planai-suite-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('planai-suite')
@Controller('planai-suite')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class PlanaiSuiteController {
    constructor(private planaiSuiteClient: PlanaiSuiteServiceClient) { }

    // Credibility Hubs
    @Post('portfolio')
    @ApiOperation({ summary: 'Create portfolio' })
    async createPortfolio(@CurrentUser() user: any, @Body() data: any) {
        return this.planaiSuiteClient.createPortfolio(user.id, data);
    }

    @Get('portfolio')
    @ApiOperation({ summary: 'Get portfolio' })
    async getPortfolio(@CurrentUser() user: any) {
        return this.planaiSuiteClient.getPortfolio(user.id);
    }

    @Post('portfolio/linkedin-optimize')
    @ApiOperation({ summary: 'Optimize LinkedIn profile' })
    async optimizeLinkedIn(@CurrentUser() user: any, @Body() profileData: any) {
        return this.planaiSuiteClient.optimizeLinkedIn(user.id, profileData);
    }

    // Business Planning
    @Post('business-plan')
    @ApiOperation({ summary: 'Generate business plan' })
    async generateBusinessPlan(@CurrentUser() user: any, @Body() data: any) {
        return this.planaiSuiteClient.generateBusinessPlan(user.id, data);
    }

    @Get('business-plan/:planId')
    @ApiOperation({ summary: 'Get business plan' })
    @ApiParam({ name: 'planId', description: 'Business Plan ID' })
    async getBusinessPlan(@CurrentUser() user: any, @Param('planId') planId: string) {
        return this.planaiSuiteClient.getBusinessPlan(user.id, planId);
    }

    // Financial Forecasting
    @Post('financial-model')
    @ApiOperation({ summary: 'Create financial model' })
    async createFinancialModel(@CurrentUser() user: any, @Body() data: any) {
        return this.planaiSuiteClient.createFinancialModel(user.id, data);
    }

    @Get('financial-model/:modelId/cashflow')
    @ApiOperation({ summary: 'Get cashflow projection' })
    @ApiParam({ name: 'modelId', description: 'Financial Model ID' })
    @ApiQuery({ name: 'months', required: false })
    async getCashflowProjection(
        @CurrentUser() user: any,
        @Param('modelId') modelId: string,
        @Query('months') months?: number
    ) {
        return this.planaiSuiteClient.getCashflowProjection(user.id, modelId, months);
    }

    // Investor Readiness
    @Post('pitch-deck')
    @ApiOperation({ summary: 'Generate pitch deck' })
    async generatePitchDeck(@CurrentUser() user: any, @Body('businessPlanId') businessPlanId: string) {
        return this.planaiSuiteClient.generatePitchDeck(user.id, businessPlanId);
    }

    @Get('investor-documents')
    @ApiOperation({ summary: 'Get investor documents' })
    async getInvestorDocuments(@CurrentUser() user: any) {
        return this.planaiSuiteClient.getInvestorDocuments(user.id);
    }

    // Branding & Design
    @Post('branding/logo')
    @ApiOperation({ summary: 'Generate logo' })
    async generateLogo(@CurrentUser() user: any, @Body() data: any) {
        return this.planaiSuiteClient.generateLogo(user.id, data);
    }

    @Post('branding/kit')
    @ApiOperation({ summary: 'Generate brand kit' })
    async generateBrandKit(@CurrentUser() user: any, @Body('logoId') logoId: string) {
        return this.planaiSuiteClient.generateBrandKit(user.id, logoId);
    }

    // Digital Storefronts
    @Post('store')
    @ApiOperation({ summary: 'Create store' })
    async createStore(@CurrentUser() user: any, @Body() data: any) {
        return this.planaiSuiteClient.createStore(user.id, data);
    }

    @Get('store/:storeId')
    @ApiOperation({ summary: 'Get store' })
    @ApiParam({ name: 'storeId', description: 'Store ID' })
    async getStore(@CurrentUser() user: any, @Param('storeId') storeId: string) {
        return this.planaiSuiteClient.getStore(user.id, storeId);
    }

    @Post('store/:storeId/products')
    @ApiOperation({ summary: 'Add product to store' })
    @ApiParam({ name: 'storeId', description: 'Store ID' })
    async addProduct(@CurrentUser() user: any, @Param('storeId') storeId: string, @Body() productData: any) {
        return this.planaiSuiteClient.addProduct(user.id, storeId, productData);
    }

    // Marketing Automation
    @Post('campaigns')
    @ApiOperation({ summary: 'Create campaign' })
    async createCampaign(@CurrentUser() user: any, @Body() data: any) {
        return this.planaiSuiteClient.createCampaign(user.id, data);
    }

    @Get('campaigns')
    @ApiOperation({ summary: 'Get campaigns' })
    @ApiQuery({ name: 'status', required: false })
    async getCampaigns(@CurrentUser() user: any, @Query('status') status?: string) {
        return this.planaiSuiteClient.getCampaigns(user.id, status);
    }

    // Analytics Dashboard
    @Get('analytics')
    @ApiOperation({ summary: 'Get business analytics' })
    @ApiQuery({ name: 'period', required: false })
    async getBusinessAnalytics(@CurrentUser() user: any, @Query('period') period?: string) {
        return this.planaiSuiteClient.getBusinessAnalytics(user.id, period);
    }

    @Get('analytics/cross-platform')
    @ApiOperation({ summary: 'Get cross-platform metrics' })
    async getCrossPlatformMetrics(@CurrentUser() user: any) {
        return this.planaiSuiteClient.getCrossPlatformMetrics(user.id);
    }
}
