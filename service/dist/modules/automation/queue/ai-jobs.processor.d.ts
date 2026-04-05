import { Job } from 'bull';
export declare class AIJobsProcessor {
    private readonly logger;
    handleEmailScrape(job: Job<{
        userId: string;
        targetUrl?: string;
        linkedinSearchQuery?: string;
        naijaDirectory?: string;
        limit?: number;
    }>): Promise<{
        emails: string[];
        count: number;
    }>;
}
