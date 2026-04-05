// ════════════════════════════════════════════════════════════════════════════
// 5. apps/naija-fit/app/fitLayout.tsx
// ════════════════════════════════════════════════════════════════════════════
 
'use client';
import { ReactNode } from 'react';
import { ThemeProvider, FontProvider } from '@boldmind/ui';
import type { ProductThemeType } from '@boldmind/ui';

const NAIJA_FIT_THEME: ProductThemeType = {
  slug: 'naija-fit',
  name: 'NaijaFit',
  description: 'Nigerian fitness and wellness platform',
  icon: '💪',
  status: 'LIVE',
  colors: {
    primary:    '#16A34A',   // green — health/fitness
    secondary:  '#F59E0B',   // amber accent
    accent:     '#22C55E',   // lighter green for hover states
    background: '#FAFAFA',
  },
};

export function FitLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      defaultTheme="light"
      defaultProduct={NAIJA_FIT_THEME}
    >
      <FontProvider defaultMode="dyslexic">
        {children}
      </FontProvider>
    </ThemeProvider>
  );
}