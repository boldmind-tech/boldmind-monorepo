"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reaction = exports.ReactionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ReactionSchema = new mongoose_1.Schema({
    postId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Post', required: true, index: true },
    userId: { type: String, required: true, index: true },
    type: {
        type: String,
        enum: ['like', 'love', 'laugh', 'fire', 'sad', 'angry'],
        required: true,
    },
}, {
    timestamps: true,
    collection: 'reactions',
});
exports.ReactionSchema.index({ postId: 1, userId: 1 }, { unique: true });
exports.Reaction = mongoose_1.default.model('Reaction', exports.ReactionSchema);
//# sourceMappingURL=reaction.schema.js.map