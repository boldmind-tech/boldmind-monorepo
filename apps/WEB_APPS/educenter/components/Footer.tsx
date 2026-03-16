import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import { ReactElement } from 'react';

interface FooterLink {
  name: string;
  href: string;
  icon?: ReactElement;
}

type FooterLinks = {
  [key: string]: FooterLink[];
};

export default function Footer() {
  const footerLinks: FooterLinks = {
    'Products': [
      { name: 'Courses', href: '/courses' },
      { name: 'JAMB Prep', href: '/jamb' },
      { name: 'WAEC/NECO', href: '/waec-neco' },
      { name: 'Mobile App', href: '/mobile' },
    ],
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' },
    ],
    'Support': [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    'Connect': [
      { name: 'Facebook', href: 'https://facebook.com/DevConnectPage', icon: <Facebook className="h-4 w-4" /> },
      { name: 'Twitter', href: 'https://twitter.com/medianman9ja', icon: <Twitter className="h-4 w-4" /> },
      { name: 'Instagram', href: 'https://instagram.com/educenterc', icon: <Instagram className="h-4 w-4" /> },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/boldmind-technology-solution-enterprise', icon: <Linkedin className="h-4 w-4" /> },
      { name: 'YouTube', href: 'https://youtube.com/Codefires', icon: <Youtube className="h-4 w-4" /> },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">EduCenter</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Nigeria's premier online learning platform providing quality education
              and exam preparation for JAMB, WAEC, NECO, and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white flex items-center space-x-2"
                    >
                      {link.icon && <span>{link.icon}</span>}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EduCenter.com.ng. All rights reserved.</p>
          <p className="mt-2">Powered by BoldMind Technologies</p>
        </div>
      </div>
    </footer>
  );
}