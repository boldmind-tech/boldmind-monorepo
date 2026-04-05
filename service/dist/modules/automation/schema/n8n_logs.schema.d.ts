import mongoose, { Document, Types } from 'mongoose';
export interface IN8nLog extends Document {
    workflowId: string;
    workflowName: string;
    executionId: string;
    triggeredBy: string;
    status: 'running' | 'success' | 'error' | 'waiting';
    productSlug?: string;
    userId?: string;
    inputData?: Record<string, unknown>;
    outputData?: Record<string, unknown>;
    errorMessage?: string;
    durationMs?: number;
    nodesExecuted: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const N8nLog: mongoose.Model<IN8nLog, {}, {}, {}, mongoose.Document<unknown, {}, IN8nLog, {}, {}> & IN8nLog & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
export interface IWorkflowRun extends Document {
    workflowType: 'social_post' | 'email_campaign' | 'ai_receptionist' | 'rss_ingest' | 'whatsapp_broadcast' | 'lead_enrichment';
    userId: string;
    status: 'pending' | 'running' | 'completed' | 'failed' | 'retrying';
    payload: Record<string, unknown>;
    result?: Record<string, unknown>;
    errorMessage?: string;
    retryCount: number;
    maxRetries: number;
    nextRetryAt?: Date;
    bullJobId?: string;
    n8nLogId?: Types.ObjectId;
    completedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const WorkflowRun: mongoose.Model<IWorkflowRun, {}, {}, {}, mongoose.Document<unknown, {}, IWorkflowRun, {}, {}> & IWorkflowRun & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
