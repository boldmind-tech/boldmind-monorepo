import mongoose, { Document } from 'mongoose';
export interface IUser extends Document {
    email: string;
    name: string;
    passwordHash: string;
    avatar?: string;
    role: 'user' | 'admin' | 'super_admin';
    emailVerified: boolean;
    verificationToken?: string;
    resetPasswordToken?: string;
    resetPasswordExpires?: Date;
    lastLogin?: Date;
    preferences?: {
        theme: 'light' | 'dark' | 'system';
        notifications: boolean;
        language: string;
    };
    createdAt: Date;
    updatedAt: Date;
}
export declare const User: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=User.d.ts.map