"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowRun = exports.N8nLog = void 0;
const mongoose_1 = require("mongoose");
const N8nLogSchema = new mongoose_1.Schema({
    workflowId: { type: String, required: true, index: true },
    workflowName: { type: String, required: true },
    executionId: { type: String, required: true, unique: true },
    triggeredBy: { type: String, required: true },
    status: {
        type: String,
        enum: ['running', 'success', 'error', 'waiting'],
        default: 'running',
        index: true,
    },
    productSlug: { type: String, index: true },
    userId: { type: String, index: true },
    inputData: mongoose_1.Schema.Types.Mixed,
    outputData: mongoose_1.Schema.Types.Mixed,
    errorMessage: String,
    durationMs: Number,
    nodesExecuted: { type: Number, default: 0 },
}, {
    timestamps: true,
    collection: 'n8n_logs',
});
N8nLogSchema.index({ createdAt: -1 });
N8nLogSchema.index({ userId: 1, createdAt: -1 });
exports.N8nLog = mongoose_1.default.model('N8nLog', N8nLogSchema);
const WorkflowRunSchema = new mongoose_1.Schema({
    workflowType: {
        type: String,
        enum: [
            'social_post',
            'email_campaign',
            'ai_receptionist',
            'rss_ingest',
            'whatsapp_broadcast',
            'lead_enrichment',
        ],
        required: true,
        index: true,
    },
    userId: { type: String, required: true, index: true },
    status: {
        type: String,
        enum: ['pending', 'running', 'completed', 'failed', 'retrying'],
        default: 'pending',
        index: true,
    },
    payload: { type: mongoose_1.Schema.Types.Mixed, required: true },
    result: mongoose_1.Schema.Types.Mixed,
    errorMessage: String,
    retryCount: { type: Number, default: 0 },
    maxRetries: { type: Number, default: 3 },
    nextRetryAt: Date,
    bullJobId: String,
    n8nLogId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'N8nLog' },
    completedAt: Date,
}, {
    timestamps: true,
    collection: 'workflow_runs',
});
WorkflowRunSchema.index({ userId: 1, workflowType: 1, createdAt: -1 });
WorkflowRunSchema.index({ status: 1, nextRetryAt: 1 });
exports.WorkflowRun = mongoose_1.default.model('WorkflowRun', WorkflowRunSchema);
//# sourceMappingURL=n8n_logs.schema.js.map