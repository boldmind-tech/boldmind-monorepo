// apps/boldmind-tools/app/social/lib/index.ts
import { boldMindAPI } from '@boldmind/api-client';

/**
 * SocAI Content API Client
 * AI-powered social media content generation and management
 */
export const socaiAPI = {
    /**
     * Social Media Content Generation
     */
    content: {
        /** POST /automation/social/captions - Generate social captions */
        generateCaptions: (data: { 
            topic: string; 
            tone?: 'professional' | 'casual' | 'funny' | 'inspirational' | 'educational';
            platforms?: ('facebook' | 'twitter' | 'instagram' | 'linkedin' | 'tiktok')[];
            count?: number;
        }) => boldMindAPI.automation.social.captions(data),
        
        /** POST /automation/social/captions - Legacy method for backward compatibility */
        generate: (topic: string, tone?: string, platforms?: string[], count?: number) =>
            boldMindAPI.automation.social.captions({ topic, tone, platforms, count }),
    },
    
    /**
     * Social Media Scheduling
     */
    schedule: {
        /** POST /automation/social/schedule - Schedule a post */
        post: (data: {
            content: string;
            platforms: string[];
            scheduledAt: string;
            mediaUrls?: string[];
        }) => boldMindAPI.automation.social.schedule(data),
        
        /** POST /automation/social/calendar - Generate content calendar */
        generateCalendar: (data: { month?: number; year?: number; topics?: string[] }) =>
            boldMindAPI.automation.social.calendar(data),
    },
    
    /**
     * Marketing Campaigns
     */
    marketing: {
        /** POST /planai/marketing/generate/subject-lines - Generate email subjects */
        generateSubjectLines: (data: { topic: string; tone?: string; count?: number }) =>
            boldMindAPI.planai.marketing.generateSubjectLines(data),
        
        /** POST /planai/marketing/generate/email-copy - Generate email content */
        generateEmailCopy: (data: { purpose: string; tone?: string; productName?: string }) =>
            boldMindAPI.planai.marketing.generateEmailCopy(data),
        
        /** POST /planai/marketing/campaign/email - Create email campaign */
        createEmailCampaign: (data: { subject: string; body: string; audienceIds?: string[] }) =>
            boldMindAPI.planai.marketing.createEmailCampaign(data),
        
        /** POST /planai/marketing/campaign/:id/send - Send campaign */
        sendCampaign: (campaignId: string) =>
            boldMindAPI.planai.marketing.sendCampaign(campaignId),
        
        /** GET /planai/marketing/analytics/:campaignId - Get campaign analytics */
        getCampaignAnalytics: (campaignId: string) =>
            boldMindAPI.planai.marketing.campaignAnalytics(campaignId),
        
        /** POST /planai/marketing/whatsapp/broadcast - WhatsApp broadcast */
        whatsappBroadcast: (data: { message: string; phones: string[] }) =>
            boldMindAPI.planai.marketing.whatsappBroadcast(data),
    },
    
    /**
     * Social Media Analytics
     */
    analytics: {
        /** GET /planai/analytics/overview - Overall analytics */
        overview: () => boldMindAPI.planai.analytics.overview(),
        
        /** GET /planai/analytics/revenue - Revenue analytics */
        revenue: () => boldMindAPI.planai.analytics.revenue(),
        
        /** GET /planai/analytics/growth-insights - Growth insights */
        growthInsights: () => boldMindAPI.planai.analytics.growthInsights(),
        
        /** POST /planai/analytics/report - Generate analytics report */
        generateReport: (data: unknown) => boldMindAPI.planai.analytics.report(data),
    },
    
    /**
     * Content Calendar Automation
     */
    calendar: {
        /** POST /automation/social/calendar - AI calendar generation */
        generate: (data: { month?: number; year?: number; topics?: string[] }) =>
            boldMindAPI.automation.social.calendar(data),
    },
};

export default socaiAPI;