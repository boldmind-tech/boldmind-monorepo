"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BrandingService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandingService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../../../database/prisma.service");
const ai_service_1 = require("../../ai/ai.service");
const client_1 = require("@prisma/client");
let BrandingService = BrandingService_1 = class BrandingService {
    constructor(prisma, aiService, config) {
        this.prisma = prisma;
        this.aiService = aiService;
        this.config = config;
        this.logger = new common_1.Logger(BrandingService_1.name);
        this.falApiKey = this.config.getOrThrow('FAL_API_KEY');
        this.cfAccountId = this.config.getOrThrow('CF_ACCOUNT_ID');
        this.cfApiToken = this.config.getOrThrow('CF_WORKERS_AI_TOKEN');
    }
    async generateLogo(dto, userId) {
        const prompt = this.buildLogoPrompt(dto);
        const job = await this.prisma.planAIJob.create({
            data: {
                userId,
                type: client_1.PlanAIJobType.BRANDING_PACKAGE,
                status: client_1.PlanAIJobStatus.PROCESSING,
                productSlug: 'branding-design',
                input: dto,
                startedAt: new Date(),
            },
        });
        try {
            const imageUrls = await this.generateImagesWithFal({
                prompt,
                numImages: 4,
                imageSize: '1024x1024',
                model: 'fal-ai/flux/dev',
            });
            await this.prisma.planAIJob.update({
                where: { id: job.id },
                data: {
                    status: client_1.PlanAIJobStatus.COMPLETED,
                    output: { imageUrls, prompt },
                    modelUsed: 'fal-ai/flux/dev',
                    completedAt: new Date(),
                },
            });
            return { jobId: job.id, status: 'completed', imageUrls };
        }
        catch (error) {
            await this.prisma.planAIJob.update({
                where: { id: job.id },
                data: {
                    status: client_1.PlanAIJobStatus.FAILED,
                    errorMessage: error instanceof Error ? error.message : 'fal.ai error',
                },
            });
            throw error;
        }
    }
    async generateBrandKit(dto, userId) {
        const brandIdentity = await this.aiService.generateJson(`You are a Nigerian brand strategist. Generate a cohesive brand identity for a Nigerian business.
Return ONLY valid JSON with: colors (hex codes), fonts (Google Fonts names), personality traits, tagline, voice tone, usage guidelines.`, `Business: ${dto.businessName}
Industry: ${dto.industry}
Target Audience: ${dto.targetAudience}
Brand Values: ${dto.brandValues.join(', ')}
Preferred Style: ${dto.style ?? 'modern, professional'}
Inspiration: ${dto.inspiration ?? 'None'}`, {
            model: 'gpt-4o',
            maxTokens: 1500,
        });
        const logoPrompt = `${dto.businessName} company logo, ${brandIdentity.content?.personality?.join(', ')}, 
flat vector design, ${brandIdentity.content?.colors?.primary} primary color, clean minimal professional logo, 
white background, Nigerian business`;
        const logoUrls = await this.generateImagesWithFal({
            prompt: logoPrompt,
            numImages: 3,
            imageSize: '1024x1024',
            model: 'fal-ai/flux/dev',
        });
        const job = await this.prisma.planAIJob.create({
            data: {
                userId,
                type: client_1.PlanAIJobType.BRANDING_PACKAGE,
                status: client_1.PlanAIJobStatus.COMPLETED,
                productSlug: 'branding-design',
                input: dto,
                output: { brandIdentity: brandIdentity.content, logoUrls },
                modelUsed: 'gpt-4o + fal-ai/flux/dev',
                completedAt: new Date(),
            },
        });
        return {
            jobId: job.id,
            brandIdentity: brandIdentity.content,
            logoUrls,
        };
    }
    async generateMarketingFlyer(dto, userId) {
        const prompt = `Professional marketing flyer for Nigerian business.
Business: ${dto.businessName}
Offer: ${dto.offerText}
Call to Action: ${dto.callToAction}
Contact: ${dto.contact ?? 'WhatsApp: +234...'}
Style: ${dto.style ?? 'vibrant, Nigerian market, professional'}
Colors: ${dto.colors ?? 'green and white (Nigerian flag inspired)'}
Include Nigerian cultural elements if appropriate.
Square format, bold text, eye-catching design optimised for WhatsApp sharing.`;
        const imageUrls = await this.generateImagesWithFal({
            prompt,
            numImages: 2,
            imageSize: '1024x1024',
            model: 'fal-ai/flux/dev',
        });
        return { imageUrls };
    }
    async generateColorPalette(dto) {
        const response = await this.aiService.generateJson('You are a color theory expert. Generate brand color palettes. Return ONLY valid JSON.', `Generate 3 color palette options for: ${dto.industry} business targeting ${dto.targetAudience}.
Mood desired: ${dto.mood ?? 'professional and trustworthy'}.
Include Nigerian/African aesthetic sensibility where relevant.`, {
            model: 'gpt-4o',
            maxTokens: 1000,
        });
        return response.content;
    }
    async listUserJobs(userId) {
        return this.prisma.planAIJob.findMany({
            where: { userId, type: client_1.PlanAIJobType.BRANDING_PACKAGE },
            select: { id: true, status: true, output: true, createdAt: true },
            orderBy: { createdAt: 'desc' },
            take: 20,
        });
    }
    async generateImagesWithFal(params) {
        const response = await fetch(`https://fal.run/${params.model}`, {
            method: 'POST',
            headers: {
                Authorization: `Key ${this.falApiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: params.prompt,
                num_images: params.numImages,
                image_size: params.imageSize,
                enable_safety_checker: true,
                output_format: 'jpeg',
            }),
        });
        if (!response.ok) {
            const error = await response.text();
            throw new Error(`fal.ai error: ${response.status} — ${error}`);
        }
        const data = await response.json();
        return data.images.map((img) => img.url);
    }
    buildLogoPrompt(dto) {
        const styleMap = {
            modern: 'modern minimalist flat design',
            traditional: 'classic traditional professional',
            playful: 'fun vibrant playful colorful',
            luxury: 'luxury premium elegant sophisticated',
        };
        return `${dto.businessName} company logo, ${styleMap[dto.style] ?? 'modern professional'}, 
${dto.industry} industry, ${dto.colors?.join(' and ') ?? 'blue and white'} colors, 
vector style, white background, no text except business name, 
clean professional Nigerian business logo design`;
    }
};
exports.BrandingService = BrandingService;
exports.BrandingService = BrandingService = BrandingService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        ai_service_1.AiService,
        config_1.ConfigService])
], BrandingService);
//# sourceMappingURL=branding.service.js.map