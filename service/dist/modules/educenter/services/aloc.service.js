"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AlocService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlocService = exports.WAEC_SUBJECTS = exports.JAMB_SUBJECTS = exports.ALOC_EXAM_MAP = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const redis_service_1 = require("../../../database/redis.service");
exports.ALOC_EXAM_MAP = {
    JAMB: 'utme',
    WAEC: 'waec',
    NECO: 'neco',
    GCE: 'waec-november',
    POST_UTME: 'post-utme',
};
exports.JAMB_SUBJECTS = [
    'Mathematics', 'English Language', 'Physics', 'Chemistry', 'Biology',
    'Economics', 'Government', 'Literature in English', 'Geography',
    'Agricultural Science', 'Commerce', 'Accounting', 'Christian Religious Studies',
    'Islamic Religious Studies', 'Yoruba', 'Igbo', 'Hausa', 'History',
    'Civic Education', 'Computer Studies',
];
exports.WAEC_SUBJECTS = [
    ...exports.JAMB_SUBJECTS,
    'Further Mathematics', 'Technical Drawing', 'Food and Nutrition',
    'Health Science', 'Home Economics',
];
let AlocService = AlocService_1 = class AlocService {
    constructor(config, redis) {
        this.config = config;
        this.redis = redis;
        this.logger = new common_1.Logger(AlocService_1.name);
        this.CACHE_TTL = 3600;
        this.SUBJECTS_CACHE_TTL = 86400;
        this.baseUrl = 'https://questions.aloc.com.ng/api/v2';
        this.apiToken = this.config.getOrThrow('ALOC_API_TOKEN');
    }
    async fetchQuestionsForSession(params) {
        const { examType, subject, year, limit = 40 } = params;
        const alocExam = exports.ALOC_EXAM_MAP[examType] ?? 'utme';
        const cacheKey = `aloc:questions:${alocExam}:${subject.toLowerCase().replace(/\s+/g, '-')}:${year ?? 'random'}`;
        const cached = await this.redis.get(cacheKey);
        if (cached) {
            const all = JSON.parse(cached);
            return this.shuffleAndSlice(all, limit);
        }
        try {
            const url = this.buildUrl('/q', { subject, type: alocExam, ...(year ? { year } : {}) });
            const response = await this.fetchWithRetry(url);
            if (!response.status || !Array.isArray(response.data)) {
                throw new common_1.ServiceUnavailableException('ALOC API returned invalid response');
            }
            const normalized = response.data.map((q) => this.normalize(q, examType));
            await this.redis.setex(cacheKey, this.CACHE_TTL, JSON.stringify(normalized));
            return this.shuffleAndSlice(normalized, limit);
        }
        catch (err) {
            this.logger.error(`ALOC fetch failed for ${examType}/${subject}`, err);
            throw new common_1.ServiceUnavailableException('Question bank is temporarily unavailable. Please try again in a moment.');
        }
    }
    async fetchMultiSubjectExam(params) {
        const { subjects, questionsPerSubject = 40 } = params;
        const results = await Promise.allSettled(subjects.map((subject) => this.fetchQuestionsForSession({
            examType: params.examType,
            subject,
            year: params.year,
            limit: questionsPerSubject,
        })));
        const bySubject = {};
        for (let i = 0; i < subjects.length; i++) {
            const result = results[i];
            if (result.status === 'fulfilled') {
                bySubject[subjects[i]] = result.value;
            }
            else {
                this.logger.warn(`Failed to fetch ${subjects[i]}: ${String(result.reason)}`);
                bySubject[subjects[i]] = [];
            }
        }
        return bySubject;
    }
    async fetchQuestionById(alocId) {
        const cacheKey = `aloc:q:${alocId}`;
        const cached = await this.redis.get(cacheKey);
        if (cached)
            return JSON.parse(cached);
        try {
            const url = this.buildUrl(`/q/${alocId}`, {});
            const response = await this.fetchWithRetry(url);
            if (!response.status || !response.data)
                return null;
            const normalized = this.normalize(response.data, response.data.examtype ?? 'JAMB');
            await this.redis.setex(cacheKey, this.CACHE_TTL * 24, JSON.stringify(normalized));
            return normalized;
        }
        catch {
            return null;
        }
    }
    async getSubjectsForExam(examType) {
        const cacheKey = `aloc:subjects:${examType}`;
        const cached = await this.redis.get(cacheKey);
        if (cached)
            return JSON.parse(cached);
        const subjects = examType === 'WAEC' || examType === 'NECO' ? exports.WAEC_SUBJECTS : exports.JAMB_SUBJECTS;
        await this.redis.setex(cacheKey, this.SUBJECTS_CACHE_TTL, JSON.stringify(subjects));
        return subjects;
    }
    async getAvailableYears(examType, subject) {
        const alocExam = exports.ALOC_EXAM_MAP[examType] ?? 'utme';
        const cacheKey = `aloc:years:${alocExam}:${subject}`;
        const cached = await this.redis.get(cacheKey);
        if (cached)
            return JSON.parse(cached);
        const years = Array.from({ length: 24 }, (_, i) => 2023 - i);
        await this.redis.setex(cacheKey, this.SUBJECTS_CACHE_TTL, JSON.stringify(years));
        return years;
    }
    normalize(q, examType) {
        const answerMap = { a: 'A', b: 'B', c: 'C', d: 'D' };
        return {
            alocId: String(q.id),
            question: q.question ?? '',
            options: {
                A: q.option?.a ?? '',
                B: q.option?.b ?? '',
                C: q.option?.c ?? '',
                D: q.option?.d ?? '',
            },
            answer: answerMap[q.answer?.toLowerCase()] ?? 'A',
            explanation: q.solution ?? null,
            imageUrl: q.image ?? null,
            subject: q.subject ?? '',
            year: q.year ?? null,
            examType: examType.toUpperCase(),
        };
    }
    buildUrl(path, params) {
        const url = new URL(`${this.baseUrl}${path}`);
        url.searchParams.set('token', this.apiToken);
        for (const [key, val] of Object.entries(params)) {
            if (val !== undefined)
                url.searchParams.set(key, String(val));
        }
        return url.toString();
    }
    async fetchWithRetry(url, retries = 3) {
        for (let attempt = 1; attempt <= retries; attempt++) {
            try {
                const res = await fetch(url, {
                    headers: {
                        'Accept': 'application/json',
                        'AccessToken': this.apiToken,
                    },
                    signal: AbortSignal.timeout(10_000),
                });
                if (!res.ok) {
                    throw new Error(`ALOC API error: ${res.status} ${res.statusText}`);
                }
                return res.json();
            }
            catch (err) {
                if (attempt === retries)
                    throw err;
                this.logger.warn(`ALOC retry ${attempt}/${retries}: ${String(err)}`);
                await new Promise((r) => setTimeout(r, 500 * attempt));
            }
        }
        throw new Error('Max retries exceeded');
    }
    shuffleAndSlice(arr, limit) {
        const shuffled = [...arr].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(limit, shuffled.length));
    }
};
exports.AlocService = AlocService;
exports.AlocService = AlocService = AlocService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        redis_service_1.RedisService])
], AlocService);
//# sourceMappingURL=aloc.service.js.map