import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/social/index.ts',
    'src/styles/theme.ts',
    'src/constants/index.ts'
  ],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'next'],
  skipNodeModulesBundle: true,
  minify: false,
  target: 'es2020',
});