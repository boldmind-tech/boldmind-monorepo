import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  order?: number;
}

const CategorySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    metaTitle: { type: String },
    metaDescription: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Prevent model re-definition
export const Category = mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);
