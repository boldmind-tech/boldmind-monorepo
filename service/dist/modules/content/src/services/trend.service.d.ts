export interface TrendAlert {
    title: string;
    platform: 'google' | 'x' | 'news';
    url: string;
    description?: string;
}
export declare class TrendService {
    private readonly logger;
    getTrendingTechUpdates(): Promise<TrendAlert[]>;
}
