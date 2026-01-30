import mongoose, { Schema, Document } from 'mongoose';

export interface ICampaign extends Document {
  userId: string;
  organizationId?: string;
  name: string;
  description?: string;
  platform: 'instagram' | 'youtube' | 'tiktok' | 'facebook' | 'twitter' | 'linkedin';
  contentType: 'video' | 'carousel' | 'single_image' | 'story' | 'reel';
  aiConfig: {
    style: string;
    tone: string;
    targetAudience: string;
    hashtags: string[];
    callToAction: string;
  };
  assets: {
    videos: Array<{
      url: string;
      duration: number;
      format: string;
      thumbnail: string;
    }>;
    images: Array<{
      url: string;
      altText?: string;
      caption?: string;
    }>;
    audio?: {
      url: string;
      duration: number;
    };
  };
  captions: Array<{
    text: string;
    platform: string;
    characterCount: number;
  }>;
  schedule: {
    frequency: 'daily' | 'weekly' | 'custom';
    times: string[];
    timezone: string;
    startDate: Date;
    endDate?: Date;
  };
  status: 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed';
  publishedPosts: Array<{
    platform: string;
    postId: string;
    url: string;
    publishedAt: Date;
    metrics: {
      views?: number;
      likes?: number;
      comments?: number;
      shares?: number;
      saves?: number;
    };
  }>;
  analytics: {
    totalReach: number;
    totalEngagement: number;
    engagementRate: number;
    bestPerformingPost?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const CampaignSchema = new Schema<ICampaign>(
  {
    userId: { type: String, required: true, index: true },
    organizationId: { type: String, index: true },
    name: { type: String, required: true },
    description: String,
    platform: {
      type: String,
      required: true,
      enum: ['instagram', 'youtube', 'tiktok', 'facebook', 'twitter', 'linkedin'],
      index: true
    },
    contentType: {
      type: String,
      required: true,
      enum: ['video', 'carousel', 'single_image', 'story', 'reel']
    },
    aiConfig: {
      style: { type: String, required: true },
      tone: { type: String, required: true },
      targetAudience: { type: String, required: true },
      hashtags: [String],
      callToAction: String
    },
    assets: {
      videos: [{
        url: String,
        duration: Number,
        format: String,
        thumbnail: String
      }],
      images: [{
        url: String,
        altText: String,
        caption: String
      }],
      audio: {
        url: String,
        duration: Number
      }
    },
    captions: [{
      text: { type: String, required: true },
      platform: String,
      characterCount: Number
    }],
    schedule: {
      frequency: {
        type: String,
        enum: ['daily', 'weekly', 'custom'],
        required: true
      },
      times: [String],
      timezone: { type: String, default: 'Africa/Lagos' },
      startDate: { type: Date, required: true },
      endDate: Date
    },
    status: {
      type: String,
      enum: ['draft', 'scheduled', 'publishing', 'published', 'failed'],
      default: 'draft',
      index: true
    },
    publishedPosts: [{
      platform: String,
      postId: String,
      url: String,
      publishedAt: Date,
      metrics: {
        views: Number,
        likes: Number,
        comments: Number,
        shares: Number,
        saves: Number
      }
    }],
    analytics: {
      totalReach: { type: Number, default: 0 },
      totalEngagement: { type: Number, default: 0 },
      engagementRate: { type: Number, default: 0 },
      bestPerformingPost: String
    }
  },
  {
    timestamps: true,
    collection: 'campaigns'
  }
);

// Indexes
CampaignSchema.index({ userId: 1, status: 1 });
CampaignSchema.index({ 'schedule.startDate': 1 });
CampaignSchema.index({ platform: 1, status: 1 });

export const Campaign = mongoose.model<ICampaign>('Campaign', CampaignSchema);