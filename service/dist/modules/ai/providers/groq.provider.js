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
var GroqProvider_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroqProvider = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const groq_sdk_1 = require("groq-sdk");
let GroqProvider = GroqProvider_1 = class GroqProvider {
    constructor(config) {
        this.config = config;
        this.logger = new common_1.Logger(GroqProvider_1.name);
        const apiKey = this.config.get('GROQ_API_KEY');
        this.isAvailable = !!apiKey;
        if (this.isAvailable) {
            this.client = new groq_sdk_1.default({ apiKey });
            this.logger.log('✅ Groq provider initialized (FREE tier — 6k RPM)');
        }
        else {
            this.logger.warn('⚠️  GROQ_API_KEY not set — Groq provider unavailable');
        }
    }
    get available() {
        return this.isAvailable;
    }
    async chat(systemPrompt, userMessage, options = {}) {
        const { model = 'llama-3.3-70b-versatile', temperature = 0.7, maxTokens = 2048, jsonMode = false, stopSequences, } = options;
        const start = Date.now();
        const completion = await this.client.chat.completions.create({
            model,
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userMessage },
            ],
            temperature,
            max_tokens: maxTokens,
            ...(jsonMode ? { response_format: { type: 'json_object' } } : {}),
            ...(stopSequences ? { stop: stopSequences } : {}),
        });
        const choice = completion.choices[0];
        return {
            content: choice?.message?.content ?? '',
            model: completion.model,
            promptTokens: completion.usage?.prompt_tokens ?? 0,
            completionTokens: completion.usage?.completion_tokens ?? 0,
            totalTokens: completion.usage?.total_tokens ?? 0,
            latencyMs: Date.now() - start,
        };
    }
    async converse(messages, options = {}) {
        const { model = 'llama-3.1-8b-instant', temperature = 0.8, maxTokens = 1024, jsonMode = false, } = options;
        const start = Date.now();
        const completion = await this.client.chat.completions.create({
            model,
            messages,
            temperature,
            max_tokens: maxTokens,
            ...(jsonMode ? { response_format: { type: 'json_object' } } : {}),
        });
        const choice = completion.choices[0];
        return {
            content: choice?.message?.content ?? '',
            model: completion.model,
            promptTokens: completion.usage?.prompt_tokens ?? 0,
            completionTokens: completion.usage?.completion_tokens ?? 0,
            totalTokens: completion.usage?.total_tokens ?? 0,
            latencyMs: Date.now() - start,
        };
    }
    async moderateContent(content) {
        try {
            const result = await this.client.chat.completions.create({
                model: 'llama-guard-3-8b',
                messages: [{ role: 'user', content }],
                max_tokens: 50,
            });
            const response = result.choices[0]?.message?.content?.toLowerCase() ?? '';
            const safe = response.startsWith('safe');
            const category = safe ? undefined : response.split('\n')[1]?.trim();
            return { safe, category };
        }
        catch {
            return { safe: true };
        }
    }
    async *stream(systemPrompt, userMessage, options = {}) {
        const { model = 'llama-3.1-8b-instant', temperature = 0.7, maxTokens = 1024 } = options;
        const stream = await this.client.chat.completions.create({
            model,
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userMessage },
            ],
            temperature,
            max_tokens: maxTokens,
            stream: true,
        });
        for await (const chunk of stream) {
            const delta = chunk.choices[0]?.delta?.content;
            if (delta)
                yield delta;
        }
    }
};
exports.GroqProvider = GroqProvider;
exports.GroqProvider = GroqProvider = GroqProvider_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], GroqProvider);
//# sourceMappingURL=groq.provider.js.map