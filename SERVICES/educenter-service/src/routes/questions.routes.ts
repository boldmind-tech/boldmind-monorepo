// SERVICES/educenter-service/src/routes/questions.routes.ts

import { Router } from 'express';
import { AlocProvider } from '../providers/aloc.provider';

const router: Router = Router();
const alocProvider = new AlocProvider();

// Get questions from ALOC API
router.get('/', async (req, res, next) => {
    try {
        const { subject, examType, year, limit } = req.query;

        if (!subject || !examType) {
            return res.status(400).json({ error: 'subject and examType are required' });
        }

        const questions = await alocProvider.getQuestions({
            subject: subject as string,
            examType: examType as 'jamb' | 'waec' | 'neco',
            year: year as string,
            limit: limit ? parseInt(limit as string) : 50,
        });

        return res.json({
            data: questions,
            count: questions.length,
        });
    } catch (error) {
        return next(error);
    }
});

// Get subjects for exam type
router.get('/subjects', async (req, res, next) => {
    try {
        const { examType } = req.query;

        if (!examType) {
            return res.status(400).json({ error: 'examType is required' });
        }

        const subjects = await alocProvider.getSubjects(
            examType as 'jamb' | 'waec' | 'neco'
        );

        return res.json({ data: subjects });
    } catch (error) {
        return next(error);
    }
});

// Get available years for exam type
router.get('/years', async (req, res, next) => {
    try {
        const { examType } = req.query;

        if (!examType) {
            return res.status(400).json({ error: 'examType is required' });
        }

        const years = await alocProvider.getYears(
            examType as 'jamb' | 'waec' | 'neco'
        );

        return res.json({ data: years });
    } catch (error) {
        return next(error);
    }
});

// Get available subjects for a specific year
router.get('/subjects-for-year/:year', async (req, res, next) => {
    try {
        const { year } = req.params;
        const subjects = await alocProvider.getSubjectsForYear(year);
        return res.json({ data: subjects });
    } catch (error) {
        return next(error);
    }
});

// Get available years for a specific subject
router.get('/years-for-subject/:subject', async (req, res, next) => {
    try {
        const { subject } = req.params;
        const years = await alocProvider.getYearsForSubject(subject);
        return res.json({ data: years });
    } catch (error) {
        return next(error);
    }
});

// Get available years for comprehension questions in a subject
router.get('/comprehension-years/:subject', async (req, res, next) => {
    try {
        const { subject } = req.params;
        const years = await alocProvider.getComprehensionYears(subject);
        return res.json({ data: years });
    } catch (error) {
        return next(error);
    }
});

// Get top/featured questions
router.get('/top', async (req, res, next) => {
    try {
        const { limit } = req.query;
        const questions = await alocProvider.getTopQuestions(
            limit ? parseInt(limit as string) : 10
        );
        return res.json({ data: questions });
    } catch (error) {
        return next(error);
    }
});

// Get question by ID
router.get('/detail/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { subject } = req.query;

        if (!subject) {
            return res.status(400).json({ error: 'subject is required' });
        }

        const question = await alocProvider.getQuestionById(id, subject as string);
        return res.json({ data: question });
    } catch (error) {
        return next(error);
    }
});

// Get questions with comprehension passages
router.get('/comprehension', async (req, res, next) => {
    try {
        const { subject, year, limit, random } = req.query;

        if (!subject) {
            return res.status(400).json({ error: 'subject is required' });
        }

        const questions = await alocProvider.getQuestionsWithComprehension({
            subject: subject as string,
            ...(year && { year: year as string }),
            ...(limit && { limit: parseInt(limit as string) }),
            random: random === 'true',
        });

        return res.json({ data: questions });
    } catch (error) {
        return next(error);
    }
});

// Get questions from multiple subjects
router.get('/multi-subject', async (req, res, next) => {
    try {
        const { subjects, questionsPerSubject } = req.query;

        if (!subjects || !Array.isArray(subjects)) {
            return res.status(400).json({ error: 'subjects array is required' });
        }

        const questions = await alocProvider.getMultiSubjectQuestions({
            subjects: subjects as string[],
            questionsPerSubject: questionsPerSubject ? parseInt(questionsPerSubject as string) : 5,
        });

        return res.json({ data: questions });
    } catch (error) {
        return next(error);
    }
});

export default router;

