'use client';
import { ReactNode } from 'react';
import { ThemeProvider, FontProvider } from '@boldmind/ui';
import type { ProductThemeType } from '@boldmind/ui';

const PLANAI_THEME: ProductThemeType = {
  slug: 'planai-suite',
  name: 'PlanAI Suite',
  description: 'AI business automation for Nigerian entrepreneurs',
  icon: '🤖',
  status: 'LIVE',
  colors: {
    primary:    '#00143C',   // deep navy — enterprise/trust
    secondary:  '#0066FF',   // electric blue accent
    accent:     '#00A3FF',   // lighter blue for hover states
    background: '#FAFAFA',
  },
};

export function PlanaiLandingLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      defaultTheme="light"
      forceProductSlug="planai-suite"
      defaultProduct={PLANAI_THEME}
    >
      <FontProvider defaultMode="standard">
        {children}
      </FontProvider>
    </ThemeProvider>
  );
}
