export declare class SendPushDto {
    title: string;
    body: string;
    icon?: string;
    url?: string;
    data?: Record<string, any>;
}
export declare class SubscribePushDto {
    endpoint: string;
    keys: {
        p256dh: string;
        auth: string;
    };
    deviceLabel?: string;
}
