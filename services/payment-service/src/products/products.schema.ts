import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true, unique: true })
  productId: string; // e.g., 'educenter-study-hub-6months'

  @Prop({ required: true })
  name: string; // 'EduCenter Study Hub - 6 Months'

  @Prop({ required: true })
  app: string; // 'educenter', 'naija-fither', 'boldmind-os', etc.

  @Prop({ required: true })
  category: string; // 'subscription', 'one-time', 'course', 'tool'

  @Prop({ required: true })
  price: number; // Amount in kobo (Paystack format)

  @Prop({ required: true })
  currency: string; // 'NGN'

  @Prop()
  duration?: number; // in months (null for lifetime)

  @Prop({ type: Object })
  metadata: {
    pillar?: string; // For EduCenter: 'studyHub', 'businessSchool', 'aiLab'
    features?: string[];
    description?: string;
  };

  @Prop({ default: true })
  active: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);