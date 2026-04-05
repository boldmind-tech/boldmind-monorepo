export declare class CreateEmailCampaignDto {
    name: string;
    subject: string;
    bodyHtml: string;
    recipientEmails: string[];
    scheduledFor?: string;
    isAbTest?: boolean;
    variantSubject?: string;
}
