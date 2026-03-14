// ─────────────────────────────────────────────────────────────────────────────
// packages/ui/src/providers/AppLayout.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Generic base layout used by every BoldMind app.
// Each app creates its own *Layout.tsx that passes its slug to this component.
// This eliminates the 8 near-identical layout files that existed before.
//
// Usage in any app:
//   <AppLayout productSlug="amebogist">{children}</AppLayout>
// ─────────────────────────────────────────────────────────────────────────────

'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import { FontProvider } from '../components/FontProvider';
import { AuthProvider } from '@boldmind/auth';
import { Toaster } from 'react-hot-toast';
import {
  getProductBySlug,
  getProductColors,
  productThemes,
  BOLDMIND_PRODUCTS,
} from '@boldmind/utils';
import type { ProductThemeType } from './theme-provider';

// ─── Toast style map per product ─────────────────────────────────────────────

const TOAST_ACCENT: Record<string, string> = {
  'boldmind-hub': '#E9A825',
  'amebogist':    '#065F46',
  'educenter':    '#1E40AF',
  'planai-suite': '#6B21A8',
  'naija-fit':    '#BE185D',
  'boldmind-os':  '#9F1239',
};

// ─── Props ────────────────────────────────────────────────────────────────────

export interface AppLayoutProps {
  children: ReactNode;
  /** Must match a slug in BOLDMIND_PRODUCTS */
  productSlug: string;
  /**
   * Override default font mode for this app.
   * Defaults to 'dyslexic' (OpenDyslexic) — BoldMind brand standard.
   */
  defaultFontMode?: 'dyslexic' | 'standard';
  /** Pass false to skip AuthProvider (e.g. public-only apps) */
  withAuth?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────

export function AppLayout({
  children,
  productSlug,
  defaultFontMode = 'dyslexic',
  withAuth = true,
}: AppLayoutProps) {
  // Build ProductThemeType from shared utils — single source of truth
  const product =
    getProductBySlug(productSlug) ||
    BOLDMIND_PRODUCTS.find((p) => p.slug === productSlug) ||
    BOLDMIND_PRODUCTS[0]!;

  const colors = getProductColors(productSlug);
  const theme  = productThemes[productSlug] ?? productThemes['boldmind-hub']!;

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

  const toastAccent = TOAST_ACCENT[productSlug] ?? colors.primary;

  const content = (
    <ThemeProvider defaultTheme="light" defaultProduct={productTheme}>
      <FontProvider defaultMode={defaultFontMode}>
        {withAuth ? (
          <AuthProvider>
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#1a1a1a',
                  color: '#fff',
                  fontFamily: 'var(--font-active, var(--font-primary))',
                  borderLeft: `4px solid ${toastAccent}`,
                },
                success: {
                  duration: 3000,
                  iconTheme: { primary: '#10b981', secondary: '#fff' },
                },
                error: {
                  duration: 5000,
                  iconTheme: { primary: '#ef4444', secondary: '#fff' },
                },
              }}
            />
          </AuthProvider>
        ) : (
          <>
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#1a1a1a',
                  color: '#fff',
                  fontFamily: 'var(--font-active, var(--font-primary))',
                  borderLeft: `4px solid ${toastAccent}`,
                },
              }}
            />
          </>
        )}
      </FontProvider>
    </ThemeProvider>
  );

  return content;
}