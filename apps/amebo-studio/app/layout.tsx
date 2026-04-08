import type { Metadata, Viewport } from 'next';
import { Providers } from './Providers';
import '@boldmind/ui/dist/index.css';

const BASE_URL =
  process.env['NEXT_PUBLIC_APP_URL']?.replace(/\/$/, '') ?? 'https://studio.amebogist.ng';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'AmeboStudio — AI-Powered Content Creation for Nigerian Creators',
    template: '%s | AmeboStudio',
  },
  description:
    'Create, edit, and distribute viral content with AI. AmeboStudio is the all-in-one creator platform for Nigerian storytellers — AI video editor, image studio, content writer, and multi-platform publishing.',
  keywords: [
    'content creation Nigeria',
    'AI video editor Nigeria',
    'Nigerian content creator tools',
    'AmeboStudio',
    'AmeboGist studio',
    'video editing Nigeria',
    'image design Nigeria',
    'social media content Nigeria',
    'YouTube Nigeria creator',
    'TikTok Nigeria creator',
    'Instagram creator Nigeria',
    'AI content writer Nigeria',
    'media studio Nigeria',
    'BoldMind creator tools',
    'creator economy Nigeria',
    'viral content Nigeria',
    'content automation',
    'brand templates Nigeria',
  ],
  authors: [
    { name: 'AmeboStudio', url: BASE_URL },
    { name: 'BoldMind Technology Solution Enterprise', url: 'https://boldmind.ng' },
  ],
  creator: 'BoldMind Technology Solution Enterprise',
  publisher: 'BoldMind Technology Solution Enterprise',
  formatDetection: { email: false, telephone: false },
  category: 'technology',
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
    title: 'AmeboStudio — Create Content That Goes Viral',
    siteName: 'AmeboStudio',
    description:
      'AI-powered studio for Nigerian creators. Edit videos, design graphics, write scripts — all in one place. Amplify your stories across every platform.',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'AmeboStudio — AI Content Creation for Nigerian Creators',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@amebogist',
    title: 'AmeboStudio — AI Content Creation for Nigerian Creators',
    description:
      'Edit videos, design graphics, write scripts with AI. Built for Nigerian storytellers.',
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
  appleWebApp: { title: 'AmeboStudio', statusBarStyle: 'black-translucent' },
  other: {
    'application-name': 'AmeboStudio',
    'msapplication-TileColor': '#FF6B35',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FF6B35' },
    { media: '(prefers-color-scheme: dark)', color: '#CC4A1A' },
  ],
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AmeboStudio',
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'Web',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    'AI-powered content creation studio for Nigerian creators — video editing, image design, content writing, and multi-platform publishing.',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'NGN',
    lowPrice: '5000',
    highPrice: '40000',
  },
  featureList: [
    'AI-powered video editor',
    'Smart image studio with background removal',
    'AI content writer with Nigerian context',
    'Multi-platform publishing (YouTube, TikTok, Instagram)',
    'Analytics dashboard',
    'Brand templates for Nigerian creators',
    'Podcast tools',
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
  name: 'AmeboStudio',
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
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//api.boldmind.ng" />
        <link rel="dns-prefetch" href="//cdn.boldmind.ng" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos, Nigeria" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
