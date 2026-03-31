// apps/boldmind-tools/app/emailscraper/lib/api.ts
import { boldMindAPI, type PaginatedResponse } from '@boldmind/api-client';

/**
 * Email Scraper API Client
 * For scraping and verifying email leads
 */
export const emailScraperAPI = {
    /**
     * Email Search & Scraping
     */
    search: {
        /** POST /planai/emailscraper/search - Search for email leads */
        byDomain: (data: { domain: string; role?: string; limit?: number }) =>
            boldMindAPI.planai.emailScraper.search({ ...data, company: data.domain }),
        
        /** POST /planai/emailscraper/search - Search by company name */
        byCompany: (data: { company: string; role?: string; limit?: number }) =>
            boldMindAPI.planai.emailScraper.search(data),
    },
    
    /**
     * Email Verification
     */
    verify: {
        /** POST /planai/emailscraper/verify - Verify single email */
        single: (email: string) => boldMindAPI.planai.emailScraper.verify(email),
        
        /** POST /planai/emailscraper/bulk-verify - Bulk verify emails */
        bulk: (emails: string[]) => boldMindAPI.planai.emailScraper.bulkVerify(emails),
    },
    
    /**
     * Lead Management
     */
    leads: {
        /** GET /planai/emailscraper/leads - Get leads with pagination */
        list: (params?: { page?: number; limit?: number; listId?: string }) =>
            boldMindAPI.planai.emailScraper.leads(params),
        
        /** GET /planai/emailscraper/leads/export - Export leads */
        export: (params?: { listId?: string; format?: 'csv' | 'json' }) =>
            boldMindAPI.planai.emailScraper.exportLeads(params),
    },
    
    /**
     * Lead Lists Management
     */
    lists: {
        /** POST /planai/emailscraper/lists - Create a new list */
        create: (name: string) => boldMindAPI.planai.emailScraper.createList({ name }),
        
        /** GET /planai/emailscraper/lists - Get all lists */
        getAll: () => boldMindAPI.planai.emailScraper.lists(),
    },
    
    /**
     * Scraping Jobs
     */
    jobs: {
        /** GET /planai/emailscraper/jobs - Get all scraping jobs */
        getAll: () => boldMindAPI.planai.emailScraper.jobs(),
        
        /** Get job status by ID (convenience method) */
        getStatus: async (jobId: string) => {
            const jobs = await boldMindAPI.planai.emailScraper.jobs();
            return jobs.data?.find(job => (job as any).id === jobId);
        },
    },
    
    /**
     * Automation (via automation API)
     */
    automation: {
        /** POST /automation/scraper/run - Run automated scraper */
        run: (data: { urls: string[]; selectors?: Record<string, string> }) =>
            boldMindAPI.automation.scraper.run(data),
        
        /** POST /automation/scraper/verify - Verify emails via automation */
        verify: (emails: string[]) => boldMindAPI.automation.scraper.verify({ emails }),
    },
};

export default emailScraperAPI;