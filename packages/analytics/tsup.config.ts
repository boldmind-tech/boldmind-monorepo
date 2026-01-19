import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    'posthog-js',
    'mixpanel-browser',
    '@boldmind/utils'  // Add this!
  ],
  skipNodeModulesBundle: true,
  minify: false,
  target: 'es2020',
});