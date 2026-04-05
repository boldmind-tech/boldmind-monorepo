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
var CloudflareAiProvider_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareAiProvider = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let CloudflareAiProvider = CloudflareAiProvider_1 = class CloudflareAiProvider {
    constructor(config) {
        this.config = config;
        this.logger = new common_1.Logger(CloudflareAiProvider_1.name);
        this.cfAccountId = this.config.get('CLOUDFLARE_ACCOUNT_ID') ?? '';
        this.cfApiToken = this.config.get('CLOUDFLARE_API_TOKEN') ?? '';
        this.cfIsAvailable = !!(this.cfAccountId && this.cfApiToken);
        this.falApiKey = this.config.get('FAL_API_KEY') ?? '';
        this.falIsAvailable = !!this.falApiKey;
        if (this.cfIsAvailable) {
            this.logger.log('✅ Cloudflare Workers AI initialized (FREE 10k neurons/day)');
        }
        if (this.falIsAvailable) {
            this.logger.log('✅ fal.ai initialized (FLUX.1 Pro for logos)');
        }
    }
    get cfAvailable() { return this.cfIsAvailable; }
    get falAvailable() { return this.falIsAvailable; }
    async generateImageCF(prompt, options = {}) {
        const { width = 1024, height = 1024, steps = 4, seed, } = options;
        const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${this.cfAccountId}/ai/run/@cf/black-forest-labs/flux-1-schnell`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.cfApiToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt,
                width,
                height,
                num_steps: steps,
                ...(seed ? { seed } : {}),
            }),
        });
        if (!response.ok) {
            const err = await response.text();
            throw new Error(`Cloudflare AI image error: ${err}`);
        }
        const buffer = await response.arrayBuffer();
        return Buffer.from(buffer);
    }
    async generateImageSDXL(prompt, options = {}) {
        const { width = 1024, height = 1024, steps = 20, negativePrompt, seed } = options;
        const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${this.cfAccountId}/ai/run/@cf/stabilityai/stable-diffusion-xl-base-1.0`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.cfApiToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt,
                negative_prompt: negativePrompt,
                width,
                height,
                num_inference_steps: steps,
                ...(seed ? { seed } : {}),
            }),
        });
        if (!response.ok)
            throw new Error(`CF SDXL error: ${await response.text()}`);
        return Buffer.from(await response.arrayBuffer());
    }
    async generateImageFal(prompt, model = 'fal-ai/flux-pro', options = {}) {
        const { imageSize = 'square_hd', numSteps = 25, guidanceScale = 3.5, seed, numImages = 1, } = options;
        const response = await fetch(`https://fal.run/${model}`, {
            method: 'POST',
            headers: {
                Authorization: `Key ${this.falApiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt,
                image_size: imageSize,
                num_inference_steps: numSteps,
                guidance_scale: guidanceScale,
                num_images: numImages,
                enable_safety_checker: true,
                ...(seed ? { seed } : {}),
            }),
        });
        if (!response.ok)
            throw new Error(`fal.ai error: ${await response.text()}`);
        const data = (await response.json());
        return data.images.map((img) => img.url);
    }
    async generateWhatsAppFlyer(params) {
        const { businessName, offer, price, style = 'modern' } = params;
        const styleGuide = {
            modern: 'clean minimalist design, green and white color scheme, modern sans-serif fonts',
            traditional: 'vibrant Ankara-inspired patterns, Nigerian cultural elements, warm earthy tones',
            luxury: 'premium gold and black luxury aesthetic, elegant typography, sophisticated',
            playful: 'bright colorful Nigeria flag-inspired palette, bold energetic typography',
        };
        const prompt = `Professional business flyer for Nigerian market. Business: "${businessName}". 
Offer: "${offer}". ${price ? `Price: ${price}` : ''}. 
Design style: ${styleGuide[style]}. 
Portrait format 9:16, clean layout, space for text overlay, WhatsApp share-ready.
High quality commercial photography style.`;
        return this.generateImageCF(prompt, { width: 1080, height: 1920, steps: 4 });
    }
    async transcribeAudio(audioBuffer) {
        const base64Audio = audioBuffer.toString('base64');
        const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${this.cfAccountId}/ai/run/@cf/openai/whisper`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.cfApiToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ audio: base64Audio }),
        });
        if (!response.ok)
            throw new Error(`CF Whisper error: ${await response.text()}`);
        const data = (await response.json());
        return data.result.text;
    }
    async chatCF(systemPrompt, userMessage) {
        const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${this.cfAccountId}/ai/run/@cf/meta/llama-3.3-70b-instruct-fp8-fast`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.cfApiToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userMessage },
                ],
                max_tokens: 1024,
            }),
        });
        if (!response.ok)
            throw new Error(`CF chat error: ${await response.text()}`);
        const data = (await response.json());
        return data.result.response;
    }
};
exports.CloudflareAiProvider = CloudflareAiProvider;
exports.CloudflareAiProvider = CloudflareAiProvider = CloudflareAiProvider_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], CloudflareAiProvider);
//# sourceMappingURL=cloudflare.provider.js.map