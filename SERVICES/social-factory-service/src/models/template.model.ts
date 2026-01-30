import mongoose, { Schema, Document } from 'mongoose';


export interface ITemplate extends Document {
    name: string;
    category: string;
    platform: string[];
    contentType: string;
    thumbnail: string;
    aiPrompt: string;
    styleSettings: {
        colors: string[];
        fonts: string[];
        layout: string;
    };
    usage: number;
    rating: number;
    isPremium: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const TemplateSchema = new Schema<ITemplate>(
    {
        name: { type: String, required: true },
        category: { type: String, required: true, index: true },
        platform: [{ type: String }],
        contentType: { type: String, required: true },
        thumbnail: { type: String, required: true },
        aiPrompt: { type: String, required: true },
        styleSettings: {
            colors: [String],
            fonts: [String],
            layout: String
        },
        usage: { type: Number, default: 0 },
        rating: { type: Number, default: 0 },
        isPremium: { type: Boolean, default: false }
    },
    {
        timestamps: true,
        collection: 'templates'
    }
);

TemplateSchema.index({ category: 1, platform: 1 });
TemplateSchema.index({ isPremium: 1 });

export const Template = mongoose.model<ITemplate>('Template', TemplateSchema);