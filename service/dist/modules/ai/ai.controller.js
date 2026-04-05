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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiAdminController = void 0;
const common_1 = require("@nestjs/common");
const ai_service_1 = require("./ai.service");
const trend_service_1 = require("./services/trend.service");
const groq_provider_1 = require("./providers/groq.provider");
const gemini_provider_1 = require("./providers/gemini.provider");
const openai_provider_1 = require("./providers/openai.provider");
const cloudflare_provider_1 = require("./providers/cloudflare.provider");
const ollama_provider_1 = require("./providers/ollama.provider");
let AiAdminController = class AiAdminController {
    constructor(ai, trends, groq, gemini, openai, cf, ollama) {
        this.ai = ai;
        this.trends = trends;
        this.groq = groq;
        this.gemini = gemini;
        this.openai = openai;
        this.cf = cf;
        this.ollama = ollama;
    }
    async getStatus() {
        const ollamaModels = this.ollama.available
            ? await this.ollama.listModels().catch(() => [])
            : [];
        return {
            providers: {
                groq: { available: this.groq.available, freeQuota: '6,000 RPM / 500k tokens per day' },
                gemini: { available: this.gemini.available, freeQuota: '15 RPM / 1M tokens per day (Flash)' },
                openai: { available: this.openai.available, estimatedSpendUsd: this.openai.estimatedTotalSpend },
                cloudflare: { available: this.cf.cfAvailable, freeQuota: '10,000 neurons/day' },
                falAi: { available: this.cf.falAvailable },
                ollama: { available: this.ollama.available, models: ollamaModels },
            },
            recommendation: this.getProviderRecommendation(),
        };
    }
    getTrends() {
        return this.trends.getTrendingForBoldMind();
    }
    getTechTrends() {
        return this.trends.getTrendingTechUpdates();
    }
    getAiTrends() {
        return this.trends.getAiTrends();
    }
    getContentIdeas() {
        return this.trends.generateContentIdeas(10);
    }
    async testProvider(body) {
        const result = await this.ai.chat('You are a test assistant.', body.prompt, { forceProvider: body.provider, cacheTtl: 0 });
        return result;
    }
    async generateTestImage(body) {
        const result = await this.ai.generateSocialImage(body.prompt, body.format ?? 'square');
        return {
            provider: result.provider,
            hasBuffer: !!result.data,
            url: result.url,
        };
    }
    getProviderRecommendation() {
        const available = [
            this.groq.available && 'Groq (fast, free)',
            this.gemini.available && 'Gemini (language quality, free)',
            this.cf.cfAvailable && 'CF Workers AI (images, free)',
            this.openai.available && 'OpenAI (paid fallback)',
        ].filter(Boolean);
        if (available.length === 0)
            return '⚠️ No AI providers configured. Set at least GROQ_API_KEY or GEMINI_API_KEY.';
        if (!this.groq.available)
            return '💡 Add GROQ_API_KEY for faster, free inference';
        if (!this.gemini.available)
            return '💡 Add GEMINI_API_KEY for better Nigerian language support';
        return `✅ Running optimally with: ${available.join(', ')}`;
    }
};
exports.AiAdminController = AiAdminController;
__decorate([
    (0, common_1.Get)('status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AiAdminController.prototype, "getStatus", null);
__decorate([
    (0, common_1.Get)('trends'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AiAdminController.prototype, "getTrends", null);
__decorate([
    (0, common_1.Get)('trends/tech'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AiAdminController.prototype, "getTechTrends", null);
__decorate([
    (0, common_1.Get)('trends/ai'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AiAdminController.prototype, "getAiTrends", null);
__decorate([
    (0, common_1.Get)('content-ideas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AiAdminController.prototype, "getContentIdeas", null);
__decorate([
    (0, common_1.Post)('test'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiAdminController.prototype, "testProvider", null);
__decorate([
    (0, common_1.Post)('image/generate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiAdminController.prototype, "generateTestImage", null);
exports.AiAdminController = AiAdminController = __decorate([
    (0, common_1.Controller)('admin/ai'),
    __metadata("design:paramtypes", [ai_service_1.AiService,
        trend_service_1.TrendService,
        groq_provider_1.GroqProvider,
        gemini_provider_1.GeminiProvider,
        openai_provider_1.OpenAIProvider,
        cloudflare_provider_1.CloudflareAiProvider,
        ollama_provider_1.OllamaProvider])
], AiAdminController);
//# sourceMappingURL=ai.controller.js.map