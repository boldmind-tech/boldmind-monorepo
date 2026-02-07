// SERVICES/api-gateway/src/clients/farmgate-direct-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface CreateListingDto {
    productName: string;
    category: string;
    quantity: number;
    unit: string;
    pricePerUnit: number;
    description?: string;
    images?: string[];
    harvestDate?: string;
    location: {
        lat: number;
        lng: number;
        address: string;
    };
    organic?: boolean;
    certifications?: string[];
}

interface CreateOrderDto {
    listingId: string;
    quantity: number;
    deliveryAddress: string;
    preferredDeliveryDate?: string;
    notes?: string;
}

@Injectable()
export class FarmgateDirectServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['FARMGATE_DIRECT_SERVICE_URL'] || 'http://localhost:4030',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Listings
    async createListing(farmerId: string, data: CreateListingDto) {
        try {
            const response = await this.client.post('/listings', {
                ...data,
                farmerId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create listing',
                error.response?.status || 500,
            );
        }
    }

    async getListings(query?: {
        category?: string;
        location?: string;
        organic?: boolean;
        minPrice?: number;
        maxPrice?: number;
    }) {
        try {
            const response = await this.client.get('/listings', { params: query });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch listings',
                error.response?.status || 500,
            );
        }
    }

    async getListingById(listingId: string) {
        try {
            const response = await this.client.get(`/listings/${listingId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Listing not found',
                error.response?.status || 404,
            );
        }
    }

    async updateListing(listingId: string, farmerId: string, data: Partial<CreateListingDto>) {
        try {
            const response = await this.client.patch(`/listings/${listingId}`, {
                ...data,
                farmerId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to update listing',
                error.response?.status || 500,
            );
        }
    }

    async deleteListing(listingId: string, farmerId: string) {
        try {
            const response = await this.client.delete(`/listings/${listingId}`, {
                data: { farmerId },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to delete listing',
                error.response?.status || 500,
            );
        }
    }

    // Farmer Profiles
    async createFarmerProfile(userId: string, data: any) {
        try {
            const response = await this.client.post(`/farmers/${userId}`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create farmer profile',
                error.response?.status || 500,
            );
        }
    }

    async getFarmerProfile(farmerId: string) {
        try {
            const response = await this.client.get(`/farmers/${farmerId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Farmer profile not found',
                error.response?.status || 404,
            );
        }
    }

    async getFarmerListings(farmerId: string) {
        try {
            const response = await this.client.get(`/farmers/${farmerId}/listings`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch farmer listings',
                error.response?.status || 500,
            );
        }
    }

    // Orders
    async createOrder(buyerId: string, data: CreateOrderDto) {
        try {
            const response = await this.client.post('/orders', {
                ...data,
                buyerId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create order',
                error.response?.status || 500,
            );
        }
    }

    async getOrders(userId: string, role: 'buyer' | 'farmer', status?: string) {
        try {
            const response = await this.client.get(`/users/${userId}/orders`, {
                params: { role, status },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch orders',
                error.response?.status || 500,
            );
        }
    }

    async getOrderById(orderId: string) {
        try {
            const response = await this.client.get(`/orders/${orderId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Order not found',
                error.response?.status || 404,
            );
        }
    }

    async updateOrderStatus(orderId: string, status: string, notes?: string) {
        try {
            const response = await this.client.patch(`/orders/${orderId}`, {
                status,
                notes,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to update order status',
                error.response?.status || 500,
            );
        }
    }

    // Quality Verification
    async requestQualityCheck(listingId: string) {
        try {
            const response = await this.client.post(`/listings/${listingId}/quality-check`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to request quality check',
                error.response?.status || 500,
            );
        }
    }

    async getQualityReport(listingId: string) {
        try {
            const response = await this.client.get(`/listings/${listingId}/quality-report`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch quality report',
                error.response?.status || 500,
            );
        }
    }

    // Logistics
    async getDeliveryOptions(listingId: string, destination: string) {
        try {
            const response = await this.client.get(`/listings/${listingId}/delivery-options`, {
                params: { destination },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch delivery options',
                error.response?.status || 500,
            );
        }
    }

    async trackDelivery(orderId: string) {
        try {
            const response = await this.client.get(`/orders/${orderId}/tracking`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to track delivery',
                error.response?.status || 500,
            );
        }
    }

    // Market Prices
    async getMarketPrices(product?: string, location?: string) {
        try {
            const response = await this.client.get('/market/prices', {
                params: { product, location },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch market prices',
                error.response?.status || 500,
            );
        }
    }

    async getPriceTrends(product: string, period?: string) {
        try {
            const response = await this.client.get('/market/trends', {
                params: { product, period },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch price trends',
                error.response?.status || 500,
            );
        }
    }

    // Reviews
    async submitReview(
        orderId: string,
        reviewerId: string,
        rating: number,
        comment?: string,
    ) {
        try {
            const response = await this.client.post(`/orders/${orderId}/reviews`, {
                reviewerId,
                rating,
                comment,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to submit review',
                error.response?.status || 500,
            );
        }
    }

    async getFarmerReviews(farmerId: string) {
        try {
            const response = await this.client.get(`/farmers/${farmerId}/reviews`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch reviews',
                error.response?.status || 500,
            );
        }
    }
}