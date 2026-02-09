// SERVICES/educenter-service/src\providers\aloc.provider.ts

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

interface AlocMetadata {
    year?: string;
    examyear?: string;
    subject?: string;
    [key: string]: any;
}

// Predefined list of subjects available for Nigerian exams
const NIGERIAN_EXAM_SUBJECTS = [
    'Mathematics',
    'English',
    'Physics',
    'Chemistry',
    'Biology',
    'Economics',
    'Commerce',
    'Accounting',
    'Government',
    'Literature',
    'Geography',
    'CRK', // Christian Religious Knowledge
    'IRK', // Islamic Religious Knowledge
    'Civic Education',
    'Agricultural Science',
    'Further Mathematics',
    'Computer Studies',
    'French',
    'Yoruba',
    'Igbo',
    'Hausa',
];

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

    /**
     * Maps our internal exam type names to ALOC API exam type names
     */
    private mapExamType(examType: 'jamb' | 'waec' | 'neco'): string {
        const mapping: Record<string, string> = {
            'jamb': 'utme',
            'waec': 'wassce',
            'neco': 'neco',
        };
        return mapping[examType] || examType;
    }

    async getQuestions(params: {
        subject: string;
        examType: 'jamb' | 'waec' | 'neco';
        year?: string;
        limit?: number;
    }): Promise<AlocQuestion[]> {
        try {
            const alocExamType = this.mapExamType(params.examType);
            const queryParams: any = {
                subject: params.subject.toLowerCase(),
                type: alocExamType,
            };

            if (params.year) {
                queryParams.year = params.year;
            }

            // Use /q endpoint to get questions
            // If limit is specified, use /q/{limit} format
            const endpoint = params.limit ? `/q/${params.limit}` : '/q';

            console.log('[ALOC] Requesting questions:', { endpoint, queryParams });

            const response = await this.client.get(endpoint, {
                params: queryParams,
            });

            console.log('[ALOC] Questions fetched:', response.data?.data?.length || 0);

            return response.data.data || [];
        } catch (error: any) {
            console.error('[ALOC] API Error:', {
                message: error.message,
                status: error.response?.status,
                data: error.response?.data,
            });
            throw new Error('Failed to fetch questions from ALOC');
        }
    }

    async getSubjects(_examType: 'jamb' | 'waec' | 'neco'): Promise<string[]> {
        try {
            // Try to get subjects from the API endpoint
            const response = await this.client.get('/q-subjects');

            if (response.data?.data && Array.isArray(response.data.data) && response.data.data.length > 0) {
                return response.data.data;
            }
        } catch (error: any) {
            console.warn('[ALOC] API /q-subjects failed, using fallback list');
        }

        // Fallback to predefined list
        return NIGERIAN_EXAM_SUBJECTS;
    }

    async getYears(examType: 'jamb' | 'waec' | 'neco'): Promise<string[]> {
        try {
            // Use the /m (metadata) endpoint with a sample subject to get available years
            const alocExamType = this.mapExamType(examType);

            const response = await this.client.get('/m', {
                params: {
                    subject: 'mathematics', // Use a common subject to get metadata
                    type: alocExamType,
                },
            });

            // Extract unique years from the metadata response
            const data: AlocMetadata[] = response.data.data || [];
            const years = [...new Set(data.map((item) => item.year || item.examyear).filter((year): year is string => Boolean(year)))];

            return years.sort((a, b) => parseInt(b) - parseInt(a)); // Sort descending
        } catch (error: any) {
            console.error('[ALOC] Error fetching years:', error.response?.data || error.message);
            // Return a default range of years if API fails
            const currentYear = new Date().getFullYear();
            const years: string[] = [];
            for (let year = currentYear; year >= 2000; year--) {
                years.push(year.toString());
            }
            return years;
        }
    }

    /**
     * Get available subjects for a specific year
     */
    async getSubjectsForYear(year: string): Promise<string[]> {
        try {
            const response = await this.client.get(`/metrics/subjects-available-for/${year}`);
            return response.data.data || [];
        } catch (error: any) {
            console.error('[ALOC] Error fetching subjects for year:', error.response?.data || error.message);
            return NIGERIAN_EXAM_SUBJECTS;
        }
    }

    /**
     * Get available years for a specific subject
     */
    async getYearsForSubject(subject: string): Promise<string[]> {
        try {
            const response = await this.client.get(`/metrics/questions-available-for/${subject.toLowerCase()}`);
            const data: AlocMetadata[] = response.data.data || [];
            const years = [...new Set(data.map((item) => item.year || item.examyear).filter((year): year is string => Boolean(year)))];
            return years.sort((a, b) => parseInt(b) - parseInt(a));
        } catch (error: any) {
            console.error('[ALOC] Error fetching years for subject:', error.response?.data || error.message);
            return [];
        }
    }

    /**
     * Get available years for comprehension questions in a subject
     */
    async getComprehensionYears(subject: string): Promise<string[]> {
        try {
            const response = await this.client.get('/q-comprehension-years', {
                params: { subject: subject.toLowerCase() },
            });
            return response.data.data || [];
        } catch (error: any) {
            console.error('[ALOC] Error fetching comprehension years:', error.response?.data || error.message);
            return [];
        }
    }

    /**
     * Get top/featured questions
     */
    async getTopQuestions(limit: number = 10): Promise<AlocQuestion[]> {
        try {
            const response = await this.client.get('/top-q', {
                params: { limit },
            });
            return response.data.data || [];
        } catch (error: any) {
            console.error('[ALOC] Error fetching top questions:', error.response?.data || error.message);
            return [];
        }
    }

    /**
     * Get question by ID
     */
    async getQuestionById(id: string, subject: string): Promise<AlocQuestion | null> {
        try {
            const response = await this.client.get(`/q-by-id/${id}`, {
                params: { subject: subject.toLowerCase() },
            });
            return response.data.data || null;
        } catch (error: any) {
            console.error('[ALOC] Error fetching question by ID:', error.response?.data || error.message);
            return null;
        }
    }

    /**
     * Get questions with comprehension passages
     */
    async getQuestionsWithComprehension(params: {
        subject: string;
        year?: string;
        limit?: number;
        random?: boolean;
    }): Promise<AlocQuestion[]> {
        try {
            const queryParams: any = {
                subject: params.subject.toLowerCase(),
                withComprehension: true,
                random: params.random !== undefined ? params.random : false,
            };

            if (params.year) {
                queryParams.year = params.year;
            }

            const endpoint = params.limit ? `/m/${params.limit}` : '/m';

            const response = await this.client.get(endpoint, {
                params: queryParams,
            });

            return response.data.data || [];
        } catch (error: any) {
            console.error('[ALOC] Error fetching comprehension questions:', error.response?.data || error.message);
            return [];
        }
    }

    /**
     * Get questions from multiple subjects
     */
    async getMultiSubjectQuestions(params: {
        subjects: string[];
        questionsPerSubject: number;
    }): Promise<AlocQuestion[]> {
        try {
            const queryParams: any = {
                number: params.questionsPerSubject,
            };

            // Add subjects to query params (subject1, subject2, etc.)
            params.subjects.forEach((subject, index) => {
                queryParams[`subject${index + 1}`] = subject.toLowerCase();
            });

            const response = await this.client.get('/q-subjects-group', {
                params: queryParams,
            });

            return response.data.data || [];
        } catch (error: any) {
            console.error('[ALOC] Error fetching multi-subject questions:', error.response?.data || error.message);
            return [];
        }
    }
}