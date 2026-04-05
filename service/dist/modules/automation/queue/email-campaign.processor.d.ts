import { Job } from 'bull';
import { ConfigService } from '@nestjs/config';
export declare class EmailCampaignProcessor {
    private readonly config;
    private readonly logger;
    private readonly resend;
    private readonly FROM_EMAIL;
    constructor(config: ConfigService);
    handleEmailBatch(job: Job<{
        userId: string;
        subject: string;
        htmlBody: string;
        recipients: string[];
    }>): Promise<{
        sent: number;
        failed: number;
    }>;
    handleExpiryReminder(job: Job<{
        email: string;
        name: string;
        productSlug: string;
        expiresAt: Date;
    }>): Promise<void>;
}
