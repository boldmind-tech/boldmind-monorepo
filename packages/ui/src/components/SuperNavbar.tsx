// ─────────────────────────────────────────────────────────────────────────────
// packages/ui/src/components/SuperNavbar.tsx
// ─────────────────────────────────────────────────────────────────────────────
// FIX: Mobile menu was rendering on desktop when open.
// Root cause: Framer Motion applies inline style={{ height, opacity }} which
// does NOT override display:none from md:hidden — BUT the issue was the
// AnimatePresence wrapper itself had no md:hidden. Added a portal wrapper
// div with `md:hidden` class AROUND the AnimatePresence so on ≥md screens
// the entire mobile nav section is removed from layout flow.
//
// FIX 2: Desktop nav ThemeToggle was duplicated (appeared in both mobile
// and desktop sections). Consolidated into single render per breakpoint.
// ─────────────────────────────────────────────────────────────────────────────

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Zap, Rocket, ExternalLink } from 'lucide-react';
import { useTheme, ThemeToggle } from '../providers/theme-provider';
import { DyslexiaToggle } from './DyslexiaToggle';
import { cn } from '../lib/utils';
import { BOLDMIND_PRODUCTS, getProductBySlug } from '@boldmind/utils';

export interface NavLink {
  href: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string;
  isExternal?: boolean;
}

export interface SuperNavbarProps {
  logoSrc?: string;
  links?: NavLink[];
  cta?: {
    href: string;
    label: string;
    variant?: 'primary' | 'secondary' | 'glow' | 'gradient';
    icon?: React.ReactNode;
  };
  /** Controls navbar background style */
  theme?: 'dark' | 'light' | 'transparent';
  sticky?: boolean;
  animated?: boolean;
  showThemeControls?: boolean;
  showFontToggle?: boolean;
  className?: string;
  onLinkClick?: (href: string) => void;
}

