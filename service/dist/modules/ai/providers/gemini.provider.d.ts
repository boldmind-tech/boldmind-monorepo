import { ConfigService } from '@nestjs/config';
export type GeminiModel = 'gemini-2.5-flash' | 'gemini-2.0-flash' | 'gemini-1.5-pro' | 'gemini-1.5-flash' | 'gemini-1.5-flash-8b' | 'gemma-3-27b-it' | 'gemini-flash-latest';
export interface GeminiOptions {
    model?: string;
    temperature?: number;
    maxTokens?: number;
    jsonMode?: boolean;
    systemInstruction?: string;
    useGoogleSearch?: boolean;
}
export interface GeminiResponse {
    content: string;
    model: string;
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    latencyMs: number;
    groundingMetadata?: unknown;
}
export declare class GeminiProvider {
    private readonly config;
    private readonly logger;
    private readonly client;
    private readonly isAvailable;
    constructor(config: ConfigService);
    get available(): boolean;
    chat(systemPrompt: string, userMessage: string, options?: GeminiOptions): Promise<GeminiResponse>;
    startChatSession(systemPrompt: string, model?: any): Promise<import("@google/generative-ai").ChatSession>;
    analyzeImage(imageBase64: string, mimeType: 'image/jpeg' | 'image/png' | 'image/webp', prompt: string, systemPrompt?: string): Promise<GeminiResponse>;
    searchAndSummarize(query: string, systemContext?: string): Promise<GeminiResponse>;
    embed(text: string): Promise<number[]>;
    embedBatch(texts: string[]): Promise<number[][]>;
}
