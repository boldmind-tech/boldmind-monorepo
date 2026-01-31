import mongoose from 'mongoose';
import { NotificationSchema } from '../schemas/notification.schema';
import { emailProvider, EmailPayload } from '../providers/email.provider';

const Notification = mongoose.model('Notification', NotificationSchema);

export class NotificationService {
    async sendEmailNotification(userId: string, payload: EmailPayload) {
        // 1. Create pending notification record
        const notification = new Notification({
            userId,
            channel: 'email',
            title: payload.subject,
            message: payload.data.text || '',
            payload: payload.data,
            provider: 'resend',
            status: 'pending'
        });

        try {
            await notification.save();

            // 2. Send the email
            const result = await emailProvider.send(payload);

            // 3. Update status to sent
            notification.status = 'sent';
            notification.sentAt = new Date();
            await notification.save();

            return result;
        } catch (error: any) {
            // 4. Update status to failed
            notification.status = 'failed';
            notification.error = error.message;
            await notification.save();
            throw error;
        }
    }

    /**
     * Send email verification to user
     */
    async sendVerificationEmail(userId: string, email: string, confirmationUrl: string) {
        // Extract verification code from URL if present
        const tokenMatch = confirmationUrl.match(/token=([^&]+)/);
        const token = tokenMatch ? tokenMatch[1] : null;
        const verificationCode = (token || userId).substring(0, 6).toUpperCase();

        return this.sendEmailNotification(userId, {
            to: email,
            subject: 'Verify your BoldMind account',
            templateType: 'verify',
            data: {
                fullName: email.split('@')[0],
                verificationCode,
                verificationLink: confirmationUrl,
            }
        });
    }

    /**
     * Send password reset email to user
     */
    async sendPasswordResetEmail(userId: string, email: string, resetUrl: string) {
        return this.sendEmailNotification(userId, {
            to: email,
            subject: 'Reset your BoldMind password',
            templateType: 'reset_password',
            data: {
                fullName: email.split('@')[0],
                resetLink: resetUrl,
            }
        });
    }

    /**
     * Send welcome email to new user
     */
    async sendWelcomeEmail(userId: string, email: string, userName?: string) {
        return this.sendEmailNotification(userId, {
            to: email,
            subject: 'Welcome to BoldMind!',
            templateType: 'welcome',
            data: {
                fullName: userName || email.split('@')[0],
            }
        });
    }
}

export const notificationService = new NotificationService();
