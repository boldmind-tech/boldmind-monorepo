// next.config.js   ← keep as .js, but use ESM syntax
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Critical for monorepo workspace deps resolution on Vercel
  outputFileTracingRoot: path.join(__dirname, '../../'), // points to monorepo root

  transpilePackages: [
    '@boldmind/ui',
    '@boldmind/utils',
    '@boldmind/auth',
    '@boldmind/database',
    '@boldmind/api-client',
    '@boldmind/payments',
    '@boldmind/ai',
    '@boldmind/seo',
    '@boldmind/analytics',
    // ← add any others your app imports
  ],

  experimental: {
    serverComponentsExternalPackages: ['mongoose', 'mongodb'],
    // remove outputFileTracingRoot from here — it's top-level now
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

  // Optional: if you want standalone output later (good for Docker/self-host)
  // output: 'standalone',
};

export default nextConfig;