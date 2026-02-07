
import {
    Controller,
    Get,
    Post,
    Patch,
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
import { AfrohustleOsServiceClient } from '../clients/afrohustle-os-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('afrohustle-os')
@Controller('afrohustle-os')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class AfrohustleOsController {
    constructor(private afrohustleOsClient: AfrohustleOsServiceClient) { }

    // Blueprints
    @Get('blueprints')
    @ApiOperation({ summary: 'Get blueprints' })
    @ApiQuery({ name: 'category', required: false })
    async getBlueprints(@Query() query: any) {
        return this.afrohustleOsClient.getBlueprints(query);
    }

    @Get('blueprints/:id')
    @ApiOperation({ summary: 'Get blueprint by ID' })
    @ApiParam({ name: 'id', description: 'Blueprint ID' })
    async getBlueprintById(@Param('id') id: string) {
        return this.afrohustleOsClient.getBlueprintById(id);
    }

    @Post('saved-blueprints')
    @ApiOperation({ summary: 'Save blueprint' })
    async saveBlueprint(@CurrentUser() user: any, @Body('blueprintId') blueprintId: string) {
        return this.afrohustleOsClient.saveBlueprint(user.id, blueprintId);
    }

    // Income Tracking
    @Post('income')
    @ApiOperation({ summary: 'Track income' })
    async trackIncome(@CurrentUser() user: any, @Body() data: any) {
        return this.afrohustleOsClient.trackIncome(user.id, data);
    }

    @Get('income')
    @ApiOperation({ summary: 'Get income history' })
    @ApiQuery({ name: 'period', required: false })
    async getIncomeHistory(@CurrentUser() user: any, @Query('period') period?: string) {
        return this.afrohustleOsClient.getIncomeHistory(user.id, period);
    }

    @Get('income/analytics')
    @ApiOperation({ summary: 'Get income analytics' })
    async getIncomeAnalytics(@CurrentUser() user: any) {
        return this.afrohustleOsClient.getIncomeAnalytics(user.id);
    }

    // Hustle Progress
    @Post('hustles')
    @ApiOperation({ summary: 'Start hustle' })
    async startHustle(@CurrentUser() user: any, @Body() data: { blueprintId: string; startDate?: string }) {
        return this.afrohustleOsClient.startHustle(user.id, data.blueprintId, data.startDate);
    }

    @Get('hustles')
    @ApiOperation({ summary: 'Get active hustles' })
    async getActiveHustles(@CurrentUser() user: any) {
        return this.afrohustleOsClient.getActiveHustles(user.id);
    }

    @Patch('hustles/:id')
    @ApiOperation({ summary: 'Update hustle progress' })
    @ApiParam({ name: 'id', description: 'Hustle ID' })
    async updateHustleProgress(
        @CurrentUser() user: any,
        @Param('id') id: string,
        @Body() data: { progress: number; notes?: string }
    ) {
        return this.afrohustleOsClient.updateHustleProgress(user.id, id, data.progress, data.notes);
    }

    // Community Circles
    @Get('circles')
    @ApiOperation({ summary: 'Get circles' })
    @ApiQuery({ name: 'category', required: false })
    async getCircles(@Query('category') category?: string) {
        return this.afrohustleOsClient.getCircles(category);
    }

    @Post('circles/:id/join')
    @ApiOperation({ summary: 'Join circle' })
    @ApiParam({ name: 'id', description: 'Circle ID' })
    async joinCircle(@CurrentUser() user: any, @Param('id') id: string) {
        return this.afrohustleOsClient.joinCircle(user.id, id);
    }

    @Get('circles/:id/messages')
    @ApiOperation({ summary: 'Get circle messages' })
    @ApiParam({ name: 'id', description: 'Circle ID' })
    @ApiQuery({ name: 'page', required: false })
    async getCircleMessages(@Param('id') id: string, @Query('page') page?: number) {
        return this.afrohustleOsClient.getCircleMessages(id, page);
    }

    @Post('circles/:id/messages')
    @ApiOperation({ summary: 'Post to circle' })
    @ApiParam({ name: 'id', description: 'Circle ID' })
    async postToCircle(@CurrentUser() user: any, @Param('id') id: string, @Body('content') content: string) {
        return this.afrohustleOsClient.postToCircle(id, user.id, content);
    }

    // Resource Library
    @Get('resources')
    @ApiOperation({ summary: 'Get resources' })
    @ApiQuery({ name: 'category', required: false })
    @ApiQuery({ name: 'type', required: false })
    async getResources(@Query('category') category?: string, @Query('type') type?: string) {
        return this.afrohustleOsClient.getResources(category, type);
    }

    @Get('resources/:id')
    @ApiOperation({ summary: 'Get resource by ID' })
    @ApiParam({ name: 'id', description: 'Resource ID' })
    async getResourceById(@Param('id') id: string) {
        return this.afrohustleOsClient.getResourceById(id);
    }

    // Goals & Milestones
    @Post('goals')
    @ApiOperation({ summary: 'Set goal' })
    async setGoal(@CurrentUser() user: any, @Body() data: any) {
        return this.afrohustleOsClient.setGoal(user.id, data);
    }

    @Get('goals')
    @ApiOperation({ summary: 'Get goals' })
    @ApiQuery({ name: 'status', required: false })
    async getGoals(@CurrentUser() user: any, @Query('status') status?: 'active' | 'completed' | 'all') {
        return this.afrohustleOsClient.getGoals(user.id, status);
    }

    @Patch('goals/:id')
    @ApiOperation({ summary: 'Update goal progress' })
    @ApiParam({ name: 'id', description: 'Goal ID' })
    async updateGoalProgress(@CurrentUser() user: any, @Param('id') id: string, @Body('currentAmount') currentAmount: number) {
        return this.afrohustleOsClient.updateGoalProgress(user.id, id, currentAmount);
    }
}
