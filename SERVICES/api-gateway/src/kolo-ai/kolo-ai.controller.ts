// SERVICES/api-gateway/src/kolo-ai/kolo-ai.controller.ts

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
import { KoloAiServiceClient } from '../clients/kolo-ai-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('kolo-ai')
@Controller('kolo-ai')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class KoloAiController {
    constructor(private koloAiClient: KoloAiServiceClient) { }

    // Groups
    @Post('groups')
    @ApiOperation({ summary: 'Create thrift group' })
    async createThriftGroup(@CurrentUser() user: any, @Body() data: any) {
        return this.koloAiClient.createThriftGroup(user.id, data);
    }

    @Get('groups')
    @ApiOperation({ summary: 'Get groups' })
    @ApiQuery({ name: 'status', required: false })
    @ApiQuery({ name: 'userId', required: false })
    async getGroups(
        @Query() query: { status?: string; userId?: string },
    ) {
        return this.koloAiClient.getGroups(query);
    }

    @Get('groups/:id')
    @ApiOperation({ summary: 'Get group by ID' })
    @ApiParam({ name: 'id', description: 'Group ID' })
    async getGroup(@Param('id') id: string) {
        return this.koloAiClient.getGroupById(id);
    }

    // Membership
    @Post('groups/:id/join')
    @ApiOperation({ summary: 'Join group' })
    @ApiParam({ name: 'id', description: 'Group ID' })
    async joinGroup(
        @CurrentUser() user: any,
        @Param('id') id: string,
        @Body() data: { paymentMethod: string },
    ) {
        return this.koloAiClient.joinGroup(id, { userId: user.id, ...data });
    }

    @Post('groups/:id/leave')
    @ApiOperation({ summary: 'Leave group' })
    @ApiParam({ name: 'id', description: 'Group ID' })
    async leaveGroup(@CurrentUser() user: any, @Param('id') id: string) {
        return this.koloAiClient.leaveGroup(id, user.id);
    }

    // Contributions
    @Post('groups/:id/contribute')
    @ApiOperation({ summary: 'Make contribution' })
    @ApiParam({ name: 'id', description: 'Group ID' })
    async makeContribution(
        @CurrentUser() user: any,
        @Param('id') id: string,
        @Body('amount') amount: number,
    ) {
        return this.koloAiClient.makeContribution(id, user.id, amount);
    }

    @Get('groups/:id/contributions')
    @ApiOperation({ summary: 'Get contribution history' })
    @ApiParam({ name: 'id', description: 'Group ID' })
    @ApiQuery({ name: 'userId', required: false })
    async getContributionHistory(
        @Param('id') id: string,
        @Query('userId') userId?: string,
    ) {
        return this.koloAiClient.getContributionHistory(id, userId);
    }

    // Payouts
    @Post('groups/:id/payouts/schedule')
    @ApiOperation({ summary: 'Schedule payout' })
    @ApiParam({ name: 'id', description: 'Group ID' })
    async schedulePayout(
        @CurrentUser() user: any,
        @Param('id') id: string,
        @Body('scheduledDate') scheduledDate: string,
    ) {
        return this.koloAiClient.schedulePayout(id, user.id, scheduledDate);
    }

    @Post('groups/:groupId/payouts/:payoutId/process')
    @ApiOperation({ summary: 'Process payout' })
    @ApiParam({ name: 'groupId', description: 'Group ID' })
    @ApiParam({ name: 'payoutId', description: 'Payout ID' })
    async processPayout(
        @Param('groupId') groupId: string,
        @Param('payoutId') payoutId: string,
    ) {
        return this.koloAiClient.processPayout(groupId, payoutId);
    }

    // AI Predictions
    @Get('groups/:id/predictions/default')
    @ApiOperation({ summary: 'Get default prediction' })
    @ApiParam({ name: 'id', description: 'Group ID' })
    async getDefaultPrediction(
        @CurrentUser() user: any,
        @Param('id') id: string,
    ) {
        return this.koloAiClient.getDefaultPrediction(id, user.id);
    }

    @Get('groups/:id/risk-analysis')
    @ApiOperation({ summary: 'Get group risk analysis' })
    @ApiParam({ name: 'id', description: 'Group ID' })
    async getGroupRiskAnalysis(@Param('id') id: string) {
        return this.koloAiClient.getGroupRiskAnalysis(id);
    }

    @Post('groups/:id/auto-pause')
    @ApiOperation({ summary: 'Auto-pause contribution' })
    @ApiParam({ name: 'id', description: 'Group ID' })
    async autoPauseContribution(
        @CurrentUser() user: any,
        @Param('id') id: string,
        @Body('reason') reason?: string,
    ) {
        return this.koloAiClient.autoPauseContribution(id, user.id, reason);
    }

    // Notifications
    @Post('groups/:id/reminders')
    @ApiOperation({ summary: 'Send payment reminder' })
    @ApiParam({ name: 'id', description: 'Group ID' })
    async sendPaymentReminder(
        @CurrentUser() user: any,
        @Param('id') id: string,
    ) {
        return this.koloAiClient.sendPaymentReminder(id, user.id);
    }

    // Credit Building
    @Get('me/credit-score')
    @ApiOperation({ summary: 'Get credit score' })
    async getCreditScore(@CurrentUser() user: any) {
        return this.koloAiClient.getCreditScore(user.id);
    }

    @Get('me/credit-history')
    @ApiOperation({ summary: 'Get credit history' })
    async getCreditHistory(@CurrentUser() user: any) {
        return this.koloAiClient.getCreditHistory(user.id);
    }
}