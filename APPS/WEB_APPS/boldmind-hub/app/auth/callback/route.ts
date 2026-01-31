// APPS/WEB_APPS/boldmind-hub/app/auth/callback/route.ts
import { NextResponse } from 'next/server';
import { getSupabaseServer } from '@boldmind/auth/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get('code');
    const next = searchParams.get('next') ?? '/dashboard';
    const error = searchParams.get('error');
    const errorDescription = searchParams.get('error_description');

    // Handle OAuth errors
    if (error) {
        console.error('[auth-callback] OAuth provider error:', { error, errorDescription });
        return NextResponse.redirect(
            `${origin}/login?error=${encodeURIComponent(error)}&message=${encodeURIComponent(errorDescription || 'Authentication failed')}`
        );
    }

    if (!code) {
        // Fallback to client-side page for checking fragments (#access_token=...)
        // This is necessary for magic links and some OAuth providers.
        return NextResponse.redirect(`${origin}/auth/callback`);
    }

    try {
        const cookieStore = cookies();
        const supabase = getSupabaseServer(cookieStore);

        const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);

        if (exchangeError) {
            console.error('[auth-callback] Session exchange error:', exchangeError);
            return NextResponse.redirect(
                `${origin}/login?error=exchange-failed&message=${encodeURIComponent(exchangeError.message)}`
            );
        }

        if (!data.session) {
            return NextResponse.redirect(
                `${origin}/login?error=no-session&message=${encodeURIComponent('Failed to create session')}`
            );
        }

        console.log('[auth-callback] Auth successful:', {
            userId: data.user?.id,
            email: data.user?.email,
        });

        // SYNC USER TO BACKEND DB
        // This ensures OAuth users are created in our primary database
        try {
            const { userAPIAdapter } = await import('../../../lib/user-api-adapter');
            await userAPIAdapter.createUser(data.user);
            console.log('[auth-callback] User synced to backend successfully');
        } catch (syncError) {
            console.error('[auth-callback] Failed to sync user to backend:', syncError);
            // We continue anyway as the session is already established in Supabase
        }

        // Validate redirect path
        const allowedPaths = ['/dashboard', '/profile', '/settings', '/'];
        const redirectPath = allowedPaths.some(path => next.startsWith(path)) ? next : '/dashboard';

        return NextResponse.redirect(`${origin}${redirectPath}`);

    } catch (err) {
        console.error('[auth-callback] Unexpected error:', err);
        return NextResponse.redirect(
            `${origin}/login?error=unexpected&message=${encodeURIComponent('An unexpected error occurred')}`
        );
    }
}