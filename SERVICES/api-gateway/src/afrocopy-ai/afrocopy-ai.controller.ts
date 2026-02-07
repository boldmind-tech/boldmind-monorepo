
import {
    Controller,
    Get,
    Post,
    Body,
    Query,
    UseGuards,
    Param,
} from '@nestjs/common';
import {
    ApiTags,
    ApiBearerAuth,
    ApiOperation,
    ApiQuery,
    ApiParam,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { AfrocopyAiServiceClient } from '../clients/afrocopy-ai-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('afrocopy-ai')
@Controller('afrocopy-ai')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class AfrocopyAiController {
    constructor(private afrocopyClient: AfrocopyAiServiceClient) { }

    // Copy Generation
    @Post('generate')
    @ApiOperation({ summary: 'Generate copy' })
    async generateCopy(@CurrentUser() user: any, @Body() data: any) {
        return this.afrocopyClient.generateCopy(user.id, data);
    }

    @Post('generate/social')
    @ApiOperation({ summary: 'Generate social caption' })
    async generateSocialCaption(@Body() data: any) {
        return this.afrocopyClient.generateSocialCaption(data);
    }

    @Post('generate/ad')
    @ApiOperation({ summary: 'Generate ad copy' })
    async generateAdCopy(@Body() data: any) {
        return this.afrocopyClient.generateAdCopy(data);
    }

    @Post('generate/email')
    @ApiOperation({ summary: 'Generate email template' })
    async generateEmailTemplate(@Body() data: any) {
        return this.afrocopyClient.generateEmailTemplate(data);
    }

    @Post('generate/blog')
    @ApiOperation({ summary: 'Generate blog post' })
    async generateBlogPost(@Body() data: any) {
        return this.afrocopyClient.generateBlogPost(data);
    }

    // Language-specific
    @Post('translate')
    @ApiOperation({ summary: 'Translate to local language' })
    async translateToLocalLanguage(@Body() data: { text: string; targetLanguage: 'pidgin' | 'yoruba' | 'igbo' | 'hausa' }) {
        return this.afrocopyClient.translateToLocalLanguage(data.text, data.targetLanguage);
    }

    @Post('localize')
    @ApiOperation({ summary: 'Localize content' })
    async localizeContent(@Body() data: { content: string; region: 'nigeria' | 'ghana' | 'kenya' | 'south-africa' }) {
        return this.afrocopyClient.localizeContent(data.content, data.region);
    }

    // Templates
    @Get('templates')
    @ApiOperation({ summary: 'Get templates' })
    @ApiQuery({ name: 'category', required: false })
    @ApiQuery({ name: 'language', required: false })
    async getTemplates(@Query('category') category?: string, @Query('language') language?: string) {
        return this.afrocopyClient.getTemplates(category, language);
    }

    @Post('templates')
    @ApiOperation({ summary: 'Save template' })
    async saveTemplate(@CurrentUser() user: any, @Body() data: any) {
        return this.afrocopyClient.saveTemplate(user.id, data);
    }

    // History & Analytics
    @Get('history')
    @ApiOperation({ summary: 'Get generation history' })
    @ApiQuery({ name: 'type', required: false })
    async getGenerationHistory(@CurrentUser() user: any, @Query('type') type?: string) {
        return this.afrocopyClient.getGenerationHistory(user.id, type);
    }

    @Get('usage')
    @ApiOperation({ summary: 'Get usage stats' })
    async getUsageStats(@CurrentUser() user: any) {
        return this.afrocopyClient.getUsageStats(user.id);
    }

    // Content Improvement
    @Post('improve')
    @ApiOperation({ summary: 'Improve copy' })
    async improveCopy(@Body() data: { originalText: string; suggestions?: string[] }) {
        return this.afrocopyClient.improveCopy(data.originalText, data.suggestions);
    }

    @Post('check/grammar')
    @ApiOperation({ summary: 'Check grammar' })
    async checkGrammar(@Body() data: { text: string; language?: string }) {
        return this.afrocopyClient.checkGrammar(data.text, data.language);
    }

    // Brand Voice
    @Post('brand-voice')
    @ApiOperation({ summary: 'Create brand voice' })
    async createBrandVoice(@CurrentUser() user: any, @Body() data: any) {
        return this.afrocopyClient.createBrandVoice(user.id, data);
    }

    @Post('brand-voice/:id/generate')
    @ApiOperation({ summary: 'Generate with brand voice' })
    @ApiParam({ name: 'id', description: 'Brand Voice ID' })
    async generateWithBrandVoice(
        @CurrentUser() user: any,
        @Param('id') brandVoiceId: string,
        @Body('prompt') prompt: string
    ) {
        return this.afrocopyClient.generateWithBrandVoice(user.id, brandVoiceId, prompt);
    }
}
