import { Router, Request, Response } from 'express';
import crypto from 'crypto';
import { notificationService } from '../services/notification.service';

const router: Router = Router();

/**
 * Verify Supabase webhook signature
 */
function verifyWebhookSignature(payload: string, signature: string, secret: string): boolean {
    const expectedSignature = crypto
        .createHmac('sha256', secret)
        .update(payload)
        .digest('hex');

    return crypto.timingSafeEqual(
        Buffer.from(signature),
        Buffer.from(expectedSignature)
    );
}

/**
 * Supabase Auth Webhook Handler
 * Receives auth events from Supabase and triggers custom email notifications
 * 
 * Security Notes:
 * - Supabase Database Webhooks don't provide built-in signature verification
 * - Use environment-based secret OR IP allowlist for security
 */
router.post('/', async (req: Request, res: Response) => {
    try {
        const webhookSecret = process.env['SUPABASE_WEBHOOK_SECRET'];

        // Optional signature verification if you set up a custom secret
        if (webhookSecret) {
            const signature = req.headers['x-webhook-signature'] as string;
            const rawBody = JSON.stringify(req.body);

            if (signature && !verifyWebhookSignature(rawBody, signature, webhookSecret)) {
                console.warn('[Auth Webhook] Invalid signature');
                return res.status(401).json({ error: 'Invalid signature' });
            }
        } else {
            // Alternative: Verify the request comes from a trusted source
            // You can implement IP allowlist here if needed
            const origin = req.headers['origin'] || req.headers['referer'];
            console.log('[Auth Webhook] Request from:', origin);
        }

        const { type, record } = req.body;
        const appUrl = process.env['NEXT_PUBLIC_APP_URL'] || 'https://boldmind.ng';

        console.log('=== [Auth Webhook] DEBUG ===');
        console.log('[Auth Webhook] Received webhook payload:', JSON.stringify(req.body, null, 2));
        console.log('[Auth Webhook] Event type:', type);
        console.log('[Auth Webhook] App URL:', appUrl);
        console.log(`[Auth Webhook] Received event: ${type}`);

        switch (type) {
            case 'INSERT': {
                // New user signup - send verification email
                const { id, email, confirmation_token } = record;

                if (email && confirmation_token) {
                    const confirmationUrl = `${appUrl}/auth/callback?token=${confirmation_token}&type=signup`;

                    await notificationService.sendVerificationEmail(id, email, confirmationUrl);
                    console.log(`[Auth Webhook] Sent verification email to ${email}`);
                }

                break;
            }

            case 'user.password_reset': {
                // Password reset requested
                const { id, email, recovery_token } = record;

                if (email && recovery_token) {
                    const resetUrl = `${appUrl}/auth/reset-password?token=${recovery_token}`;

                    await notificationService.sendPasswordResetEmail(id, email, resetUrl);
                    console.log(`[Auth Webhook] Sent password reset email to ${email}`);
                }

                break;
            }

            case 'user.created': {
                // New user created (alternative event for signup)
                const { id, email, raw_user_meta_data } = record;

                if (email) {
                    const userName = raw_user_meta_data?.name || raw_user_meta_data?.full_name;
                    await notificationService.sendWelcomeEmail(id, email, userName);
                    console.log(`[Auth Webhook] Sent welcome email to ${email}`);
                }

                break;
            }

            default:
                console.log(`[Auth Webhook] Unhandled event type: ${type}`);
        }

        return res.status(200).json({
            success: true,
            message: 'Webhook processed',
            type
        });

    } catch (error: any) {
        console.error('[Auth Webhook] Error processing webhook:', error);
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

export default router;
