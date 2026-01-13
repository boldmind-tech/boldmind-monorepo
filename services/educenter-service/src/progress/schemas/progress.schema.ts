import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProgressDocument = Progress & Document;

@Schema({ timestamps: true })
export class Progress {
  @Prop({ required: true })
  uid: string;

  @Prop({ required: true })
  subject: string;

  @Prop({ required: true })
  year: string;

  @Prop({ required: true })
  questionId: string;

  @Prop({ required: true })
  answer: string;

  @Prop({ required: true })
  isCorrect: boolean;

  @Prop({ required: true })
  timeSpent: number;

  @Prop({ default: Date.now })
  attemptedAt: Date;
}

export const ProgressSchema = SchemaFactory.createForClass(Progress);