import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  slug: string;
  description: string;
  category: string;
  status: 'draft' | 'building' | 'beta' | 'live' | 'archived';
  version: string;
  ownerId?: string;
  features: string[];
  pricing?: {
    type: 'free' | 'paid' | 'freemium';
    plans?: {
      name: string;
      price: number;
      interval: 'monthly' | 'yearly';
      features: string[];
    }[];
  };
  metadata?: Record<string, any>;
  stats?: {
    users: number;
    revenue?: number;
    rating?: number;
    reviews?: number;
  };
  settings?: {
    requiresAuth: boolean;
    isPublic: boolean;
    maxUsers?: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['draft', 'building', 'beta', 'live', 'archived'],
    default: 'draft'
  },
  version: { type: String, default: '1.0.0' },
  ownerId: { type: String },
  features: [{ type: String }],
  pricing: {
    type: { 
      type: String, 
      enum: ['free', 'paid', 'freemium'],
      default: 'free'
    },
    plans: [{
      name: String,
      price: Number,
      interval: { type: String, enum: ['monthly', 'yearly'] },
      features: [String]
    }]
  },
  metadata: { type: Schema.Types.Mixed },
  stats: {
    users: { type: Number, default: 0 },
    revenue: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 }
  },
  settings: {
    requiresAuth: { type: Boolean, default: true },
    isPublic: { type: Boolean, default: false },
    maxUsers: { type: Number }
  }
}, {
  timestamps: true
});

// Indexes
ProductSchema.index({ slug: 1 });
ProductSchema.index({ category: 1 });
ProductSchema.index({ status: 1 });
ProductSchema.index({ ownerId: 1 });
ProductSchema.index({ createdAt: -1 });

export const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);