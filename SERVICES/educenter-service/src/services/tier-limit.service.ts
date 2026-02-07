
// SERVICES/educenter-service/src/services/tier-limit.service.ts

import { PrismaClient } from '../generated/client';

export type FeatureTier = 'free' | 'basic' | 'pro';

interface TierLimits {
    questionsPerDay: number | 'unlimited';
    subjects: number | 'all';
    canAccessCourses: boolean;
    canAccessAITools: boolean;
    canAccessAnalytics: boolean;
    canDownloadNotes: boolean;
    canAccessLiveQA: boolean;
    canGetCertificate: boolean;
}

const TIER_LIMITS: Record<FeatureTier, TierLimits> = {
    free: {
        questionsPerDay: 50,
        subjects: 1,
        canAccessCourses: false,
        canAccessAITools: false,
        canAccessAnalytics: false,
        canDownloadNotes: false,
        canAccessLiveQA: false,
        canGetCertificate: false,
    },
    basic: {
        questionsPerDay: 'unlimited',
        subjects: 'all',
        canAccessCourses: false,
        canAccessAITools: false,
        canAccessAnalytics: true,
        canDownloadNotes: true,
        canAccessLiveQA: false,
        canGetCertificate: false,
    },
    pro: {
        questionsPerDay: 'unlimited',
        subjects: 'all',
        canAccessCourses: true,
        canAccessAITools: true,
        canAccessAnalytics: true,
        canDownloadNotes: true,
        canAccessLiveQA: true,
        canGetCertificate: true,
    },
};

export class TierLimitService {
    constructor(private prisma: PrismaClient) { }

    getUserTier(_userId: string): FeatureTier {
        // TODO: Fetch from user metadata or subscription
        // For now, return 'free' as default
        return 'free';
    }

    async canTakeQuiz(userId: string, examType: string, subject: string): Promise<{
        allowed: boolean;
        reason?: string;
    }> {
        const tier = this.getUserTier(userId);
        const limits = TIER_LIMITS[tier];

        // Check subject limit
        if (limits.subjects !== 'all') {
            const todayQuizzes = await this.prisma.quiz.findMany({
                where: {
                    userId,
                    examType: examType.toUpperCase() as any,
                    startedAt: {
                        gte: new Date(new Date().setHours(0, 0, 0, 0)),
                    },
                },
                select: { subject: true },
            });

            const uniqueSubjects = new Set(todayQuizzes.map((q: { subject: string; }) => q.subject));

            if (uniqueSubjects.size >= limits.subjects && !uniqueSubjects.has(subject)) {
                return {
                    allowed: false,
                    reason: `Free tier limited to ${limits.subjects} subject per day. Upgrade to access all subjects.`,
                };
            }
        }

        // Check daily question limit
        if (limits.questionsPerDay !== 'unlimited') {
            const todayQuizzes = await this.prisma.quiz.findMany({
                where: {
                    userId,
                    startedAt: {
                        gte: new Date(new Date().setHours(0, 0, 0, 0)),
                    },
                },
                select: { totalQuestions: true },
            });

            const totalQuestionsToday = todayQuizzes.reduce(
                (sum: number, quiz: { totalQuestions: number; }) => sum + quiz.totalQuestions,
                0
            );

            if (totalQuestionsToday >= limits.questionsPerDay) {
                return {
                    allowed: false,
                    reason: `Daily limit of ${limits.questionsPerDay} questions reached. Upgrade for unlimited questions.`,
                };
            }
        }

        return { allowed: true };
    }

    canAccessFeature(userId: string, feature: keyof TierLimits): boolean {
        const tier = this.getUserTier(userId);
        const limits = TIER_LIMITS[tier];

        const value = limits[feature];
        return value === true || value === 'unlimited' || value === 'all';
    }

    getTierLimits(tier: FeatureTier): TierLimits {
        return TIER_LIMITS[tier];
    }
}