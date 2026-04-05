import { PrismaService } from '../../../database/prisma.service';
import { AiService } from '../../ai/ai.service';
export interface GeneratePortfolioDto {
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
    template?: 'modern' | 'minimal' | 'creative';
}
export interface GenerateResumeDto {
    name: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
    experience: Array<{
        company: string;
        role: string;
        duration: string;
        responsibilities: string[];
    }>;
    education: Array<{
        school: string;
        degree: string;
        year: string;
    }>;
    skills: string[];
    certifications?: string[];
    targetRole: string;
}
export declare class CredibilityService {
    private readonly prisma;
    private readonly aiService;
    constructor(prisma: PrismaService, aiService: AiService);
    generatePortfolio(dto: GeneratePortfolioDto, userId: string): Promise<{
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
    generateResume(dto: GenerateResumeDto, userId: string): Promise<{
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
