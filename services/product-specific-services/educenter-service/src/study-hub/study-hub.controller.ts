import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StudyHubService } from './study-hub.service';
import { SaveProgressDto } from '../progress/dto/save-progress.dto';

@ApiTags('Study Hub')
@Controller('study-hub')
export class StudyHubController {
  constructor(private readonly studyHubService: StudyHubService) {}

  @Post('progress')
  @ApiResponse({ status: 201, description: 'Progress saved successfully' })
  async saveProgress(@Body() saveProgressDto: SaveProgressDto) {
    return this.studyHubService.saveProgress(saveProgressDto);
  }

  @Get('progress/:uid')
  @ApiOperation({ summary: 'Get user progress overview' })
  @ApiResponse({ status: 200, description: 'Returns user progress data' })
  async getUserProgress(@Param('uid') uid: string) {
    return this.studyHubService.getUserProgress(uid);
  }

  @Get('leaderboard')
  @ApiOperation({ summary: 'Get top performers leaderboard' })
  @ApiResponse({ status: 200, description: 'Returns leaderboard data' })
  async getLeaderboard(@Query('limit') limit: number = 10) {
    return this.studyHubService.getLeaderboard(limit);
  }
}