import mongoose, { Document } from 'mongoose';
export interface IGig extends Document {
    clientId: string;
    title: string;
    description: string;
    category: 'plumbing' | 'electrical' | 'carpentry' | 'tailoring' | 'makeup' | 'catering' | 'cleaning' | 'repairs';
    location: {
        type: 'Point';
        coordinates: [number, number];
        address: string;
        city: string;
        state: string;
    };
    budget: {
        min: number;
        max: number;
        currency: string;
        type: 'fixed' | 'hourly' | 'negotiable';
    };
    urgency: 'normal' | 'urgent' | 'asap';
    timeline: {
        start: Date;
        duration: string;
        flexible: boolean;
    };
    requirements: {
        experience: string;
        toolsRequired: string[];
        materialsProvided: boolean;
        licenses: string[];
    };
    applications: Array<{
        artisanId: string;
        message: string;
        bidAmount: number;
        estimatedTime: string;
        portfolioItems: string[];
        status: 'pending' | 'shortlisted' | 'rejected' | 'hired';
        appliedAt: Date;
    }>;
    status: 'open' | 'in_progress' | 'completed' | 'cancelled';
    hiredArtisan?: {
        id: string;
        hiredAt: Date;
        completedAt?: Date;
        rating?: number;
        review?: string;
    };
    visibility: {
        isPublic: boolean;
        expiresAt?: Date;
    };
    createdAt: Date;
    updatedAt: Date;
}
export declare const Gig: mongoose.Model<IGig, {}, {}, {}, mongoose.Document<unknown, {}, IGig, {}, {}> & IGig & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
