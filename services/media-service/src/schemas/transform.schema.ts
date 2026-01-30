import { Schema } from 'mongoose';

export const MediaTransformSchema = new Schema(
    {
        mediaId: String,
        operation: String, // resize, compress, transcode
        params: Schema.Types.Mixed,
        outputUrl: String,

        status: {
            type: String,
            enum: ['queued', 'running', 'completed', 'failed'],
            default: 'queued',
        },

        error: Schema.Types.Mixed,
    },
    { timestamps: true }
);
