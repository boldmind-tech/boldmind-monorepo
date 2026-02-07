
// SERVICES/api-gateway/src/clients/user-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface CreateUserDto {
    id: string;
    email: string;
    fullName?: string;
    phone?: string;
    timezone?: string;
    locale?: string;
}

interface UpdateUserDto {
    fullName?: string;
    phone?: string;
    avatarUrl?: string;
    timezone?: string;
    locale?: string;
    metadata?: Record<string, any>;
}

@Injectable()
export class UserServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['USER_SERVICE_URL'] || 'http://127.0.0.1:4001/api',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 5000,
        });
    }

    async createUser(data: CreateUserDto) {
        try {
            const response = await this.client.post('/users', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create user',
                error.response?.status || 500,
            );
        }
    }

    async getUserById(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'User not found',
                error.response?.status || 404,
            );
        }
    }

    async updateUser(userId: string, data: UpdateUserDto) {
        try {
            const response = await this.client.patch(`/users/${userId}`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to update user',
                error.response?.status || 500,
            );
        }
    }

    async deleteUser(userId: string) {
        try {
            const response = await this.client.delete(`/users/${userId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to delete user',
                error.response?.status || 500,
            );
        }
    }

    async getUserProfiles(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/profiles`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch profiles',
                error.response?.status || 500,
            );
        }
    }

    async createProfile(userId: string, data: any) {
        try {
            const response = await this.client.post(`/users/${userId}/profiles`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create profile',
                error.response?.status || 500,
            );
        }
    }

    async updateProfile(userId: string, productSlug: string, data: any) {
        try {
            const response = await this.client.patch(
                `/users/${userId}/profiles/${productSlug}`,
                data,
            );
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to update profile',
                error.response?.status || 500,
            );
        }
    }
}