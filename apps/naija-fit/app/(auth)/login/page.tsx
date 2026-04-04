'use client';

/**
 * NaijaFit login — redirects to BoldMind Hub (the central SSO entry point).
 */

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const HUB_URL = process.env.NEXT_PUBLIC_HUB_URL || 'https://boldmind.ng';

export default function LoginPage() {
  const params = useSearchParams();
  const returnUrl =
    params.get('callbackUrl') ||
    params.get('return_url') ||
    params.get('redirect') ||
    typeof window !== 'undefined' ? window.location.origin + '/dashboard' : '';

  useEffect(() => {
    const url = new URL(`${HUB_URL}/login`);
    if (returnUrl) url.searchParams.set('return_url', returnUrl as string);
    window.location.replace(url.toString());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
