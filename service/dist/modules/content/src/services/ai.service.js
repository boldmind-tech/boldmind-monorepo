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
var ContentAiService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentAiService = void 0;
const common_1 = require("@nestjs/common");
const ai_service_1 = require("../../../ai/ai.service");
const bullmq_1 = require("@nestjs/bullmq");
const bullmq_2 = require("bullmq");
let ContentAiService = ContentAiService_1 = class ContentAiService {
    constructor(aiService, contentQueue) {
        this.aiService = aiService;
        this.contentQueue = contentQueue;
        this.logger = new common_1.Logger(ContentAiService_1.name);
    }
    async generateArticle(options) {
        const { topic, style = 'amebo', language = 'pidgin', model = 'gemini', userId } = options;
        if (!topic?.trim()) {
            throw new common_1.BadRequestException('Topic is required for article generation');
        }
        this.logger.log(`Generating ${style} article | lang:${language} | model:${model} | user:${userId ?? 'anon'}`);
        let result;
        try {
            result = await this.aiService.generateArticle({
                topic,
                style,
                language,
                model,
            });
        }
        catch (err) {
            this.logger.error(`Article generation failed for topic "${topic}"`, err);
            throw new common_1.ServiceUnavailableException('AI article generation is temporarily unavailable. Please try again in a moment.');
        }
        if (!result?.title || !result?.content) {
            this.logger.error(`AI returned incomplete article for topic "${topic}"`, result);
            throw new common_1.BadRequestException('AI returned an incomplete article. Please try with a more specific topic.');
        }
        if (!result.excerpt) {
            result.excerpt = this.truncateToExcerpt(result.content);
        }
        if (userId) {
            await this.queuePostGenerationJobs(topic, result, userId).catch((err) => this.logger.warn(`Post-generation queue failed (non-fatal): ${String(err)}`));
        }
        return result;
    }
    async suggestTopics(params) {
        const { category, language = 'english', count = 5 } = params;
        const result = await this.aiService.structuredChat(`You are an AmeboGist editorial assistant. Suggest trending article topics for Nigerian creators.`, `Generate ${count} trending article topic ideas for the "${category}" category.
       Language preference: ${language}.
       Context: Nigerian tech/business/entertainment audience.
       Return JSON: { "topics": ["topic1", "topic2", ...] }`, {
            task: 'creative',
            temperature: 0.8,
            cacheTtl: 1800,
        });
        return result?.topics ?? [];
    }
    async generateSeoMetadata(params) {
        return this.aiService.structuredChat(`You are an SEO expert for AmeboGist, a Nigerian news and tech platform.
       Optimise for Nigerian search intent on Google.ng.`, `Generate SEO metadata for this article:
       Title: ${params.title}
       Excerpt: ${params.excerpt}
       Category: ${params.category}
       
       Return JSON: { "seoTitle": "max 60 chars", "seoDescription": "max 160 chars", "tags": ["5-8 tags"] }`, {
            task: 'json-extraction',
            temperature: 0.3,
            cacheTtl: 86400,
        });
    }
    async moderateContent(text) {
        return this.aiService.moderateContent(text);
    }
    truncateToExcerpt(content) {
        const plain = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
        return plain.length > 157 ? plain.slice(0, 157) + '...' : plain;
    }
    async queuePostGenerationJobs(topic, article, userId) {
        await Promise.all([
            this.contentQueue.add('generate-seo-for-ai-article', { title: article.title, excerpt: article.excerpt, userId }, { delay: 3000, attempts: 2 }),
            this.contentQueue.add('moderate-content', { content: article.content, userId, topic }, { delay: 1000, attempts: 3 }),
        ]);
    }
};
exports.ContentAiService = ContentAiService;
exports.ContentAiService = ContentAiService = ContentAiService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, bullmq_1.InjectQueue)('content')),
    __metadata("design:paramtypes", [ai_service_1.AiService,
        bullmq_2.Queue])
], ContentAiService);
//# sourceMappingURL=ai.service.js.map