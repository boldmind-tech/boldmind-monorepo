export declare class InitializePaymentDto {
    productSlug: string;
    amountNGN: number;
    description: string;
    interval?: string;
    callbackUrl?: string;
    metadata?: Record<string, any>;
}
export declare class VerifyPaymentDto {
    reference: string;
}
export declare class WebhookDto {
    event: string;
    data: any;
}
export declare class CreateSubscriptionDto {
    productSlug: string;
    planName: string;
    amountNGN: number;
    interval: string;
}
