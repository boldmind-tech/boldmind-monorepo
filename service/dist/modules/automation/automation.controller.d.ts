import { AutomationService } from './automation.service';
export declare class AutomationController {
    private readonly automationService;
    constructor(automationService: AutomationService);
    schedulePost(userId: string, dto: any): Promise<{
        jobId: import("bull").JobId;
        scheduledAt: Date;
    }>;
    generateCalendar(userId: string, dto: any): Promise<any>;
    bulkCaptions(userId: string, dto: any): Promise<any>;
    emailCampaign(userId: string, dto: any): Promise<{
        batches: number;
        jobs: import("bull").JobId[];
        totalRecipients: number;
    }>;
    scrapeEmails(userId: string, dto: any): Promise<{
        jobId: import("bull").JobId;
        status: string;
        message: string;
    }>;
    verifyEmail(email: string): Promise<{
        valid: boolean;
        reason?: string;
    }>;
    trigger(body: {
        workflow: string;
        payload?: any;
    }): Promise<any>;
    queueStats(): Promise<{
        social: {
            name: string;
            waiting: number;
            active: number;
            completed: number;
            failed: number;
        };
        email: {
            name: string;
            waiting: number;
            active: number;
            completed: number;
            failed: number;
        };
        ai: {
            name: string;
            waiting: number;
            active: number;
            completed: number;
            failed: number;
        };
    }>;
}
