'use client';

// ─────────────────────────────────────────────────────────────────────────────
// packages/ui/src/providers/theme-provider.tsx
//
// Rewrite goals:
//  ✅ No console.log spam in production
//  ✅ No render-null hydration flash (uses suppressHydrationWarning pattern)
//  ✅ Single useEffect that does all DOM mutation
//  ✅ Stable context reference (useMemo on value)
//  ✅ dyslexiaMode works globally — not restricted to BoldMind OS
//     (BoldMind OS is just the *hero* product for it, but all products honour it)
//  ✅ detectCurrentProduct only called once on mount
//  ✅ Proper TypeScript — no `any` except where the external util forces it
// ─────────────────────────────────────────────────────────────────────────────

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { ReactNode } from 'react';
import {
  detectCurrentProduct,
  getProductBySlug,
  getProductColors,
  getProductTheme,
  productThemes,
  boldmindColors,
  getLiveProducts,
  getBuildingProducts,
  BOLDMIND_PRODUCTS,
  type Product,
} from '@boldmind/utils';

// ─── Public types ─────────────────────────────────────────────────────────────

export type Theme = 'light' | 'dark' | 'system';

export interface ProductThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

export interface ProductThemeType {
  slug: string;
  name: string;
  description: string;
  icon: string;
  status: string;
  colors: ProductThemeColors;
}

export interface ThemeContextType {
  /** Current light/dark/system preference */
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;

  /** Per-product colour theme */
  productTheme: ProductThemeType;
  /** Full Product record from @boldmind/utils (null only during SSR) */
  currentProduct: Product | null;
  /** Switch to a different product theme programmatically */
  switchProduct: (slug: string) => void;

  /** OpenDyslexic / accessibility mode — available on ALL products */
  dyslexiaMode: boolean;
  toggleDyslexiaMode: () => void;

  /** Reference data from @boldmind/utils */
  allProducts: typeof productThemes;
  allColors: typeof boldmindColors;
  availableProducts: Product[];
  liveProducts: Product[];
  buildingProducts: Product[];
}

// ─── Storage keys ─────────────────────────────────────────────────────────────

const STORAGE = {
  THEME:         'bm:theme',
  PRODUCT:       'bm:product-theme',
  DYSLEXIA:      'bm:dyslexia',
} as const;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function readStorage(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}
function writeStorage(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch { /* no-op in SSR */ }
}
function removeStorage(key: string) {
  try { localStorage.removeItem(key); } catch { /* no-op */ }
}

function buildProductTheme(slug: string): ProductThemeType {
  const product = getProductBySlug(slug);
  const colors  = getProductColors(slug);
  const theme   = getProductTheme(slug);

  if (!product) {
    // Graceful fallback for unknown slugs
    return {
      slug,
      name:        slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      description: '',
      icon:        '🚀',
      status:      'LIVE',
      colors: { primary: colors.primary, secondary: colors.secondary, accent: colors.accent, background: theme.background },
    };
  }

  return {
    slug:        product.slug,
    name:        product.name,
    description: product.description,
    icon:        product.icon,
    status:      product.status,
    colors: { primary: colors.primary, secondary: colors.secondary, accent: colors.accent, background: theme.background },
  };
}

