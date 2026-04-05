// APPS/WEB_APPS/boldmind-os/app/api/auth/callback/route.ts
import { NextResponse } from 'next/server';
import { safeRedirectUrl } from '@boldmind/auth';

/**
 * Auth Callback Route
 * Handles return from BoldMind Hub SSO login.
 * The SSO cookie is already set by the hub — just redirect to destination.
 */
export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const next = safeRedirectUrl(searchParams.get('next'), '/dashboard');

    return NextResponse.redirect(`${origin}${next}`);
}