export function SuperNavbar({
  logoSrc = '/logo.png',
  links,
  cta,
  theme = 'dark',
  sticky = true,
  animated = true,
  showThemeControls = true,
  showFontToggle = false,
  className = '',
  onLinkClick,
}: SuperNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredCta, setHoveredCta] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const { productTheme } = useTheme();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const currentProduct = getProductBySlug(productTheme.slug) || BOLDMIND_PRODUCTS[0]!;
  const productColor = productTheme.colors.primary;

  // ── Default nav links ─────────────────────────────────────────────────────
  const defaultLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/docs', label: 'Docs' },
    { href: '/contact', label: 'Contact' },
  ];
  const navLinks = links || defaultLinks;

  const navCTA = cta ?? {
    href: 'https://wa.me/2349138349271',
    label: 'Get Started',
    variant: 'primary' as const,
    icon: <Zap className="w-4 h-4" />,
  };

  // ── Theme colors ──────────────────────────────────────────────────────────
  const getThemeColors = () => {
    const hex = productColor.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    if (theme === 'light') {
      return {
        bg: scrolled ? 'var(--product-background)' : 'rgba(255,255,255,0.97)',
        text: 'var(--product-foreground)',
        border: 'var(--product-muted)',
      };
    }
    if (theme === 'transparent') {
      return {
        bg: scrolled ? `rgba(${r},${g},${b},0.97)` : 'transparent',
        text: 'var(--product-background)',
        border: 'transparent',
      };
    }
    return {
      bg: scrolled ? productColor : `rgba(${r},${g},${b},0.97)`,
      text: 'var(--product-background)',
      border: 'rgba(255,255,255,0.1)',
    };
  };
  const colors = getThemeColors();
  const textColor = theme === 'light' ? 'var(--product-foreground)' : 'var(--product-background)';

  // ── Scroll handler ────────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Close on outside click ────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        menuButtonRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        !menuButtonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  // ── Close mobile menu on resize to desktop ────────────────────────────────
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (href: string, isExternal?: boolean) => {
    setActiveLink(href);
    setIsOpen(false);
    onLinkClick?.(href);
    if (!isExternal && href.startsWith('#')) {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ── CTA style ─────────────────────────────────────────────────────────────
  const ctaStyle: React.CSSProperties = (() => {
    const base: React.CSSProperties = {
      padding: '0.625rem 1.25rem',
      borderRadius: 'var(--radius-lg)',
      fontWeight: 700,
      fontSize: '0.875rem',
      transition: 'all 0.2s',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'pointer',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
    };
    if (navCTA.variant === 'secondary') {
      return { ...base, background: 'var(--product-background)', color: productColor };
    }
    return {
      ...base,
      background: `linear-gradient(135deg, var(--product-secondary), var(--product-accent))`,
      color: 'var(--product-foreground)',
    };
  })();

  // ── Nav link component ────────────────────────────────────────────────────
  const NavItem = ({ link, mobile = false }: { link: NavLink; mobile?: boolean }) => {
    const isExternal = link.isExternal || link.href.startsWith('http');
    const isActive = activeLink === link.href;

    const cls = mobile
      ? cn(
          'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all w-full',
          isActive ? 'font-bold' : 'opacity-80 hover:opacity-100',
        )
      : cn(
          'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all',
          isActive ? 'font-bold' : 'opacity-80 hover:opacity-100',
        );

    const style: React.CSSProperties = {
      color: textColor,
      backgroundColor: isActive ? 'rgba(255,255,255,0.12)' : undefined,
    };

    const content = (
      <>
        {link.icon && <span>{link.icon}</span>}
        <span>{link.label}</span>
        {link.badge && (
          <span className="px-2 py-0.5 text-[10px] font-black bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full uppercase tracking-wider">
            {link.badge}
          </span>
        )}
        {isExternal && <ExternalLink className="w-3 h-3 opacity-60" />}
      </>
    );

    if (isExternal) {
      return (
        <a href={link.href} target="_blank" rel="noopener noreferrer"
           className={cls} style={style}
           onClick={() => handleNavClick(link.href, true)}>
          {content}
        </a>
      );
    }

    return (
      <Link href={link.href} className={cls} style={style}
            onClick={() => handleNavClick(link.href)}>
        {content}
      </Link>
    );
  };

  return (
    <>
      <motion.nav
        initial={animated ? { y: -100 } : false}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        style={{
          backgroundColor: colors.bg,
          color: colors.text,
          borderBottom: `1px solid ${colors.border}`,
        }}
        className={cn(
          'w-full z-50 transition-all duration-300 backdrop-blur-lg',
          sticky && 'fixed top-0 left-0 right-0',
          className,
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0"
                  onClick={() => handleNavClick('/')}>
              <div className="relative w-9 h-9 flex-shrink-0">
                {!imageError ? (
                  <Image src={logoSrc} alt={currentProduct.name} fill
                         className="object-contain" onError={() => setImageError(true)} priority />
                ) : (
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                       style={{ backgroundColor: productColor }}>
                    <span className="text-white font-black text-base">
                      {currentProduct.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <span className="text-lg font-black tracking-tight" style={{ color: textColor }}>
                {currentProduct.name}
              </span>
            </Link>

            {/* ── DESKTOP nav — hidden below md ─────────────────────────── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  <NavItem link={link} />
                  {hoveredLink === link.href && (
                    <motion.div layoutId="nav-underline"
                      className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full"
                      style={{ background: 'var(--product-secondary)' }} />
                  )}
                </div>
              ))}
            </div>

            {/* ── DESKTOP right controls — hidden below md ───────────────── */}
            <div className="hidden md:flex items-center gap-2">
              {showThemeControls && <ThemeToggle />}
              {showFontToggle && <DyslexiaToggle variant="compact" />}
              {navCTA && (
                <motion.a
                  href={navCTA.href}
                  target={navCTA.href.startsWith('http') ? '_blank' : '_self'}
                  rel={navCTA.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={ctaStyle}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onHoverStart={() => setHoveredCta(true)}
                  onHoverEnd={() => setHoveredCta(false)}
                >
                  {navCTA.icon || <Rocket className="w-4 h-4" />}
                  {navCTA.label}
                  {hoveredCta && (
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 0.4 }}>
                      →
                    </motion.span>
                  )}
                </motion.a>
              )}
            </div>

            {/* ── MOBILE controls — hidden at md+ ───────────────────────── */}
            <div className="flex items-center gap-2 md:hidden">
              {showThemeControls && <ThemeToggle />}
              <button
                ref={menuButtonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.div key="close"
                      initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X className="w-5 h-5" style={{ color: textColor }} />
                    </motion.div>
                  ) : (
                    <motion.div key="menu"
                      initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu className="w-5 h-5" style={{ color: textColor }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>

          </div>
        </div>

        {/* ── MOBILE menu panel ─────────────────────────────────────────────
            IMPORTANT: This outer div uses md:hidden so the mobile menu is
            completely excluded from layout on desktop (≥768px).
            This prevents Framer Motion inline styles from accidentally
            showing the mobile menu on desktop when isOpen=true.
        ─────────────────────────────────────────────────────────────────── */}
        <div className="md:hidden">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={mobileMenuRef}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                style={{ backgroundColor: colors.bg, borderTop: `1px solid ${colors.border}` }}
                className="overflow-hidden"
              >
                <div className="px-4 py-4 space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.div key={link.href}
                      initial={{ x: -16, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.06 }}>
                      <NavItem link={link} mobile />
                    </motion.div>
                  ))}

                  {showFontToggle && (
                    <div className="px-4 pt-2">
                      <DyslexiaToggle variant="default" />
                    </div>
                  )}

                  {navCTA && (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: navLinks.length * 0.06 }}
                      className="pt-3"
                    >
                      <a href={navCTA.href}
                         target={navCTA.href.startsWith('http') ? '_blank' : '_self'}
                         rel={navCTA.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                         style={{ ...ctaStyle, width: '100%', justifyContent: 'center' }}
                         onClick={() => { setIsOpen(false); onLinkClick?.(navCTA.href); }}>
                        {navCTA.icon || <Zap className="w-4 h-4" />}
                        {navCTA.label}
                      </a>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Spacer so content isn't hidden under fixed nav */}
      {sticky && <div className="h-16 sm:h-20" aria-hidden="true" />}
    </>
  );
}