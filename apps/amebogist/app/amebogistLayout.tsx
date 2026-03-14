// ─────────────────────────────────────────────────────────────────────────────
// apps/amebogist/app/amebogistLayout.tsx
// ─────────────────────────────────────────────────────────────────────────────

'use client';

import { ReactNode } from 'react';
import { AppLayout } from '@boldmind/ui';

interface AmebogistLayoutProps {
  children: ReactNode;
}

export function AmebogistLayout({ children }: AmebogistLayoutProps) {
  return (
    // AmeboGist is public-content-first — auth is optional for readers
    // Set withAuth=false so unauthenticated article pages don't trigger
    // AuthProvider redirects. Auth is still available via useAuth() hook
    // on pages that opt in (e.g. /create, /dashboard).
    // ASSUMPTION: Your AuthProvider gracefully handles no-token state.
    // If it throws on missing token, set withAuth={true} instead.
    <AppLayout productSlug="amebogist" withAuth={false}>
      {children}
    </AppLayout>
  );
}