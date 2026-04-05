import mongoose, { Document } from 'mongoose';
export interface IBlueprint extends Document {
    title: string;
    slug: string;
    category: 'digital' | 'service' | 'product' | 'agriculture' | 'ecommerce' | 'content';
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    startupCost: {
        min: number;
        max: number;
        currency: string;
    };
    timeToProfit: string;
    skillsRequired: string[];
    marketSize: string;
    competitionLevel: 'low' | 'medium' | 'high';
    content: {
        overview: string;
        stepByStep: Array<{
            title: string;
            description: string;
            estimatedTime: string;
            resources: Array<{
                name: string;
                url: string;
                type: string;
            }>;
            checklist: string[];
        }>;
        tools: Array<{
            name: string;
            purpose: string;
            cost: string;
            alternatives: string[];
        }>;
        caseStudies: Array<{
            name: string;
            story: string;
            revenue: string;
            lessons: string[];
        }>;
        faqs: Array<{
            question: string;
            answer: string;
        }>;
    };
    nigerianContext: {
        regulations: string;
        locationAdvantages: string[];
        challenges: string[];
        successStories: string[];
    };
    stats: {
        views: number;
        saves: number;
        completions: number;
        successRate?: number;
    };
    isVerified: boolean;
    verifiedBy?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Blueprint: mongoose.Model<IBlueprint, {}, {}, {}, mongoose.Document<unknown, {}, IBlueprint, {}, {}> & IBlueprint & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
