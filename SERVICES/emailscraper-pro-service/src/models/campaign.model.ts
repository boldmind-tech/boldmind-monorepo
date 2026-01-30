import mongoose, { Schema, Document } from 'mongoose';


export interface IEmailCampaign extends Document {
    userId: string;
    name: string;
    emailListIds: string[];
    subject: string;
    content: {
        html: string;
        text: string;
    };
    sender: {
        name: string;
        email: string;
        replyTo?: string;
    };
    schedule: {
        sendAt?: Date;
        timezone: string;
        isRecurring: boolean;
        frequency?: string;
    };
    status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'paused' | 'cancelled';
    stats: {
        totalRecipients: number;
        sent: number;
        delivered: number;
        opened: number;
        clicked: number;
        bounced: number;
        unsubscribed: number;
        complained: number;
    };
    tracking: {
        openTracking: boolean;
        clickTracking: boolean;
        unsubscribeLink: boolean;
    };
    sentAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

const EmailCampaignSchema = new Schema<IEmailCampaign>(
    {
        userId: { type: String, required: true, index: true },
        name: { type: String, required: true },
        emailListIds: [{ type: String, required: true }],
        subject: { type: String, required: true },
        content: {
            html: { type: String, required: true },
            text: { type: String, required: true }
        },
        sender: {
            name: { type: String, required: true },
            email: { type: String, required: true },
            replyTo: String
        },
        schedule: {
            sendAt: Date,
            timezone: { type: String, default: 'Africa/Lagos' },
            isRecurring: { type: Boolean, default: false },
            frequency: String
        },
        status: {
            type: String,
            enum: ['draft', 'scheduled', 'sending', 'sent', 'paused', 'cancelled'],
            default: 'draft',
            index: true
        },
        stats: {
            totalRecipients: { type: Number, default: 0 },
            sent: { type: Number, default: 0 },
            delivered: { type: Number, default: 0 },
            opened: { type: Number, default: 0 },
            clicked: { type: Number, default: 0 },
            bounced: { type: Number, default: 0 },
            unsubscribed: { type: Number, default: 0 },
            complained: { type: Number, default: 0 }
        },
        tracking: {
            openTracking: { type: Boolean, default: true },
            clickTracking: { type: Boolean, default: true },
            unsubscribeLink: { type: Boolean, default: true }
        },
        sentAt: Date
    },
    {
        timestamps: true,
        collection: 'email_campaigns'
    }
);

// Indexes
EmailCampaignSchema.index({ userId: 1, status: 1 });
EmailCampaignSchema.index({ 'schedule.sendAt': 1 });

export const EmailCampaign = mongoose.model<IEmailCampaign>('EmailCampaign', EmailCampaignSchema);