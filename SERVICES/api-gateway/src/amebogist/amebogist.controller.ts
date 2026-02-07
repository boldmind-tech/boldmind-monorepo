// SERVICES/api-gateway/src/amebogist/amebogist.controller.ts

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
    // ApiBody,
    ApiQuery,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { AmebogistServiceClient } from '../clients/amebogist-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('amebogist')
@Controller('amebogist')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class AmebogistController {
    constructor(private amebogistClient: AmebogistServiceClient) { }

    // Articles
    @Public()
    @Get('articles')
    @ApiOperation({ summary: 'Get all articles' })
    @ApiQuery({ name: 'category', required: false })
    @ApiQuery({ name: 'tag', required: false })
    @ApiQuery({ name: 'page', required: false })
    @ApiQuery({ name: 'limit', required: false })
    @ApiQuery({ name: 'status', required: false })
    async getArticles(
        @Query() query: { category?: string; tag?: string; page?: number; limit?: number; status?: string },
    ) {
        return this.amebogistClient.getAllArticles(query);
    }

    @Public()
    @Get('articles/:slug')
    @ApiOperation({ summary: 'Get article by slug' })
    @ApiParam({ name: 'slug', description: 'Article slug' })
    async getArticle(@Param('slug') slug: string) {
        return this.amebogistClient.getArticleBySlug(slug);
    }

    @Post('articles')
    @ApiOperation({ summary: 'Create article' })
    async createArticle(@CurrentUser() user: any, @Body() data: any) {
        return this.amebogistClient.createArticle(user.id, data);
    }

    @Patch('articles/:id')
    @ApiOperation({ summary: 'Update article' })
    @ApiParam({ name: 'id', description: 'Article ID' })
    async updateArticle(@Param('id') id: string, @Body() data: any) {
        return this.amebogistClient.updateArticle(id, data);
    }

    @Delete('articles/:id')
    @ApiOperation({ summary: 'Delete article' })
    @ApiParam({ name: 'id', description: 'Article ID' })
    async deleteArticle(@Param('id') id: string) {
        return this.amebogistClient.deleteArticle(id);
    }

    // Comments
    @Public()
    @Get('articles/:id/comments')
    @ApiOperation({ summary: 'Get article comments' })
    @ApiParam({ name: 'id', description: 'Article ID' })
    async getComments(@Param('id') id: string) {
        return this.amebogistClient.getArticleComments(id);
    }

    @Post('articles/:id/comments')
    @ApiOperation({ summary: 'Create comment' })
    @ApiParam({ name: 'id', description: 'Article ID' })
    async createComment(
        @CurrentUser() user: any,
        @Param('id') id: string,
        @Body() data: any,
    ) {
        return this.amebogistClient.createComment(id, user.id, data);
    }

    @Patch('comments/:id/react')
    @ApiOperation({ summary: 'React to a comment' })
    @ApiParam({ name: 'id', description: 'Comment ID' })
    async reactToComment(
        @Param('id') id: string,
        @Body() data: { reaction: string },
    ) {
        return this.amebogistClient.reactToComment(id, data.reaction);
    }

    // Categories
    @Public()
    @Get('categories')
    @ApiOperation({ summary: 'Get categories' })
    async getCategories() {
        return this.amebogistClient.getCategories();
    }

    // Trending
    @Public()
    @Get('trending')
    @ApiOperation({ summary: 'Get trending articles' })
    @ApiQuery({ name: 'limit', required: false })
    async getTrending(@Query('limit') limit?: number) {
        return this.amebogistClient.getTrendingArticles(limit);
    }

    // Search
    @Public()
    @Get('search')
    @ApiOperation({ summary: 'Search articles' })
    @ApiQuery({ name: 'q', required: true })
    async searchArticles(@Query('q') query: string) {
        return this.amebogistClient.searchArticles(query);
    }

    @Post('articles/generate-ai')
    @ApiOperation({ summary: 'Generate article using AI' })
    async generateAIPost(@Body() data: { topic: string; style?: string; language?: string; model?: string }) {
        return this.amebogistClient.generateAIPost(data);
    }

    @Public()
    @Get('articles/trends')
    @ApiOperation({ summary: 'Get trending tech updates' })
    async getTrends() {
        return this.amebogistClient.getTrends();
    }

    @Post('articles/:id/video-factory')
    @ApiOperation({ summary: 'Convert article to video' })
    @ApiParam({ name: 'id', description: 'Article ID' })
    async triggerVideoFactory(@Param('id') id: string) {
        return this.amebogistClient.triggerVideoFactory(id);
    }

    // Author Stats
    @Get('me/stats')
    @ApiOperation({ summary: 'Get my author stats' })
    async getMyStats(@CurrentUser() user: any) {
        return this.amebogistClient.getAuthorStats(user.id);
    }
}