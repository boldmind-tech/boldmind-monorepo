// PACKAGES/auth/src/providers/supabase/client.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { createBrowserClient, createServerClient } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';
import type { cookies } from 'next/headers';

let browserInstance: SupabaseClient | null = null;

interface SupabaseClientOptions {
    useServiceRole?: boolean;
    cookieStore?: ReturnType<typeof cookies>;
}

/**
 * Creates or returns a cached Supabase client.
 * Behavior differs based on runtime context (server vs client).
 * 
 * @param options - Configuration options
 * @param options.useServiceRole - Use service role key (server-only)
 * @param options.cookieStore - Next.js cookies store for server-side auth
 */
export function getSupabaseClient(options: SupabaseClientOptions = {}): SupabaseClient {
    const isServer = typeof window === 'undefined';

    // ──────────────────────────────────────────────────────────────
    // URL resolution – same for both environments
    // ──────────────────────────────────────────────────────────────
    const url =
        process.env['SUPABASE_URL'] ||
        process.env['NEXT_PUBLIC_SUPABASE_URL'] ||
        '';

    if (!url) {
        throw new Error('Missing Supabase URL. Set SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL');
    }

    // ──────────────────────────────────────────────────────────────
    // Service Role Client (Server-only, admin privileges)
    // ──────────────────────────────────────────────────────────────
    if (options.useServiceRole === true) {
        if (!isServer) {
            throw new Error('Service role key cannot be used in browser environment');
        }

        const serviceKey =
            process.env['SUPABASE_SERVICE_KEY'] ||
            process.env['SUPABASE_SERVICE_ROLE_KEY'] ||
            '';

        if (!serviceKey) {
            throw new Error('Missing service role key. Set SUPABASE_SERVICE_KEY');
        }

        // Service role clients should NOT be cached – create fresh instance
        return createClient(url, serviceKey, {
            auth: {
                autoRefreshToken: false,
                persistSession: false,
            },
            global: {
                headers: {
                    'x-client-info': 'boldmind-auth-service@1.0',
                },
            },
        });
    }

    // ──────────────────────────────────────────────────────────────
    // Server-Side Client (with cookie-based session)
    // ──────────────────────────────────────────────────────────────
    if (isServer && options.cookieStore) {
        const anonKey =
            process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] ||
            process.env['SUPABASE_ANON_KEY'] ||
            '';

        if (!anonKey) {
            throw new Error('Missing anon key. Set NEXT_PUBLIC_SUPABASE_ANON_KEY');
        }

        // Use Supabase SSR helper for server components
        return createServerClient(url, anonKey, {
            auth: {
                storageKey: 'sb-auth-token',
            },
            cookieOptions: {
                name: 'sb-auth-token',
                maxAge: 60 * 60 * 24 * 7,
                domain: '',
                path: '/',
                sameSite: 'lax',
                httpOnly: false,
            },
            cookies: {
                get(name: string) {
                    return options.cookieStore?.get(name)?.value;
                },
                set(name: string, value: string, cookieOptions: any) {
                    try {
                        options.cookieStore?.set({ name, value, ...cookieOptions });
                    } catch (error) {
                        // The `set` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing sessions.
                    }
                },
                remove(name: string, cookieOptions: any) {
                    try {
                        options.cookieStore?.set({ name, value: '', ...cookieOptions });
                    } catch (error) {
                        // The `remove` method was called from a Server Component.
                    }
                },
            },
        });
    }

    // ──────────────────────────────────────────────────────────────
    // Browser Client (with localStorage session)
    // ──────────────────────────────────────────────────────────────
    if (!isServer) {
        // Return cached instance for browser - strict singleton
        if (browserInstance) return browserInstance;

        const anonKey =
            process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] ||
            process.env['SUPABASE_ANON_KEY'] ||
            '';

        if (!anonKey) {
            throw new Error('Missing anon key. Set NEXT_PUBLIC_SUPABASE_ANON_KEY');
        }

        // Create the singleton instance
        browserInstance = createBrowserClient(url, anonKey, {
            auth: {
                flowType: 'pkce',
                autoRefreshToken: true,
                persistSession: true,
                detectSessionInUrl: true,
                storageKey: 'sb-auth-token', // Explicit storage key to avoid conflicts
            },
            global: {
                headers: {
                    'x-client-info': 'boldmind-auth-client@1.0',
                },
            },
            cookieOptions: {
                name: 'sb-auth-token',
                maxAge: 60 * 60 * 24 * 7, // 1 week
                domain: '', // Let browser handle domain
                path: '/',
                sameSite: 'lax',
                httpOnly: false,
            }
        });

        return browserInstance as SupabaseClient;
    }

    // ──────────────────────────────────────────────────────────────
    // Fallback: Server without cookies (API routes, middleware)
    // ──────────────────────────────────────────────────────────────
    const anonKey =
        process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] ||
        process.env['SUPABASE_ANON_KEY'] ||
        '';

    if (!anonKey) {
        throw new Error('Missing anon key. Set NEXT_PUBLIC_SUPABASE_ANON_KEY');
    }

    // Don't cache server instances without cookie store
    return createClient(url, anonKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
            flowType: 'pkce',
        },
    });
}

/**
 * Helper to get Supabase client in Server Components
 * Usage: const supabase = getSupabaseServer()
 */
export function getSupabaseServer(cookieStore?: ReturnType<typeof cookies>) {
    // Import cookies dynamically to avoid issues
    const nextCookies = cookieStore || require('next/headers').cookies();
    return getSupabaseClient({ cookieStore: nextCookies });
}

/**
 * Helper to get Supabase client in Client Components
 * Usage: const supabase = getSupabaseBrowser()
 */
export function getSupabaseBrowser() {
    if (typeof window === 'undefined') {
        throw new Error('getSupabaseBrowser() can only be called in browser environment');
    }
    return getSupabaseClient();
}

/**
 * Helper to get admin Supabase client (server-only)
 * Usage: const supabase = getSupabaseAdmin()
 */
export function getSupabaseAdmin() {
    if (typeof window !== 'undefined') {
        throw new Error('getSupabaseAdmin() can only be called on server');
    }
    return getSupabaseClient({ useServiceRole: true });
}

/**
 * Helper to get Supabase client in Middleware
 * Handles session refreshing and cookie syncing between request and response
 */
export function getSupabaseMiddleware(request: NextRequest, response: NextResponse) {
    const url =
        process.env['SUPABASE_URL'] ||
        process.env['NEXT_PUBLIC_SUPABASE_URL'] ||
        '';

    const anonKey =
        process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] ||
        process.env['SUPABASE_ANON_KEY'] ||
        '';

    const supabase = createServerClient(url, anonKey, {
        auth: {
            storageKey: 'sb-auth-token',
        },
        cookieOptions: {
            name: 'sb-auth-token',
            maxAge: 60 * 60 * 24 * 7,
            domain: '',
            path: '/',
            sameSite: 'lax',
            httpOnly: false,
        },
        cookies: {
            get(name: string) {
                return request.cookies.get(name)?.value;
            },
            set(name: string, value: string, cookieOptions: any) {
                request.cookies.set({ name, value, ...cookieOptions });
                response.cookies.set({ name, value, ...cookieOptions });
            },
            remove(name: string, cookieOptions: any) {
                request.cookies.set({ name, value: '', ...cookieOptions });
                response.cookies.set({ name, value: '', ...cookieOptions });
            },
        },
    });

    return { supabase, response };
}

/**
 * Reset client instance (useful for testing or logout)
 */
export function resetSupabaseInstance() {
    browserInstance = null;
}