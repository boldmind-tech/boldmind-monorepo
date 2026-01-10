import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: false,  // Turn off TypeScript declarations
  splitting: false,
  sourcemap: false,
  clean: true,
  external: ['react', 'react-dom', 'next'],
  skipNodeModulesBundle: true,
  minify: false,
  target: 'es2020',
  outDir: 'dist'
});