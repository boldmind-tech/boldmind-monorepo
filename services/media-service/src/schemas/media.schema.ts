import { Schema } from 'mongoose';

export const MediaSchema = new Schema(
    {
        userId: String,
        app: String,

        type: {
            type: String,
            enum: ['image', 'video', 'audio', 'document'],
            required: true,
        },

        url: String,
        filename: String,
        size: Number,
        mimeType: String,

        metadata: {
            width: Number,
            height: Number,
            duration: Number,
        },

        processing: {
            status: {
                type: String,
                enum: ['pending', 'processing', 'ready', 'failed'],
                default: 'pending',
            },
            error: Schema.Types.Mixed,
        },

        visibility: {
            type: String,
            enum: ['public', 'private'],
            default: 'private',
        },
    },
    { timestamps: true }
);
