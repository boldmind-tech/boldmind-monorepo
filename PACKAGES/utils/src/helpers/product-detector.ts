// PACKAGES/utils/src/helpers/product-detector.ts
// Client-side helpers for theme and product initialization.
// NOTE: detectCurrentProduct() canonical version is in utils/index.ts.

import { BOLDMIND_PRODUCTS, type Product } from '../constants/products';

export function getProductTheme(productSlug: string): Product | undefined {
  return BOLDMIND_PRODUCTS.find(p => p.slug === productSlug);
}

/**
 * Inject data-product, data-theme, data-dyslexia attributes on the root <html> element.
 * Call this once on app init (e.g., in layout.tsx).
 * Pass productSlug explicitly — detectCurrentProduct() from utils/index.ts.
 */
export function injectProductAttributes(productSlug: string = 'boldmind-hub') {
  if (typeof window === 'undefined') return;

  const theme = localStorage.getItem('theme') || 'light';
  const dyslexia = localStorage.getItem('dyslexia') === 'true';

  const html = document.documentElement;
  html.setAttribute('data-product', productSlug);
  html.setAttribute('data-theme', theme);
  html.setAttribute('data-dyslexia', dyslexia.toString());
}

/**
 * Switch the active color theme (light / dark / auto).
 * Persists choice to localStorage.
 */
export function switchTheme(theme: 'light' | 'dark' | 'auto') {
  if (typeof window === 'undefined') return;
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}

/**
 * Enable or disable dyslexia-friendly mode (OpenDyslexic font + wider spacing).
 * Persists choice to localStorage.
 */
export function toggleDyslexiaMode(enabled: boolean) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('dyslexia', enabled.toString());
  document.documentElement.setAttribute('data-dyslexia', enabled.toString());
}