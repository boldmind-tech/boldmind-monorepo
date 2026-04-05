import { InvestorService } from './investor.service';
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
export declare class InvestorController {
    private readonly investorService;
    constructor(investorService: InvestorService);
    generateSAFE(dto: GenerateSAFEDto, user: {
        id: string;
    }): Promise<{
        safeDocument: string;
        keyTerms: object;
        warningFlags: string[];
        jobId: string;
    }>;
    setupDataRoom(dto: {
        companyName: string;
        industry: string;
        stage: string;
    }, user: {
        id: string;
    }): Promise<{
        sections: {
            name: string;
            documents: {
                name: string;
                required: boolean;
                description: string;
            }[];
        }[];
        priorityItems: string[];
    }>;
    getDueDiligence(dto: {
        industry: string;
        stage: string;
    }): Promise<{
        categories: {
            category: string;
            items: {
                item: string;
                priority: "high" | "medium" | "low";
                notes: string;
            }[];
        }[];
    }>;
    generateInvestorUpdate(dto: InvestorUpdateDto, user: {
        id: string;
    }): Promise<{
        emailBody: import("../../ai/ai.service").AiChatResult;
    }>;
}
export {};
