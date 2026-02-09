'use client';

import { ThemeProvider, type ProductThemeType } from '@boldmind/ui';

interface ProvidersProps {
  children: React.ReactNode;
  defaultProductTheme?: ProductThemeType;
}

export function Providers({ children, defaultProductTheme }: ProvidersProps) {
  const themeProviderProps = {
    defaultTheme: "dark" as const,
    defaultDyslexia: false,
    ...(defaultProductTheme && { defaultProduct: defaultProductTheme }),
    ...(defaultProductTheme?.slug && { forceProductSlug: defaultProductTheme.slug }),
  };

  return (
    <ThemeProvider {...themeProviderProps}>
        {children}
    </ThemeProvider>
  );
}