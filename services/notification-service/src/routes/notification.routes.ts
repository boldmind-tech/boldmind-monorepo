import { Router, Request, Response } from 'express';
import { notificationService } from '../services/notification.service';

const router: Router = Router();

router.post('/send/email', async (req: Request, res: Response) => {
    const { userId, to, subject, templateType, data } = req.body;

    if (!userId || !to || !templateType) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const result = await notificationService.sendEmailNotification(userId, {
            to,
            subject: subject || 'BoldMind Notification',
            templateType,
            data
        });
        return res.status(200).json({ success: true, result });
    } catch (error: any) {
        return res.status(500).json({ success: false, error: error.message });
    }
});

export default router;
