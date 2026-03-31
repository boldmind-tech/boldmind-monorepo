// APPS/WEB_APPS/boldmind-tools/lib/automation.ts
import { boldMindAPI } from '@boldmind/api-client';

/**
 * Automation API Client
 * n8n workflow automation and scheduling
 */
export const automationAPI = {
    /**
     * Social Media Automation
     */
    social: {
        /** Schedule social media post */
        schedule: (data: { 
            content: string; 
            platforms: string[]; 
            scheduledAt: string; 
            mediaUrls?: string[];
        }) => boldMindAPI.automation.social.schedule(data),
        
        /** Generate content calendar */
        calendar: (data: { month?: number; year?: number; topics?: string[] }) =>
            boldMindAPI.automation.social.calendar(data),
        
        /** Generate captions */
        captions: (data: { 
            topic: string; 
            tone?: string; 
            platforms?: string[]; 
            count?: number;
        }) => boldMindAPI.automation.social.captions(data),
    },
    
    /**
     * Email Automation
     */
    email: {
        /** Create email campaign */
        campaign: (data: { subject: string; html: string; scheduledAt?: string; tags?: string[] }) =>
            boldMindAPI.automation.email.campaign(data),
    },
    
    /**
     * Web Scraping Automation
     */
    scraper: {
        /** Run scraper */
        run: (data: { urls: string[]; selectors?: Record<string, string> }) =>
            boldMindAPI.automation.scraper.run(data),
        
        /** Verify emails */
        verify: (emails: string[]) => boldMindAPI.automation.scraper.verify({ emails }),
    },
    
    /**
     * Generic n8n workflow trigger
     */
    trigger: (data: { workflow: string; payload?: Record<string, unknown> }) =>
        boldMindAPI.automation.trigger(data),
    
    /**
     * Queue statistics (admin only)
     */
    queues: () => boldMindAPI.automation.queues(),
};

export default automationAPI;