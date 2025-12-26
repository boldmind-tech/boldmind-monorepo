// packages/ui/src/components/Navbar.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  logoSrc?: string;
  links: { href: string; label: string }[];
  cta?: { href: string; label: string };
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc = '/boldmind-logo.png', links, cta }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-lg border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logoSrc} alt="Logo" width={40} height={40} className="rounded-full" />
          <span className="font-black text-xl hidden md:block">BoldMind</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-neutral hover:text-accent font-semibold">{link.label}</Link>)}
          {cta && <a href={cta.href} className="px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-yellow-400">{cta.label}</a>}
        </div>
        <button className="md:hidden text-accent" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-primary px-6 py-4 flex flex-col gap-4">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-neutral hover:text-accent font-semibold" onClick={() => setIsOpen(false)}>{link.label}</Link>)}
          {cta && <a href={cta.href} className="px-6 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-yellow-400" onClick={() => setIsOpen(false)}>{cta.label}</a>}
        </div>
      )}
    </nav>
  );
};

export default Navbar;