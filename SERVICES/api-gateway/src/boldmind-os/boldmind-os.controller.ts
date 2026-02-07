// SERVICES/api-gateway/src/boldmind-os/boldmind-os.controller.ts

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
import { BoldmindOsServiceClient } from '../clients/boldmind-os-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('boldmind-os')
@Controller('boldmind-os')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class BoldmindOsController {
    constructor(private boldmindOsClient: BoldmindOsServiceClient) { }

    // Notes
    @Post('notes')
    @ApiOperation({ summary: 'Create note' })
    async createNote(@CurrentUser() user: any, @Body() data: any) {
        return this.boldmindOsClient.createNote(user.id, data);
    }

    @Get('me/notes')
    @ApiOperation({ summary: 'Get my notes' })
    @ApiQuery({ name: 'tag', required: false })
    @ApiQuery({ name: 'type', required: false })
    async getMyNotes(
        @CurrentUser() user: any,
        @Query() query: { tag?: string; type?: string },
    ) {
        return this.boldmindOsClient.getUserNotes(user.id, query);
    }

    @Get('me/notes/:id')
    @ApiOperation({ summary: 'Get note by ID' })
    @ApiParam({ name: 'id', description: 'Note ID' })
    async getNote(@CurrentUser() user: any, @Param('id') id: string) {
        return this.boldmindOsClient.getNoteById(user.id, id);
    }

    @Patch('me/notes/:id')
    @ApiOperation({ summary: 'Update note' })
    @ApiParam({ name: 'id', description: 'Note ID' })
    async updateNote(
        @CurrentUser() user: any,
        @Param('id') id: string,
        @Body() data: any,
    ) {
        return this.boldmindOsClient.updateNote(user.id, id, data);
    }

    @Delete('me/notes/:id')
    @ApiOperation({ summary: 'Delete note' })
    @ApiParam({ name: 'id', description: 'Note ID' })
    async deleteNote(@CurrentUser() user: any, @Param('id') id: string) {
        return this.boldmindOsClient.deleteNote(user.id, id);
    }

    // Tasks
    @Post('tasks')
    @ApiOperation({ summary: 'Create task' })
    async createTask(@CurrentUser() user: any, @Body() data: any) {
        return this.boldmindOsClient.createTask(user.id, data);
    }

    @Get('me/tasks')
    @ApiOperation({ summary: 'Get my tasks' })
    @ApiQuery({ name: 'status', required: false })
    async getMyTasks(@CurrentUser() user: any, @Query('status') status?: string) {
        return this.boldmindOsClient.getUserTasks(user.id, status as any);
    }

    @Patch('me/tasks/:id/status')
    @ApiOperation({ summary: 'Update task status' })
    @ApiParam({ name: 'id', description: 'Task ID' })
    async updateTaskStatus(
        @CurrentUser() user: any,
        @Param('id') id: string,
        @Body('status') status: string,
    ) {
        return this.boldmindOsClient.updateTaskStatus(user.id, id, status);
    }

    // Pomodoro
    @Post('me/pomodoro/start')
    @ApiOperation({ summary: 'Start pomodoro' })
    async startPomodoro(
        @CurrentUser() user: any,
        @Body('duration') duration?: number,
    ) {
        return this.boldmindOsClient.startPomodoro(user.id, duration);
    }

    @Post('me/pomodoro/:id/stop')
    @ApiOperation({ summary: 'Stop pomodoro' })
    @ApiParam({ name: 'id', description: 'Session ID' })
    async stopPomodoro(@CurrentUser() user: any, @Param('id') id: string) {
        return this.boldmindOsClient.stopPomodoro(user.id, id);
    }

    @Get('me/pomodoro/stats')
    @ApiOperation({ summary: 'Get pomodoro stats' })
    async getPomodoroStats(@CurrentUser() user: any) {
        return this.boldmindOsClient.getPomodoroStats(user.id);
    }

    // Knowledge Graph
    @Get('me/knowledge-graph')
    @ApiOperation({ summary: 'Get knowledge graph' })
    async getKnowledgeGraph(@CurrentUser() user: any) {
        return this.boldmindOsClient.getKnowledgeGraph(user.id);
    }

    @Post('me/knowledge-graph/connections')
    @ApiOperation({ summary: 'Create knowledge connection' })
    async createKnowledgeConnection(
        @CurrentUser() user: any,
        @Body() data: { sourceId: string; targetId: string; relation: string },
    ) {
        return this.boldmindOsClient.createKnowledgeConnection(
            user.id,
            data.sourceId,
            data.targetId,
            data.relation,
        );
    }

    // Pipeline
    @Post('me/pipeline/process')
    @ApiOperation({ summary: 'Process content pipeline' })
    async processPipeline(
        @CurrentUser() user: any,
        @Body('contentId') contentId: string,
    ) {
        return this.boldmindOsClient.processContentPipeline(user.id, contentId);
    }

    @Get('me/pipeline/status')
    @ApiOperation({ summary: 'Get pipeline status' })
    async getPipelineStatus(@CurrentUser() user: any) {
        return this.boldmindOsClient.getPipelineStatus(user.id);
    }

    // Analytics
    @Get('me/analytics')
    @ApiOperation({ summary: 'Get productivity analytics' })
    @ApiQuery({ name: 'period', required: false })
    async getAnalytics(
        @CurrentUser() user: any,
        @Query('period') period?: string,
    ) {
        return this.boldmindOsClient.getProductivityAnalytics(user.id, period);
    }
}