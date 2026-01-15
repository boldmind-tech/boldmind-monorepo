'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { 
  detectCurrentProduct, 
  getProductThemeClass  // This is from lib/utils.ts
} from '../lib/utils';
import { 
  getProductTheme,  // This is from styles/theme.ts - returns ProductThemeValue
  productThemes, 
  type ProductThemeValue,
  boldmindColors,  // ADD THIS IMPORT
  getProductColors  // ADD THIS IMPORT - it's in styles/theme.ts
} from '../styles/theme';


type Theme = 'light' | 'dark' | 'system';

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
  product?: any;
}

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  productTheme: ProductThemeType;
  toggleTheme: () => void;
  toggleDyslexiaMode: () => void;
  dyslexiaMode: boolean;
  allProducts: typeof productThemes;
  allColors: typeof boldmindColors;
  switchProduct: (productSlug: string) => void; // ADD THIS
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return '☀️';
      case 'dark': return '🌙';
      case 'system': return '🖥️';
      default: return '🎨';
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

// Dyslexia Mode Toggle Component
export function DyslexiaModeToggle() {
  const { dyslexiaMode, toggleDyslexiaMode } = useTheme();
  
  return (
    <button
      onClick={toggleDyslexiaMode}
      className={`dyslexia-toggle ${dyslexiaMode ? 'active' : ''}`}
      aria-label={`${dyslexiaMode ? 'Disable' : 'Enable'} dyslexia-friendly mode`}
    >
      <span className="dyslexia-icon">🧠</span>
      <span className="dyslexia-label">
        {dyslexiaMode ? 'Dyslexia Mode: ON' : 'Dyslexia Mode: OFF'}
      </span>
    </button>
  );
}

