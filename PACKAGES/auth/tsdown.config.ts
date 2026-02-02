import { defineConfig } from 'tsdown';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: { build: false },
    clean: false,
    minify: false,
    external: [
      '@supabase/supabase-js',
      '@supabase/auth-js',
      'react',
      'next'
    ],
    platform: 'neutral',
    treeshake: true,
    banner: {
      js: '"use client";',
    },
  },
  {
    entry: ['src/server.ts'],
    format: ['cjs', 'esm'],
    dts: { build: false },
    clean: false,
    minify: false,
    external: [
      '@supabase/supabase-js',
      '@supabase/auth-js',
      'react',
      'next'
    ],
    platform: 'neutral',
    treeshake: true,
  },
]);