import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EnrollmentDocument = Enrollment & Document;

@Schema({ timestamps: true })
export class Enrollment {
  @Prop({ required: true, index: true })
  userId: string;

  @Prop({ required: true, index: true })
  courseId: string;

  @Prop({ default: Date.now })
  enrolledAt: Date;

  @Prop({ default: 'active' })
  status: string; // active, completed, cancelled

  @Prop()
  completedAt?: Date;

  @Prop({ default: 0 })
  progress: number; // 0-100
}

export const EnrollmentSchema = SchemaFactory.createForClass(Enrollment);