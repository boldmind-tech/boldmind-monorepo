import mongoose, { Document } from 'mongoose';
export interface IAnonymousAudio extends Document {
    anonymousId: string;
    location: {
        type: 'Point';
        coordinates: [number, number];
        accuracy: number;
    };
    audio: {
        url: string;
        duration: number;
        format: string;
        size: number;
        transcription: string;
        voiceDistorted: boolean;
    };
    metadata: {
        category: string;
        tags: string[];
        urgency: 'low' | 'medium' | 'high' | 'critical';
        language: string;
        timestamp: Date;
    };
    moderation: {
        status: 'pending' | 'approved' | 'rejected' | 'flagged';
        reviewedBy: string;
        reviewedAt?: Date;
        flags: Array<{
            type: string;
            reason: string;
            severity: string;
        }>;
        score: number;
    };
    visibility: {
        isPublic: boolean;
        targetAreas: string[];
        expiryAt: Date;
        boostExpiry?: Date;
    };
    engagement: {
        listens: number;
        shares: number;
        reports: number;
        boosts: Array<{
            amount: number;
            boostedAt: Date;
            expiresAt: Date;
        }>;
        comments: Array<{
            anonymousId: string;
            text: string;
            timestamp: Date;
        }>;
    };
    safety: {
        encryptionKey: string;
        ipAddress: string;
        deviceFingerprint: string;
        deleted: boolean;
        deletionReason?: string;
        deletedAt?: Date;
    };
    createdAt: Date;
}
export declare const AnonymousAudio: mongoose.Model<IAnonymousAudio, {}, {}, {}, mongoose.Document<unknown, {}, IAnonymousAudio, {}, {}> & IAnonymousAudio & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