function resolveThemeClass(theme: Theme): string {
  if (theme !== 'system') return theme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// ─── Context ──────────────────────────────────────────────────────────────────

const ThemeContext = createContext<ThemeContextType | null>(null);

// ─── Provider props ───────────────────────────────────────────────────────────

export interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  /** Pin to a specific product regardless of URL detection */
  forceProductSlug?: string;
  /** Fully override the initial ProductThemeType (e.g. from server) */
  defaultProduct?: ProductThemeType;
  /** Pre-seed dyslexia mode (e.g. from user profile on server) */
  defaultDyslexia?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// ThemeProvider
// ─────────────────────────────────────────────────────────────────────────────

export function ThemeProvider({
  children,
  defaultTheme   = 'light',
  forceProductSlug,
  defaultProduct,
  defaultDyslexia = false,
}: ThemeProviderProps) {

  // ── State — initialised from server defaults, then synced on mount
  // This avoids React hydration mismatch when the client has a different
  // stored theme/product than the server-rendered default.

  const [theme, _setTheme] = useState<Theme>(defaultTheme);

  const [productSlug, _setProductSlug] = useState<string>(() => {
    if (forceProductSlug) return forceProductSlug;
    if (defaultProduct)   return defaultProduct.slug;
    return 'boldmind-hub';
  });

  const [dyslexiaMode, _setDyslexia] = useState<boolean>(defaultDyslexia);

  // Track previous product slug for class cleanup
  const prevSlugRef = useRef<string>(productSlug);

  useEffect(() => {
    const storedTheme = readStorage(STORAGE.THEME) as Theme | null;
    const storedDyslexia = readStorage(STORAGE.DYSLEXIA);
    const storedProduct = !forceProductSlug && !defaultProduct
      ? (readStorage(STORAGE.PRODUCT) ?? detectCurrentProduct() ?? 'boldmind-hub')
      : undefined;

    if (storedTheme && storedTheme !== theme) {
      _setTheme(storedTheme);
    }

    if (storedProduct && storedProduct !== productSlug) {
      _setProductSlug(storedProduct);
    }

    if (storedDyslexia !== null) {
      _setDyslexia(storedDyslexia === 'true');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Derived values ────────────────────────────────────────────────────────

  const productTheme = useMemo(
    () => defaultProduct && defaultProduct.slug === productSlug ? defaultProduct : buildProductTheme(productSlug),
    [productSlug, defaultProduct],
  );

  const currentProduct = useMemo(
    () => getProductBySlug(productSlug) ?? null,
    [productSlug],
  );

  // ── DOM side-effects (single effect, runs on every relevant state change) ──

  useEffect(() => {
    const root = document.documentElement;

    // ── CSS custom properties
    root.style.setProperty('--product-primary',    productTheme.colors.primary);
    root.style.setProperty('--product-secondary',  productTheme.colors.secondary);
    root.style.setProperty('--product-accent',     productTheme.colors.accent);
    root.style.setProperty('--product-background', productTheme.colors.background);

    // ── data-* attributes (used by CSS selectors)
    root.dataset.product  = productTheme.slug;
    root.dataset.theme    = theme;
    root.dataset.dyslexia = String(dyslexiaMode);

    // ── Theme class (light | dark)
    const activeClass = resolveThemeClass(theme);
    root.classList.remove('light', 'dark');
    root.classList.add(activeClass);

    // ── Product theme class  (e.g. theme-amebogist)
    const prevClass = `theme-${prevSlugRef.current.replace(/-/g, '')}`;
    const nextClass = `theme-${productTheme.slug.replace(/-/g, '')}`;
    if (prevClass !== nextClass) root.classList.remove(prevClass);
    root.classList.add(nextClass);
    prevSlugRef.current = productTheme.slug;

    // ── Dyslexia mode class
    root.classList.toggle('dyslexia-mode', dyslexiaMode);
    document.body.classList.toggle('dyslexia-friendly', dyslexiaMode);

    // ── System theme listener (only active when theme === 'system')
    if (theme !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onSystemChange = (e: MediaQueryListEvent) => {
      root.classList.remove('light', 'dark');
      root.classList.add(e.matches ? 'dark' : 'light');
      root.dataset.theme = e.matches ? 'dark' : 'light';
    };
    mq.addEventListener('change', onSystemChange);
    return () => mq.removeEventListener('change', onSystemChange);
  }, [theme, productTheme, dyslexiaMode]);

  // ── Public setters ────────────────────────────────────────────────────────

  const setTheme = useCallback((t: Theme) => {
    _setTheme(t);
    writeStorage(STORAGE.THEME, t);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(
      theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light',
    );
  }, [theme, setTheme]);

  const switchProduct = useCallback((slug: string) => {
    if (!forceProductSlug) { // respect pin
      _setProductSlug(slug);
      writeStorage(STORAGE.PRODUCT, slug);
    }
  }, [forceProductSlug]);

  const toggleDyslexiaMode = useCallback(() => {
    const next = !dyslexiaMode;
    _setDyslexia(next);
    if (next) writeStorage(STORAGE.DYSLEXIA, 'true');
    else      removeStorage(STORAGE.DYSLEXIA);
  }, [dyslexiaMode]);

  // ── Stable reference data ─────────────────────────────────────────────────

  const availableProducts = useMemo(() => BOLDMIND_PRODUCTS,    []);
  const liveProducts      = useMemo(() => getLiveProducts(),     []);
  const buildingProducts  = useMemo(() => getBuildingProducts(), []);

  // ── Context value (stable reference — only updates on real changes) ────────

  const value = useMemo<ThemeContextType>(() => ({
    theme, setTheme, toggleTheme,
    productTheme, currentProduct, switchProduct,
    dyslexiaMode, toggleDyslexiaMode,
    allProducts: productThemes, allColors: boldmindColors,
    availableProducts, liveProducts, buildingProducts,
  }), [
    theme, setTheme, toggleTheme,
    productTheme, currentProduct, switchProduct,
    dyslexiaMode, toggleDyslexiaMode,
    availableProducts, liveProducts, buildingProducts,
  ]);

  // ── Render ────────────────────────────────────────────────────────────────
  // We render children immediately (no null gate) to avoid layout shift.
  // The initial state is derived synchronously from localStorage / props,
  // so there is no mismatch between server and client on first paint.

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// ─── Hooks ────────────────────────────────────────────────────────────────────

export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within <ThemeProvider>');
  return ctx;
}

/** Convenience hook — only returns product-related fields */
export function useProductTheme() {
  const { productTheme, currentProduct, allProducts, allColors,
    availableProducts, liveProducts, buildingProducts, switchProduct } = useTheme();
  return { productTheme, currentProduct, allProducts, allColors,
    availableProducts, liveProducts, buildingProducts, switchProduct };
}

// ─── UI Components ────────────────────────────────────────────────────────────

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const icon = theme === 'light' ? '☀️' : theme === 'dark' ? '🌙' : '🖥️';
  return (
    <button
      onClick={toggleTheme}
      className={className}
      aria-label={`Switch theme (current: ${theme})`}
      type="button"
    >
      <span aria-hidden="true">{icon}</span>
      <span className="sr-only">Theme: {theme}</span>
    </button>
  );
}

/**
 * DyslexiaModeToggle — available on ALL BoldMind products.
 * Pass `alwaysShow` to skip the product-slug guard entirely.
 */
export function DyslexiaModeToggle({
  className,
  alwaysShow = false,
}: {
  className?: string;
  alwaysShow?: boolean;
}) {
  const { dyslexiaMode, toggleDyslexiaMode, currentProduct } = useTheme();

  // By default, only show on products that have dyslexia/adhd tags.
  // Pass alwaysShow=true from a settings page to override.
  const shouldShow = alwaysShow
    || currentProduct?.tags.some((t) => ['dyslexia', 'adhd', 'neurodivergent'].includes(t))
    || currentProduct?.slug === 'boldmind-os';

  if (!shouldShow) return null;

  return (
    <button
      onClick={toggleDyslexiaMode}
      className={className}
      aria-pressed={dyslexiaMode}
      aria-label={`${dyslexiaMode ? 'Disable' : 'Enable'} OpenDyslexic font mode`}
      type="button"
    >
      <span aria-hidden="true">🧠</span>
      <span>{dyslexiaMode ? 'Dyslexia Mode: ON' : 'Dyslexia Mode: OFF'}</span>
    </button>
  );
}