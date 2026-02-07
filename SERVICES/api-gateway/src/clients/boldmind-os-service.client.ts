// SERVICES/api-gateway/src/clients/boldmind-os-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface CreateNoteDto {
    title?: string;
    content: string;
    type: 'text' | 'voice' | 'image' | 'link';
    tags?: string[];
    metadata?: any;
}

interface CreateTaskDto {
    title: string;
    description?: string;
    priority: 'low' | 'medium' | 'high';
    dueDate?: string;
    tags?: string[];
}

@Injectable()
export class BoldmindOsServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['BOLDMIND_OS_SERVICE_URL'] || 'http://localhost:4025',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    // Notes & Knowledge Capture
    async createNote(userId: string, data: CreateNoteDto) {
        try {
            const response = await this.client.post(`/users/${userId}/notes`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create note',
                error.response?.status || 500,
            );
        }
    }

    async getUserNotes(userId: string, query?: { tag?: string; type?: string }) {
        try {
            const response = await this.client.get(`/users/${userId}/notes`, {
                params: query,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch notes',
                error.response?.status || 500,
            );
        }
    }

    async getNoteById(userId: string, noteId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/notes/${noteId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Note not found',
                error.response?.status || 404,
            );
        }
    }

    async updateNote(userId: string, noteId: string, data: Partial<CreateNoteDto>) {
        try {
            const response = await this.client.patch(`/users/${userId}/notes/${noteId}`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to update note',
                error.response?.status || 500,
            );
        }
    }

    async deleteNote(userId: string, noteId: string) {
        try {
            const response = await this.client.delete(`/users/${userId}/notes/${noteId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to delete note',
                error.response?.status || 500,
            );
        }
    }

    // Tasks & Focus
    async createTask(userId: string, data: CreateTaskDto) {
        try {
            const response = await this.client.post(`/users/${userId}/tasks`, data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create task',
                error.response?.status || 500,
            );
        }
    }

    async getUserTasks(userId: string, status?: 'pending' | 'in-progress' | 'completed') {
        try {
            const response = await this.client.get(`/users/${userId}/tasks`, {
                params: { status },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch tasks',
                error.response?.status || 500,
            );
        }
    }

    async updateTaskStatus(userId: string, taskId: string, status: string) {
        try {
            const response = await this.client.patch(`/users/${userId}/tasks/${taskId}`, {
                status,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to update task',
                error.response?.status || 500,
            );
        }
    }

    // Pomodoro Timer
    async startPomodoro(userId: string, duration?: number) {
        try {
            const response = await this.client.post(`/users/${userId}/pomodoro/start`, {
                duration,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to start pomodoro',
                error.response?.status || 500,
            );
        }
    }

    async stopPomodoro(userId: string, sessionId: string) {
        try {
            const response = await this.client.post(`/users/${userId}/pomodoro/${sessionId}/stop`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to stop pomodoro',
                error.response?.status || 500,
            );
        }
    }

    async getPomodoroStats(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/pomodoro/stats`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch pomodoro stats',
                error.response?.status || 500,
            );
        }
    }

    // Knowledge Graph
    async getKnowledgeGraph(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/knowledge-graph`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch knowledge graph',
                error.response?.status || 500,
            );
        }
    }

    async createKnowledgeConnection(userId: string, sourceId: string, targetId: string, relation: string) {
        try {
            const response = await this.client.post(`/users/${userId}/knowledge-graph/connections`, {
                sourceId,
                targetId,
                relation,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create connection',
                error.response?.status || 500,
            );
        }
    }

    // Content Pipeline
    async processContentPipeline(userId: string, contentId: string) {
        try {
            const response = await this.client.post(`/users/${userId}/pipeline/process`, {
                contentId,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Pipeline processing failed',
                error.response?.status || 500,
            );
        }
    }

    async getPipelineStatus(userId: string) {
        try {
            const response = await this.client.get(`/users/${userId}/pipeline/status`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch pipeline status',
                error.response?.status || 500,
            );
        }
    }

    // Analytics
    async getProductivityAnalytics(userId: string, period?: string) {
        try {
            const response = await this.client.get(`/users/${userId}/analytics`, {
                params: { period },
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch analytics',
                error.response?.status || 500,
            );
        }
    }
}