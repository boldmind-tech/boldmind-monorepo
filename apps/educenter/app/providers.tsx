// ─────────────────────────────────────────────────────────────────────────────
// apps/educenter/app/providers.tsx
// ─────────────────────────────────────────────────────────────────────────────
// FIX: Original wrapped EducenterLayout INSIDE itself (providers → EducenterLayout
// → Providers → EducenterLayout) causing double ThemeProvider + double AuthProvider.
//
// The layout tree is:
//   layout.tsx (Server) → EducenterLayout (Client, has AppLayout inside)
//
// This file is ONLY needed if a client component outside the main layout tree
// needs context access. For most pages, import EducenterLayout directly.
//
// ASSUMPTION: If you have a `/components/Providers.tsx` in educenter that was
// being imported elsewhere, replace those imports with EducenterLayout instead.
// ─────────────────────────────────────────────────────────────────────────────

'use client';

import { ReactNode } from 'react';
import { EducenterLayout } from './educenterLayout';

/**
 * Thin re-export for backward compatibility.
 * Existing imports of `Providers` will continue to work.
 *
 * @deprecated Use EducenterLayout directly.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <EducenterLayout>{children}</EducenterLayout>;
}