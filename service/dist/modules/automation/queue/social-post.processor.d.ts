import { Job } from 'bull';
import { ConfigService } from '@nestjs/config';
export declare class SocialPostProcessor {
    private readonly config;
    private readonly logger;
    constructor(config: ConfigService);
    handleSocialPost(job: Job<{
        userId: string;
        platforms: string[];
        content: string;
        mediaUrls?: string[];
        caption?: string;
        hashtags?: string[];
    }>): Promise<Record<string, any>>;
    private postToPlatform;
}
