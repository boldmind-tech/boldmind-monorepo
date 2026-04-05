import { BrandingService } from './branding.service';
import { GenerateLogoDto, GenerateBrandKitDto, GenerateFlyerDto, GenerateColorPaletteDto } from '../dto/all-planai.dto';
export declare class BrandingController {
    private readonly brandingService;
    constructor(brandingService: BrandingService);
    generateLogo(dto: GenerateLogoDto, user: {
        id: string;
    }): Promise<{
        jobId: string;
        status: string;
        imageUrls: string[];
    }>;
    generateBrandKit(dto: GenerateBrandKitDto, user: {
        id: string;
    }): Promise<{
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
    generateMarketingFlyer(dto: GenerateFlyerDto, user: {
        id: string;
    }): Promise<{
        imageUrls: string[];
    }>;
    generateColorPalette(dto: GenerateColorPaletteDto): Promise<{
        palettes: {
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
        }[];
    }>;
    listJobs(user: {
        id: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        status: import("@prisma/client").$Enums.PlanAIJobStatus;
        output: import("@prisma/client/runtime/client").JsonValue;
    }[]>;
}
