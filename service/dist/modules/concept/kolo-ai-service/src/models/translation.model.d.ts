import mongoose, { Document } from 'mongoose';
export interface ITranslation extends Document {
    userId: string;
    sourceLanguage: string;
    targetLanguage: string;
    sourceText: string;
    translatedText: string;
    context?: string;
    formality: 'formal' | 'informal' | 'neutral';
    domain?: string;
    quality: {
        confidence: number;
        alternatives: Array<{
            text: string;
            confidence: number;
        }>;
    };
    usage: {
        characterCount: number;
        wordCount: number;
    };
    feedback?: {
        rating: number;
        comment: string;
    };
    createdAt: Date;
}
export declare const Translation: mongoose.Model<ITranslation, {}, {}, {}, mongoose.Document<unknown, {}, ITranslation, {}, {}> & ITranslation & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
