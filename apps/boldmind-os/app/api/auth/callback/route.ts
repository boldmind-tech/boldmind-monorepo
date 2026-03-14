// APPS/WEB_APPS/boldmind-os/app/api/auth/callback/route.ts
import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@boldmind/auth';

/**
 * Auth Callback Route
 * Handles Supabase OAuth redirect and session exchange
 */
export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get('code');
    const next = searchParams.get('next') ?? '/dashboard';

    if (code) {
        const supabase = getSupabaseClient();

        try {
            const { error } = await supabase.auth.exchangeCodeForSession(code);

            if (!error) {
                // Redirect to the success page
                return NextResponse.redirect(`${origin}${next}`);
            }

            console.error('[auth-callback] Session exchange error:', error.message);
        } catch (err) {
            console.error('[auth-callback] Unexpected error:', err);
        }
    }

    // Return the user to an error page with some instructions
    return NextResponse.redirect(`${origin}/login?error=auth-failure`);
}
