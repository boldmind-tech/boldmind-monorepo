// SERVICES/api-gateway/src/clients/educenter-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface CreateCourseDto {
    title: string;
    description?: string;
    price?: number;
    category?: string;
}

interface UpdateCourseDto {
    title?: string;
    description?: string;
    price?: number;
    status?: 'draft' | 'published' | 'archived';
}

interface ExamAttemptDto {
    examType: 'JAMB' | 'WAEC' | 'NECO';
    subject: string;
    answers: Record<string, string>;
}

@Injectable()
export class EducenterServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['EDUCENTER_SERVICE_URL'] || 'http://localhost:4003',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Courses
    async createCourse(data: CreateCourseDto) {
        try {
            const response = await this.client.post('/courses', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create course',
                error.response?.status || 500,
            );
        }
    }

    async getAllCourses(query?: { category?: string; status?: string }) {
        try {
            const response = await this.client.get('/courses', { params: query });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch courses',
                error.response?.status || 500,
            );
        }
    }

    async getCourseById(courseId: string) {
        try {
            const response = await this.client.get(`/courses/${courseId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Course not found',
                error.response?.status || 404,
            );
        }
    }

    async updateCourse(courseId: string, data: UpdateCourseDto) {
        try {
            const response = await this.client.patch(`/courses/${courseId}`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to update course',
                error.response?.status || 500,
            );
        }
    }

    async deleteCourse(courseId: string) {
        try {
            const response = await this.client.delete(`/courses/${courseId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to delete course',
                error.response?.status || 500,
            );
        }
    }

    // Exam Prep
    async getPastQuestions(examType: string, subject?: string, year?: number) {
        try {
            const response = await this.client.get('/exams/questions', {
                params: { examType, subject, year },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch questions',
                error.response?.status || 500,
            );
        }
    }

    async submitExamAttempt(userId: string, data: ExamAttemptDto) {
        try {
            const response = await this.client.post(`/users/${userId}/exams/attempt`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to submit exam',
                error.response?.status || 500,
            );
        }
    }

    async getUserExamProgress(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/exams/progress`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch progress',
                error.response?.status || 500,
            );
        }
    }

    // Study Materials
    async getStudyMaterials(subject?: string, type?: string) {
        try {
            const response = await this.client.get('/materials', {
                params: { subject, type },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch materials',
                error.response?.status || 500,
            );
        }
    }

    // Leaderboard
    async getLeaderboard(limit?: number) {
        try {
            const response = await this.client.get('/leaderboard', {
                params: { limit },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch leaderboard',
                error.response?.status || 500,
            );
        }
    }

    // User subscriptions
    async getUserSubscription(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/subscription`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch subscription',
                error.response?.status || 500,
            );
        }
    }

    async updateUserSubscription(userId: string, plan: string) {
        try {
            const response = await this.client.patch(`/users/${userId}/subscription`, { plan });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to update subscription',
                error.response?.status || 500,
            );
        }
    }
}