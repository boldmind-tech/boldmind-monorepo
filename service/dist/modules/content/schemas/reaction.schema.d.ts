import mongoose, { Document, Types } from 'mongoose';
export interface IReaction extends Document {
    postId: Types.ObjectId;
    userId: string;
    type: 'like' | 'love' | 'laugh' | 'fire' | 'sad' | 'angry';
    createdAt: Date;
}
export declare const ReactionSchema: mongoose.Schema<IReaction, mongoose.Model<IReaction, any, any, any, mongoose.Document<unknown, any, IReaction, any, {}> & IReaction & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IReaction, mongoose.Document<unknown, {}, mongoose.FlatRecord<IReaction>, {}, mongoose.DefaultSchemaOptions> & mongoose.FlatRecord<IReaction> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const Reaction: mongoose.Model<IReaction, {}, {}, {}, mongoose.Document<unknown, {}, IReaction, {}, {}> & IReaction & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
