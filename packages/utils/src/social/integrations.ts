import { socialAccounts, crossPostingRules } from '../constants/social';
import type { 
  SocialAccount, 
  PlatformRules, 
  PostResult, 
  AnalyticsData,
  PlatformStats 
} from './type';


export class SocialIntegration {
  private platformTokens: Map<string, string> = new Map();
  private apiClients: Map<string, any> = new Map();
  private postingQueue: Array<() => Promise<void>> = [];
  private isProcessingQueue = false;

  constructor(private config = {
    maxRetries: 3,
    delayBetweenPosts: 1000, // 1 second
    batchSize: 5,
    enableAnalytics: true
  }) {}

  // Connect to all social accounts with better error handling
  async connectAllAccounts(): Promise<{ success: number; failed: number; errors: string[] }> {
    const results = {
      success: 0,
      failed: 0,
      errors: [] as string[]
    };

    const connectionPromises = [];

    for (const [platform, accounts] of Object.entries(socialAccounts)) {
      for (const account of accounts) {
        connectionPromises.push(
          this.connectAccount(platform, account).then(
            () => results.success++,
            (error) => {
              results.failed++;
              results.errors.push(`Failed to connect ${account.name} on ${platform}: ${error.message}`);
            }
          )
        );
      }
    }

    await Promise.allSettled(connectionPromises);
    console.log(`✅ Connected ${results.success} social accounts, ${results.failed} failed`);
    return results;
  }

  // Enhanced cross-posting with better typing
  async crossPost(content: {
    title: string;
    body: string;
    excerpt: string;
    url: string;
    image?: string;
    product: string;
  }): Promise<PostResult[]> {
    const rules = crossPostingRules[content.product as keyof typeof crossPostingRules];
    
    if (!rules) {
      console.warn(`No cross-posting rules found for product: ${content.product}`);
      return [];
    }

    const results: PostResult[] = [];
    
    // Group by platform to handle multiple accounts per platform
    for (const platform of rules.platforms) {
      const platformAccounts = socialAccounts[platform] || [];
      const template = rules.templates[platform] || '{title}\n\n{body}\n\n{url}';
      
      for (const account of platformAccounts) {
        try {
          const message = this.formatMessage(template, content);
          const result = await this.postToPlatform(platform, account.id, message, content.image, content.url);
          
          results.push({
            platform,
            accountId: account.id,
            accountName: account.name,
            success: true,
            messageId: result.messageId,
            timestamp: new Date(),
            content: {
              title: content.title,
              excerpt: content.excerpt,
              url: content.url
            }
          });
          
          // Respect rate limits
          await this.delay(this.config.delayBetweenPosts);
          
        } catch (error) {
          results.push({
            platform,
            accountId: account.id,
            accountName: account.name,
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error',
            timestamp: new Date()
          });
          console.error(`Failed to post to ${platform} (${account.name}):`, error);
        }
      }
    }

    return results;
  }

  // Fixed method signature for postToPlatform
  private async postToPlatform(
    platform: string,
    accountId: string,
    message: string,
    image?: string,
    url?: string
  ): Promise<{ messageId: string; platform: string }> {
    // Implementation for each platform's API
    switch(platform) {
      case 'facebook':
        return this.postToFacebook(accountId, message, image, url);
      case 'instagram':
        return this.postToInstagram(accountId, message, image);
      case 'twitter':
      case 'x':
        return this.postToTwitter(accountId, message, image, url);
      case 'youtube':
        return this.postToYouTube(accountId, message, image || '', url);
      case 'tiktok':
        return this.postToTikTok(accountId, message, image);
      case 'whatsapp':
        return this.postToWhatsApp(accountId, message, url);
      case 'linkedin':
        return this.postToLinkedIn(accountId, message, image, url);
      default:
        throw new Error(`Unsupported platform: ${platform}`);
    }
  }

