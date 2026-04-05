export declare class SendEmailDto {
    userId?: string;
    to: string | string[];
    subject: string;
    html?: string;
    text?: string;
    from?: string;
    replyTo?: string;
    tags?: Array<{
        name: string;
        value: string;
    }>;
}
