"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptTemplateSchema = void 0;
const mongoose_1 = require("mongoose");
exports.PromptTemplateSchema = new mongoose_1.Schema({
    key: { type: String, unique: true },
    description: String,
    systemPrompt: String,
    userPrompt: String,
    variables: [String],
    model: String,
    isActive: { type: Boolean, default: true },
}, { timestamps: true });
//# sourceMappingURL=prompt-template.schema.js.map