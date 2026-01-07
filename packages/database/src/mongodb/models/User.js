import mongoose, { Schema } from 'mongoose';
const UserSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    name: { type: String, required: true },
    passwordHash: { type: String, required: true },
    avatar: { type: String },
    role: { type: String, enum: ['user', 'admin', 'super_admin'], default: 'user' },
    emailVerified: { type: Boolean, default: false },
    verificationToken: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    lastLogin: { type: Date },
    preferences: {
        theme: { type: String, enum: ['light', 'dark', 'system'], default: 'system' },
        notifications: { type: Boolean, default: true },
        language: { type: String, default: 'en' }
    }
}, {
    timestamps: true
});
UserSchema.index({ email: 1 });
UserSchema.index({ role: 1 });
UserSchema.index({ createdAt: -1 });
UserSchema.virtual('fullName').get(function () {
    return this.name;
});
export const User = mongoose.models.User || mongoose.model('User', UserSchema);
//# sourceMappingURL=User.js.map