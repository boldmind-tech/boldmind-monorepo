import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EduCenter - Africa\'s Practical Learning Engine',
  description: 'From exam mastery to digital business and AI skills. Turn attention into skills, credentials, and income.',
  keywords: 'JAMB, WAEC, NECO, Digital Business School, AI Skills, Nigerian Education, Online Learning',
  authors: [{ name: 'BoldMind Technology Solution Enterprise' }],
  creator: 'BoldMind',
  publisher: 'BoldMind Technology Solution Enterprise',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    title: 'EduCenter - Africa\'s Practical Learning Engine',
    description: 'Study Hub, Digital Business School & AI Skills Lab all in one platform',
    url: 'https://educenter.com.ng',
    siteName: 'EduCenter',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EduCenter - Africa\'s Practical Learning Engine',
      },
    ],

  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduCenter - Africa\'s Practical Learning Engine',
    description: 'Study Hub, Digital Business School & AI Skills Lab',
    images: ['/og-image.png'],
    creator: '@bobbycuc2025',
  },
   icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192x192.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  manifest: '/manifest.webmanifest',
};

// Add this viewport export
export const viewport: Viewport = {
  themeColor: '#00143C',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}