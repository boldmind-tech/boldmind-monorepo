// SERVICES/educenter-service/src/routes/courses.routes.ts

import { Router } from 'express';
import { prisma } from '../index';

const router = Router();

// Get all courses
router.get('/', async (req, res, next) => {
    try {
        const { category, level, isPublished } = req.query;

        const courses = await prisma.course.findMany({
            where: {
                ...(category && { category: category as any }),
                ...(level && { level: level as any }),
                ...(isPublished !== undefined && { isPublished: isPublished === 'true' }),
            },
            include: {
                modules: true,
                _count: {
                    select: { enrollments: true },
                },
            },
            orderBy: { createdAt: 'desc' },
        });

        res.json({ data: courses });
    } catch (error) {
        next(error);
    }
});

// Get single course
router.get('/:id', async (req, res, next) => {
    try {
        const course = await prisma.course.findUnique({
            where: { id: req.params.id },
            include: {
                modules: {
                    orderBy: { orderIndex: 'asc' },
                },
                enrollments: {
                    select: {
                        userId: true,
                        enrolledAt: true,
                        progressPercentage: true,
                    },
                },
            },
        });

        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        res.json({ data: course });
    } catch (error) {
        next(error);
    }
});

// Create course
router.post('/', async (req, res, next) => {
    try {
        const course = await prisma.course.create({
            data: req.body,
        });
        res.json({ data: course });
    } catch (error) {
        next(error);
    }
});

// Update course
router.patch('/:id', async (req, res, next) => {
    try {
        const course = await prisma.course.update({
            where: { id: req.params.id },
            data: req.body,
        });
        res.json({ data: course });
    } catch (error) {
        next(error);
    }
});

// Enroll in course
router.post('/:id/enroll', async (req, res, next) => {
    try {
        const { userId } = req.body;

        const enrollment = await prisma.enrollment.create({
            data: {
                userId,
                courseId: req.params.id,
            },
        });

        res.json({ data: enrollment });
    } catch (error) {
        next(error);
    }
});

// Update enrollment progress
router.patch('/enrollments/:id/progress', async (req, res, next) => {
    try {
        const { progressPercentage, completedAt } = req.body;

        const enrollment = await prisma.enrollment.update({
            where: { id: req.params.id },
            data: {
                progressPercentage,
                completedAt: completedAt ? new Date(completedAt) : undefined,
                lastAccessed: new Date(),
            },
        });

        res.json({ data: enrollment });
    } catch (error) {
        next(error);
    }
});

// Get user enrollments
router.get('/user/:userId/enrollments', async (req, res, next) => {
    try {
        const enrollments = await prisma.enrollment.findMany({
            where: { userId: req.params.userId },
            include: {
                course: {
                    include: {
                        modules: true,
                    },
                },
            },
            orderBy: { enrolledAt: 'desc' },
        });

        res.json({ data: enrollments });
    } catch (error) {
        next(error);
    }
});

export default router;