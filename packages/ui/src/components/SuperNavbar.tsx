"use client";

/**
 * packages/ui/src/components/SuperNavbar.tsx
 *
 * FIXED:
 *  1. Logo + title: when used in boldmind-hub, show the passed `logoSrc` and
 *     a passed `brandName` prop — do NOT fall through to `currentProduct.name`
 *     from the theme (which was showing whatever product the theme was set to).
 *  2. Added `brandName` prop — defaults to `currentProduct?.name` for
 *     sub-product apps, but hub passes "BoldMind Hub" explicitly.
 *  3. Fixed image fallback initial to use `brandName[0]` not `productInitial`.
 *  4. Removed `window.innerWidth/Height` references from SSR-safe particle init.
 *  5. Cleaned up unused commented-out code.
 */

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Sparkles, Zap, Rocket, ExternalLink,
} from "lucide-react";
import { useTheme, ThemeToggle, DyslexiaModeToggle } from "../providers/theme-provider";
import { cn } from "../lib/utils";
import { BOLDMIND_PRODUCTS, getProductBySlug } from "@boldmind/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavLink {
  href: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string;
  isExternal?: boolean;
}

export interface SuperNavbarProps {
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
    icon?: React.ReactNode;
  };
  theme?: "dark" | "light" | "transparent";
  sticky?: boolean;
  animated?: boolean;
  showParticles?: boolean;
  showThemeControls?: boolean;
  className?: string;
  /** Deprecated: user display is now handled by DashboardSidebar */
  user?: { name: string; role: string };
  onLinkClick?: (href: string) => void;
}

// ─── Default nav links ────────────────────────────────────────────────────────

const DEFAULT_LINKS: NavLink[] = [
  { href: "/",        label: "Home",     icon: "🏠" },
  { href: "/features",label: "Features", icon: "✨" },
  { href: "/pricing", label: "Pricing",  icon: "💰" },
  { href: "/docs",    label: "Docs",     icon: "📚" },
  { href: "/contact", label: "Contact",  icon: "✉️" },
];

// ─── Icon map ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, React.ReactNode> = {
  "🏠": <span>🏠</span>, "✨": <span>✨</span>, "💰": <span>💰</span>,
  "📚": <span>📚</span>, "✉️": <span>✉️</span>, "🚀": <Rocket className="w-4 h-4" />,
  "🤖": <span>🤖</span>, "🎓": <span>🎓</span>, "📰": <span>📰</span>,
};

