import { PrismaService } from '../../database/prisma.service';
import { RedisService } from '../../database/redis.service';
import { AiService } from '../ai/ai.service';
import { AlocService } from './services/aloc.service';
import { StartCbtDto, SubmitSessionDto, CreateCourseDto, UpdateProgressDto } from './dto/educenter.dto';
export declare class EduCenterService {
    private readonly prisma;
    private readonly redis;
    private readonly ai;
    private readonly aloc;
    private readonly logger;
    constructor(prisma: PrismaService, redis: RedisService, ai: AiService, aloc: AlocService);
    getSubjectsForExam(examType: string): Promise<{
        examType: string;
        subjects: string[];
        availableYears: number[];
    }>;
    startCbtSession(userId: string, dto: StartCbtDto): Promise<{
        sessionId: string;
        totalQuestions: number;
        timeLimitSecs: number;
        examType: string;
        subject: string;
        year: number;
        questions: {
            alocId: string;
            question: string;
            options: {
                A: string;
                B: string;
                C: string;
                D: string;
            };
            imageUrl: string;
            subject: string;
            year: number;
        }[];
    }>;
    startFullMockExam(userId: string, dto: {
        examType: string;
        subjects: string[];
        year?: number;
    }): Promise<{
        sessionId: string;
        totalQuestions: number;
        timeLimitSecs: number;
        examType: string;
        subjects: string[];
        subjectBreakdown: {
            [k: string]: number;
        };
        questions: {
            alocId: string;
            question: string;
            options: {
                A: string;
                B: string;
                C: string;
                D: string;
            };
            imageUrl: string;
            subject: string;
            year: number;
        }[];
    }>;
    submitSession(userId: string, sessionId: string, dto: SubmitSessionDto): Promise<{
        sessionId: string;
        score: number;
        totalQuestions: number;
        percentage: number;
        timeTakenSecs: number;
        grade: string;
        xpEarned: number;
        currentStreak: number;
        currentLevel: number;
        xpPoints: number;
        review: {
            alocId: string;
            question: string;
            options: {
                A: string;
                B: string;
                C: string;
                D: string;
            };
            yourAnswer: string;
            correctAnswer: string;
            isCorrect: boolean;
            explanation: string;
        }[];
    }>;
    abandonSession(userId: string, sessionId: string): Promise<{
        message: string;
    }>;
    getStudentDashboard(userId: string): Promise<any>;
    getSubjectAnalytics(userId: string, examType: string, subject: string): Promise<{
        subject: string;
        examType: string;
        overall: {
            totalAttempted: number;
            totalCorrect: number;
            averagePercent: number;
            weakTopics: string[];
            strongTopics: string[];
            lastAttemptAt: Date;
        };
        progression: {
            date: Date;
            percentage: number;
            score: number;
            total: number;
        }[];
        sessionsCount: number;
    }>;
    getSessionReview(userId: string, sessionId: string): Promise<{
        session: {
            id: string;
            examType: import("@prisma/client").$Enums.ExamType;
            subject: string;
            score: number;
            percentage: number;
            totalQuestions: number;
            timeTakenSecs: number;
            completedAt: Date;
        };
        answers: {
            alocId: string;
            selectedAnswer: string;
            correctAnswer: string;
            isCorrect: boolean;
            timeTakenSecs: number;
            isSkipped: boolean;
        }[];
        stats: {
            correct: number;
            wrong: number;
            skipped: number;
            averageTimePerQuestion: number;
        };
    }>;
    getLeaderboard(params: {
        scope: 'global' | 'weekly' | 'monthly';
        examType?: string;
        limit?: number;
    }): Promise<any>;
    getMyRank(userId: string, scope: 'global' | 'weekly' | 'monthly'): Promise<{
        rank: number;
        totalOnLeaderboard: number;
        scope: "global" | "monthly" | "weekly";
    }>;
    getMyStreak(userId: string): Promise<{
        level: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        currentStreak: number;
        longestStreak: number;
        totalDaysStudied: number;
        lastStudiedAt: Date | null;
        weeklyGoalDays: number;
        xpPoints: number;
        totalSessionsDone: number;
        totalQuestionsAnswered: number;
        totalCorrect: number;
    }>;
    updateWeeklyGoal(userId: string, goalDays: number): Promise<{
        level: number;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        currentStreak: number;
        longestStreak: number;
        totalDaysStudied: number;
        lastStudiedAt: Date | null;
        weeklyGoalDays: number;
        xpPoints: number;
        totalSessionsDone: number;
        totalQuestionsAnswered: number;
        totalCorrect: number;
    }>;
    listCourses(params: {
        category?: string;
        examType?: string;
        subject?: string;
        isPremium?: boolean;
        search?: string;
        page?: number;
        limit?: number;
    }): Promise<{
        courses: {
            id: string;
            subject: string;
            tags: string[];
            description: string;
            title: string;
            category: string;
            price: number;
            slug: string;
            examType: import("@prisma/client").$Enums.ExamType;
            thumbnailUrl: string;
            durationMins: number;
            instructorName: string;
            prerequisites: string[];
            totalLessons: number;
            isPremium: boolean;
            rating: number;
            enrollmentCount: number;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    getCourseBySlug(slug: string, userId?: string): Promise<{
        lessons: {
            videoUrl: string;
            isLocked: boolean;
            id: string;
            title: string;
            durationMins: number;
            sortOrder: number;
            isFree: boolean;
        }[];
        enrollment: {
            progressPercent: any;
            lastLessonId: any;
        };
        isEnrolled: boolean;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        subject: string | null;
        status: import("@prisma/client").$Enums.CourseStatus;
        tags: string[];
        description: string;
        title: string;
        category: string;
        price: number;
        slug: string;
        videoUrl: string | null;
        examType: import("@prisma/client").$Enums.ExamType | null;
        thumbnailUrl: string | null;
        durationMins: number;
        instructorName: string | null;
        prerequisites: string[];
        totalLessons: number;
        isPremium: boolean;
        instructorId: string | null;
        rating: number;
        enrollmentCount: number;
    }>;
    enrollCourse(userId: string, courseId: string): Promise<{
        message: string;
        enrollment: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            completedAt: Date | null;
            courseId: string;
            progressPercent: number;
            lastLessonId: string | null;
        };
    }>;
    updateCourseProgress(userId: string, courseId: string, dto: UpdateProgressDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        completedAt: Date | null;
        courseId: string;
        progressPercent: number;
        lastLessonId: string | null;
    }>;
    createCourse(instructorId: string, dto: CreateCourseDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        subject: string | null;
        status: import("@prisma/client").$Enums.CourseStatus;
        tags: string[];
        description: string;
        title: string;
        category: string;
        price: number;
        slug: string;
        videoUrl: string | null;
        examType: import("@prisma/client").$Enums.ExamType | null;
        thumbnailUrl: string | null;
        durationMins: number;
        instructorName: string | null;
        prerequisites: string[];
        totalLessons: number;
        isPremium: boolean;
        instructorId: string | null;
        rating: number;
        enrollmentCount: number;
    }>;
    publishCourse(courseId: string, instructorId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        subject: string | null;
        status: import("@prisma/client").$Enums.CourseStatus;
        tags: string[];
        description: string;
        title: string;
        category: string;
        price: number;
        slug: string;
        videoUrl: string | null;
        examType: import("@prisma/client").$Enums.ExamType | null;
        thumbnailUrl: string | null;
        durationMins: number;
        instructorName: string | null;
        prerequisites: string[];
        totalLessons: number;
        isPremium: boolean;
        instructorId: string | null;
        rating: number;
        enrollmentCount: number;
    }>;
    askAiTutor(userId: string, params: {
        question: string;
        subject: string;
        examType: string;
        context?: string;
    }): Promise<{
        answer: import("../ai/ai.service").AiChatResult;
        subject: string;
        examType: string;
    }>;
    generateStudyPlan(userId: string, params: {
        examType: string;
        subjects: string[];
        targetDate: string;
        studyHoursPerDay: number;
    }): Promise<{
        weeksUntilExam: number;
        weeklyPlan: unknown[];
        dailySchedule: Record<string, string>;
        tips: string[];
        milestones: unknown[];
    }>;
    getMarketingPlaybooks(userId?: string): Promise<{
        id: string;
        tags: string[];
        description: string;
        title: string;
        price: number;
        slug: string;
        thumbnailUrl: string;
        durationMins: number;
        totalLessons: number;
        isPremium: boolean;
        rating: number;
        enrollmentCount: number;
    }[]>;
    getAiToolsTraining(userId?: string): Promise<{
        id: string;
        tags: string[];
        description: string;
        title: string;
        price: number;
        slug: string;
        thumbnailUrl: string;
        durationMins: number;
        totalLessons: number;
        isPremium: boolean;
        rating: number;
        enrollmentCount: number;
    }[]>;
    getMySessions(userId: string, params: {
        examType?: string;
        subject?: string;
        page?: number;
    }): Promise<{
        sessions: {
            id: string;
            subject: string;
            completedAt: Date;
            examType: import("@prisma/client").$Enums.ExamType;
            timeTakenSecs: number;
            totalQuestions: number;
            score: number;
            percentage: number;
        }[];
        meta: {
            total: number;
            page: number;
            totalPages: number;
        };
    }>;
    private updateStudyStreak;
    private upsertSubjectPerformance;
    private calculateLevel;
    private getNextLevelXp;
    private getXpProgress;
    private calculateGrade;
    private getQuestionCount;
    private getTimeLimit;
    private getScopeDate;
    private generateCourseSlug;
}
