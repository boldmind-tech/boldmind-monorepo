// SERVICES/api-gateway/src/receipt-genius/receipt-genius.controller.ts

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
    // ApiBody,
    ApiQuery,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { ReceiptGeniusServiceClient } from '../clients/receipt-genius-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('receipt-genius')
@Controller('receipt-genius')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class ReceiptGeniusController {
    constructor(private receiptGeniusClient: ReceiptGeniusServiceClient) { }

    // Receipts
    @Post('receipts')
    @ApiOperation({ summary: 'Create receipt' })
    async createReceipt(@CurrentUser() user: any, @Body() data: any) {
        return this.receiptGeniusClient.createReceipt(user.id, data);
    }

    @Get('me/receipts')
    @ApiOperation({ summary: 'Get my receipts' })
    @ApiQuery({ name: 'startDate', required: false })
    @ApiQuery({ name: 'endDate', required: false })
    async getMyReceipts(
        @CurrentUser() user: any,
        @Query() query: { startDate?: string; endDate?: string },
    ) {
        return this.receiptGeniusClient.getReceipts(user.id, query);
    }

    @Get('receipts/:id')
    @ApiOperation({ summary: 'Get receipt by ID' })
    @ApiParam({ name: 'id', description: 'Receipt ID' })
    async getReceipt(@Param('id') id: string) {
        return this.receiptGeniusClient.getReceiptById(id);
    }

    @Post('receipts/:id/send')
    @ApiOperation({ summary: 'Send receipt' })
    @ApiParam({ name: 'id', description: 'Receipt ID' })
    async sendReceipt(
        @Param('id') id: string,
        @Body() data: { method: 'email' | 'sms'; recipient: string },
    ) {
        return this.receiptGeniusClient.sendReceipt(id, data.method, data.recipient);
    }

    // Invoices
    @Post('invoices')
    @ApiOperation({ summary: 'Create invoice' })
    async createInvoice(@CurrentUser() user: any, @Body() data: any) {
        return this.receiptGeniusClient.createInvoice(user.id, data);
    }

    @Get('me/invoices')
    @ApiOperation({ summary: 'Get my invoices' })
    @ApiQuery({ name: 'status', required: false })
    async getMyInvoices(
        @CurrentUser() user: any,
        @Query('status') status?: string,
    ) {
        return this.receiptGeniusClient.getInvoices(user.id, status);
    }

    //   @Get('invoices/:id')
    //   @ApiOperation({ summary: 'Get invoice by ID' })
    //   @ApiParam({ name: 'id', description: 'Invoice ID' })
    //   async

}