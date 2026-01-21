const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  transpilePackages: [
    '@boldmind/ui',
    '@boldmind/utils',
    '@boldmind/auth',
    '@boldmind/database',
    '@boldmind/api-client',
    '@boldmind/payments',
    '@boldmind/ai',
    // add others as needed
  ],

  outputFileTracingRoot: path.join(__dirname, '../../'), // ← critical for Vercel to trace workspace deps

  experimental: {
    serverComponentsExternalPackages: ['mongoose', 'mongodb'],
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
};

module.exports = nextConfig;