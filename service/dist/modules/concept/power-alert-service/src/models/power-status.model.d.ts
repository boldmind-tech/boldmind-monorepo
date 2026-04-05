import mongoose, { Document } from 'mongoose';
export interface IPowerStatus extends Document {
    location: {
        type: 'Point';
        coordinates: [number, number];
        address: string;
        area: string;
        city: string;
        state: string;
    };
    provider: string;
    status: 'on' | 'off' | 'fluctuating' | 'unknown';
    lastChange: Date;
    duration: number;
    reportedBy: Array<{
        userId: string;
        timestamp: Date;
        confidence: number;
    }>;
    crowdScore: number;
    predictedRestoration?: Date;
    historicalPatterns: Array<{
        dayOfWeek: number;
        hourOfDay: number;
        probabilityOff: number;
    }>;
    createdAt: Date;
    updatedAt: Date;
}
export declare const PowerStatus: mongoose.Model<IPowerStatus, {}, {}, {}, mongoose.Document<unknown, {}, IPowerStatus, {}, {}> & IPowerStatus & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
