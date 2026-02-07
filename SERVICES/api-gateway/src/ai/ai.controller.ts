// SERVICES/api-gateway/src/ai/ai.controller.ts

import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    //   Query,
    UseGuards,
} from '@nestjs/common';
import {
    ApiTags,
    ApiBearerAuth,
    ApiOperation,
    ApiParam,
    //   ApiBody,
    //   ApiQuery,
} from '@nestjs/swagger';
import { SupabaseAuthGuard } from '../auth/guards/supabase-auth.guard';
import { AiServiceClient } from '../clients/ai-service.client';

@ApiTags('ai')
@Controller('ai')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class AiController {
    constructor(private aiClient: AiServiceClient) { }

    // Text Generation
    @Post('generate/text')
    @ApiOperation({ summary: 'Generate text' })
    async generateText(@Body() data: any) {
        return this.aiClient.generateText(data);
    }

    @Post('generate/chat')
    @ApiOperation({ summary: 'Generate chat completion' })
    async generateChatCompletion(@Body() data: { messages: any[]; model?: string }) {
        return this.aiClient.generateChatCompletion(data.messages, data.model);
    }

    // Image Generation
    @Post('generate/image')
    @ApiOperation({ summary: 'Generate image' })
    async generateImage(@Body() data: any) {
        return this.aiClient.generateImage(data);
    }

    @Post('generate/image/edit')
    @ApiOperation({ summary: 'Edit image' })
    async editImage(@Body() data: { imageData: string; prompt: string }) {
        return this.aiClient.editImage(data.imageData, data.prompt);
    }

    // Embeddings
    @Post('embeddings')
    @ApiOperation({ summary: 'Create embedding' })
    async createEmbedding(
        @Body() data: { text: string; model?: string },
    ) {
        return this.aiClient.createEmbedding(data.text, data.model);
    }

    // Fine-tuning
    @Post('models/train')
    @ApiOperation({ summary: 'Train custom model' })
    async trainCustomModel(@Body() data: any) {
        return this.aiClient.trainCustomModel(data);
    }

    @Get('models/train/:id')
    @ApiOperation({ summary: 'Get training status' })
    @ApiParam({ name: 'id', description: 'Job ID' })
    async getTrainingStatus(@Param('id') id: string) {
        return this.aiClient.getTrainingStatus(id);
    }

    // Prompts
    @Post('prompts')
    @ApiOperation({ summary: 'Create prompt template' })
    async createPromptTemplate(@Body() data: any) {
        return this.aiClient.createPromptTemplate(data);
    }

    @Get('prompts')
    @ApiOperation({ summary: 'Get prompt templates' })
    async getPromptTemplates() {
        return this.aiClient.getPromptTemplates();
    }

    @Post('prompts/:id/execute')
    @ApiOperation({ summary: 'Execute prompt' })
    @ApiParam({ name: 'id', description: 'Template ID' })
    async executePrompt(
        @Param('id') id: string,
        @Body() data: { variables: Record<string, string> },
    ) {
        return this.aiClient.executePrompt(id, data.variables);
    }

    // Moderation
    @Post('moderate')
    @ApiOperation({ summary: 'Moderate content' })
    async moderateContent(@Body('text') text: string) {
        return this.aiClient.moderateContent(text);
    }

    // Sentiment
    @Post('analyze/sentiment')
    @ApiOperation({ summary: 'Analyze sentiment' })
    async analyzeSentiment(@Body('text') text: string) {
        return this.aiClient.analyzeSentiment(text);
    }

    // Translation
    @Post('translate')
    @ApiOperation({ summary: 'Translate text' })
    async translateText(
        @Body() data: { text: string; targetLanguage: string; sourceLanguage?: string },
    ) {
        return this.aiClient.translateText(
            data.text,
            data.targetLanguage,
            data.sourceLanguage,
        );
    }

    // Summarization
    @Post('summarize')
    @ApiOperation({ summary: 'Summarize text' })
    async summarizeText(
        @Body() data: { text: string; maxLength?: number },
    ) {
        return this.aiClient.summarizeText(data.text, data.maxLength);
    }

    // Health
    @Get('health')
    @ApiOperation({ summary: 'Health check' })
    async healthCheck() {
        return this.aiClient.healthCheck();
    }
}