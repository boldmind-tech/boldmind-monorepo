import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema({ timestamps: true })
export class Transaction {
  @Prop({ required: true, unique: true, index: true })
  reference: string; // Paystack reference

  @Prop({ required: true, index: true })
  uid: string; // User ID

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, index: true })
  app: string; // 'educenter', 'naija-fither', etc.

  @Prop({ required: true })
  productId: string;

  @Prop({ required: true })
  productName: string;

  @Prop({ required: true })
  amount: number; // In kobo

  @Prop({ required: true })
  currency: string; // 'NGN'

  @Prop({ required: true, enum: ['pending', 'success', 'failed', 'refunded'] })
  status: string;

  @Prop({ type: Object })
  metadata: any; // Additional data from product

  @Prop()
  paystackData: any; // Full Paystack response

  @Prop({ type: Date })
  paidAt: Date;

  @Prop()
  refundReason?: string;

  @Prop({ type: Date })
  refundedAt?: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);

// Create indexes for common queries
TransactionSchema.index({ uid: 1, createdAt: -1 });
TransactionSchema.index({ app: 1, status: 1 });
TransactionSchema.index({ status: 1, createdAt: -1 });