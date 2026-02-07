// SERVICES/api-gateway/src/clients/emailscraper-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface FindEmailsDto {
    domain?: string;
    company?: string;
    firstName?: string;
    lastName?: string;
}

interface VerifyEmailDto {
    email: string;
}

interface BulkUploadDto {
    fileData: string; // base64
    fileType: 'csv' | 'xlsx';
}

@Injectable()
export class EmailscraperServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['EMAILSCRAPER_SERVICE_URL'] || 'http://localhost:4023',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 30000,
        });
    }

    // Email Discovery
    async findEmails(data: FindEmailsDto) {
        try {
            const response = await this.client.post('/emails/find', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to find emails',
                error.response?.status || 500,
            );
        }
    }

    async findDomainEmails(domain: string) {
        try {
            const response = await this.client.get('/emails/domain', {
                params: { domain },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to find domain emails',
                error.response?.status || 500,
            );
        }
    }

    // Verification
    async verifyEmail(data: VerifyEmailDto) {
        try {
            const response = await this.client.post('/emails/verify', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to verify email',
                error.response?.status || 500,
            );
        }
    }

    async bulkVerify(emails: string[]) {
        try {
            const response = await this.client.post('/emails/verify/bulk', { emails });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Bulk verification failed',
                error.response?.status || 500,
            );
        }
    }

    // Lead Enrichment
    async enrichLead(email: string) {
        try {
            const response = await this.client.get('/leads/enrich', {
                params: { email },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to enrich lead',
                error.response?.status || 500,
            );
        }
    }

    // Bulk Operations
    async uploadBulkList(data: BulkUploadDto) {
        try {
            const response = await this.client.post('/bulk/upload', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to upload list',
                error.response?.status || 500,
            );
        }
    }

    async getBulkJobs(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/bulk-jobs`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch bulk jobs',
                error.response?.status || 500,
            );
        }
    }

    async downloadResults(jobId: string) {
        try {
            const response = await this.client.get(`/bulk/jobs/${jobId}/download`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to download results',
                error.response?.status || 500,
            );
        }
    }

    // Nigerian Directory Scraping
    async searchNigerianDirectory(query: string, category?: string) {
        try {
            const response = await this.client.get('/directory/nigeria/search', {
                params: { q: query, category },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Directory search failed',
                error.response?.status || 500,
            );
        }
    }

    // API Usage
    async getApiUsage(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/usage`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch usage',
                error.response?.status || 500,
            );
        }
    }
}