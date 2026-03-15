// PACKAGES/config/src/tailwind/base.config.ts
// UNIVERSAL BASE CONFIG - ALL APPS EXTEND THIS
// This ensures consistency across the entire BoldMind ecosystem

import type { Config } from 'tailwindcss';

/**
 * Base Tailwind configuration for BoldMind ecosystem
 * All product-specific configs should extend this
 * 
 * Usage in your app:
 * export default {
 *   ...baseConfig,
 *   content: ['./app/**\/*.{js,ts,jsx,tsx}'],
 *   // Your app-specific overrides
 * }
 */
const baseConfig: Partial<Config> = {
    darkMode: ['class', '[data-theme="dark"]'],

    theme: {
        extend: {
            // === OPENDYSLEXIC FONT FAMILY (ALWAYS) ===
            fontFamily: {
                sans: ['var(--font-primary)', 'OpenDyslexic', 'Comic Sans MS', 'Arial', 'sans-serif'],
                serif: ['var(--font-serif)', 'Lora', 'Georgia', 'serif'],
                mono: ['var(--font-mono)', 'JetBrains Mono', 'Courier New', 'monospace'],
            },

            // === PRODUCT-AWARE COLORS ===
            colors: {
                // Main product colors (CSS variables)
                primary: 'var(--product-primary)',
                secondary: 'var(--product-secondary)',
                accent: 'var(--product-accent)',
                background: 'var(--product-background)',
                foreground: 'var(--product-foreground)',
                muted: 'var(--product-muted)',

                // Status colors (consistent across all products)
                success: {
                    DEFAULT: 'var(--color-success)',
                    light: 'var(--color-success-light)',
                },
                warning: {
                    DEFAULT: 'var(--color-warning)',
                    light: 'var(--color-warning-light)',
                },
                error: {
                    DEFAULT: 'var(--color-error)',
                    light: 'var(--color-error-light)',
                },
                info: {
                    DEFAULT: 'var(--color-info)',
                    light: 'var(--color-info-light)',
                },

                // Neutral palette (consistent)
                neutral: {
                    50: 'var(--neutral-50)',
                    100: 'var(--neutral-100)',
                    200: 'var(--neutral-200)',
                    300: 'var(--neutral-300)',
                    400: 'var(--neutral-400)',
                    500: 'var(--neutral-500)',
                    600: 'var(--neutral-600)',
                    700: 'var(--neutral-700)',
                    800: 'var(--neutral-800)',
                    900: 'var(--neutral-900)',
                    950: 'var(--neutral-950)',
                }
            },

            // === MODERN SPACING SCALE ===
            spacing: {
                xs: 'var(--space-xs)',
                sm: 'var(--space-sm)',
                md: 'var(--space-md)',
                lg: 'var(--space-lg)',
                xl: 'var(--space-xl)',
                '2xl': 'var(--space-2xl)',
                '3xl': 'var(--space-3xl)',
            },

            // === SOPHISTICATED BORDER RADIUS ===
            borderRadius: {
                xs: 'var(--radius-xs)',
                sm: 'var(--radius-sm)',
                DEFAULT: 'var(--radius-md)',
                md: 'var(--radius-md)',
                lg: 'var(--radius-lg)',
                xl: 'var(--radius-xl)',
                '2xl': 'var(--radius-2xl)',
                full: 'var(--radius-full)',
            },

            // === REFINED SHADOWS ===
            boxShadow: {
                xs: 'var(--shadow-xs)',
                sm: 'var(--shadow-sm)',
                DEFAULT: 'var(--shadow-md)',
                md: 'var(--shadow-md)',
                lg: 'var(--shadow-lg)',
                xl: 'var(--shadow-xl)',
                '2xl': 'var(--shadow-2xl)',
                inner: 'var(--shadow-inner)',
                none: 'none',
            },

            // === SMOOTH TRANSITIONS ===
            transitionDuration: {
                quick: '150ms',
                DEFAULT: '250ms',
                base: '250ms',
                slow: '400ms',
            },

            transitionTimingFunction: {
                DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
                smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
                spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            },

            // === MODERN ANIMATIONS ===
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
                'spin-slow': 'spin 3s linear infinite',
            },

            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                scaleIn: {
                    '0%': {
                        opacity: '0',
                        transform: 'scale(0.95)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'scale(1)',
                    },
                },
            },

            // === ENHANCED TYPOGRAPHY ===
            fontSize: {
                xs: ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
                sm: ['0.9375rem', { lineHeight: '1.6', letterSpacing: '0.02em' }],
                base: ['1.0625rem', { lineHeight: '1.8', letterSpacing: '0.03em' }],
                lg: ['1.125rem', { lineHeight: '1.75', letterSpacing: '0.02em' }],
                xl: ['1.25rem', { lineHeight: '1.7', letterSpacing: '0.02em' }],
                '2xl': ['1.5rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
                '3xl': ['1.875rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
                '4xl': ['2.25rem', { lineHeight: '1.3', letterSpacing: '0em' }],
                '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
                '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
                '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
            },

            // === BACKDROP BLUR ===
            backdropBlur: {
                xs: '2px',
                sm: '4px',
                DEFAULT: '16px',
                md: '16px',
                lg: '24px',
                xl: '40px',
            },

            // === Z-INDEX SCALE ===
            zIndex: {
                dropdown: '1000',
                sticky: '1020',
                fixed: '1030',
                modal: '1040',
                popover: '1050',
                tooltip: '1060',
            },
        },
    },

    plugins: [
        // Line clamp plugin
        function ({ addUtilities }: any) {
            const lineClampUtilities: Record<string, any> = {};
            for (let i = 1; i <= 6; i++) {
                lineClampUtilities[`.line-clamp-${i}`] = {
                    overflow: 'hidden',
                    display: '-webkit-box',
                    '-webkit-box-orient': 'vertical',
                    '-webkit-line-clamp': `${i}`,
                };
            }
            addUtilities(lineClampUtilities);
        },
    ],
};

export default baseConfig;