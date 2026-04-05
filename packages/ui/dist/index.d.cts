import * as react_jsx_runtime0 from "react/jsx-runtime";
import React$1, { Component, ErrorInfo, ReactNode, RefObject } from "react";
import * as _boldmind_utils0 from "@boldmind/utils";
import { Product, boldmindColors, productThemes } from "@boldmind/utils";
import { ClassValue } from "clsx";

//#region src/components/SuperNavbar.d.ts
interface NavLink {
  href: string;
  label: string;
  icon?: React$1.ReactNode;
  badge?: string;
  isExternal?: boolean;
}
interface SuperNavbarProps {
  /** Path to logo image. Pass "/logo.webp" from hub, product logo from sub-apps. */
  logoSrc?: string;
  /**
   * Brand name shown next to logo.
   * Hub passes "BoldMind Hub". Sub-apps omit this — falls back to product name.
   */
  brandName?: string;
  links?: NavLink[];
  cta?: {
    href: string;
    label: string;
    variant?: "primary" | "secondary" | "glow" | "gradient";
    icon?: React$1.ReactNode;
  };
  theme?: "dark" | "light" | "transparent";
  sticky?: boolean;
  animated?: boolean;
  showParticles?: boolean;
  showThemeControls?: boolean;
  className?: string;
  /** Deprecated: user display is now handled by DashboardSidebar */
  user?: {
    name: string;
    role: string;
  };
  onLinkClick?: (href: string) => void;
}
declare function SuperNavbar({
  logoSrc,
  brandName,
  links,
  cta,
  theme,
  sticky,
  animated,
  showParticles,
  showThemeControls,
  className,
  onLinkClick
}: SuperNavbarProps): react_jsx_runtime0.JSX.Element;
//#endregion
//#region src/components/SuperFooter.d.ts
interface FooterLink {
  href: string;
  label: string;
  icon?: React$1.ReactNode;
  isExternal?: boolean;
  badge?: string;
}
interface FooterSection {
  title: string;
  links: FooterLink[];
}
interface SuperFooterProps {
  logoSrc?: string;
  product?: string;
  sections?: FooterSection[] | undefined;
  contactInfo?: {
    email?: string;
    phone?: string;
    whatsapp?: string;
    address?: string;
  };
  socialLinks?: {
    platform: string;
    url: string;
    icon: React$1.ReactNode;
  }[];
  newsletter?: boolean;
  showStats?: boolean;
  animated?: boolean;
  className?: string;
  copyright?: string;
  variant?: "default" | "minimal" | "compact";
}
declare function SuperFooter({
  sections,
  socialLinks,
  newsletter,
  showStats,
  animated,
  className,
  copyright,
  variant
}: SuperFooterProps): react_jsx_runtime0.JSX.Element;
//#endregion
//#region src/components/ParticleBackground.d.ts
interface ParticleBackgroundProps {
  density?: number;
  particleCount?: number;
  particleColor?: string;
  connectDistance?: number;
  mouseInteraction?: boolean;
  className?: string;
}
declare function ParticleBackground({
  particleCount,
  particleColor,
  connectDistance,
  mouseInteraction,
  className
}: ParticleBackgroundProps): react_jsx_runtime0.JSX.Element;
//#endregion
//#region src/components/Confetti.d.ts
interface ConfettiProps {
  count?: number;
  colors?: string[];
  shapes?: Array<'circle' | 'square' | 'triangle' | 'star'>;
  duration?: number;
  onComplete?: () => void;
}
declare function Confetti({
  count,
  colors,
  shapes,
  duration,
  onComplete
}: ConfettiProps): react_jsx_runtime0.JSX.Element;
//#endregion
//#region src/components/TypewriterEffect.d.ts
interface TypewriterEffectProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorChar?: string;
  cursorBlinkSpeed?: number;
  className?: string;
  textClassName?: string;
  cursorClassName?: string;
  onComplete?: () => void;
}
declare function TypewriterEffect({
  texts,
  speed,
  deleteSpeed,
  delay,
  loop,
  showCursor,
  cursorChar,
  cursorBlinkSpeed,
  className,
  textClassName,
  cursorClassName,
  onComplete
}: TypewriterEffectProps): react_jsx_runtime0.JSX.Element | null;
//#endregion
//#region src/components/Button.d.ts
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;
//#endregion
//#region src/components/Input.d.ts
interface InputProps extends React$1.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React$1.ReactNode;
}
declare const Input: React$1.ForwardRefExoticComponent<InputProps & React$1.RefAttributes<HTMLInputElement>>;
//#endregion
//#region src/components/Card.d.ts
interface CardProps extends React$1.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outline' | 'premium';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}
declare const Card: React$1.ForwardRefExoticComponent<CardProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const CardDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
//#endregion
//#region src/components/Modal.d.ts
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React$1.ReactNode;
  title?: string;
}
declare const Modal: React$1.FC<ModalProps>;
//#endregion
//#region src/components/Logo.d.ts
interface LogoProps {
  src?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  alt?: string;
}
declare const Logo: React$1.FC<LogoProps>;
//#endregion
//#region src/components/SocialLinks.d.ts
interface SocialLink {
  href: string;
  icon: React$1.ReactNode;
  ariaLabel: string;
}
interface SocialLinksProps {
  links: SocialLink[];
}
declare const SocialLinks: React$1.FC<SocialLinksProps>;
//#endregion
//#region src/components/StatusBadge.d.ts
type BadgeVariant = 'live' | 'building' | 'planned' | 'concept' | 'hiring' | 'new' | 'premium';
interface StatusBadgeProps {
  variant: BadgeVariant;
  children: React$1.ReactNode;
  className?: string;
}
declare function StatusBadge({
  variant,
  children,
  className
}: StatusBadgeProps): react_jsx_runtime0.JSX.Element;
//#endregion
//#region src/components/LoadingSpinner.d.ts
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}
declare function LoadingSpinner({
  size,
  color,
  className
}: LoadingSpinnerProps): react_jsx_runtime0.JSX.Element;
//#endregion
//#region src/components/ErrorBoundary.d.ts
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}
interface State {
  hasError: boolean;
  error?: Error;
}
declare class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props);
  static getDerivedStateFromError(error: Error): State;
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
  render(): string | number | boolean | react_jsx_runtime0.JSX.Element | Iterable<ReactNode> | null | undefined;
}
//#endregion
//#region src/components/PricingContent.d.ts
interface PricingContentProps {
  /** true = hub mode (all products), false = single product mode */
  isHub?: boolean;
  /** Override which product to show pricing for (defaults to current theme slug) */
  productSlug?: string;
  /** Custom heading override */
  heading?: string;
  /** Custom subheading override */
  subheading?: string;
  className?: string;
}
declare function PricingContent({
  isHub,
  productSlug,
  heading,
  subheading,
  className
}: PricingContentProps): react_jsx_runtime0.JSX.Element;
//#endregion
//#region src/components/PrivacyPolicy.d.ts
interface PrivacyPolicySection {
  title: string;
  content: React$1.ReactNode;
}
interface PrivacyPolicyProps {
  companyName?: string;
  appName?: string;
  contactEmail?: string;
  effectiveDate?: string;
  additionalSections?: PrivacyPolicySection[];
  className?: string;
}
declare function PrivacyPolicy({
  companyName,
  appName,
  contactEmail,
  effectiveDate,
  additionalSections,
  className
}: PrivacyPolicyProps): react_jsx_runtime0.JSX.Element;
//#endregion
//#region src/components/DyslexiaToggle.d.ts
interface DyslexiaToggleProps {
  /** compact = icon only, default = icon + label */
  variant?: "compact" | "default";
  className?: string;
}
declare function DyslexiaToggle({
  variant,
  className
}: DyslexiaToggleProps): react_jsx_runtime0.JSX.Element;
//#endregion
//#region src/hooks/useCookieConsent.d.ts
interface CookiePreferences {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}
//#endregion
//#region src/components/CookieConsent.d.ts
interface CookieConsentProps {
  privacyPolicyUrl?: string;
  onAcceptAll?: (preferences: CookiePreferences) => void;
  onDecline?: (preferences: CookiePreferences) => void;
  onCustomize?: (preferences: CookiePreferences) => void;
  className?: string;
}
declare function CookieConsent({
  privacyPolicyUrl,
  onAcceptAll,
  onDecline,
  onCustomize,
  className
}: CookieConsentProps): react_jsx_runtime0.JSX.Element;
//#endregion
//#region src/components/FontProvider.d.ts
type FontMode = "standard" | "dyslexic";
interface FontProviderProps {
  children: React.ReactNode;
  /**
   * Override the default font mode for this provider instance.
   * Useful when a specific app wants to force a mode.
   */
  defaultMode?: FontMode;
}
declare function FontProvider({
  children,
  defaultMode
}: FontProviderProps): react_jsx_runtime0.JSX.Element;
//#endregion
//#region src/components/analytics/FacebookSDK.d.ts
interface FacebookSDKProps {
  appId?: string | undefined;
  pixelId?: string | undefined;
  debug?: boolean;
}
declare const FacebookSDK: ({
  appId,
  pixelId
}: FacebookSDKProps) => react_jsx_runtime0.JSX.Element | null;
//#endregion
//#region src/components/TermsAndConditions.d.ts
interface TermsSection {
  title: string;
  content: React$1.ReactNode;
}
interface TermsAndConditionsProps {
  companyName?: string;
  appName?: string;
  contactEmail?: string;
  effectiveDate?: string;
  additionalSections?: TermsSection[];
  className?: string;
}
declare function TermsAndConditions({
  companyName,
  appName,
  contactEmail,
  effectiveDate,
  additionalSections,
  className
}: TermsAndConditionsProps): react_jsx_runtime0.JSX.Element;
//#endregion
//#region src/components/ProductLayout.d.ts
interface ProductLayoutProps {
  children: ReactNode;
  product: string;
  navLinks: Array<{
    href: string;
    label: string;
    icon?: string;
    badge?: string;
  }>;
  cta: {
    href: string;
    label: string;
    variant?: 'primary' | 'secondary' | 'glow' | 'gradient';
  };
  showParticles?: boolean;
  theme?: 'dark' | 'light';
}
declare function ProductLayout({
  children,
  product,
  navLinks,
  cta,
  showParticles,
  theme
}: ProductLayoutProps): react_jsx_runtime0.JSX.Element;
//#endregion
//#region src/providers/theme-provider.d.ts
type Theme = 'light' | 'dark' | 'system';
interface ProductThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}
interface ProductThemeType {
  slug: string;
  name: string;
  description: string;
  icon: string;
  status: string;
  colors: ProductThemeColors;
}
interface ThemeContextType {
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
interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  /** Pin to a specific product regardless of URL detection */
  forceProductSlug?: string;
  /** Fully override the initial ProductThemeType (e.g. from server) */
  defaultProduct?: ProductThemeType;
  /** Pre-seed dyslexia mode (e.g. from user profile on server) */
  defaultDyslexia?: boolean;
}
declare function ThemeProvider({
  children,
  defaultTheme,
  forceProductSlug,
  defaultProduct,
  defaultDyslexia
}: ThemeProviderProps): react_jsx_runtime0.JSX.Element;
declare function useTheme(): ThemeContextType;
/** Convenience hook — only returns product-related fields */
declare function useProductTheme(): {
  productTheme: ProductThemeType;
  currentProduct: any;
  allProducts: Record<string, _boldmind_utils0.ProductTheme>;
  allColors: {
    [k: string]: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      foreground: string;
      muted: string;
    };
  };
  availableProducts: Product[];
  liveProducts: Product[];
  buildingProducts: Product[];
  switchProduct: (slug: string) => void;
};
declare function ThemeToggle({
  className
}: {
  className?: string;
}): react_jsx_runtime0.JSX.Element;
/**
 * DyslexiaModeToggle — available on ALL BoldMind products.
 * Pass `alwaysShow` to skip the product-slug guard entirely.
 */
