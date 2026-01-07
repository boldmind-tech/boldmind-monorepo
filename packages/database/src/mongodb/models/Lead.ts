import mongoose, { Schema, Document } from 'mongoose';

export interface ILead extends Document {
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  position?: string;
  website?: string;
  phone?: string;
  source: string;
  status: 'new' | 'contacted' | 'qualified' | 'unqualified' | 'converted';
  userId?: string;
  verified: boolean;
  verificationDate?: Date;
  enrichedData?: {
    companySize?: string;
    industry?: string;
    revenue?: string;
    socialProfiles?: string[];
    technologies?: string[];
  };
  notes?: string[];
  tags?: string[];
  metadata?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
  lastContacted?: Date;
}

const LeadSchema = new Schema<ILead>({
  email: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  company: { type: String },
  position: { type: String },
  website: { type: String },
  phone: { type: String },
  source: { type: String, required: true },
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'unqualified', 'converted'],
    default: 'new'
  },
  userId: { type: String },
  verified: { type: Boolean, default: false },
  verificationDate: { type: Date },
  enrichedData: {
    companySize: String,
    industry: String,
    revenue: String,
    socialProfiles: [String],
    technologies: [String]
  },
  notes: [{ type: String }],
  tags: [{ type: String }],
  metadata: { type: Schema.Types.Mixed },
  lastContacted: { type: Date }
}, {
  timestamps: true
});

// Indexes
LeadSchema.index({ email: 1 });
LeadSchema.index({ userId: 1 });
LeadSchema.index({ status: 1 });
LeadSchema.index({ source: 1 });
LeadSchema.index({ company: 1 });
LeadSchema.index({ createdAt: -1 });
LeadSchema.index({ lastContacted: -1 });

// Text search index
LeadSchema.index({
  email: 'text',
  firstName: 'text',
  lastName: 'text',
  company: 'text',
  position: 'text'
});

export const Lead = mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);