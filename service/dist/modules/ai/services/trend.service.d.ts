import { GeminiProvider } from '../providers/gemini.provider';
import { RedisService } from '../../../database/redis.service';
export interface TrendAlert {
    title: string;
    platform: 'google' | 'x' | 'news' | 'rss' | 'techcabal' | 'nairametrics';
    url: string;
    description?: string;
    category?: 'tech' | 'business' | 'startup' | 'ai' | 'crypto' | 'policy';
    publishedAt?: string;
    relevanceScore?: number;
    source?: string;
}
export interface TrendSummary {
    trends: TrendAlert[];
    aiSummary: string;
    fetchedAt: string;
    topic?: string;
}
export declare class TrendService {
    private readonly gemini;
    private readonly redis;
    private readonly logger;
    private readonly CACHE_TTL;
    constructor(gemini: GeminiProvider, redis: RedisService);
    getTrendingForBoldMind(): Promise<TrendSummary>;
    getTrendingTechUpdates(): Promise<TrendAlert[]>;
    getAiTrends(): Promise<TrendAlert[]>;
    getTrendsByNiche(niche: string): Promise<TrendSummary>;
    generateContentIdeas(count?: number): Promise<Array<{
        title: string;
        angle: string;
        language: 'pidgin' | 'english';
        category: string;
        estimatedEngagement: 'high' | 'medium' | 'low';
    }>>;
    private fetchFromRssFeeds;
    private parseRssXml;
    private fetchGoogleTrendsNG;
    private summarizeTrends;
    private extractTag;
    private stripHtml;
    private categorize;
    private scoreRelevance;
    private getStaticAiTrends;
    private getStaticContentIdeas;
}
