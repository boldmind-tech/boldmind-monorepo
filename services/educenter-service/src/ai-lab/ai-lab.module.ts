import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AiLabController } from './ai-lab.controller';
import { AiLabService } from './ai-lab.service';
import { AiTool, AiToolSchema } from './schemas/ai-tool.schema';
import { VideoGeneration, VideoGenerationSchema } from './schemas/video-generation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AiTool.name, schema: AiToolSchema },
      { name: VideoGeneration.name, schema: VideoGenerationSchema },
    ]),
  ],
  controllers: [AiLabController],
  providers: [AiLabService],
  exports: [AiLabService],
})
export class AiLabModule {}