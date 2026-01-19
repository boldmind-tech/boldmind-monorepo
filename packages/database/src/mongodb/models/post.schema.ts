import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  category: mongoose.Types.ObjectId;
  authorId?: mongoose.Types.ObjectId;
  imageUrl?: string;
  views: number;
  status: 'draft' | 'published';
  source?: string;
  commentary?: string;
  isSponsored: boolean;
  boldmindProduct: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String },
    content: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    authorId: { type: Schema.Types.ObjectId, ref: 'User' },
    imageUrl: { type: String },
    views: { type: Number, default: 0 },
    status: { type: String, enum: ['draft', 'published'], default: 'published' },
    source: { type: String, default: 'manual' },
    commentary: { type: String },
    isSponsored: { type: Boolean, default: false },
    boldmindProduct: { type: String, default: 'amebogist' },
  },
  { timestamps: true }
);

// Prevent model re-definition
export const Post = mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);
