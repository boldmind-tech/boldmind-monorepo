import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    index:  'src/index.ts',   // React AuthProvider, useAuth, SSO helpers
    server: 'src/server.ts',  // Edge middleware guard (no React imports)
  },
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  platform: 'neutral',
  treeshake: true,
  external: [
    '@boldmind/config',
    '@boldmind/utils',
    'cookie',
    'react',
    'react-dom',
    'next',
    'next/server',
    'next/headers',
  ],
});