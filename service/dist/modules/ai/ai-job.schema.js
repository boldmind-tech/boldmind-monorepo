"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIJobSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AIJobSchema = new mongoose_1.Schema({
    userId: String,
    app: String,
    taskType: String,
    input: mongoose_1.Schema.Types.Mixed,
    output: mongoose_1.Schema.Types.Mixed,
    model: String,
    tokensUsed: Number,
    latencyMs: Number,
    status: {
        type: String,
        enum: ['queued', 'running', 'completed', 'failed'],
        default: 'queued',
    },
    error: mongoose_1.Schema.Types.Mixed,
}, { timestamps: true });
//# sourceMappingURL=ai-job.schema.js.map