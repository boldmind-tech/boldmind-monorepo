import mongoose, { Document } from 'mongoose';
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
export declare const Lead: mongoose.Model<any, {}, {}, {}, any, any>;
//# sourceMappingURL=Lead.d.ts.map