import { Schema } from 'mongoose';
export declare const EmailLeadSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    email: string;
    userId: string;
    tags: string[];
    source: "website" | "directory";
    verificationStatus: "unknown" | "valid" | "invalid" | "catch_all" | "webmail" | "disposable";
    phone?: string;
    website?: string;
    location?: string;
    industry?: string;
    title?: string;
    verifiedAt?: NativeDate;
    listId?: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    company?: string;
    linkedinUrl?: string;
    confidence?: number;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    email: string;
    userId: string;
    tags: string[];
    source: "website" | "directory";
    verificationStatus: "unknown" | "valid" | "invalid" | "catch_all" | "webmail" | "disposable";
    phone?: string;
    website?: string;
    location?: string;
    industry?: string;
    title?: string;
    verifiedAt?: NativeDate;
    listId?: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    company?: string;
    linkedinUrl?: string;
    confidence?: number;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
    email: string;
    userId: string;
    tags: string[];
    source: "website" | "directory";
    verificationStatus: "unknown" | "valid" | "invalid" | "catch_all" | "webmail" | "disposable";
    phone?: string;
    website?: string;
    location?: string;
    industry?: string;
    title?: string;
    verifiedAt?: NativeDate;
    listId?: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    company?: string;
    linkedinUrl?: string;
    confidence?: number;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ScrapeJobSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userId: string;
    status: "queued" | "failed" | "completed" | "running";
    jobType: "website" | "directory";
    totalFound: number;
    totalValid: number;
    totalSaved: number;
    error?: string;
    completedAt?: NativeDate;
    inputData?: any;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    userId: string;
    status: "queued" | "failed" | "completed" | "running";
    jobType: "website" | "directory";
    totalFound: number;
    totalValid: number;
    totalSaved: number;
    error?: string;
    completedAt?: NativeDate;
    inputData?: any;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
    userId: string;
    status: "queued" | "failed" | "completed" | "running";
    jobType: "website" | "directory";
    totalFound: number;
    totalValid: number;
    totalSaved: number;
    error?: string;
    completedAt?: NativeDate;
    inputData?: any;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const LeadListSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    userId: string;
    description?: string;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    name: string;
    userId: string;
    description?: string;
} & import("mongoose").DefaultTimestampProps>, {}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
    name: string;
    userId: string;
    description?: string;
} & import("mongoose").DefaultTimestampProps> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
