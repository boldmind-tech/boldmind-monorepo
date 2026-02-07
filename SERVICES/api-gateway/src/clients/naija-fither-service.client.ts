// SERVICES/api-gateway/src/clients/naija-fither-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface CreateWorkoutDto {
    title: string;
    type: 'cardio' | 'strength' | 'yoga' | 'hiit';
    duration: number;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    exercises: any[];
}

interface LogMealDto {
    mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
    foodItems: string[];
    calories?: number;
    imageUrl?: string;
}

@Injectable()
export class NaijaFitherServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['NAIJA_FITHER_SERVICE_URL'] || 'http://localhost:4024',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Workouts
    async getWorkouts(query?: { type?: string; difficulty?: string; duration?: number }) {
        try {
            const response = await this.client.get('/workouts', { params: query });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch workouts',
                error.response?.status || 500,
            );
        }
    }

    async createWorkout(data: CreateWorkoutDto) {
        try {
            const response = await this.client.post('/workouts', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create workout',
                error.response?.status || 500,
            );
        }
    }

    async getWorkoutById(workoutId: string) {
        try {
            const response = await this.client.get(`/workouts/${workoutId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Workout not found',
                error.response?.status || 404,
            );
        }
    }

    // Meal Plans
    async getMealPlans(query?: { calories?: number; dietType?: string }) {
        try {
            const response = await this.client.get('/meals/plans', { params: query });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch meal plans',
                error.response?.status || 500,
            );
        }
    }

    async searchNigerianFoods(query: string) {
        try {
            const response = await this.client.get('/meals/foods/search', {
                params: { q: query },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Food search failed',
                error.response?.status || 500,
            );
        }
    }

    async getFoodDetails(foodId: string) {
        try {
            const response = await this.client.get(`/meals/foods/${foodId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Food not found',
                error.response?.status || 404,
            );
        }
    }

    // User Progress
    async logWorkout(userId: string, workoutId: string, data: { duration: number; completed: boolean }) {
        try {
            const response = await this.client.post(`/users/${userId}/workouts`, {
                workoutId,
                ...data,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to log workout',
                error.response?.status || 500,
            );
        }
    }

    async logMeal(userId: string, data: LogMealDto) {
        try {
            const response = await this.client.post(`/users/${userId}/meals`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to log meal',
                error.response?.status || 500,
            );
        }
    }

    async getUserProgress(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/progress`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch progress',
                error.response?.status || 500,
            );
        }
    }

    async updateUserGoals(userId: string, goals: any) {
        try {
            const response = await this.client.patch(`/users/${userId}/goals`, goals);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to update goals',
                error.response?.status || 500,
            );
        }
    }

    // Challenges
    async getActiveChallenges() {
        try {
            const response = await this.client.get('/challenges/active');
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch challenges',
                error.response?.status || 500,
            );
        }
    }

    async joinChallenge(userId: string, challengeId: string) {
        try {
            const response = await this.client.post(`/challenges/${challengeId}/join`, {
                userId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to join challenge',
                error.response?.status || 500,
            );
        }
    }

    // AI Wellness Coach
    async getAIRecommendation(userId: string, query: string) {
        try {
            const response = await this.client.post(`/users/${userId}/ai-coach`, {
                query,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'AI coach unavailable',
                error.response?.status || 500,
            );
        }
    }

    // Community
    async getCommunityPosts(category?: string) {
        try {
            const response = await this.client.get('/community/posts', {
                params: { category },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch community posts',
                error.response?.status || 500,
            );
        }
    }

    async createCommunityPost(userId: string, data: { title: string; content: string; category: string }) {
        try {
            const response = await this.client.post('/community/posts', {
                ...data,
                userId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create post',
                error.response?.status || 500,
            );
        }
    }
}