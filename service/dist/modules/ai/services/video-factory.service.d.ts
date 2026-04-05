import { Queue } from 'bullmq';
import { AiService } from '../ai.service';
export interface PostToSocialize {
    id?: string;
    _id?: string;
    title: string;
    content: string;
    excerpt?: string;
    media?: {
        featuredImage?: string;
    };
    tags?: string[];
    language?: 'pidgin' | 'english' | 'yoruba' | 'igbo' | 'hausa';
    category?: string;
}
export type TargetPlatform = 'facebook' | 'instagram' | 'tiktok' | 'twitter' | 'whatsapp' | 'linkedin';
export interface SocialContentPackage {
    sourceId: string;
    sourceType: string;
    platforms: Record<TargetPlatform, PlatformContent | null>;
    scheduledAt?: string;
    status: 'queued' | 'processing' | 'done' | 'failed';
    jobId?: string;
}
export interface PlatformContent {
    caption: string;
    hashtags: string[];
    callToAction: string;
    imagePrompt?: string;
    imageUrl?: string;
    characterCount: number;
    platformSpecificData?: Record<string, unknown>;
}
export interface WhatsAppBroadcast {
    message: string;
    imageUrl?: string;
    ctaUrl?: string;
    ctaText?: string;
}
export declare class VideoFactoryService {
    private readonly ai;
    private readonly socialQueue;
    private readonly videoQueue;
    private readonly logger;
    constructor(ai: AiService, socialQueue: Queue, videoQueue: Queue);
    convertPostToVideo(post: PostToSocialize, targetPlatforms?: TargetPlatform[]): Promise<SocialContentPackage | null>;
    generateSocialContentPackage(post: PostToSocialize, platforms?: TargetPlatform[]): Promise<Record<TargetPlatform, PlatformContent | null>>;
    generateWhatsAppBroadcast(post: PostToSocialize): Promise<WhatsAppBroadcast>;
    scheduleContentDistribution(params: {
        postId: string;
        platforms: TargetPlatform[];
        publishAt: Date;
        content: Partial<Record<TargetPlatform, PlatformContent>>;
    }): Promise<string[]>;
    getJobStatus(jobId: string): Promise<{
        status: string;
        progress?: number;
        result?: unknown;
        error?: string;
    }>;
    generateAndUploadImage(params: {
        postId: string;
        imagePrompt: string;
        platform: TargetPlatform;
    }): Promise<string | null>;
    private getPlatformTone;
    private getPlatformImageFormat;
}
