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
var OpenAIProvider_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAIProvider = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const openai_1 = require("openai");
const COST_PER_1M = {
    'gpt-4o': [5.00, 15.00],
    'gpt-4o-mini': [0.15, 0.60],
    'gpt-3.5-turbo': [0.50, 1.50],
    'o1-mini': [3.00, 12.00],
};
let OpenAIProvider = OpenAIProvider_1 = class OpenAIProvider {
    constructor(config) {
        this.config = config;
        this.logger = new common_1.Logger(OpenAIProvider_1.name);
        this.totalSpendUsd = 0;
        const apiKey = this.config.get('OPENAI_API_KEY');
        this.isAvailable = !!apiKey;
        if (this.isAvailable) {
            this.client = new openai_1.default({ apiKey });
            this.logger.log('✅ OpenAI provider initialized');
        }
        else {
            this.logger.warn('⚠️  OPENAI_API_KEY not set — OpenAI provider unavailable');
        }
    }
    get available() {
        return this.isAvailable;
    }
    get estimatedTotalSpend() {
        return this.totalSpendUsd;
    }
    async chat(systemPrompt, userMessage, options = {}) {
        const { model = 'gpt-4o-mini', temperature = 0.7, maxTokens = 2048, jsonMode = false, } = options;
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
        });
        const usage = completion.usage;
        const costPer1M = COST_PER_1M[model] ?? [1, 1];
        const estimatedCostUsd = ((usage?.prompt_tokens ?? 0) * costPer1M[0] +
            (usage?.completion_tokens ?? 0) * costPer1M[1]) /
            1_000_000;
        this.totalSpendUsd += estimatedCostUsd;
        if (estimatedCostUsd > 0.01) {
            this.logger.debug(`OpenAI cost: $${estimatedCostUsd.toFixed(4)} (${model})`);
        }
        return {
            content: completion.choices[0]?.message?.content ?? '',
            model,
            promptTokens: usage?.prompt_tokens ?? 0,
            completionTokens: usage?.completion_tokens ?? 0,
            totalTokens: usage?.total_tokens ?? 0,
            latencyMs: Date.now() - start,
            estimatedCostUsd,
        };
    }
    async transcribeAudio(audioFile) {
        let file;
        if (audioFile instanceof File) {
            file = audioFile;
        }
        else {
            file = new File([audioFile], 'audio.mp3', { type: 'audio/mpeg' });
        }
        const transcription = await this.client.audio.transcriptions.create({
            file,
            model: 'whisper-1',
        });
        return transcription.text;
    }
    async textToSpeech(text, voice = 'nova') {
        const mp3 = await this.client.audio.speech.create({
            model: 'tts-1',
            voice,
            input: text,
        });
        return Buffer.from(await mp3.arrayBuffer());
    }
    async generateImage(prompt, size = '1024x1024') {
        const response = await this.client.images.generate({
            model: 'dall-e-3',
            prompt,
            n: 1,
            size,
            quality: 'standard',
        });
        const url = response.data?.[0]?.url;
        if (!url)
            throw new Error('DALL-E failed to generate image');
        return url;
    }
    async embed(text) {
        const response = await this.client.embeddings.create({
            model: 'text-embedding-3-small',
            input: text,
        });
        return response.data[0].embedding;
    }
};
exports.OpenAIProvider = OpenAIProvider;
exports.OpenAIProvider = OpenAIProvider = OpenAIProvider_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], OpenAIProvider);
//# sourceMappingURL=openai.provider.js.map