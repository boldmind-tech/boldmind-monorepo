'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles, Zap, Rocket, Moon, Sun, Eye, ExternalLink } from 'lucide-react';
import { useTheme, ThemeToggle, DyslexiaModeToggle } from '../providers/theme-provider';
import { cn } from '../lib/utils';
import { BOLDMIND_PRODUCTS, getProductBySlug, ProductStatus } from '@boldmind/utils';

export interface NavLink {
  href: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string;
  isExternal?: boolean;
}

export interface SuperNavbarProps {
  logoSrc?: string;
  links: NavLink[];
  cta?: { 
    href: string; 
    label: string;
    variant?: 'primary' | 'secondary' | 'glow' | 'gradient';
    icon?: React.ReactNode;
  };
  theme?: 'dark' | 'light' | 'transparent';
  sticky?: boolean;
  animated?: boolean;
  showParticles?: boolean;
  showThemeControls?: boolean;
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
  showParticles = false,
  showThemeControls = true,
  className = '',
  onLinkClick,
}: SuperNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredCta, setHoveredCta] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [showSparkles, setShowSparkles] = useState(false);
  
  const { productTheme } = useTheme();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const currentProduct = getProductBySlug(productTheme.slug) || BOLDMIND_PRODUCTS[0];
  const productInitial = currentProduct.name.charAt(0);
  const productColor = productTheme.colors.primary;


  // Default links if none provided
  const defaultLinks = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/features', label: 'Features', icon: '✨' },
    { href: '/pricing', label: 'Pricing', icon: '💰' },
    { href: '/docs', label: 'Docs', icon: '📚' },
    { href: '/contact', label: 'Contact', icon: '✉️' },
  ];

  const navLinks = links || defaultLinks;
  // Get product-specific CTA
  const getDefaultCTA = () => {
    if (currentProduct.status === ('LIVE' as ProductStatus) && currentProduct.links?.website) {
      return {
        href: currentProduct.links.website,
        label: 'Visit Website',
        variant: 'primary' as const,
        icon: <ExternalLink className="w-4 h-4" />
      };
    }
    
    return {
      href: 'https://wa.me/2349138349271',
      label: 'Get Started',
      variant: 'primary' as const,
      icon: <Zap className="w-4 h-4" />
    };
  };

  const navCTA = cta || getDefaultCTA();

  // Theme colors - FIXED VERSION
  const getThemeColors = () => {
    const baseColor = productColor;
    const rgbMatch = baseColor.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    
    if (rgbMatch) {
      const r = parseInt(rgbMatch[1], 16);
      const g = parseInt(rgbMatch[2], 16);
      const b = parseInt(rgbMatch[3], 16);
      
      switch (theme) {
        case 'light':
          return {
            bg: scrolled ? baseColor : `rgba(${r}, ${g}, ${b}, 0.95)`,
            text: '#FFFFFF',
            border: '#E5E7EB',
          };
        case 'transparent':
          return {
            bg: scrolled ? `rgba(${r}, ${g}, ${b}, 0.95)` : 'transparent',
            text: '#FFFFFF',
            border: 'transparent',
          };
        default: // dark
          return {
            bg: scrolled ? baseColor : `rgba(${r}, ${g}, ${b}, 0.95)`,
            text: '#FFFFFF',
            border: '#374151',
          };
      }
    }
    
    // Fallback colors
    return {
      bg: scrolled ? '#00143C' : 'rgba(0, 20, 60, 0.95)',
      text: '#FFFFFF',
      border: '#374151',
    };
  };

  const currentNavTheme = getThemeColors();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 100) {
        setShowSparkles(true);
        setTimeout(() => setShowSparkles(false), 1000);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        menuButtonRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // FIXED: Proper navigation handling
  const handleNavClick = (href: string, isExternal?: boolean) => {
    setActiveLink(href);
    setIsOpen(false);
    onLinkClick?.(href);
    
    // If it's an external link, let the anchor tag handle it
    if (isExternal || href.startsWith('http')) {
      return; // Let browser handle external links
    }
    
    // If it's a hash link (same page anchor)
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update URL without page reload
        window.history.pushState(null, '', href);
      }
      return;
    }
    
   
  };

  const getCtaStyles = () => {
    const baseStyles = 'px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2';
    
    switch (navCTA.variant) {
      case 'secondary':
        return `${baseStyles} bg-white text-blue-600 hover:bg-gray-100 hover:scale-105`;
      case 'glow':
        return `${baseStyles} bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105`;
      case 'gradient':
        return `${baseStyles} bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-xl hover:scale-105`;
      default:
        return `${baseStyles} bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:shadow-lg hover:scale-105`;
    }
  };

  // Helper to get icon component
  const getIconComponent = (iconString: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      '🏠': <div>🏠</div>,
      '✨': <div>✨</div>,
      '💰': <div>💰</div>,
      '📚': <div>📚</div>,
      '✉️': <div>✉️</div>,
      '🚀': <Rocket className="w-4 h-4" />,
      '🤖': <div>🤖</div>,
      '🎓': <div>🎓</div>,
      '📰': <div>📰</div>,
    };
    return iconMap[iconString] || <Sparkles className="w-4 h-4" />;
  };
  return (
    <>
      {/* Floating Particles (Optional) */}
      {showParticles && animated && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -10,
                opacity: 0,
              }}
              animate={{
                y: window.innerHeight,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      )}

      {/* Sparkles Animation */}
      <AnimatePresence>
        {showSparkles && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-4 right-4 z-50"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
     <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        style={{
          backgroundColor: currentNavTheme.bg,
          color: currentNavTheme.text,
          borderBottom: `1px solid ${currentNavTheme.border}`,
        }}
        className={cn(
          "w-full z-50 transition-all duration-300 backdrop-blur-lg",
          sticky && "fixed top-0",
          className
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <Link 
                href="/" 
                className="flex items-center space-x-3 no-underline"
                onClick={() => handleNavClick('/')}
              >
                {!imageError ? (
                  <div className="relative w-12 h-12">
                    <Image
                      src={logoSrc}
                      alt={`${currentProduct.name} Logo`}
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
                  </div>
                ) : (
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: productColor }}
                  >
                    <span className="text-white font-black text-xl">{productInitial}</span>
                  </div>
                )}
                
                <div>
                  <span className="text-2xl font-black">
                    {currentProduct.name}
                  </span>
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-gray-400 -mt-1"
                  >
                    {currentProduct.status === ('LIVE' as ProductStatus) ? '🚀 LIVE' : 
                     currentProduct.status === ('BUILDING' as ProductStatus) ? '🔨 BUILDING' :
                     currentProduct.status === ('PLANNED' as ProductStatus) ? '📅 PLANNED' : '💡 CONCEPT'}
                  </motion.p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
               <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => {
                const isExternal = link.isExternal || link.href.startsWith('http');
                const isHashLink = link.href.startsWith('#');
                const isActive = activeLink === link.href;
                
                return (
                  <div key={link.href} className="relative">
                    {isExternal || isHashLink ? (
                      // External or hash links use anchor tags
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={link.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        onClick={(e) => {
                          if (isHashLink) {
                            e.preventDefault();
                            handleNavClick(link.href, isExternal);
                          }
                        }}
                        onMouseEnter={() => setHoveredLink(link.href)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className={cn(
                          "flex items-center gap-2 px-4 py-3 rounded-lg transition-all",
                          isActive
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'hover:bg-white/10'
                        )}
                      >
                        {getIconComponent(link.icon as string)}
                        <span className="font-medium">{link.label}</span>
                        {link.badge && (
                          <span className="px-2 py-0.5 text-xs font-bold bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full">
                            {link.badge}
                          </span>
                        )}
                        {isExternal && (
                          <ExternalLink className="w-4 h-4" />
                        )}
                      </motion.a>
                    ) : (
                      // Internal Next.js routes use Link component
                      <Link href={link.href} passHref>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleNavClick(link.href)}
                          onMouseEnter={() => setHoveredLink(link.href)}
                          onMouseLeave={() => setHoveredLink(null)}
                          className={cn(
                            "flex items-center gap-2 px-4 py-3 rounded-lg transition-all cursor-pointer",
                            isActive
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'hover:bg-white/10'
                          )}
                        >
                          {getIconComponent(link.icon as string)}
                          <span className="font-medium">{link.label}</span>
                          {link.badge && (
                            <span className="px-2 py-0.5 text-xs font-bold bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full">
                              {link.badge}
                            </span>
                          )}
                        </motion.div>
                      </Link>
                    )}

                    {/* Hover effect */}
                    {hoveredLink === link.href && (
                      <motion.div
                        layoutId="navbar-hover"
                        className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    )}
                  </div>
                );
              })}
              
              {/* Theme Controls */}
              {showThemeControls && (
                <div className="flex items-center space-x-1 ml-2">
                  <ThemeToggle />
                  <DyslexiaModeToggle />
                </div>
              )}
              
              {/* CTA Button */}
               {navCTA && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={navCTA.href}
                    target={navCTA.href.startsWith('http') ? '_blank' : '_self'}
                    className={getCtaStyles()}
                    onMouseEnter={() => setHoveredCta(true)}
                    onMouseLeave={() => setHoveredCta(false)}
                    onClick={() => onLinkClick?.(navCTA.href)}
                  >
                    {navCTA.icon || <Rocket className="w-4 h-4" />}
                    {navCTA.label}
                    {hoveredCta && (
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        →
                      </motion.span>
                    )}
                  </a>
                </motion.div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              {showThemeControls && (
                <div className="flex items-center space-x-1">
                  <ThemeToggle />
                  <DyslexiaModeToggle />
                </div>
              )}
              
              <button
                ref={menuButtonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
          <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ backgroundColor: currentNavTheme.bg }}
              className="md:hidden overflow-hidden border-t"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link, index) => {
                  const isExternal = link.isExternal || link.href.startsWith('http');
                  const isHashLink = link.href.startsWith('#');
                  const isActive = activeLink === link.href;
                  
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {isExternal || isHashLink ? (
                        <a
                          href={link.href}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          onClick={(e) => {
                            if (isHashLink) {
                              e.preventDefault();
                              handleNavClick(link.href, isExternal);
                            } else {
                              handleNavClick(link.href, isExternal);
                            }
                          }}
                          className={cn(
                            "w-full flex items-center justify-between p-4 rounded-xl transition-all",
                            isActive
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'hover:bg-white/10'
                          )}
                        >
                          <div className="flex items-center gap-3">
                            {getIconComponent(link.icon as string)}
                            <span className="font-medium">{link.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {link.badge && (
                              <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full">
                                {link.badge}
                              </span>
                            )}
                            {isExternal && (
                              <ExternalLink className="w-4 h-4" />
                            )}
                          </div>
                        </a>
                      ) : (
                        <Link href={link.href} passHref>
                          <div
                            onClick={() => handleNavClick(link.href)}
                            className={cn(
                              "w-full flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer",
                              isActive
                                ? 'bg-blue-500/20 text-blue-400'
                                : 'hover:bg-white/10'
                            )}
                          >
                            <div className="flex items-center gap-3">
                              {getIconComponent(link.icon as string)}
                              <span className="font-medium">{link.label}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {link.badge && (
                                <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full">
                                  {link.badge}
                                </span>
                              )}
                            </div>
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
                    transition={{ delay: navLinks.length * 0.1 }}
                    className="pt-4"
                  >
                    <a
                      href={navCTA.href}
                      target={navCTA.href.startsWith('http') ? '_blank' : '_self'}
                      className={`block w-full text-center ${getCtaStyles()}`}
                      onClick={() => {
                        setIsOpen(false);
                        onLinkClick?.(navCTA.href);
                      }}
                    >
                      {navCTA.icon || <Zap className="w-4 h-4" />}
                      {navCTA.label}
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* Spacer for fixed navbar */}
      {sticky && <div className="h-20" />}
    </>
  );
}