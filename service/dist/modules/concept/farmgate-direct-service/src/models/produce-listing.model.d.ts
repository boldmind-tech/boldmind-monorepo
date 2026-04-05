import mongoose, { Document } from 'mongoose';
export interface IProduceListing extends Document {
    farmerId: string;
    productName: string;
    category: 'grains' | 'tubers' | 'vegetables' | 'fruits' | 'livestock' | 'dairy' | 'poultry';
    variety: string;
    quantity: {
        amount: number;
        unit: 'kg' | 'g' | 'liters' | 'pieces' | 'bags';
        available: number;
    };
    quality: {
        grade: 'A' | 'B' | 'C';
        organic: boolean;
        certifications: string[];
        images: string[];
        description: string;
    };
    pricing: {
        pricePerUnit: number;
        currency: string;
        minOrder: number;
        bulkDiscount?: {
            minQuantity: number;
            discountPercent: number;
        };
    };
    location: {
        farmAddress: string;
        coordinates: [number, number];
        city: string;
        state: string;
        pickupAvailable: boolean;
        deliveryRadius: number;
    };
    harvestDate: Date;
    shelfLife: number;
    status: 'available' | 'reserved' | 'sold' | 'harvested' | 'expired';
    orders: Array<{
        buyerId: string;
        quantity: number;
        status: string;
        orderedAt: Date;
    }>;
    verification: {
        farmVerified: boolean;
        qualityChecked: boolean;
        rating: number;
    };
    createdAt: Date;
    updatedAt: Date;
    expiresAt?: Date;
}
export declare const ProduceListing: mongoose.Model<IProduceListing, {}, {}, {}, mongoose.Document<unknown, {}, IProduceListing, {}, {}> & IProduceListing & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
