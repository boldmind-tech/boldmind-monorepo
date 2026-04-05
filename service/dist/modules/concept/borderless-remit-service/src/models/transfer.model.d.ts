import mongoose, { Document } from 'mongoose';
export interface ITransfer extends Document {
    userId: string;
    amount: {
        send: number;
        sendCurrency: string;
        receive: number;
        receiveCurrency: string;
    };
    rates: {
        official: number;
        blackMarket: number;
        selected: number;
        provider: string;
    };
    sender: {
        name: string;
        country: string;
        accountDetails: Map<string, any>;
    };
    recipient: {
        name: string;
        phone: string;
        bank: string;
        accountNumber: string;
        accountName: string;
    };
    receipt: {
        id: string;
        url: string;
        issuedAt: Date;
    };
    status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
    timeline: Array<{
        status: string;
        timestamp: Date;
        message: string;
    }>;
    fees: {
        providerFee: number;
        transferFee: number;
        totalFee: number;
    };
    estimatedDelivery: string;
    actualDelivery?: Date;
    trackingId: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Transfer: mongoose.Model<ITransfer, {}, {}, {}, mongoose.Document<unknown, {}, ITransfer, {}, {}> & ITransfer & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
