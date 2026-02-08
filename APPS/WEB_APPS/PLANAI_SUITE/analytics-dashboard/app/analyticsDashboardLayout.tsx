'use client';

import { Providers } from '../components/Providers';
import { BOLDMIND_PRODUCTS, productThemes } from '@boldmind/utils';

export function AnalyticsDashboardLayout({ children }: { children: React.ReactNode }) {
  const forceProduct = 'analytics-dashboard';
  const product = BOLDMIND_PRODUCTS.find(p => p.slug === forceProduct);
  const theme = productThemes[forceProduct] || productThemes['analytics-dashboard'];

  const productTheme = {
    slug: forceProduct,
    name: product?.name || 'Analytics Dashboard',
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
