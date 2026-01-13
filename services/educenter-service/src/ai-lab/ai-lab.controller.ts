import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AiLabService } from './ai-lab.service';

@ApiTags('AI Lab')
@Controller('ai-lab')
export class AiLabController {
  constructor(private readonly aiLabService: AiLabService) {}

  @Get('tools')
  @ApiOperation({ summary: 'Get available AI tools' })
  @ApiResponse({ status: 200, description: 'Returns list of AI tools' })
  async getTools(@Query() filters: any) {
    return this.aiLabService.getTools(filters);
  }

  @Post('video-generate')
  @ApiOperation({ summary: 'Generate AI video' })
  @ApiResponse({ status: 201, description: 'Video generation started' })
  async generateVideo(@Body() data: any) {
    return this.aiLabService.generateVideo(data);
  }

  @Post('whatsapp-automation')
  @ApiOperation({ summary: 'Create WhatsApp automation' })
  @ApiResponse({ status: 201, description: 'Automation created' })
  async createWhatsAppAutomation(@Body() data: any) {
    return this.aiLabService.createWhatsAppAutomation(data);
  }
}