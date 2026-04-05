import mongoose, { Document } from 'mongoose';
export interface ICopywritingProject extends Document {
    userId: string;
    projectName: string;
    language: 'pidgin' | 'english' | 'yoruba' | 'igbo' | 'hausa';
    tone: 'formal' | 'casual' | 'persuasive' | 'funny' | 'professional' | 'friendly';
    purpose: 'social_media' | 'ad_copy' | 'email' | 'blog_post' | 'product_description' | 'video_script';
    input: {
        productDetails: string;
        targetAudience: string;
        keyBenefits: string[];
        callToAction: string;
        keywords: string[];
        examples: string[];
    };
    generatedContent: Array<{
        version: number;
        content: string;
        wordCount: number;
        readabilityScore: number;
        engagementScore: number;
        selected: boolean;
    }>;
    variations: Array<{
        tone: string;
        length: string;
        focus: string;
        content: string;
    }>;
    optimization: {
        seoScore: number;
        sentiment: string;
        predictedEngagement: number;
    };
    performance?: {
        actualEngagement: number;
        conversionRate: number;
        feedback: string;
    };
    status: 'generating' | 'reviewing' | 'optimizing' | 'completed';
    createdAt: Date;
    updatedAt: Date;
}
export declare const CopywritingProject: mongoose.Model<ICopywritingProject, {}, {}, {}, mongoose.Document<unknown, {}, ICopywritingProject, {}, {}> & ICopywritingProject & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