function getIconNode(icon: React.ReactNode): React.ReactNode {
  if (typeof icon !== "string") return icon;
  return ICON_MAP[icon] ?? <Sparkles className="w-4 h-4" />;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function SuperNavbar({
  logoSrc = "/logo.png",
  brandName,
  links,
  cta,
  theme = "dark",
  sticky = true,
  animated = true,
  showParticles = false,
  showThemeControls = true,
  className = "",
  onLinkClick,
}: SuperNavbarProps) {
  const [isOpen,      setIsOpen]      = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const [imageError,  setImageError]  = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredCta,  setHoveredCta]  = useState(false);
  const [activeLink,  setActiveLink]  = useState("");
  const [showSparkle, setShowSparkle] = useState(false);
  const [mounted,     setMounted]     = useState(false);

  const { productTheme } = useTheme();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // ── Resolve branding ──────────────────────────────────────────────────────
  // `brandName` prop takes full precedence.
  // If not passed, fall back to the theme's current product name.
  const currentProduct = getProductBySlug(productTheme.slug) ?? BOLDMIND_PRODUCTS[0];
  const resolvedBrand  = brandName ?? currentProduct?.name ?? "BoldMind";
  const productColor   = productTheme.colors.primary;

  useEffect(() => { setMounted(true); }, []);

  // ── Scroll handler ────────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > 100) { setShowSparkle(true); setTimeout(() => setShowSparkle(false), 1000); }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Click outside mobile menu ─────────────────────────────────────────────
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        menuButtonRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        !menuButtonRef.current.contains(e.target as Node)
      ) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  // ── Nav click ─────────────────────────────────────────────────────────────
  const handleNavClick = (href: string, isExternal?: boolean) => {
    setActiveLink(href);
    setIsOpen(false);
    onLinkClick?.(href);
    if (isExternal || href.startsWith("http")) return;
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  // ── Theme colors ──────────────────────────────────────────────────────────
  const getThemeColors = () => {
    const m = productColor.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (m) {
      const [r, g, b] = [parseInt(m[1]!, 16), parseInt(m[2]!, 16), parseInt(m[3]!, 16)];
      if (theme === "transparent")
        return { bg: scrolled ? `rgba(${r},${g},${b},0.95)` : "transparent", text: "#FFF", border: "transparent" };
      return { bg: scrolled ? productColor : `rgba(${r},${g},${b},0.95)`, text: "#FFF", border: "#374151" };
    }
    return { bg: scrolled ? "#00143C" : "rgba(0,20,60,0.95)", text: "#FFF", border: "#374151" };
  };

  const navTheme = getThemeColors();
  const navLinks = links ?? DEFAULT_LINKS;

  // ── CTA ───────────────────────────────────────────────────────────────────
  const defaultCTA = currentProduct?.status === "LIVE" && currentProduct?.links?.website
    ? { href: currentProduct.links.website, label: "Visit Website", variant: "primary" as const, icon: <ExternalLink className="w-4 h-4" /> }
    : { href: "https://wa.me/2349138349271", label: "Get Started", variant: "primary" as const, icon: <Zap className="w-4 h-4" /> };
  const navCTA = cta ?? defaultCTA;

  const ctaClass = (() => {
    const base = "px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 text-sm";
    switch (navCTA.variant) {
      case "secondary": return `${base} bg-white text-blue-600 hover:bg-gray-100 hover:scale-105`;
      case "glow":      return `${base} bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105`;
      case "gradient":  return `${base} bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-xl hover:scale-105`;
      default:          return `${base} bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:shadow-lg hover:scale-105`;
    }
  })();

  return (
    <>
      {/* Particles — client-only, SSR safe */}
      {showParticles && animated && mounted && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{ x: Math.random() * window.innerWidth, y: -10, opacity: 0 }}
              animate={{ y: window.innerHeight, opacity: [0, 1, 0] }}
              transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 5 }}
            />
          ))}
        </div>
      )}

      {/* Sparkle */}
      <AnimatePresence>
        {showSparkle && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed top-4 right-4 z-50">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }} animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{ backgroundColor: navTheme.bg, color: navTheme.text, borderBottom: `1px solid ${navTheme.border}` }}
        className={cn("w-full z-50 transition-all duration-300 backdrop-blur-lg", sticky && "fixed top-0", className)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* ── Logo ── */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3 no-underline" onClick={() => handleNavClick("/")}>
                <div className="relative w-10 h-10 flex-shrink-0">
                  {!imageError ? (
                    <>
                      <Image
                        src={logoSrc}
                        alt={resolvedBrand}
                        fill
                        className="object-contain"
                        onError={() => setImageError(true)}
                        priority
                      />
                      {animated && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border-2 border-transparent border-t-blue-500 border-r-purple-500 rounded-full"
                        />
                      )}
                    </>
                  ) : (
                    // Fallback: coloured initial box — uses resolvedBrand not productInitial
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: productColor }}
                    >
                      <span className="text-white font-black text-lg">
                        {resolvedBrand.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Brand name — always shows resolvedBrand */}
                <span className="text-xl font-black tracking-tight" style={{ color: navTheme.text }}>
                  {resolvedBrand}
                </span>
              </Link>
            </motion.div>

            {/* ── Desktop nav ── */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map(link => {
                const isExt    = link.isExternal || link.href.startsWith("http");
                const isHash   = link.href.startsWith("#");
                const isActive = activeLink === link.href;
                const inner    = (
                  <>
                    {getIconNode(link.icon)}
                    <span className="font-medium text-sm">{link.label}</span>
                    {link.badge && (
                      <span className="px-2 py-0.5 text-xs font-bold bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full">
                        {link.badge}
                      </span>
                    )}
                    {isExt && <ExternalLink className="w-3 h-3 opacity-60" />}
                  </>
                );
                const itemClass = cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all cursor-pointer",
                  isActive ? "bg-white/20" : "hover:bg-white/10",
                );
                return (
                  <div key={link.href} className="relative"
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {isExt || isHash ? (
                      <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        href={link.href}
                        target={isExt ? "_blank" : undefined}
                        rel={isExt ? "noopener noreferrer" : undefined}
                        onClick={(e: { preventDefault: () => void; }) => { if (isHash) { e.preventDefault(); handleNavClick(link.href, isExt); } }}
                        className={itemClass}
                      >{inner}</motion.a>
                    ) : (
                      <Link href={link.href} passHref>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                          onClick={() => handleNavClick(link.href)}
                          className={itemClass}
                        >{inner}</motion.div>
                      </Link>
                    )}
                    {hoveredLink === link.href && (
                      <motion.div layoutId="navbar-hover"
                        className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                      />
                    )}
                  </div>
                );
              })}

              {showThemeControls && (
                <div className="flex items-center space-x-1 ml-2">
                  <ThemeToggle />
                  <DyslexiaModeToggle />
                </div>
              )}

              {navCTA && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-2">
                  <a href={navCTA.href}
                    target={navCTA.href.startsWith("http") ? "_blank" : "_self"}
                    className={ctaClass}
                    onMouseEnter={() => setHoveredCta(true)}
                    onMouseLeave={() => setHoveredCta(false)}
                    onClick={() => onLinkClick?.(navCTA.href)}
                  >
                    {navCTA.icon ?? <Rocket className="w-4 h-4" />}
                    {navCTA.label}
                    {hoveredCta && (
                      <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 0.5 }}>→</motion.span>
                    )}
                  </a>
                </motion.div>
              )}
            </div>

            {/* ── Mobile button ── */}
            <div className="flex items-center gap-2 md:hidden">
              {showThemeControls && (
                <div className="flex items-center space-x-1">
                  <ThemeToggle />
                  <DyslexiaModeToggle />
                </div>
              )}
              <button ref={menuButtonRef} onClick={() => setIsOpen(v => !v)}
                className="p-2.5 rounded-lg hover:bg-white/10 transition-colors" aria-label="Toggle menu">
                <AnimatePresence mode="wait">
                  {isOpen
                    ? <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X className="w-5 h-5" /></motion.div>
                    : <motion.div key="menu"  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><Menu className="w-5 h-5" /></motion.div>
                  }
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{ backgroundColor: navTheme.bg }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="px-4 py-5 space-y-1">
                {navLinks.map((link, idx) => {
                  const isExt    = link.isExternal || link.href.startsWith("http");
                  const isHash   = link.href.startsWith("#");
                  const isActive = activeLink === link.href;
                  const rowClass = cn(
                    "w-full flex items-center justify-between p-3.5 rounded-xl transition-all",
                    isActive ? "bg-white/20" : "hover:bg-white/10",
                  );
                  return (
                    <motion.div key={link.href}
                      initial={{ x: -16, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.07 }}
                    >
                      {isExt || isHash ? (
                        <a href={link.href}
                          target={isExt ? "_blank" : undefined}
                          rel={isExt ? "noopener noreferrer" : undefined}
                          onClick={e => { if (isHash) { e.preventDefault(); handleNavClick(link.href, isExt); } else handleNavClick(link.href, isExt); }}
                          className={rowClass}
                        >
                          <div className="flex items-center gap-3">{getIconNode(link.icon)}<span className="font-medium text-sm">{link.label}</span></div>
                          <div className="flex items-center gap-2">
                            {link.badge && <span className="px-2 py-0.5 text-xs font-bold bg-orange-500 text-white rounded-full">{link.badge}</span>}
                            {isExt && <ExternalLink className="w-3 h-3 opacity-50" />}
                          </div>
                        </a>
                      ) : (
                        <Link href={link.href} passHref>
                          <div onClick={() => handleNavClick(link.href)} className={rowClass}>
                            <div className="flex items-center gap-3">{getIconNode(link.icon)}<span className="font-medium text-sm">{link.label}</span></div>
                            {link.badge && <span className="px-2 py-0.5 text-xs font-bold bg-orange-500 text-white rounded-full">{link.badge}</span>}
                          </div>
                        </Link>
                      )}
                    </motion.div>
                  );
                })}

                {navCTA && (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: navLinks.length * 0.07 }}
                    className="pt-3"
                  >
                    <a href={navCTA.href}
                      target={navCTA.href.startsWith("http") ? "_blank" : "_self"}
                      className={`block w-full text-center ${ctaClass}`}
                      onClick={() => { setIsOpen(false); onLinkClick?.(navCTA.href); }}
                    >
                      {navCTA.icon ?? <Zap className="w-4 h-4" />}
                      {navCTA.label}
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {sticky && <div className="h-20" />}
    </>
  );
}