// SERVICES/api-gateway/src/clients/power-alert-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface ReportOutageDto {
    location: {
        lat: number;
        lng: number;
        address: string;
    };
    areaName: string;
    estimatedDuration?: number;
    notes?: string;
}

interface SolarCalculationDto {
    monthlyBill: number;
    location: string;
    roofSize?: number;
    energyUsage?: number;
}

@Injectable()
export class PowerAlertServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['POWER_ALERT_SERVICE_URL'] || 'http://localhost:4029',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Real-time Status
    async getCurrentStatus(location: { lat: number; lng: number }) {
        try {
            const response = await this.client.get('/status/current', {
                params: location,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch current status',
                error.response?.status || 500,
            );
        }
    }

    async getAreaStatus(areaName: string) {
        try {
            const response = await this.client.get(`/areas/${areaName}/status`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch area status',
                error.response?.status || 500,
            );
        }
    }

    async getAllAreasStatus() {
        try {
            const response = await this.client.get('/areas/status');
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch all areas status',
                error.response?.status || 500,
            );
        }
    }

    // Outage Reporting
    async reportOutage(userId: string, data: ReportOutageDto) {
        try {
            const response = await this.client.post('/outages', {
                ...data,
                reportedBy: userId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to report outage',
                error.response?.status || 500,
            );
        }
    }

    async getOutages(area?: string, status?: string) {
        try {
            const response = await this.client.get('/outages', {
                params: { area, status },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch outages',
                error.response?.status || 500,
            );
        }
    }

    // Solar Calculator
    async calculateSolarSavings(data: SolarCalculationDto) {
        try {
            const response = await this.client.post('/solar/calculate', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Solar calculation failed',
                error.response?.status || 500,
            );
        }
    }

    async getSolarRecommendations(location: string) {
        try {
            const response = await this.client.get('/solar/recommendations', {
                params: { location },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to get solar recommendations',
                error.response?.status || 500,
            );
        }
    }

    // Installer Directory
    async getSolarInstallers(location?: string) {
        try {
            const response = await this.client.get('/installers', {
                params: location ? { location } : undefined,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch installers',
                error.response?.status || 500,
            );
        }
    }

    async getInstallerById(installerId: string) {
        try {
            const response = await this.client.get(`/installers/${installerId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Installer not found',
                error.response?.status || 404,
            );
        }
    }

    async requestQuote(userId: string, installerId: string, requirements: any) {
        try {
            const response = await this.client.post(`/installers/${installerId}/quote`, {
                userId,
                requirements,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to request quote',
                error.response?.status || 500,
            );
        }
    }

    // Energy Tracking
    async logEnergyUsage(userId: string, data: {
        date: string;
        unitsConsumed: number;
        hoursOfPower?: number;
        generatorHours?: number;
        cost?: number;
    }) {
        try {
            const response = await this.client.post(`/users/${userId}/energy-usage`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to log energy usage',
                error.response?.status || 500,
            );
        }
    }

    async getEnergyHistory(userId: string, period?: string) {
        try {
            const response = await this.client.get(`/users/${userId}/energy-history`, {
                params: { period },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch energy history',
                error.response?.status || 500,
            );
        }
    }

    async getEnergyCostAnalysis(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/cost-analysis`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch cost analysis',
                error.response?.status || 500,
            );
        }
    }

    // Alerts & Notifications
    async subscribeToArea(userId: string, areaName: string) {
        try {
            const response = await this.client.post(`/users/${userId}/subscriptions`, {
                areaName,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to subscribe to area',
                error.response?.status || 500,
            );
        }
    }

    async getUserSubscriptions(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/subscriptions`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch subscriptions',
                error.response?.status || 500,
            );
        }
    }

    // Crowd-sourcing Stats
    async getCommunityStats(areaName?: string) {
        try {
            const response = await this.client.get('/community/stats', {
                params: areaName ? { area: areaName } : undefined,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch community stats',
                error.response?.status || 500,
            );
        }
    }
}