import { NotificationService } from './notification.service';
import { SendPushDto, SubscribePushDto } from './dto/send-push.dto';
export declare class NotificationController {
    private readonly notifService;
    constructor(notifService: NotificationService);
    getMyNotifications(userId: string, page?: number, limit?: number): Promise<{
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
    markAsRead(userId: string, ids?: string[]): Promise<{
        message: string;
    }>;
    deleteNotification(userId: string, id: string): Promise<{
        message: string;
    }>;
    subscribePush(userId: string, dto: SubscribePushDto): Promise<{
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
    broadcastPush(dto: SendPushDto): Promise<{
        message: string;
    }>;
    broadcastEmail(body: {
        subject: string;
        html: string;
        segment?: 'all' | 'pro' | 'free';
    }): Promise<{
        message: string;
    }>;
}
