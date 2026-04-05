import { ConfigService } from '@nestjs/config';
import { RedisService } from '../../../database/redis.service';
export interface AlocOption {
    a: string;
    b: string;
    c: string;
    d: string;
}
export interface AlocQuestion {
    id: number;
    question: string;
    option: AlocOption;
    answer: string;
    solution?: string;
    image?: string | null;
    subject: string;
    year?: number | null;
    examtype?: string;
}
export interface AlocSubjectResponse {
    status: boolean;
    message: string;
    data: AlocQuestion[];
    availableYears?: number[];
}
export interface AlocQuestionResponse {
    status: boolean;
    message: string;
    data: AlocQuestion;
}
export interface AlocSubjectsResponse {
    status: boolean;
    message: string;
    data: string[];
}
export interface NormalizedQuestion {
    alocId: string;
    question: string;
    options: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    answer: string;
    explanation: string | null;
    imageUrl: string | null;
    subject: string;
    year: number | null;
    examType: string;
}
export declare const ALOC_EXAM_MAP: Record<string, string>;
export declare const JAMB_SUBJECTS: string[];
export declare const WAEC_SUBJECTS: string[];
export declare class AlocService {
    private readonly config;
    private readonly redis;
    private readonly logger;
    private readonly baseUrl;
    private readonly apiToken;
    private readonly CACHE_TTL;
    private readonly SUBJECTS_CACHE_TTL;
    constructor(config: ConfigService, redis: RedisService);
    fetchQuestionsForSession(params: {
        examType: string;
        subject: string;
        year?: number;
        limit?: number;
    }): Promise<NormalizedQuestion[]>;
    fetchMultiSubjectExam(params: {
        examType: string;
        subjects: string[];
        questionsPerSubject?: number;
        year?: number;
    }): Promise<Record<string, NormalizedQuestion[]>>;
    fetchQuestionById(alocId: string | number): Promise<NormalizedQuestion | null>;
    getSubjectsForExam(examType: string): Promise<string[]>;
    getAvailableYears(examType: string, subject: string): Promise<number[]>;
    private normalize;
    private buildUrl;
    private fetchWithRetry;
    private shuffleAndSlice;
}
