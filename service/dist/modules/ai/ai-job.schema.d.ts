import { Schema } from 'mongoose';
export declare const AIJobSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    status: "queued" | "failed" | "completed" | "running";
    error?: any;
    userId?: string;
    model?: string;
    latencyMs?: number;
    input?: any;
    output?: any;
    app?: string;
    taskType?: string;
    tokensUsed?: number;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    status: "queued" | "failed" | "completed" | "running";
    error?: any;
    userId?: string;
    model?: string;
    latencyMs?: number;
    input?: any;
    output?: any;
    app?: string;
    taskType?: string;
    tokensUsed?: number;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
    status: "queued" | "failed" | "completed" | "running";
    error?: any;
    userId?: string;
    model?: string;
    latencyMs?: number;
    input?: any;
    output?: any;
    app?: string;
    taskType?: string;
    tokensUsed?: number;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
