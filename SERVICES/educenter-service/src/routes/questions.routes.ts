// SERVICES/educenter-service/src/routes/questions.routes.ts

import { Router } from 'express';
import { AlocProvider } from '../providers/aloc.provider';
// import { prisma } from '../index';

const router: Router = Router();
const alocProvider = new AlocProvider();

// Get questions from ALOC API
router.get('/', async (req, res, next): Promise<void> => {
    try {
        const { subject, examType, year, limit } = req.query;

        if (!subject || !examType) {
            return;
        }

        const questions = await alocProvider.getQuestions({
            subject: subject as string,
            examType: examType as 'jamb' | 'waec' | 'neco',
            year: year as string,
            limit: limit ? parseInt(limit as string) : 50,
        });

        res.json({
            data: questions,
            count: questions.length,
        });
    } catch (error) {
        next(error);
    }
});

// Get subjects for exam type
router.get('/subjects', async (req, res, next): Promise<void> => {
    try {
        const { examType } = req.query;

        if (!examType) {
            return;
        }

        const subjects = await alocProvider.getSubjects(
            examType as 'jamb' | 'waec' | 'neco'
        );

        res.json({ data: subjects });
    } catch (error) {
        next(error);
    }
});

// Get available years for exam type
router.get('/years', async (req, res, next): Promise<void> => {
    try {
        const { examType } = req.query;

        if (!examType) {
            return;
        }

        const years = await alocProvider.getYears(
            examType as 'jamb' | 'waec' | 'neco'
        );

        res.json({ data: years });
    } catch (error) {
        next(error);
    }
});

export default router;

