import { PrismaService } from "../../../database/prisma.service";
import { AiService } from "../../ai/ai.service";
interface GenerateSAFEDto {
    companyName: string;
    founderName: string;
    investorName: string;
    investmentAmountNGN: number;
    valuationCapNGN?: number;
    discountRate?: number;
    companyAddress: string;
    incorporationState: string;
}
interface InvestorUpdateDto {
    companyName: string;
    period: string;
    mrrNGN: number;
    mrrGrowth: number;
    userCount: number;
    topWins: string[];
    challenges: string[];
    nextGoals: string[];
}
export declare class InvestorService {
    private readonly prisma;
    private readonly aiService;
    constructor(prisma: PrismaService, aiService: AiService);
    generateSAFEAgreement(dto: GenerateSAFEDto, userId: string): Promise<{
        safeDocument: string;
        keyTerms: object;
        warningFlags: string[];
        jobId: string;
    }>;
    setupDataRoom(dto: {
        companyName: string;
        industry: string;
        stage: string;
    }, userId: string): Promise<{
        sections: Array<{
            name: string;
            documents: Array<{
                name: string;
                required: boolean;
                description: string;
            }>;
        }>;
        priorityItems: string[];
    }>;
    getDueDiligenceChecklist(dto: {
        industry: string;
        stage: string;
    }): Promise<{
        categories: Array<{
            category: string;
            items: Array<{
                item: string;
                priority: "high" | "medium" | "low";
                notes: string;
            }>;
        }>;
    }>;
    generateInvestorUpdate(dto: InvestorUpdateDto, userId: string): Promise<{
        emailBody: import("../../ai/ai.service").AiChatResult;
    }>;
}
export {};
