// PACKAGES/ui/src/index.ts - FIXED WITH ProductThemeType EXPORT
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
export { FacebookSDK } from './components/analytics/FacebookSDK';
export { FacebookLoginButton } from './components/analytics/FacebookLoginButton';
export { FontProvider } from './components/FontProvider';
export { DyslexiaToggle } from './components/DyslexiaToggle';


// ============================================
// BASIC UI COMPONENTS
// ============================================
export { Button, type ButtonProps } from './components/Button';
export { Input, type InputProps } from './components/Input';
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './components/Card';
export { Modal } from './components/Modal';
export { Logo } from './components/Logo';
export { SocialLinks } from './components/SocialLinks';
export { StatusBadge } from './components/StatusBadge';
export { LoadingSpinner } from './components/LoadingSpinner';
export { ErrorBoundary } from './components/ErrorBoundary';

// ============================================
// LEGAL & COOKIE CONSENT COMPONENTS
// ============================================
export { PrivacyPolicy, type PrivacyPolicyProps, type PrivacyPolicySection } from './components/PrivacyPolicy';
export { TermsAndConditions, type TermsAndConditionsProps, type TermsSection } from './components/TermsAndConditions';
export { CookieConsent, type CookieConsentProps } from './components/CookieConsent';
export { useCookieConsent, type CookiePreferences, type UseCookieConsentReturn } from './hooks/useCookieConsent';

// ============================================
// LAYOUT & PAGE COMPONENTS
// ============================================
// export { default as ProductLayout } from './components/ProductLayout';
export { PricingContent, type PricingContentProps } from './components/PricingContent';


// ============================================
// PROVIDERS & CONTEXT
// ============================================
export {
  ThemeProvider,
  useTheme,
  ThemeToggle,
  useProductTheme,
  type ThemeContextType,
  type ProductThemeType,
  type Theme
} from './providers/theme-provider';

export { AppLayout } from './providers/AppLayout';

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

// ============================================
// GLOBAL STYLES (Import CSS last)
// ============================================
import './styles/globals.css';