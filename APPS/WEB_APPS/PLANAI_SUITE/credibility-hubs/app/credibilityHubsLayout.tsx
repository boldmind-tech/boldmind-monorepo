'use client';

import { Providers } from '../components/Providers';
import { BOLDMIND_PRODUCTS, productThemes } from '@boldmind/utils';

export function CredibilityHubsLayout({ children }: { children: React.ReactNode }) {
  const forceProduct = 'credibility-hubs';
  const product = BOLDMIND_PRODUCTS.find(p => p.slug === forceProduct);
  const theme = productThemes[forceProduct] || productThemes['boldmind-hub'];

  const productTheme = {
    slug: forceProduct,
    name: product?.name || 'Credibility Hubs',
    description: product?.description || '',
    icon: product?.icon || '',
    status: product?.status || 'LIVE',
    colors: {
      primary: theme?.primary,
      secondary: theme?.secondary,
      accent: theme?.primary,
      background: theme?.background,
    },
    product
  };

  return <Providers defaultProductTheme={productTheme}>{children}</Providers>;
}
