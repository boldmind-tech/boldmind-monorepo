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
var GeminiProvider_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiProvider = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const generative_ai_1 = require("@google/generative-ai");
const SAFETY_SETTINGS = [
    { category: generative_ai_1.HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: generative_ai_1.HarmBlockThreshold.BLOCK_ONLY_HIGH },
    { category: generative_ai_1.HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: generative_ai_1.HarmBlockThreshold.BLOCK_ONLY_HIGH },
    { category: generative_ai_1.HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: generative_ai_1.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: generative_ai_1.HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: generative_ai_1.HarmBlockThreshold.BLOCK_ONLY_HIGH },
];
let GeminiProvider = GeminiProvider_1 = class GeminiProvider {
    constructor(config) {
        this.config = config;
        this.logger = new common_1.Logger(GeminiProvider_1.name);
        const apiKey = this.config.get('GEMINI_API_KEY');
        this.isAvailable = !!apiKey;
        if (this.isAvailable) {
            this.client = new generative_ai_1.GoogleGenerativeAI(apiKey);
            this.logger.log('✅ Gemini provider initialized (FREE tier — 1M ctx, 15 RPM)');
        }
        else {
            this.logger.warn('⚠️  GEMINI_API_KEY not set — Gemini provider unavailable');
        }
    }
    get available() {
        return this.isAvailable;
    }
    async chat(systemPrompt, userMessage, options = {}) {
        const { model = 'gemini-2.5-flash', temperature = 0.7, maxTokens = 2048, jsonMode = false, useGoogleSearch = false, } = options;
        const start = Date.now();
        const generationConfig = {
            temperature,
            maxOutputTokens: maxTokens,
            ...(jsonMode ? { responseMimeType: 'application/json' } : {}),
        };
        console.log(`🔍 Gemini: Preparing model [${model}]...`);
        const geminiModel = this.client.getGenerativeModel({
            model,
            systemInstruction: systemPrompt,
            generationConfig,
            safetySettings: SAFETY_SETTINGS,
            ...(useGoogleSearch
                ? {
                    tools: [
                        { googleSearchRetrieval: {} },
                    ],
                }
                : {}),
        });
        console.log(`✅ Gemini: Model [${model}] initialized.`);
        console.log(`🤖 Gemini [${model}] calling generateContent... (System length: ${systemPrompt.length}, User length: ${userMessage.length})`);
        const result = await geminiModel.generateContent(userMessage);
        console.log(`✅ Gemini [${model}] response received.`);
        const response = result.response;
        const text = response.text();
        return {
            content: text,
            model,
            promptTokens: response.usageMetadata?.promptTokenCount ?? 0,
            completionTokens: response.usageMetadata?.candidatesTokenCount ?? 0,
            totalTokens: response.usageMetadata?.totalTokenCount ?? 0,
            latencyMs: Date.now() - start,
            groundingMetadata: response.candidates?.[0]?.groundingMetadata,
        };
    }
    async startChatSession(systemPrompt, model = 'gemini-2.5-flash') {
        const geminiModel = this.client.getGenerativeModel({
            model,
            systemInstruction: systemPrompt,
            safetySettings: SAFETY_SETTINGS,
        });
        return geminiModel.startChat({ history: [] });
    }
    async analyzeImage(imageBase64, mimeType, prompt, systemPrompt) {
        const start = Date.now();
        const model = this.client.getGenerativeModel({
            model: 'gemini-2.0-flash',
            ...(systemPrompt ? { systemInstruction: systemPrompt } : {}),
            safetySettings: SAFETY_SETTINGS,
        });
        const result = await model.generateContent([
            { inlineData: { data: imageBase64, mimeType } },
            prompt,
        ]);
        const response = result.response;
        return {
            content: response.text(),
            model: 'gemini-2.0-flash',
            promptTokens: response.usageMetadata?.promptTokenCount ?? 0,
            completionTokens: response.usageMetadata?.candidatesTokenCount ?? 0,
            totalTokens: response.usageMetadata?.totalTokenCount ?? 0,
            latencyMs: Date.now() - start,
        };
    }
    async searchAndSummarize(query, systemContext) {
        return this.chat(systemContext ?? 'You are a research assistant. Provide accurate, current information.', query, { model: 'gemini-2.0-flash', useGoogleSearch: true, temperature: 0.3 });
    }
    async embed(text) {
        const model = this.client.getGenerativeModel({ model: 'text-embedding-004' });
        const result = await model.embedContent(text);
        return result.embedding.values;
    }
    async embedBatch(texts) {
        const model = this.client.getGenerativeModel({ model: 'text-embedding-004' });
        const results = await Promise.all(texts.map((t) => model.embedContent(t)));
        return results.map((r) => r.embedding.values);
    }
};
exports.GeminiProvider = GeminiProvider;
exports.GeminiProvider = GeminiProvider = GeminiProvider_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], GeminiProvider);
//# sourceMappingURL=gemini.provider.js.map