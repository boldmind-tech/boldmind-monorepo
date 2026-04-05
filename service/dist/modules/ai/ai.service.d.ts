import { ConfigService } from '@nestjs/config';
import { GroqProvider } from './providers/groq.provider';
import { GeminiProvider } from './providers/gemini.provider';
import { OpenAIProvider } from './providers/openai.provider';
import { CloudflareAiProvider } from './providers/cloudflare.provider';
import { OllamaProvider } from './providers/ollama.provider';
import { RedisService } from '../../database/redis.service';
export type AiTask = 'fast-chat' | 'reasoning' | 'creative' | 'nigerian-language' | 'json-extraction' | 'long-context' | 'conversation' | 'code' | 'moderation';
export interface ChatOptions {
    task?: AiTask;
    temperature?: number;
    maxTokens?: number;
    jsonMode?: boolean;
    cacheTtl?: number;
    forceProvider?: 'groq' | 'gemini' | 'openai' | 'ollama' | 'cloudflare';
    model?: string;
    useWebSearch?: boolean;
}
export interface AiChatResult {
    content: string;
    provider: string;
    model: string;
    tokens: number;
    latencyMs: number;
    cached: boolean;
}
export interface AiImageResult {
    data: Buffer | null;
    url: string | null;
    provider: string;
}
export declare class AiService {
    private readonly groq;
    private readonly gemini;
    private readonly openai;
    private readonly cloudflare;
    private readonly ollama;
    private readonly redis;
    private readonly config;
    private readonly logger;
    private readonly CACHE_TTL_DEFAULT;
    constructor(groq: GroqProvider, gemini: GeminiProvider, openai: OpenAIProvider, cloudflare: CloudflareAiProvider, ollama: OllamaProvider, redis: RedisService, config: ConfigService);
    chat(systemPrompt: string, userMessage: string, options?: ChatOptions): Promise<AiChatResult>;
    generateJson<T = Record<string, unknown>>(systemPrompt: string, userMessage: string, options?: ChatOptions): Promise<{
        content: T;
        provider: string;
        model: string;
        tokens?: number;
    }>;
    structuredChat<T = Record<string, unknown>>(systemPrompt: string, userMessage: string, options?: ChatOptions): Promise<T>;
    generateNigerianContent(task: string, language: 'pidgin' | 'english' | 'yoruba' | 'igbo' | 'hausa', basePrompt: string, options?: ChatOptions): Promise<AiChatResult>;
    generateBusinessContent(systemPrompt: string, userMessage: string, options?: ChatOptions): Promise<AiChatResult>;
    streamChat(systemPrompt: string, userMessage: string, options?: ChatOptions): AsyncGenerator<string>;
    generateSocialImage(prompt: string, format?: 'square' | 'portrait' | 'landscape' | 'whatsapp-flyer'): Promise<AiImageResult>;
    generateLogo(params: {
        brandName: string;
        industry: string;
        style: string;
        colors: string[];
        additionalDetails?: string;
    }): Promise<AiImageResult>;
    embed(text: string): Promise<number[]>;
    embedBatch(texts: string[]): Promise<number[][]>;
    transcribeAudio(audioBuffer: Buffer): Promise<string>;
    textToSpeech(text: string, voice?: 'alloy' | 'nova' | 'shimmer'): Promise<Buffer>;
    moderateContent(content: string): Promise<{
        safe: boolean;
        category?: string;
    }>;
    analyzeSentiment(text: string): Promise<'positive' | 'neutral' | 'negative'>;
    generateArticle(options: {
        topic: string;
        style?: 'news' | 'amebo' | 'startup' | 'tech-update';
        language?: 'pidgin' | 'english' | 'yoruba' | 'igbo' | 'hausa';
        model?: 'groq' | 'gemini' | 'openai';
    }): Promise<{
        title: string;
        excerpt: string;
        content: string;
        tags: string[];
        seoTitle: string;
        seoDescription: string;
    }>;
    private routeByTask;
    private getProviderPriorityForTask;
    private callSpecificProvider;
    private selectGroqModel;
    private selectGeminiModel;
    private buildCacheKey;
    private logAvailableProviders;
}
export declare function generateText(prompt: string, options?: any): Promise<string>;
export declare function generateGeminiText(prompt: string, model?: any, systemPrompt?: string, options?: any): Promise<string>;
