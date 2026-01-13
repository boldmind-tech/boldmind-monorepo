import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubscriptionDocument = Subscription & Document;

@Schema({ timestamps: true })
export class Subscription {
  @Prop({ required: true, index: true })
  userId: string;

  @Prop({ required: true })
  plan: string; // 'studyHub', 'businessSchool', 'aiLab'

  @Prop({ required: true })
  planType: string; // 'sixMonths', 'oneYear', 'lifetime'

  @Prop({ required: true })
  amount: number;

  @Prop({ default: 'pending' })
  status: string; // pending, active, expired, cancelled

  @Prop()
  paymentReference: string;

  @Prop()
  paymentVerifiedAt?: Date;

  @Prop({ required: true })
  startsAt: Date;

  @Prop()
  expiresAt?: Date;

  // @Prop()
  // metadata?: Record<string, any>;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);