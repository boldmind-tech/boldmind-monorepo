'use client';

import { useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { getSupabaseBrowser } from '@boldmind/auth';
import { Loader2 } from 'lucide-react';

/**
 * Auth Callback Fallback (Client Component)
 * Handles fragments (#access_token=...) which are invisible to the server.
 * This ensures magic links and implicit flow redirects work correctly.
 */
function AuthCallbackClient() {
    const router = useRouter();
    const supabase = getSupabaseBrowser();

    useEffect(() => {
        const handleCallback = async () => {
            // Check for hash fragments (implicit flow)
            if (window.location.hash) {
                console.log('[auth-callback-client] Fragment detected, attempting to handle session...');

                // Supabase browser client will automatically pick up the fragment
                // and set the session in local storage/cookies.
                const { data: { session }, error } = await supabase.auth.getSession();

                if (session && !error) {
                    console.log('[auth-callback-client] Session established from fragment');
                    router.push('/dashboard');
                    return;
                } else if (error) {
                    console.error('[auth-callback-client] Error establishing session from fragment:', error);
                }
            }

            // If we're here and the server-side route.ts also redirected here,
            // it means there's no code and no valid fragment at the moment.
            // We wait a second to be sure, then redirect to login.
            const timeout = setTimeout(() => {
                router.push('/login?error=timeout&message=Authentication%20timed%20out');
            }, 3000);

            return () => clearTimeout(timeout);
        };

        handleCallback();
    }, [router, supabase]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-[#00143C]" />
            <div className="text-center">
                <h1 className="text-xl font-bold">Verifying your session...</h1>
                <p className="text-gray-500">Please wait while we complete your sign-in.</p>
            </div>
        </div>
    );
}

export default function AuthCallbackPage() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
                <Loader2 className="w-10 h-10 animate-spin text-[#00143C]" />
            </div>
        }>
            <AuthCallbackClient />
        </Suspense>
    );
}
