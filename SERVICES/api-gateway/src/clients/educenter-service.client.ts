// SERVICES/api-gateway/src/clients/educenter-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface CreateCourseDto {
    title: string;
    description?: string;
    price?: number;
    category?: string;
    level?: string;
    isPublished?: boolean;
}

interface UpdateCourseDto {
    title?: string;
    description?: string;
    price?: number;
    category?: string;
    level?: string;
    isPublished?: boolean;
}

interface ExamAttemptDto {
    examType: 'JAMB' | 'WAEC' | 'NECO';
    subject: string;
    answers: Record<string, string>;
}

interface StartQuizDto {
    userId: string;
    examType: string;
    subject: string;
    numberOfQuestions?: number;
}

interface SubmitQuizDto {
    answers: Record<string, string>;
}

interface EnrollCourseDto {
    userId: string;
}

interface UpdateEnrollmentProgressDto {
    progressPercentage?: number;
    completedAt?: string;
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

    // ==================== Courses ====================

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

    async getAllCourses(query?: { category?: string; level?: string; isPublished?: boolean }) {
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

    async enrollInCourse(courseId: string, data: EnrollCourseDto) {
        try {
            const response = await this.client.post(`/courses/${courseId}/enroll`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to enroll in course',
                error.response?.status || 500,
            );
        }
    }

    async updateEnrollmentProgress(enrollmentId: string, data: UpdateEnrollmentProgressDto) {
        try {
            const response = await this.client.patch(`/courses/enrollments/${enrollmentId}/progress`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to update enrollment progress',
                error.response?.status || 500,
            );
        }
    }

    async getUserEnrollments(userId: string) {
        try {
            const response = await this.client.get(`/courses/user/${userId}/enrollments`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch user enrollments',
                error.response?.status || 500,
            );
        }
    }

    // ==================== Questions ====================

    async getQuestions(query: { subject: string; examType: string; year?: string; limit?: number }) {
        try {
            const response = await this.client.get('/questions', { params: query });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch questions',
                error.response?.status || 500,
            );
        }
    }

    async getSubjects(examType: string) {
        try {
            const response = await this.client.get('/questions/subjects', {
                params: { examType }
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch subjects',
                error.response?.status || 500,
            );
        }
    }

    async getYears(examType: string) {
        try {
            const response = await this.client.get('/questions/years', {
                params: { examType }
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch years',
                error.response?.status || 500,
            );
        }
    }

    async getSubjectsForYear(year: string) {
        try {
            const response = await this.client.get(`/questions/subjects-for-year/${year}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch subjects for year',
                error.response?.status || 500,
            );
        }
    }

    async getYearsForSubject(subject: string) {
        try {
            const response = await this.client.get(`/questions/years-for-subject/${subject}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch years for subject',
                error.response?.status || 500,
            );
        }
    }

    async getComprehensionYears(subject: string) {
        try {
            const response = await this.client.get(`/questions/comprehension-years/${subject}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch comprehension years',
                error.response?.status || 500,
            );
        }
    }

    async getTopQuestions(limit?: number) {
        try {
            const response = await this.client.get('/questions/top', {
                params: { limit }
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch top questions',
                error.response?.status || 500,
            );
        }
    }

    async getQuestionDetail(id: string, subject: string) {
        try {
            const response = await this.client.get(`/questions/detail/${id}`, {
                params: { subject }
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch question detail',
                error.response?.status || 500,
            );
        }
    }

    async getComprehensionQuestions(query: {
        subject: string;
        year?: string;
        limit?: number;
        random?: boolean;
    }) {
        try {
            const response = await this.client.get('/questions/comprehension', {
                params: query
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch comprehension questions',
                error.response?.status || 500,
            );
        }
    }

    async getMultiSubjectQuestions(query: {
        subjects: string[];
        questionsPerSubject?: number;
    }) {
        try {
            const response = await this.client.get('/questions/multi-subject', {
                params: query
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch multi-subject questions',
                error.response?.status || 500,
            );
        }
    }

    // ==================== Quizzes ====================

    async startQuiz(data: StartQuizDto) {
        try {
            const response = await this.client.post('/quizzes/start', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to start quiz',
                error.response?.status || 500,
            );
        }
    }

    async submitQuiz(quizId: string, data: SubmitQuizDto) {
        try {
            const response = await this.client.post(`/quizzes/${quizId}/submit`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to submit quiz',
                error.response?.status || 500,
            );
        }
    }

    async getQuizById(quizId: string) {
        try {
            const response = await this.client.get(`/quizzes/${quizId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Quiz not found',
                error.response?.status || 404,
            );
        }
    }

    async getUserQuizzes(userId: string) {
        try {
            const response = await this.client.get(`/quizzes/user/${userId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch user quizzes',
                error.response?.status || 500,
            );
        }
    }

    // ==================== Leaderboard ====================

    async getGlobalLeaderboard(query?: { examType?: string; subject?: string }) {
        try {
            const response = await this.client.get('/leaderboard/global', {
                params: query,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch leaderboard',
                error.response?.status || 500,
            );
        }
    }

    async getUserRank(userId: string, query?: { examType?: string; subject?: string }) {
        try {
            const response = await this.client.get(`/leaderboard/user/${userId}/rank`, {
                params: query,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch user rank',
                error.response?.status || 500,
            );
        }
    }

    // ==================== Notes ====================

    async getNotes(examType: string, subject: string, userId: string) {
        try {
            const response = await this.client.get(`/notes/${examType}/${subject}`, {
                params: { userId },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch notes',
                error.response?.status || 500,
            );
        }
    }

    async downloadNote(noteId: string, userId: string) {
        try {
            const response = await this.client.get(`/notes/download/${noteId}`, {
                params: { userId },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to download note',
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

    // ==================== Study Materials ====================

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

    // ==================== User Subscriptions ====================

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