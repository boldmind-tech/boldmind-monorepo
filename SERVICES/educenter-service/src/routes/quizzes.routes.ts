
// SERVICES/educenter-service/src/routes/quizzes.routes.ts

import { Router } from 'express';
import { prisma } from '../database/prisma';
import { AlocProvider } from '../providers/aloc.provider';

const router: Router = Router();
const alocProvider = new AlocProvider();

// Start a quiz
router.post('/start', async (req, res, next) => {
    try {
        const { userId, examType, subject, numberOfQuestions } = req.body;

        // Fetch questions from ALOC
        const questions = await alocProvider.getQuestions({
            subject,
            examType,
            limit: numberOfQuestions || 20,
        });

        const questionIds = questions.map(q => q.id);

        // Create quiz record
        const quiz = await prisma.quiz.create({
            data: {
                userId,
                examType: examType.toUpperCase(),
                subject,
                questionIds,
                totalQuestions: questions.length,
                status: 'IN_PROGRESS',
            },
        });

        return res.json({
            quiz,
            questions: questions.map(q => ({
                id: q.id,
                question: q.question,
                options: q.option,
                image: q.image,
            })),
        });
    } catch (error) {
        return next(error);
    }
});

// Submit quiz
router.post('/:id/submit', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { answers } = req.body; // { questionId: answer }

        const quiz = await prisma.quiz.findUnique({ where: { id } });

        if (!quiz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }

        // Fetch correct answers from ALOC
        const questions = await alocProvider.getQuestions({
            subject: quiz.subject,
            examType: quiz.examType.toLowerCase() as any,
            limit: 100,
        });

        let correctCount = 0;
        const results: any = {};

        Object.entries(answers).forEach(([questionId, userAnswer]) => {
            const question = questions.find(q => q.id === questionId);
            if (question && question.answer === userAnswer) {
                correctCount++;
            }
            results[questionId] = {
                userAnswer,
                correctAnswer: question?.answer,
                isCorrect: question?.answer === userAnswer,
            };
        });

        const timeSpent = Math.floor((Date.now() - quiz.startedAt.getTime()) / 1000);

        // Update quiz
        const updatedQuiz = await prisma.quiz.update({
            where: { id },
            data: {
                status: 'COMPLETED',
                score: correctCount,
                timeSpent,
                completedAt: new Date(),
                answers: results,
            },
        });

        // Update user progress
        await prisma.userProgress.upsert({
            where: {
                userId_examType_subject: {
                    userId: quiz.userId,
                    examType: quiz.examType,
                    subject: quiz.subject,
                },
            },
            create: {
                userId: quiz.userId,
                examType: quiz.examType,
                subject: quiz.subject,
                questionsAttempted: quiz.totalQuestions,
                correctAnswers: correctCount,
                totalTimeSpent: timeSpent,
                lastPractice: new Date(),
            },
            update: {
                questionsAttempted: { increment: quiz.totalQuestions },
                correctAnswers: { increment: correctCount },
                totalTimeSpent: { increment: timeSpent },
                lastPractice: new Date(),
            },
        });

        return res.json({
            quiz: updatedQuiz,
            results,
            score: correctCount,
            total: quiz.totalQuestions,
            percentage: (correctCount / quiz.totalQuestions) * 100,
        });
    } catch (error) {
        return next(error);
    }
});

// Get quiz by ID
router.get('/:id', async (req, res, next) => {
    try {
        const quiz = await prisma.quiz.findUnique({
            where: { id: req.params.id },
        });
        return res.json(quiz);
    } catch (error) {
        return next(error);
    }
});

// List user quizzes
router.get('/user/:userId', async (req, res, next) => {
    try {
        const quizzes = await prisma.quiz.findMany({
            where: { userId: req.params.userId },
            orderBy: { startedAt: 'desc' },
        });
        return res.json(quizzes);
    } catch (error) {
        return next(error);
    }
});

export default router;