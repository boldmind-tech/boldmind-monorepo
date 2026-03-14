// ════════════════════════════════════════════════════════════════════════════
// 5. apps/naija-fit/app/fitLayout.tsx
// ════════════════════════════════════════════════════════════════════════════
 
'use client';
import { ReactNode } from 'react';
import { AppLayout } from '@boldmind/ui';
export function FitLayout({ children }: { children: ReactNode }) {
  return <AppLayout productSlug="naija-fit" withAuth={true}>{children}</AppLayout>;
}