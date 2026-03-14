// ─────────────────────────────────────────────────────────────────────────────
// apps/educenter/app/educenterLayout.tsx
// ─────────────────────────────────────────────────────────────────────────────
// FIXES from original:
//   1. Was building productTheme manually with wrong field access (theme?.primary
//      instead of theme.primary) and missing FontProvider
//   2. Was duplicating Providers wrapping (providers.tsx also wrapped this)
//   3. productTheme.colors.accent was set to theme?.primary (copy-paste bug)
//
// Now delegates entirely to shared AppLayout — one source of truth.
// ─────────────────────────────────────────────────────────────────────────────

'use client';

import { ReactNode } from 'react';
import { AppLayout } from '@boldmind/ui';

interface EducenterLayoutProps {
  children: ReactNode;
}

export function EducenterLayout({ children }: EducenterLayoutProps) {
  return (
    <AppLayout productSlug="educenter">
      {children}
    </AppLayout>
  );
}