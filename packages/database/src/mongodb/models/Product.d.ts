import mongoose, { Document } from 'mongoose';
export interface IProduct extends Document {
    name: string;
    slug: string;
    description: string;
    category: string;
    status: 'draft' | 'building' | 'beta' | 'live' | 'archived';
    version: string;
    ownerId?: string;
    features: string[];
    pricing?: {
        type: 'free' | 'paid' | 'freemium';
        plans?: {
            name: string;
            price: number;
            interval: 'monthly' | 'yearly';
            features: string[];
        }[];
    };
    metadata?: Record<string, any>;
    stats?: {
        users: number;
        revenue?: number;
        rating?: number;
        reviews?: number;
    };
    settings?: {
        requiresAuth: boolean;
        isPublic: boolean;
        maxUsers?: number;
    };
    createdAt: Date;
    updatedAt: Date;
}
export declare const Product: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=Product.d.ts.map