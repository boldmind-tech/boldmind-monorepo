import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CourseDocument = Course & Document;

@Schema({ timestamps: true })
export class Course {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  category: string; // 'study', 'business', 'ai'

  @Prop()
  subCategory?: string; // 'marketing', 'sales', 'automation'

  @Prop({ default: true })
  isFree: boolean;

  @Prop()
  price?: number;

  @Prop()
  duration?: string;

  @Prop({ default: 0 })
  lessons: number;

  @Prop({ default: 0 })
  enrolledCount: number;

  @Prop()
  instructor?: string;

  @Prop()
  coverImage?: string;

  @Prop({ type: Object })
  features?: Record<string, any>;
}

export const CourseSchema = SchemaFactory.createForClass(Course);