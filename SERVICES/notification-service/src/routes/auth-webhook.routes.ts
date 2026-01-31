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

        // Initialize Supabase Admin Client
        const supabaseUrl = process.env['SUPABASE_URL'] || process.env['NEXT_PUBLIC_SUPABASE_URL'];
        const supabaseServiceKey = process.env['SUPABASE_SERVICE_ROLE_KEY'] || process.env['SUPABASE_SERVICE_KEY'];
        let supabaseAdmin: any = null;

        if (supabaseUrl && supabaseServiceKey) {
            try {
                const { createClient } = require('@supabase/supabase-js');
                supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
                    auth: {
                        autoRefreshToken: false,
                        persistSession: false
                    }
                });
                console.log('[Auth Webhook] Supabase Admin client initialized successfully');
            } catch (err) {
                console.error('[Auth Webhook] Error creating Supabase client:', err);
            }
        } else {
            console.warn('[Auth Webhook] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. Cannot generate verification links.');
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
                // New user signup
                const { id, email, raw_user_meta_data, email_confirmed_at } = record;

                if (email) {
                    // Check if user is already confirmed (e.g. Social Login or Email configured to auto-confirm)
                    // Note: checking if email_confirmed_at is truthy ("2026-..." string) or null
                    const isConfirmed = !!email_confirmed_at;

                    if (!isConfirmed) {
                        // User needs verification.
                        // Since we don't have the raw confirmation_token, we must generate a new link via Admin API.
                        let verificationLink = `${appUrl}/auth/callback?token=MISSING&type=signup`; // Fallback

                        if (supabaseAdmin) {
                            try {
                                console.log(`[Auth Webhook] Generating verification link for ${email}...`);
                                // "signup" type returns a link to confirm the user signup
                                const { data, error } = await supabaseAdmin.auth.admin.generateLink({
                                    type: 'signup',
                                    email: email,
                                    options: {
                                        redirectTo: `${appUrl}/auth/callback`
                                    }
                                });

                                if (error) {
                                    console.error('[Auth Webhook] signup link generation error details:', {
                                        message: error.message,
                                        status: error.status,
                                        name: error.name
                                    });
                                    // Handle case where user already exists (common on INSERT webhook)
                                    if (error.message?.includes('already been registered') || error.status === 422) {
                                        console.log('[Auth Webhook] User exists, falling back to magiclink generation...');
                                        const { data: magicData, error: magicError } = await supabaseAdmin.auth.admin.generateLink({
                                            type: 'magiclink',
                                            email: email,
                                            options: {
                                                redirectTo: `${appUrl}/auth/callback`
                                            }
                                        });

                                        if (magicError) {
                                            console.error('[Auth Webhook] Failed to generate magiclink:', magicError);
                                        } else if (magicData?.properties?.action_link) {
                                            verificationLink = magicData.properties.action_link;
                                            console.log('[Auth Webhook] Generated magiclink successfully');
                                        }
                                    } else {
                                        console.error('[Auth Webhook] Failed to generate link:', error);
                                    }
                                } else if (data?.properties?.action_link) {
                                    verificationLink = data.properties.action_link;
                                    console.log('[Auth Webhook] Generated verification link successfully');
                                }
                            } catch (e) {
                                console.error('[Auth Webhook] Exception generating link:', e);
                            }
                        }

                        // Send the email with the (hopefully generated) link
                        await notificationService.sendVerificationEmail(id, email, verificationLink);
                        console.log(`[Auth Webhook] Sent verification email to ${email} with link: ${verificationLink}`);

                    } else {
                        // User is already confirmed (e.g. Google Auth) -> Send Welcome Email
                        const userName = raw_user_meta_data?.name || raw_user_meta_data?.full_name || raw_user_meta_data?.fullName;
                        await notificationService.sendWelcomeEmail(id, email, userName);
                        console.log(`[Auth Webhook] Sent welcome email to ${email}`);
                    }
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
                // Redundant fall-back
                const { id, email, raw_user_meta_data } = record;
                if (email) {
                    const userName = raw_user_meta_data?.name || raw_user_meta_data?.full_name || raw_user_meta_data?.fullName;
                    await notificationService.sendWelcomeEmail(id, email, userName);
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
