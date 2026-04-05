import mongoose, { Document, Types } from 'mongoose';
export interface ICreatorStats extends Document {
    userId: string;
    displayName: string;
    avatarUrl?: string;
    bio?: string;
    totalArticles: number;
    totalViews: number;
    totalLikes: number;
    totalShares: number;
    totalComments: number;
    totalEarningsKobo: number;
    monthlyEarningsKobo: number;
    currentMonthViews: number;
    adsenseEnabled: boolean;
    paystackSubAccountCode?: string;
    revenueSharePercent: number;
    isVerified: boolean;
    verifiedAt?: Date;
    topCategories: string[];
    followerCount: number;
    subscriberCount: number;
    badges: Array<{
        name: string;
        awardedAt: Date;
    }>;
    lastPublishedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const CreatorStatsSchema: mongoose.Schema<ICreatorStats, mongoose.Model<ICreatorStats, any, any, any, mongoose.Document<unknown, any, ICreatorStats, any, {}> & ICreatorStats & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ICreatorStats, mongoose.Document<unknown, {}, mongoose.FlatRecord<ICreatorStats>, {}, mongoose.DefaultSchemaOptions> & mongoose.FlatRecord<ICreatorStats> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const CreatorStats: mongoose.Model<ICreatorStats, {}, {}, {}, mongoose.Document<unknown, {}, ICreatorStats, {}, {}> & ICreatorStats & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
