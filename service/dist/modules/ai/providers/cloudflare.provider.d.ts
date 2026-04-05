import { ConfigService } from '@nestjs/config';
export interface CFImageOptions {
    width?: number;
    height?: number;
    steps?: number;
    guidance?: number;
    negativePrompt?: string;
    seed?: number;
}
export interface FalImageOptions {
    imageSize?: 'square_hd' | 'square' | 'portrait_4_3' | 'portrait_16_9' | 'landscape_4_3' | 'landscape_16_9';
    numSteps?: number;
    guidanceScale?: number;
    seed?: number;
    numImages?: number;
}
export declare class CloudflareAiProvider {
    private readonly config;
    private readonly logger;
    private readonly cfAccountId;
    private readonly cfApiToken;
    private readonly cfIsAvailable;
    private readonly falApiKey;
    private readonly falIsAvailable;
    constructor(config: ConfigService);
    get cfAvailable(): boolean;
    get falAvailable(): boolean;
    generateImageCF(prompt: string, options?: CFImageOptions): Promise<Buffer>;
    generateImageSDXL(prompt: string, options?: CFImageOptions): Promise<Buffer>;
    generateImageFal(prompt: string, model?: 'fal-ai/flux-pro' | 'fal-ai/flux/schnell' | 'fal-ai/flux-realism', options?: FalImageOptions): Promise<string[]>;
    generateWhatsAppFlyer(params: {
        businessName: string;
        offer: string;
        price?: string;
        style?: 'modern' | 'traditional' | 'luxury' | 'playful';
    }): Promise<Buffer>;
    transcribeAudio(audioBuffer: Buffer): Promise<string>;
    chatCF(systemPrompt: string, userMessage: string): Promise<string>;
}
