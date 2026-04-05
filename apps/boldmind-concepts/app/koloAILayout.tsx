'use client';

import { ReactNode } from 'react';
import { ThemeProvider, FontProvider } from '@boldmind/ui';
import type { ProductThemeType } from '@boldmind/ui';

const KOLO_AI_THEME: ProductThemeType = {
  slug: 'kolo-ai',
  name: 'KoloAI',
  description: 'AI-powered group thrift management for Nigerian savings communities',
  icon: '💰',
  status: 'LIVE',
  colors: {
    primary:    '#8BC34A',   // light green — thrift/savings
    secondary:  '#4CAF50',   // deeper green accent
    accent:     '#AED581',   // lighter green for hover states
    background: '#FAFAFA',
  },
};

export function KoloAILayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      defaultTheme="light"
      defaultProduct={KOLO_AI_THEME}
    >
      <FontProvider defaultMode="dyslexic">
        {children}
      </FontProvider>
    </ThemeProvider>
  );
}
