import mongoose, { Schema, Document } from 'mongoose';


export interface IEmailList extends Document {
    userId: string;
    name: string;
    description?: string;
    contacts: Array<{
        email: string;
        firstName?: string;
        lastName?: string;
        company?: string;
        position?: string;
        phone?: string;
        location?: string;
        linkedinUrl?: string;
        tags: string[];
        customFields: Map<string, any>;
        source: string;
        addedAt: Date;
    }>;
    tags: string[];
    totalContacts: number;
    validEmails: number;
    invalidEmails: number;
    lastUpdated: Date;
    createdAt: Date;
}

const EmailListSchema = new Schema<IEmailList>(
    {
        userId: { type: String, required: true, index: true },
        name: { type: String, required: true },
        description: String,
        contacts: [{
            email: { type: String, required: true, index: true },
            firstName: String,
            lastName: String,
            company: String,
            position: String,
            phone: String,
            location: String,
            linkedinUrl: String,
            tags: [String],
            customFields: { type: Map, of: Schema.Types.Mixed },
            source: { type: String, required: true },
            addedAt: { type: Date, default: Date.now }
        }],
        tags: [{ type: String, index: true }],
        totalContacts: { type: Number, default: 0 },
        validEmails: { type: Number, default: 0 },
        invalidEmails: { type: Number, default: 0 },
        lastUpdated: { type: Date, default: Date.now }
    },
    {
        timestamps: true,
        collection: 'email_lists'
    }
);

// Indexes
EmailListSchema.index({ userId: 1, name: 1 });
EmailListSchema.index({ 'contacts.email': 1 });

export const EmailList = mongoose.model<IEmailList>('EmailList', EmailListSchema);