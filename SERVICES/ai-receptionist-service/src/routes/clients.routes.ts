// SERVICES/ai-receptionist-service/src/routes/clients.routes.ts

import { Router } from 'express';
import { prisma } from '../index';

const router = Router();

// Create client
router.post('/', async (req, res, next) => {
    try {
        const client = await prisma.receptionistClient.create({
            data: {
                ...req.body,
                aiPersonality: req.body.aiPersonality || {
                    tone: 'professional',
                    style: 'friendly',
                },
                workingHours: req.body.workingHours || {
                    monday: { start: '09:00', end: '17:00' },
                    tuesday: { start: '09:00', end: '17:00' },
                    wednesday: { start: '09:00', end: '17:00' },
                    thursday: { start: '09:00', end: '17:00' },
                    friday: { start: '09:00', end: '17:00' },
                    saturday: { closed: true },
                    sunday: { closed: true },
                },
            },
        });

        res.json({ data: client });
    } catch (error) {
        next(error);
    }
});

// Get client
router.get('/:id', async (req, res, next) => {
    try {
        const client = await prisma.receptionistClient.findUnique({
            where: { id: req.params.id },
            include: {
                leads: {
                    orderBy: { createdAt: 'desc' },
                    take: 10,
                },
                _count: {
                    select: {
                        leads: true,
                        conversations: true,
                    },
                },
            },
        });

        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }

        res.json({ data: client });
    } catch (error) {
        next(error);
    }
});

// List user clients
router.get('/user/:userId', async (req, res, next) => {
    try {
        const clients = await prisma.receptionistClient.findMany({
            where: { userId: req.params.userId },
            include: {
                _count: {
                    select: {
                        leads: true,
                        conversations: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });

        res.json({ data: clients });
    } catch (error) {
        next(error);
    }
});

// Update client
router.patch('/:id', async (req, res, next) => {
    try {
        const client = await prisma.receptionistClient.update({
            where: { id: req.params.id },
            data: req.body,
        });

        res.json({ data: client });
    } catch (error) {
        next(error);
    }
});

export default router;