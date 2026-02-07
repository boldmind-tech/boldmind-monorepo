import mongoose, { Schema, Document, Types } from 'mongoose';

interface IComment extends Document {
    postId: Types.ObjectId;
    parentId?: Types.ObjectId;
    user: {
        id: string;
        name: string;
        avatar?: string;
        isAuthor: boolean;
    };
    content: string;
    language: 'pidgin' | 'english' | 'yoruba';
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
        postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true, index: true },
        parentId: { type: Schema.Types.ObjectId, ref: 'Comment', index: true },
        user: {
            id: { type: String, required: true },
            name: { type: String, required: true },
            avatar: String,
            isAuthor: { type: Boolean, default: false }
        },
        content: { type: String, required: true, maxlength: 1000 },
        language: {
            type: String,
            enum: ['pidgin', 'english', 'yoruba', 'igbo', 'hause'],
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

CommentSchema.index({ postId: 1, createdAt: -1 });
CommentSchema.index({ parentId: 1, createdAt: 1 }); // Threaded replies

export const Comment = mongoose.model<IComment>('Comment', CommentSchema);
