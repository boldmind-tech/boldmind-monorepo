import { Schema } from 'mongoose';

export const NotificationPreferenceSchema = new Schema(
    {
        userId: { type: String, unique: true },
        email: { type: Boolean, default: true },
        sms: { type: Boolean, default: false },
        push: { type: Boolean, default: true },
        inApp: { type: Boolean, default: true },
    },
    { timestamps: true }
);
