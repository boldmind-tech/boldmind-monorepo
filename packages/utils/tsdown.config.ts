import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    index:           'src/index.ts',
    domains:         'src/constants/domains.ts',
    'database-config': 'src/constants/database-config.ts'
  },
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  platform: 'neutral',
  treeshake: true,
  external: [
    'axios',
    'cookie',
    'date-fns',
  ],
});