import { Schema } from 'mongoose';
export declare const PromptTemplateSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    isActive: boolean;
    variables: string[];
    key?: string;
    description?: string;
    model?: string;
    systemPrompt?: string;
    userPrompt?: string;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    isActive: boolean;
    variables: string[];
    key?: string;
    description?: string;
    model?: string;
    systemPrompt?: string;
    userPrompt?: string;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
    isActive: boolean;
    variables: string[];
    key?: string;
    description?: string;
    model?: string;
    systemPrompt?: string;
    userPrompt?: string;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