declare function DyslexiaModeToggle({
  className,
  alwaysShow
}: {
  className?: string;
  alwaysShow?: boolean;
}): react_jsx_runtime0.JSX.Element | null;
//#endregion
//#region src/hooks/useMediaQuery.d.ts
declare function useMediaQuery(query: string): boolean;
//#endregion
//#region src/hooks/useClickOutside.d.ts
declare function useClickOutside<T extends HTMLElement>(ref: RefObject<T>, handler: (event: MouseEvent | TouchEvent) => void): void;
//#endregion
//#region src/hooks/useDebounce.d.ts
declare function useDebounce<T>(value: T, delay?: number): T;
//#endregion
//#region src/lib/utils.d.ts
declare function cn(...inputs: ClassValue[]): string;
declare function formatCurrency(amount: number): string;
declare function formatDate(date: Date | string): string;
declare function truncateText(text: string, maxLength: number): string;
declare function getProductFromPath(path: string): string;
declare function detectCurrentProduct(): string;
declare function getProductThemeClass(product: string): string;
declare function getProductThemeColors(product: string): {
  primary: string;
  secondary: string;
  accent: string;
};
//#endregion
export { Button, type ButtonProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Confetti, CookieConsent, DyslexiaModeToggle, DyslexiaToggle, ErrorBoundary, FacebookSDK, FontProvider, type FooterLink, type FooterSection, Input, type InputProps, LoadingSpinner, Logo, Modal, type NavLink, ParticleBackground, PricingContent, PrivacyPolicy, ProductLayout, type ProductThemeType, SocialLinks, StatusBadge, SuperFooter, type SuperFooterProps, SuperNavbar, type SuperNavbarProps, TermsAndConditions, type ThemeContextType, ThemeProvider, ThemeToggle, TypewriterEffect, cn, detectCurrentProduct, formatCurrency, formatDate, getProductFromPath, getProductThemeClass, getProductThemeColors, truncateText, useClickOutside, useDebounce, useMediaQuery, useProductTheme, useTheme };
//# sourceMappingURL=index.d.cts.map