import mongoose, { Document, Types } from 'mongoose';
export type ReactionType = 'like' | 'love' | 'laugh' | 'angry';
export interface IComment extends Document {
    postId: Types.ObjectId;
    parentId?: Types.ObjectId;
    user: {
        id: string;
        name: string;
        avatar?: string;
        isAuthor: boolean;
    };
    content: string;
    language: 'pidgin' | 'english' | 'yoruba' | 'igbo' | 'hausa';
    reactions: {
        like: number;
        love: number;
        laugh: number;
        angry: number;
    };
    userReactions: Map<string, ReactionType>;
    isEdited: boolean;
    editedAt?: Date;
    isFlagged: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const CommentSchema: mongoose.Schema<IComment, mongoose.Model<IComment, any, any, any, mongoose.Document<unknown, any, IComment, any, {}> & IComment & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IComment, mongoose.Document<unknown, {}, mongoose.FlatRecord<IComment>, {}, mongoose.DefaultSchemaOptions> & mongoose.FlatRecord<IComment> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const Comment: mongoose.Model<IComment, {}, {}, {}, mongoose.Document<unknown, {}, IComment, {}, {}> & IComment & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
