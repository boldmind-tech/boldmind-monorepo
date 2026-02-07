import { Router } from 'express';
import * as commentController from '../controllers/comment.controller';
import { asyncHandler } from '../middleware/asyncHandler';
import { validateAuth, requireFeature } from '../middleware/auth.middleware';

const router: Router = Router();

// Standalone comment routes
router.patch('/comments/:id/react', validateAuth, requireFeature('comment'), asyncHandler(commentController.reactToComment));

export default router;
