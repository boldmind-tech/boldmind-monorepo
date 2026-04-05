import { ConfigService } from '@nestjs/config';
export type GroqModel = 'llama-3.3-70b-versatile' | 'llama-3.1-8b-instant' | 'gemma2-9b-it' | 'mixtral-8x7b-32768' | 'llama-guard-3-8b';
export interface GroqMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}
export interface GroqChatOptions {
    model?: GroqModel;
    temperature?: number;
    maxTokens?: number;
    jsonMode?: boolean;
    messages?: GroqMessage[];
    stopSequences?: string[];
}
export interface GroqResponse {
    content: string;
    model: string;
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    latencyMs: number;
}
export declare class GroqProvider {
    private readonly config;
    private readonly logger;
    private readonly client;
    private readonly isAvailable;
    constructor(config: ConfigService);
    get available(): boolean;
    chat(systemPrompt: string, userMessage: string, options?: GroqChatOptions): Promise<GroqResponse>;
    converse(messages: GroqMessage[], options?: GroqChatOptions): Promise<GroqResponse>;
    moderateContent(content: string): Promise<{
        safe: boolean;
        category?: string;
    }>;
    stream(systemPrompt: string, userMessage: string, options?: Omit<GroqChatOptions, 'jsonMode'>): AsyncGenerator<string>;
}
