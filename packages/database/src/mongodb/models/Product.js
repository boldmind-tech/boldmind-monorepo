import mongoose, { Schema } from 'mongoose';
const ProductSchema = new Schema({
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
ProductSchema.index({ slug: 1 });
ProductSchema.index({ category: 1 });
ProductSchema.index({ status: 1 });
ProductSchema.index({ ownerId: 1 });
ProductSchema.index({ createdAt: -1 });
export const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);
//# sourceMappingURL=Product.js.map