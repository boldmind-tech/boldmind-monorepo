import { AiService } from '../../../ai/ai.service';
import { Queue } from 'bullmq';
export interface GenerateArticleOptions {
    topic: string;
    style?: 'news' | 'amebo' | 'startup' | 'tech-update';
    language?: 'pidgin' | 'english' | 'yoruba' | 'igbo' | 'hausa';
    model?: 'groq' | 'gemini' | 'openai';
    userId?: string;
}
export interface GeneratedArticle {
    title: string;
    excerpt: string;
    content: string;
    tags?: string[];
    seoTitle?: string;
    seoDescription?: string;
}
export declare class ContentAiService {
    private readonly aiService;
    private readonly contentQueue;
    private readonly logger;
    constructor(aiService: AiService, contentQueue: Queue);
    generateArticle(options: GenerateArticleOptions): Promise<GeneratedArticle>;
    suggestTopics(params: {
        category: string;
        language?: 'pidgin' | 'english';
        count?: number;
    }): Promise<string[]>;
    generateSeoMetadata(params: {
        title: string;
        excerpt: string;
        category: string;
    }): Promise<{
        seoTitle: string;
        seoDescription: string;
        tags: string[];
    }>;
    moderateContent(text: string): Promise<{
        safe: boolean;
        category?: string;
    }>;
    private truncateToExcerpt;
    private queuePostGenerationJobs;
}
