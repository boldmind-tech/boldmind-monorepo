// apps/web/boldmind-hub/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BoldMind - Empowering 1M Nigerian Entrepreneurs by 2030',
  description: 'Nigerian tech ecosystem creating impact-driven products that solve fundamental problems through authentic media, education, and AI-powered technology.',
  keywords: ['Nigerian entrepreneurs', 'tech Nigeria', 'AI Nigeria', 'business automation', 'PlanAI', 'AmeboGist', 'EduCenter'],
  authors: [{ name: 'BoldMind Technology Solutions' }],
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
    url: 'https://boldmind.ng',
    title: 'BoldMind - Building Systems That Shift Nations',
    description: 'Empowering 1 million Nigerian Entrepreneurs by 2030 through our ecosystem of 31+ products',
    siteName: 'BoldMind',
    images: [
      {
        url: '/og-image.png', // Changed from /logo.png
        width: 1200,
        height: 630,
        alt: 'BoldMind - Nigerian Tech Ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BoldMind - Empowering Nigerian Entrepreneurs',
    description: 'The complete Nigerian tech ecosystem: AmeboGist, EduCenter, PlanAI, and 28+ more products',
    images: ['/og-image.png'], // Changed from /logo.png
    creator: '@BoldMindNg',
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}