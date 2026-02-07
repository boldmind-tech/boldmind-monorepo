import { Router } from 'express';
import * as postController from '../controllers/post.controller';
import * as commentController from '../controllers/comment.controller';
import { asyncHandler } from '../middleware/asyncHandler';
import { validateAuth, requireFeature } from '../middleware/auth.middleware';

const router: Router = Router();

// Comment routes (article-specific)
router.get('/:articleId/comments', asyncHandler(commentController.getArticleComments));
router.post('/:articleId/comments', validateAuth, requireFeature('comment'), asyncHandler(commentController.addComment));

// Public routes
router.get('/', asyncHandler(postController.listArticles));
router.get('/trending', asyncHandler(postController.trendingArticles));
router.get('/trends', asyncHandler(postController.getTrends));
router.post('/generate-ai', asyncHandler(postController.generateAIPost));
router.post('/:id/video-factory', validateAuth, requireFeature('comment'), asyncHandler(postController.triggerVideoFactory));
router.get('/:slug', asyncHandler(postController.getArticleBySlug));

// Protected routes (require create_posts permission or similar)
router.post('/', validateAuth, requireFeature('create_posts'), asyncHandler(postController.createArticle));
router.patch('/:id', validateAuth, requireFeature('create_posts'), asyncHandler(postController.updateArticle));
router.delete('/:id', validateAuth, requireFeature('create_posts'), asyncHandler(postController.deleteArticle));

export default router;
