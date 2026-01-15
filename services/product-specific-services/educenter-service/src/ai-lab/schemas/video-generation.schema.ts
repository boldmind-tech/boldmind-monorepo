import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VideoGenerationDocument = VideoGeneration & Document;

@Schema({ timestamps: true })
export class VideoGeneration {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  script: string;

  @Prop({ required: true })
  style: string;

  @Prop({ required: true })
  duration: number;

  @Prop({ default: 'processing' })
  status: string;

  @Prop()
  videoUrl?: string;

  @Prop()
  startedAt: Date;

  @Prop()
  completedAt?: Date;
}

export const VideoGenerationSchema = SchemaFactory.createForClass(VideoGeneration);