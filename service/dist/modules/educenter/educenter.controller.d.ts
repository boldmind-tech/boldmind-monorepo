import { EduCenterService } from './educenter.service';
import { StartCbtDto, StartFullMockDto, SubmitSessionDto, GetQuestionsDto, AiTutorDto, StudyPlanDto, CreateCourseDto, UpdateProgressDto, WeeklyGoalDto } from './dto/educenter.dto';
interface JwtUser {
    sub: string;
    role: string;
}
export declare class EduCenterController {
    private readonly eduService;
    constructor(eduService: EduCenterService);
    getSubjects(examType: string): Promise<{
        examType: string;
        subjects: string[];
        availableYears: number[];
    }>;
    previewQuestions(dto: GetQuestionsDto): Promise<{
        alocId: string;
        question: string;
        options: {
            A: string;
            B: string;
            C: string;
            D: string;
        };
        subject: string;
        year: number;
    }[]>;
    startSession(user: JwtUser, dto: StartCbtDto): Promise<{
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
    startFullMock(user: JwtUser, dto: StartFullMockDto): Promise<{
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
    submitSession(user: JwtUser, sessionId: string, dto: SubmitSessionDto): Promise<{
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
    abandonSession(user: JwtUser, sessionId: string): Promise<{
        message: string;
    }>;
    getSessionReview(user: JwtUser, sessionId: string): Promise<{
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
    getMySessions(user: JwtUser, examType?: string, subject?: string, page?: string): Promise<{
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
    getDashboard(user: JwtUser): Promise<any>;
    getSubjectAnalytics(user: JwtUser, examType: string, subject: string): Promise<{
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
    getStreak(user: JwtUser): Promise<{
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
    updateWeeklyGoal(user: JwtUser, dto: WeeklyGoalDto): Promise<{
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
    getLeaderboard(scope?: string, examType?: string, limit?: string): Promise<any>;
    getMyRank(user: JwtUser, scope?: string): Promise<{
        rank: number;
        totalOnLeaderboard: number;
        scope: "global" | "monthly" | "weekly";
    }>;
    askTutor(user: JwtUser, dto: AiTutorDto): Promise<{
        answer: import("../ai/ai.service").AiChatResult;
        subject: string;
        examType: string;
    }>;
    generateStudyPlan(user: JwtUser, dto: StudyPlanDto): Promise<{
        weeksUntilExam: number;
        weeklyPlan: unknown[];
        dailySchedule: Record<string, string>;
        tips: string[];
        milestones: unknown[];
    }>;
    listCourses(category?: string, examType?: string, subject?: string, isPremium?: string, search?: string, page?: string): Promise<{
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
    getCourse(slug: string, user?: JwtUser): Promise<{
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
    enrollCourse(user: JwtUser, courseId: string): Promise<{
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
    updateProgress(user: JwtUser, courseId: string, dto: UpdateProgressDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        completedAt: Date | null;
        courseId: string;
        progressPercent: number;
        lastLessonId: string | null;
    }>;
    getMarketingPlaybooks(user?: JwtUser): Promise<{
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
    getAiToolsTraining(user?: JwtUser): Promise<{
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
    createCourse(user: JwtUser, dto: CreateCourseDto): Promise<{
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
    publishCourse(user: JwtUser, courseId: string): Promise<{
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
}
export {};
