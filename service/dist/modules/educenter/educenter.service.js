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
var EduCenterService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EduCenterService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const redis_service_1 = require("../../database/redis.service");
const ai_service_1 = require("../ai/ai.service");
const aloc_service_1 = require("./services/aloc.service");
const client_1 = require("@prisma/client");
const XP_PER_CORRECT = 5;
const XP_PER_SESSION = 10;
const LEVEL_XP_THRESHOLDS = [0, 100, 250, 500, 1000, 2000, 3500, 5000, 7500, 10000];
let EduCenterService = EduCenterService_1 = class EduCenterService {
    constructor(prisma, redis, ai, aloc) {
        this.prisma = prisma;
        this.redis = redis;
        this.ai = ai;
        this.aloc = aloc;
        this.logger = new common_1.Logger(EduCenterService_1.name);
    }
    async getSubjectsForExam(examType) {
        const subjects = await this.aloc.getSubjectsForExam(examType);
        const years = await this.aloc.getAvailableYears(examType, subjects[0]);
        return { examType, subjects, availableYears: years };
    }
    async startCbtSession(userId, dto) {
        const { examType, subject, year, mode } = dto;
        const questionCount = this.getQuestionCount(examType, mode);
        const timeLimitSecs = this.getTimeLimit(examType, mode);
        const questions = await this.aloc.fetchQuestionsForSession({
            examType,
            subject,
            year,
            limit: questionCount,
        });
        if (questions.length === 0) {
            throw new common_1.BadRequestException(`No questions available for ${examType} / ${subject}`);
        }
        const questionIds = questions.map((q) => q.alocId);
        const session = await this.prisma.cBTSession.create({
            data: {
                userId,
                examType: examType,
                subject,
                year,
                totalQuestions: questions.length,
                timeLimitSecs,
                status: client_1.CBTSessionStatus.IN_PROGRESS,
                questionIds,
            },
        });
        const sessionQKey = `cbt:session:${session.id}:questions`;
        await this.redis.setex(sessionQKey, timeLimitSecs + 300, JSON.stringify(questions));
        const qMap = {};
        for (const q of questions)
            qMap[q.alocId] = q;
        await this.redis.setex(`cbt:session:${session.id}:qmap`, timeLimitSecs + 300, JSON.stringify(qMap));
        return {
            sessionId: session.id,
            totalQuestions: questions.length,
            timeLimitSecs,
            examType,
            subject,
            year: year ?? null,
            questions: questions.map((q) => ({
                alocId: q.alocId,
                question: q.question,
                options: q.options,
                imageUrl: q.imageUrl,
                subject: q.subject,
                year: q.year,
            })),
        };
    }
    async startFullMockExam(userId, dto) {
        const { examType, subjects, year } = dto;
        if (subjects.length < 2 || subjects.length > 4) {
            throw new common_1.BadRequestException('Full mock exam requires 2-4 subjects');
        }
        const questionsBySubject = await this.aloc.fetchMultiSubjectExam({
            examType,
            subjects,
            questionsPerSubject: 40,
            year,
        });
        const allQuestions = Object.values(questionsBySubject).flat();
        const questionIds = allQuestions.map((q) => q.alocId);
        const timeLimitSecs = subjects.length * 45 * 60;
        const session = await this.prisma.cBTSession.create({
            data: {
                userId,
                examType: examType,
                subject: subjects.join(', '),
                year,
                totalQuestions: allQuestions.length,
                timeLimitSecs,
                status: client_1.CBTSessionStatus.IN_PROGRESS,
                questionIds,
            },
        });
        const sessionQKey = `cbt:session:${session.id}:questions`;
        await this.redis.setex(sessionQKey, timeLimitSecs + 300, JSON.stringify(allQuestions));
        const qMap = {};
        for (const q of allQuestions)
            qMap[q.alocId] = q;
        await this.redis.setex(`cbt:session:${session.id}:qmap`, timeLimitSecs + 300, JSON.stringify(qMap));
        return {
            sessionId: session.id,
            totalQuestions: allQuestions.length,
            timeLimitSecs,
            examType,
            subjects,
            subjectBreakdown: Object.fromEntries(Object.entries(questionsBySubject).map(([s, qs]) => [s, qs.length])),
            questions: allQuestions.map((q) => ({
                alocId: q.alocId,
                question: q.question,
                options: q.options,
                imageUrl: q.imageUrl,
                subject: q.subject,
                year: q.year,
            })),
        };
    }
    async submitSession(userId, sessionId, dto) {
        const session = await this.prisma.cBTSession.findFirst({
            where: { id: sessionId, userId },
        });
        if (!session)
            throw new common_1.NotFoundException('Session not found');
        if (session.status !== client_1.CBTSessionStatus.IN_PROGRESS) {
            throw new common_1.BadRequestException('Session already completed');
        }
        const qMapRaw = await this.redis.get(`cbt:session:${sessionId}:qmap`);
        if (!qMapRaw) {
            throw new common_1.BadRequestException('Session expired — please start a new exam');
        }
        const qMap = JSON.parse(qMapRaw);
        let score = 0;
        const progressRecords = [];
        for (const answer of dto.answers) {
            const question = qMap[answer.alocId];
            if (!question)
                continue;
            const isCorrect = answer.selectedAnswer.toUpperCase() === question.answer;
            if (isCorrect)
                score++;
            progressRecords.push({
                userId,
                sessionId,
                examType: session.examType,
                subject: answer.subject ?? question.subject,
                alocQuestionId: answer.alocId,
                selectedAnswer: answer.selectedAnswer.toUpperCase(),
                correctAnswer: question.answer,
                isCorrect,
                timeTakenSecs: answer.timeTakenSecs ?? 0,
                isSkipped: answer.isSkipped ?? false,
                questionSnapshot: {
                    question: question.question,
                    options: question.options,
                    explanation: question.explanation,
                    imageUrl: question.imageUrl,
                },
            });
        }
        const percentage = (score / session.totalQuestions) * 100;
        const timeTakenSecs = dto.timeTakenSecs ?? session.timeLimitSecs;
        await this.prisma.$transaction(async (tx) => {
            await tx.cBTSession.update({
                where: { id: sessionId },
                data: {
                    status: client_1.CBTSessionStatus.COMPLETED,
                    score,
                    percentage,
                    timeTakenSecs,
                    completedAt: new Date(),
                },
            });
            if (progressRecords.length > 0) {
                await tx.studentProgress.createMany({ data: progressRecords });
            }
            await this.updateStudyStreak(tx, userId, score, progressRecords.length);
            const bySubject = {};
            for (const p of progressRecords) {
                const key = `${session.examType}::${p.subject}`;
                if (!bySubject[key])
                    bySubject[key] = { correct: 0, total: 0 };
                bySubject[key].total++;
                if (p.isCorrect)
                    bySubject[key].correct++;
            }
            for (const [key, stats] of Object.entries(bySubject)) {
                const [examType, subject] = key.split('::');
                await this.upsertSubjectPerformance(tx, userId, examType, subject, stats);
            }
        });
        void this.redis.del(`cbt:session:${sessionId}:questions`);
        void this.redis.del(`cbt:session:${sessionId}:qmap`);
        const streak = await this.prisma.studyStreak.findUnique({ where: { userId } });
        return {
            sessionId,
            score,
            totalQuestions: session.totalQuestions,
            percentage: Math.round(percentage * 10) / 10,
            timeTakenSecs,
            grade: this.calculateGrade(percentage),
            xpEarned: score * XP_PER_CORRECT + XP_PER_SESSION,
            currentStreak: streak?.currentStreak ?? 0,
            currentLevel: streak?.level ?? 1,
            xpPoints: streak?.xpPoints ?? 0,
            review: dto.answers.map((a) => {
                const q = qMap[a.alocId];
                return {
                    alocId: a.alocId,
                    question: q?.question,
                    options: q?.options,
                    yourAnswer: a.selectedAnswer.toUpperCase(),
                    correctAnswer: q?.answer,
                    isCorrect: a.selectedAnswer.toUpperCase() === q?.answer,
                    explanation: q?.explanation,
                };
            }),
        };
    }
    async abandonSession(userId, sessionId) {
        await this.prisma.cBTSession.updateMany({
            where: { id: sessionId, userId, status: client_1.CBTSessionStatus.IN_PROGRESS },
            data: { status: client_1.CBTSessionStatus.ABANDONED, completedAt: new Date() },
        });
        void this.redis.del(`cbt:session:${sessionId}:questions`);
        void this.redis.del(`cbt:session:${sessionId}:qmap`);
        return { message: 'Session abandoned' };
    }
    async getStudentDashboard(userId) {
        const cacheKey = `edu:dashboard:${userId}`;
        const cached = await this.redis.get(cacheKey);
        if (cached)
            return JSON.parse(cached);
        const [streak, subjectPerformances, recentSessions, courseEnrollments] = await Promise.all([
            this.prisma.studyStreak.findUnique({ where: { userId } }),
            this.prisma.subjectPerformance.findMany({
                where: { userId },
                orderBy: { averagePercent: 'asc' },
            }),
            this.prisma.cBTSession.findMany({
                where: { userId, status: client_1.CBTSessionStatus.COMPLETED },
                orderBy: { completedAt: 'desc' },
                take: 10,
                select: {
                    id: true, examType: true, subject: true, score: true,
                    percentage: true, totalQuestions: true, timeTakenSecs: true, completedAt: true,
                },
            }),
            this.prisma.courseEnrollment.findMany({
                where: { userId },
                include: { course: { select: { id: true, title: true, thumbnailUrl: true, category: true } } },
                take: 5,
                orderBy: { updatedAt: 'desc' },
            }),
        ]);
        const last7 = recentSessions.slice(0, 7);
        const prev7 = recentSessions.slice(3, 10);
        const avgRecent = last7.reduce((s, r) => s + (r.percentage ?? 0), 0) / (last7.length || 1);
        const avgPrev = prev7.reduce((s, r) => s + (r.percentage ?? 0), 0) / (prev7.length || 1);
        const weakSubjects = subjectPerformances.filter((s) => s.averagePercent < 50);
        const strongSubjects = subjectPerformances.filter((s) => s.averagePercent >= 70);
        const dashboard = {
            streak: {
                current: streak?.currentStreak ?? 0,
                longest: streak?.longestStreak ?? 0,
                totalDays: streak?.totalDaysStudied ?? 0,
                xpPoints: streak?.xpPoints ?? 0,
                level: streak?.level ?? 1,
                nextLevelXp: this.getNextLevelXp(streak?.level ?? 1),
                xpProgress: this.getXpProgress(streak?.level ?? 1, streak?.xpPoints ?? 0),
                lastStudiedAt: streak?.lastStudiedAt ?? null,
                weeklyGoalDays: streak?.weeklyGoalDays ?? 5,
                totalSessions: streak?.totalSessionsDone ?? 0,
                totalQuestionsAnswered: streak?.totalQuestionsAnswered ?? 0,
                overallAccuracy: streak?.totalQuestionsAnswered
                    ? Math.round(((streak.totalCorrect ?? 0) / streak.totalQuestionsAnswered) * 100)
                    : 0,
            },
            performance: {
                recentAverage: Math.round(avgRecent),
                trend: avgRecent > avgPrev ? 'improving' : avgRecent < avgPrev ? 'declining' : 'stable',
                trendDelta: Math.round(avgRecent - avgPrev),
                weakSubjects: weakSubjects.map((s) => ({
                    subject: s.subject,
                    examType: s.examType,
                    averagePercent: Math.round(s.averagePercent),
                    totalAttempted: s.totalAttempted,
                    weakTopics: s.weakTopics,
                })),
                strongSubjects: strongSubjects.map((s) => ({
                    subject: s.subject,
                    averagePercent: Math.round(s.averagePercent),
                })),
                bySubject: subjectPerformances.map((s) => ({
                    subject: s.subject,
                    examType: s.examType,
                    averagePercent: Math.round(s.averagePercent),
                    totalAttempted: s.totalAttempted,
                    totalCorrect: s.totalCorrect,
                    lastAttemptAt: s.lastAttemptAt,
                })),
            },
            recentSessions,
            enrolledCourses: courseEnrollments.map((e) => ({
                ...e.course,
                progressPercent: e.progressPercent,
                lastLessonId: e.lastLessonId,
            })),
        };
        await this.redis.setex(cacheKey, 300, JSON.stringify(dashboard));
        return dashboard;
    }
    async getSubjectAnalytics(userId, examType, subject) {
        const [perf, sessions] = await Promise.all([
            this.prisma.subjectPerformance.findUnique({
                where: { userId_examType_subject: { userId, examType: examType, subject } },
            }),
            this.prisma.cBTSession.findMany({
                where: { userId, examType: examType, subject, status: client_1.CBTSessionStatus.COMPLETED },
                orderBy: { completedAt: 'asc' },
                select: { id: true, score: true, percentage: true, totalQuestions: true, completedAt: true },
            }),
        ]);
        const progressionData = sessions.map((s) => ({
            date: s.completedAt,
            percentage: Math.round(s.percentage ?? 0),
            score: s.score,
            total: s.totalQuestions,
        }));
        return {
            subject,
            examType,
            overall: perf
                ? {
                    totalAttempted: perf.totalAttempted,
                    totalCorrect: perf.totalCorrect,
                    averagePercent: Math.round(perf.averagePercent),
                    weakTopics: perf.weakTopics,
                    strongTopics: perf.strongTopics,
                    lastAttemptAt: perf.lastAttemptAt,
                }
                : null,
            progression: progressionData,
            sessionsCount: sessions.length,
        };
    }
    async getSessionReview(userId, sessionId) {
        const session = await this.prisma.cBTSession.findFirst({
            where: { id: sessionId, userId },
        });
        if (!session)
            throw new common_1.NotFoundException('Session not found');
        const progress = await this.prisma.studentProgress.findMany({
            where: { sessionId },
            orderBy: { createdAt: 'asc' },
        });
        return {
            session: {
                id: session.id,
                examType: session.examType,
                subject: session.subject,
                score: session.score,
                percentage: session.percentage,
                totalQuestions: session.totalQuestions,
                timeTakenSecs: session.timeTakenSecs,
                completedAt: session.completedAt,
            },
            answers: progress.map((p) => ({
                alocId: p.alocQuestionId,
                selectedAnswer: p.selectedAnswer,
                correctAnswer: p.correctAnswer,
                isCorrect: p.isCorrect,
                timeTakenSecs: p.timeTakenSecs,
                isSkipped: p.isSkipped,
                ...p.questionSnapshot,
            })),
            stats: {
                correct: progress.filter((p) => p.isCorrect).length,
                wrong: progress.filter((p) => !p.isCorrect && !p.isSkipped).length,
                skipped: progress.filter((p) => p.isSkipped).length,
                averageTimePerQuestion: progress.reduce((s, p) => s + p.timeTakenSecs, 0) / (progress.length || 1),
            },
        };
    }
    async getLeaderboard(params) {
        const { scope, examType, limit = 50 } = params;
        const cacheKey = `edu:leaderboard:${scope}:${examType ?? 'all'}`;
        const cached = await this.redis.get(cacheKey);
        if (cached)
            return JSON.parse(cached);
        const dateFilter = this.getScopeDate(scope);
        if (scope === 'global') {
            const streaks = await this.prisma.studyStreak.findMany({
                orderBy: { xpPoints: 'desc' },
                take: limit,
                include: {
                    user: {
                        select: {
                            id: true, name: true, avatar: true,
                            profile: { select: { displayName: true, avatarUrl: true, state: true } },
                        },
                    },
                },
            });
            const leaderboard = streaks.map((s, i) => ({
                rank: i + 1,
                userId: s.userId,
                name: s.user.profile?.displayName ?? s.user.name,
                avatar: s.user.profile?.avatarUrl ?? s.user.avatar,
                state: s.user.profile?.state,
                xpPoints: s.xpPoints,
                level: s.level,
                currentStreak: s.currentStreak,
                totalSessionsDone: s.totalSessionsDone,
                overallAccuracy: s.totalQuestionsAnswered
                    ? Math.round((s.totalCorrect / s.totalQuestionsAnswered) * 100)
                    : 0,
            }));
            await this.redis.setex(cacheKey, 300, JSON.stringify(leaderboard));
            return leaderboard;
        }
        const sessions = await this.prisma.cBTSession.groupBy({
            by: ['userId'],
            where: {
                status: client_1.CBTSessionStatus.COMPLETED,
                completedAt: { gte: dateFilter },
                ...(examType ? { examType: examType } : {}),
            },
            _count: { id: true },
            _avg: { percentage: true },
            _sum: { score: true },
            orderBy: { _sum: { score: 'desc' } },
            take: limit,
        });
        const userIds = sessions.map((s) => s.userId);
        const users = await this.prisma.user.findMany({
            where: { id: { in: userIds } },
            select: {
                id: true, name: true, avatar: true,
                profile: { select: { displayName: true, avatarUrl: true, state: true } },
                studyStreak: { select: { level: true, xpPoints: true } },
            },
        });
        const userMap = Object.fromEntries(users.map((u) => [u.id, u]));
        const leaderboard = sessions.map((s, i) => {
            const user = userMap[s.userId];
            return {
                rank: i + 1,
                userId: s.userId,
                name: user?.profile?.displayName ?? user?.name,
                avatar: user?.profile?.avatarUrl ?? user?.avatar,
                state: user?.profile?.state,
                sessionsCompleted: s._count.id,
                averageScore: Math.round(s._avg.percentage ?? 0),
                totalCorrect: s._sum.score ?? 0,
                level: user?.studyStreak?.level ?? 1,
                xpPoints: user?.studyStreak?.xpPoints ?? 0,
            };
        });
        const cacheTtl = scope === 'weekly' ? 3600 : 7200;
        await this.redis.setex(cacheKey, cacheTtl, JSON.stringify(leaderboard));
        return leaderboard;
    }
    async getMyRank(userId, scope) {
        const leaderboard = (await this.getLeaderboard({ scope }));
        const myEntry = leaderboard.find((e) => e.userId === userId);
        return {
            rank: myEntry?.rank ?? null,
            totalOnLeaderboard: leaderboard.length,
            scope,
        };
    }
    async getMyStreak(userId) {
        const streak = await this.prisma.studyStreak.findUnique({ where: { userId } });
        if (!streak) {
            return await this.prisma.studyStreak.create({ data: { userId } });
        }
        return streak;
    }
    async updateWeeklyGoal(userId, goalDays) {
        if (goalDays < 1 || goalDays > 7)
            throw new common_1.BadRequestException('Goal must be 1-7 days');
        return this.prisma.studyStreak.upsert({
            where: { userId },
            update: { weeklyGoalDays: goalDays },
            create: { userId, weeklyGoalDays: goalDays },
        });
    }
    async listCourses(params) {
        const { category, examType, subject, isPremium, search, page = 1, limit = 20 } = params;
        const skip = (page - 1) * limit;
        const [courses, total] = await Promise.all([
            this.prisma.course.findMany({
                where: {
                    status: client_1.CourseStatus.PUBLISHED,
                    ...(category ? { category } : {}),
                    ...(examType ? { examType: examType } : {}),
                    ...(subject ? { subject } : {}),
                    ...(isPremium !== undefined ? { isPremium } : {}),
                    ...(search
                        ? {
                            OR: [
                                { title: { contains: search, mode: 'insensitive' } },
                                { description: { contains: search, mode: 'insensitive' } },
                                { tags: { has: search.toLowerCase() } },
                            ],
                        }
                        : {}),
                },
                select: {
                    id: true, slug: true, title: true, description: true, category: true,
                    examType: true, subject: true, thumbnailUrl: true, durationMins: true,
                    totalLessons: true, price: true, isPremium: true, instructorName: true,
                    rating: true, enrollmentCount: true, tags: true, prerequisites: true,
                },
                orderBy: [{ enrollmentCount: 'desc' }, { createdAt: 'desc' }],
                skip,
                take: limit,
            }),
            this.prisma.course.count({
                where: {
                    status: client_1.CourseStatus.PUBLISHED,
                    ...(category ? { category } : {}),
                    ...(examType ? { examType: examType } : {}),
                },
            }),
        ]);
        return {
            courses,
            meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
        };
    }
    async getCourseBySlug(slug, userId) {
        const course = await this.prisma.course.findUnique({
            where: { slug },
            include: {
                lessons: {
                    orderBy: { sortOrder: 'asc' },
                    select: {
                        id: true, title: true, durationMins: true, sortOrder: true,
                        isFree: true, videoUrl: true,
                    },
                },
            },
        });
        if (!course || course.status !== client_1.CourseStatus.PUBLISHED) {
            throw new common_1.NotFoundException('Course not found');
        }
        let enrollment = null;
        if (userId) {
            enrollment = await this.prisma.courseEnrollment.findUnique({
                where: { userId_courseId: { userId, courseId: course.id } },
            });
        }
        const isEnrolled = !!enrollment;
        return {
            ...course,
            lessons: course.lessons.map((lesson) => ({
                ...lesson,
                videoUrl: lesson.isFree || isEnrolled ? lesson.videoUrl : null,
                isLocked: !lesson.isFree && !isEnrolled,
            })),
            enrollment: enrollment
                ? { progressPercent: enrollment.progressPercent, lastLessonId: enrollment.lastLessonId }
                : null,
            isEnrolled,
        };
    }
    async enrollCourse(userId, courseId) {
        const course = await this.prisma.course.findUnique({
            where: { id: courseId },
            select: { id: true, price: true, isPremium: true, enrollmentCount: true },
        });
        if (!course)
            throw new common_1.NotFoundException('Course not found');
        if (course.isPremium && course.price > 0) {
            const sub = await this.prisma.subscription.findFirst({
                where: { userId, productSlug: 'educenter', status: { in: ['ACTIVE', 'TRIAL'] } },
            });
            if (!sub) {
                throw new common_1.ForbiddenException('Premium courses require an active EduCenter subscription');
            }
        }
        const existing = await this.prisma.courseEnrollment.findUnique({
            where: { userId_courseId: { userId, courseId } },
        });
        if (existing)
            return { message: 'Already enrolled', enrollment: existing };
        const [enrollment] = await this.prisma.$transaction([
            this.prisma.courseEnrollment.create({ data: { userId, courseId } }),
            this.prisma.course.update({
                where: { id: courseId },
                data: { enrollmentCount: { increment: 1 } },
            }),
        ]);
        return { message: 'Enrolled successfully', enrollment };
    }
    async updateCourseProgress(userId, courseId, dto) {
        const enrollment = await this.prisma.courseEnrollment.findUnique({
            where: { userId_courseId: { userId, courseId } },
        });
        if (!enrollment)
            throw new common_1.ForbiddenException('Not enrolled in this course');
        const course = await this.prisma.course.findUnique({
            where: { id: courseId },
            select: { totalLessons: true },
        });
        const progressPercent = course?.totalLessons ? (dto.completedLessons / course.totalLessons) * 100 : dto.progressPercent ?? enrollment.progressPercent;
        const updated = await this.prisma.courseEnrollment.update({
            where: { userId_courseId: { userId, courseId } },
            data: {
                progressPercent: Math.min(100, progressPercent),
                lastLessonId: dto.lastLessonId,
                ...(progressPercent >= 100 ? { completedAt: new Date() } : {}),
            },
        });
        if (progressPercent >= 100 && !enrollment.completedAt) {
            await this.prisma.studyStreak.upsert({
                where: { userId },
                update: { xpPoints: { increment: 50 } },
                create: { userId, xpPoints: 50 },
            });
        }
        return updated;
    }
    async createCourse(instructorId, dto) {
        const slug = await this.generateCourseSlug(dto.title);
        return this.prisma.course.create({
            data: {
                slug,
                title: dto.title,
                description: dto.description,
                category: dto.category,
                examType: dto.examType,
                subject: dto.subject,
                thumbnailUrl: dto.thumbnailUrl,
                videoUrl: dto.videoUrl,
                durationMins: dto.durationMins ?? 0,
                price: dto.price ?? 0,
                isPremium: (dto.price ?? 0) > 0,
                instructorId,
                instructorName: dto.instructorName,
                tags: dto.tags ?? [],
                status: client_1.CourseStatus.DRAFT,
            },
        });
    }
    async publishCourse(courseId, instructorId) {
        const course = await this.prisma.course.findFirst({
            where: { id: courseId, instructorId },
        });
        if (!course)
            throw new common_1.NotFoundException('Course not found or not yours');
        return this.prisma.course.update({
            where: { id: courseId },
            data: { status: client_1.CourseStatus.PUBLISHED },
        });
    }
    async askAiTutor(userId, params) {
        const { question, subject, examType, context } = params;
        const systemPrompt = `You are EduBot, an expert Nigerian exam preparation tutor specializing in ${examType} ${subject}.
You help students understand concepts, solve past questions, and prepare for JAMB, WAEC, NECO, and other Nigerian exams.
Be clear, encouraging, and use Nigerian examples where relevant. 
If the student is struggling, break down the concept step by step.
Keep explanations concise but complete.`;
        const userPrompt = context
            ? `The student is reviewing this question:\n\n"${context}"\n\nTheir question: ${question}`
            : question;
        const response = await this.ai.chat(systemPrompt, userPrompt);
        await this.prisma.activityLog.create({
            data: {
                userId,
                action: 'ai_tutor_question',
                productSlug: 'educenter',
                metadata: { subject, examType, questionLength: question.length },
            },
        });
        return { answer: response, subject, examType };
    }
    async generateStudyPlan(userId, params) {
        const profile = await this.prisma.userProfile.findUnique({ where: { userId } });
        const subjectPerfs = await this.prisma.subjectPerformance.findMany({ where: { userId } });
        const weakSubjects = subjectPerfs
            .filter((s) => s.averagePercent < 60)
            .map((s) => s.subject);
        const systemPrompt = `You are EduBot, a Nigerian exam study planner. Generate personalized, realistic study plans for students.`;
        const userPrompt = `Create a study plan for a Nigerian student preparing for ${params.examType}.
Exam date: ${params.targetDate}
Subjects: ${params.subjects.join(', ')}
Daily study hours available: ${params.studyHoursPerDay}
Weak subjects (need more attention): ${weakSubjects.join(', ') || 'None identified yet'}
Student state: ${profile?.state ?? 'Nigeria'}

Return a JSON object with:
- weeksUntilExam: number
- weeklyPlan: array of { week: number, focus: string, subjects: [{ subject, hours, topics: [] }], practiceTests: number }
- dailySchedule: { weekdays: string, weekends: string }
- tips: string[]
- milestones: [{ week: number, goal: string }]`;
        const plan = await this.ai.generateJson(systemPrompt, userPrompt);
        return plan.content;
    }
    async getMarketingPlaybooks(userId) {
        const courses = await this.prisma.course.findMany({
            where: { category: 'marketing-playbook', status: client_1.CourseStatus.PUBLISHED },
            select: {
                id: true, slug: true, title: true, description: true, thumbnailUrl: true,
                price: true, isPremium: true, durationMins: true, totalLessons: true,
                enrollmentCount: true, rating: true, tags: true,
            },
            orderBy: { enrollmentCount: 'desc' },
        });
        if (!userId)
            return courses;
        const enrollments = await this.prisma.courseEnrollment.findMany({
            where: { userId, courseId: { in: courses.map((c) => c.id) } },
        });
        const enrolledIds = new Set(enrollments.map((e) => e.courseId));
        return courses.map((c) => ({ ...c, isEnrolled: enrolledIds.has(c.id) }));
    }
    async getAiToolsTraining(userId) {
        const courses = await this.prisma.course.findMany({
            where: { category: 'ai-tools-training', status: client_1.CourseStatus.PUBLISHED },
            select: {
                id: true, slug: true, title: true, description: true, thumbnailUrl: true,
                price: true, isPremium: true, durationMins: true, totalLessons: true,
                enrollmentCount: true, rating: true, tags: true,
            },
            orderBy: { enrollmentCount: 'desc' },
        });
        if (!userId)
            return courses;
        const enrollments = await this.prisma.courseEnrollment.findMany({
            where: { userId, courseId: { in: courses.map((c) => c.id) } },
        });
        const enrolledIds = new Set(enrollments.map((e) => e.courseId));
        return courses.map((c) => ({ ...c, isEnrolled: enrolledIds.has(c.id) }));
    }
    async getMySessions(userId, params) {
        const { examType, subject, page = 1 } = params;
        const limit = 20;
        const [sessions, total] = await Promise.all([
            this.prisma.cBTSession.findMany({
                where: {
                    userId,
                    status: client_1.CBTSessionStatus.COMPLETED,
                    ...(examType ? { examType: examType } : {}),
                    ...(subject ? { subject: { contains: subject, mode: 'insensitive' } } : {}),
                },
                orderBy: { completedAt: 'desc' },
                skip: (page - 1) * limit,
                take: limit,
                select: {
                    id: true, examType: true, subject: true, score: true, percentage: true,
                    totalQuestions: true, timeTakenSecs: true, completedAt: true,
                },
            }),
            this.prisma.cBTSession.count({
                where: { userId, status: client_1.CBTSessionStatus.COMPLETED },
            }),
        ]);
        return { sessions, meta: { total, page, totalPages: Math.ceil(total / limit) } };
    }
    async updateStudyStreak(tx, userId, score, totalAnswered) {
        const streak = await tx.studyStreak.findUnique({ where: { userId } });
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let newStreak = 1;
        let totalDays = 1;
        if (streak?.lastStudiedAt) {
            const lastDate = new Date(streak.lastStudiedAt);
            const lastDay = new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate());
            const diffDays = Math.floor((today.getTime() - lastDay.getTime()) / 86400000);
            if (diffDays === 0) {
                newStreak = streak.currentStreak;
                totalDays = streak.totalDaysStudied;
            }
            else if (diffDays === 1) {
                newStreak = streak.currentStreak + 1;
                totalDays = streak.totalDaysStudied + 1;
            }
            else {
                newStreak = 1;
                totalDays = streak.totalDaysStudied + 1;
            }
        }
        const xpGain = score * XP_PER_CORRECT + XP_PER_SESSION;
        const newXp = (streak?.xpPoints ?? 0) + xpGain;
        const newLevel = this.calculateLevel(newXp);
        await tx.studyStreak.upsert({
            where: { userId },
            update: {
                currentStreak: newStreak,
                longestStreak: Math.max(newStreak, streak?.longestStreak ?? 0),
                totalDaysStudied: totalDays,
                lastStudiedAt: now,
                xpPoints: newXp,
                level: newLevel,
                totalSessionsDone: { increment: 1 },
                totalQuestionsAnswered: { increment: totalAnswered },
                totalCorrect: { increment: score },
            },
            create: {
                userId,
                currentStreak: 1,
                longestStreak: 1,
                totalDaysStudied: 1,
                lastStudiedAt: now,
                xpPoints: xpGain,
                level: 1,
                totalSessionsDone: 1,
                totalQuestionsAnswered: totalAnswered,
                totalCorrect: score,
            },
        });
    }
    async upsertSubjectPerformance(tx, userId, examType, subject, stats) {
        const existing = await tx.subjectPerformance.findUnique({
            where: { userId_examType_subject: { userId, examType: examType, subject } },
        });
        const totalAttempted = (existing?.totalAttempted ?? 0) + stats.total;
        const totalCorrect = (existing?.totalCorrect ?? 0) + stats.correct;
        const averagePercent = totalAttempted > 0 ? (totalCorrect / totalAttempted) * 100 : 0;
        await tx.subjectPerformance.upsert({
            where: { userId_examType_subject: { userId, examType: examType, subject } },
            update: { totalAttempted, totalCorrect, averagePercent, lastAttemptAt: new Date() },
            create: { userId, examType: examType, subject, totalAttempted, totalCorrect, averagePercent, lastAttemptAt: new Date() },
        });
    }
    calculateLevel(xp) {
        for (let i = LEVEL_XP_THRESHOLDS.length - 1; i >= 0; i--) {
            if (xp >= LEVEL_XP_THRESHOLDS[i])
                return i + 1;
        }
        return 1;
    }
    getNextLevelXp(level) {
        return LEVEL_XP_THRESHOLDS[Math.min(level, LEVEL_XP_THRESHOLDS.length - 1)] ?? 99999;
    }
    getXpProgress(level, xp) {
        const current = LEVEL_XP_THRESHOLDS[level - 1] ?? 0;
        const next = this.getNextLevelXp(level);
        if (next === 99999)
            return 100;
        return Math.round(((xp - current) / (next - current)) * 100);
    }
    calculateGrade(percentage) {
        if (percentage >= 70)
            return 'A';
        if (percentage >= 60)
            return 'B';
        if (percentage >= 50)
            return 'C';
        if (percentage >= 45)
            return 'D';
        return 'F';
    }
    getQuestionCount(examType, mode) {
        if (mode === 'practice')
            return 20;
        if (mode === 'quick')
            return 10;
        const counts = { JAMB: 40, WAEC: 50, NECO: 50, GCE: 50, POST_UTME: 30 };
        return counts[examType] ?? 40;
    }
    getTimeLimit(examType, mode) {
        if (mode === 'practice')
            return 1200;
        if (mode === 'quick')
            return 600;
        const limits = {
            JAMB: 1800,
            WAEC: 3000,
            NECO: 3000,
            GCE: 3000,
            POST_UTME: 1800,
        };
        return limits[examType] ?? 1800;
    }
    getScopeDate(scope) {
        const now = new Date();
        if (scope === 'weekly') {
            return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        }
        if (scope === 'monthly') {
            return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        }
        return new Date(0);
    }
    async generateCourseSlug(title) {
        const base = title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .slice(0, 60);
        let slug = base;
        let i = 1;
        while (await this.prisma.course.findUnique({ where: { slug } })) {
            slug = `${base}-${i++}`;
        }
        return slug;
    }
};
exports.EduCenterService = EduCenterService;
exports.EduCenterService = EduCenterService = EduCenterService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        redis_service_1.RedisService,
        ai_service_1.AiService,
        aloc_service_1.AlocService])
], EduCenterService);
//# sourceMappingURL=educenter.service.js.map