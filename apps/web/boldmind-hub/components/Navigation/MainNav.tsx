// apps/web/boldmind-hub/components/Navigation/MainNav.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Products', href: '#products' },
    { label: 'PlanAI', href: '/planai' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const liveProducts = [
    { name: 'AmeboGist', href: 'https://amebogist.ng', color: 'text-green-400' },
    { name: 'EduCenter', href: 'https://educenter.com.ng', color: 'text-blue-400' },
    { name: 'PlanAI', href: '/planai', color: 'text-yellow-400' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#00143C]/90 backdrop-blur-md border-b border-[#FFC800]/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-[#FFC800] rounded-lg rotate-45 group-hover:rotate-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 flex items-center justify-center text-[#00143C] font-black text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                B
              </span>
            </div>
            <span className="text-2xl font-black text-white">
              Bold<span className="text-[#FFC800]">Mind</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFC800] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            {/* Live Products Badge */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-700">
              <span className="text-sm text-gray-400">Live:</span>
              <div className="flex gap-2">
                {liveProducts.map((product) => (
                  <a
                    key={product.name}
                    href={product.href}
                    className={`px-3 py-1 rounded-full text-xs font-bold ${product.color} bg-black/30 hover:bg-black/50 transition-colors`}
                  >
                    {product.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* CTA Button */}
            <a
              href="https://wa.me/2349138349271"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#FFC800] text-[#00143C] font-bold rounded-lg hover:bg-[#FFD700] transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://wa.me/2349138349271"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#FFC800] text-[#00143C] font-bold rounded-lg text-center hover:bg-[#FFD700] transition-all"
              >
                Get Started on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}