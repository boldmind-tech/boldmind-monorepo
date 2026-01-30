// SERVICES/educenter-service/src/providers/aloc.provider.ts

import axios, { AxiosInstance } from 'axios';

interface AlocQuestion {
    id: string;
    question: string;
    option: {
        a: string;
        b: string;
        c: string;
        d: string;
    };
    answer: string;
    section: string;
    image?: string;
    solution?: string;
    examtype: string;
    examyear: string;
}

export class AlocProvider {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: 'https://questions.aloc.com.ng/api/v2',
            headers: {
                'Content-Type': 'application/json',
                'AccessToken': process.env.ALOC_API_KEY || '',
            },
        });
    }

    async getQuestions(params: {
        subject: string;
        examType: 'jamb' | 'waec' | 'neco';
        year?: string;
        limit?: number;
    }): Promise<AlocQuestion[]> {
        try {
            const response = await this.client.get('/questions', {
                params: {
                    subject: params.subject,
                    exam_type: params.examType,
                    exam_year: params.year,
                    limit: params.limit || 50,
                },
            });

            return response.data.data || [];
        } catch (error: any) {
            console.error('ALOC API Error:', error.response?.data || error.message);
            throw new Error('Failed to fetch questions from ALOC');
        }
    }

    async getSubjects(examType: 'jamb' | 'waec' | 'neco'): Promise<string[]> {
        try {
            const response = await this.client.get('/subjects', {
                params: { exam_type: examType },
            });

            return response.data.data || [];
        } catch (error: any) {
            console.error('ALOC API Error:', error.response?.data || error.message);
            return [];
        }
    }

    async getYears(examType: 'jamb' | 'waec' | 'neco'): Promise<string[]> {
        try {
            const response = await this.client.get('/years', {
                params: { exam_type: examType },
            });

            return response.data.data || [];
        } catch (error: any) {
            console.error('ALOC API Error:', error.response?.data || error.message);
            return [];
        }
    }
}