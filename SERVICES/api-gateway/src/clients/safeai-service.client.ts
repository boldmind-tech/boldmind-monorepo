// SERVICES/api-gateway/src/clients/safeai-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface ReportIncidentDto {
    type: string;
    description: string;
    location: {
        lat: number;
        lng: number;
        address?: string;
    };
    evidence?: string[];
    anonymous?: boolean;
}

interface SearchCriminalDto {
    name?: string;
    idNumber?: string;
    fingerprintId?: string;
}

@Injectable()
export class SafeaiServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['SAFEAI_SERVICE_URL'] || 'http://localhost:4026',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Incidents
    async reportIncident(officerId: string, data: ReportIncidentDto) {
        try {
            const response = await this.client.post('/incidents', {
                ...data,
                reportedBy: officerId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to report incident',
                error.response?.status || 500,
            );
        }
    }

    async getIncidents(query?: { status?: string; type?: string; area?: string }) {
        try {
            const response = await this.client.get('/incidents', { params: query });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch incidents',
                error.response?.status || 500,
            );
        }
    }

    async getIncidentById(incidentId: string) {
        try {
            const response = await this.client.get(`/incidents/${incidentId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Incident not found',
                error.response?.status || 404,
            );
        }
    }

    async updateIncidentStatus(incidentId: string, status: string, notes?: string) {
        try {
            const response = await this.client.patch(`/incidents/${incidentId}`, {
                status,
                notes,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to update incident',
                error.response?.status || 500,
            );
        }
    }

    // Criminal Database
    async searchCriminalRecords(data: SearchCriminalDto) {
        try {
            const response = await this.client.post('/criminals/search', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Search failed',
                error.response?.status || 500,
            );
        }
    }

    async getCriminalProfile(criminalId: string) {
        try {
            const response = await this.client.get(`/criminals/${criminalId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Criminal profile not found',
                error.response?.status || 404,
            );
        }
    }

    async addCriminalRecord(data: any) {
        try {
            const response = await this.client.post('/criminals', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to add criminal record',
                error.response?.status || 500,
            );
        }
    }

    // Pattern Recognition
    async getCrimePatterns(area?: string, timeframe?: string) {
        try {
            const response = await this.client.get('/analytics/patterns', {
                params: { area, timeframe },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch patterns',
                error.response?.status || 500,
            );
        }
    }

    async getPredictiveAlerts() {
        try {
            const response = await this.client.get('/analytics/predictions');
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch predictions',
                error.response?.status || 500,
            );
        }
    }

    // Evidence Management
    async uploadEvidence(incidentId: string, fileData: string, metadata: any) {
        try {
            const response = await this.client.post(`/incidents/${incidentId}/evidence`, {
                fileData,
                metadata,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to upload evidence',
                error.response?.status || 500,
            );
        }
    }

    async getEvidence(incidentId: string) {
        try {
            const response = await this.client.get(`/incidents/${incidentId}/evidence`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch evidence',
                error.response?.status || 500,
            );
        }
    }

    // Officer Communication
    async sendOfficerMessage(officerId: string, message: string, priority?: string) {
        try {
            const response = await this.client.post('/communications/messages', {
                from: officerId,
                message,
                priority,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to send message',
                error.response?.status || 500,
            );
        }
    }

    async getOfficerMessages(officerId: string) {
        try {
            const response = await this.client.get(`/officers/${officerId}/messages`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch messages',
                error.response?.status || 500,
            );
        }
    }

    // Facial Recognition
    async searchByFacialRecognition(imageData: string) {
        try {
            const response = await this.client.post('/search/facial', { imageData });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Facial recognition failed',
                error.response?.status || 500,
            );
        }
    }

    // License Plate Recognition
    async searchByLicensePlate(plateNumber: string) {
        try {
            const response = await this.client.get('/search/plate', {
                params: { number: plateNumber },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Plate search failed',
                error.response?.status || 500,
            );
        }
    }
}