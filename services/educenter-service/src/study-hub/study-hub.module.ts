import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudyHubController } from './study-hub.controller';
import { StudyHubService } from './study-hub.service';
import { Progress, ProgressSchema } from '../progress/schemas/progress.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Progress.name, schema: ProgressSchema },
    ]),
  ],
  controllers: [StudyHubController],
  providers: [StudyHubService],
  exports: [StudyHubService],
})
export class StudyHubModule {}