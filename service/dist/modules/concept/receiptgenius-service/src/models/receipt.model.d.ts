import mongoose, { Document } from 'mongoose';
export interface IReceipt extends Document {
    userId: string;
    businessId?: string;
    receiptNumber: string;
    customer: {
        name?: string;
        email?: string;
        phone?: string;
        address?: string;
    };
    vendor: {
        name: string;
        address?: string;
        phone?: string;
        email?: string;
        logo?: string;
        taxId?: string;
    };
    items: Array<{
        description: string;
        quantity: number;
        unitPrice: number;
        total: number;
    }>;
    subtotal: number;
    tax: number;
    discount: number;
    total: number;
    currency: string;
    paymentMethod?: string;
    paymentStatus: 'paid' | 'pending' | 'refunded';
    issueDate: Date;
    dueDate?: Date;
    paidDate?: Date;
    pdfUrl?: string;
    imageUrl?: string;
    template: string;
    customization: {
        colors: {
            primary: string;
            secondary: string;
        };
        font: string;
        showLogo: boolean;
    };
    aiExtracted?: {
        confidence: number;
        rawData: any;
        verified: boolean;
    };
    status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
    notes?: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const Receipt: mongoose.Model<IReceipt, {}, {}, {}, mongoose.Document<unknown, {}, IReceipt, {}, {}> & IReceipt & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
