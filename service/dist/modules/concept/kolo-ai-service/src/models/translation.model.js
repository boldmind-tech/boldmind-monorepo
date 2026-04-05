"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Translation = void 0;
const mongoose_1 = require("mongoose");
const TranslationSchema = new mongoose_1.Schema({
    userId: { type: String, required: true, index: true },
    sourceLanguage: { type: String, required: true },
    targetLanguage: { type: String, required: true },
    sourceText: { type: String, required: true },
    translatedText: { type: String, required: true },
    context: String,
    formality: {
        type: String,
        enum: ['formal', 'informal', 'neutral'],
        default: 'neutral'
    },
    domain: String,
    quality: {
        confidence: Number,
        alternatives: [{
                text: String,
                confidence: Number
            }]
    },
    usage: {
        characterCount: Number,
        wordCount: Number
    },
    feedback: {
        rating: Number,
        comment: String
    }
}, {
    timestamps: { createdAt: true, updatedAt: false },
    collection: 'translations'
});
TranslationSchema.index({ userId: 1, createdAt: -1 });
TranslationSchema.index({ sourceLanguage: 1, targetLanguage: 1 });
exports.Translation = mongoose_1.default.model('Translation', TranslationSchema);
//# sourceMappingURL=translation.model.js.map