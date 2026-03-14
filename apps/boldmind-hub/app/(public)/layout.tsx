// ─────────────────────────────────────────────────────────────────────────────
// apps/boldmind-hub/app/(public)/layout.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Route group (public) — wraps all public-facing hub pages:
//   /pricing, /about, /products, /contact, /privacy, /terms
//
// This adds SuperNavbar + SuperFooter at the shell level so every page in
// this group gets them without each page component needing to include them.
//
// STRUCTURE:
//   apps/boldmind-hub/app/
//     (public)/             ← route group (no URL segment)
//       layout.tsx          ← this file — nav + footer shell
//       page.tsx            ← home page
//       pricing/page.tsx    ← pricing page (gets nav+footer from here)
//       about/page.tsx
//       products/page.tsx
//     (auth)/               ← login/register (different shell — no footer)
//     (dashboard)/          ← user dashboard (sidebar shell)
//     admin/                ← admin area (admin sidebar)
//
// FIX: Before this file existed, pricing/page.tsx was missing a navbar
// because the root layout.tsx only added BoldMindLayout (ThemeProvider),
// not SuperNavbar. Now all (public) pages automatically get both.
// ─────────────────────────────────────────────────────────────────────────────

import { SuperNavbar, SuperFooter } from '@boldmind/ui';
import type { ReactNode } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/pricing', label: 'Pricing' },
  { href: 'https://amebogist.ng', label: 'AmeboGist', isExternal: true },
  { href: 'https://educenter.com.ng', label: 'EduCenter', isExternal: true },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const footerSections = [
  {
    title: '🚀 Ecosystem',
    links: [
      { href: 'https://amebogist.ng',  label: 'AmeboGist',   isExternal: true },
      { href: 'https://educenter.com.ng', label: 'EduCenter', isExternal: true },
      { href: 'https://planai.boldmind.ng', label: 'PlanAI Suite', isExternal: true },
      { href: 'https://fit.boldmind.ng',  label: 'NaijaFit',  isExternal: true },
      { href: 'https://os.boldmind.ng',   label: 'BoldMind OS', isExternal: true },
    ],
  },
  {
    title: '🏢 Company',
    links: [
      { href: '/about',    label: 'About BoldMind' },
      { href: '/products', label: 'All Products' },
      { href: '/pricing',  label: 'Pricing' },
      { href: '/contact',  label: 'Contact Us' },
      { href: '/privacy',  label: 'Privacy Policy' },
      { href: '/terms',    label: 'Terms of Service' },
    ],
  },
  {
    title: '🛟 Support',
    links: [
      { href: 'mailto:hello@boldmind.ng', label: 'Email Us' },
      { href: 'https://wa.me/2349138349271', label: 'WhatsApp', isExternal: true },
    ],
  },
];

export default function PublicHubLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <SuperNavbar
        links={navLinks}
        cta={{ href: '/register', label: 'Get Started Free', variant: 'secondary' }}
        logoSrc="/logo.png"
        sticky
        showThemeControls
        showFontToggle
      />
      <main className="flex-1">
        {children}
      </main>
      <SuperFooter
        logoSrc="/logo.png"
        sections={footerSections}
        contactInfo={{
          email:    'hello@boldmind.ng',
          phone:    '+2349138349271',
          whatsapp: '+2349138349271',
          address:  'No 5 Olusoji Imole Street, Ikosi Ketu, Lagos, Nigeria',
        }}
        copyright={`© ${new Date().getFullYear()} BoldMind Technology Solution Enterprise. All rights reserved.`}
      />
    </div>
  );
}