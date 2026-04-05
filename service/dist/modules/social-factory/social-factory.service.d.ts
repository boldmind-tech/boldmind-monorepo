import { PrismaService } from '../../database/prisma.service';
export declare class SocialFactoryService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
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
