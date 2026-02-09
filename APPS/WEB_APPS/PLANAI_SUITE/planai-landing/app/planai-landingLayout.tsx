// apps/web/boldmind-hub/app/boldmindLayout.tsx - FIXED VERSION
'use client';

import { Providers } from '../components/Providers';
import { productThemes, getProductColors } from '@boldmind/utils';
import type { ProductThemeType } from '@boldmind/ui';
import { ReactNode } from 'react';

interface PlanaiLandingLayoutProps {
  children: ReactNode;
}

export function PlanaiLandingLayout({ children }: PlanaiLandingLayoutProps) {
  const forceProduct = 'planai-suite';


  // Get theme colors
  const colors = getProductColors(forceProduct);
  const theme = productThemes[forceProduct] || productThemes['planai-suite'];

  // Create ProductThemeType object with correct structure
  const productTheme: ProductThemeType = {
    slug: 'planai-suite',
    name: 'Planai Suite',
    description: 'Planai Suite the gateway to boldmind planai product',
    icon: '',
    status: 'Live',
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