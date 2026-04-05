import { ConfigService } from '@nestjs/config';
export type OpenAIModel = 'gpt-4o' | 'gpt-4o-mini' | 'o1-mini' | 'gpt-3.5-turbo';
export interface OpenAIChatOptions {
    model?: OpenAIModel;
    temperature?: number;
    maxTokens?: number;
    jsonMode?: boolean;
    systemPrompt?: string;
}
export interface OpenAIResponse {
    content: string;
    model: string;
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    latencyMs: number;
    estimatedCostUsd: number;
}
export declare class OpenAIProvider {
    private readonly config;
    private readonly logger;
    private readonly client;
    private readonly isAvailable;
    private totalSpendUsd;
    constructor(config: ConfigService);
    get available(): boolean;
    get estimatedTotalSpend(): number;
    chat(systemPrompt: string, userMessage: string, options?: OpenAIChatOptions): Promise<OpenAIResponse>;
    transcribeAudio(audioFile: File | Buffer | Uint8Array): Promise<string>;
    textToSpeech(text: string, voice?: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer'): Promise<Buffer>;
    generateImage(prompt: string, size?: '1024x1024' | '1792x1024' | '1024x1792'): Promise<string>;
    embed(text: string): Promise<number[]>;
}
