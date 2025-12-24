import type { Metadata } from "next";
import { Footer } from "../../../../packages/ui/src/components/Footer";


import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://boldmind.ng'),
  title: {
    default: 'BoldMind Technology Solution Enterprise - Empowering 1M Nigerian Entrepreneurs by 2030',
    template: '%s | BoldMind Technology'
  },
  description: 'Naija-authentic, AI-first, execution-focused technology solutions. Complete ecosystem: AmeboGist (awareness), EduCenter (education), PlanAI (enablement). Empowering 1 million Nigerian entrepreneurs by 2030.',
  keywords: [
    'BoldMind Technology',
    'Nigerian tech company',
    'AI automation Nigeria',
    'AmeboGist',
    'EduCenter Nigeria',
    'PlanAI Suite',
    'Nigerian entrepreneurs',
    'business automation Nigeria',
    'JAMB past questions',
    'AI receptionist',
    'social media automation',
    'Nigerian business tools',
    'African tech solutions',
    'digital business school',
    'Nigerian startups',
    'Lagos tech',
    'Naija tech',
  ],
  authors: [{ name: 'BoldMind Technology Solution Enterprise' }],
  creator: 'BoldMind Technology Solution Enterprise',
  publisher: 'BoldMind Technology Solution Enterprise',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://boldmind.ng',
    title: 'BoldMind Technology Solution Enterprise',
    description: 'Naija-authentic. AI-first. Execution-focused. Empowering 1M Nigerian entrepreneurs by 2030.',
    siteName: 'BoldMind Technology',
    images: [
      {
        url: '/og-image.png', // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'BoldMind Technology - Empowering Nigerian Entrepreneurs',
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'BoldMind Technology Solution Enterprise',
    description: 'Naija-authentic. AI-first. Execution-focused. Empowering 1M Nigerian entrepreneurs by 2030.',
    creator: '@VillageCircle',
    images: ['/og-image.png'],
  },
  
  // Robots
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
  
  // Verification (add these after claiming your sites)
  verification: {
    google: 'your-google-verification-code', // Get from Google Search Console
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  // Alternate languages
  alternates: {
    canonical: 'https://boldmind.ng',
    languages: {
      'en-NG': 'https://boldmind.ng',
    },
  },
  
  // Other
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NG">
      <head>
        {/* Additional meta tags */}
        <meta name="theme-color" content="#0A1D37" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Schema.org Organization markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BoldMind Technology Solution Enterprise",
              "alternateName": "BoldMind Tech",
              "url": "https://boldmind.ng",
              "logo": "https://boldmind.ng/logo.png",
              "description": "Naija-authentic, AI-first, execution-focused technology solutions empowering 1 million Nigerian entrepreneurs by 2030.",
              "foundingDate": "2024",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Charles Chijuka"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "NG",
                "addressLocality": "Lagos"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+234-913-834-9271",
                "contactType": "Customer Service",
                "availableLanguage": ["English", "Pidgin"]
              },
              "sameAs": [
                "https://x.com/VillageCircle",
                "https://www.facebook.com/BoldMindTech",
                "https://www.linkedin.com/company/boldmind-technology-solution-enterprise",
                "https://www.instagram.com/boldmindtech/",
                "https://github.com/boldmind-tech"
              ],
              "owns": [
                {
                  "@type": "WebSite",
                  "name": "AmeboGist",
                  "url": "https://amebogist.ng"
                },
                {
                  "@type": "WebSite",
                  "name": "EduCenter",
                  "url": "https://educenter.com.ng"
                }
              ]
            })
          }}
        />
        
        {/* LocalBusiness Schema for Nigerian market */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "BoldMind Technology Solution Enterprise",
              "image": "https://boldmind.ng/logo.png",
              "@id": "https://boldmind.ng",
              "url": "https://boldmind.ng",
              "telephone": "+234-913-834-9271",
              "priceRange": "₦₦",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "Lagos",
                "addressCountry": "NG"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 6.5244,
                "longitude": 3.3792
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}