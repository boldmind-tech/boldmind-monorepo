import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../../database/prisma.service';
import { AiService } from '../../ai/ai.service';
import { GenerateLogoDto, GenerateBrandKitDto, GenerateFlyerDto, GenerateColorPaletteDto } from '../dto/all-planai.dto';
export declare class BrandingService {
    private readonly prisma;
    private readonly aiService;
    private readonly config;
    private readonly logger;
    private readonly falApiKey;
    private readonly cfAccountId;
    private readonly cfApiToken;
    constructor(prisma: PrismaService, aiService: AiService, config: ConfigService);
    generateLogo(dto: GenerateLogoDto, userId: string): Promise<{
        jobId: string;
        status: string;
        imageUrls: string[];
    }>;
    generateBrandKit(dto: GenerateBrandKitDto, userId: string): Promise<{
        jobId: string;
        brandIdentity: {
            colors: {
                primary: string;
                secondary: string;
                accent: string;
                neutral: string;
                background: string;
            };
            fonts: {
                heading: string;
                body: string;
                accent: string;
            };
            personality: string[];
            tagline: string;
            voiceTone: string;
            usageGuidelines: string;
        };
        logoUrls: string[];
    }>;
    generateMarketingFlyer(dto: GenerateFlyerDto, userId: string): Promise<{
        imageUrls: string[];
    }>;
    generateColorPalette(dto: GenerateColorPaletteDto): Promise<{
        palettes: Array<{
            name: string;
            colors: {
                primary: string;
                secondary: string;
                accent: string;
                neutral: string;
                background: string;
                text: string;
            };
            mood: string;
            bestFor: string;
        }>;
    }>;
    listUserJobs(userId: string): Promise<{
        id: string;
        createdAt: Date;
        status: import("@prisma/client").$Enums.PlanAIJobStatus;
        output: import("@prisma/client/runtime/client").JsonValue;
    }[]>;
    private generateImagesWithFal;
    private buildLogoPrompt;
}
