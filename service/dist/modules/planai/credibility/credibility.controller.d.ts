import { CredibilityService } from './credibility.service';
import { GeneratePortfolioDto, GenerateResumeDto } from './credibility.service';
export declare class CredibilityController {
    private readonly credibilityService;
    constructor(credibilityService: CredibilityService);
    generatePortfolio(dto: GeneratePortfolioDto, user: {
        id: string;
    }): Promise<{
        jobId: string;
        portfolio: {
            tagline: string;
            highlights: string[];
            personalBrandSummary: string;
            name: string;
            title: string;
            bio: string;
            skills: string[];
            experience: Array<{
                company: string;
                role: string;
                duration: string;
                achievements: string[];
            }>;
            education: Array<{
                school: string;
                degree: string;
                year: string;
            }>;
            projects: Array<{
                name: string;
                description: string;
                url?: string;
                imageUrl?: string;
            }>;
            template?: "modern" | "minimal" | "creative";
        };
    }>;
    optimizeLinkedIn(dto: {
        currentHeadline: string;
        currentSummary: string;
        targetRole: string;
        industry: string;
    }): Promise<{
        optimizedHeadline: string;
        optimizedSummary: string;
        keywordsAdded: string[];
        atsScore: {
            before: number;
            after: number;
        };
        actionItems: string[];
    }>;
    generateResume(dto: GenerateResumeDto, user: {
        id: string;
    }): Promise<{
        jobId: string;
        resume: {
            formattedResume: object;
            atsFriendlyText: string;
            improvementSuggestions: string[];
            keywordScore: number;
        };
    }>;
    getPublicPortfolio(userId: string): Promise<import("@prisma/client/runtime/client").JsonValue>;
}
