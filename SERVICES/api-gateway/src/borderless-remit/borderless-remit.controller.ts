// SERVICES/api-gateway/src/borderless-remit/borderless-remit.controller.ts

import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Query,
    UseGuards,
    Delete
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
import { BorderlessRemitServiceClient } from '../clients/borderless-remit-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('borderless-remit')
@Controller('borderless-remit')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class BorderlessRemitController {
    constructor(private borderlessRemitClient: BorderlessRemitServiceClient) { }

    // Rates
    @Post('rates/compare')
    @ApiOperation({ summary: 'Compare rates' })
    async compareRates(@Body() data: any) {
        return this.borderlessRemitClient.compareRates(data);
    }

    @Get('rates/current')
    @ApiOperation({ summary: 'Get current rates' })
    @ApiQuery({ name: 'pair', required: false })
    async getCurrentRates(@Query('pair') currencyPair?: string) {
        return this.borderlessRemitClient.getCurrentRates(currencyPair);
    }

    @Get('rates/history')
    @ApiOperation({ summary: 'Get rate history' })
    @ApiQuery({ name: 'pair', required: true })
    @ApiQuery({ name: 'days', required: false })
    async getRateHistory(
        @Query('pair') currencyPair: string,
        @Query('days') days?: number,
    ) {
        return this.borderlessRemitClient.getRateHistory(currencyPair, days);
    }

    // Bank vs Black Market
    @Get('rates/bank')
    @ApiOperation({ summary: 'Get bank rate' })
    @ApiQuery({ name: 'currency', required: true })
    async getBankRate(@Query('currency') currency: string) {
        return this.borderlessRemitClient.getBankRate(currency);
    }

    @Get('rates/black-market')
    @ApiOperation({ summary: 'Get black market rate' })
    @ApiQuery({ name: 'currency', required: true })
    async getBlackMarketRate(@Query('currency') currency: string) {
        return this.borderlessRemitClient.getBlackMarketRate(currency);
    }

    // Transfers
    @Post('transfers')
    @ApiOperation({ summary: 'Create transfer' })
    async createTransfer(@CurrentUser() user: any, @Body() data: any) {
        return this.borderlessRemitClient.createTransfer(user.id, data);
    }

    @Get('me/transfers')
    @ApiOperation({ summary: 'Get my transfers' })
    @ApiQuery({ name: 'status', required: false })
    async getMyTransfers(
        @CurrentUser() user: any,
        @Query('status') status?: string,
    ) {
        return this.borderlessRemitClient.getTransfers(user.id, status);
    }

    @Get('transfers/:id')
    @ApiOperation({ summary: 'Get transfer by ID' })
    @ApiParam({ name: 'id', description: 'Transfer ID' })
    async getTransfer(@Param('id') id: string) {
        return this.borderlessRemitClient.getTransferById(id);
    }

    @Post('transfers/:id/cancel')
    @ApiOperation({ summary: 'Cancel transfer' })
    @ApiParam({ name: 'id', description: 'Transfer ID' })
    async cancelTransfer(
        @Param('id') id: string,
        @Body('reason') reason?: string,
    ) {
        return this.borderlessRemitClient.cancelTransfer(id, reason);
    }

    // Receipts
    @Get('transfers/:id/receipt')
    @ApiOperation({ summary: 'Generate receipt' })
    @ApiParam({ name: 'id', description: 'Transfer ID' })
    async generateReceipt(@Param('id') id: string) {
        return this.borderlessRemitClient.generateReceipt(id);
    }

    // Rate Alerts
    @Post('me/alerts')
    @ApiOperation({ summary: 'Create rate alert' })
    async createRateAlert(@CurrentUser() user: any, @Body() data: any) {
        return this.borderlessRemitClient.createRateAlert(user.id, data);
    }

    @Get('me/alerts')
    @ApiOperation({ summary: 'Get my rate alerts' })
    async getMyRateAlerts(@CurrentUser() user: any) {
        return this.borderlessRemitClient.getRateAlerts(user.id);
    }

    @Delete('me/alerts/:id')
    @ApiOperation({ summary: 'Delete rate alert' })
    @ApiParam({ name: 'id', description: 'Alert ID' })
    async deleteRateAlert(@CurrentUser() user: any, @Param('id') id: string) {
        return this.borderlessRemitClient.deleteRateAlert(user.id, id);
    }

    // Partners
    @Get('partners')
    @ApiOperation({ summary: 'Get partner links' })
    async getPartnerLinks() {
        return this.borderlessRemitClient.getPartnerLinks();
    }

    @Post('partners/:id/click')
    @ApiOperation({ summary: 'Track partner click' })
    @ApiParam({ name: 'id', description: 'Partner ID' })
    async trackPartnerClick(
        @CurrentUser() user: any,
        @Param('id') id: string,
    ) {
        return this.borderlessRemitClient.trackPartnerClick(id, user.id);
    }
}