  // Fixed formatMessage method
  private formatMessage(template: string, content: {
    title: string;
    body: string;
    excerpt: string;
    url: string;
    product: string;
  }): string {
    return template
      .replace(/{title}/g, content.title)
      .replace(/{body}/g, content.body)
      .replace(/{excerpt}/g, content.excerpt)
      .replace(/{url}/g, content.url)
      .replace(/{product}/g, content.product);
  }

  // Enhanced postToAllProducts with proper typing
  async postToAllProducts(productPost: {
    amebogist?: { title: string; excerpt: string; url: string; body?: string; image?: string };
    educenter?: { title: string; excerpt: string; url: string; body?: string; image?: string };
    boldmind?: { title: string; excerpt: string; url: string; body?: string; image?: string };
  }): Promise<Record<string, PostResult[]>> {
    const results: Record<string, PostResult[]> = {};
    const posts = [];

    if (productPost.amebogist) {
      posts.push(
        this.crossPost({
          ...productPost.amebogist,
          body: productPost.amebogist.body || productPost.amebogist.excerpt,
          product: 'amebogist'
        }).then(result => { results.amebogist = result; })
      );
    }

    if (productPost.educenter) {
      posts.push(
        this.crossPost({
          ...productPost.educenter,
          body: productPost.educenter.body || productPost.educenter.excerpt,
          product: 'educenter'
        }).then(result => { results.educenter = result; })
      );
    }

    if (productPost.boldmind) {
      posts.push(
        this.crossPost({
          ...productPost.boldmind,
          body: productPost.boldmind.body || productPost.boldmind.excerpt,
          product: 'boldmind'
        }).then(result => { results.boldmind = result; })
      );
    }

    await Promise.all(posts);
    return results;
  }

  // Queue posting for rate limiting
  async queuePost(postFn: () => Promise<void>): Promise<void> {
    this.postingQueue.push(postFn);
    
    if (!this.isProcessingQueue) {
      this.processQueue();
    }
  }

  private async processQueue(): Promise<void> {
    if (this.isProcessingQueue || this.postingQueue.length === 0) return;
    
    this.isProcessingQueue = true;
    
    while (this.postingQueue.length > 0) {
      const batch = this.postingQueue.splice(0, this.config.batchSize);
      
      await Promise.all(
        batch.map(async (postFn, index) => {
          // Stagger posts within batch
          await this.delay(index * 500);
          await this.retryOperation(postFn, this.config.maxRetries);
        })
      );
      
      // Delay between batches
      if (this.postingQueue.length > 0) {
        await this.delay(this.config.delayBetweenPosts * 2);
      }
    }
    
    this.isProcessingQueue = false;
  }

  // Platform-specific implementations (simplified)
  private async postToFacebook(
    accountId: string,
    message: string,
    image?: string,
    url?: string
  ): Promise<{ messageId: string; platform: string }> {
    // Implementation using Facebook Graph API
    console.log(`Posting to Facebook account ${accountId}`);
    // Actual API call would go here
    return { messageId: `fb_${Date.now()}`, platform: 'facebook' };
  }

  private async postToTwitter(
    accountId: string,
    message: string,
    image?: string,
    url?: string
  ): Promise<{ messageId: string; platform: string }> {
    // Implementation using Twitter API v2
    console.log(`Posting to Twitter account ${accountId}`);
    return { messageId: `tw_${Date.now()}`, platform: 'twitter' };
  }

  private async postToInstagram(
    accountId: string,
    message: string,
    image?: string
  ): Promise<{ messageId: string; platform: string }> {
    // Implementation using Instagram Graph API
    console.log(`Posting to Instagram account ${accountId}`);
    return { messageId: `ig_${Date.now()}`, platform: 'instagram' };
  }

  private async postToYouTube(
    accountId: string,
    message: string,
    image: string,
    url?: string
  ): Promise<{ messageId: string; platform: string }> {
    // Implementation using YouTube Data API
    console.log(`Posting to YouTube account ${accountId}`);
    return { messageId: `yt_${Date.now()}`, platform: 'youtube' };
  }

