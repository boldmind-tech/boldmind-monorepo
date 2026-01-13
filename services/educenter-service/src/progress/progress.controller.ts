import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { SaveProgressDto } from './dto/save-progress.dto';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Post()
  saveProgress(@Body() dto: SaveProgressDto) {
    return this.progressService.saveProgress(dto);
  }

  @Get(':uid')
  getProgress(@Param('uid') uid: string) {
    return this.progressService.getUserProgress(uid);
  }

  @Get(':uid/subject/:subject')
  getSubjectProgress(
    @Param('uid') uid: string,
    @Param('subject') subject: string,
  ) {
    return this.progressService.getSubjectProgress(uid, subject);
  }

  // @Get('leaderboard')
  // getLeaderboard() {
  //   return this.progressService.();
  // }
}