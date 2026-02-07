
// SERVICES/educenter-service/src/routes/notes.routes.ts

import { Router } from 'express';
import { TierLimitService } from '../services/tier-limit.service';
import { prisma } from '../index';

const router: Router = Router();
const tierService = new TierLimitService(prisma);

// Mock notes data (in production, fetch from database or CMS)
interface Note {
    id: string;
    title: string;
    content: string;
    topicsCovered: string[];
}

interface NotesDatabase {
    [key: string]: {
        [key: string]: Note[];
    };
}

// Mock notes data (in production, fetch from database or CMS)
const NOTES_DATABASE: NotesDatabase = {
    JAMB: {
        mathematics: [
            { id: '1', title: 'Algebra Fundamentals', content: '...', topicsCovered: ['Equations', 'Inequalities'] },
            { id: '2', title: 'Trigonometry Basics', content: '...', topicsCovered: ['Sin, Cos, Tan', 'Identities'] },
        ],
        english: [
            { id: '3', title: 'Comprehension Techniques', content: '...', topicsCovered: ['Reading', 'Analysis'] },
        ],
    },
    WAEC: {
        physics: [
            { id: '4', title: 'Motion & Forces', content: '...', topicsCovered: ['Newton Laws', 'Momentum'] },
        ],
    },
};

// Get notes for subject
router.get('/:examType/:subject', async (req, res, next): Promise<void> => {
    try {
        const { examType, subject } = req.params;
        const { userId } = req.query;

        if (!userId) {
            return;
        }

        // Check if user can download notes
        const canDownload = tierService.canAccessFeature(userId as string, 'canDownloadNotes');

        if (!canDownload) {
            return;
        }

        const notes = NOTES_DATABASE[examType.toUpperCase()]?.[subject.toLowerCase()] || [];

        res.json({ data: notes });
    } catch (error) {
        next(error);
    }
});

// Download note
router.get('/download/:noteId', async (req, res, next): Promise<void> => {
    try {
        const { noteId } = req.params;
        const { userId } = req.query;

        if (!userId) {
            return;
        }

        const canDownload = tierService.canAccessFeature(userId as string, 'canDownloadNotes');

        if (!canDownload) {
            return;
        }

        // TODO: Generate PDF or return downloadable content
        res.json({
            downloadUrl: `/notes/files/${noteId}.pdf`,
            expiresIn: 3600,
        });
    } catch (error) {
        next(error);
    }
});

export default router;