  private async postToWhatsApp(
    accountId: string,
    message: string,
    url?: string
  ): Promise<{ messageId: string; platform: string }> {
    // Implementation using WhatsApp Business API
    console.log(`Posting to WhatsApp account ${accountId}`);
    return { messageId: `wa_${Date.now()}`, platform: 'whatsapp' };
  }

  private async postToTikTok(
    accountId: string,
    message: string,
    image?: string
  ): Promise<{ messageId: string; platform: string }> {
    // Implementation using TikTok API
    console.log(`Posting to TikTok account ${accountId}`);
    return { messageId: `tt_${Date.now()}`, platform: 'tiktok' };
  }

  private async postToLinkedIn(
    accountId: string,
    message: string,
    image?: string,
    url?: string
  ): Promise<{ messageId: string; platform: string }> {
    // Implementation using LinkedIn API
    console.log(`Posting to LinkedIn account ${accountId}`);
    return { messageId: `li_${Date.now()}`, platform: 'linkedin' };
  }

  private async connectAccount(platform: string, account: SocialAccount): Promise<void> {
    // Implementation for each platform's authentication
    console.log(`Connecting ${account.name} on ${platform}`);
    // Store tokens in this.platformTokens
    this.platformTokens.set(`${platform}:${account.id}`, 'mock_token');
  }

  // Helper methods
  private async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async retryOperation<T>(
    operation: () => Promise<T>,
    maxRetries: number,
    delayMs = 1000
  ): Promise<T> {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        if (attempt === maxRetries) throw error;
        console.log(`Retry ${attempt}/${maxRetries} after error:`, error);
        await this.delay(delayMs * attempt); // Exponential backoff
      }
    }
    throw new Error('Max retries exceeded');
  }

  // Enhanced analytics with error handling
  async getUnifiedAnalytics(startDate?: Date, endDate?: Date): Promise<AnalyticsData> {
    const analytics: AnalyticsData = {
      totalFollowers: 0,
      engagement: 0,
      reach: 0,
      postsCount: 0,
      platformBreakdown: {},
      period: {
        start: startDate || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Last 30 days
        end: endDate || new Date()
      }
    };

    for (const [platform, accounts] of Object.entries(socialAccounts)) {
      let platformFollowers = 0;
      let platformEngagement = 0;
      let platformReach = 0;
      let platformPosts = 0;

      for (const account of accounts) {
        try {
          const stats = await this.fetchPlatformStats(platform, account.id, startDate, endDate);
          platformFollowers += stats.followers || 0;
          platformEngagement += stats.engagement || 0;
          platformReach += stats.reach || 0;
          platformPosts += stats.postsCount || 0;
        } catch (error) {
          console.warn(`Failed to fetch stats for ${account.name} on ${platform}:`, error);
        }
      }

      analytics.totalFollowers += platformFollowers;
      analytics.engagement += platformEngagement;
      analytics.reach += platformReach;
      analytics.postsCount += platformPosts;

      analytics.platformBreakdown[platform] = {
        followers: platformFollowers,
        engagement: platformEngagement,
        reach: platformReach,
        postsCount: platformPosts,
        accounts: accounts.length,
        avgEngagementRate: platformFollowers > 0 ? (platformEngagement / platformFollowers) * 100 : 0
      };
    }

    return analytics;
  }

  private async fetchPlatformStats(
    platform: string,
    accountId: string,
    startDate?: Date,
    endDate?: Date
  ): Promise<PlatformStats> {
    // Implementation to fetch platform-specific statistics
    return {
      followers: Math.floor(Math.random() * 10000),
      engagement: Math.floor(Math.random() * 1000),
      reach: Math.floor(Math.random() * 50000),
      postsCount: Math.floor(Math.random() * 50),
      platform
    };
  }
}


export default SocialIntegration;