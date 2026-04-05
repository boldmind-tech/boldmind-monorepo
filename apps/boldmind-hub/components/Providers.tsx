//APPS/web/boldmind-hub/components/Providers.tsx - FIXED FOR exactOptionalPropertyTypes
'use client';

import { AuthProvider } from '@boldmind/auth';
import { ThemeProvider, type ProductThemeType } from '@boldmind/ui';

interface ProvidersProps {
  children: React.ReactNode;
  defaultProductTheme?: ProductThemeType;
}

export function Providers({ children, defaultProductTheme }: ProvidersProps) {
  // Only pass props if they have actual values (not undefined)
  const themeProviderProps = {
    defaultTheme: "dark" as const,
    defaultDyslexia: false,
    ...(defaultProductTheme && { defaultProduct: defaultProductTheme }),
    ...(defaultProductTheme?.slug && { forceProductSlug: defaultProductTheme.slug }),
  };

  return (
    <ThemeProvider {...themeProviderProps}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
}