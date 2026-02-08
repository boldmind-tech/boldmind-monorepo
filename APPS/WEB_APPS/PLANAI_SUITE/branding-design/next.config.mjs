import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  basePath: '/branding',

  transpilePackages: [
    '@boldmind/ui',
    '@boldmind/utils',
    '@boldmind/auth',
    '@boldmind/api-client',
    '@boldmind/analytics',
    '@boldmind/config',
  ],

  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../../../')
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: 'localhost' },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  output: 'standalone',
};

export default nextConfig;