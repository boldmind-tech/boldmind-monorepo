import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AiToolDocument = AiTool & Document;

@Schema({ timestamps: true })
export class AiTool {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  category: string;

  @Prop({ default: true })
  isFree: boolean;

  @Prop()
  description?: string;

  @Prop()
  url?: string;

  @Prop({ default: 0 })
  usageCount: number;
}

export const AiToolSchema = SchemaFactory.createForClass(AiTool);