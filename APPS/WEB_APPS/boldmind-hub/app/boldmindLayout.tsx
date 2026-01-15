// apps/web/boldmind-hub/components/BoldMindLayout.tsx - UPDATED
'use client';

import { ThemeProvider } from '@boldmind/ui';
import { BOLDMIND_PRODUCTS } from '@boldmind/utils';
import { productThemes } from '@boldmind/ui';

export function BoldMindLayout({ children }: { children: React.ReactNode }) {
  // Force BoldMind Hub theme regardless of detection
  const forceProduct = 'boldmind-hub';
  
  // Get BoldMind Hub product from your data or create it
  const boldmindProduct = BOLDMIND_PRODUCTS.find(p => p.slug === forceProduct) || {
    id: 'prod_000',
    name: 'BoldMind Technology Ecosystem',
    description: 'Empowering 1 million Nigerian Entrepreneurs by 2030',
    category: 'ai',
    status: 'LIVE',
    version: '1.0.0',
    slug: forceProduct,
    icon: '🚀',
    revenueModel: 'Portfolio management',
    monthlyRevenue: 0,
    users: '10,000+',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    teamSize: 3,
    timeline: 'Launched Q4 2025',
    priority: 0,
    dependencies: [],
    integrations: [],
    tags: ['ecosystem', 'hub', 'portfolio', 'showcase'],
    links: { website: 'https://boldmind.ng' },
    features: [],
    challenges: [],
    opportunities: [],
    createdAt: '2025-01-01',
    updatedAt: '2025-12-28',
  };

  // Get the theme colors
  const theme = productThemes[forceProduct] || productThemes['boldmind-hub'];

  const productTheme = {
    slug: forceProduct,
    name: boldmindProduct.name,
    description: boldmindProduct.description,
    icon: boldmindProduct.icon,
    status: boldmindProduct.status,
    colors: {
      primary: theme.primary,
      secondary: theme.secondary,
      accent: theme.primary,
      background: theme.background,
    },
    product: boldmindProduct
  };

  return (
    <ThemeProvider defaultProduct={productTheme}>
      {children}
    </ThemeProvider>
  );
}