const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  transpilePackages: [
    '@boldmind/ui',
    '@boldmind/utils',
    '@boldmind/auth',
    '@boldmind/database',
  ],

  experimental: {
    serverComponentsExternalPackages: ['mongoose', 'mongodb'],
    outputFileTracingRoot: path.join(__dirname, '../../')
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