import { SocialFactoryService } from './social-factory.service';
export declare class SocialFactoryController {
    private readonly socialService;
    constructor(socialService: SocialFactoryService);
    generatePost(userId: string, data: {
        topic: string;
        platform: string;
        tone?: string;
    }): Promise<{
        content: string;
        platform: string;
        tone: string;
    }>;
    schedulePost(userId: string, data: {
        content: string;
        platforms: string[];
        scheduledFor: string;
    }): Promise<{
        message: string;
        content: string;
        platforms: string[];
        scheduledFor: string;
        id: string;
        status: string;
    }>;
    getScheduledPosts(userId: string): Promise<any[]>;
}
