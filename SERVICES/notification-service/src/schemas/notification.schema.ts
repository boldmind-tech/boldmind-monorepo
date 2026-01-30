import { Schema } from 'mongoose';

export const NotificationSchema = new Schema(
    {
        userId: { type: String, required: true }, // Supabase user id
        channel: {
            type: String,
            enum: ['email', 'sms', 'push', 'in_app'],
            required: true,
        },
        title: String,
        message: String,
        payload: Schema.Types.Mixed,

        status: {
            type: String,
            enum: ['pending', 'sent', 'failed'],
            default: 'pending',
        },

        provider: String,
        error: Schema.Types.Mixed,
        sentAt: Date,
    },
    { timestamps: true }
);
