import { Resend } from 'resend';
import { ReactNode } from 'react';

export interface SendEmailOptions {
    to: string | string[];
    subject: string;
    template?: ReactNode;
    text?: string;
    from?: string;
}

export interface SendEmailResponse {
    id: string;
}

export class EmailService {
    private resend: Resend;
    private defaultFrom = 'BoldMind <noreply@boldmind.ng>';

    constructor(apiKey?: string) {
        const key = apiKey || process.env['RESEND_API_KEY'];
        if (!key) {
            throw new Error('Missing RESEND_API_KEY. Set it in your environment variables.');
        }
        this.resend = new Resend(key);
    }

    async sendEmail(options: SendEmailOptions): Promise<SendEmailResponse | null> {
        const { to, subject, template, text, from } = options;

        try {
            const { data, error } = await this.resend.emails.send({
                from: from || this.defaultFrom,
                to: Array.isArray(to) ? to : [to],
                subject: subject,
                react: template as any,
                text: text || '',
            });

            if (error) {
                console.error('[EmailService] Resend error:', error);
                throw new Error(error.message);
            }

            return data;
        } catch (err: any) {
            console.error('[EmailService] Failed to send email:', err.message);
            throw err;
        }
    }
}

export const emailService = new EmailService();