// Product Theme Hook
export function useProductTheme() {
  const { productTheme, allProducts, allColors } = useTheme();
  
  return {
    currentProduct: productTheme,
    allProducts,
    allColors,
    // Helper to switch product theme
    switchProduct: (productSlug: string) => {
      // This would need to be implemented in your ThemeContext
      // You'll need to add a switchProduct function to your context
      console.log('Switching to product:', productSlug);
      // Implementation would depend on your context structure
    }
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function getThemeCSSVariables(productSlug: string) {
  const theme = getProductTheme(productSlug);
  const colors = getProductColors(productSlug);
  
  return {
    '--product-primary': colors.primary,
    '--product-secondary': colors.secondary,
    '--product-accent': colors.accent,
    '--product-background': theme.background,
  };
}

// Helper to apply theme to element
export function applyThemeToElement(element: HTMLElement, productSlug: string) {
  const variables = getThemeCSSVariables(productSlug);
  Object.entries(variables).forEach(([key, value]) => {
    element.style.setProperty(key, value);
  });
  element.setAttribute('data-product', productSlug);
}

// ADD THIS TYPE
export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultDyslexia?: boolean;
  defaultProduct?: ProductThemeType; // ADD THIS LINE
}

export function ThemeProvider({ 
  children,
  defaultTheme = 'light',
  defaultDyslexia = false,
  defaultProduct
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [dyslexiaMode, setDyslexiaMode] = useState<boolean>(defaultDyslexia);
  const [productTheme, setProductTheme] = useState<ProductThemeType>(
    defaultProduct || {
      slug: 'boldmind-hub',
      name: 'BoldMind',
      description: 'Technology Solution Enterprise',
      icon: '🚀',
      status: 'LIVE',
      colors: {
        primary: boldmindColors.primary[500],
        secondary: boldmindColors.accent.yellow,
        accent: boldmindColors.primary[500],
        background: 'linear-gradient(135deg, #00143C 0%, #2A4A6E 100%)',
      }
    }
  );
const getProductThemeClassName = (productSlug: string): string => {
    return `theme-${productSlug.replace(/-/g, '')}`;
  };

 useEffect(() => {
    // Only auto-detect if no defaultProduct provided
    if (!defaultProduct) {
      const product = detectCurrentProduct();
      const themeData = getProductTheme(product);
      const colors = getProductColors(product);
      
      setProductTheme({
        slug: product,
        name: product.charAt(0).toUpperCase() + product.slice(1),
        description: getProductDescription(product),
        icon: getProductIcon(product),
        status: getProductStatus(product),
        colors: {
          primary: colors.primary,
          secondary: colors.secondary,
          accent: colors.accent,
          background: themeData.background,
        }
      });
    }
  }, [defaultProduct]);

  // Helper functions
  const getProductDescription = (slug: string): string => {
    const descriptions: Record<string, string> = {
      'boldmind-hub': 'BoldMind Technology Ecosystem',
      'amebogist': 'Nigeria\'s #1 Pidgin English platform',
      'educenter': 'Comprehensive Nigerian ed-tech platform',
      'planai': 'AI-powered business planning suite',
      'boldmind-os': 'Productivity system for neurodivergent entrepreneurs',
    };
    return descriptions[slug] || 'Technology Solution Enterprise';
  };

  const getProductIcon = (slug: string): string => {
    const icons: Record<string, string> = {
      'boldmind-hub': '🚀',
      'amebogist': '📰',
      'educenter': '🎓',
      'planai': '🤖',
      'boldmind-os': '🧠',
    };
    return icons[slug] || '🚀';
  };

  const getProductStatus = (slug: string): string => {
    const statuses: Record<string, string> = {
      'boldmind-hub': 'LIVE',
      'amebogist': 'LIVE',
      'educenter': 'LIVE',
      'planai': 'BUILDING',
      'boldmind-os': 'BUILDING',
    };
    return statuses[slug] || 'LIVE';
  };

  // ... rest of your existing useEffect for theme setup
 useEffect(() => {
    const root = document.documentElement;
    
    // Set CSS custom properties
    root.style.setProperty('--product-primary', productTheme.colors.primary);
    root.style.setProperty('--product-secondary', productTheme.colors.secondary);
    root.style.setProperty('--product-accent', productTheme.colors.accent);
    
    // Set data attributes for CSS theming
    root.setAttribute('data-product', productTheme.slug);
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-dyslexia', dyslexiaMode.toString());
    
    // Remove previous theme classes
    Object.keys(productThemes).forEach(slug => {
      root.classList.remove(getProductThemeClassName(slug));
    });
    
    // Add current theme class
    root.classList.add(getProductThemeClassName(productTheme.slug));
    
    // ... rest of your existing theme setup code ...

    // Handle system theme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        const newTheme = e.matches ? 'dark' : 'light';
        root.setAttribute('data-theme', newTheme);
        root.classList.toggle('dark', e.matches);
        root.classList.toggle('light', !e.matches);
      }
    };
    
    if (theme === 'system') {
      const systemTheme = mediaQuery.matches ? 'dark' : 'light';
      root.setAttribute('data-theme', systemTheme);
      root.classList.add(systemTheme);
    } else {
      root.setAttribute('data-theme', theme);
      root.classList.add(theme);
    }
    
    // Handle dyslexia mode
    if (dyslexiaMode) {
      root.classList.add('dyslexia-mode');
      document.body.classList.add('dyslexia-friendly');
    } else {
      root.classList.remove('dyslexia-mode');
      document.body.classList.remove('dyslexia-friendly');
    }
    
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [theme, productTheme, dyslexiaMode]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    // You could also save to localStorage here
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  const toggleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const toggleDyslexiaMode = () => {
    const newMode = !dyslexiaMode;
    setDyslexiaMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('dyslexia-mode', newMode.toString());
    }
  };

  const switchProduct = (productSlug: string) => {
    const product = productSlug;
    const themeData = getProductTheme(product);
    const colors = getProductColors(product);
    
    setProductTheme({
      slug: product,
      name: product.charAt(0).toUpperCase() + product.slice(1),
      description: getProductDescription(product),
      icon: getProductIcon(product),
      status: getProductStatus(product),
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        accent: colors.accent,
        background: themeData.background,
      }
    });
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('product-theme', productSlug);
    }
  };


  // Update your context value to include switchProduct
  const value: ThemeContextType = {
    theme,
    setTheme,
    productTheme,
    toggleTheme,
    toggleDyslexiaMode,
    dyslexiaMode,
    allProducts: productThemes,
    allColors: boldmindColors,
    switchProduct,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}