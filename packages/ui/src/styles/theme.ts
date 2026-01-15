export const boldmindColors = {
  // Primary Brand Colors
  primary: {
    50: '#e6f7ff',
    100: '#b3e0ff',
    200: '#80c9ff',
    300: '#4db2ff',
    400: '#1a9bff',
    500: '#0084ff', // Main Blue
    600: '#0066cc',
    700: '#004d99',
    800: '#003366',
    900: '#001a33',
  },
  
  // AmeboGist Colors (Green theme)
  amebo: {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#00A859', // Main Green
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
  },
  
  // EduCenter Colors (Blue theme)
  educenter: {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2A4A6E', // Main Blue
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
  },
  
  // BoldMind OS Colors (Red/Orange theme)
  os: {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#E63946', // Main Red
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
  },
  
  // Social Factory Colors (Purple theme)
  social: {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9C27B0', // Main Purple
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
  },
  
  // Accent Colors
  accent: {
    yellow: '#FFC800',
    orange: '#FF5722',
    pink: '#FF4081',
    teal: '#009688',
    indigo: '#3F51B5',
  }
};

export const boldmindTypography = {
  fonts: {
    heading: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
    dyslexic: "'OpenDyslexic', 'Comic Sans MS', sans-serif",
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
  }
};

export const boldmindAnimations = {
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
  keyframes: {
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    pulse: {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.5 },
    },
    shimmer: {
      '0%': { backgroundPosition: '-200% 0' },
      '100%': { backgroundPosition: '200% 0' },
    }
  }
};

// FIXED: Use Record type for productThemes
export type ProductThemeValue = {
  primary: string;
  secondary: string;
  background: string;
};

export const productThemes: Record<string, ProductThemeValue> = {
  'boldmind-hub': {
    primary: boldmindColors.primary[500],
    secondary: boldmindColors.accent.yellow,
    background: 'linear-gradient(135deg, #00143C 0%, #2A4A6E 100%)',
  },
  'amebogist': {
    primary: boldmindColors.amebo[500],
    secondary: boldmindColors.accent.yellow,
    background: 'linear-gradient(135deg, #00A859 0%, #007A3D 100%)',
  },
  'educenter': {
    primary: boldmindColors.educenter[500],
    secondary: boldmindColors.primary[500],
    background: 'linear-gradient(135deg, #2A4A6E 0%, #1A3452 100%)',
  },
  'boldmind-os': {
    primary: boldmindColors.os[500],
    secondary: boldmindColors.accent.yellow,
    background: 'linear-gradient(135deg, #E63946 0%, #B91C1C 100%)',
  },
  'naija-fither': {
    primary: '#FF4081',
    secondary: '#9C27B0',
    background: 'linear-gradient(135deg, #FF4081 0%, #E91E63 100%)',
  },
  'emailscraper-pro': {
    primary: '#2196F3',
    secondary: '#FFFFFF',
    background: 'linear-gradient(135deg, #2196F3 0%, #0D47A1 100%)',
  },
  'safe-ai': {
    primary: '#FF5722',
    secondary: '#FFFFFF',
    background: 'linear-gradient(135deg, #FF5722 0%, #D84315 100%)',
  },
  'planai': {
    primary: '#9C27B0',
    secondary: '#FFFFFF',
    background: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)',
  },
};

// Helper functions
export function getProductTheme(slug: string): ProductThemeValue {
  return productThemes[slug] || productThemes['boldmind-hub'];
}

export function getProductColors(slug: string) {
  const theme = getProductTheme(slug);
  return {
    primary: theme.primary,
    secondary: theme.secondary,
    accent: theme.primary,
    background: theme.background,
  };
}

export type ProductTheme = keyof typeof productThemes;