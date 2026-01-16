// lib/theme.ts
"use client";

import { createContext, useContext, useEffect, useState, useMemo } from "react";
import {
  detectCurrentProduct,
  getProductThemeClass,
} from "../lib/utils";
import {
  getProductTheme,
  productThemes,
  type ProductThemeValue,
  boldmindColors,
  getProductColors,
} from "../styles/theme";
import { 
  BOLDMIND_PRODUCTS, 
  getProductBySlug, 
  type Product,
  getLiveProducts,
  getBuildingProducts
} from '@boldmind/utils';

// Types
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
  currentProduct: Product | null;
  toggleTheme: () => void;
  toggleDyslexiaMode: () => void;
  dyslexiaMode: boolean;
  allProducts: typeof productThemes;
  allColors: typeof boldmindColors;
  availableProducts: Product[];
  liveProducts: Product[];
  buildingProducts: Product[];
  switchProduct: (productSlug: string) => void;
}

// Component: ThemeToggle
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return "☀️";
      case "dark":
        return "🌙";
      case "system":
        return "🖥️";
      default:
        return "🎨";
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch theme. Current theme: ${theme}`}
    >
      <span className="theme-icon">{getThemeIcon()}</span>
      <span className="theme-label sr-only">Theme: {theme}</span>
    </button>
  );
}

// Component: DyslexiaModeToggle
export function DyslexiaModeToggle() {
  const { dyslexiaMode, toggleDyslexiaMode } = useTheme();

  return (
    <button
      onClick={toggleDyslexiaMode}
      className={`dyslexia-toggle ${dyslexiaMode ? "active" : ""}`}
      aria-label={`${dyslexiaMode ? "Disable" : "Enable"} dyslexia-friendly mode`}
    >
      <span className="dyslexia-icon">🧠</span>
      <span className="dyslexia-label">
        {dyslexiaMode ? "Dyslexia Mode: ON" : "Dyslexia Mode: OFF"}
      </span>
    </button>
  );
}

// Hook: useProductTheme
export function useProductTheme() {
  const { 
    productTheme, 
    allProducts, 
    allColors, 
    availableProducts,
    liveProducts,
    buildingProducts,
    switchProduct 
  } = useTheme();

  return {
    currentProduct: productTheme,
    allProducts,
    allColors,
    availableProducts,
    liveProducts,
    buildingProducts,
    switchProduct,
  };
}

// Helper: getCurrentProductFromSlug - FIXED TYPE
function getCurrentProductFromSlug(slug: string): Product | null {
  const found = getProductBySlug(slug);
  
  if (found) {
    console.log('Theme: Found product in database:', found.name, found.slug);
    return found; // found is Product | undefined, but we return null if undefined
  }
  
  console.warn('Theme: Product not found in database:', slug);
  return null;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper: createProductThemeFromProduct - FIXED TYPE
function createProductThemeFromProduct(product: Product | null, productSlug: string): ProductThemeType {
  // Convert undefined to null
  const productOrNull = product || null;
  
  if (!productOrNull) {
    // Fallback if product not found in database
    const themeData = getProductTheme(productSlug);
    const colors = getProductColors(productSlug);
    
    return {
      slug: productSlug,
      name: productSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      description: `Product: ${productSlug}`,
      icon: '🚀',
      status: 'LIVE',
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        accent: colors.accent,
        background: themeData.background,
      },
    };
  }
  
  const themeData = getProductTheme(productOrNull.slug);
  const colors = getProductColors(productOrNull.slug);
  
  return {
    slug: productOrNull.slug,
    name: productOrNull.name,
    description: productOrNull.description,
    icon: productOrNull.icon,
    status: productOrNull.status,
    colors: {
      primary: colors.primary,
      secondary: colors.secondary,
      accent: colors.accent,
      background: themeData.background,
    },
  };
}

// Props for ThemeProvider
export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultDyslexia?: boolean;
  defaultProduct?: ProductThemeType;
  forceProductSlug?: string;
}

// Component: ThemeProvider
export function ThemeProvider({
  children,
  defaultTheme = "light",
  defaultDyslexia = false,
  defaultProduct,
  forceProductSlug,
}: ThemeProviderProps) {
  // Initialize with undefined to avoid hydration mismatch
  const [theme, setThemeState] = useState<Theme | undefined>(undefined);
  const [dyslexiaMode, setDyslexiaMode] = useState<boolean | undefined>(undefined);
  const [productTheme, setProductTheme] = useState<ProductThemeType | undefined>(undefined);

  // Use useEffect to initialize from localStorage/client-side only
  useEffect(() => {
    // Initialize theme from localStorage or default
    const savedTheme = localStorage.getItem('theme') as Theme;
    const initialTheme = savedTheme || defaultTheme;
    setThemeState(initialTheme);
    console.log('Theme: Initializing theme to:', initialTheme);

    // Initialize dyslexia mode
    const savedDyslexia = localStorage.getItem('dyslexia-mode');
    const initialDyslexia = savedDyslexia === 'true' || defaultDyslexia;
    setDyslexiaMode(initialDyslexia);
    console.log('Theme: Initializing dyslexia mode to:', initialDyslexia);

    // Initialize product theme
    let initialProductTheme: ProductThemeType;
    
    // 1. If defaultProduct is provided, use it
    if (defaultProduct) {
      console.log('Theme: Using defaultProduct prop:', defaultProduct.slug);
      initialProductTheme = defaultProduct;
    }
    // 2. If forceProductSlug is provided, use it
    else if (forceProductSlug) {
      console.log('Theme: Using forceProductSlug:', forceProductSlug);
      const product = getProductBySlug(forceProductSlug);
      // Convert undefined to null
      initialProductTheme = createProductThemeFromProduct(product || null, forceProductSlug);
    }
    // 3. Try to get from localStorage first
    else {
      const savedProductSlug = localStorage.getItem('product-theme');
      if (savedProductSlug) {
        const product = getProductBySlug(savedProductSlug);
        if (product) {
          console.log('Theme: Using saved product from localStorage:', savedProductSlug);
          initialProductTheme = createProductThemeFromProduct(product, savedProductSlug);
        } else {
          // Saved slug not found in database, detect from URL
          const detectedSlug = detectCurrentProduct();
          console.log('Theme: Saved product not found, detecting from URL:', detectedSlug);
          const detectedProduct = getProductBySlug(detectedSlug);
          initialProductTheme = createProductThemeFromProduct(detectedProduct || null, detectedSlug);
        }
      }
      // 4. Use detectCurrentProduct() from utils.ts
      else {
        const detectedSlug = detectCurrentProduct();
        console.log('Theme: Detected product slug:', detectedSlug, 'from URL:', window.location.href);
        
        const product = getProductBySlug(detectedSlug);
        initialProductTheme = createProductThemeFromProduct(product || null, detectedSlug);
        console.log('Theme: Initial product theme:', initialProductTheme.slug, initialProductTheme.name);
      }
    }
    
    setProductTheme(initialProductTheme);
  }, [defaultProduct, defaultTheme, defaultDyslexia, forceProductSlug]);

  // Memoized current product from @boldmind/utils
  const currentProduct = useMemo(() => {
    if (!productTheme) return null;
    return getCurrentProductFromSlug(productTheme.slug);
  }, [productTheme]);

  // Get all available products from @boldmind/utils
  const availableProducts = useMemo(() => BOLDMIND_PRODUCTS, []);
  const liveProducts = useMemo(() => getLiveProducts(), []);
  const buildingProducts = useMemo(() => getBuildingProducts(), []);

  const getProductThemeClassName = (productSlug: string): string => {
    return `theme-${productSlug.replace(/-/g, "")}`;
  };

  // Auto-detect product on mount ONLY if no defaultProduct or forceProductSlug
  useEffect(() => {
    if (productTheme && !defaultProduct && !forceProductSlug) {
      const detectedSlug = detectCurrentProduct();
      console.log('Theme: Checking for product change. Current:', productTheme.slug, 'Detected:', detectedSlug);
      
      if (detectedSlug !== productTheme.slug) {
        const product = getProductBySlug(detectedSlug);
        const newProductTheme = createProductThemeFromProduct(product || null, detectedSlug);
        
        console.log('Theme: Switching to detected product:', {
          old: productTheme.slug,
          new: detectedSlug,
          productName: product?.name || 'Unknown'
        });
        
        setProductTheme(newProductTheme);
      }
    }
  }, [defaultProduct, forceProductSlug, productTheme]);

  // Apply theme effects
  useEffect(() => {
    if (!theme || !productTheme || dyslexiaMode === undefined) return;

    const root = document.documentElement;

    console.log('Theme: Applying theme to DOM:', {
      product: productTheme.slug,
      theme,
      dyslexiaMode,
      currentProduct: currentProduct?.name
    });

    // Set CSS custom properties
    root.style.setProperty("--product-primary", productTheme.colors.primary);
    root.style.setProperty("--product-secondary", productTheme.colors.secondary);
    root.style.setProperty("--product-accent", productTheme.colors.accent);

    // Set data attributes
    root.setAttribute("data-product", productTheme.slug);
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-dyslexia", dyslexiaMode.toString());

    // Remove previous theme classes
    Object.keys(productThemes).forEach((slug) => {
      root.classList.remove(getProductThemeClassName(slug));
    });

    // Add current theme class
    root.classList.add(getProductThemeClassName(productTheme.slug));

    // System theme listener
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        const newTheme = e.matches ? "dark" : "light";
        root.setAttribute("data-theme", newTheme);
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

    // Handle dyslexia mode
    if (dyslexiaMode) {
      root.classList.add("dyslexia-mode");
      document.body.classList.add("dyslexia-friendly");
    } else {
      root.classList.remove("dyslexia-mode");
      document.body.classList.remove("dyslexia-friendly");
    }

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme, productTheme, dyslexiaMode]);

  // Theme functions
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  const toggleTheme = () => {
    if (!theme) return;
    const themes: Theme[] = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const toggleDyslexiaMode = () => {
    if (dyslexiaMode === undefined) return;
    const newMode = !dyslexiaMode;
    setDyslexiaMode(newMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("dyslexia-mode", newMode.toString());
    }
  };

  const switchProduct = (productSlug: string) => {
    console.log('Theme: Manually switching product to:', productSlug);
    
    const product = getProductBySlug(productSlug);
    if (product) {
      const newProductTheme = createProductThemeFromProduct(product, productSlug);
      setProductTheme(newProductTheme);

      if (typeof window !== "undefined") {
        localStorage.setItem("product-theme", productSlug);
      }
    } else {
      console.warn(`Theme: Product with slug "${productSlug}" not found`);
    }
  };

  // Don't render children until initialized to avoid hydration mismatch
  if (theme === undefined || dyslexiaMode === undefined || !productTheme) {
    console.log('Theme: Not rendering children, waiting for initialization');
    return null;
  }

  // Context value
  const value: ThemeContextType = {
    theme,
    setTheme,
    productTheme,
    currentProduct,
    toggleTheme,
    toggleDyslexiaMode,
    dyslexiaMode,
    allProducts: productThemes,
    allColors: boldmindColors,
    availableProducts,
    liveProducts,
    buildingProducts,
    switchProduct,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// Hook: useTheme
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}