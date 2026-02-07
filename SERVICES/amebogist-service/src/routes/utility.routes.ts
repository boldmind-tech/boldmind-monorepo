import { Router, Request, Response } from 'express';
import mongoose from 'mongoose';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import { asyncHandler } from '../middleware/asyncHandler';

const router: Router = Router();

const CATEGORIES = [
    { slug: 'ai-tech', name: 'AI & Tech', icon: '🤖', color: 'blue' },
    { slug: 'creator', name: 'Creator Life', icon: '✍️', color: 'purple' },
    { slug: 'sports', name: 'Sports', icon: '⚽', color: 'green' },
    { slug: 'politics', name: 'Politics', icon: '🏛️', color: 'red' },
    { slug: 'entertainment', name: 'Entertainment', icon: '🎭', color: 'pink' },
    { slug: 'trending', name: 'Trending Gist', icon: '🔥', color: 'orange' }
];

router.get('/health', (_req, res) => {
    res.json({
        status: 'ok',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
        timestamp: new Date().toISOString()
    });
});

router.get('/categories', (_req, res) => {
    res.json({
        data: CATEGORIES,
        meta: { total: CATEGORIES.length }
    });
});

router.get('/stats/dashboard', asyncHandler(async (_req: Request, res: Response) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const stats = await Promise.all([
        Post.countDocuments({ status: 'published' }),
        Post.countDocuments({ status: 'draft' }),
        Post.countDocuments({ createdAt: { $gte: today } }),
        Post.aggregate([
            { $match: { status: 'published' } },
            { $group: { _id: null, totalViews: { $sum: '$engagement.views' } } }
        ]),
        Comment.countDocuments()
    ]);

    res.json({
        data: {
            totalPublished: stats[0],
            totalDrafts: stats[1],
            articlesToday: stats[2],
            totalViews: stats[3][0]?.totalViews || 0,
            totalComments: stats[4]
        }
    });
}));

export default router;
