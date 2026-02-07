// apps/web/boldmind-hub/app/boldmindLayout.tsx - FIXED VERSION
'use client';

import { Providers } from '../components/Providers';
import { BOLDMIND_PRODUCTS, getProductBySlug, productThemes, getProductColors } from '@boldmind/utils';
import type { ProductThemeType } from '@boldmind/ui';
import { ReactNode } from 'react';

interface BoldMindLayoutProps {
  children: ReactNode;
}

export function BoldMindLayout({ children }: BoldMindLayoutProps) {
  const forceProduct = 'boldmind-hub';

  // Get the product from the database
  const boldmindProduct = getProductBySlug(forceProduct) || BOLDMIND_PRODUCTS[0];

  // Get theme colors
  const colors = getProductColors(forceProduct);
  const theme = productThemes[forceProduct] || productThemes['boldmind-hub'];

  // Create ProductThemeType object with correct structure
  const productTheme: ProductThemeType = {
    slug: boldmindProduct?.slug || '',
    name: boldmindProduct?.name || '',
    description: boldmindProduct?.description || '',
    icon: boldmindProduct?.icon || '',
    status: boldmindProduct?.status || '',
    colors: {
      primary: colors?.primary || '',
      secondary: colors?.secondary || '',
      accent: colors?.accent || '',
      background: theme?.background || '',
    },
  };

  return (
    <Providers defaultProductTheme={productTheme}>
      {children}
    </Providers>
  );
}