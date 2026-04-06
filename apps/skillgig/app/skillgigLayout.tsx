'use client';
import { ReactNode } from 'react';
import { ThemeProvider, FontProvider } from '@boldmind/ui';
import type { ProductThemeType } from '@boldmind/ui';

const SKILLGIG_THEME: ProductThemeType = {
  slug: 'skillgig',
  name: 'SkillGig',
  description: 'Freelance and gig economy platform for Nigerian talent',
  icon: '💼',
  status: 'LIVE',
  colors: {
    primary:    '#7C3AED',   // purple — creative/professional
    secondary:  '#F59E0B',   // amber accent
    accent:     '#A78BFA',   // lighter purple for hover states
    background: '#FAFAFA',
  },
};

export function SkillgigLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      defaultTheme="light"
      forceProductSlug="skillgig"
      defaultProduct={SKILLGIG_THEME}
    >
      <FontProvider defaultMode="standard">
        {children}
      </FontProvider>
    </ThemeProvider>
  );
}
