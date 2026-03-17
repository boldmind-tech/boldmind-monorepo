import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  platform: 'neutral',
  treeshake: true,
  external: [
    '@boldmind/utils',
    'posthog-js',
    'mixpanel-browser',
    'react',
    'react-dom',
    'next',
  ],
});