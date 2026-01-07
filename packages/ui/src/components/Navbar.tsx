// packages/ui/src/components/Navbar.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  logoSrc?: string;
  links: { href: string; label: string }[];
  cta?: { href: string; label: string };
}

const Navbar: React.FC<NavbarProps> = ({ 
  logoSrc = '/logo.png', 
  links, 
  cta 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredCta, setHoveredCta] = useState(false);
  const [hoveredMobileCta, setHoveredMobileCta] = useState(false);
  const [hoveredMenuButton, setHoveredMenuButton] = useState(false);
  const [hoveredMobileLinks, setHoveredMobileLinks] = useState<{[key: string]: boolean}>({});
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu when clicking outside
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLinkHover = (href: string, isHovering: boolean) => {
    setHoveredMobileLinks(prev => ({
      ...prev,
      [href]: isHovering
    }));
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.3s',
      backgroundColor: scrolled ? '#00143C' : 'rgba(0, 20, 60, 0.95)',
      boxShadow: scrolled ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none',
      backdropFilter: scrolled ? 'none' : 'blur(8px)'
    }}>
      <div style={{ width: '100%' }}>
        <div style={{ 
          maxWidth: '80rem', 
          margin: '0 auto', 
          padding: '0 1rem'
        }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '5rem'
          }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link href="/" style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none'
              }}>
                {/* Logo with fallback */}
                {!imageError ? (
                  <div style={{ 
                    position: 'relative', 
                    width: '2.5rem', 
                    height: '2.5rem',
                    flexShrink: 0
                  }}>
                    <Image
                      src={logoSrc}
                      alt="BoldMind Logo"
                      fill
                      style={{ objectFit: 'contain' }}
                      priority
                      onError={() => setImageError(true)}
                    />
                  </div>
                ) : (
                  <div style={{ 
                    width: '2.5rem', 
                    height: '2.5rem', 
                    backgroundColor: '#FFC800',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 900,
                      color: '#00143C'
                    }}>B</span>
                  </div>
                )}
                
                {/* Desktop Logo Text - shown on md and above */}
                <div style={{ 
                  display: isMobile ? 'none' : 'block'
                }}>
                  <span style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 900,
                    color: 'white'
                  }}>
                    Bold<span style={{ color: '#FFC800' }}>Mind</span>
                  </span>
                  <p style={{ 
                    fontSize: '0.75rem',
                    color: '#D1D5DB',
                    marginTop: '-0.25rem'
                  }}>
                    Technology Solutions
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - shown on md and above */}
            <div style={{ 
              display: isMobile ? 'none' : 'flex',
              alignItems: 'center',
              gap: '1.5rem'
            }}>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{ 
                    color: hoveredLink === link.href ? '#FFC800' : '#D1D5DB',
                    fontWeight: 500,
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    position: 'relative',
                    transition: 'color 0.2s'
                  }}
                >
                  {link.label}
                  <span style={{ 
                    position: 'absolute',
                    bottom: '-0.25rem',
                    left: 0,
                    width: hoveredLink === link.href ? '100%' : '0',
                    height: '0.125rem',
                    backgroundColor: '#FFC800',
                    transition: 'width 0.3s'
                  }}></span>
                </Link>
              ))}
              
              {cta && (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredCta(true)}
                  onMouseLeave={() => setHoveredCta(false)}
                  style={{ 
                    marginLeft: '1rem',
                    padding: '0.625rem 1.25rem',
                    backgroundColor: hoveredCta ? '#FFD700' : '#FFC800',
                    color: '#00143C',
                    fontWeight: 'bold',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    fontSize: '0.875rem',
                    boxShadow: hoveredCta 
                      ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)' 
                      : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {cta.label}
                </a>
              )}
            </div>

            {/* Mobile menu button - shown only on mobile */}
            <div style={{ 
              display: isMobile ? 'flex' : 'none', 
              alignItems: 'center', 
              gap: '0.5rem' 
            }}>
              {cta && (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredMobileCta(true)}
                  onMouseLeave={() => setHoveredMobileCta(false)}
                  style={{ 
                    padding: '0.5rem 0.75rem',
                    backgroundColor: hoveredMobileCta ? '#FFD700' : '#FFC800',
                    color: '#00143C',
                    fontWeight: 'bold',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    transition: 'background-color 0.2s'
                  }}
                >
                  {cta.label}
                </a>
              )}
              <button
                ref={menuButtonRef}
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setHoveredMenuButton(true)}
                onMouseLeave={() => setHoveredMenuButton(false)}
                style={{ 
                  color: hoveredMenuButton ? '#FFC800' : '#D1D5DB',
                  background: 'none',
                  border: 'none',
                  padding: '0.5rem',
                  cursor: 'pointer',
                  transition: 'color 0.2s'
                }}
                aria-label="Toggle menu"
              >
                <svg
                  style={{ width: '1.5rem', height: '1.5rem' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && isMobile && (
          <div ref={mobileMenuRef} style={{ 
            borderTop: '1px solid #374151',
            position: 'absolute',
            top: '5rem',
            left: 0,
            right: 0,
            backgroundColor: '#00143C',
            zIndex: 50
          }}>
            <div style={{ 
              padding: '0 1rem',
              paddingTop: '1rem',
              paddingBottom: '1rem'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => handleMobileLinkHover(link.href, true)}
                    onMouseLeave={() => handleMobileLinkHover(link.href, false)}
                    style={{ 
                      display: 'block',
                      padding: '0.75rem 0.75rem',
                      borderRadius: '0.5rem',
                      color: hoveredMobileLinks[link.href] ? '#FFC800' : '#D1D5DB',
                      textDecoration: 'none',
                      fontWeight: 500,
                      backgroundColor: hoveredMobileLinks[link.href] ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                      transition: 'all 0.2s'
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;