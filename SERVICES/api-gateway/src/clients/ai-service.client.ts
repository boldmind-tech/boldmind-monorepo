// SERVICES/api-gateway/src/clients/ai-service.client.ts

import { Injectable, HttpException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

interface GenerateTextDto {
    prompt: string;
    model?: string;
    maxTokens?: number;
    temperature?: number;
}

interface GenerateImageDto {
    prompt: string;
    size?: '256x256' | '512x512' | '1024x1024';
    style?: string;
}

interface TrainModelDto {
    name: string;
    trainingData: string;
    baseModel?: string;
}

@Injectable()
export class AiServiceClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env['AI_SERVICE_URL'] || 'http://localhost:4007',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 60000, // Longer timeout for AI operations
        });
    }

    // Text Generation
    async generateText(data: GenerateTextDto) {
        try {
            const response = await this.client.post('/generate/text', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Text generation failed',
                error.response?.status || 500,
            );
        }
    }

    async generateChatCompletion(messages: any[], model?: string) {
        try {
            const response = await this.client.post('/generate/chat', {
                messages,
                model,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Chat completion failed',
                error.response?.status || 500,
            );
        }
    }

    // Image Generation
    async generateImage(data: GenerateImageDto) {
        try {
            const response = await this.client.post('/generate/image', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Image generation failed',
                error.response?.status || 500,
            );
        }
    }

    async editImage(imageData: string, prompt: string) {
        try {
            const response = await this.client.post('/generate/image/edit', {
                imageData,
                prompt,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Image edit failed',
                error.response?.status || 500,
            );
        }
    }

    // Embeddings
    async createEmbedding(text: string, model?: string) {
        try {
            const response = await this.client.post('/embeddings', {
                text,
                model,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Embedding creation failed',
                error.response?.status || 500,
            );
        }
    }

    // Fine-tuning
    async trainCustomModel(data: TrainModelDto) {
        try {
            const response = await this.client.post('/models/train', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Model training failed',
                error.response?.status || 500,
            );
        }
    }

    async getTrainingStatus(jobId: string) {
        try {
            const response = await this.client.get(`/models/train/${jobId}`);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch training status',
                error.response?.status || 500,
            );
        }
    }

    // Prompt Management
    async createPromptTemplate(data: { name: string; template: string; variables?: string[] }) {
        try {
            const response = await this.client.post('/prompts', data);
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to create prompt template',
                error.response?.status || 500,
            );
        }
    }

    async getPromptTemplates() {
        try {
            const response = await this.client.get('/prompts');
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Failed to fetch prompt templates',
                error.response?.status || 500,
            );
        }
    }

    async executePrompt(templateId: string, variables: Record<string, string>) {
        try {
            const response = await this.client.post(`/prompts/${templateId}/execute`, {
                variables,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Prompt execution failed',
                error.response?.status || 500,
            );
        }
    }

    // Content Moderation
    async moderateContent(text: string) {
        try {
            const response = await this.client.post('/moderate', { text });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Content moderation failed',
                error.response?.status || 500,
            );
        }
    }

    // Sentiment Analysis
    async analyzeSentiment(text: string) {
        try {
            const response = await this.client.post('/analyze/sentiment', { text });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Sentiment analysis failed',
                error.response?.status || 500,
            );
        }
    }

    // Translation
    async translateText(text: string, targetLanguage: string, sourceLanguage?: string) {
        try {
            const response = await this.client.post('/translate', {
                text,
                targetLanguage,
                sourceLanguage,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Translation failed',
                error.response?.status || 500,
            );
        }
    }

    // Summarization
    async summarizeText(text: string, maxLength?: number) {
        try {
            const response = await this.client.post('/summarize', {
                text,
                maxLength,
            });
            return response.data;
        } catch (error: any) {
            throw new HttpException(
                error.response?.data?.message || 'Summarization failed',
                error.response?.status || 500,
            );
        }
    }

    // Health Check
    async healthCheck() {
        try {
            const response = await this.client.get('/health');
            return response.data;
        } catch (error: any) {
            return { status: 'error', message: error.message };
        }
    }
}