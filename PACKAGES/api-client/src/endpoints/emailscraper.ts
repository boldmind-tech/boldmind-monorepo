
import APIClient from '../client';

export class EmailscraperEndpoints {
    constructor(private client: APIClient) { }

    async scrape(url: string, depth?: number) {
        return this.client.post(`/emailscraper/scrape`, { url, depth });
    }

    async getJobs() {
        return this.client.get(`/emailscraper/jobs`);
    }

    async getJobById(id: string) {
        return this.client.get(`/emailscraper/jobs/${id}`);
    }

    async getResults(jobId: string) {
        return this.client.get(`/emailscraper/jobs/${jobId}/results`);
    }

    async downloadResults(jobId: string, format: 'csv' | 'json') {
        return this.client.get(`/emailscraper/jobs/${jobId}/download`, { params: { format } });
    }
}
