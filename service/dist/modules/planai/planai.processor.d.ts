import { Job } from 'bull';
import { PrismaService } from '../../database/prisma.service';
export declare class PlanAIProcessor {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    handlePlanAIJob(job: Job<{
        jobId: string;
        tool: string;
        input: any;
        userId: string;
    }>): Promise<void>;
}
