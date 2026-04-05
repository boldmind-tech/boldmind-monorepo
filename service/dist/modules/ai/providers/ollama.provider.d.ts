import { ConfigService } from '@nestjs/config';
export interface OllamaOptions {
    model?: string;
    temperature?: number;
    maxTokens?: number;
    format?: 'json' | undefined;
}
export declare class OllamaProvider {
    private readonly config;
    private readonly logger;
    private readonly baseUrl;
    private readonly defaultModel;
    private isReachable;
    constructor(config: ConfigService);
    private checkAvailability;
    get available(): boolean;
    chat(systemPrompt: string, userMessage: string, options?: OllamaOptions): Promise<{
        content: string;
        model: string;
        latencyMs: number;
    }>;
    listModels(): Promise<string[]>;
    pullModel(modelName: string): Promise<void>;
}
