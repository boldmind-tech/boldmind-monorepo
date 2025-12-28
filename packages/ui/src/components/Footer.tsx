import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo'; // Import your Logo component

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
}

const Footer: React.FC<FooterProps> = ({ 
  logoSrc = '/logo.png', 
  sections,
  className = '' 
}) => {
  
  // Default sections if none provided
  const defaultSections: FooterSection[] = [
    {
      title: 'Products',
      links: [
        { href: '/products/amebogist', label: 'AmeboGist' },
        { href: '/products/educenter', label: 'EduCenter' },
        { href: '/products/planai', label: 'PlanAI Suite' },
        { href: '/products/boldmind-os', label: 'BoldMind OS' },
      ]
    },
    {
      title: 'Company',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '/mission', label: 'Our Mission' },
        { href: '/contact', label: 'Contact' },
        { href: '/careers', label: 'Careers' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Service' },
        { href: '/cookies', label: 'Cookie Policy' },
        { href: '/gdpr', label: 'GDPR Compliance' },
      ]
    }
  ];

  const footerSections = sections || defaultSections;

  return (
    <footer className={`bg-gray-900 text-white py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Logo size="lg" src="/logo.png"/>
            <p className="mt-4 text-gray-300 max-w-md">
              Naija-authentic, AI-first, execution-focused technology solutions. 
              Empowering 1 million Nigerian entrepreneurs by 2030 through our complete ecosystem.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="https://x.com/VillageCircle" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                {/* Twitter Icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/boldmind" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                {/* LinkedIn Icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/boldmind-tech" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                {/* GitHub Icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact and Location */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-2">📍 Lagos HQ</h4>
              <p className="text-gray-400 text-sm">
                BoldMind Technology Solution Enterprise<br />
                Lagos, Nigeria
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📞 Contact</h4>
              <p className="text-gray-400 text-sm">
                <a href="tel:+2349138349271" className="hover:text-white">
                  +234 913 834 9271
                </a>
                <br />
                <a href="mailto:hello@boldmind.ng" className="hover:text-white">
                  hello@boldmind.ng
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">⚡ Newsletter</h4>
              <p className="text-gray-400 text-sm mb-2">
                Get updates on Nigerian tech & entrepreneurship
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 bg-gray-800 text-white rounded-l-md flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Links */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} BoldMind Technology Solution Enterprise. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;