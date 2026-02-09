// SERVICES/educenter-service/src/routes/leaderboard.routes.ts

import { Router } from 'express';
import { prisma } from '../database/prisma';

const router: Router = Router();

// Get global leaderboard
router.get('/global', async (req, res, next) => {
    try {
        const { examType, subject = 'all' } = req.query;

        const where: any = {};

        if (examType) {
            where.examType = (examType as string).toUpperCase();
        }

        if (subject) {
            where.subject = subject;
        }

        const progress = await prisma.userProgress.findMany({
            where,
            orderBy: [
                { correctAnswers: 'desc' },
                { questionsAttempted: 'desc' },
            ],
            take: 100,
        });

        // Calculate rankings
        const leaderboard = progress.map((entry, index) => ({
            rank: index + 1,
            userId: entry.userId,
            correctAnswers: entry.correctAnswers,
            questionsAttempted: entry.questionsAttempted,
            accuracy: entry.questionsAttempted > 0
                ? (entry.correctAnswers / entry.questionsAttempted * 100).toFixed(2)
                : 0,
            streakDays: entry.streakDays,
        }));

        return res.json({ data: leaderboard });
    } catch (error) {
        return next(error);
    }
});

// Get user rank
router.get('/user/:userId/rank', async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { examType, subject } = req.query;

        const where: any = {};

        if (examType) {
            where.examType = (examType as string).toUpperCase();
        }

        if (subject) {
            where.subject = subject;
        }

        const allProgress = await prisma.userProgress.findMany({
            where,
            orderBy: [
                { correctAnswers: 'desc' },
                { questionsAttempted: 'desc' },
            ],
        });

        const userRank = allProgress.findIndex(p => p.userId === userId) + 1;
        const userProgress = allProgress.find(p => p.userId === userId);

        return res.json({
            data: {
                rank: userRank || null,
                total: allProgress.length,
                progress: userProgress,
            },
        });
    } catch (error) {
        return next(error);
    }
});

export default router;