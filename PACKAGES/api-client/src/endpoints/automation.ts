// PACKAGES/api-client/src/endpoints/automation.ts

import APIClient from '../client';

export class AutomationEndpoints {
  constructor(private client: APIClient) { }

  // Social Content Factory
  async schedulePost(data: any) {
    return this.client.post('/automation/social/schedule', data);
  }

  async generateCalendar(data: any) {
    return this.client.post('/automation/social/calendar', data);
  }

  async bulkCaptions(data: any) {
    return this.client.post('/automation/social/captions', data);
  }

  // Email Campaigns
  async scheduleEmailCampaign(data: any) {
    return this.client.post('/automation/email/campaign', data);
  }

  // Email Scraper
  async runScraper(data: any) {
    return this.client.post('/automation/scraper/run', data);
  }

  async verifyEmail(email: string) {
    return this.client.post('/automation/scraper/verify', { email });
  }

  // n8n trigger
  async triggerWorkflow(workflow: string, payload?: any) {
    return this.client.post('/automation/trigger', { workflow, payload });
  }

  // Queue stats
  async getQueueStats() {
    return this.client.get('/automation/queues');
  }
}
