'use client';

// ─────────────────────────────────────────────────────────────────────────────
// packages/ui/src/providers/AppLayout.tsx
//
// Single base layout shared by every BoldMind app.
//
// Usage:
//   <AppLayout productSlug="amebogist">{children}</AppLayout>
//   <AppLayout productSlug="boldmind-os" withAuth={false}>{children}</AppLayout>
// ─────────────────────────────────────────────────────────────────────────────

import type { ReactNode } from 'react';
import { Toaster }        from 'react-hot-toast';
import { ThemeProvider }  from './theme-provider';
import { FontProvider }   from '../components/FontProvider';
import { AuthProvider }   from '@boldmind/auth';
import {
  getProductBySlug,
  getProductColors,
  productThemes,
  BOLDMIND_PRODUCTS,
} from '@boldmind/utils';
import type { ProductThemeType } from './theme-provider';

// ─── Toast accent per product  ────────────────────────────────────────────────

const TOAST_ACCENT: Record<string, string> = {
  'boldmind-hub':         '#E9A825',
  'amebogist':            '#065F46',
  'educenter':            '#1E40AF',
  'planai-suite':         '#6B21A8',
  'ai-receptionist':      '#0C4A6E',
  'social-factory':       '#831843',
  'boldmind-os':          '#9F1239',
  'naija-fit':            '#065F46',
  'emailscraper-pro':     '#075985',
  'credibility-hubs':     '#312E81',
  'business-planning':    '#1E3A5F',
  'financial-forecasting':'#064E3B',
  'investor-readiness':   '#1E293B',
  'branding-design':      '#86198F',
  'digital-storefronts':  '#7C2D12',
  'marketing-automation': '#7E22CE',
  'analytics-dashboard':  '#0F172A',
};

// ─── Props ────────────────────────────────────────────────────────────────────

export interface AppLayoutProps {
  children: ReactNode;
  /** Must match a slug in BOLDMIND_PRODUCTS */
  productSlug: string;
  /**
   * Font mode passed to FontProvider.
   * Defaults to 'dyslexic' — OpenDyslexic is the BoldMind brand standard.
   */
  defaultFontMode?: 'dyslexic' | 'standard';
  /** Set false for fully public apps that don't need AuthProvider */
  withAuth?: boolean;
  /** Override default toast duration (ms) */
  toastDuration?: number;
}

// ─────────────────────────────────────────────────────────────────────────────

export function AppLayout({
  children,
  productSlug,
  defaultFontMode  = 'dyslexic',
  withAuth         = true,
  toastDuration    = 4000,
}: AppLayoutProps) {

  // Build the ProductThemeType from utils — single source of truth
  const product = getProductBySlug(productSlug) ?? BOLDMIND_PRODUCTS[0]!;
  const colors  = getProductColors(productSlug);
  const theme   = productThemes[productSlug] ?? productThemes['boldmind-hub']!;

  const productTheme: ProductThemeType = {
    slug:        product.slug,
    name:        product.name,
    description: product.description,
    icon:        product.icon,
    status:      product.status,
    colors: {
      primary:    colors.primary,
      secondary:  colors.secondary,
      accent:     colors.accent,
      background: theme.background,
    },
  };

  const accent  = TOAST_ACCENT[productSlug] ?? colors.primary;
  const toastStyle = {
    background:  '#1a1a1a',
    color:       '#fff',
    fontFamily:  'var(--font-active, var(--font-primary))',
    borderLeft:  `4px solid ${accent}`,
  } as const;

  const toaster = (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: toastDuration,
        style:    toastStyle,
        success:  { duration: 3000, iconTheme: { primary: '#10b981', secondary: '#fff' } },
        error:    { duration: 5000, iconTheme: { primary: '#ef4444', secondary: '#fff' } },
      }}
    />
  );

  return (
    <ThemeProvider defaultTheme="light" forceProductSlug={productSlug} defaultProduct={productTheme}>
      <FontProvider defaultMode={defaultFontMode}>
        {withAuth ? (
          <AuthProvider>
            {children}
            {toaster}
          </AuthProvider>
        ) : (
          <>
            {children}
            {toaster}
          </>
        )}
      </FontProvider>
    </ThemeProvider>
  );
}