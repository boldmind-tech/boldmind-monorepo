"use client";

import { createContext, useContext, useEffect, useState, useMemo } from "react";
import {
  detectCurrentProduct,
  // getProductThemeClass,
  getProductTheme,
  productThemes,
  boldmindColors,
  getProductColors,
  BOLDMIND_PRODUCTS,
  getProductBySlug,
  getLiveProducts,
  getBuildingProducts,
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
  currentProduct: any;
  toggleTheme: () => void;
  toggleDyslexiaMode: () => void;
  dyslexiaMode: boolean;
  allProducts: typeof productThemes;
  allColors: typeof boldmindColors;
  availableProducts: any[];
  liveProducts: any[];
  buildingProducts: any[];
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
      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
      aria-label={`Switch theme. Current theme: ${theme}`}
      title={`Switch theme (${theme})`}
    >
      <span className="text-xl">{getThemeIcon()}</span>
    </button>
  );
}

// Component: DyslexiaModeToggle - ONLY VISIBLE FOR BOLDMIND OS
export function DyslexiaModeToggle() {
  const { dyslexiaMode, toggleDyslexiaMode, currentProduct } = useTheme();

  // Only show for BoldMind OS
  if (!currentProduct || !currentProduct.slug.includes('boldmind-os')) {
    return null;
  }

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
function getCurrentProductFromSlug(slug: string): any | null {
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
function createProductThemeFromProduct(product: any | null, productSlug: string): ProductThemeType {
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
  defaultTheme = "dark",
  defaultDyslexia = true,
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

    // Initialize dyslexia mode - ENABLED BY DEFAULT FOR ALL APPS
    // User requested dyslexia styling to be the default global standard
    const savedDyslexia = localStorage.getItem('dyslexia-mode');
    // Default to true if not set, as this is now the standard style
    const initialDyslexia = savedDyslexia !== 'false';

    // Check if current product is BoldMind OS
    let finalProductTheme: ProductThemeType;

    // Determine initial product theme first
    if (defaultProduct) {
      console.log('Theme: Using defaultProduct prop:', defaultProduct.slug);
      finalProductTheme = defaultProduct;
    } else if (forceProductSlug) {
      console.log('Theme: Using forceProductSlug:', forceProductSlug);
      const product = getProductBySlug(forceProductSlug);
      finalProductTheme = createProductThemeFromProduct(product || null, forceProductSlug);
    } else {
      const savedProductSlug = localStorage.getItem('product-theme');
      if (savedProductSlug) {
        const product = getProductBySlug(savedProductSlug);
        if (product) {
          console.log('Theme: Using saved product from localStorage:', savedProductSlug);
          finalProductTheme = createProductThemeFromProduct(product, savedProductSlug);
        } else {
          const detectedSlug = detectCurrentProduct();
          console.log('Theme: Saved product not found, detecting from URL:', detectedSlug);
          const detectedProduct = getProductBySlug(detectedSlug || '');
          finalProductTheme = createProductThemeFromProduct(detectedProduct || null, detectedSlug || '');
        }
      } else {
        const detectedSlug = detectCurrentProduct();
        console.log('Theme: Detected product slug:', detectedSlug, 'from URL:', window.location.href);

        const product = getProductBySlug(detectedSlug || '');
        finalProductTheme = createProductThemeFromProduct(product || null, detectedSlug || '');
        console.log('Theme: Initial product theme:', finalProductTheme.slug, finalProductTheme.name);
      }
    }

    setProductTheme(finalProductTheme);

    // Set dyslexia mode globally
    setDyslexiaMode(initialDyslexia);
    console.log('Theme: Initializing dyslexia mode to:', initialDyslexia);

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
        const product = getProductBySlug(detectedSlug || '');
        const newProductTheme = createProductThemeFromProduct(product || null, detectedSlug || '');

        console.log('Theme: Switching to detected product:', {
          old: productTheme.slug,
          new: detectedSlug,
          productName: product?.name || 'Unknown'
        });

        setProductTheme(newProductTheme);

        // Update dyslexia mode based on new product
        const isBoldMindOS = newProductTheme.slug.includes('boldmind-os');
        if (!isBoldMindOS && dyslexiaMode) {
          setDyslexiaMode(false);
          localStorage.removeItem('dyslexia-mode');
        }
      }
    }
  }, [defaultProduct, forceProductSlug, productTheme, dyslexiaMode]);

  // Apply theme effects
  useEffect(() => {
    if (!theme || !productTheme || dyslexiaMode === undefined) return;

    const root = document.documentElement;

    console.log('Theme: Applying theme to DOM:', {
      product: productTheme.slug,
      theme,
      dyslexiaMode,
      currentProduct: currentProduct?.name,
      isBoldMindOS: productTheme.slug.includes('boldmind-os')
    });

    // Set CSS custom properties
    root.style.setProperty("--product-primary", productTheme.colors.primary);
    root.style.setProperty("--product-secondary", productTheme.colors.secondary);
    root.style.setProperty("--product-accent", productTheme.colors.accent);

    // Set data attributes
    root.setAttribute("data-product", productTheme.slug);
    root.setAttribute("data-theme", theme);

    // Only set dyslexia mode for BoldMind OS
    const isBoldMindOS = productTheme.slug.includes('boldmind-os');
    root.setAttribute("data-dyslexia", (isBoldMindOS && dyslexiaMode).toString());

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

    // Handle dyslexia mode - GLOBAL
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
  }, [theme, productTheme, dyslexiaMode, currentProduct]);

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
    setTheme(themes[nextIndex] || "light");
  };

  const toggleDyslexiaMode = () => {
    if (dyslexiaMode === undefined) return;

    // Only allow toggling for BoldMind OS
    if (!productTheme || !productTheme.slug.includes('boldmind-os')) {
      console.warn('Dyslexia mode is only available for BoldMind OS');
      return;
    }

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

      // Update dyslexia mode based on new product
      const isBoldMindOS = productSlug.includes('boldmind-os');
      if (!isBoldMindOS && dyslexiaMode) {
        setDyslexiaMode(false);
        localStorage.removeItem('dyslexia-mode');
      }

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
    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-950 z-[9999]"
        style={{
          backgroundColor: productTheme?.colors?.background || undefined,
          color: productTheme?.colors?.primary || undefined
        }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#00143C]/10 border-t-[#00143C] rounded-full animate-spin" />
          <span className="font-bold tracking-widest text-[#00143C] dark:text-white uppercase text-xs animate-pulse">
            BoldMind Technology
          </span>
        </div>
      </div>
    );
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