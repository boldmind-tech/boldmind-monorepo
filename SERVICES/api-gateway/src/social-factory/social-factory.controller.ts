// SERVICES/api-gateway/src/social-factory/social-factory.controller.ts

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
import { SocialFactoryServiceClient } from '../clients/social-factory-service.client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('social-factory')
@Controller('social-factory')
@UseGuards(SupabaseAuthGuard)
@ApiBearerAuth()
export class SocialFactoryController {
  constructor(private socialFactoryClient: SocialFactoryServiceClient) { }

  // Content Generation
  @Post('generate/video')
  @ApiOperation({ summary: 'Generate video content' })
  async generateVideo(@Body() data: any) {
    return this.socialFactoryClient.generateVideo(data);
  }

  @Post('generate/caption')
  @ApiOperation({ summary: 'Generate social caption' })
  async generateCaption(@Body() data: any, @Query('platform') platform: string) {
    return this.socialFactoryClient.generateCaption(data, platform);
  }

  // Content Management
  @Post('content')
  @ApiOperation({ summary: 'Create content' })
  async createContent(@CurrentUser() user: any, @Body() data: any) {
    return this.socialFactoryClient.createContent(user.id, data);
  }

  @Get('me/content')
  @ApiOperation({ summary: 'Get my content' })
  @ApiQuery({ name: 'status', required: false })
  async getMyContent(
    @CurrentUser() user: any,
    @Query('status') status?: string,
  ) {
    return this.socialFactoryClient.getUserContent(user.id, status);
  }

  // Publishing
  @Post('content/:id/publish')
  @ApiOperation({ summary: 'Publish content' })
  @ApiParam({ name: 'id', description: 'Content ID' })
  async publishContent(@Param('id') id: string) {
    return this.socialFactoryClient.publishContent(id);
  }

  @Post('content/:id/schedule')
  @ApiOperation({ summary: 'Schedule content' })
  @ApiParam({ name: 'id', description: 'Content ID' })
  async scheduleContent(
    @Param('id') id: string,
    @Body('scheduleAt') scheduleAt: string,
  ) {
    return this.socialFactoryClient.scheduleContent(id, scheduleAt);
  }

  // Analytics
  @Get('content/:id/analytics')
  @ApiOperation({ summary: 'Get content analytics' })
  @ApiParam({ name: 'id', description: 'Content ID' })
  async getContentAnalytics(@Param('id') id: string) {
    return this.socialFactoryClient.getContentAnalytics(id);
  }

  @Get('me/analytics')
  @ApiOperation({ summary: 'Get account analytics' })
  @ApiQuery({ name: 'platform', required: false })
  async getAccountAnalytics(
    @CurrentUser() user: any,
    @Query('platform') platform?: string,
  ) {
    return this.socialFactoryClient.getAccountAnalytics(user.id, platform);
  }

  // Platform Connections
  @Post('platforms/connect')
  @ApiOperation({ summary: 'Connect platform' })
  async connectPlatform(
    @CurrentUser() user: any,
    @Body() data: { platform: string; accessToken: string },
  ) {
    return this.socialFactoryClient.connectPlatform(
      user.id,
      data.platform,
      data.accessToken,
    );
  }

  @Get('me/platforms')
  @ApiOperation({ summary: 'Get connected platforms' })
  async getConnectedPlatforms(@CurrentUser() user: any) {
    return this.socialFactoryClient.getConnectedPlatforms(user.id);
  }
}