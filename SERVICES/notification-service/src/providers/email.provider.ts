import { emailService, WelcomeEmail, VerifyEmail, ResetPasswordEmail } from '@boldmind/email';
import * as React from 'react';

export interface EmailPayload {
    to: string;
    subject: string;
    templateType: 'welcome' | 'verify' | 'reset_password';
    data: any;
}

export class EmailProvider {
    async send(payload: EmailPayload) {
        const { to, subject, templateType, data } = payload;

        let template;

        switch (templateType) {
            case 'welcome':
                template = React.createElement(WelcomeEmail, { fullName: data.fullName });
                break;
            case 'verify':
                template = React.createElement(VerifyEmail, {
                    fullName: data.fullName,
                    verificationCode: data.verificationCode,
                    verificationLink: data.verificationLink
                });
                break;
            case 'reset_password':
                template = React.createElement(ResetPasswordEmail, {
                    fullName: data.fullName,
                    resetLink: data.resetLink
                });
                break;
            default:
                throw new Error(`Unsupported template type: ${templateType}`);
        }

        return emailService.sendEmail({
            to,
            subject,
            template,
            text: data.text || ''
        });
    }
}

export const emailProvider = new EmailProvider();
