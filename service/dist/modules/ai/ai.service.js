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
var AiService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiService = void 0;
exports.generateText = generateText;
exports.generateGeminiText = generateGeminiText;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const crypto = require("crypto");
const groq_provider_1 = require("./providers/groq.provider");
const gemini_provider_1 = require("./providers/gemini.provider");
const openai_provider_1 = require("./providers/openai.provider");
const cloudflare_provider_1 = require("./providers/cloudflare.provider");
const ollama_provider_1 = require("./providers/ollama.provider");
const redis_service_1 = require("../../database/redis.service");
const LANGUAGE_INSTRUCTIONS = {
    pidgin: `Write in Nigerian Pidgin English. Use authentic Lagos/Nigerian Pidgin phrases. 
           Mix in occasional Yoruba/Igbo greetings naturally. Be warm, energetic, and street-smart.
           Examples of tone: "E don do!", "No worry", "See finish", "Hustle hard my guy"`,
    yoruba: `Write in Yoruba language. Use proper Yoruba orthography including tone marks where needed.
           Be respectful and use appropriate Yoruba honorifics.`,
    igbo: `Write in standard Igbo. Use common Central Igbo dialect as widely understood.
         Be warm and community-oriented in tone.`,
    hausa: `Write in standard Hausa. Be respectful and use appropriate honorifics.
          Consider northern Nigerian business and cultural context.`,
    english: `Write in clear, professional Nigerian English. 
            Reference Nigerian context, examples, and currency (Naira) where relevant.`,
};
let AiService = AiService_1 = class AiService {
    constructor(groq, gemini, openai, cloudflare, ollama, redis, config) {
        this.groq = groq;
        this.gemini = gemini;
        this.openai = openai;
        this.cloudflare = cloudflare;
        this.ollama = ollama;
        this.redis = redis;
        this.config = config;
        this.logger = new common_1.Logger(AiService_1.name);
        this.CACHE_TTL_DEFAULT = 3600;
        this.logger.log('🧠 BoldMind AI Gateway initialized');
        this.logAvailableProviders();
    }
    async chat(systemPrompt, userMessage, options = {}) {
        const { task = 'fast-chat', cacheTtl = this.CACHE_TTL_DEFAULT, forceProvider } = options;
        if (cacheTtl > 0) {
            const cacheKey = this.buildCacheKey(systemPrompt, userMessage, options);
            const cached = await this.redis.get(cacheKey);
            if (cached) {
                return { ...JSON.parse(cached), cached: true };
            }
        }
        const result = forceProvider
            ? await this.callSpecificProvider(forceProvider, systemPrompt, userMessage, options)
            : await this.routeByTask(task, systemPrompt, userMessage, options);
        if (cacheTtl > 0 && result.content) {
            const cacheKey = this.buildCacheKey(systemPrompt, userMessage, options);
            await this.redis.setex(cacheKey, cacheTtl, JSON.stringify({ ...result, cached: false }));
        }
        return { ...result, cached: false };
    }
    async generateJson(systemPrompt, userMessage, options = {}) {
        const result = await this.chat(systemPrompt, userMessage, {
            ...options,
            task: options.task ?? 'json-extraction',
            jsonMode: true,
        });
        try {
            const cleaned = result.content
                .replace(/^```(?:json)?\n?/m, '')
                .replace(/\n?```$/m, '')
                .trim();
            return { content: JSON.parse(cleaned), provider: result.provider, model: result.model, tokens: result.tokens };
        }
        catch {
            const retryResult = await this.chat(systemPrompt + '\n\nCRITICAL: Your response MUST be valid JSON only. No markdown, no explanations.', userMessage, { ...options, jsonMode: true, cacheTtl: 0 });
            const cleaned = retryResult.content
                .replace(/^```(?:json)?\n?/m, '')
                .replace(/\n?```$/m, '')
                .trim();
            return { content: JSON.parse(cleaned), provider: retryResult.provider, model: retryResult.model, tokens: retryResult.tokens };
        }
    }
    async structuredChat(systemPrompt, userMessage, options = {}) {
        const result = await this.generateJson(systemPrompt, userMessage, options);
        return result.content;
    }
    async generateNigerianContent(task, language, basePrompt, options = {}) {
        const languageInstruction = LANGUAGE_INSTRUCTIONS[language] ?? LANGUAGE_INSTRUCTIONS.english;
        const systemPrompt = `${task}\n\nLANGUAGE INSTRUCTIONS:\n${languageInstruction}`;
        return this.chat(systemPrompt, basePrompt, {
            task: 'nigerian-language',
            ...options,
            forceProvider: options.forceProvider ?? 'gemini',
        });
    }
    async generateBusinessContent(systemPrompt, userMessage, options = {}) {
        const nigeriaBizContext = `
IMPORTANT NIGERIAN MARKET CONTEXT:
- All monetary values in Naira (₦) and Kobo, not USD
- Reference Nigerian regulatory bodies: CAC (Corporate Affairs Commission), FIRS (tax), CBN (banking)
- Use SMEDAN, NITDA, NCC as relevant government bodies
- Payment: Paystack, Flutterwave, bank transfers (not Stripe, PayPal)
- Infrastructure context: NEPA/PHCN power issues, generator costs, internet data costs
- E-commerce: Jumia, Konga competitor landscape
- Popular platforms: WhatsApp Business, Instagram, TikTok for marketing
- Nigerian Startup Act 2022 for regulatory guidance
- Bank of Industry (BOI) loans, NIRSAL for agriculture finance`;
        return this.chat(systemPrompt + nigeriaBizContext, userMessage, {
            task: 'reasoning',
            ...options,
        });
    }
    async *streamChat(systemPrompt, userMessage, options = {}) {
        if (this.groq.available) {
            yield* this.groq.stream(systemPrompt, userMessage, {
                model: 'llama-3.1-8b-instant',
                temperature: options.temperature ?? 0.7,
                maxTokens: options.maxTokens ?? 512,
            });
        }
        else if (this.gemini.available) {
            const model = this.gemini['client']
                .getGenerativeModel({ model: 'gemini-2.0-flash' });
            const chat = model.startChat();
            const result = await chat.sendMessageStream(userMessage);
            for await (const chunk of result.stream) {
                yield chunk.text();
            }
        }
    }
    async generateSocialImage(prompt, format = 'square') {
        const dimensions = {
            square: { width: 1080, height: 1080 },
            portrait: { width: 1080, height: 1350 },
            landscape: { width: 1200, height: 630 },
            'whatsapp-flyer': { width: 1080, height: 1920 },
        }[format];
        try {
            if (this.cloudflare.cfAvailable) {
                const buffer = await this.cloudflare.generateImageCF(prompt, { ...dimensions, steps: 4 });
                return { data: buffer, url: null, provider: 'cloudflare-flux-schnell' };
            }
        }
        catch (err) {
            this.logger.warn(`CF image failed, trying fal.ai: ${String(err)}`);
        }
        try {
            if (this.cloudflare.falAvailable) {
                const sizeMap = {
                    square: 'square_hd',
                    portrait: 'portrait_4_3',
                    landscape: 'landscape_16_9',
                    'whatsapp-flyer': 'portrait_16_9',
                };
                const urls = await this.cloudflare.generateImageFal(prompt, 'fal-ai/flux/schnell', {
                    imageSize: sizeMap[format],
                });
                return { data: null, url: urls[0] ?? null, provider: 'fal-flux-schnell' };
            }
        }
        catch (err) {
            this.logger.warn(`fal.ai failed: ${String(err)}`);
        }
        if (this.openai.available) {
            const url = await this.openai.generateImage(prompt);
            return { data: null, url, provider: 'openai-dalle3' };
        }
        throw new Error('No image generation provider available');
    }
    async generateLogo(params) {
        const { brandName, industry, style, colors, additionalDetails } = params;
        const colorStr = colors.join(', ');
        const prompt = `Professional logo design for "${brandName}", a Nigerian ${industry} brand.
Style: ${style}. Color palette: ${colorStr}.
${additionalDetails ? `Additional details: ${additionalDetails}` : ''}
Clean vector-style logo, minimal, scalable, professional. White background.
High quality commercial logo design.`;
        try {
            if (this.cloudflare.falAvailable) {
                const urls = await this.cloudflare.generateImageFal(prompt, 'fal-ai/flux-pro', {
                    imageSize: 'square_hd',
                    numSteps: 25,
                });
                return { data: null, url: urls[0] ?? null, provider: 'fal-flux-pro' };
            }
        }
        catch (err) {
            this.logger.warn(`fal.ai logo gen failed: ${String(err)}`);
        }
        if (this.cloudflare.cfAvailable) {
            const buffer = await this.cloudflare.generateImageSDXL(prompt, { width: 1024, height: 1024, steps: 30 });
            return { data: buffer, url: null, provider: 'cloudflare-sdxl' };
        }
        if (this.openai.available) {
            const url = await this.openai.generateImage(prompt, '1024x1024');
            return { data: null, url, provider: 'openai-dalle3' };
        }
        throw new Error('No logo generation provider available');
    }
    async embed(text) {
        if (this.gemini.available) {
            return this.gemini.embed(text);
        }
        if (this.openai.available) {
            return this.openai.embed(text);
        }
        throw new Error('No embedding provider available');
    }
    async embedBatch(texts) {
        if (this.gemini.available) {
            return this.gemini.embedBatch(texts);
        }
        return Promise.all(texts.map((t) => this.openai.embed(t)));
    }
    async transcribeAudio(audioBuffer) {
        if (this.cloudflare.cfAvailable) {
            try {
                return await this.cloudflare.transcribeAudio(audioBuffer);
            }
            catch (err) {
                this.logger.warn(`CF Whisper failed: ${String(err)}`);
            }
        }
        if (this.openai.available) {
            return this.openai.transcribeAudio(audioBuffer);
        }
        throw new Error('No audio transcription provider available');
    }
    async textToSpeech(text, voice = 'nova') {
        if (this.openai.available) {
            return this.openai.textToSpeech(text, voice);
        }
        throw new Error('TTS requires OpenAI API key');
    }
    async moderateContent(content) {
        if (this.groq.available) {
            return this.groq.moderateContent(content);
        }
        const harmful = ['spam', 'scam', 'fraud', 'porn', 'hack'].some((w) => content.toLowerCase().includes(w));
        return { safe: !harmful };
    }
    async analyzeSentiment(text) {
        const systemPrompt = `Analyze the sentiment of the following text. Respond with EXACTLY ONE WORD: "positive", "neutral", or "negative".`;
        try {
            const result = await this.chat(systemPrompt, text, {
                task: 'fast-chat',
                temperature: 0,
                maxTokens: 10,
                cacheTtl: 86400,
            });
            const sentiment = result.content.trim().toLowerCase();
            if (sentiment.includes('positive'))
                return 'positive';
            if (sentiment.includes('negative'))
                return 'negative';
            return 'neutral';
        }
        catch (error) {
            this.logger.warn(`Sentiment analysis failed: ${String(error)}`);
            return 'neutral';
        }
    }
    async generateArticle(options) {
        const { topic, style = 'amebo', language = 'pidgin', model = 'gemini' } = options;
        const systemPrompt = `You are an expert Nigerian journalist for AmeboGist, a platform focused on AI, Tech, and Creator entrepreneurship in Nigeria.
Your style is highly engaging, authoritative yet conversational.
When writing in Pidgin, be authentic and use modern urban Lagos slang where appropriate.
Focus on providing value to Nigerian entrepreneurs and tech enthusiasts.
${LANGUAGE_INSTRUCTIONS[language]}`;
        const styleGuide = {
            news: 'factual, balanced, journalistic, inverted pyramid structure',
            amebo: 'gossipy but professional, insider scoop feel, "you heard it here first" energy',
            startup: 'founder-focused, lessons-learned angle, Nigerian ecosystem perspective',
            'tech-update': 'technical but accessible, "what this means for Naija tech" angle',
        };
        const userMessage = `Write a ${styleGuide[style]} article about: ${topic}.

The article MUST be in ${language}.
Format as JSON with: { title, excerpt (max 160 chars), content (full HTML with h2/p/ul tags), tags (array of 5 strings), seoTitle (max 60 chars), seoDescription (max 160 chars) }`;
        const providerMap = {
            groq: 'groq', gemini: 'gemini', openai: 'openai',
        };
        const result = await this.generateJson(systemPrompt, userMessage, {
            task: language !== 'english' ? 'nigerian-language' : 'creative',
            forceProvider: providerMap[model],
            temperature: 0.75,
            cacheTtl: 1800,
        });
        return result.content;
    }
    async routeByTask(task, systemPrompt, userMessage, options) {
        const providers = this.getProviderPriorityForTask(task);
        for (const provider of providers) {
            try {
                return await this.callSpecificProvider(provider, systemPrompt, userMessage, options);
            }
            catch (err) {
                this.logger.warn(`Provider ${provider} failed for task ${task}: ${String(err)}`);
                continue;
            }
        }
        throw new Error(`All AI providers failed for task: ${task}`);
    }
    getProviderPriorityForTask(task) {
        const priorities = {
            'fast-chat': ['groq', 'gemini', 'cloudflare', 'openai'],
            'reasoning': ['groq', 'gemini', 'openai'],
            'creative': ['gemini', 'groq', 'openai'],
            'nigerian-language': ['gemini', 'groq', 'openai'],
            'json-extraction': ['groq', 'gemini', 'openai'],
            'long-context': ['gemini', 'groq', 'openai'],
            'conversation': ['groq', 'gemini', 'openai'],
            'code': ['groq', 'gemini', 'openai'],
            'moderation': ['groq', 'openai', 'gemini'],
        };
        return priorities[task] ?? ['groq', 'gemini', 'openai'];
    }
    async callSpecificProvider(provider, systemPrompt, userMessage, options) {
        const { temperature, maxTokens, jsonMode, model, useWebSearch } = options;
        switch (provider) {
            case 'groq': {
                if (!this.groq.available)
                    throw new Error('Groq unavailable');
                const groqModel = this.selectGroqModel(options);
                const r = await this.groq.chat(systemPrompt, userMessage, {
                    model: groqModel,
                    temperature,
                    maxTokens,
                    jsonMode,
                });
                return {
                    content: r.content,
                    provider: 'groq',
                    model: r.model,
                    tokens: r.totalTokens,
                    latencyMs: r.latencyMs,
                    cached: false,
                };
            }
            case 'gemini': {
                if (!this.gemini.available)
                    throw new Error('Gemini unavailable');
                const geminiModel = this.selectGeminiModel(options);
                const r = await this.gemini.chat(systemPrompt, userMessage, {
                    model: geminiModel,
                    temperature,
                    maxTokens,
                    jsonMode,
                    useGoogleSearch: useWebSearch,
                });
                return {
                    content: r.content,
                    provider: 'gemini',
                    model: r.model,
                    tokens: r.totalTokens,
                    latencyMs: r.latencyMs,
                    cached: false,
                };
            }
            case 'openai': {
                if (!this.openai.available)
                    throw new Error('OpenAI unavailable');
                const r = await this.openai.chat(systemPrompt, userMessage, {
                    model: model ?? 'gpt-4o-mini',
                    temperature,
                    maxTokens,
                    jsonMode,
                });
                return {
                    content: r.content,
                    provider: 'openai',
                    model: r.model,
                    tokens: r.totalTokens,
                    latencyMs: r.latencyMs,
                    cached: false,
                };
            }
            case 'ollama': {
                if (!this.ollama.available)
                    throw new Error('Ollama unavailable');
                const r = await this.ollama.chat(systemPrompt, userMessage, {
                    model: model ?? undefined,
                    temperature,
                    format: jsonMode ? 'json' : undefined,
                });
                return {
                    content: r.content,
                    provider: 'ollama',
                    model: r.model,
                    tokens: 0,
                    latencyMs: r.latencyMs,
                    cached: false,
                };
            }
            case 'cloudflare': {
                if (!this.cloudflare.cfAvailable)
                    throw new Error('Cloudflare AI unavailable');
                const content = await this.cloudflare.chatCF(systemPrompt, userMessage);
                return {
                    content,
                    provider: 'cloudflare',
                    model: 'llama-3.3-70b-fp8',
                    tokens: 0,
                    latencyMs: 0,
                    cached: false,
                };
            }
            default:
                throw new Error(`Unknown provider: ${provider}`);
        }
    }
    selectGroqModel(options) {
        if (options.model)
            return options.model;
        switch (options.task) {
            case 'fast-chat':
            case 'conversation':
                return 'llama-3.1-8b-instant';
            case 'reasoning':
            case 'json-extraction':
            case 'code':
                return 'llama-3.3-70b-versatile';
            case 'moderation':
                return 'llama-guard-3-8b';
            default:
                return 'llama-3.3-70b-versatile';
        }
    }
    selectGeminiModel(options) {
        if (options.model)
            return options.model;
        switch (options.task) {
            case 'long-context':
                return 'gemini-1.5-pro';
            case 'fast-chat':
            case 'conversation':
                return 'gemini-1.5-flash-8b';
            default:
                return 'gemini-2.5-flash';
        }
    }
    buildCacheKey(systemPrompt, userMessage, options) {
        const hash = crypto
            .createHash('sha256')
            .update(systemPrompt + userMessage + JSON.stringify({ t: options.task, m: options.model }))
            .digest('hex')
            .slice(0, 32);
        return `ai:cache:${hash}`;
    }
    logAvailableProviders() {
        const providers = [
            { name: 'Groq (FREE)', available: this.groq.available },
            { name: 'Gemini (FREE)', available: this.gemini.available },
            { name: 'Ollama (LOCAL)', available: false },
            { name: 'OpenAI (PAID)', available: this.openai.available },
            { name: 'CF Workers AI (FREE)', available: this.cloudflare.cfAvailable },
            { name: 'fal.ai (PAID)', available: this.cloudflare.falAvailable },
        ];
        const available = providers.filter((p) => p.available).map((p) => p.name);
        const unavailable = providers.filter((p) => !p.available).map((p) => p.name);
        if (available.length)
            this.logger.log(`AI Providers available: ${available.join(', ')}`);
        if (unavailable.length)
            this.logger.debug(`AI Providers not configured: ${unavailable.join(', ')}`);
    }
};
exports.AiService = AiService;
exports.AiService = AiService = AiService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [groq_provider_1.GroqProvider,
        gemini_provider_1.GeminiProvider,
        openai_provider_1.OpenAIProvider,
        cloudflare_provider_1.CloudflareAiProvider,
        ollama_provider_1.OllamaProvider,
        redis_service_1.RedisService,
        config_1.ConfigService])
], AiService);
async function generateText(prompt, options = {}) {
    const apiKey = process.env['OPENAI_API_KEY'];
    if (!apiKey)
        throw new Error('OPENAI_API_KEY not set in environment');
    const openai = new openai_provider_1.OpenAIProvider({ get: () => apiKey });
    const result = await openai.chat('You are a helpful assistant.', prompt, {
        model: options.model ?? 'gpt-4o-mini',
        temperature: options.temperature ?? 0.7,
    });
    return result.content;
}
async function generateGeminiText(prompt, model = 'gemini-2.5-flash', systemPrompt = 'You are a helpful assistant.', options = {}) {
    const apiKey = process.env['GEMINI_API_KEY'];
    if (!apiKey)
        throw new Error('GEMINI_API_KEY not set in environment');
    const gemini = new gemini_provider_1.GeminiProvider({ get: () => apiKey });
    const result = await gemini.chat(systemPrompt, prompt, {
        model,
        jsonMode: true,
        maxTokens: 4096,
        ...options
    });
    console.log(`✅ Gemini [${model}] response content length:`, result.content.length);
    return result.content;
}
//# sourceMappingURL=ai.service.js.map