import { Model } from 'mongoose';
import { IPost } from './schemas/post.schema';
import { RedisService } from '../../database/redis.service';
export declare class RssService {
    private readonly postModel;
    private readonly redis;
    constructor(postModel: Model<IPost>, redis: RedisService);
    generateMainFeed(): Promise<string>;
    generateCategoryFeed(category: string): Promise<string>;
    private buildRssXml;
    private escapeXml;
    private capitalise;
}
