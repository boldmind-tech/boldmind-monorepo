// ─────────────────────────────────────────────────────────────────────────────
// apps/boldmind-hub/app/layout.tsx  [ROOT — Server Component]
// ─────────────────────────────────────────────────────────────────────────────
// Root layout for boldmind.ng
// Provides: SEO metadata, blocking font script, BoldMindLayout wrapper.
// Does NOT include NavBar/Footer — route group layouts handle that.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { BoldMindLayout } from './boldmindLayout';
import { CookieConsent } from '@boldmind/ui';
import { ClientErrorBoundary } from './components/ClientErrorBoundary';
import { AuthProvider } from '@boldmind/auth';
import '@boldmind/ui/dist/index.css';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: false, // OpenDyslexic is the default; don't block on Inter
});

const BASE_URL =
  process.env['NEXT_PUBLIC_APP_URL']?.replace(/\/$/, '') ?? 'https://boldmind.ng';

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'BoldMind — Empowering 1M Nigerian Entrepreneurs by 2030',
    template: '%s | BoldMind',
  },
  description:
    'Nigeria\'s premier tech ecosystem: AmeboGist, EduCenter, PlanAI Suite, and 28+ products empowering entrepreneurs through AI, education, and authentic media.',
  keywords: [
    'Nigerian entrepreneurs', 'BoldMind', 'AI Nigeria', 'PlanAI', 'AmeboGist',
    'EduCenter', 'Nigerian tech ecosystem', 'African technology', 'business tools Nigeria',
  ],
  authors: [
    { name: 'BoldMind Technology Solution Enterprise', url: BASE_URL },
    { name: 'Charles Uche Chijuka' },
  ],
  creator: 'BoldMind Technology Solution Enterprise',
  publisher: 'BoldMind Technology Solution Enterprise',
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: BASE_URL, languages: { 'en-NG': BASE_URL } },
  openGraph: {
    type: 'website', locale: 'en_NG', url: BASE_URL,
    title: 'BoldMind — Building Systems That Shift Nations',
    siteName: 'BoldMind',
    description: 'Empowering 1 million Nigerian Entrepreneurs by 2030 through 31+ innovative products.',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'BoldMind' }],
  },
  twitter: {
    card: 'summary_large_image', site: '@boldmindtech',
    title: 'BoldMind — Empowering Nigerian Entrepreneurs',
    description: 'AmeboGist, EduCenter, PlanAI and 28+ products transforming Nigeria.',
    images: [`${BASE_URL}/og-image.png`],
  },
  verification: { google: process.env['NEXT_PUBLIC_GOOGLE_SITE_VERIFY'] },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: '#2B4D87',  // BoldMind primary (from logo)
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

// ─── Schema.org structured data ──────────────────────────────────────────────

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BoldMind Technology Solution Enterprise',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.webp`,
  description: 'Empowering 1 million Nigerian Entrepreneurs by 2030',
  foundingDate: '2025',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NG',
    addressRegion: 'Lagos',
    addressLocality: 'Lagos',
    streetAddress: 'No 5 Olusoji Imole Street, Ikosi Ketu',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@boldmind.ng',
    telephone: '+2349138349271',
  },
  sameAs: [
    'https://x.com/villagecircleng',
    'https://facebook.com/boldmindng',
    'https://instagram.com/boldmindng',
    'https://linkedin.com/company/boldmind-technology-solution-enterprise',
    'https://github.com/boldmind-tech',
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-NG"
      className={inter.variable}
      suppressHydrationWarning
    >
      <head>
        {/*
          BLOCKING SCRIPT — runs synchronously before browser paints.
          Sets data-font + data-product on <html> and applies the body font class
          before React hydration. This prevents Flash Of Unstyled Text (FOUT)
          and avoids body class hydration warnings when OpenDyslexic is active.
          Must be in <head> as a raw script, NOT in a React component.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function applyFontClass(font){var b=document.body;if(!b)return; b.classList.remove('font-standard','font-dyslexic'); b.classList.add('font-'+font);}try{var f=localStorage.getItem('boldmind-font-mode')||'dyslexic';document.documentElement.setAttribute('data-font',f);document.documentElement.setAttribute('data-product','boldmind-hub');applyFontClass(f);if(!document.body){document.addEventListener('DOMContentLoaded',function(){applyFontClass(f);});}}catch(e){var fallback='dyslexic';document.documentElement.setAttribute('data-font',fallback);document.documentElement.setAttribute('data-product','boldmind-hub');applyFontClass(fallback);if(!document.body){document.addEventListener('DOMContentLoaded',function(){applyFontClass(fallback);});}}})();`,
          }}
        />

        {/* Resource hints */}
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//api.boldmind.ng" />

        {/* PWA */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="BoldMind" />
        <meta name="application-name" content="BoldMind" />
        <meta name="msapplication-TileColor" content="#2B4D87" />

        {/* Geo */}
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos, Nigeria" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>

      <body className="antialiased" suppressHydrationWarning>
        <ClientErrorBoundary>
          <AuthProvider>
            <BoldMindLayout>
              {children}
            </BoldMindLayout>
          </AuthProvider>
          <CookieConsent />
        </ClientErrorBoundary>
      </body>
    </html>
  );
}