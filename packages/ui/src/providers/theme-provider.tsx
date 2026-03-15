//PACKAGES/ui/src/providers/theme-provider.tsx

"use client";

import { createContext, useContext, useEffect, useState, useMemo } from "react";
import {
  detectCurrentProduct,
  getProductTheme,
  productThemes,
  boldmindColors,
  getProductColors,
  BOLDMIND_PRODUCTS,
  getProductBySlug,
  getLiveProducts,
  getBuildingProducts,
} from '@boldmind/utils';

export type Theme = "light" | "dark" | "system";

export interface ProductThemeType {
  slug: string;
  name: string;
  description: string;
  icon: string;
  status: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
}

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  productTheme: ProductThemeType;
  currentProduct: any;
  toggleTheme: () => void;
  allProducts: typeof productThemes;
  allColors: typeof boldmindColors;
  availableProducts: any[];
  liveProducts: any[];
  buildingProducts: any[];
  switchProduct: (productSlug: string) => void;
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const getThemeIcon = () => {
    switch (theme) {
      case "light": return "☀️";
      case "dark": return "🌙";
      case "system": return "🖥️";
      default: return "🎨";
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
      aria-label={`Switch theme: ${theme}`}
    >
      <span className="text-xl">{getThemeIcon()}</span>
    </button>
  );
}

export function useProductTheme() {
  const { productTheme, allProducts, allColors, availableProducts, liveProducts, buildingProducts, switchProduct } = useTheme();
  return { currentProduct: productTheme, allProducts, allColors, availableProducts, liveProducts, buildingProducts, switchProduct };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getCurrentProductFromSlug(slug: string): any | null {
  return getProductBySlug(slug) || null;
}

function createProductThemeFromProduct(product: any | null, productSlug: string): ProductThemeType {
  if (!product) {
    const themeData = getProductTheme(productSlug);
    const colors = getProductColors(productSlug);
    return {
      slug: productSlug,
      name: productSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      description: `Product: ${productSlug}`,
      icon: '🚀',
      status: 'LIVE',
      colors: { primary: colors.primary, secondary: colors.secondary, accent: colors.accent, background: themeData.background },
    };
  }

  const themeData = getProductTheme(product.slug);
  const colors = getProductColors(product.slug);
  return {
    slug: product.slug,
    name: product.name,
    description: product.description,
    icon: product.icon,
    status: product.status,
    colors: { primary: colors.primary, secondary: colors.secondary, accent: colors.accent, background: themeData.background },
  };
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultProduct?: ProductThemeType;
  forceProductSlug?: string;
}

export function ThemeProvider({ children, defaultTheme = "dark", defaultProduct, forceProductSlug }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme | undefined>(undefined);
  const [productTheme, setProductTheme] = useState<ProductThemeType | undefined>(undefined);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme || defaultTheme;
    setThemeState(savedTheme);

    let finalProductTheme: ProductThemeType;
    if (defaultProduct) {
      finalProductTheme = defaultProduct;
    } else if (forceProductSlug) {
      const product = getProductBySlug(forceProductSlug);
      finalProductTheme = createProductThemeFromProduct(product || null, forceProductSlug);
    } else {
      const savedProductSlug = localStorage.getItem('product-theme');
      const detectedSlug = detectCurrentProduct();
      const slug = savedProductSlug || detectedSlug || 'boldmind-hub';
      const product = getProductBySlug(slug);
      finalProductTheme = createProductThemeFromProduct(product || null, slug);
    }

    setProductTheme(finalProductTheme);
    setMounted(true);
  }, [defaultProduct, defaultTheme, forceProductSlug]);

  const currentProduct = useMemo(() => {
    if (!productTheme) return null;
    return getCurrentProductFromSlug(productTheme.slug);
  }, [productTheme]);

  const availableProducts = useMemo(() => BOLDMIND_PRODUCTS, []);
  const liveProducts = useMemo(() => getLiveProducts(), []);
  const buildingProducts = useMemo(() => getBuildingProducts(), []);

  useEffect(() => {
    if (!theme || !productTheme || !mounted) return;

    const root = document.documentElement;
    root.style.setProperty("--product-primary", productTheme.colors.primary);
    root.style.setProperty("--product-secondary", productTheme.colors.secondary);
    root.style.setProperty("--product-accent", productTheme.colors.accent);
    root.setAttribute("data-product", productTheme.slug);
    root.setAttribute("data-theme", theme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        root.setAttribute("data-theme", e.matches ? "dark" : "light");
        root.classList.toggle("dark", e.matches);
        root.classList.toggle("light", !e.matches);
      }
    };

    if (theme === "system") {
      const systemTheme = mediaQuery.matches ? "dark" : "light";
      root.setAttribute("data-theme", systemTheme);
      root.classList.add(systemTheme);
    } else {
      root.setAttribute("data-theme", theme);
      root.classList.add(theme);
    }

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, productTheme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    if (!theme) return;
    const themes: Theme[] = ["light", "dark", "system"];
    const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextIndex] || 'system');
  };

  const switchProduct = (productSlug: string) => {
    const product = getProductBySlug(productSlug);
    if (product) {
      setProductTheme(createProductThemeFromProduct(product, productSlug));
      localStorage.setItem("product-theme", productSlug);
    }
  };

  if (!mounted || !theme || !productTheme) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-background">
        <div className="flex flex-col items-center gap-3">
          <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          <span className="text-xs font-bold tracking-wider uppercase text-primary/70">Loading</span>
        </div>
      </div>
    );
  }

  const value: ThemeContextType = {
    theme, setTheme, productTheme, currentProduct, toggleTheme,
    allProducts: productThemes, allColors: boldmindColors,
    availableProducts, liveProducts, buildingProducts, switchProduct,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}