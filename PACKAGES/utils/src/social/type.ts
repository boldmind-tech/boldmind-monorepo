export interface SocialAccount {
  id: string;
  name: string;
  url?: string;
  phone?: string;
  platform: string;
  accessToken?: string;
  refreshToken?: string;
  connectedAt?: Date;
}

export interface PlatformRules {
  platforms: string[];
  schedule: string;
  templates: Record<string, string>;
}

export interface ProductRules {
  [product: string]: PlatformRules;
}

export interface SocialPlatform {
  id: string;
  name: string;
  icon: string;
  apiKey?: string;
  apiSecret?: string;
  requiresOAuth: boolean;
}

export interface SocialPost {
  platform: string;
  content: string;
  media?: string[];
  scheduledFor?: Date;
  status: 'draft' | 'scheduled' | 'published' | 'failed';
}

export interface AnalyticsData {
  totalFollowers: number;
  engagement: number;
  reach: number;
  postsCount: number;
  platformBreakdown: Record<string, {
    followers: number;
    engagement: number;
    reach: number;
    postsCount: number;
    accounts: number;
    avgEngagementRate: number;
  }>;
  period: {
    start: Date;
    end: Date;
  };
}

export interface PostResult {
  platform: string;
  accountId: string;
  accountName: string;
  success: boolean;
  messageId?: string;
  error?: string;
  timestamp: Date;
  content?: {
    title: string;
    excerpt: string;
    url: string;
  };
}

export interface PlatformStats {
  followers: number;
  engagement: number;
  reach: number;
  postsCount: number;
  platform: string;
}