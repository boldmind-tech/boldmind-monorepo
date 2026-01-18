// apps/web/boldmind-hub/next.config.js
// Updated for Vercel deployment
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@boldmind/ui', '@boldmind/utils', '@boldmind/seo', '@boldmind/analytics'],
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: [], // Empty to avoid deprecation warning
  },
}

export default nextConfig