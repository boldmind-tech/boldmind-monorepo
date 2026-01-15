'use client';

import { SuperFooter } from './SuperFooter';
import { SuperNavbar } from './SuperNavbar';
import { ReactNode } from 'react';

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

// Type-safe product configs
interface ProductConfig {
  name: string;
  theme: 'dark' | 'light';
  footerSections: Array<{
    title: string;
    links: Array<{
      href: string;
      label: string;
      isExternal?: boolean;
      badge?: string;
    }>;
  }>;
}

const productConfigs: Record<string, ProductConfig> = {
  'boldmind-hub': {
    name: 'BoldMind Hub',
    theme: 'dark',
    footerSections: [
      {
        title: '🚀 Products',
        links: [
          { href: 'https://amebogist.ng', label: 'AmeboGist', isExternal: true },
          { href: 'https://educenter.com.ng', label: 'EduCenter', isExternal: true },
          { href: '/boldmind-os', label: 'BoldMind OS' },
          { href: '/products', label: 'All 31+ Products', badge: '31+' },
        ],
      },
      {
        title: '🏢 Company',
        links: [
          { href: '/about', label: 'About BoldMind' },
          { href: '/mission', label: 'Our Mission' },
          { href: '/team', label: 'Team' },
          { href: '/careers', label: 'Careers', badge: 'Hiring' },
        ],
      },
    ],
  },
  'educenter': {
    name: 'EduCenter',
    theme: 'light',
    footerSections: [
      {
        title: '🎓 Learning Paths',
        links: [
          { href: '/study-hub', label: 'Study Hub' },
          { href: '/business-school', label: 'Business School' },
          { href: '/ai-lab', label: 'AI Skills Lab' },
          { href: '/courses', label: 'All Courses' },
        ],
      },
      {
        title: '🏢 Company',
        links: [
          { href: '/about', label: 'About EduCenter' },
          { href: '/instructors', label: 'Instructors' },
          { href: '/careers', label: 'Careers' },
          { href: '/contact', label: 'Contact' },
        ],
      },
    ],
  },
  'boldmind-os': {
    name: 'BoldMind OS',
    theme: 'dark',
    footerSections: [
      {
        title: '🧠 OS Modules',
        links: [
          { href: '#capture', label: 'Capture Brain' },
          { href: '#focus', label: 'Focus Brain' },
          { href: '#connect', label: 'Connect Brain' },
          { href: '#create', label: 'Create Brain' },
          { href: '#reflect', label: 'Reflect Brain' },
        ],
      },
      {
        title: '🏢 Company',
        links: [
          { href: '/about', label: 'About Us' },
          { href: '/mission', label: 'Our Mission' },
          { href: '/team', label: 'Team' },
          { href: '/careers', label: 'Careers', badge: 'Hiring' },
        ],
      },
    ],
  },
  'amebogist': {
    name: 'AmeboGist',
    theme: 'dark',
    footerSections: [
      {
        title: '📰 Categories',
        links: [
          { href: '/news', label: 'News' },
          { href: '/entertainment', label: 'Entertainment' },
          { href: '/sports', label: 'Sports' },
          { href: '/tech', label: 'Tech' },
          { href: '/lifestyle', label: 'Lifestyle' },
        ],
      },
      {
        title: '🏢 Company',
        links: [
          { href: '/about', label: 'About AmeboGist' },
          { href: '/advertise', label: 'Advertise With Us' },
          { href: '/contact', label: 'Contact' },
          { href: '/privacy', label: 'Privacy Policy' },
        ],
      },
    ],
  },
  // Default fallback for any product
  'default': {
    name: 'BoldMind Product',
    theme: 'dark',
    footerSections: [
      {
        title: '📱 Product',
        links: [
          { href: '/features', label: 'Features' },
          { href: '/pricing', label: 'Pricing' },
          { href: '/demo', label: 'Demo' },
          { href: '/docs', label: 'Documentation' },
        ],
      },
      {
        title: '🏢 Company',
        links: [
          { href: '/about', label: 'About Us' },
          { href: '/contact', label: 'Contact' },
          { href: '/privacy', label: 'Privacy' },
          { href: '/terms', label: 'Terms' },
        ],
      },
    ],
  },
};

export function ProductLayout({
  children,
  product,
  navLinks,
  cta,
  showParticles = false,
  theme,
}: ProductLayoutProps) {
  const config = productConfigs[product] || productConfigs['default'];
  const currentTheme = theme || config.theme;
  const footerSections = config.footerSections;

  return (
    <div className={`min-h-screen ${
      currentTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <SuperNavbar
        logoSrc="/logo.png"
        links={navLinks.map(link => ({
          ...link,
          icon: link.icon ? <span>{link.icon}</span> : undefined
        }))}
        cta={cta}
        theme={currentTheme}
        sticky={true}
        animated={true}
        showParticles={showParticles}
      />
      
      <main className="pt-20">
        {children}
      </main>
      
      <SuperFooter
        logoSrc="/logo.png"
        sections={footerSections}
        contactInfo={{
          email: `hello@${product}.ng`,
          phone: '+234 913 834 9271',
          address: 'Lagos, Nigeria',
        }}
        newsletter={true}
        showStats={true}
        animated={true}
        copyright={`© ${new Date().getFullYear()} ${config.name}. A BoldMind Technology Solution.`}
      />
    </div>
  );
}

export default ProductLayout;