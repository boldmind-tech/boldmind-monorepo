
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
import { AnontruthMicServiceClient } from '../clients/anontruth-mic-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('anontruth-mic')
@Controller('anontruth-mic')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class AnontruthMicController {
    constructor(private anontruthMicClient: AnontruthMicServiceClient) { }

    // Audio Drops
    @Post('drops')
    @ApiOperation({ summary: 'Create drop' })
    async createDrop(@CurrentUser() user: any, @Body() data: any) {
        return this.anontruthMicClient.createDrop(user.id, data);
    }

    @Get('drops')
    @ApiOperation({ summary: 'Get drops' })
    @ApiQuery({ name: 'category', required: false })
    @ApiQuery({ name: 'location', required: false })
    async getDrops(@Query() query: any) {
        return this.anontruthMicClient.getDrops(query);
    }

    @Get('drops/trending')
    @ApiOperation({ summary: 'Get trending drops' })
    @ApiQuery({ name: 'location', required: false })
    @ApiQuery({ name: 'timeframe', required: false })
    async getTrendingDrops(@Query('location') location?: string, @Query('timeframe') timeframe?: string) {
        return this.anontruthMicClient.getTrendingDrops(location, timeframe);
    }

    @Get('drops/me')
    @ApiOperation({ summary: 'Get my drops' })
    async getMyDrops(@CurrentUser() user: any) {
        return this.anontruthMicClient.getMyDrops(user.id);
    }

    @Get('drops/:id')
    @ApiOperation({ summary: 'Get drop by ID' })
    @ApiParam({ name: 'id', description: 'Drop ID' })
    async getDropById(@Param('id') id: string) {
        return this.anontruthMicClient.getDropById(id);
    }

    @Post('drops/:id/listen')
    @ApiOperation({ summary: 'Listen to drop' })
    @ApiParam({ name: 'id', description: 'Drop ID' })
    async listenToDrop(@CurrentUser() user: any, @Param('id') id: string) {
        return this.anontruthMicClient.listenToDrop(id, user.id);
    }

    // Boosting
    @Post('drops/:id/boost')
    @ApiOperation({ summary: 'Boost drop' })
    @ApiParam({ name: 'id', description: 'Drop ID' })
    async boostDrop(@Param('id') id: string, @Body() data: any) {
        return this.anontruthMicClient.boostDrop(id, data);
    }

    // Reactions
    @Post('drops/:id/reactions')
    @ApiOperation({ summary: 'Add reaction' })
    @ApiParam({ name: 'id', description: 'Drop ID' })
    async addReaction(@Param('id') id: string, @Body('reaction') reaction: 'support' | 'important' | 'investigate') {
        return this.anontruthMicClient.addReaction(id, reaction);
    }

    // Categories
    @Get('categories')
    @ApiOperation({ summary: 'Get categories' })
    async getCategories() {
        return this.anontruthMicClient.getCategories();
    }

    // Moderation
    @Post('drops/:id/report')
    @ApiOperation({ summary: 'Report drop' })
    @ApiParam({ name: 'id', description: 'Drop ID' })
    async reportDrop(@CurrentUser() user: any, @Param('id') id: string, @Body('reason') reason: string) {
        return this.anontruthMicClient.reportDrop(id, reason, user.id);
    }

    // Verification
    @Post('drops/:id/verify')
    @ApiOperation({ summary: 'Request verification' })
    @ApiParam({ name: 'id', description: 'Drop ID' })
    async requestVerification(@CurrentUser() user: any, @Param('id') id: string, @Body('credentials') credentials: any) {
        return this.anontruthMicClient.requestVerification(id, user.id, credentials);
    }

    // Stats
    @Get('stats')
    @ApiOperation({ summary: 'Get platform stats' })
    async getPlatformStats() {
        return this.anontruthMicClient.getPlatformStats();
    }
}
