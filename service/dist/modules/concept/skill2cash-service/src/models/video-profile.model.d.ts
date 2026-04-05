import mongoose, { Document } from 'mongoose';
export interface IVideoProfile extends Document {
    userId?: string;
    isAnonymous: boolean;
    anonymousId?: string;
    skills: Array<{
        name: string;
        category: string;
        experience: string;
        portfolioItems: string[];
    }>;
    video: {
        url: string;
        duration: number;
        thumbnail: string;
        transcript: string;
        language: string;
    };
    availability: {
        status: 'available' | 'busy' | 'unavailable';
        schedule: Map<string, any>;
        responseTime: string;
    };
    pricing: {
        hourlyRate: number;
        minBooking: number;
        packageRates: Map<string, number>;
    };
    stats: {
        completedGigs: number;
        totalEarnings: number;
        avgRating: number;
        responseRate: number;
    };
    verification: {
        phoneVerified: boolean;
        skillsVerified: boolean;
        identityVerified: boolean;
        trustScore: number;
    };
    preferences: {
        workTypes: string[];
        locations: string[];
        clientTypes: string[];
    };
    isActive: boolean;
    lastActive: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const VideoProfile: mongoose.Model<IVideoProfile, {}, {}, {}, mongoose.Document<unknown, {}, IVideoProfile, {}, {}> & IVideoProfile & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
