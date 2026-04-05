import { AiService } from './ai.service';
import { TrendService } from './services/trend.service';
import { GroqProvider } from './providers/groq.provider';
import { GeminiProvider } from './providers/gemini.provider';
import { OpenAIProvider } from './providers/openai.provider';
import { CloudflareAiProvider } from './providers/cloudflare.provider';
import { OllamaProvider } from './providers/ollama.provider';
export declare class AiAdminController {
    private readonly ai;
    private readonly trends;
    private readonly groq;
    private readonly gemini;
    private readonly openai;
    private readonly cf;
    private readonly ollama;
    constructor(ai: AiService, trends: TrendService, groq: GroqProvider, gemini: GeminiProvider, openai: OpenAIProvider, cf: CloudflareAiProvider, ollama: OllamaProvider);
    getStatus(): Promise<{
        providers: {
            groq: {
                available: boolean;
                freeQuota: string;
            };
            gemini: {
                available: boolean;
                freeQuota: string;
            };
            openai: {
                available: boolean;
                estimatedSpendUsd: number;
            };
            cloudflare: {
                available: boolean;
                freeQuota: string;
            };
            falAi: {
                available: boolean;
            };
            ollama: {
                available: boolean;
                models: any[];
            };
        };
        recommendation: string;
    }>;
    getTrends(): Promise<import("./services/trend.service").TrendSummary>;
    getTechTrends(): Promise<import("./services/trend.service").TrendAlert[]>;
    getAiTrends(): Promise<import("./services/trend.service").TrendAlert[]>;
    getContentIdeas(): Promise<{
        title: string;
        angle: string;
        language: "pidgin" | "english";
        category: string;
        estimatedEngagement: "high" | "medium" | "low";
    }[]>;
    testProvider(body: {
        provider: string;
        prompt: string;
    }): Promise<import("./ai.service").AiChatResult>;
    generateTestImage(body: {
        prompt: string;
        format: 'square' | 'landscape';
    }): Promise<{
        provider: string;
        hasBuffer: boolean;
        url: string;
    }>;
    private getProviderRecommendation;
}
