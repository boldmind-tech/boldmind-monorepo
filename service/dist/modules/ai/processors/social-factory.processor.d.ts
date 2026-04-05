import { WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
export declare class SocialFactoryProcessor extends WorkerHost {
    private readonly logger;
    process(job: Job): Promise<unknown>;
    private handleGenerateSocialContent;
    private handlePublishToPlatform;
}
