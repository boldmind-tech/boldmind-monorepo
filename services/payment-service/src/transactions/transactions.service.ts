import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction, TransactionDocument } from './transactions.schema';


@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>,
  ) { }

  async create(data: Partial<Transaction>) {
    const transaction = new this.transactionModel(data);
    return transaction.save();
  }

  async findByReference(reference: string) {
    return this.transactionModel.findOne({ reference }).exec();
  }

  async findByUser(uid: string, limit: number = 50): Promise<TransactionDocument[]> {
    return this.transactionModel
      .find({ uid })
      .sort({ createdAt: -1 })
      .limit(limit)
      .exec();
  }

  async findByApp(app: string, limit: number = 100) {
    return this.transactionModel
      .find({ app, status: 'success' })
      .sort({ createdAt: -1 })
      .limit(limit)
      .exec();
  }

  async getRevenue(app?: string, startDate?: Date, endDate?: Date) {
    const query: any = { status: 'success' };

    if (app) query.app = app;
    if (startDate || endDate) {
      query.paidAt = {};
      if (startDate) query.paidAt.$gte = startDate;
      if (endDate) query.paidAt.$lte = endDate;
    }

    const transactions = await this.transactionModel.find(query).exec();

    const totalRevenue = transactions.reduce((sum, t) => sum + t.amount, 0);
    const count = transactions.length;

    return {
      totalRevenue: totalRevenue / 100, // Convert kobo to Naira
      transactionCount: count,
      averageTransactionValue: count > 0 ? totalRevenue / 100 / count : 0,
    };
  }

 async getRevenueByApp(startDate?: Date, endDate?: Date): Promise<Record<string, { revenue: number; count: number }>> {
  const query: any = { status: 'success' };
  
  if (startDate || endDate) {
    query.paidAt = {};
    if (startDate) query.paidAt.$gte = startDate;
    if (endDate) query.paidAt.$lte = endDate;
  }

  const transactions = await this.transactionModel.find(query).exec();
  
  const revenueByApp: Record<string, { revenue: number; count: number }> = {};
  
  transactions.forEach(t => {
    const app = t.app;
    if (!revenueByApp[app]) {
      revenueByApp[app] = { revenue: 0, count: 0 };
    }
    revenueByApp[app].revenue += t.amount / 100;
    revenueByApp[app].count += 1;
  });

  return revenueByApp;
}

  async updateStatus(reference: string, status: string, paystackData?: any) {
    return this.transactionModel.findOneAndUpdate(
      { reference },
      {
        status,
        ...(status === 'success' && { paidAt: new Date() }),
        ...(paystackData && { paystackData }),
      },
      { new: true },
    );
  }

  async refund(reference: string, reason: string) {
    return this.transactionModel.findOneAndUpdate(
      { reference },
      {
        status: 'refunded',
        refundReason: reason,
        refundedAt: new Date(),
      },
      { new: true },
    );
  }
}