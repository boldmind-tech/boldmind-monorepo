import { Request, Response, NextFunction } from 'express';
import { canAccessFeature, ProductSlug } from '@boldmind/auth';

export const validateAuth = (req: Request, res: Response, next: NextFunction) => {
    // In a real scenario, this would validate a JWT or session
    // and attach the user object to the request.
    // For now, we'll extract user info from headers (set by gateway)
    const userId = req.headers['x-user-id'] as string;
    const userEmail = req.headers['x-user-email'] as string;
    const userRole = req.headers['x-user-role'] as string;

    if (!userId) {
        res.status(401).json({ error: 'Unauthorized: User not found' });
        return;
    }

    // Mock User object for canAccessFeature
    (req as any).user = {
        id: userId,
        email: userEmail,
        role: userRole,
        metadata: {
            products: {
                'amebogist': {
                    tier: req.headers['x-user-tier'] || 'free'
                }
            }
        }
    };

    next();
};

export const requireFeature = (feature: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = (req as any).user;
        const productSlug: ProductSlug = 'amebogist';

        if (!canAccessFeature(user, productSlug, feature)) {
            res.status(403).json({
                error: `Forbidden: You do not have permission to access ${feature}`
            });
            return;
        }

        next();
    };
};
