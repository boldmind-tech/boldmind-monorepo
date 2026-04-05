import { ConfigService } from '@nestjs/config';
import { Queue } from 'bullmq';
import * as webpush from 'web-push';
import { PrismaService } from '../../database/prisma.service';
import { MetaWebhookService } from '../planai/receptionist/metawebhook.service';
import { SendEmailDto } from './dto/send-email.dto';
import { SendPushDto } from './dto/send-push.dto';
export declare class NotificationService {
    private config;
    private prisma;
    private metaWebhook;
    private notifQueue;
    private readonly logger;
    private readonly resend;
    private readonly fromEmail;
    constructor(config: ConfigService, prisma: PrismaService, metaWebhook: MetaWebhookService, notifQueue: Queue);
    sendEmail(dto: SendEmailDto): Promise<import("resend").CreateEmailResponse>;
    sendWelcomeEmail(userId: string, name: string, email: string): Promise<import("resend").CreateEmailResponse>;
    sendPasswordResetEmail(email: string, resetUrl: string): Promise<import("resend").CreateEmailResponse>;
    sendOtpEmail(email: string, otp: string): Promise<import("resend").CreateEmailResponse>;
    sendPaymentReceiptEmail(userId: string, email: string, amount: number, plan: string): Promise<import("resend").CreateEmailResponse>;
    sendWhatsapp(phoneNumberId: string, to: string, message: string): Promise<any>;
    subscribePush(userId: string, subscription: webpush.PushSubscription, deviceLabel?: string): Promise<{
        auth: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        userId: string;
        userAgent: string | null;
        keys: import("@prisma/client/runtime/client").JsonValue | null;
        endpoint: string;
        deviceLabel: string | null;
        p256dh: string | null;
    }>;
    unsubscribePush(endpoint: string): Promise<void>;
    sendPushToUser(userId: string, dto: SendPushDto): Promise<{
        sent: number;
        total?: undefined;
    } | {
        sent: number;
        total: number;
    }>;
    broadcastToAll(dto: {
        title: string;
        body: string;
        url?: string;
        icon?: string;
    }): Promise<{
        message: string;
    }>;
    broadcastEmail(subject: string, html: string, segment?: 'all' | 'pro' | 'free'): Promise<{
        message: string;
    }>;
    getUserNotifications(userId: string, page?: number, limit?: number): Promise<{
        data: {
            type: import("@prisma/client").$Enums.NotificationType;
            id: string;
            createdAt: Date;
            userId: string;
            title: string;
            body: string;
            read: boolean;
            meta: import("@prisma/client/runtime/client").JsonValue | null;
            readAt: Date | null;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            pages: number;
        };
        unread: number;
    }>;
    markAsRead(userId: string, notificationIds?: string[]): Promise<{
        message: string;
    }>;
    deleteNotification(userId: string, id: string): Promise<{
        message: string;
    }>;
    private logNotification;
    private buildWelcomeTemplate;
    private buildPasswordResetTemplate;
    private buildReceiptTemplate;
}
