"use client";

import { AuthProvider } from "@boldmind/auth";
import { ThemeProvider } from "@boldmind/ui";
import { Toaster } from "sonner";
import { BOLDMIND_PRODUCTS, productThemes } from "@boldmind/utils";

export function Providers({ children }: { children: React.ReactNode }) {
  const forceProduct = "amebogist";
  
  // Get product theme
  const theme = productThemes[forceProduct] || productThemes['boldmind-hub'];
  
  const productTheme = {
    slug: forceProduct,
    name: "AmeboGist",
    description: "Nigeria's #1 Gist Hub",
    icon: "🔥",
    status: "LIVE" as const,
    colors: {
      primary: theme.primary,
      secondary: theme.secondary,
      accent: theme.primary,
      background: theme.background,
    },
    // Mock product if not found in BOLDMIND_PRODUCTS
    product: BOLDMIND_PRODUCTS.find(p => p.slug === forceProduct) || ({} as any)
  };

  return (
    <ThemeProvider defaultProduct={productTheme}>
      <AuthProvider>
        {children}
        <Toaster position="top-right" richColors />
      </AuthProvider>
    </ThemeProvider>
  );
}
