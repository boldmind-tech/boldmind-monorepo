import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  external: [
    '@boldmind/utils',
    'react',
    'react-dom',
    'next',
    'clsx',
    'framer-motion',
    'lucide-react',
    'tailwind-merge',
    'tw-animate-css',
    'react-hot-toast'
  ],
  platform: 'neutral',
  treeshake: true,
});