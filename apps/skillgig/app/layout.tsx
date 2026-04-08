import type { Metadata, Viewport } from 'next';
import { SkillgigLayout } from './skillgigLayout';
import "@boldmind/ui/dist/index.css";

const BASE_URL =
  process.env['NEXT_PUBLIC_APP_URL']?.replace(/\/$/, '') ?? 'https://skills.educenter.com.ng';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SkillGig — Nigeria's Premier Freelance & Skill Marketplace",
    template: '%s | SkillGig',
  },
  description:
    'Find top Nigerian freelancers or post gigs and build your skill portfolio. SkillGig connects Nigerian businesses with verified local talent — developers, designers, writers, marketers and more.',
  keywords: [
    'freelance Nigeria',
    'Nigerian freelancers',
    'skill marketplace Nigeria',
    'gig economy Nigeria',
    'SkillGig',
    'hire Nigerian developers',
    'hire Nigerian designers',
    'Nigerian talent marketplace',
    'freelance jobs Nigeria',
    'post gig Nigeria',
    'Nigerian remote work',
    'African freelance platform',
    'Nigeria gig platform',
    'digital skills marketplace Nigeria',
    'hire Nigerian writers',
    'Nigerian marketing freelancers',
    'BoldMind marketplace',
    'verified Nigerian talent',
    'skill portfolio Nigeria',
    'freelance marketplace Africa',
  ],
  authors: [
    { name: 'SkillGig', url: BASE_URL },
    { name: 'BoldMind Technology Solution Enterprise', url: 'https://boldmind.ng' },
  ],
  creator: 'BoldMind Technology Solution Enterprise',
  publisher: 'BoldMind Technology Solution Enterprise',
  formatDetection: { email: false, telephone: false },
  category: 'marketplace',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: { 'en-NG': BASE_URL },
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: BASE_URL,
    title: "SkillGig — Nigeria's Freelance & Skill Marketplace",
    siteName: 'SkillGig',
    description:
      'Post gigs, find verified Nigerian talent, and build your skill portfolio. The go-to marketplace connecting Nigerian businesses with local freelancers.',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'SkillGig — Nigerian Freelance Marketplace',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@boldmindtech',
    title: "SkillGig — Nigerian Freelance & Skill Marketplace",
    description:
      'Find verified Nigerian freelancers or post gigs. Developers, designers, writers, marketers and more.',
    images: [`${BASE_URL}/og-image.png`],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: { title: 'SkillGig', statusBarStyle: 'black-translucent' },
  other: {
    'application-name': 'SkillGig',
    'apple-mobile-web-app-title': 'SkillGig',
    'msapplication-TileColor': '#6366F1',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#6366F1' },
    { media: '(prefers-color-scheme: dark)', color: '#4338CA' },
  ],
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

const marketplaceSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'SkillGig',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    'Nigerian freelance and skill marketplace — connecting businesses with verified local talent.',
  featureList: [
    'Post gigs and projects',
    'Browse verified Nigerian freelancers',
    'Skill portfolio building',
    'Secure payment escrow',
    'Freelancer ratings and reviews',
    'Category-based talent search',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'BoldMind Technology Solution Enterprise',
    url: 'https://boldmind.ng',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SkillGig',
  url: BASE_URL,
  inLanguage: 'en-NG',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//api.boldmind.ng" />
        <link rel="dns-prefetch" href="//cdn.boldmind.ng" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos, Nigeria" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(marketplaceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <SkillgigLayout>{children}</SkillgigLayout>
      </body>
    </html>
  );
}
