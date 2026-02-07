// SERVICES/api-gateway/src/payments/payments.controller.ts

import {
    Controller,
    Get,
    Post,
    //   Patch,
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
import { PaymentServiceClient } from '../clients/payment-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('payments')
@Controller('payments')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class PaymentsController {
    constructor(private paymentClient: PaymentServiceClient) { }

    @Post('initialize')
    @ApiOperation({ summary: 'Initialize payment' })
    async initializePayment(@Body() data: any) {
        return this.paymentClient.initializePayment(data);
    }

    @Post('verify')
    @ApiOperation({ summary: 'Verify payment' })
    async verifyPayment(@Body() data: { reference: string }) {
        return this.paymentClient.verifyPayment(data);
    }

    @Get('me/transactions')
    @ApiOperation({ summary: 'Get my transaction history' })
    @ApiQuery({ name: 'page', required: false })
    @ApiQuery({ name: 'limit', required: false })
    async getMyTransactions(
        @CurrentUser() user: any,
        @Query() query: { page?: number; limit?: number },
    ) {
        return this.paymentClient.getTransactionHistory(user.id, query);
    }

    @Post('subscriptions')
    @ApiOperation({ summary: 'Create subscription' })
    async createSubscription(@Body() data: any) {
        return this.paymentClient.createSubscription(data);
    }

    @Get('me/subscriptions')
    @ApiOperation({ summary: 'Get my subscriptions' })
    async getMySubscriptions(@CurrentUser() user: any) {
        return this.paymentClient.getUserSubscriptions(user.id);
    }

    @Post('subscriptions/:id/cancel')
    @ApiOperation({ summary: 'Cancel subscription' })
    @ApiParam({ name: 'id', description: 'Subscription ID' })
    async cancelSubscription(@Param('id') id: string) {
        return this.paymentClient.cancelSubscription(id);
    }

    @Get('plans')
    @ApiOperation({ summary: 'Get pricing plans' })
    @ApiQuery({ name: 'productSlug', required: false })
    async getPlans(@Query('productSlug') productSlug?: string) {
        return this.paymentClient.getPricingPlans(productSlug);
    }

    @Get('me/wallet')
    @ApiOperation({ summary: 'Get wallet balance' })
    async getWalletBalance(@CurrentUser() user: any) {
        return this.paymentClient.getWalletBalance(user.id);
    }

    @Post('me/wallet/fund')
    @ApiOperation({ summary: 'Fund wallet' })
    async fundWallet(
        @CurrentUser() user: any,
        @Body() data: { amount: number; paymentMethod: string },
    ) {
        return this.paymentClient.fundWallet(user.id, data.amount, data.paymentMethod);
    }

    @Post('me/wallet/transfer')
    @ApiOperation({ summary: 'Transfer from wallet' })
    async transferFromWallet(
        @CurrentUser() user: any,
        @Body() data: { recipientId: string; amount: number; description?: string },
    ) {
        return this.paymentClient.transferFromWallet(
            user.id,
            data.recipientId,
            data.amount,
            data.description,
        );
    }

    @Post('refund')
    @ApiOperation({ summary: 'Request refund' })
    async requestRefund(
        @Body() data: { transactionId: string; reason?: string },
    ) {
        return this.paymentClient.requestRefund(data.transactionId, data.reason);
    }
}