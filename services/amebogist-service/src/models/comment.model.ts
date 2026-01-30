import mongoose, { Schema, Document } from 'mongoose';
export interface IComment extends Document {
    postId: string;
    parentId?: string;
    user: {
        id: string;
        name: string;
        avatar?: string;
        isAuthor: boolean;
    };
    content: string;
    language: 'pidgin' | 'english';
    reactions: {
        like: number;
        love: number;
        laugh: number;
        angry: number;
    };
    isEdited: boolean;
    editedAt?: Date;
    isFlagged: boolean;
    createdAt: Date;
}

const CommentSchema = new Schema<IComment>(
    {
        postId: { type: String, required: true, index: true },
        parentId: { type: String, index: true },
        user: {
            id: { type: String, required: true },
            name: { type: String, required: true },
            avatar: String,
            isAuthor: { type: Boolean, default: false }
        },
        content: { type: String, required: true },
        language: {
            type: String,
            enum: ['pidgin', 'english'],
            default: 'pidgin'
        },
        reactions: {
            like: { type: Number, default: 0 },
            love: { type: Number, default: 0 },
            laugh: { type: Number, default: 0 },
            angry: { type: Number, default: 0 }
        },
        isEdited: { type: Boolean, default: false },
        editedAt: Date,
        isFlagged: { type: Boolean, default: false }
    },
    {
        timestamps: true,
        collection: 'comments'
    }
);

// Indexes
CommentSchema.index({ postId: 1, createdAt: -1 });
CommentSchema.index({ 'user.id': 1 });

export const Comment = mongoose.model<IComment>('Comment', CommentSchema);