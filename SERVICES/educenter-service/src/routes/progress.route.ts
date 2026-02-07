// SERVICES/educenter-service/src/routes/progress.routes.ts

import { Router } from 'express';
import { prisma } from '../index';

const router: Router = Router();

// Get user progress
router.get('/user/:userId', async (req, res, next) => {
    try {
        const progress = await prisma.userProgress.findMany({
            where: { userId: req.params.userId },
        });
        return res.json(progress);
    } catch (error) {
        return next(error);
    }
});

// Get progress for specific exam/subject
router.get('/user/:userId/:examType/:subject', async (req, res, next) => {
    try {
        const { userId, examType, subject } = req.params;

        const progress = await prisma.userProgress.findUnique({
            where: {
                userId_examType_subject: {
                    userId,
                    examType: examType.toUpperCase() as any,
                    subject,
                },
            },
        });

        return res.json(progress);
    } catch (error) {
        return next(error);
    }
});

// Update streak
router.post('/user/:userId/streak', async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { examType, subject } = req.body;

        const progress = await prisma.userProgress.findUnique({
            where: {
                userId_examType_subject: {
                    userId,
                    examType,
                    subject,
                },
            },
        });

        if (!progress) {
            return res.status(404).json({ error: 'Progress not found' });
        }

        const lastPractice = new Date(progress.lastPractice);
        const now = new Date();
        const daysDiff = Math.floor(
            (now.getTime() - lastPractice.getTime()) / (1000 * 60 * 60 * 24)
        );

        let newStreak = progress.streakDays;
        if (daysDiff === 1) {
            newStreak += 1;
        } else if (daysDiff > 1) {
            newStreak = 1;
        }

        const updated = await prisma.userProgress.update({
            where: {
                userId_examType_subject: {
                    userId,
                    examType,
                    subject,
                },
            },
            data: {
                streakDays: newStreak,
                lastPractice: now,
            },
        });

        return res.json(updated);
    } catch (error) {
        return next(error);
    }
});

export default router;