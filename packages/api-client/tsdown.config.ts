import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  external: [
    '@boldmind/auth',
    '@boldmind/utils',
    '@boldmind/config',
    '@supabase/supabase-js',
    'axios',
    'next',
    'react'
  ],
  platform: 'neutral',
  treeshake: true,
});