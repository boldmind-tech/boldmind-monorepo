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