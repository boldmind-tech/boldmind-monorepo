// packages/ui/src/index.ts
'use client';

// ============================================
// MAIN NAVIGATION & FOOTER COMPONENTS
// ============================================
export { SuperNavbar, type NavLink, type SuperNavbarProps } from './components/SuperNavbar';
export { SuperFooter, type FooterLink, type FooterSection, type SuperFooterProps } from './components/SuperFooter';

// ============================================
// BACKGROUND & VISUAL EFFECTS
// ============================================
export { ParticleBackground } from './components/ParticleBackground';
export { Confetti } from './components/Confetti';
export { TypewriterEffect } from './components/TypewriterEffect';

// ============================================
// BASIC UI COMPONENTS
// ============================================
export { default as Button, type ButtonProps } from './components/Button';
export { default as Input, type InputProps } from './components/Input';
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './components/Card';
export { default as Modal } from './components/Modal';
export { default as Logo } from './components/Logo';
export { default as SocialLinks } from './components/SocialLinks';
export { default as StatusBadge } from './components/StatusBadge';
export { default as LoadingSpinner } from './components/LoadingSpinner';
export { ErrorBoundary } from './components/ErrorBoundary';

// ============================================
// LAYOUT COMPONENTS
// ============================================
export { default as ProductLayout } from './components/ProductLayout';
// export { default as Navbar } from './components/';
// export { default as Footer } from './components/Footer';

// ============================================
// PROVIDERS & CONTEXT
// ============================================
export { 
  ThemeProvider, 
  useTheme, 
  ThemeToggle, 
  DyslexiaModeToggle, 
  useProductTheme,
  type ThemeContextType 
} from './providers/theme-provider';

// ============================================
// CUSTOM HOOKS
// ============================================
export { useMediaQuery } from './hooks/useMediaQuery';
export { useClickOutside } from './hooks/useClickOutside';
export { useDebounce } from './hooks/useDebounce';

// ============================================
// UTILITIES
// ============================================
export { 
  cn, 
  getProductFromPath, 
  detectCurrentProduct, 
  getProductThemeColors,
  getProductThemeClass,
  formatCurrency, 
  formatDate, 
  truncateText 
} from './lib/utils';

// ============================================
// THEME & STYLES
// ============================================
export { 
  boldmindColors, 
  boldmindTypography, 
  boldmindAnimations, 
  productThemes,
  type ProductTheme 
} from './styles/theme';

// ============================================
// GLOBAL STYLES (Import CSS last)
// ============================================
import './styles/globals.css';