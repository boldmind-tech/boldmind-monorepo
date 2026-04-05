"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = exports.CommentSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CommentSchema = new mongoose_1.Schema({
    postId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
        index: true,
    },
    parentId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Comment',
        index: true,
    },
    user: {
        id: { type: String, required: true },
        name: { type: String, required: true },
        avatar: String,
        isAuthor: { type: Boolean, default: false },
    },
    content: { type: String, required: true, maxlength: 1000 },
    language: {
        type: String,
        enum: ['pidgin', 'english', 'yoruba', 'igbo', 'hausa'],
        default: 'pidgin',
    },
    reactions: {
        like: { type: Number, default: 0, min: 0 },
        love: { type: Number, default: 0, min: 0 },
        laugh: { type: Number, default: 0, min: 0 },
        angry: { type: Number, default: 0, min: 0 },
    },
    userReactions: {
        type: Map,
        of: {
            type: String,
            enum: ['like', 'love', 'laugh', 'angry'],
        },
        default: () => new Map(),
    },
    isEdited: { type: Boolean, default: false },
    editedAt: Date,
    isFlagged: { type: Boolean, default: false, index: true },
}, {
    timestamps: true,
    collection: 'comments',
});
exports.CommentSchema.index({ postId: 1, createdAt: -1 });
exports.CommentSchema.index({ parentId: 1, createdAt: 1 });
exports.CommentSchema.index({ postId: 1, parentId: 1, isFlagged: 1, createdAt: -1 });
exports.Comment = mongoose_1.default.model('Comment', exports.CommentSchema);
//# sourceMappingURL=comment.schema.js.map