'use client';

import { ThemeProvider } from '@boldmind/ui';
import { AuthProvider } from '@boldmind/auth';
import type { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider forceProductSlug="amebo-studio">
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
}
