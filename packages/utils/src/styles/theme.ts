// packages/utils/src/styles/theme.ts
// SIMPLE THEME SYSTEM - USING THE SINGLE SOURCE OF TRUTH FROM constants/colors.ts

// Import from constants
import {
  BOLDMIND_COLOR_SCHEMES,
  type ColorScheme,
  type ProductColorScheme,
  getColorScheme,
  getCategoryColorSchemes,
  generateCSSVariables,
  getContrastColor,
  generateThemeClasses
} from '../constants/colors';

// === TYPOGRAPHY ===
export const boldmindTypography = {
  fonts: {
    heading: "'Plus Jakarta Sans', 'Inter', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
    serif: "'Lora', Georgia, 'Times New Roman', serif",
    dyslexic: "'OpenDyslexic', 'Comic Sans MS', sans-serif",
  },
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
    '8xl': '6rem',    // 96px
  }
};

// === ANIMATIONS ===
export const boldmindAnimations = {
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
  keyframes: {
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    pulse: {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.5 },
    },
    shimmer: {
      '0%': { backgroundPosition: '-200% 0' },
      '100%': { backgroundPosition: '200% 0' },
    },
    slideInRight: {
      '0%': { transform: 'translateX(100%)', opacity: 0 },
      '100%': { transform: 'translateX(0)', opacity: 1 },
    },
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    }
  }
};

// Create color palettes from the existing BOLDMIND_COLOR_SCHEMES
export const boldmindColors = Object.fromEntries(
  Object.entries(BOLDMIND_COLOR_SCHEMES).map(([slug, scheme]) => [
    slug.replace(/-/g, ''), // Convert kebab-case to camelCase
    {
      primary: scheme.primary,
      secondary: scheme.secondary,
      accent: scheme.accent,
      background: scheme.background,
      foreground: scheme.foreground,
      muted: scheme.muted,
    }
  ])
);

// Simple interface for theme usage
export interface ProductTheme {
  slug: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
}

// Create a simple themes object from the color schemes
export const productThemes: Record<string, ProductTheme> = Object.fromEntries(
  Object.entries(BOLDMIND_COLOR_SCHEMES).map(([slug, scheme]) => [
    slug,
    {
      slug,
      name: scheme.name,
      primary: scheme.primary,
      secondary: scheme.secondary,
      accent: scheme.accent,
      background: scheme.background,
      foreground: scheme.foreground,
      muted: scheme.muted,
    }
  ])
);

// Re-export the types
export type { ColorScheme, ProductColorScheme };
export type ProductThemeValue = ProductTheme;

// Helper functions for common theme operations

export function getProductTheme(slug: string): ProductTheme {
  const theme = productThemes[slug];
  if (!theme) {
    return productThemes['boldmind-hub']!; // Non-null assertion since we know it exists
  }
  return theme;
}
export function getProductColors(slug: string) {
  const theme = getProductTheme(slug);
  return {
    primary: theme.primary,
    secondary: theme.secondary,
    accent: theme.accent,
    background: theme.background,
    foreground: theme.foreground,
    muted: theme.muted,
  };
}

export function getProductThemeClass(slug: string): string {
  return `theme-${slug}`;
}

// Re-export all utility functions from colors
export {
  getColorScheme,
  getCategoryColorSchemes,
  generateCSSVariables,
  getContrastColor,
  generateThemeClasses,
};

// Export BOLDMIND_COLOR_SCHEMES for convenience
export { BOLDMIND_COLOR_SCHEMES };

// Export as default for easy importing
export default {
  colors: BOLDMIND_COLOR_SCHEMES,
  colorPalettes: boldmindColors,
  typography: boldmindTypography,
  animations: boldmindAnimations,
  themes: productThemes,
  getTheme: getProductTheme,
  getProductColors,
  getThemeClass: getProductThemeClass,
  generateCSSVariables,
  getContrastColor,
  getColorScheme,
};