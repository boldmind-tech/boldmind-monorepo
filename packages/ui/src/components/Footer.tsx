'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FooterLink {
  href: string;
  label: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logoSrc?: string;
  sections?: FooterSection[];
  className?: string;
  copyright?: string;
}

const Footer: React.FC<FooterProps> = ({ 
  logoSrc = '/logo.png', 
  sections,
  className = '',
  copyright
}) => {
  const [imageError, setImageError] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  
  const defaultSections: FooterSection[] = [
    {
      title: 'Products',
      links: [
        { href: 'https://amebogist.ng', label: 'AmeboGist' },
        { href: 'https://educenter.com.ng', label: 'EduCenter' },
        { href: '/planai', label: 'PlanAI Suite' },
        { href: '/products', label: 'All Products' },
      ]
    },
    {
      title: 'Company',
      links: [
        { href: '/#ecosystem', label: 'Our Ecosystem' },
        { href: '/#products', label: 'All Products' },
        { href: 'https://x.com/VillageCircle', label: 'Blog' },
        { href: '/#contact', label: 'Contact Us' },
      ]
    },
    {
      title: 'Connect',
      links: [
        { href: 'https://twitter.com/BoldMindNg', label: 'Twitter' },
        { href: 'https://linkedin.com/company/boldmind', label: 'LinkedIn' },
        { href: 'https://instagram.com/boldmind.ng', label: 'Instagram' },
        { href: 'https://github.com/boldmind-tech', label: 'GitHub' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Service' },
        { href: '/cookies', label: 'Cookie Policy' },
        { href: '/gdpr', label: 'GDPR' },
      ]
    }
  ];

  const footerSections = sections || defaultSections;
  const currentYear = new Date().getFullYear();

  const getLinkColor = (href: string, label: string) => {
    const key = `${href}-${label}`;
    return hoveredLink === key ? '#FFC800' : '#9CA3AF';
  };

  const getSocialColor = (href: string, label: string) => {
    const key = `${href}-${label}`;
    return hoveredSocial === key ? '#FFC800' : '#D1D5DB';
  };

  return (
    <footer style={{ 
      width: '100%', 
      backgroundColor: '#00143C', 
      color: 'white'
    }}>
      <div style={{ width: '100%' }}>
        <div style={{ 
          maxWidth: '80rem', 
          margin: '0 auto', 
          padding: '3rem 1rem'
        }}>
          {/* Main Footer Content */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {/* Logo and Description */}
            <div style={{ 
              gridColumn: 'span 2'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                {/* Logo with fallback */}
                {!imageError ? (
                  <div style={{ 
                    position: 'relative', 
                    width: '3rem', 
                    height: '3rem',
                    flexShrink: 0
                  }}>
                    <Image
                      src={logoSrc}
                      alt="BoldMind Logo"
                      fill
                      style={{ objectFit: 'contain' }}
                      onError={() => setImageError(true)}
                    />
                  </div>
                ) : (
                  <div style={{ 
                    width: '3rem', 
                    height: '3rem', 
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
                
                <div>
                  <span style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 900 
                  }}>
                    Bold<span style={{ color: '#FFC800' }}>Mind</span>
                  </span>
                  <p style={{ 
                    color: '#9CA3AF',
                    fontSize: '0.75rem',
                    marginTop: '0.25rem'
                  }}>
                    Technology Solutions
                  </p>
                </div>
              </div>
              
              <p style={{ 
                color: '#9CA3AF',
                fontSize: '0.875rem',
                marginBottom: '1.5rem',
                maxWidth: '28rem'
              }}>
                Building impact-driven products that solve fundamental Nigerian problems 
                through authentic media, education, and technology.
              </p>
              
              {/* Contact Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <svg style={{ width: '1.25rem', height: '1.25rem', color: '#9CA3AF', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span style={{ color: '#D1D5DB', fontSize: '0.875rem' }}>Lagos, Nigeria</span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <svg style={{ width: '1.25rem', height: '1.25rem', color: '#9CA3AF', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a 
                    href="tel:+2349138349271" 
                    onMouseEnter={() => setHoveredSocial('phone')}
                    onMouseLeave={() => setHoveredSocial(null)}
                    style={{ 
                      color: hoveredSocial === 'phone' ? '#FFC800' : '#D1D5DB',
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                  >
                    +234 913 834 9271
                  </a>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <svg style={{ width: '1.25rem', height: '1.25rem', color: '#9CA3AF', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a 
                    href="mailto:hello@boldmind.ng"
                    onMouseEnter={() => setHoveredSocial('email')}
                    onMouseLeave={() => setHoveredSocial(null)}
                    style={{ 
                      color: hoveredSocial === 'email' ? '#FFC800' : '#D1D5DB',
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                  >
                    hello@boldmind.ng
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ 
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  color: 'white',
                  marginBottom: '1rem'
                }}>
                  {section.title}
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {section.links.map((link) => {
                    const linkKey = `${link.href}-${link.label}`;
                    return (
                      <li key={link.href}>
                        <Link 
                          href={link.href}
                          onMouseEnter={() => setHoveredLink(linkKey)}
                          onMouseLeave={() => setHoveredLink(null)}
                          style={{ 
                            color: getLinkColor(link.href, link.label),
                            fontSize: '0.875rem',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'color 0.2s'
                          }}
                          target={link.href.startsWith('http') ? '_blank' : '_self'}
                        >
                          <span>{link.label}</span>
                          {link.href.startsWith('http') && (
                            <svg style={{ width: '0.75rem', height: '0.75rem', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div style={{ 
            backgroundColor: '#0A1D37',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{ flexShrink: 0 }}>
                <h4 style={{ 
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  marginBottom: '0.5rem'
                }}>
                  📬 Get Updates
                </h4>
                <p style={{ 
                  color: '#9CA3AF',
                  fontSize: '0.875rem'
                }}>
                  Subscribe for Nigerian tech & entrepreneurship insights
                </p>
              </div>
              <form style={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                width: '100%'
              }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  style={{ 
                    flex: 1,
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid #374151',
                    borderRadius: '0.5rem',
                    color: 'white',
                    fontSize: '0.875rem',
                    outline: 'none'
                  }}
                  required
                />
                <button
                  type="submit"
                  style={{ 
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#FFC800',
                    color: '#00143C',
                    fontWeight: 'bold',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    fontSize: '0.875rem'
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{ 
            borderTop: '1px solid #374151',
            paddingTop: '2rem'
          }}>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <p style={{ 
                color: '#6B7280',
                fontSize: '0.75rem',
                textAlign: 'center'
              }}>
                {copyright || `© ${currentYear} BoldMind Technology Solution Enterprise. All rights reserved.`}
              </p>
              
              <div style={{ 
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.75rem'
              }}>
                {['Privacy Policy', 'Terms', 'Cookies', 'Sitemap'].map((item, index) => {
                  const href = `/${item.toLowerCase().replace(' ', '')}`;
                  const isHovered = hoveredLink === `bottom-${item}`;
                  return (
                    <React.Fragment key={item}>
                      <Link 
                        href={href}
                        onMouseEnter={() => setHoveredLink(`bottom-${item}`)}
                        onMouseLeave={() => setHoveredLink(null)}
                        style={{ 
                          textDecoration: 'none',
                          color: isHovered ? '#FFC800' : '#9CA3AF',
                          transition: 'color 0.2s'
                        }}
                      >
                        {item}
                      </Link>
                      {index < 3 && <span style={{ color: '#4B5563' }}>•</span>}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            
            <p style={{ 
              color: '#6B7280',
              fontSize: '0.75rem',
              textAlign: 'center',
              marginTop: '1rem'
            }}>
              Empowering 1 million Nigerian Entrepreneurs by 2030
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;