import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { Queue } from 'bullmq';
import { PrismaService } from '../../../database/prisma.service';
import { RedisService } from '../../../database/redis.service';
export interface MetaWebhookPayload {
    object: 'whatsapp_business_account' | 'instagram';
    entry: MetaEntry[];
}
interface MetaEntry {
    id: string;
    changes: MetaChange[];
}
interface MetaChange {
    value: MetaChangeValue;
    field: string;
}
interface MetaChangeValue {
    messaging_product: string;
    metadata: {
        display_phone_number: string;
        phone_number_id: string;
    };
    contacts?: {
        profile: {
            name: string;
        };
        wa_id: string;
    }[];
    messages?: MetaMessage[];
    statuses?: MetaStatus[];
}
interface MetaMessage {
    from: string;
    id: string;
    timestamp: string;
    type: 'text' | 'image' | 'audio' | 'document' | 'interactive' | 'button';
    text?: {
        body: string;
    };
    image?: {
        id: string;
        mime_type: string;
    };
    audio?: {
        id: string;
        mime_type: string;
    };
    interactive?: {
        type: string;
        button_reply?: {
            id: string;
            title: string;
        };
    };
}
interface MetaStatus {
    id: string;
    status: 'sent' | 'delivered' | 'read' | 'failed';
    timestamp: string;
    recipient_id: string;
}
export declare class MetaWebhookService {
    private config;
    private http;
    private prisma;
    private redis;
    private receptionistQueue;
    private readonly logger;
    private readonly verifyToken;
    private readonly appSecret;
    private readonly waToken;
    private readonly waApiVersion;
    constructor(config: ConfigService, http: HttpService, prisma: PrismaService, redis: RedisService, receptionistQueue: Queue);
    verifyWebhook(mode: string, token: string, challenge: string): string;
    validateSignature(rawBody: Buffer, signature: string): boolean;
    processWebhook(payload: MetaWebhookPayload, rawBody: Buffer, signature: string): Promise<{
        status: string;
    }>;
    private handleMessagesChange;
    sendTextMessage(phoneNumberId: string, to: string, text: string): Promise<any>;
    sendTemplateMessage(phoneNumberId: string, to: string, templateName: string, langCode: string, components: any[]): Promise<any>;
    sendInteractiveButtons(phoneNumberId: string, to: string, bodyText: string, buttons: {
        id: string;
        title: string;
    }[]): Promise<any>;
    sendMessengerMessage(recipientId: string, text: string, accessToken: string): Promise<any>;
    replyToComment(commentId: string, message: string, accessToken: string): Promise<any>;
    sendInstagramMessage(recipientId: string, text: string, accessToken: string): Promise<any>;
    sendWhatsAppMessage(to: string, text: string, phoneNumberId: string, accessToken: string): Promise<any>;
    downloadMediaUrl(mediaId: string): Promise<string>;
    private upsertConversation;
    private handleStatuses;
}
export {};
